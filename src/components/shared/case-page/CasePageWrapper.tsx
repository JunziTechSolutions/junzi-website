"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CasePageWrapperProps {
  children: React.ReactNode;
}

export const CasePageWrapper: React.FC<CasePageWrapperProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Небольшая задержка для плавного входа
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        transform: "translateX(100%)" 
      }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? "translateX(0%)" : "translateX(100%)" 
      }}
      transition={{ 
        duration: 0.5, 
        ease: "easeInOut" 
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}; 