import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

import { storyImages } from "@/data/storyImages";


const StoryMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Split images into 3 rows
  const row1 = storyImages.slice(0, 16);
  const row2 = storyImages.slice(16, 32);
  const row3 = storyImages.slice(32, 48);

  const MarqueeRow = ({ images, reverse = false, speed = "30s" }: { images: string[], reverse?: boolean, speed?: string }) => (
    <div className={`flex overflow-x-auto overflow-y-hidden select-none gap-3 mobile:gap-4 sm:gap-6 py-2 mobile:py-3 cursor-pointer scrollbar-hide ${isPaused ? 'cursor-grab active:cursor-grabbing' : ''}`}>
      <div 
        className={`flex min-w-full shrink-0 gap-3 mobile:gap-4 sm:gap-6 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: speed }}
      >
        {images.map((img, i) => (
          <div 
            key={i} 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(img);
              setIsPaused(true);
            }}
            className="w-40 h-52 mobile:w-48 mobile:h-60 sm:w-52 sm:h-64 md:w-64 md:h-80 flex-shrink-0 rounded-xl mobile:rounded-2xl overflow-hidden shadow-lg border border-white/10 group relative transition-transform hover:scale-105 active:scale-95"
          >
            <img 
              src={`/img/stories/${img}`} 
              alt="Travel Story" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {images.map((img, i) => (
          <div 
            key={`dup-${i}`} 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(img);
              setIsPaused(true);
            }}
            className="w-40 h-52 mobile:w-48 mobile:h-60 sm:w-52 sm:h-64 md:w-64 md:h-80 flex-shrink-0 rounded-xl mobile:rounded-2xl overflow-hidden shadow-lg border border-white/10 group relative transition-transform hover:scale-105 active:scale-95"
          >
            <img 
              src={`/img/stories/${img}`} 
              alt="Travel Story" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative py-12 bg-white overflow-hidden">
      <div 
        className={`space-y-3 mobile:space-y-4 ${isPaused ? 'marquee-paused' : ''}`}
        onClick={() => setIsPaused(!isPaused)}
      >
        <MarqueeRow images={row1} speed="35s" />
        <MarqueeRow images={row2} reverse speed="30s" />
        <MarqueeRow images={row3} speed="40s" />
      </div>

      <Dialog 
        open={!!selectedImage} 
        onOpenChange={(open) => {
          if (!open) {
            setSelectedImage(null);
            setIsPaused(false);
          }
        }}
      >
        <DialogContent className="max-w-4xl border-none bg-transparent shadow-none p-0 flex items-center justify-center">
            <DialogTitle className="sr-only">Travel Story Image</DialogTitle>
            {selectedImage && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative max-h-[90vh] w-auto overflow-hidden rounded-2xl shadow-2xl"
              >
                <img 
                  src={`/img/stories/${selectedImage}`} 
                  alt="Full view" 
                  className="max-h-[90vh] w-auto object-contain"
                />
              </motion.div>
            )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StoryMarquee;
