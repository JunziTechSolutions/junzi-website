import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
  isOpen: boolean
  isClosing: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, isClosing, onClose, children, className }: ModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isOpen && !isClosing) return null

  const modalContent = (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      style={{ zIndex: 2147483647 }}
    >
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isClosing ? "opacity-0" : "opacity-100"
        )} 
      />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div 
          className={cn(
            "relative w-full max-w-2xl bg-white rounded-lg shadow-xl transform transition-all duration-300",
            isClosing ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100",
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  )

  return mounted ? createPortal(modalContent, document.body) : null
}

// Отдельный компонент для header - всегда по центру экрана
export function HeaderModal({ isOpen, isClosing, onClose, children, className }: ModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isOpen && !isClosing) return null

  const modalContent = (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      style={{ zIndex: 2147483647 }}
    >
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isClosing ? "opacity-0" : "opacity-100"
        )} 
      />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div 
          className={cn(
            "relative w-full max-w-2xl bg-white rounded-lg shadow-xl transform transition-all duration-300",
            isClosing ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100",
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  )

  return mounted ? createPortal(modalContent, document.body) : null
} 