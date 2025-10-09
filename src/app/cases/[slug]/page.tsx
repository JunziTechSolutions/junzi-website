import Image from "next/image"

import { casesData } from "@/data/cases"
import { notFound } from "next/navigation"
import RelatedCases from "@/components/shared/related-cases"
import CaseNavigation from "@/components/shared/case-navigation"
import CaseMeta from "@/components/shared/case-meta"
import CaseResults from "@/components/shared/case-results"
import CaseTestimonial from "@/components/shared/case-testimonial"
import CaseGallery from "@/components/shared/case-gallery"
import CaseCTA from "@/components/shared/case-cta"
import Breadcrumbs from "@/components/shared/breadcrumbs"
import { PageTransitionContainer } from "@/components/shared/PageTransitionContainer"


interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = casesData.find(caseStudy => caseStudy.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <PageTransitionContainer>
      <div className="bg-background text-foreground">
        <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <article className="prose prose-gray dark:prose-invert max-w-4xl mx-auto">
            <Breadcrumbs 
              items={[
                { label: "Projects", href: "/cases" },
                { label: caseStudy.title }
              ]} 
            />
            <div className="space-y-4 not-prose">
              <p className="text-[#0b1e54] font-semibold font-primary">{caseStudy.client}</p>
              <h1 className="text-4xl md:text-5xl font-primary font-extrabold tracking-tight">
                {caseStudy.title}
              </h1>
              <p className="font-primary text-muted-foreground text-lg md:text-xl">
                {caseStudy.description}
              </p>
            </div>

            <div className="my-8 md:my-12">
              <Image
                src={caseStudy.images[0].src}
                alt={`${caseStudy.title} - Hero Image`}
                width={1200}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>

            <CaseMeta caseStudy={caseStudy} />
            
            <div className="grid md:grid-cols-3 gap-8 my-12 font-primary">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-4">Client</h2>
                <p>
                  {caseStudy.client} - {caseStudy.industry} company, which approached us to solve complex tasks in the field of {caseStudy.category.toLowerCase()}.
                </p>
                <h2 className="text-3xl font-bold mt-8 mb-4">Task</h2>
                <p>
                  {caseStudy.challenge}
                </p>
              </div>
            </div>

            <div className="my-12">
              <h2 className="text-3xl font-bold font-primary mb-6 text-center">Our solution</h2>
              <div className="space-y-8 font-primary">
                <p>
                  {caseStudy.solution}
                </p>
              </div>
            </div>
            
            <CaseGallery caseStudy={caseStudy} />

            <CaseResults caseStudy={caseStudy} />

            <CaseTestimonial caseStudy={caseStudy} />

            <CaseCTA />
          </article>
        </main>
        
        <RelatedCases currentCaseSlug={params.slug} />
        <CaseNavigation currentSlug={params.slug} />
      </div>
    </PageTransitionContainer>
  )
} 