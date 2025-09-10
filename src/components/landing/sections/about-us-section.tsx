import Image from "next/image"
import { Award, Briefcase, Users, Zap } from "lucide-react"

const companyHighlights = [
  { icon: Award, value: "10+", label: "Years Innovating" },
  { icon: Briefcase, value: "70+", label: "Products Launched" },
  { icon: Users, value: "50+", label: "Expert Team" },
  { icon: Zap, value: "98%", label: "Client Satisfaction" },
]

export default function AboutUsSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/placeholder.svg?width=700&height=800&text=Diverse+Team+Brainstorming+in+Modern+Office" // Updated
              alt="Junzi Tech Solutions Team Environment - Diverse team collaborating"
              layout="fill"
              objectFit="cover"
              className="bg-slate-100 dark:bg-slate-800"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-slate-50 mb-8">
              Your Partner in
              <br />
              Corporate Digital Innovation.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              At JunziTech, we specialize in developing robust digital solutions for corporations. We combine strategic
              thinking with cutting-edge technology to deliver products that drive efficiency and growth.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
              Our team of seasoned experts is dedicated to understanding the unique challenges of large enterprises,
              crafting tailored solutions that yield measurable results and long-term value.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {companyHighlights.map((highlight) => (
                <div key={highlight.label} className="flex items-start gap-3">
                  <div className="p-2.5 bg-primary/10 dark:bg-primary/20 rounded-lg">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="block text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
                      {highlight.value}
                    </span>
                    <span className="block text-sm text-slate-500 dark:text-slate-400">{highlight.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
