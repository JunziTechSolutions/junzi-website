import { motion } from "framer-motion";

interface AnimatedFormContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const AnimatedFormContainer: React.FC<AnimatedFormContainerProps> = ({
  children,
  title,
  subtitle
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full px-3 py-3 sm:px-4 sm:py-4 md:px-8 md:py-6"
    >
      {title && <h1 className="text-black font-semibold mb-2 sm:mb-3 md:mb-4 text-xl sm:text-2xl">{title}</h1>}
      {subtitle && <p className="text-black mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">{subtitle}</p>}
      {children}
    </motion.div>
  );
}; 