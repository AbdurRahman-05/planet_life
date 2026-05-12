import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import malaysiaImg from "@/assets/malaysia_main_new.jpg";
import thailandImg from "@/assets/thailand.jpg";
import baliImg from "@/assets/bali_new.jpg";
import vietnamImg from "@/assets/vietnam_new.jpg";
import dubaiImg from "@/assets/dubai_new.jpg";
import singaporeImg from "@/assets/singapore.jpg";
import logoImg from "@/assets/logo.png";
import corporateTripsImg from "@/assets/corporate_trips.png";
import privateTripsImg from "@/assets/private_trips.png";
import strangersTripsImg from "@/assets/strangers_trips.png";
import couplesTripsImg from "@/assets/couples_trips.png";
import collegeTripsImg from "@/assets/college_trips.png";
import familyTripsImg from "@/assets/family_trips.png";
import strangersExperienceImg from "@/assets/strangers_experience.png";
import { Globe, Heart, Award, Users, X, ArrowRight, Quote, Briefcase, ShieldCheck, GraduationCap, Home, Sparkles, Map } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useAdmin } from "@/context/AdminContext";
import VerticalStoryMarquee from "@/components/VerticalStoryMarquee";


const About = () => {
  const { aboutContent } = useAdmin();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const stats = [
    { number: "5000+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "4.9", label: "Google Rating" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Extensive knowledge of destinations worldwide with local insights and connections"
    },
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We love what we do and it shows in every carefully planned itinerary"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Hand-picked hotels, attractions, and experiences that exceed expectations"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated support team available 24/7 to ensure your trip is perfect"
    }
  ];

  const galleryImages = [
    { src: baliImg, alt: "Bali scenery" },
    { src: thailandImg, alt: "Thailand temple" },
    { src: dubaiImg, alt: "Dubai skyline" },
    { src: singaporeImg, alt: "Singapore gardens" },
    { src: vietnamImg, alt: "Vietnam landscape" },
    { src: malaysiaImg, alt: "Malaysia city" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a0a0a] text-white pt-24 mobile:pt-28 md:pt-32 lg:pt-40 pb-12 mobile:pb-16 md:pb-24 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.2)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal width="100%">
            <span className="text-red-500 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block drop-shadow-lg">
              Our Story
            </span>
            <h1 className="text-3xl xs:text-4xl mobile:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-4 mobile:mb-6 uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
              {aboutContent.heroTitle}
            </h1>
            <p className="text-xs mobile:text-sm sm:text-base md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
              {aboutContent.heroSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story Section - Split Layout */}
      <section className="py-12 mobile:py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-3 mobile:px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 mobile:gap-12 md:gap-16">
            <div className="lg:w-1/2">
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-red-600" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-red-600" />
                  <img
                    src={logoImg}
                    alt="Planet Life Logo"
                    className="rounded-lg shadow-2xl w-full h-[250px] mobile:h-[350px] sm:h-[400px] lg:h-[500px] object-contain bg-black relative z-10"
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:w-1/2">
              <ScrollReveal direction="right">
                <h2 className="text-2xl xs:text-3xl mobile:text-4xl md:text-5xl font-heading font-bold mb-4 mobile:mb-6 md:mb-8 text-foreground leading-tight uppercase tracking-tight">
                  {aboutContent.ourStoryTitle}
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full mb-8" />

                <div className="relative mb-8">
                  <Quote className="absolute -left-10 -top-4 w-12 h-12 text-primary/10 rotate-180" />
                  <p className="text-lg text-foreground/90 font-medium leading-relaxed text-justify whitespace-pre-line">
                    {aboutContent.ourStoryText}
                  </p>
                </div>

                <div className="mt-8 max-w-sm">
                  <div className="bg-red-50 p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                    <h1 className="text-4xl font-heading font-black text-red-600 mb-2 tracking-tighter">7+ Years</h1>
                    <h2 className="text-[10px] font-black tracking-widest text-black uppercase">Experience in this industry</h2>
                    <p className="text-xs text-gray-600 mt-2 font-medium">Crafting unforgettable journeys with expertise, dedication, and deep local knowledge across the globe.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Strangers Trips Section */}
      <section className="py-20 mobile:py-24 md:py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-30 pointer-events-none overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] via-transparent to-[#0a0a0a] z-20" />
           <div className="h-full w-full transform scale-110">
             <VerticalStoryMarquee />
           </div>
        </div>

        
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-3/5">
              <ScrollReveal direction="left">
                <span className="text-red-600 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block">Our Signature Experience</span>
                <h2 className="text-4xl mobile:text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-8 uppercase tracking-tighter leading-[0.85]">
                  Strangers Trips: <br />
                  <span className="text-red-600">The New Way</span> <br />
                  To Explore
                </h2>
                
                <div className="flex items-center gap-4 mobile:gap-6 mb-10 mobile:mb-12">
                   <div className="text-6xl mobile:text-7xl md:text-8xl font-heading font-black text-red-600 select-none">15+</div>
                   <div className="bg-red-600/20 border border-red-600/30 p-3 mobile:p-4 rounded-xl mobile:rounded-2xl backdrop-blur-md">
                      <p className="text-lg mobile:text-xl font-bold text-red-500">Successfully Conducted</p>
                      <p className="text-white/60 text-xs mobile:text-sm">International Group Adventures</p>
                   </div>
                </div>

                <p className="text-base mobile:text-lg text-white/70 leading-relaxed mb-8 mobile:mb-10 max-w-xl">
                  Planet Life's Strangers Trips are designed for the bold, the solo, and the curious. We bring together a group of like-minded travelers who start as strangers and return as a lifelong family.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mobile:gap-8">
                   <div className="flex gap-4">
                      <div className="w-10 h-10 mobile:w-12 mobile:h-12 rounded-xl bg-red-600 flex-shrink-0 flex items-center justify-center">
                         <ShieldCheck className="w-5 h-5 mobile:w-6 mobile:h-6 text-white" />
                      </div>
                      <div>
                         <h4 className="font-bold text-base mobile:text-lg mb-1 uppercase tracking-tight">Safe & Secured</h4>
                         <p className="text-xs mobile:text-sm text-white/50">Meticulously planned with 24/7 on-ground assistance.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-10 h-10 mobile:w-12 mobile:h-12 rounded-xl bg-white/10 flex-shrink-0 flex items-center justify-center">
                         <Sparkles className="w-5 h-5 mobile:w-6 mobile:h-6 text-red-600" />
                      </div>
                      <div>
                         <h4 className="font-bold text-base mobile:text-lg mb-1 uppercase tracking-tight">Curated Moments</h4>
                         <p className="text-xs mobile:text-sm text-white/50">Exclusive activities designed for deep group bonding.</p>
                      </div>
                   </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-center">
               <ScrollReveal direction="right" delay={0.2}>
                  <div className="relative group p-6 mobile:p-8 rounded-[2rem] mobile:rounded-[3.5rem] bg-red-600/5 backdrop-blur-sm border border-white/5 overflow-hidden">
                     <div className="absolute -inset-4 bg-red-600/10 rounded-[2.5rem] mobile:rounded-[3rem] blur-2xl group-hover:bg-red-600/20 transition-all duration-500" />
                     <div className="relative z-10">
                        <h4 className="text-2xl mobile:text-3xl font-black uppercase tracking-tighter mb-2 text-red-600">Next Adventure</h4>
                        <p className="text-white/80 text-xs mobile:text-sm mb-6 uppercase tracking-[0.2em] font-bold leading-relaxed">Join our next signature group of strangers turned family</p>
                        <Button asChild className="bg-red-600 hover:bg-white hover:text-black text-white rounded-full w-full sm:w-fit px-8 py-6 font-black uppercase tracking-widest text-xs transition-all shadow-xl hover:scale-105">
                           <Link to="/packages">
                             Explore Schedule <ArrowRight className="ml-2 w-5 h-5" />
                           </Link>
                        </Button>
                     </div>
                  </div>
               </ScrollReveal>
            </div>


          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 mobile:py-16 md:py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-3 mobile:px-4">
          <ScrollReveal width="100%">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-[0.2em] mobile:tracking-[0.3em] uppercase mb-3 mobile:mb-4 block text-[10px] mobile:text-xs">Our Philosophy</span>
              <h2 className="text-2xl xs:text-3xl mobile:text-4xl md:text-5xl font-heading font-bold text-foreground uppercase tracking-tight">
                {aboutContent.coreValuesTitle || "Why Travelers Choose Us"}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-4 gap-4 mobile:gap-6 md:gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-500">
                    <value.icon className="w-8 h-8 text-red-600 group-hover:text-black" />
                  </div>
                  <h3 className="text-xl font-extrabold mb-4 text-black group-hover:text-red-600 transition-colors duration-500 uppercase">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-balance">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Trips Section */}
      <section className="py-12 mobile:py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-3 mobile:px-4">
          <ScrollReveal width="100%">
            <div className="text-center mb-16">
              <span className="text-red-600 font-bold tracking-[0.2em] mobile:tracking-[0.3em] uppercase mb-3 mobile:mb-4 block text-[10px] mobile:text-xs">Our Services</span>
              <h2 className="text-2xl xs:text-3xl mobile:text-4xl md:text-5xl font-heading font-bold text-black uppercase tracking-tight">
                {aboutContent.servicesTitle || "Trips We Offer"}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mobile:gap-8">
            {[
              { title: "Corporate Trips", icon: Briefcase, img: corporateTripsImg, desc: "Professional itineraries designed for team building, offsites, and corporate retreats with top-tier amenities." },
              { title: "Private Trips", icon: ShieldCheck, img: privateTripsImg, desc: "Exclusive, personalized journeys offering ultimate privacy, luxury, and tailor-made experiences." },
              { title: "Strangers Trips", icon: Users, img: strangersTripsImg, desc: "Join a group of like-minded solo travelers for an adventure of a lifetime and make lasting friendships." },
              { title: "Couples Trips", icon: Heart, img: couplesTripsImg, desc: "Romantic getaways crafted perfectly for couples to celebrate honeymoons, anniversaries, or just each other." },
              { title: "College Trips", icon: GraduationCap, img: collegeTripsImg, desc: "Budget-friendly, action-packed group tours perfect for students looking for fun and exploration." },
              { title: "Family Trips", icon: Home, img: familyTripsImg, desc: "Wholesome holiday packages designed to bring families together with activities suitable for all ages." }
            ].map((trip, index) => (
              <ScrollReveal key={index} delay={index * 0.1} width="100%">
                <div className="group bg-white rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2">
                  <div className="relative h-48 mobile:h-56 overflow-hidden">
                    <img src={trip.img} alt={trip.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <div className="p-6 mobile:p-8 flex flex-col flex-grow relative">
                    <div className="absolute -top-8 right-6 bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 group-hover:rotate-12 transition-transform duration-500">
                      <trip.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl mobile:text-2xl font-heading font-black uppercase text-black mb-3 pr-16">
                      {trip.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {trip.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 mobile:py-14 md:py-20 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mobile:gap-8 md:gap-12 text-center">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="space-y-2">
                  <div className="text-2xl mobile:text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-black">
                    {stat.number}
                  </div>
                  <div className="text-black/80 uppercase tracking-widest text-xs font-extrabold">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Gallery */}
      <section className="py-12 mobile:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-3 mobile:px-4">
          <ScrollReveal width="100%">
            <div className="text-center mb-16">
              <span className="text-red-600 font-extrabold tracking-[0.15em] mobile:tracking-[0.2em] uppercase mb-3 mobile:mb-4 block text-[10px] mobile:text-xs">Visual Journey</span>
              <h2 className="text-2xl xs:text-3xl mobile:text-4xl md:text-5xl font-sans font-extrabold text-black uppercase">
                Our World Through Your Eyes
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative px-2 mobile:px-4 sm:px-8 md:px-12">
            <ScrollReveal delay={0.2}>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {galleryImages.map((img, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full mobile:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <div
                          className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/5]"
                          onClick={() => setSelectedImage(img)}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white text-lg font-medium">{img.alt}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8 gap-4">
                  <CarouselPrevious className="relative translate-x-0 translate-y-0 h-12 w-12 border-red-600 text-red-600 hover:bg-red-600 hover:text-black" />
                  <CarouselNext className="relative translate-x-0 translate-y-0 h-12 w-12 border-red-600 text-red-600 hover:bg-red-600 hover:text-black" />
                </div>
              </Carousel>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 mobile:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-3 mobile:px-4">
          <ScrollReveal width="100%">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-4 rounded-full bg-red-600/10 mb-8">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-2xl xs:text-3xl mobile:text-4xl md:text-5xl font-sans font-extrabold mb-4 mobile:mb-6 md:mb-8 text-black uppercase">
                {aboutContent.missionTitle}
              </h2>
              <p className="text-base mobile:text-lg sm:text-xl md:text-2xl text-black font-extrabold leading-relaxed italic font-sans">
                "{aboutContent.missionText}"
              </p>
              <div className="mt-12 flex justify-center">
                <div className="w-24 h-1 bg-red-600 rounded-full" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#d4af37] transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
