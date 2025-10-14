import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CaseStudy } from "@/data/cases"
import { TrendingUp } from "lucide-react"

interface CaseResultsProps {
  caseStudy: CaseStudy
}

export default function CaseResults({ caseStudy }: CaseResultsProps) {
  return (
    <div className="my-12 bg-muted rounded-xl p-8 font-primary">
      <div className="text-center mb-8">
        <TrendingUp className="w-12 h-12 text-[#0b1e54] mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Measurable Results</h2>
        <p className="text-muted-foreground">
          Specific metrics we achieved within the project
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {caseStudy.results.map((result, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
            <CardTitle className="text-3xl font-extrabold text-[#0b1e54]">
            {result.value}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-sm">{result.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 