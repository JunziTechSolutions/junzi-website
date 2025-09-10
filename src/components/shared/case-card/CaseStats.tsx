import { CaseStudy } from "@/data/cases"

interface CaseStatsProps {
  cases: CaseStudy[]
  className?: string
}

export default function CaseStats({ cases, className }: CaseStatsProps) {
  // Подсчитываем статистику
  const totalProjects = cases.length
  const totalResults = cases.reduce((acc, caseStudy) => {
    return acc + caseStudy.results.length
  }, 0)
  
  const averageResults = Math.round(totalResults / totalProjects)
  const categories = Array.from(new Set(cases.map(c => c.category.split('/')[0])))
  const uniqueCategories = categories.length

  const stats = [
    {
      label: "Projects",
      value: totalProjects,
      description: "Successfully completed"
    },
    {
      label: "Categories",
      value: uniqueCategories,
      description: "Different industries"
    },
    {
      label: "Results",
      value: totalResults,
      description: "Achieved metrics"
    },
    {
      label: "Average Result",
      value: `${averageResults}+`,
      description: "Metrics per project"
    }
  ]

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 ${className || ""}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Statistics
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Numbers that speak about the quality of our work
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 