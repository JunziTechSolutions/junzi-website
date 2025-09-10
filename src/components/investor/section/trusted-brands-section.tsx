"use client"

import { useEffect, useState } from "react"

// Define brand data based on the investor hero section logos
const brandsData = [
  { src: '/company/AstroAI.png', name: 'AstroAI' },
  { src: '/company/boston e bikes.svg', name: 'Boston E-Bikes' },
  { src: '/company/overwatch.svg', name: 'Overwatch' },
  { src: '/company/publefy.png', name: 'Publefy' },
  { src: '/company/shout.png', name: 'Shout' },
  { src: '/company/iengie.png', name: 'Iengie' }
];

// Create duplicated array for infinite scroll effect
const infiniteBrandsData = [...brandsData, ...brandsData, ...brandsData]

export default function TrustedBrandsSection() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set())
  const [isPaused, setIsPaused] = useState(false)

  const handleImageLoad = (name: string) => {
    setLoadedImages(prev => new Set(prev).add(name))
  }

  const handleImageError = (name: string) => {
    console.warn(`Failed to load image for brand: ${name}`)
    setErrorImages(prev => new Set(prev).add(name))
  }

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <section className="lg:hidden pt-8 pb-16 overflow-hidden w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Partnership Title - Mobile only */}
        <h2 
          className="text-center mb-9 text-[#465478] uppercase"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '16.8px',
            lineHeight: '110%',
            letterSpacing: '8%',
            textTransform: 'uppercase'
          }}
        >
          GROWING PARTNERSHIP AROUND THE WORLD
        </h2>
        
        {/* Mobile: Infinite Slider */}
        <div className="block">
          <div 
            className="flex items-center gap-[22px] w-max"
            style={{
              animation: isPaused ? 'none' : 'infiniteScroll 25s linear infinite'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {infiniteBrandsData.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center transition-all duration-300 ease-in-out
                           filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 flex-shrink-0"
                style={{
                  height: '32px',
                  minWidth: '80px'
                }}
                title={brand.name}
              >
                {!errorImages.has(brand.name) ? (
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="h-8 w-auto object-contain"
                    onLoad={() => handleImageLoad(brand.name)}
                    onError={() => handleImageError(brand.name)}
                    loading="lazy"
                  />
                ) : (
                  <div 
                    className="flex items-center justify-center h-8 text-xs text-gray-400"
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
      </div>

      {/* CSS Animation for Infinite Scroll */}
      <style jsx>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(brandsData.length * (80 + 22))}px);
          }
        }
      `}</style>
    </section>
  )
}
