import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CaseStudy } from "@/data/cases"
import { Quote } from "lucide-react"

interface CaseTestimonialProps {
  caseStudy: CaseStudy
}

export default function CaseTestimonial({ caseStudy }: CaseTestimonialProps) {
  return (
    <div className="my-12 font-primary">
      <div className="text-center mb-8">
        <Quote className="w-12 h-12 text-[#0b1e54] mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Client Testimonial</h2>
      </div>
      
      <blockquote className="text-center text-xl md:text-2xl leading-relaxed font-semibold border-l-4 border-[#0b1e54] pl-6 italic mb-8">
        "{caseStudy.testimonial.quote}"
      </blockquote>
      
      <div className="flex items-center justify-center">
        <Avatar className="w-16 h-16">
          <AvatarImage src={caseStudy.testimonial.avatar} alt={caseStudy.testimonial.author} />
          <AvatarFallback className="text-lg">
            {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 text-center">
          <p className="font-bold text-lg">{caseStudy.testimonial.author}</p>
          <p className="text-muted-foreground">{caseStudy.testimonial.position}</p>
        </div>
      </div>
    </div>
  )
} 
