import { useState } from "react";
import { storyImages } from "@/data/storyImages";

const VerticalStoryMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Split images into 3 columns
  const col1 = storyImages.slice(0, 15);
  const col2 = storyImages.slice(15, 30);
  const col3 = storyImages.slice(30, 45);

  const MarqueeColumn = ({ images, reverse = false, speed = "30s" }: { images: string[], reverse?: boolean, speed?: string }) => (
    <div className="flex-1 h-full overflow-hidden relative">
      <div 
        className={`flex flex-col gap-2 mobile:gap-4 py-2 ${reverse ? 'animate-marquee-vertical-reverse' : 'animate-marquee-vertical'}`}
        style={{ animationDuration: speed }}
      >
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[4/5] rounded-lg mobile:rounded-xl overflow-hidden shadow-md border border-white/10 group flex-shrink-0">
            <img 
              src={`/img/stories/${img}`} 
              alt="Travel Story" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {images.map((img, i) => (
          <div key={`dup-${i}`} className="relative aspect-[4/5] rounded-lg mobile:rounded-xl overflow-hidden shadow-md border border-white/10 group flex-shrink-0">
            <img 
              src={`/img/stories/${img}`} 
              alt="Travel Story" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div 
      className={`h-full w-full overflow-hidden flex gap-2 mobile:gap-4 relative ${isPaused ? 'marquee-paused' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={() => setIsPaused(!isPaused)}
    >

      <MarqueeColumn images={col1} speed="60s" />
      <MarqueeColumn images={col2} reverse speed="50s" />
      <MarqueeColumn images={col3} speed="70s" />

      
      {/* Vignette effect for top and bottom - using section background color */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none" />

    </div>
  );
};

export default VerticalStoryMarquee;
