import { CaseStudy } from "@/data/cases"
import CaseCard from "./CaseCard"

interface FeaturedCasesProps {
  cases: CaseStudy[]
  title?: string
  subtitle?: string
  className?: string
}

export default function FeaturedCases({ 
  cases, 
  title = "Featured Projects",
  subtitle = "Our most significant works and achievements",
  className 
}: FeaturedCasesProps) {
  return (
    <section className={`py-16 ${className || ""}`}>
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Сетка избранных кейсов */}
        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <div key={caseStudy.id} className="w-full">
              <CaseCard
                caseStudy={caseStudy}
                variant="featured"
                className={index % 2 === 1 ? "lg:flex-row-reverse" : ""}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 