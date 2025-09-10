"use client";

import { motion } from "framer-motion";
import { usePageTransition } from "@/hooks/usePageTransition";

interface PageTransitionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTransitionContainer: React.FC<PageTransitionContainerProps> = ({
  children,
  className = "",
}) => {
  const { isExiting } = usePageTransition();

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        transform: "translateX(100%)" 
      }}
      animate={{ 
        opacity: isExiting ? 0 : 1, 
        transform: isExiting ? "translateX(-100%)" : "translateX(0%)" 
      }}
      transition={{ 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 