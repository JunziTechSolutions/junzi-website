"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { navigateWithTransition } from "@/lib/viewTransition";
import { usePageTransition } from "@/hooks/usePageTransition";

interface AnimatedNavigationButtonProps {
  href: string;
  variant?: "link" | "outline" | "default" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  className?: string;
  icon?: "arrow-right" | "arrow-up-right" | "none";
  slideDirection?: "left" | "right";
  duration?: number;
}

export const AnimatedNavigationButton: React.FC<AnimatedNavigationButtonProps> = ({
  href,
  variant = "link",
  size = "default",
  children,
  className = "",
  icon = "arrow-right",
  slideDirection = "right",
  duration = 500,
}) => {
  const router = useRouter();
  const { startExit } = usePageTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Запускаем анимацию выхода
    startExit();
    
    // Небольшая задержка перед навигацией для плавности
    setTimeout(() => {
      navigateWithTransition(router, href, {
        slideDirection,
        duration,
      });
    }, 100);
  };

  const getIcon = () => {
    if (icon === "none") return null;
    if (icon === "arrow-up-right") {
      return <ArrowUpRight className="ml-1 h-4 w-4" />;
    }
    return <ArrowRight className="ml-1 h-3 w-3" />;
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`transition-button ${className}`}
      onClick={handleClick}
    >
      {children}
      {getIcon()}
    </Button>
  );
}; 