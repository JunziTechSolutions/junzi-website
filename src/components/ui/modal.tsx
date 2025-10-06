"use client";

import { type ReactNode, type MouseEvent } from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export function Modal({ isOpen, isClosing, onClose, children, className }: ModalProps) {
  if (!isOpen && !isClosing) {
    return null;
  }

  const handleContainerClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" onClick={onClose}>
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isClosing ? "opacity-0" : "opacity-100",
        )}
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          className={cn(
            "relative w-full max-w-2xl rounded-lg bg-white shadow-xl transition-all duration-300",
            isClosing ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100",
            className,
          )}
          onClick={handleContainerClick}
        >
          <div className="relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
