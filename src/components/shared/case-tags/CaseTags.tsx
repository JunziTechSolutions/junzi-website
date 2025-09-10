import { CaseStudy } from "@/data/cases"
import { Tag } from "lucide-react"

interface CaseTagsProps {
  caseStudy: CaseStudy
  className?: string
}

export default function CaseTags({ caseStudy, className = "" }: CaseTagsProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Tag className="w-4 h-4 text-muted-foreground" />
      <div className="flex flex-wrap gap-2">
        {caseStudy.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
} 