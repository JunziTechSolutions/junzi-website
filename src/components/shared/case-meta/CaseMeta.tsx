import { CaseStudy } from "@/data/cases"
import { Calendar, User, Building, Clock } from "lucide-react"

interface CaseMetaProps {
  caseStudy: CaseStudy
}

export default function CaseMeta({ caseStudy }: CaseMetaProps) {
  return (
    <div className="bg-muted/50 rounded-lg p-6 mb-8 font-primary">
      <h3 className="text-lg font-semibold mb-4">Project Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <User className="w-5 h-5 text-[#0b1e54]" />
          <div>
            <p className="text-sm text-muted-foreground">Client</p>
            <p className="font-medium">{caseStudy.client}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Building className="w-5 h-5 text-[#0b1e54]" />
          <div>
            <p className="text-sm text-muted-foreground">Industry</p>
            <p className="font-medium">{caseStudy.industry}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-[#0b1e54]" />
          <div>
            <p className="text-sm text-muted-foreground">Timeline</p>
            <p className="font-medium">{caseStudy.timeline}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-[#0b1e54]" />
          <div>
            <p className="text-sm text-muted-foreground">Category</p>
            <p className="font-medium">{caseStudy.category}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <p className="text-sm text-muted-foreground mb-2">Our Role</p>
        <p className="font-medium">{caseStudy.role}</p>
      </div>
      
      <div className="mt-6">
        <p className="text-sm text-muted-foreground mb-2">Technologies</p>
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-[#0b1e54]/10 text-[#0b1e54] px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
} 