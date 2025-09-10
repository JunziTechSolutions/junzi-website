"use client"

import { useEffect, useState } from "react"

// Define brand data based on the current logos
const brandsData = [
  { src: "/company/AstroAI.png", name: "AstroAI", id: "astro_ai" },
  { src: "/life time natty.png", name: "LifetimeNatty", id: "lifetimenatty" },
  { src: "/company/boston e bikes.svg", name: "Boston E Bikes", id: "boston_e_bikes" },
  { src: "/PhoniAI.png", name: "PhoniAI", id: "phoni_ai" },
  { src: "/PTB.jpg", name: "PTB", id: "ptb" },
  { src: "/company/gymHydra.png", name: "Gym Hydra", id: "gym_hydra" },
]

// Create duplicated array for infinite scroll effect
const infiniteBrandsData = [...brandsData, ...brandsData, ...brandsData]

interface TrustedBySectionProps {
  hideTitle?: boolean;
}

export default function TrustedBySection({ hideTitle = false }: TrustedBySectionProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set())
  const [isPaused, setIsPaused] = useState(false)

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => new Set(prev).add(id))
  }

  const handleImageError = (id: string) => {
    console.warn(`Failed to load image for brand: ${id}`)
    setErrorImages(prev => new Set(prev).add(id))
  }

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <section className="pt-2 pb-8 sm:pt-4 sm:pb-12 lg:pt-6 lg:pb-16 overflow-hidden w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        {!hideTitle && (
          <h2 
            className="text-center mb-[35px] sm:mb-12"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: 'clamp(14px, 4vw, 18.71px)',
              lineHeight: '110%',
              letterSpacing: '8%',
              textAlign: 'center',
              textTransform: 'uppercase',
              color: '#465478'
            }}
          >
            GROWING PARTNERSHIP AROUND THE WORLD
          </h2>
        )}
        
        {/* Mobile: Infinite Slider */}
        <div className="block sm:hidden">
          <div 
            className="flex items-center gap-8 w-max"
            style={{
              animation: isPaused ? 'none' : 'infiniteScroll 20s linear infinite'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {infiniteBrandsData.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex items-center justify-center transition-all duration-300 ease-in-out
                           filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 flex-shrink-0"
                style={{
                  width: '106px',
                  height: '24px'
                }}
                title={brand.name}
              >
                {!errorImages.has(brand.id) ? (
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                    onLoad={() => handleImageLoad(brand.id)}
                    onError={() => handleImageError(brand.id)}
                    loading="lazy"
                  />
                ) : (
                  <div 
                    className="flex items-center justify-center w-full h-full text-xs text-gray-400"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    {brand.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden sm:flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 flex-wrap">
          {brandsData.map((brand, index) => (
            <div
              key={brand.id}
              className="flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer
                         filter grayscale hover:grayscale-0 hover:scale-110 opacity-60 hover:opacity-100"
              style={{
                width: '106px',
                height: '24px'
              }}
              title={brand.name}
            >
              {!errorImages.has(brand.id) ? (
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                  onLoad={() => handleImageLoad(brand.id)}
                  onError={() => handleImageError(brand.id)}
                  loading="lazy"
                />
              ) : (
                <div 
                  className="flex items-center justify-center w-full h-full text-xs text-gray-400"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 500
                  }}
                >
                  {brand.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation for Infinite Scroll */}
      <style jsx>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(brandsData.length * (106 + 32))}px);
          }
        }
      `}</style>
    </section>
  )
}