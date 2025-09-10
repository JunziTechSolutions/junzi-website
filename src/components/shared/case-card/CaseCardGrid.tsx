import { CaseStudy } from "@/data/cases"
import CaseCard from "./CaseCard"

interface CaseCardGridProps {
  cases: CaseStudy[]
  variant?: "featured" | "compact" | "grid"
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export default function CaseCardGrid({ 
  cases, 
  variant = "grid",
  columns = 3,
  className 
}: CaseCardGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  }

  return (
    <div className={`grid gap-6 ${gridCols[columns]} ${className || ""}`}>
      {cases.map((caseStudy) => (
        <CaseCard
          key={caseStudy.id}
          caseStudy={caseStudy}
          variant={variant}
        />
      ))}
    </div>
  )
} 