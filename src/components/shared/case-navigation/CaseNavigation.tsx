"use client";

import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { casesData } from "@/data/cases"
import { AnimatedNavigationButton } from "@/components/shared/buttons/AnimatedNavigationButton"

interface CaseNavigationProps {
  currentSlug: string
}

export default function CaseNavigation({ currentSlug }: CaseNavigationProps) {
  const currentIndex = casesData.findIndex(caseStudy => caseStudy.slug === currentSlug)
  
  if (currentIndex === -1) return null

  const prevCase = currentIndex > 0 ? casesData[currentIndex - 1] : null
  const nextCase = currentIndex < casesData.length - 1 ? casesData[currentIndex + 1] : null

  return (
    <div className="border-t border-border py-8 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {prevCase ? (
            <AnimatedNavigationButton
              href={`/cases/${prevCase.slug}`}
              variant="ghost"
              className="flex items-center gap-2 w-full sm:w-auto justify-start sm:justify-center"
              icon="none"
              slideDirection="left"
            >
              <ArrowLeft className="w-4 h-4 flex-shrink-0" />
              <div className="text-left min-w-0 flex-1">
                <p className="text-sm text-muted-foreground">Previous project</p>
                <p className="font-semibold truncate">{prevCase.title}</p>
              </div>
            </AnimatedNavigationButton>
          ) : (
            <div className="w-full sm:w-auto" />
          )}

          <AnimatedNavigationButton
            href="/cases"
            variant="outline"
            slideDirection="left"
            className="w-full sm:w-auto order-first sm:order-none"
          >
            All projects
          </AnimatedNavigationButton>

          {nextCase ? (
            <AnimatedNavigationButton
              href={`/cases/${nextCase.slug}`}
              variant="ghost"
              className="flex items-center gap-2 w-full sm:w-auto justify-end sm:justify-center"
              icon="none"
              slideDirection="right"
            >
              <div className="text-right min-w-0 flex-1">
                <p className="text-sm text-muted-foreground">Next project</p>
                <p className="font-semibold truncate">{nextCase.title}</p>
              </div>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </AnimatedNavigationButton>
          ) : (
            <div className="w-full sm:w-auto" />
          )}
        </div>
      </div>
    </div>
  )
} 