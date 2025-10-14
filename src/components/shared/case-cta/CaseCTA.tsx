import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"

interface CaseCTAProps {
  title?: string
  description?: string
}

export default function CaseCTA({ 
  title = "Ready to start your project?", 
  description = "Let's discuss how we can help you achieve your goals. We specialize in creating solutions that are not only beautiful but also deliver measurable results."
}: CaseCTAProps) {
  return (
    <div className="text-center my-12 not-prose font-primary">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="https://calendar.app.google/Wntyianq12RmHVU6A" target="_blank" rel="noopener noreferrer">
  <Button 
    size="lg" 
    className="flex items-center gap-2 text-white hover:opacity-90 shadow-lg"
    style={{
      background:
        "linear-gradient(97.94deg, #4461B1 -2.89%, #4FABFF 91.06%)",
    }}
  >
    <Mail className="w-4 h-4" />
    Schedule a call
    <ArrowRight className="w-4 h-4 ml-2" />
  </Button>
</a>
      </div>
    </div>
  )
} 