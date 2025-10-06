"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

type MotionWrapperProps = {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  initial?: string;
  whileInView?: string;
  viewport?: {
    once?: boolean;
    amount?: number;
  };
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function MotionWrapper({
  children,
  variants = defaultVariants,
  className,
  initial = "hidden",
  whileInView = "visible",
  viewport = { once: true, amount: 0.3 },
}: MotionWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMounted(true);
    
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // If not mounted, reduced motion is preferred, or on mobile, render without animation
  if (!isMounted || isReducedMotion || isMobile) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
