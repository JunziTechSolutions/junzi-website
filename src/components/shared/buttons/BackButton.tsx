"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { navigateWithTransition } from "@/lib/viewTransition";

interface BackButtonProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export const BackButton: React.FC<BackButtonProps> = ({
  href = "/cases",
  className = "",
  children = "Back to Projects"
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    navigateWithTransition(router, href, {
      slideDirection: "left",
      duration: 500,
    });
  };

  return (
    <Button
      variant="ghost"
      className={`transition-button ${className}`}
      onClick={handleClick}
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      {children}
    </Button>
  );
}; 