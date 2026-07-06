"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const { performance } = require('perf_hooks');

// Begin Startup Measurement
const startupStart = performance.now();
const startupStartTimestamp = new Date().toISOString();
console.log(`[Startup] Process spawned (PID: ${process.pid}) - Passenger Cold Start Init`);

// Global event handlers to prevent crash/503 on unhandled exceptions
process.on('uncaughtException', (err) => {
    console.error('[Process] Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('[Process] Unhandled Rejection at:', promise, 'reason:', reason);
});

// Lazy-loaded dependencies getters
let prismaInstance = null;
function getPrisma() {
    if (!prismaInstance) {
        const { PrismaClient } = require("@prisma/client");
        const { PrismaNeonHTTP } = require("@prisma/adapter-neon");
        const connectionString = process.env.DATABASE_URL || '';
        const adapter = new PrismaNeonHTTP(connectionString, {});
        prismaInstance = new PrismaClient({ adapter });
    }
    return prismaInstance;
}

let cloudinaryV2Instance = null;
function getCloudinaryV2() {
    if (!cloudinaryV2Instance) {
        const cloudinary = require("cloudinary");
        cloudinary.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
        cloudinaryV2Instance = cloudinary.v2;
    }
    return cloudinaryV2Instance;
}

let jwtInstance = null;
function getJwt() {
    if (!jwtInstance) {
        jwtInstance = __importDefault(require("jsonwebtoken")).default;
    }
    return jwtInstance;
}

let bcryptInstance = null;
function getBcrypt() {
    if (!bcryptInstance) {
        bcryptInstance = __importDefault(require("bcryptjs")).default;
    }
    return bcryptInstance;
}

let geminiInstance = null;
function getGemini() {
    if (!geminiInstance) {
        geminiInstance = require("@google/generative-ai");
    }
    return geminiInstance;
}

let pdfkitInstance = null;
function getPdfkit() {
    if (!pdfkitInstance) {
        pdfkitInstance = require("pdfkit");
    }
    return pdfkitInstance;
}

const hostingerPort = process.env.PORT;
const PORT = hostingerPort || process.env.PORT || 3000;
let app;
try {
    // Determine project root directory cleanly
    let projectRoot = process.cwd();
    if (!fs_1.default.existsSync(path_1.default.join(projectRoot, 'package.json')) || !fs_1.default.existsSync(path_1.default.join(projectRoot, 'backend'))) {
        // Fallback: traverse up from current file
        projectRoot = path_1.default.resolve(__dirname, '../..');
        if (!fs_1.default.existsSync(path_1.default.join(projectRoot, 'package.json'))) {
            projectRoot = path_1.default.resolve(__dirname, '..');
        }
    }
    
    const frontendPath = path_1.default.join(projectRoot, 'frontend/dist');

    const envPath = path_1.default.join(projectRoot, 'backend/.env');
    let envLoaded = false;
    if (fs_1.default.existsSync(envPath)) {
        dotenv_1.default.config({ path: envPath });
        envLoaded = true;
        console.log(`[Startup] Loaded environment variables from: ${envPath}`);
    } else {
        const rootEnvPath = path_1.default.join(projectRoot, '.env');
        if (fs_1.default.existsSync(rootEnvPath)) {
            dotenv_1.default.config({ path: rootEnvPath });
            envLoaded = true;
            console.log(`[Startup] Loaded environment variables from: ${rootEnvPath}`);
        }
    }
    if (!envLoaded) {
        dotenv_1.default.config();
        console.log(`[Startup] Attempted loading environment variables with default dotenv.config()`);
    }

    // Validate critical database environment variable to prevent silent hangs/crashes
    if (!process.env.DATABASE_URL) {
        throw new Error(`DATABASE_URL environment variable is missing! ` +
            `Please ensure this is set in your hosting control panel or in a .env file.`);
    }

    // Check and log warnings for other auxiliary environment variables
    const optionalEnv = [
        'CLOUDINARY_CLOUD_NAME',
        'CLOUDINARY_API_KEY',
        'CLOUDINARY_API_SECRET',
        'JWT_SECRET',
        'GEMINI_API_KEY'
    ];
    const missingOptional = optionalEnv.filter(name => !process.env[name]);
    if (missingOptional.length > 0) {
        console.warn(`[Startup] WARNING: Missing auxiliary environment variables: ${missingOptional.join(', ')}`);
    }

    app = (0, express_1.default)();
    
    // Request/Response logging middleware
    app.use((req, res, next) => {
        const reqStart = performance.now();
        const { method, path: reqPath } = req;
        console.log(`[Request] ${method} ${reqPath} - Received`);
        
        res.on('finish', () => {
            const duration = performance.now() - reqStart;
            const memory = process.memoryUsage();
            console.log(`[Response] ${method} ${reqPath} - Status: ${res.statusCode} - Duration: ${duration.toFixed(2)}ms - RAM: ${(memory.rss / 1024 / 1024).toFixed(2)}MB`);
        });
        
        next();
    });

    // Maintenance Mode Middleware
    app.use((req, res, next) => {
        if (process.env.MAINTENANCE_MODE === 'true') {
            // Bypass API health check
            if (req.path === '/api/ping') {
                return next();
            }
            // Allow loading site logo and favicon so the maintenance page displays them
            const allowedPublicAssets = ['/logo.png', '/favicon.ico'];
            if (allowedPublicAssets.includes(req.path)) {
                return next();
            }
            // Block all other API requests with 503 Service Unavailable
            if (req.path.startsWith('/api/')) {
                res.status(503).json({
                    status: 'Maintenance',
                    message: 'Planet Life is currently undergoing scheduled maintenance. Please try again later.'
                });
                return;
            }
            // Serve the self-contained maintenance page for all other paths
            res.sendFile(path_1.default.join(frontendPath, 'maintenance.html'));
            return;
        }
        next();
    });

    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use((0, express_fileupload_1.default)({ useTempFiles: true }));

    const verifyToken = (req, res, next) => {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }
        try {
            getJwt().verify(token, process.env.JWT_SECRET);
            next();
        }
        catch (e) {
            res.status(401).json({ message: 'Unauthorized' });
        }
    };

    // --- AUTH ---
    app.post('/api/auth/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: 'Missing credentials' });
            return;
        }
        try {
            const admin = yield getPrisma().admin.findUnique({ where: { email } });
            if (!admin) {
                res.status(401).json({ message: 'Invalid credentials' });
                return;
            }
            const isValid = yield getBcrypt().compare(password, admin.passwordHash);
            if (!isValid) {
                res.status(401).json({ message: 'Invalid credentials' });
                return;
            }
            const token = getJwt().sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
            res.status(200).json({ token });
        }
        catch (error) {
            res.status(500).json({ message: 'Database error', error: error.message });
        }
    }));

    app.post('/api/auth/google', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { credential } = req.body;
        if (!credential) {
            res.status(400).json({ message: 'Missing Google credential' });
            return;
        }
        try {
            const googleRes = yield fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`);
            if (!googleRes.ok) {
                res.status(401).json({ message: 'Invalid Google token' });
                return;
            }
            const payload = yield googleRes.json();
            const email = payload.email;
            
            if (email !== 'planetlifeweb@gmail.com') {
                res.status(403).json({ message: 'Access denied: This email is not authorized for the admin panel.' });
                return;
            }
            
            const admin = yield getPrisma().admin.findUnique({ where: { email } });
            if (!admin) {
                res.status(401).json({ message: 'Unauthorized Google account' });
                return;
            }
            
            const token = getJwt().sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
            res.status(200).json({ token });
        }
        catch (error) {
            res.status(500).json({ message: 'Server error during Google auth', error: error.message });
        }
    }));

    // --- HEALTH CHECK / KEEP-ALIVE ---
    app.get('/api/ping', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // A tiny query to keep the Neon database awake
            yield getPrisma().$queryRaw `SELECT 1`;
            res.status(200).json({ message: 'pong', db: 'connected', timestamp: new Date().toISOString() });
        }
        catch (error) {
            res.status(500).json({ message: 'pong', db: 'error', timestamp: new Date().toISOString() });
        }
    }));

    // --- CACHE ---
    let destinationsCache = null;

    // --- DESTINATIONS ---
    app.get('/api/destinations', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (destinationsCache) {
            res.status(200).json(destinationsCache);
            return;
        }
        try {
            const destinations = yield getPrisma().destination.findMany({
                include: { packages: { include: { itinerary: { orderBy: { day: 'asc' } } } } },
                orderBy: { name: 'asc' },
            });
            destinationsCache = destinations;
            res.status(200).json(destinations);
        }
        catch (error) {
            res.status(500).json({ message: 'Database error', error: error.message });
        }
    }));

    app.post('/api/destinations', verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        try {
            yield getPrisma().destination.create({
                data: {
                    id: data.id, name: data.name, country: data.country, description: data.description,
                    image: data.image, video: data.video, featured: data.featured || false,
                    whyVisit: data.whyVisit || [], adventureImages: data.adventureImages || []
                }
            });
            for (const pkg of (data.packages || [])) {
                yield getPrisma().package.create({
                    data: {
                        id: pkg.id, duration: pkg.duration, nights: pkg.nights, days: pkg.days,
                        price: pkg.price, image: pkg.image, inclusions: pkg.inclusions || [],
                        destinationId: data.id
                    }
                });
                for (const day of (pkg.itinerary || [])) {
                    yield getPrisma().dayItinerary.create({
                        data: {
                            day: day.day, title: day.title, description: day.description, activities: day.activities || [],
                            packageId: pkg.id
                        }
                    });
                }
            }
            const newDest = yield getPrisma().destination.findUnique({
                where: { id: data.id },
                include: { packages: { include: { itinerary: { orderBy: { day: 'asc' } } } } }
            });
            destinationsCache = null;
            res.status(201).json(newDest);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }));

    app.get('/api/destinations/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const destination = yield getPrisma().destination.findUnique({
                where: { id },
                include: { packages: { include: { itinerary: { orderBy: { day: 'asc' } } } } },
            });
            if (!destination) {
                res.status(404).json({ message: 'Not found' });
                return;
            }
            res.status(200).json(destination);
        }
        catch (error) {
            res.status(500).json({ message: 'Database error', error: error.message });
        }
    }));

    app.put('/api/destinations/:id', verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        try {
            yield getPrisma().package.deleteMany({ where: { destinationId: id } });
            yield getPrisma().destination.update({
                where: { id },
                data: {
                    name: data.name, country: data.country, description: data.description,
                    image: data.image, video: data.video, featured: data.featured || false,
                    whyVisit: data.whyVisit || [], adventureImages: data.adventureImages || []
                }
            });
            for (const pkg of (data.packages || [])) {
                yield getPrisma().package.create({
                    data: {
                        id: pkg.id, duration: pkg.duration, nights: pkg.nights, days: pkg.days,
                        price: pkg.price, image: pkg.image, inclusions: pkg.inclusions || [],
                        destinationId: id
                    }
                });
                for (const day of (pkg.itinerary || [])) {
                    yield getPrisma().dayItinerary.create({
                        data: {
                            day: day.day, title: day.title, description: day.description, activities: day.activities || [],
                            packageId: pkg.id
                        }
                    });
                }
            }
            const updatedDest = yield getPrisma().destination.findUnique({
                where: { id },
                include: { packages: { include: { itinerary: { orderBy: { day: 'asc' } } } } }
            });
            destinationsCache = null;
            res.status(200).json(updatedDest);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }));

    app.delete('/api/destinations/:id', verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield getPrisma().destination.delete({ where: { id: req.params.id } });
            destinationsCache = null;
            res.status(200).json({ message: 'Deleted successfully' });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }));

    // --- CONTENT ---
    const contentCache = {};
    app.get('/api/content/:page', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { page } = req.params;
        if (contentCache[page]) {
            res.status(200).json(contentCache[page]);
            return;
        }
        try {
            const content = yield getPrisma().pageContent.findUnique({ where: { page } });
            const responseData = content || { page, data: {} };
            contentCache[page] = responseData;
            res.status(200).json(responseData);
        }
        catch (error) {
            res.status(500).json({ message: 'Database error', error: error.message });
        }
    }));

    app.put('/api/content/:page', verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { page } = req.params;
        const data = req.body;
        try {
            const updatedContent = yield getPrisma().pageContent.upsert({
                where: { page },
                update: { data },
                create: { page, data },
            });
            contentCache[page] = updatedContent;
            res.status(200).json(updatedContent);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }));

    // --- UPLOAD ---
    app.post('/api/upload', verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.files || !req.files.file) {
            res.status(400).json({ message: 'No file provided' });
            return;
        }
        const file = Array.isArray(req.files.file) ? req.files.file[0] : req.files.file;
        const folder = req.body.folder || 'planet_life/media';
        try {
            const result = yield getCloudinaryV2().uploader.upload(file.tempFilePath, {
                folder: folder,
                resource_type: 'auto',
            });
            res.status(200).json({ url: result.secure_url, public_id: result.public_id });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }));

    // --- DOCUMENT PARSING WITH GEMINI ---
    app.post('/api/parse-package-document', verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!process.env.GEMINI_API_KEY) {
            res.status(400).json({
                message: 'Gemini API key is not configured. Please add GEMINI_API_KEY to your backend .env file to enable automatic document parsing.'
            });
            return;
        }
        let text = '';
        try {
            if (req.body && req.body.text) {
                text = req.body.text;
            } else if (req.files && req.files.file) {
                const file = Array.isArray(req.files.file) ? req.files.file[0] : req.files.file;
                const ext = path_1.default.extname(file.name).toLowerCase();
                if (ext === '.docx') {
                    const mammoth = require('mammoth');
                    const mammothLib = mammoth.extractRawText ? mammoth : (mammoth.default || mammoth);
                    const result = yield mammothLib.extractRawText({ path: file.tempFilePath });
                    text = result.value;
                }
                else if (ext === '.pdf') {
                    const pdfParse = require('pdf-parse');
                    const dataBuffer = fs_1.default.readFileSync(file.tempFilePath);
                    const parsePdf = typeof pdfParse === 'function' ? pdfParse : (pdfParse.default || pdfParse);
                    if (typeof parsePdf === 'function') {
                        const pdfData = yield parsePdf(dataBuffer);
                        text = pdfData.text;
                    }
                    else if (parsePdf && parsePdf.PDFParse) {
                        const instance = new parsePdf.PDFParse({ data: dataBuffer });
                        const pdfData = yield instance.getText();
                        text = pdfData.text;
                    }
                    else {
                        throw new Error('PDF parsing library was loaded but is not in a recognized format.');
                    }
                }
                else if (ext === '.txt' || ext === '.md' || ext === '.json') {
                    text = fs_1.default.readFileSync(file.tempFilePath, 'utf8');
                }
                else {
                    res.status(400).json({ message: `Unsupported file type: ${ext}. Please upload a .docx, .pdf, or .txt file.` });
                    return;
                }
            } else {
                res.status(400).json({ message: 'No file or text provided' });
                return;
            }
            if (!text || text.trim().length === 0) {
                res.status(400).json({ message: 'The uploaded document is empty or could not be parsed.' });
                return;
            }
            const genAI = new (getGemini().GoogleGenerativeAI)(process.env.GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({
                model: 'gemini-flash-latest',
                generationConfig: { responseMimeType: 'application/json' }
            });
            const prompt = `
You are an expert travel assistant. Analyze the following document text which contains details of a travel package or itinerary, and extract the information in a structured JSON format.

JSON schema:
{
  "id": "url-friendly-slug-for-destination",
  "name": "Destination Name",
  "country": "Country Name",
  "description": "General description/overview of the destination",
  "whyVisit": ["Reason 1", "Reason 2", "Reason 3"],
  "packages": [
    {
      "duration": "e.g. 4 Nights 5 Days",
      "nights": 4,
      "days": 5,
      "price": 24999,
      "inclusions": ["Inclusion 1", "Inclusion 2"],
      "itinerary": [
        {
          "day": 1,
          "title": "Day title",
          "description": "Day description",
          "activities": ["Activity 1", "Activity 2"]
        }
      ]
    }
  ]
}

Ensure the output is ONLY valid JSON matching the schema above. If details like price are missing, use 0. If some fields are missing, infer them from the content where possible. Do not include any markdown backticks in the response.

Document text:
${text}
`;
            const response = yield model.generateContent(prompt);
            let resultText = response.response.text();
            
            // Fix: Strip markdown JSON blocks if Gemini returns them
            resultText = resultText.replace(/```json/g, '').replace(/```/g, '').trim();
            
            try {
                const parsedJSON = JSON.parse(resultText);
                res.status(200).json({ success: true, data: parsedJSON });
            }
            catch (jsonErr) {
                console.error("JSON Parse Error:", jsonErr, "Raw Text:", resultText);
                res.status(500).json({
                    message: 'Failed to parse Gemini response as JSON.',
                    rawResponse: resultText
                });
            }
        }
        catch (error) {
            console.error("Parse Document Error:", error);
            res.status(500).json({ message: error.message });
        }
    }));

    // --- GENERATE ITINERARY PDF ROUTE ---
    app.post('/api/generate-itinerary-pdf', verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!process.env.GEMINI_API_KEY) {
            res.status(400).json({
                message: 'Gemini API key is not configured. Please add GEMINI_API_KEY to your backend .env file to enable PDF generation.'
            });
            return;
        }
        const { text } = req.body;
        if (!text || text.trim().length === 0) {
            res.status(400).json({ message: 'No itinerary text provided' });
            return;
        }
        try {
            console.log("[PDF Generation] Request received. Parsing text using Gemini...");
            const genAI = new (getGemini().GoogleGenerativeAI)(process.env.GEMINI_API_KEY);
            const generateContentWithFallback = (genAI, prompt, generationConfig) => __awaiter(void 0, void 0, void 0, function* () {
                const modelsToTry = [
                    'gemini-2.5-flash',
                    'gemini-2.0-flash',
                    'gemini-flash-latest',
                    'gemini-1.5-flash'
                ];
                let lastError = null;
                for (const modelName of modelsToTry) {
                    let retries = 2;
                    let delay = 1000;
                    while (retries > 0) {
                        try {
                            console.log(`[PDF Generation] Attempting to use model: ${modelName} (${retries} retries remaining)...`);
                            const model = genAI.getGenerativeModel({
                                model: modelName,
                                generationConfig: generationConfig
                            });
                            const response = yield model.generateContent(prompt);
                            const text = response.response.text();
                            if (text && text.trim().length > 0) {
                                console.log(`[PDF Generation] Success using model: ${modelName}`);
                                return text;
                            }
                        }
                        catch (err) {
                            lastError = err;
                            console.warn(`[PDF Generation] Warning with model ${modelName}:`, err.message || err);
                            const errMsg = String(err.message || err);
                            if (errMsg.includes('503') || errMsg.includes('429') || errMsg.includes('Unavailable') || errMsg.includes('demand')) {
                                retries--;
                                if (retries > 0) {
                                    yield new Promise(resolve => setTimeout(resolve, delay));
                                    delay *= 2;
                                    continue;
                                }
                            }
                            break;
                        }
                    }
                }
                throw lastError || new Error("All Gemini models failed to generate content.");
            });
            const prompt = `
You are an expert travel assistant. Analyze the following document text which contains details of a travel package or itinerary, and extract/generate the information in a structured JSON format.
Ensure you infer details if they are missing:
1. Slogan: Generate a creative, premium 3-5 word slogan for the destination place.
2. Weather prediction: Generate average highest and lowest temperatures.
3. Local pick-up: Extract or infer the main pick-up location.
4. Destinations: A comma-separated list of the key areas covered.
5. Accommodation: Realistic, premium-sounding 3-star or 4-star hotels and places.
6. Inclusions: Extract all inclusions from the text, and format them nicely.
7. Exclusions: Extract exclusions, or generate standard exclusions.
8. Package Cost: Generate a realistic cost table per head for different group sizes: 2 Pax, 4 Pax, 6 Pax, 8 Pax, 10 Pax, 12 Pax. 
9. Reviews: Extract or generate 3-4 realistic testimonials.

JSON schema:
{
  "id": "url-friendly-slug-for-destination",
  "name": "Destination Name (e.g. Goa)",
  "country": "Country Name",
  "description": "General description/overview of the destination",
  "slogan": "Slogan (3-5 words, uppercase)",
  "duration": "e.g. 2 Nights 3 Days",
  "nights": 2,
  "days": 3,
  "pickup": "Pick-up point name",
  "destinationsCovered": "Key areas covered",
  "weather": {
    "highest": "e.g. 37°C",
    "lowest": "e.g. 24°C"
  },
  "packages": [
    {
      "duration": "e.g. 2 Nights 3 Days",
      "nights": 2,
      "days": 3,
      "price": 10000,
      "inclusions": ["Inclusion 1", "Inclusion 2"],
      "exclusions": ["Exclusion 1", "Exclusion 2"],
      "itinerary": [
        {
          "day": 1,
          "title": "Day title",
          "description": "Day description",
          "activities": ["Activity 1", "Activity 2"]
        }
      ],
      "accommodation": [
        {
          "place": "Place name",
          "hotel": "Hotel Name"
        }
      ],
      "packageCost": [
        {
          "members": "2 Pax",
          "cost": "INR 10,000-/ Per Head"
        },
        {
          "members": "4 Pax",
          "cost": "INR 8,500-/ Per Head"
        },
        {
          "members": "6 Pax",
          "cost": "INR 7,000-/ Per Head"
        },
        {
          "members": "8 Pax",
          "cost": "INR 6,500-/ Per Head"
        },
        {
          "members": "10 Pax",
          "cost": "INR 5,500-/ Per Head"
        },
        {
          "members": "12 Pax",
          "cost": "INR 5,000-/ Per Head"
        }
      ]
    }
  ],
  "reviews": [
    {
      "name": "Guest/Family Name",
      "text": "Review text",
      "location": "DESTINATION"
    }
  ]
}

Ensure the output is ONLY valid JSON matching the schema above. Do not include any markdown backticks in the response.

Document text:
${text}
`;
            const resultTextRaw = yield generateContentWithFallback(genAI, prompt, { responseMimeType: 'application/json', temperature: 0.1 });
            let resultText = resultTextRaw.replace(/```json/g, '').replace(/```/g, '').trim();
            let data;
            try {
                data = JSON.parse(resultText);
            }
            catch (jsonErr) {
                const start = resultText.indexOf('{');
                if (start !== -1) {
                    let testText = resultText.substring(start);
                    let parsed = false;
                    for (let len = testText.length; len > 0; len--) {
                        if (testText[len - 1] === '}') {
                            try {
                                data = JSON.parse(testText.substring(0, len));
                                parsed = true;
                                break;
                            }
                            catch (inner) {
                                // continue
                            }
                        }
                    }
                    if (!parsed) {
                        console.error("JSON Parse Error after scanning:", jsonErr, "Raw Text:", resultText);
                        res.status(500).json({
                            message: 'Failed to parse Gemini response as JSON.',
                            rawResponse: resultText
                        });
                        return;
                    }
                } else {
                    console.error("JSON Parse Error (no opening brace):", jsonErr, "Raw Text:", resultText);
                    res.status(500).json({
                        message: 'Failed to parse Gemini response as JSON.',
                        rawResponse: resultText
                    });
                    return;
                }
            }

            // Determine project root directory cleanly
            let projectRoot = process.cwd();
            if (!fs_1.default.existsSync(path_1.default.join(projectRoot, 'package.json')) || !fs_1.default.existsSync(path_1.default.join(projectRoot, 'backend'))) {
                projectRoot = path_1.default.resolve(__dirname, '../..');
                if (!fs_1.default.existsSync(path_1.default.join(projectRoot, 'package.json'))) {
                    projectRoot = path_1.default.resolve(__dirname, '..');
                }
            }
            const logoPath = path_1.default.join(projectRoot, 'frontend/dist/logo.png');

            // Red & Black Website theme colors
            const primaryColor = '#DC2626';  // Vibrant Red
            const secondaryColor = '#111827';// Rich Black / dark charcoal
            const textColor = '#374151';     // Dark gray for legible body text
            
            let slogan = data.slogan || 'EXPLORE THE BEAUTY OF THE WORLD';

            const filename = `PL-${data.name.toUpperCase().replace(/\s+/g, '_')}-${data.duration.replace(/\s+/g, '_')}.pdf`;
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
            res.setHeader('x-filename', filename);
            res.setHeader('Access-Control-Expose-Headers', 'x-filename, Content-Disposition');

            const PDFKit = getPdfkit();
            const doc = new PDFKit({
                size: 'A4',
                margins: { top: 40, bottom: 40, left: 40, right: 40 },
                bufferPages: true
            });
            doc.pipe(res);

            // Set cover page bottom margin to 0 to prevent auto-addPage when drawing near the bottom
            doc.page.margins.bottom = 0;

            // PDF drawing helpers
            const drawHeader = (d, pageTitle) => {
                if (fs_1.default.existsSync(logoPath)) {
                    d.image(logoPath, 40, 8, { height: 34 });
                }
                d.fillColor(secondaryColor).fontSize(10).font('Helvetica-Bold');
                d.text(`PLANET LIFE | ${pageTitle.toUpperCase()}`, 300, 24, { width: 255, align: 'right' });
                d.strokeColor(primaryColor).lineWidth(1.5).moveTo(40, 48).lineTo(555, 48).stroke();
            };

            const drawTable = (d, headers, rows, startX, startY, columnWidths, defaultRowHeight = 26) => {
                let currentY = startY;
                
                // Calculate header row height dynamically
                let maxHeaderHeight = defaultRowHeight;
                headers.forEach((header, index) => {
                    const textH = d.heightOfString(header, { width: columnWidths[index] - 20 }) + 14;
                    if (textH > maxHeaderHeight) maxHeaderHeight = textH;
                });
                
                // Draw table header in Rich Black
                d.rect(startX, currentY, columnWidths.reduce((a, b) => a + b, 0), maxHeaderHeight).fill(secondaryColor);
                
                let currentX = startX;
                d.fillColor('#FFFFFF').fontSize(9.5).font('Helvetica-Bold');
                headers.forEach((header, index) => {
                    const textH = d.heightOfString(header, { width: columnWidths[index] - 20 });
                    d.text(header, currentX + 10, currentY + (maxHeaderHeight - textH) / 2, { width: columnWidths[index] - 20, align: 'left' });
                    currentX += columnWidths[index];
                });
                
                // Red bottom border for header
                d.strokeColor(primaryColor).lineWidth(1.5).moveTo(startX, currentY + maxHeaderHeight).lineTo(startX + columnWidths.reduce((a, b) => a + b, 0), currentY + maxHeaderHeight).stroke();
                
                currentY += maxHeaderHeight;
                
                // Draw rows
                rows.forEach((row, rowIndex) => {
                    // Calculate max cell height in this row dynamically
                    let maxCellHeight = defaultRowHeight;
                    row.forEach((cell, index) => {
                        const textH = d.heightOfString(String(cell), { width: columnWidths[index] - 20 }) + 14;
                        if (textH > maxCellHeight) maxCellHeight = textH;
                    });
                    
                    if (rowIndex % 2 === 0) {
                        d.rect(startX, currentY, columnWidths.reduce((a, b) => a + b, 0), maxCellHeight).fill('#F9FAFB');
                    }
                    else {
                        d.rect(startX, currentY, columnWidths.reduce((a, b) => a + b, 0), maxCellHeight).fill('#FFFFFF');
                    }
                    
                    // Table cell borders
                    d.rect(startX, currentY, columnWidths.reduce((a, b) => a + b, 0), maxCellHeight).strokeColor('#E5E7EB').lineWidth(0.5).stroke();
                    
                    let currentX = startX;
                    d.fillColor(textColor).fontSize(9.5).font('Helvetica');
                    row.forEach((cell, index) => {
                        const textH = d.heightOfString(String(cell), { width: columnWidths[index] - 20 });
                        d.text(String(cell), currentX + 10, currentY + (maxCellHeight - textH) / 2, { width: columnWidths[index] - 20, align: 'left' });
                        currentX += columnWidths[index];
                    });
                    currentY += maxCellHeight;
                });
                return currentY;
            };

            // Top block in Rich Black
            doc.rect(0, 0, doc.page.width, 140).fill(secondaryColor);
            
            // Draw logo in center of header
            if (fs_1.default.existsSync(logoPath)) {
                doc.image(logoPath, (doc.page.width - 80) / 2, 30, { height: 80 });
            }
            
            // Slogan in Red
            doc.fillColor(primaryColor).fontSize(13).font('Helvetica-Bold');
            const spacedSlogan = slogan.split('').join('  ').toUpperCase();
            doc.text(spacedSlogan, 40, 185, { align: 'center', width: doc.page.width - 80 });
            
            // Destination in large Rich Black font
            doc.fillColor(secondaryColor).fontSize(48).font('Helvetica-Bold');
            doc.text(data.name.toUpperCase(), 40, 220, { align: 'center', width: doc.page.width - 80 });
            
            // Red accent separator line
            doc.strokeColor(primaryColor).lineWidth(3.5).moveTo((doc.page.width - 120) / 2, 280).lineTo((doc.page.width + 120) / 2, 280).stroke();
            
            // Duration in subtitle
            doc.fillColor('#4B5563').fontSize(16).font('Helvetica');
            doc.text(data.duration || 'CUSTOM TOUR ITINERARY', 40, 295, { align: 'center', width: doc.page.width - 80 });
            
            // Beautiful centered details design box
            const boxY = 350;
            const boxW = 460;
            const boxX = (doc.page.width - boxW) / 2;
            
            // Dynamically calculate the box height boxH based on content lengths
            const destHeight = doc.heightOfString(data.destinationsCovered, { width: boxW - 250, font: 'Helvetica', size: 10 });
            const pickupHeight = doc.heightOfString(data.pickup || 'Airport / Station', { width: boxW - 250, font: 'Helvetica', size: 10 });
            const boxH = 150 + Math.max(destHeight, 15) + Math.max(pickupHeight, 15);
            
            // Draw borders and background using the dynamic boxH
            // Outer Rich Black, Inner Red
            doc.rect(boxX, boxY, boxW, boxH).lineWidth(2).strokeColor(secondaryColor).stroke();
            doc.rect(boxX + 5, boxY + 5, boxW - 10, boxH - 10).lineWidth(1).strokeColor(primaryColor).stroke();
            
            // Render light background
            doc.fillColor('#F9FAFB').rect(boxX + 6, boxY + 6, boxW - 12, boxH - 12).fill();
            
            // Draw text elements inside the box Y-aligned dynamically
            let boxContentY = boxY + 25;
            
            doc.fillColor(primaryColor).fontSize(14).font('Helvetica-Bold');
            doc.text('PLANET LIFE PREFERRED PARTNER', boxX, boxContentY, { align: 'center', width: boxW });
            boxContentY += 24;
            
            doc.fillColor(secondaryColor).fontSize(10.5).font('Helvetica-Oblique');
            doc.text('"Let us take you on a journey of a lifetime..."', boxX, boxContentY, { align: 'center', width: boxW });
            boxContentY += 22;
            
            // Decorative line
            doc.strokeColor('#E5E7EB').lineWidth(1).moveTo(boxX + 50, boxContentY).lineTo(boxX + boxW - 50, boxContentY).stroke();
            boxContentY += 15;
            
            // Destinations
            doc.fillColor(textColor).fontSize(10).font('Helvetica-Bold');
            doc.text('DESTINATIONS COVERED:', boxX + 40, boxContentY);
            doc.font('Helvetica');
            doc.text(data.destinationsCovered, boxX + 210, boxContentY, { width: boxW - 250 });
            boxContentY += Math.max(destHeight, 15) + 12;
            
            // Starting Point
            doc.fillColor(textColor).fontSize(10).font('Helvetica-Bold');
            doc.text('STARTING POINT:', boxX + 40, boxContentY);
            doc.font('Helvetica');
            doc.text(data.pickup || 'Airport / Station', boxX + 210, boxContentY, { width: boxW - 250 });
            boxContentY += Math.max(pickupHeight, 15) + 12;
            
            // Service Type
            doc.fillColor(textColor).fontSize(10).font('Helvetica-Bold');
            doc.text('SERVICE TYPE:', boxX + 40, boxContentY);
            doc.font('Helvetica');
            doc.text('Premium Private Customized Tour', boxX + 210, boxContentY, { width: boxW - 250 });
            
            // Bottom banner in Rich Black
            doc.rect(0, doc.page.height - 90, doc.page.width, 90).fill(secondaryColor);
            doc.fillColor('#FFFFFF').fontSize(11).font('Helvetica-Bold');
            doc.text('PLANET LIFE TRAVEL & TOURS', 40, doc.page.height - 70, { align: 'center', width: doc.page.width - 80 });
            doc.fillColor('#9CA3AF').fontSize(9.5).font('Helvetica');
            doc.text('Web: planetlifeholidays.com  |  Email: planetlifeweb@gmail.com  |  Phone: +91 99945 53297', 40, doc.page.height - 50, { align: 'center', width: doc.page.width - 80 });

            // PAGE 2: WELCOME TO PLANET LIFE
            doc.addPage({ margins: { top: 40, bottom: 40, left: 40, right: 40 } });
            drawHeader(doc, 'WELCOME TO PLANET LIFE');
            let welcomeY = 90;
            doc.fillColor(secondaryColor).fontSize(20).font('Helvetica-Bold').text('About Planet Life', 40, welcomeY);
            welcomeY += 26;
            doc.fillColor(textColor).fontSize(10.5).font('Helvetica').text('Founded in 2018, Planet Life has been a trusted name in the travel industry for the past six years. Based in South India, we specialize in customized travel experiences that focus on comfort, quality, and seamless execution at a reasonable price.', 40, welcomeY, { width: 515, align: 'justify', lineGap: 4 });
            welcomeY += 65;
            doc.text('Our expertise extends beyond leisure trips—we also cater to corporate tours, family vacations, honeymoon packages, college industrial visits, and group getaways. Whether you dream of exploring the diverse landscapes of India or venturing into international destinations, we make it happen with ease.', 40, welcomeY, { width: 515, align: 'justify', lineGap: 4 });
            welcomeY += 80;
            
            doc.fillColor(primaryColor).fontSize(14).font('Helvetica-Bold').text('Our Destinations:', 40, welcomeY);
            welcomeY += 24;
            
            const dests = [
                { title: 'India', desc: 'From the snow-capped Himalayas to the serene backwaters of Kerala' },
                { title: 'International', desc: 'Thailand, Maldives, Bali, Vietnam, Malaysia, Singapore, Dubai & Sri Lanka' }
            ];
            dests.forEach((d) => {
                doc.fillColor(primaryColor).fontSize(10.5).font('Helvetica-Bold').text('• ', 45, welcomeY);
                doc.fillColor(secondaryColor).font('Helvetica-Bold').text(`${d.title}: `, 60, welcomeY, { continued: true });
                doc.fillColor(textColor).font('Helvetica').text(d.desc);
                
                const combinedText = `${d.title}: ${d.desc}`;
                const textHeight = doc.heightOfString(combinedText, { width: 440, font: 'Helvetica', size: 10.5 });
                welcomeY += Math.max(textHeight, 20) + 8;
            });
            
            welcomeY += 20;
            doc.fillColor(textColor).fontSize(10).font('Helvetica').text('With highly curated itineraries, premium accommodations, and professional service, we ensure that every journey with us is memorable and hassle-free.', 40, welcomeY, { width: 515, align: 'justify' });
            
            // Add a beautiful quote block instead of image
            welcomeY += 50;
            doc.fillColor('#FFF5F5').roundedRect(40, welcomeY, 515, 80, 6).fill();
            doc.lineWidth(1).strokeColor(primaryColor).roundedRect(40, welcomeY, 515, 80, 6).stroke();
            doc.fillColor(textColor).fontSize(11).font('Helvetica-Oblique').text('"The world is a book and those who do not travel read only one page."', 60, welcomeY + 22, { align: 'center', width: 475 });
            doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text('– ST. AUGUSTINE', 60, welcomeY + 48, { align: 'center', width: 475 });

            // PAGE 3: SUMMARY SHEET & WEATHER
            doc.addPage();
            drawHeader(doc, 'SUMMARY SHEET');
            let summaryY = 80;
            doc.fillColor(secondaryColor).fontSize(18).font('Helvetica-Bold').text('Summary Sheet', 40, summaryY);
            summaryY += 30;
            const sCol1X = 40;
            const sCol2X = 320;
            const sColWidth = 240;
            
            doc.fillColor(secondaryColor).fontSize(14).font('Helvetica-Bold').text('Trip Summary', sCol1X, summaryY);
            summaryY += 22;
            const summaryHeaders = ['Details', 'Information'];
            const summaryRows = [
                ['Trip to', data.name],
                ['Duration', data.duration],
                ['No of Pax', 'As requested'],
                ['Transportation', 'Private Cab / Transfers'],
                ['Pick-up', data.pickup || 'Airport / Station'],
                ['Destinations', data.destinationsCovered]
            ];
            
            let tableEndY = drawTable(doc, summaryHeaders, summaryRows, sCol1X, summaryY, [95, 155], 26);
            
            // Draw Weather card on the right
            let weatherY = summaryY - 22;
            doc.fillColor(secondaryColor).fontSize(14).font('Helvetica-Bold').text('Weather Prediction', sCol2X, weatherY);
            weatherY += 22;
            doc.fillColor('#FFF5F5').roundedRect(sCol2X, weatherY, sColWidth, 120, 6).fill();
            doc.lineWidth(1).strokeColor(primaryColor).roundedRect(sCol2X, weatherY, sColWidth, 120, 6).stroke();
            doc.fillColor(secondaryColor).fontSize(11).font('Helvetica-Bold').text(data.name.toUpperCase(), sCol2X + 15, weatherY + 15);
            doc.fillColor('#4B5563').fontSize(9.5).font('Helvetica').text('Typical weather conditions:', sCol2X + 15, weatherY + 35);
            doc.fillColor(primaryColor).fontSize(26).font('Helvetica-Bold').text(data.weather?.highest || '33°C', sCol2X + 15, weatherY + 55);
            doc.fillColor('#4B5563').fontSize(26).font('Helvetica-Bold').text(data.weather?.lowest || '24°C', sCol2X + 130, weatherY + 55);
            doc.fontSize(8.5).font('Helvetica-Bold');
            doc.fillColor(primaryColor).text('Highest Temp', sCol2X + 15, weatherY + 90);
            doc.fillColor('#4B5563').text('Lowest Temp', sCol2X + 130, weatherY + 90);
            
            // Quote Card at the bottom instead of image
            let quoteY = Math.max(tableEndY, weatherY + 120) + 40;
            doc.fillColor('#FFF5F5').roundedRect(40, quoteY, 515, 90, 6).fill();
            doc.lineWidth(1.5).strokeColor(secondaryColor).roundedRect(40, quoteY, 515, 90, 6).stroke();
            // Accent left border
            doc.rect(40, quoteY, 4, 90).fill(primaryColor);
            
            doc.fillColor(secondaryColor).fontSize(12).font('Helvetica-Oblique').text('"Jobs fill your pockets, but adventures fill your soul."', 60, quoteY + 25, { align: 'center', width: 475 });
            doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text('– PLANET LIFE EXPLORATIONS', 60, quoteY + 55, { align: 'center', width: 475 });

            // PAGES: ITINERARY
            const pkg = (data.packages && data.packages[0]) || data;
            const itinerary = pkg.itinerary || [];
            doc.addPage();
            drawHeader(doc, 'ITINERARY');
            let currentY = 80;
            doc.fillColor(secondaryColor).fontSize(18).font('Helvetica-Bold').text('Itinerary Details', 40, currentY);
            currentY += 30;
            
            itinerary.forEach((day) => {
                const titleText = `DAY ${day.day}: ${day.title ? day.title.toUpperCase() : ''}`;
                const descText = day.description || '';
                const activitiesList = day.activities || [];
                const titleHeight = doc.heightOfString(titleText, { width: 470, font: 'Helvetica-Bold', size: 11 });
                const descHeight = descText ? doc.heightOfString(descText, { width: 460, font: 'Helvetica-Oblique', size: 9.5 }) : 0;
                let actsHeight = 0;
                activitiesList.forEach(act => {
                    actsHeight += doc.heightOfString(`• ${act}`, { width: 440, font: 'Helvetica', size: 9 }) + 2.5;
                });
                
                const dayHeight = titleHeight + descHeight + actsHeight + (descText ? 6 : 0) + (activitiesList.length > 0 ? 8 : 0) + 16;
                
                if (currentY + dayHeight > doc.page.height - 60) {
                    doc.addPage();
                    drawHeader(doc, 'ITINERARY');
                    currentY = 80;
                }
                
                const startY = currentY;
                const lineStartX = 55;
                
                // Draw text elements
                doc.fillColor(secondaryColor).fontSize(11).font('Helvetica-Bold');
                doc.text(titleText, lineStartX + 18, currentY, { width: 470 });
                currentY += titleHeight + 6;
                
                if (descText) {
                    doc.fillColor(textColor).fontSize(9.5).font('Helvetica-Oblique');
                    doc.text(descText, lineStartX + 18, currentY, { width: 460 });
                    currentY += descHeight + 6;
                }
                
                if (activitiesList.length > 0) {
                    doc.fillColor('#4B5563').fontSize(9).font('Helvetica');
                    activitiesList.forEach(act => {
                        const actStr = `• ${act}`;
                        doc.text(actStr, lineStartX + 30, currentY, { width: 440 });
                        currentY += doc.heightOfString(actStr, { width: 440 }) + 2.5;
                    });
                    currentY += 4;
                }
                
                const endY = currentY;
                
                // Draw timeline elements
                doc.fillColor(secondaryColor).circle(lineStartX, startY + 6, 4.5).fill();
                // Connect the timeline node to the bottom of this day section cleanly
                doc.strokeColor(primaryColor).lineWidth(1.5).moveTo(lineStartX, startY + 11).lineTo(lineStartX, endY + 2).stroke();
                
                currentY += 12; // Dynamic gap before next day
            });

            // PAGE: ACCOMMODATION & DETAILS
            doc.addPage();
            drawHeader(doc, 'ACCOMMODATION & DETAILS');
            currentY = 80;
            doc.fillColor(secondaryColor).fontSize(18).font('Helvetica-Bold').text('Accommodation & Details', 40, currentY);
            currentY += 25;
            doc.fillColor(secondaryColor).fontSize(13).font('Helvetica-Bold').text('Accommodation Details', 40, currentY);
            currentY += 18;
            const accommodation = pkg.accommodation || [];
            const tableHeaders = ['Place', 'Hotel Name'];
            const tableRows = accommodation.map(acc => [acc.place || '', acc.hotel || '']);
            if (tableRows.length > 0) {
                currentY = drawTable(doc, tableHeaders, tableRows, 40, currentY, [180, 335], 26);
                currentY += 25;
            }
            else {
                doc.fillColor('#64748B').fontSize(10).font('Helvetica-Oblique').text('Standard 3★ hotels provided or available on request.', 40, currentY);
                currentY += 35;
            }
            
            doc.fillColor(secondaryColor).fontSize(13).font('Helvetica-Bold').text('Package Inclusions & Exclusions', 40, currentY);
            currentY += 20;
            
            const inclExclColWidth = 240;
            const inclColX = 40;
            const exclColX = 310;
            
            let inclY = currentY;
            doc.fillColor(primaryColor).fontSize(11).font('Helvetica-Bold').text('PACKAGE INCLUDES', inclColX, inclY);
            inclY += 18;
            const inclusions = pkg.inclusions || [];
            doc.fontSize(9.5).font('Helvetica');
            inclusions.forEach(inc => {
                doc.fillColor(primaryColor).font('Helvetica-Bold').text('• ', inclColX, inclY);
                doc.fillColor(textColor).font('Helvetica').text(inc, inclColX + 12, inclY, { width: inclExclColWidth - 12 });
                inclY += doc.heightOfString(inc, { width: inclExclColWidth - 12 }) + 6;
            });
            
            let exclY = currentY;
            doc.fillColor(secondaryColor).fontSize(11).font('Helvetica-Bold').text('PACKAGE EXCLUDES', exclColX, exclY);
            exclY += 18;
            const exclusions = pkg.exclusions || [];
            doc.fontSize(9.5).font('Helvetica');
            exclusions.forEach(exc => {
                doc.fillColor(secondaryColor).font('Helvetica-Bold').text('• ', exclColX, exclY);
                doc.fillColor(textColor).font('Helvetica').text(exc, exclColX + 12, exclY, { width: inclExclColWidth - 12 });
                exclY += doc.heightOfString(exc, { width: inclExclColWidth - 12 }) + 6;
            });
            
            currentY = Math.max(inclY, exclY) + 20;
 
            // PAGE: PACKAGE COST
            doc.addPage();
            drawHeader(doc, 'PACKAGE COST');
            currentY = 80;
            doc.fillColor(secondaryColor).fontSize(18).font('Helvetica-Bold').text('Package Costings', 40, currentY);
            currentY += 25;
            doc.fillColor(secondaryColor).fontSize(13).font('Helvetica-Bold').text('Package Cost per Head', 40, currentY);
            currentY += 18;
            const packageCost = pkg.packageCost || [];
            const costHeaders = ['Members', 'Cost Per Head'];
            const costRows = packageCost.map(c => [c.members || '', String(c.cost || '').replace(/₹/g, 'INR ')]);
            if (costRows.length > 0) {
                currentY = drawTable(doc, costHeaders, costRows, 40, currentY, [200, 315], 26);
                currentY += 20;
            }
            else {
                doc.fillColor('#64748B').fontSize(10).font('Helvetica-Oblique').text('Pricing available on request.', 40, currentY);
                currentY += 30;
            }
            doc.fillColor(textColor).fontSize(8.5).font('Helvetica-Oblique').text('Note: Rates may vary during peak holiday seasons. Early check-in depends on resort availability. Customizations are available on request.', 40, currentY, { width: 515 });
            
            // Beautiful Booking instruction block instead of image
            currentY += 40;
            doc.fillColor('#FFF5F5').roundedRect(40, currentY, 515, 120, 8).fill();
            doc.lineWidth(1.5).strokeColor(primaryColor).roundedRect(40, currentY, 515, 120, 8).stroke();
            
            doc.fillColor(secondaryColor).fontSize(13).font('Helvetica-Bold').text('How to Book This Package?', 60, currentY + 18);
            
            const steps = [
                '1. Contact Planet Life support with your preferred dates and customizations.',
                '2. Complete the initial 50% deposit token payment to secure hotel bookings.',
                '3. Receive your final travel vouchers and receipt within 24-48 business hours.'
            ];
            
            let stepY = currentY + 40;
            doc.fillColor(textColor).fontSize(9.5).font('Helvetica');
            steps.forEach(step => {
                doc.text(step, 60, stepY, { width: 475 });
                stepY += 20;
            });

            // PAGE: TERMS & CONDITIONS (PART 1)
            doc.addPage();
            drawHeader(doc, 'TERMS & CONDITIONS');
            currentY = 80;
            doc.fillColor(secondaryColor).fontSize(18).font('Helvetica-Bold').text('Terms & Conditions', 40, currentY);
            currentY += 25;
            const terms = [
                {
                    title: "1. Booking & Payment Policy",
                    items: [
                        "A minimum deposit of 50% of the total package cost is required to confirm the booking.",
                        "Full payment must be completed at the time of check-in at the hotel.",
                        "All payments must be made in Indian Rupees (INR) or local currencies as specified by team Planet Life.",
                        "Payments are non-refundable unless explicitly stated otherwise in the cancellation policy."
                    ]
                },
                {
                    title: "2. Cancellation & Refund Policy",
                    items: [
                        "Cancellations made 09 days or more prior to departure: 20% of the package cost is refundable.",
                        "Cancellations made within 03 days of departure: No refund will be provided.",
                        "No refunds for unused services, missed flights, late check-ins, or early check-outs.",
                        "Cancellation charges for flights/trains depend on airline/railway rules and will be charged extra."
                    ]
                },
                {
                    title: "3. Accommodation & Transportation",
                    items: [
                        "Hotels are subject to availability at the time of booking. If specified hotels are unavailable, alternatives of similar standard will be provided.",
                        "Hotel check-in and check-out times are as per standard hotel policies. Early check-in is subject to availability.",
                        "The company is not liable for transport delays or changes due to weather, traffic, road closures, or force majeure events."
                    ]
                }
            ];
            terms.forEach(section => {
                const sectionHeaderHeight = 20;
                let sectionItemsHeight = 0;
                section.items.forEach(item => {
                    sectionItemsHeight += doc.heightOfString(`• ${item}`, { width: 505, font: 'Helvetica', size: 9.5 }) + 5;
                });
                const totalSectionHeight = sectionHeaderHeight + sectionItemsHeight + 15;
                if (currentY + totalSectionHeight > doc.page.height - 60) {
                    doc.addPage();
                    drawHeader(doc, 'TERMS & CONDITIONS');
                    currentY = 80;
                }
                doc.fillColor(primaryColor).fontSize(11).font('Helvetica-Bold').text(section.title, 40, currentY);
                currentY += 15;
                section.items.forEach(item => {
                    doc.fillColor(textColor).fontSize(9.5).font('Helvetica').text(`• ${item}`, 50, currentY, { width: 505 });
                    currentY += doc.heightOfString(`• ${item}`, { width: 505 }) + 5;
                });
                currentY += 10;
            });

            // PAGE: TERMS & CONDITIONS (PART 2)
            doc.addPage();
            drawHeader(doc, 'TERMS & CONDITIONS');
            currentY = 80;
            doc.fillColor(secondaryColor).fontSize(18).font('Helvetica-Bold').text('Terms & Conditions (Contd.)', 40, currentY);
            currentY += 25;
            const termsPart2 = [
                {
                    title: "4. Itinerary Changes & Force Majeure",
                    items: [
                        "The itinerary is subject to change due to unforeseen circumstances (e.g., bad weather, strikes, natural disasters, political instability, or government restrictions).",
                        "The company is not responsible for any additional costs incurred due to such unexpected itinerary modifications."
                    ]
                },
                {
                    title: "5. Liability & Customer Conduct",
                    items: [
                        "Travelers must follow local laws, regulations, and custom rules of the destination country/state.",
                        "Any damage caused to hotel property, vehicles, or equipment by the traveler will be charged directly to the traveler.",
                        "The company is not liable for loss of personal belongings, baggage, or injuries caused by negligence or natural hazards."
                    ]
                },
                {
                    title: "6. Dispute Resolution",
                    items: [
                        `Any disputes arising out of these bookings will be resolved under the jurisdiction of ${data.name.toLowerCase().includes('goa') ? 'Goa State Law' : 'Madurai Jurisdiction (Tamil Nadu State Law)'}.`
                    ]
                }
            ];
            termsPart2.forEach(section => {
                const sectionHeaderHeight = 20;
                let sectionItemsHeight = 0;
                section.items.forEach(item => {
                    sectionItemsHeight += doc.heightOfString(`• ${item}`, { width: 505, font: 'Helvetica', size: 9.5 }) + 5;
                });
                const totalSectionHeight = sectionHeaderHeight + sectionItemsHeight + 15;
                if (currentY + totalSectionHeight > doc.page.height - 60) {
                    doc.addPage();
                    drawHeader(doc, 'TERMS & CONDITIONS');
                    currentY = 80;
                }
                doc.fillColor(primaryColor).fontSize(11).font('Helvetica-Bold').text(section.title, 40, currentY);
                currentY += 15;
                section.items.forEach(item => {
                    doc.fillColor(textColor).fontSize(9.5).font('Helvetica').text(`• ${item}`, 50, currentY, { width: 505 });
                    currentY += doc.heightOfString(`• ${item}`, { width: 505 }) + 5;
                });
                currentY += 10;
            });
            currentY += 30;
            doc.fillColor(primaryColor).fontSize(16).font('Helvetica-BoldOblique').text('WE WISH YOU A HAPPY & SAFE JOURNEY!', 40, currentY, { align: 'center', width: doc.page.width - 80 });

            // PAGE: GUEST REVIEWS
            doc.addPage();
            drawHeader(doc, 'GUEST REVIEWS');
            currentY = 80;
            doc.fillColor(secondaryColor).fontSize(18).font('Helvetica-Bold').text('Guest Testimonials', 40, currentY);
            currentY += 24;
            doc.fillColor('#64748B').fontSize(10).font('Helvetica').text('4.8 Rating  |  350+ Guest Reviews & Trust', 40, currentY);
            currentY += 20;
            const reviews = data.reviews || [
                {
                    name: "NRFM FAMILY",
                    text: "The last trip we went on was truly our best one yet! We enjoyed it to the fullest. Our travel partners and guides were amazing — they organized and guided our entire trip in the best way possible. A big thank you to Planet Life for this wonderful experience!",
                    location: "KASHMIR"
                },
                {
                    name: "MR & MRS VINOTH KUMAR",
                    text: "We had an amazing holiday with top-notch and personalized services from team Planet Life. Their personalized service made us enjoy every moment without any concern and stressing about the next plan of accommodation or travelling. I would recommend everyone for their outstanding services and hospitality.",
                    location: "ANDAMAN"
                },
                {
                    name: "MISS Kaveri Selvam",
                    text: "Planned itinerary and well defined information. Felt so easy to commute and on time information were shared. Really happy and satisfied with the trip I organized with planet life. I would definitely recommend.",
                    location: "DUBAI"
                }
            ];
            
            reviews.forEach(rev => {
                const textH = doc.heightOfString(`"${rev.text}"`, { width: 485, font: 'Helvetica-Oblique', size: 9.5 });
                const cardH = textH + 55;
                if (currentY + cardH > doc.page.height - 60) {
                    doc.addPage();
                    drawHeader(doc, 'GUEST REVIEWS');
                    currentY = 80;
                }
                doc.fillColor('#F9FAFB').roundedRect(40, currentY, 515, cardH, 6).fill();
                doc.rect(40, currentY, 4, cardH).fill(primaryColor);
                doc.lineWidth(0.5).strokeColor('#E2E8F0').roundedRect(40, currentY, 515, cardH, 6).stroke();
                doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text('★ ★ ★ ★ ★', 55, currentY + 10);
                doc.fillColor(textColor).fontSize(9.5).font('Helvetica-Oblique').text(`"${rev.text}"`, 55, currentY + 26, { width: 485 });
                doc.fillColor(secondaryColor).fontSize(9).font('Helvetica-Bold').text(`- ${rev.name.toUpperCase()} | ${rev.location.toUpperCase()}`, 55, currentY + 32 + textH);
                currentY += cardH + 15;
            });

            // Footer numbering pass
            const range = doc.bufferedPageRange();
            for (let i = 0; i < range.count; i++) {
                doc.switchToPage(i);
                if (i > 0) {
                    doc.page.margins.bottom = 0; // Disable bottom margin to prevent auto-addPage when drawing near bottom
                    
                    // Draw separator line in Red
                    doc.strokeColor(primaryColor).lineWidth(0.5).moveTo(40, doc.page.height - 40).lineTo(555, doc.page.height - 40).stroke();
                    
                    doc.fillColor(secondaryColor).fontSize(9).font('Helvetica');
                    doc.text(`-- ${i + 1} of ${range.count} --`, 0, doc.page.height - 30, { align: 'center', width: doc.page.width });
                    
                    doc.fillColor('#4B5563');
                    doc.text('planetlifeholidays.com', 40, doc.page.height - 30, { width: 200 });
                    doc.text('+91 99945 53297', 355, doc.page.height - 30, { width: 200, align: 'right' });
                }
            }

            doc.end();
            console.log(`[PDF Generation] Successfully generated and streamed PDF: ${filename}`);
        }
        catch (error) {
            console.error("PDF Generation Error:", error);
            res.status(500).json({ message: error.message });
        }
    }));

    // Caching-optimized Static File Serving (Registered AFTER API routes)
    // 1. Vite built hashed assets: immutable caching disabled for development updates
    app.use('/assets', express_1.default.static(path_1.default.join(frontendPath, 'assets'), {
        etag: true,
        maxAge: 0,
        index: false
    }));
    
    // 2. Remaining static files: cached for 1 day, with HTML non-cache rules
    app.use(express_1.default.static(frontendPath, {
        etag: true,
        maxAge: '1d',
        index: false,
        setHeaders: (res, filePath) => {
            if (path_1.default.basename(filePath) === 'index.html') {
                res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
            }
        }
    }));
    
    // Middleware to block missing static assets from falling through to the SPA index.html catch-all
    app.use((req, res, next) => {
        const isStaticAsset = req.path.includes('.') || 
                              req.path.startsWith('/assets/') || 
                              req.path.startsWith('/img/');
        if (isStaticAsset) {
            if (req.path === '/favicon.ico') {
                res.status(204).end();
            } else {
                res.status(404).json({ message: `Static asset not found: ${req.path}` });
            }
        } else {
            next();
        }
    });
    
    // Catch-all to serve frontend index.html for SPA routing
    app.get('*', (req, res) => {
        if (req.path.startsWith('/api/')) {
            res.status(404).json({ message: `API route not found: ${req.method} ${req.path}` });
            return;
        }
        res.sendFile(path_1.default.join(frontendPath, 'index.html'));
    });
    
    if (!process.env.VERCEL) {
        const server = app.listen(PORT, () => {
            const startupEndTimestamp = new Date().toISOString();
            const startupDuration = performance.now() - startupStart;
            
            console.log(`\n========================================`);
            console.log(`[Startup] Startup Start: ${startupStartTimestamp}`);
            console.log(`[Startup] Startup End: ${startupEndTimestamp}`);
            console.log(`[Startup] Startup Duration: ${startupDuration.toFixed(2)} ms`);
            console.log(`[Startup] Frontend Path: ${frontendPath}`);
            console.log(`[Startup] Current Working Directory: ${process.cwd()}`);
            console.log(`[Startup] Node Version: ${process.version}`);
            console.log(`[Startup] Environment: ${process.env.NODE_ENV || 'production'}`);
            console.log(`[Startup] Port: ${PORT}`);
            console.log(`[Startup] Passenger Environment: ${process.env.PASSENGER_APP_ENV || process.env.RAILS_ENV || 'production'}`);
            
            const memoryUsage = process.memoryUsage();
            console.log(`[Startup] Memory Usage: RSS: ${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB, Heap Total: ${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB, Heap Used: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
            console.log(`========================================\n`);
        });
        server.on('error', (err) => {
            console.error("SERVER FATAL ERROR ON LISTEN:", err);
        });
    }
}
catch (startupError) {
    const startupDuration = performance.now() - startupStart;
    console.error(`[Startup] Failed in: ${startupDuration.toFixed(2)} ms`);
    console.error("FATAL ERROR ON STARTUP:", startupError);
    // Start a fallback server to display the error on the webpage instead of a 503
    const fallbackApp = (0, express_1.default)();
    fallbackApp.get('*', (req, res) => {
        res.status(500).send(`
      <h1>Server Startup Error</h1>
      <p>The application failed to start due to the following error:</p>
      <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; color: red;">${startupError.stack || startupError.message || startupError}</pre>
    `);
    });
    app = fallbackApp;
    if (!process.env.VERCEL) {
        fallbackApp.listen(PORT, () => {
            console.log(`Fallback error server running on port ${PORT}`);
        });
    }
}
exports.default = (req, res) => {
    return app(req, res);
};
