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
require("dotenv/config");
const client_1 = require("@prisma/client");
const adapter_neon_1 = require("@prisma/adapter-neon");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const cloudinary_1 = require("cloudinary");
const destinations_1 = require("./destinations");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const connectionString = process.env.DATABASE_URL || '';
const adapter = new adapter_neon_1.PrismaNeonHTTP(connectionString, {});
const prisma = new client_1.PrismaClient({ adapter });
// Configure cloudinary for the seed script
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
function uploadToCloudinary(localPath, folder) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let fullPath = path_1.default.resolve(__dirname, '..', '..', 'frontend', 'src', 'assets', localPath);
            // Check if file exists in root of assets
            if (!fs_1.default.existsSync(fullPath)) {
                // Try to find it in subdirectories
                const assetsDir = path_1.default.resolve(__dirname, '..', '..', 'frontend', 'src', 'assets');
                const findFile = (dir) => {
                    const files = fs_1.default.readdirSync(dir);
                    for (const file of files) {
                        const filePath = path_1.default.join(dir, file);
                        if (fs_1.default.statSync(filePath).isDirectory()) {
                            const found = findFile(filePath);
                            if (found)
                                return found;
                        }
                        else if (file === localPath) {
                            return filePath;
                        }
                    }
                    return null;
                };
                const foundPath = findFile(assetsDir);
                if (foundPath) {
                    fullPath = foundPath;
                }
                else {
                    console.warn(`File not found, skipping upload: ${localPath}`);
                    return localPath; // fallback to original name
                }
            }
            console.log(`Uploading ${localPath} from ${fullPath}...`);
            const result = yield cloudinary_1.v2.uploader.upload(fullPath, {
                folder,
                resource_type: 'auto',
            });
            return result.secure_url;
        }
        catch (error) {
            console.error(`Error uploading ${localPath}:`, error);
            return localPath; // fallback
        }
    });
}
const defaultHomeContent = {
    heroTitle: "Customized International Adventures",
    heroSubtitle: "Experience the epitome of luxury and adventure with Planet Life, the best travel agency in Madurai offering carefully curated international and domestic journeys.",
    destinationsTitle: "Trending Destinations",
    destinationsSubtitle: "Explore our most popular international destinations, handpicked for your perfect vacation.",
    communityTitle: "Happy Customers, Happy Stories",
    communitySubtitle: "Join thousands of satisfied travelers who have explored the world with us.\nEvery picture tells a story of adventure and joy.",
    strangerTrips: [
        {
            id: "stranger-kashmir",
            title: "Kashmir Strangers Tour",
            image: "kashmir_main.jpg",
            date: "Jan 10-18, 2026",
            price: "₹14,999",
            month: "January",
            status: "finished",
            link: "/destination/kashmir?pkg=kashmir-strangers-4n5d"
        },
        {
            id: "stranger-thailand",
            title: "Thailand Siam Sojourn",
            image: "thailand_new.jpg",
            date: "May 15-19, 2026",
            price: "₹27,999",
            month: "May",
            note: "Flight Excl.",
            status: "finished",
            link: "/destination/thailand?pkg=thailand-4n5d-siam-sojourn"
        },
        {
            id: "stranger-malaysia",
            title: "Kuala Lumpur Adventurers",
            image: "malaysia_main_new.jpg",
            date: "June 12-15, 2026",
            price: "₹24,999",
            month: "June",
            note: "Flight Excl.",
            status: "upcoming",
            link: "/destination/malaysia?pkg=malaysia-3n4d-kl-adventurers"
        }
    ],
    trustedTitle: "Trusted By Leading Organizations",
    trustedSubtitle: "We engineer seamless, ultra-premium travel operations for global industry pioneers. Empowering enterprises with bespoke execution and 24/7 VIP desk support.",
    trustedCompanies: [
        { name: "ARUTHRS NATYALAYA", logo: "/assets/images/arudhes.png" },
        { name: "ASK JEWELLERY", logo: "/assets/images/ask_jewellery.png" },
        { name: "DIVA SECRET INTERNATIONAL", logo: "/assets/images/diva_secret.png" },
        { name: "DR AGARWALS HOSPITALS", logo: "/assets/images/images-removebg-preview.png" },
        { name: "GVG INFRASTRUCTURE", logo: "/assets/images/image.png" },
        { name: "GWC DATA AI", logo: "/assets/images/gwc_data ai.png" },
        { name: "NEW TECH CHENNAI", logo: "/assets/images/new_tech_chennai.png" },
        { name: "SUPREME ELECTRO CONTROL", logo: "/assets/images/supreme_electro_control.png" },
        { name: "ZOHO", logo: "/assets/images/zoho.png" }
    ]
};
const defaultAboutContent = {
    heroTitle: "About Planet Life",
    heroSubtitle: "Creating unforgettable travel experiences since day one as Madurai's best tourist providers",
    ourStoryTitle: "Our Story",
    ourStoryText: "Planet Life was founded with a simple vision: to make world-class travel experiences accessible to everyone. We believe that travel is not just about visiting new places; it's about creating memories, discovering cultures, and connecting with the world.\n\nOur team of travel experts carefully curates each destination and package, ensuring that every detail is perfect. From the moment you contact us to the moment you return home, we're committed to providing exceptional service and unforgettable experiences.\n\nAs the leading tour operators in Madurai, Tamil Nadu, we provide everything from international vacation packages to custom domestic trips. We are proud to be recognized among the best travel agents in Madurai for providing worry-free, premium journeys. With thousands of satisfied travelers and a 4.9 Google rating, we've established ourselves as a trusted name in premium travel. Our passion is your adventure, and we're here to make your dream vacation a reality.",
    founderTitle: "Meet Our Founder",
    founderText: "\"Travel isn't just about seeing new places; it's about the transformation that happens within us when we step outside our comfort zone.\"\n\nDriven by an insatiable wanderlust and a deep curiosity for the world's diverse cultures, our founder established Planet Life with a singular mission: to share the magic of travel with others.\n\nWith years of personal exploration across continents, he understands that the best journeys are those that are authentic, immersive, and worry-free. His passion lies in crafting experiences that go beyond the guidebook, connecting travelers with the heart and soul of each destination.",
    founderImage: "founder.jpg", // Will be uploaded if in assets
    missionTitle: "Our Mission",
    missionText: "To inspire and enable people to explore the world, creating transformative travel experiences that broaden perspectives, foster connections, and create lasting memories. We strive to make every journey extraordinary through meticulous planning, exceptional service, and genuine care for our travelers."
};
const defaultContactContent = {
    heroTitle: "Get in Touch",
    heroSubtitle: "Ready to plan your next adventure? Contact Planet Life, the top travel agency in Madurai, to speak with our travel experts.",
    sectionTitle: "Contact Information",
    sectionText: "Have questions about our packages or need help planning your trip? Reach out to us through any of the following channels:",
    phone: "+919994553297",
    email: "planetlifecamping@gmail.com",
    instagram: "@_planet_life",
    address: "2nd floor, 64, Nethaji Rd, Periyar, Madurai Main, Madurai, Tamil Nadu 625001",
    mapIframe: '<iframe src="https://maps.google.com/maps?q=2nd%20floor%2C%2064%2C%20Nethaji%20Rd%2C%20Periyar%2C%20Madurai%20Main%2C%20Madurai%2C%20Tamil%20Nadu%20625001&t=&z=15&ie=UTF8&iwloc=&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
};
const defaultPackagesContent = {
    heroTitle: "Our Travel Packages",
    heroSubtitle: "Find the perfect package for your next adventure with Madurai's premier travel operator"
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Starting migration...');
        // 1. Create Admin
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@planetlife.com';
        const adminPassword = process.env.ADMIN_PASSWORD_HASH ?
            process.env.ADMIN_PASSWORD_HASH :
            yield bcryptjs_1.default.hash('password123', 10);
        yield prisma.admin.upsert({
            where: { email: adminEmail },
            update: { passwordHash: adminPassword },
            create: { email: adminEmail, passwordHash: adminPassword },
        });
        console.log('Admin user created/updated.');
        // 2. Insert Page Content
        const contents = [
            { page: 'home', data: defaultHomeContent },
            { page: 'about', data: defaultAboutContent },
            { page: 'contact', data: defaultContactContent },
            { page: 'packages', data: defaultPackagesContent },
        ];
        for (const c of contents) {
            yield prisma.pageContent.upsert({
                where: { page: c.page },
                update: { data: c.data },
                create: { page: c.page, data: c.data },
            });
        }
        console.log('Page content seeded.');
        // 3. Process and Insert Destinations
        // We clean up existing destinations first to avoid duplicates/conflicts during seeding
        // await prisma.destination.deleteMany();
        for (const dest of destinations_1.destinations) {
            console.log(`Processing destination: ${dest.name}`);
            // Upload main media
            const imageUrl = yield uploadToCloudinary(dest.image, 'planet_life/images');
            const videoUrl = dest.video ? yield uploadToCloudinary(dest.video, 'planet_life/videos') : null;
            // Upload adventure images
            const adventureImagesUrls = [];
            for (const advImg of (dest.adventureImages || [])) {
                const url = yield uploadToCloudinary(advImg, 'planet_life/images');
                adventureImagesUrls.push(url);
            }
            // Check if the destination exists
            const existingDest = yield prisma.destination.findUnique({
                where: { id: dest.id }
            });
            if (existingDest) {
                yield prisma.destination.update({
                    where: { id: dest.id },
                    data: {
                        name: dest.name,
                        country: dest.country,
                        description: dest.description,
                        image: imageUrl,
                        video: videoUrl,
                        featured: dest.featured,
                        whyVisit: dest.whyVisit || [],
                        adventureImages: adventureImagesUrls
                    }
                });
                // Delete old packages (which cascades to itineraries)
                yield prisma.package.deleteMany({
                    where: { destinationId: dest.id }
                });
            }
            else {
                yield prisma.destination.create({
                    data: {
                        id: dest.id,
                        name: dest.name,
                        country: dest.country,
                        description: dest.description,
                        image: imageUrl,
                        video: videoUrl,
                        featured: dest.featured,
                        whyVisit: dest.whyVisit || [],
                        adventureImages: adventureImagesUrls
                    }
                });
            }
            // Now insert packages and itineraries sequentially without transactions
            for (const pkg of dest.packages) {
                const pkgImageUrl = pkg.image ? yield uploadToCloudinary(pkg.image, 'planet_life/images') : null;
                yield prisma.package.create({
                    data: {
                        id: pkg.id,
                        duration: pkg.duration,
                        nights: pkg.nights,
                        days: pkg.days,
                        price: pkg.price,
                        image: pkgImageUrl,
                        inclusions: pkg.inclusions || [],
                        destinationId: dest.id
                    }
                });
                for (const day of (pkg.itinerary || [])) {
                    yield prisma.dayItinerary.create({
                        data: {
                            day: day.day,
                            title: day.title,
                            description: day.description,
                            activities: day.activities || [],
                            packageId: pkg.id
                        }
                    });
                }
            }
        }
        console.log('Migration completed successfully!');
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
