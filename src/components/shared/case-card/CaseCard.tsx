import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react"
import { CaseStudy } from "@/data/cases"
import { cn } from "@/lib/utils"

interface CaseCardProps {
  caseStudy: CaseStudy
  variant?: "featured" | "compact" | "grid"
  className?: string
}

export default function CaseCard({ 
  caseStudy, 
  variant = "compact",
  className 
}: CaseCardProps) {
  // Featured variant - большая карточка с горизонтальной компоновкой
  if (variant === "featured") {
    return (
      <Link href={`/cases/${caseStudy.slug}`} className="block">
        <Card className={cn(
          "group relative overflow-hidden bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900/50 dark:to-gray-800/50",
          "border border-gray-200/60 dark:border-gray-700/60",
          "shadow-lg hover:shadow-2xl transition-all duration-500 ease-out",
          "hover:scale-[1.02] hover:border-primary/30",
          "backdrop-blur-sm",
          className
        )}>
          <div className="grid lg:grid-cols-2 items-stretch min-h-[400px]">
            {/* Изображение */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                priority
              />
              {/* Overlay с градиентом */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Контент */}
            <div className="flex flex-col justify-between p-8 lg:p-10">
              <div className="space-y-6">
                {/* Категория */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    {caseStudy.category}
                  </span>
                </div>
                
                {/* Заголовок */}
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight font-primary text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {caseStudy.title}
                </h3>
                
                {/* Описание */}
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caseStudy.description}
                </p>
                
                {/* Теги */}
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Кнопка */}
              <div className="pt-6">
                <Button
                  variant="ghost"
                  className="group/btn inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 p-0 h-auto"
                >
                  <span>Read case study</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    )
  }

  // Grid variant - карточки для сетки
  if (variant === "grid") {
    return (
      <Link href={`/cases/${caseStudy.slug}`} className="block">
        <Card className={cn(
          "group relative overflow-hidden bg-white dark:bg-gray-900/50",
          "border border-gray-200/60 dark:border-gray-700/60",
          "shadow-md hover:shadow-xl transition-all duration-500 ease-out",
          "hover:scale-[1.03] hover:border-primary/40",
          "h-full flex flex-col",
          className
        )}>
          {/* Изображение */}
          <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Категория поверх изображения */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                {caseStudy.category}
              </span>
            </div>
          </div>
          
          {/* Контент */}
          <CardContent className="flex flex-col flex-grow p-6 space-y-4">
            {/* Заголовок */}
            <h4 className="text-l font-bold font-primary text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 leading-tight">
              {caseStudy.title}
            </h4>
            
            {/* Описание */}
            <p className="font-primary text-light font-normal text-s leading-relaxed flex-grow">
              {caseStudy.description}
            </p>
            
            {/* Теги */}
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Кнопка */}
            <div className="pt-2">
              <Button
                variant="ghost"
                className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 p-0 h-auto"
              >
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  // Compact variant - компактные карточки
  return (
    <Link href={`/cases/${caseStudy.slug}`} className="block">
      <Card className={cn(
        "group relative overflow-hidden bg-white dark:bg-gray-900/50",
        "border border-gray-200/60 dark:border-gray-700/60",
        "shadow-sm hover:shadow-lg transition-all duration-300 ease-out",
        "hover:scale-[1.02] hover:border-primary/30",
        "h-full flex flex-col",
        className
      )}>
        {/* Изображение */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            width={400}
            height={250}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Контент */}
        <CardContent className="flex flex-col flex-grow p-5 space-y-3">
          {/* Категория */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              {caseStudy.category}
            </span>
          </div>
          
          {/* Заголовок */}
          <h4 className="text-l font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 leading-tight">
            {caseStudy.title}
          </h4>
          
          {/* Описание */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
            {caseStudy.description}
          </p>
          
          {/* Теги */}
          <div className="flex flex-wrap gap-1">
            {caseStudy.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Кнопка */}
          <div className="pt-2">
            <Button
              variant="ghost"
              className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 p-0 h-auto"
            >
              <span>Learn more</span>
              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
} 