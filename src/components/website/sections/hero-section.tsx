import { Button } from "@/components/ui/button"
import { SimpleVideoPlayer } from "@/components/shared/video-player"
import { BackgroundVideo } from "@/components/ui/background-video"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden backdrop-blur-[100px] bg-gray-50" style={{
      backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)
      `,
      backgroundSize: '3px 3px'
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1280 622" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Grid lines */}
          {Array.from({ length: 6 }, (_, i) => (
            <g key={i}>
              <line x1="0" y1={100 * (i + 1)} x2="1280" y2={100 * (i + 1)} stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <line x1={100 * (i + 1)} y1="0" x2={100 * (i + 1)} y2="622" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </g>
          ))}
          {/* Diagonal lines */}
          <line x1="0" y1="0" x2="1280" y2="622" stroke="white" strokeWidth="0.5" opacity="0.1"/>
          <line x1="1280" y1="0" x2="0" y2="622" stroke="white" strokeWidth="0.5" opacity="0.1"/>
          {/* Dots */}
          {Array.from({ length: 6 }, (_, i) => (
            <circle key={i} cx={100 * (i + 1)} cy={100 * (i + 1)} r="5" fill="white" opacity="0.2"/>
          ))}
        </svg>
      </div>

      {/* Background Video */}
      <BackgroundVideo src="/videos/animation1.mp4" opacity={0.3} />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-14 lg:pt-14 xl:pt-20 pb-5 lg:pb-7 xl:pb-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
          
          {/* Text Content */}
          <div className="text-center max-w-3xl mx-auto flex flex-col mb-8 lg:mb-12">
            <h1 
              className="text-[48px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-medium leading-tight tracking-tight mb-[30px] lg:mb-[27px]"
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Innovate.
              <br />
              Build. Conquer.
            </h1>
            
            <p 
              className="text-[20px] sm:text-lg md:text-xl lg:text-[22px] text-gray-800 leading-relaxed mb-[30px] lg:mb-[27px]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Junzi is your development partner.
            </p>
            
            <div className="mb-[30px] lg:mb-[40px] xl:mb-[56px]">
              <Link href="/form">
                <Button
                  size="lg"
                  className="w-[216px] h-[55px] px-[22.26px] py-[12.98px] sm:w-auto sm:px-7 sm:py-3 lg:px-9 lg:py-4 text-base lg:text-lg font-bold bg-gradient-to-r from-[#0B1E54] to-[#4FABFF] hover:opacity-90 transition-all duration-300 rounded-full shadow-lg"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Schedule Introduction
                </Button>
              </Link>
            </div>
          </div>

          {/* Decorative Background Element - Desktop Only */}
          <div className="hidden xl:block absolute left-[-100px] top-1/4 w-[600px] h-[600px] pointer-events-none">
            <div className="absolute inset-0 bg-[rgba(150,202,230,0.8)] rounded-full scale-x-125 blur-2xl"></div>
            <div className="absolute inset-0 bg-gradient-radial from-[rgba(150,202,230,0.9)] via-transparent to-transparent rounded-full scale-x-150 blur-3xl"></div>
          </div>
          
          {/* Video Container */}
          <div className="relative w-full max-w-[398px] h-[394px] sm:max-w-[1150px] sm:h-auto mx-auto flex items-center justify-center">
          <div className="relative w-full h-full sm:aspect-video lg:aspect-[16/10] xl:aspect-[16/9] rounded-[32px] lg:rounded-2xl overflow-hidden shadow-none border-[4.83px] sm:border-4 lg:border-8 border-white/5">
          {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-radial from-[rgba(150,202,230,0.5)] via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-radial from-[rgba(150,202,230,0.5)] via-transparent to-transparent scale-x-[-1]"></div>
              
              {/* Video Player */}
              <div className="relative z-10 w-full h-full">
                <SimpleVideoPlayer
                  src="/videos/1080.mp4"
                  title="Abstract background video"
                  autoPlay={false}
                  loop={true}
                  muted={false}
                  playsInline={true}
                  className="w-full h-full rounded-[32px] sm:rounded-lg lg:rounded-xl"
                  previewImage="/slider/image.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
