import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-[9999]">
      <div className="w-32 h-32 md:w-40 md:h-40 relative">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left Mountain */}
          <motion.path
            d="M5,80 L30,35 L55,80 Z"
            fill="#dc2626"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: [30, 0, 30], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          />
          {/* Right Mountain */}
          <motion.path
            d="M45,80 L70,40 L95,80 Z"
            fill="#b91c1c"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: [30, 0, 30], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
          {/* Center Mountain (Tallest, overlapping) */}
          <motion.path
            d="M25,80 L50,15 L75,80 Z"
            fill="#ef4444"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: [30, 0, 30], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-white font-heading font-extrabold text-xl md:text-2xl uppercase tracking-[0.3em] mt-4 flex items-center gap-2"
      >
        Planet Life
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
