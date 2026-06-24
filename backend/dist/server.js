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
        if (!req.files || !req.files.file) {
            res.status(400).json({ message: 'No file provided' });
            return;
        }
        const file = Array.isArray(req.files.file) ? req.files.file[0] : req.files.file;
        const ext = path_1.default.extname(file.name).toLowerCase();
        let text = '';
        try {
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
            if (!text || text.trim().length === 0) {
                res.status(400).json({ message: 'The uploaded document is empty or could not be parsed.' });
                return;
            }
            const genAI = new (getGemini().GoogleGenerativeAI)(process.env.GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({
                model: 'gemini-2.0-flash',
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
            const resultText = response.response.text();
            try {
                const parsedJSON = JSON.parse(resultText);
                res.status(200).json({ success: true, data: parsedJSON });
            }
            catch (jsonErr) {
                res.status(500).json({
                    message: 'Failed to parse Gemini response as JSON.',
                    rawResponse: resultText
                });
            }
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }));

    // Caching-optimized Static File Serving (Registered AFTER API routes)
    // 1. Vite built hashed assets: immutable for 1 year
    app.use('/assets', express_1.default.static(path_1.default.join(frontendPath, 'assets'), {
        etag: true,
        maxAge: '365d',
        immutable: true,
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
