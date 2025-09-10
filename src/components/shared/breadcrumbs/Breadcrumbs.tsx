"use client";

import { Home } from "lucide-react"
import { AnimatedNavigationButton } from "@/components/shared/buttons/AnimatedNavigationButton"

interface BreadcrumbsProps {
  items: {
    label: string
    href?: string
  }[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-8">
      <AnimatedNavigationButton
        href="/"
        variant="link"
        className="flex items-center text-muted-foreground p-0 h-auto"
        slideDirection="left"
      >
        <Home className="w-4 h-4" />
      </AnimatedNavigationButton>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <AnimatedNavigationButton
              href={item.href}
              variant="link"
              className="text-muted-foreground p-0 h-auto"
              slideDirection="left"
            >
              {item.label}
            </AnimatedNavigationButton>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
} 