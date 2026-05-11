import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number; // in seconds
  delay?: number; // in seconds
  className?: string;
  suffix?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  className = "",
  suffix = ""
}: CountUpProps) {
  const count = useMotionValue(from);
  const rounded = useSpring(count, {
    damping: 30,
    stiffness: 100,
  });
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const controls = animateValue(count, to, duration);
        return () => controls.stop();
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, to, duration, delay, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref} className={className}>{from}{suffix}</span>;
}

// Simple animation helper since framer-motion's animate is sometimes easier to use this way
function animateValue(value: any, to: number, duration: number) {
  const start = value.get();
  const startTime = performance.now();

  let animationFrame: number;

  const update = (now: number) => {
    const elapsed = (now - startTime) / 1000;
    const progress = Math.min(elapsed / duration, 1);
    
    // Simple easeOutQuad
    const ease = progress * (2 - progress);
    
    value.set(start + (to - start) * ease);

    if (progress < 1) {
      animationFrame = requestAnimationFrame(update);
    }
  };

  animationFrame = requestAnimationFrame(update);

  return {
    stop: () => cancelAnimationFrame(animationFrame)
  };
}
