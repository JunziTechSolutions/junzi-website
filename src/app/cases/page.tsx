import { casesData } from "@/data/cases"
import CaseCardGrid from "@/components/shared/case-card/CaseCardGrid"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/landing/layout/header"

export default function CasesPage() {
  const allCases = casesData

  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <main className="container mx-auto px-4 md:px-6 pt-40 pb-24">
        <div className="mb-10 flex items-center">
          <Button
            variant="outline"
            asChild
            className="rounded-full shadow-sm hover:shadow-md transition-button"
          >
            <Link href="/" aria-label="Back to home page">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
        {/* Заголовок страницы */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-primary tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Explore our cases and learn how we help companies achieve outstanding results
          </p>
        </div>
        <section className="py-16">
          <CaseCardGrid 
            cases={allCases}
            variant="grid"
            columns={3}
            className="max-w-7xl mx-auto"
          />
        </section>
      </main>
    </div>
    </>
  )
} 