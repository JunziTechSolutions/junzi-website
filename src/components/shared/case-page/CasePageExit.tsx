"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

interface CasePageExitProps {
  children: React.ReactNode;
  isExiting: boolean;
  onExitComplete: () => void;
}

export const CasePageExit: React.FC<CasePageExitProps> = ({
  children,
  isExiting,
  onExitComplete,
}) => {
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        onExitComplete();
      }, 400); // Время анимации выхода

      return () => clearTimeout(timer);
    }
  }, [isExiting, onExitComplete]);

  return (
    <motion.div
      animate={{
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? "translateX(-100%)" : "translateX(0%)",
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}; 