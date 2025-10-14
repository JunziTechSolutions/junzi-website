import { casesData, CaseStudy } from "@/data/cases"
import CaseCard from "@/components/shared/case-card/CaseCard"

interface RelatedCasesProps {
  currentCaseSlug: string
  maxCases?: number
}

export default function RelatedCases({ currentCaseSlug, maxCases = 3 }: RelatedCasesProps) {
  const currentCase = casesData.find(caseStudy => caseStudy.slug === currentCaseSlug)
  
  if (!currentCase) return null

  // Найти связанные кейсы по тегам или категории
  const relatedCases = casesData
    .filter(caseStudy => caseStudy.slug !== currentCaseSlug)
    .filter(caseStudy => {
      // Проверяем совпадение тегов
      const commonTags = caseStudy.tags.filter(tag => 
        currentCase.tags.includes(tag)
      )
      return commonTags.length > 0 || caseStudy.category === currentCase.category
    })
    .slice(0, maxCases)

  if (relatedCases.length === 0) return null

  return (
    <section className="my-16 font-primary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Similar projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedCases.map((caseStudy) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  )
} 