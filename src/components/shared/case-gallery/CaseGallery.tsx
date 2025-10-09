import Image from "next/image"
import { CaseStudy } from "@/data/cases"
import { Image as ImageIcon } from "lucide-react"

interface CaseGalleryProps {
  caseStudy: CaseStudy
}

export default function CaseGallery({ caseStudy }: CaseGalleryProps) {
  if (caseStudy.images.length <= 1) return null

  return (
    <div className="my-12">
      <div className="font-primary text-center mb-8">
        <ImageIcon className="w-12 h-12 text-[#0b1e54] mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Project Gallery</h2>
        <p className="text-muted-foreground">
          Visual materials and project screenshots
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudy.images.slice(1).map((image, index) => (
          <div key={index} className="group">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow w-full h-auto"
            />
            <p className="font-primary text-sm text-muted-foreground mt-2 text-center">
              {image.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 