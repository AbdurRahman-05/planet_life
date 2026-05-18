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
const cloudinary_1 = require("cloudinary");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)({ useTempFiles: true }));
// Serve static files from the frontend/dist directory
const frontendPath = path_1.default.join(__dirname, '../../frontend/dist');
app.use(express_1.default.static(frontendPath));
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
app.get('/api/content/:page', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page } = req.params;
    try {
        const content = yield prisma.pageContent.findUnique({ where: { page } });
        res.status(200).json(content || { page, data: {} });
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
// Catch-all to serve frontend index.html for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(frontendPath, 'index.html'));
});
