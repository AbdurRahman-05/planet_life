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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const adapter_neon_1 = require("@prisma/adapter-neon");
const cloudinary_1 = require("cloudinary");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const generative_ai_1 = require("@google/generative-ai");
const mammoth = require('mammoth');
const pdfParse = require('pdf-parse');
let app;
try {
    // Find and load .env file from multiple fallback paths
    const envPaths = [
        path_1.default.join(__dirname, '../.env'), // From src/ (development)
        path_1.default.join(__dirname, '../../.env'), // From dist/ (production)
        path_1.default.join(process.cwd(), 'backend/.env'), // From root cwd
        path_1.default.join(process.cwd(), '.env'), // From current cwd
    ];
    let envLoaded = false;
    for (const envPath of envPaths) {
        if (fs_1.default.existsSync(envPath)) {
            dotenv_1.default.config({ path: envPath });
            envLoaded = true;
            console.log(`Loaded environment variables from: ${envPath}`);
            break;
        }
    }
    if (!envLoaded) {
        dotenv_1.default.config();
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
        console.warn(`WARNING: Missing auxiliary environment variables: ${missingOptional.join(', ')}`);
    }
    app = (0, express_1.default)();
    const connectionString = process.env.DATABASE_URL || '';
    const adapter = new adapter_neon_1.PrismaNeonHTTP(connectionString, {});
    const prisma = new client_1.PrismaClient({ adapter });
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use((0, express_fileupload_1.default)({ useTempFiles: true }));
    // Serve static files from the frontend/dist directory
    const frontendPath = path_1.default.join(__dirname, '../../frontend/dist');
    app.use(express_1.default.static(frontendPath));
    // Permanent Favicon handler to prevent 503/404 errors
    app.get('/favicon.ico', (req, res) => {
        const logoPath = path_1.default.join(frontendPath, 'logo.png');
        if (fs_1.default.existsSync(logoPath)) {
            res.sendFile(logoPath);
        }
        else {
            res.status(204).end();
        }
    });
    cloudinary_1.v2.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const verifyToken = (req, res, next) => {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }
        try {
            jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
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
            const admin = yield prisma.admin.findUnique({ where: { email } });
            if (!admin) {
                res.status(401).json({ message: 'Invalid credentials' });
                return;
            }
            const isValid = yield bcryptjs_1.default.compare(password, admin.passwordHash);
            if (!isValid) {
                res.status(401).json({ message: 'Invalid credentials' });
                return;
            }
            const token = jsonwebtoken_1.default.sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
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
            yield prisma.$queryRaw `SELECT 1`;
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
            const destinations = yield prisma.destination.findMany({
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
            const newDest = yield prisma.destination.create({
                data: {
                    id: data.id, name: data.name, country: data.country, description: data.description,
                    image: data.image, video: data.video, featured: data.featured || false,
                    whyVisit: data.whyVisit || [], adventureImages: data.adventureImages || [],
                    packages: {
                        create: (data.packages || []).map((pkg) => ({
                            id: pkg.id, duration: pkg.duration, nights: pkg.nights, days: pkg.days,
                            price: pkg.price, image: pkg.image, inclusions: pkg.inclusions || [],
                            itinerary: { create: (pkg.itinerary || []).map((day) => ({ day: day.day, title: day.title, description: day.description, activities: day.activities || [] })) }
                        }))
                    }
                },
                include: { packages: { include: { itinerary: { orderBy: { day: 'asc' } } } } },
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
            const destination = yield prisma.destination.findUnique({
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
            yield prisma.package.deleteMany({ where: { destinationId: id } });
            const updatedDest = yield prisma.destination.update({
                where: { id },
                data: {
                    name: data.name, country: data.country, description: data.description,
                    image: data.image, video: data.video, featured: data.featured || false,
                    whyVisit: data.whyVisit || [], adventureImages: data.adventureImages || [],
                    packages: {
                        create: (data.packages || []).map((pkg) => ({
                            id: pkg.id, duration: pkg.duration, nights: pkg.nights, days: pkg.days,
                            price: pkg.price, image: pkg.image, inclusions: pkg.inclusions || [],
                            itinerary: { create: (pkg.itinerary || []).map((day) => ({ day: day.day, title: day.title, description: day.description, activities: day.activities || [] })) }
                        }))
                    }
                },
                include: { packages: { include: { itinerary: { orderBy: { day: 'asc' } } } } },
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
            yield prisma.destination.delete({ where: { id: req.params.id } });
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
            const content = yield prisma.pageContent.findUnique({ where: { page } });
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
            const updatedContent = yield prisma.pageContent.upsert({
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
            const result = yield cloudinary_1.v2.uploader.upload(file.tempFilePath, {
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
                const mammothLib = mammoth.extractRawText ? mammoth : (mammoth.default || mammoth);
                const result = yield mammothLib.extractRawText({ path: file.tempFilePath });
                text = result.value;
            }
            else if (ext === '.pdf') {
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
            const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API_KEY);
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
    // Catch-all to serve frontend index.html for SPA routing
    app.get('*', (req, res) => {
        if (req.path.startsWith('/api/')) {
            res.status(404).json({ message: `API route not found: ${req.method} ${req.path}` });
            return;
        }
        res.sendFile(path_1.default.join(frontendPath, 'index.html'));
    });
    if (!process.env.VERCEL) {
        const PORT = process.env.PORT || 3000;
        const server = app.listen(PORT, () => {
            console.log(`Backend server running on port ${PORT}`);
        });
        server.on('error', (err) => {
            console.error("SERVER FATAL ERROR ON LISTEN:", err);
        });
    }
}
catch (startupError) {
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
        const PORT = process.env.PORT || 3000;
        fallbackApp.listen(PORT, () => {
            console.log(`Fallback error server running on port ${PORT}`);
        });
    }
}
exports.default = (req, res) => {
    return app(req, res);
};
