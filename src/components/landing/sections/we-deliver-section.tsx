"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useMediaQuery } from "../hooks/use-media-query"

const testimonials = [
  {
    id: "t1",
    name: "Alex Kan",
    title: "Founder, AstroAI.",
    quote:
      "“This app has been a life-changing guide for me. The daily horoscopes resonate deeply and help me approach each day with clarity. The personality breakdown was incredibly accurate—it's like the stars finally helped me understand myself.”",
    image: "/slider/cross.svg",
    mobileImage: "/slider/case/mobile/case1-mobile.svg",
  },
  {
    id: "t2",
    name: "Anastasia Shmidt",
    title: "Co-Founder, Worthefy LLC.",
    quote:
      "“I used to jump between bank apps, crypto wallets, and spreadsheets just to figure out my net worth. Now I open Worthefy and see everything in one place — cash, crypto, real estate, even social income. It’s clean, instant, and honestly part of my daily routine now.”",
    image: "/slider/test2.svg",
    mobileImage: "/slider/case/mobile/case2-mobile.svg",
  },
  {
    id: "t3",
    name: "David Lee",
    title: "Founder, OBS SYSTEMS LLC.",
    quote:
      "“OPS changed how I keep track of everything that matters — from my devices to my team’s security status. Before, I had to jump between maps, trackers, and manual logs. Now it’s all live, synced, and visualized in one place. I always know what’s happening in real time.”",
    image: "/slider/test3.svg",
    mobileImage: "/slider/case/mobile/case3-mobile.svg",
  },
  {
    id: "t4",
    name: "Xavier Kessler",
    title: "Founder, Overwatch LLC",
    quote:
      "“Working with JunziTech on Overwatch was a game-changer. We came in with a rough idea for a live event-streaming app, and they turned it into a sleek, fully functional platform that exceeded expectations. The team moved fast, nailed the UI, and understood our vision better than we did. It felt like having an in-house tech team that just gets it.”",
    image: "/slider/test4.svg",
    mobileImage: "/slider/case/mobile/case4-mobile.svg",
  },
  {
    id: "t5",
    name: "Yurii Shymanskyi",
    title: "Founder/President, Framework AI LLC",
    quote:
      "“JunziTech helped us bring our multilingual video vision to life. We wanted a platform that could instantly translate and dub videos using AI — and they delivered exactly that. The ElevenLabs voice cloning and syncing made everything sound natural and professional. What used to take a full editing team now happens in minutes.”",
    image: "/slider/test5.svg",
    mobileImage: "/slider/case/mobile/case5-mobile.svg",
  },
  {
    id: "t6",
    name: "William Payne",
    title: "Founder, Payne LLC",
    quote:
      "“Partnering with JunziTech to build ENGIE completely redefined how we manage our properties. They transformed our scattered data and manual reports into a real-time, intelligent dashboard that tracks every building, component, and expense. Now we can forecast budgets, monitor issues, and make decisions instantly — it feels like having a digital twin for our entire portfolio.”",
    image: "/slider/test6.svg",
    mobileImage: "/slider/case/mobile/case6-mobile.svg",
  },
]

export default function WeDeliverSection() {
  const [api, setApi] = React.useState<any>(null)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const isMobile = useMediaQuery('(max-width: 640px)')
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)')
  const isMobileLayout = useMediaQuery('(max-width: 1027px)')

  // Heuristic: уменьшать размер шрифта описания на мобиле, если текста много,
  // чтобы картинка ниже не съезжала.
  const getMobileQuoteFontSize = React.useCallback((text: string) => {
    const length = text?.length ?? 0
    if (length > 520) return '12px'
    if (length > 420) return '13px'
    if (length > 340) return '14px'
    return '15px'
  }, [])

  // Уменьшаем ширину картинки на мобиле при длинном тексте, чтобы сохранить комфортные отступы
  const getMobileImageWidth = React.useCallback((text: string) => {
    const length = text?.length ?? 0
    if (length > 520) return '88%'
    if (length > 420) return '92%'
    if (length > 340) return '96%'
    return '100%'
  }, [])

  React.useEffect(() => {
    if (!api) return;
    
    const updateCarousel = () => {
      setCount(api.scrollSnapList?.().length ?? 0);
      setCurrent(api.selectedScrollSnap?.() ?? 0);
    };

    updateCarousel();
    
    api.on("select", updateCarousel);
    api.on("reInit", updateCarousel);

    return () => {
      api.off("select", updateCarousel);
      api.off("reInit", updateCarousel);
    };
  }, [api]);

  return (
    <section id="we-deliver" className="py-12 overflow-hidden" >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="relative mb-8">
          {/* Client Insights Label */}
          <div 
            className={`${isMobile ? 'block mx-auto text-center' : 'inline-block'} mb-3`}
            style={{
              fontFamily: 'Manrope',
              fontWeight: 600,
              fontStyle: 'SemiBold',
              fontSize: isMobile ? '14px' : '14px',
              lineHeight: '110%',
              letterSpacing: '8%',
              textAlign: 'center',
              textTransform: 'uppercase',
              color: '#545C9E',
            }}
          >
            CLIENT INSIGHTS
          </div>

          {/* Gradient Line */}
          <div 
            className={`mb-9 ${isMobile ? 'mx-auto' : ''}`}
            style={{
              width: '32px',
              height: '1px',
              background: 'linear-gradient(90deg, #80E5FF 0%, #7584D6 100%)',
            }}
          />

                     {/* Title */}
           <h2 
             className={`mb-6 ${isMobile ? 'text-center' : ''}`}
             style={{
               fontFamily: 'Space Grotesk',
               fontWeight: 500,
               fontStyle: 'Medium',
               fontSize: isMobile ? '36px' : isTablet ? '43px' : '56px',
               lineHeight: '120%',
               letterSpacing: '-3%',
               background: 'linear-gradient(97.37deg, #80E5FF 7.06%, #545C9E 38.64%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               backgroundClip: 'text',
               textAlign: isMobile ? 'center' : undefined,
             }}
           >
             What Our Clients Say
           </h2>

          {/* Description and Navigation */}
          <div className={`${isMobile ? 'flex flex-col items-center text-center gap-4' : 'flex justify-between items-end'}`}> 
                                                   <p 
                className={`${isMobile ? 'max-w-[320px] text-center mx-auto' : 'w-full'}`}
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  color: 'black',
                  textAlign: isMobile ? 'center' : undefined,
                }}
              >
                {isMobile ? (
                  <>
                    Hear from our corporate partners about the tangible results and transformative<br />
                    impact of our digital solutions.
                  </>
                ) : (
                  <>
                    Hear from our corporate partners about the tangible<br />
                    results and transformative impact of our digital solutions.
                  </>
                )}
              </p>

            {/* Custom Navigation Buttons (hide on mobile) */}
            {!isMobile && (
              <div className={`flex gap-3 ${isMobile ? 'ml-4' : ''}`}>
                <button
                  onClick={() => {
                    if (api) {
                      api.scrollPrev()
                    }
                  }}
                  aria-label="Previous testimonial"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      api?.scrollPrev()
                    }
                  }}
                  disabled={current === 0}
                  className={`w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-200 relative overflow-hidden hover:scale-105 ${current === 0 ? 'opacity-50' : ''}`}
                  style={{
                    background: current === 0 ? '#C4C4C4F5' : 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                    borderRadius: '50%',
                  }}
                >
                  <div className="w-[47px] h-[47px] rounded-full bg-white flex items-center justify-center" style={{ borderRadius: '50%' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke={current === 0 ? "#C4C4C4" : "#4FABFF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                <button
                  onClick={() => {
                    if (api) {
                      api.scrollNext()
                    }
                  }}
                  aria-label="Next testimonial"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      api?.scrollNext()
                    }
                  }}
                  disabled={current === count - 1}
                  className={`w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-200 relative overflow-hidden hover:scale-105 ${current === count - 1 ? 'opacity-50' : ''}`}
                  style={{
                    background: current === count - 1 ? '#C4C4C4F5' : 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                    borderRadius: '50%',
                  }}
                >
                  <div className="w-[47px] h-[47px] rounded-full bg-white flex items-center justify-center" style={{ borderRadius: '50%' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke={current === count - 1 ? "#C4C4C4" : "#4FABFF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mt-4">
          <Carousel
            setApi={setApi}
            className="w-full"
            style={{ paddingLeft: '10px' }}
            opts={{
              loop: false,
              align: "center",
              skipSnaps: false,
              dragFree: false,
              containScroll: "trimSnaps",
              inViewThreshold: 0.7,
              duration: 20,
            }}
          >
            <CarouselContent className="py-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 basis-full">
                                     <div 
                     className="relative overflow-hidden rounded-3xl bg-white shadow-lg"
                                          style={{
                        width: isMobile ? 'calc(100% - 5px)' : isTablet ? 'calc(100% - 5px)' : 'calc(100% - 5px)',
                        height: isMobile ? '560px' : isTablet ? '520px' : '491px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        border: isMobile ? '1px solid transparent' : undefined,
                        background: isMobile
                          ? "url('/slider/case/mobile/background.svg') center / cover no-repeat padding-box, linear-gradient(267.31deg, rgba(11, 30, 84, 0.5) -3.38%, rgba(79, 171, 255, 0) 233.13%) border-box"
                          : undefined,
                        borderRadius: isMobile ? '25.32px' : undefined,
                      }}
                   >
                     {/* Spray Effect - на уровне всего слайда */}
                      <div
                       className="absolute inset-0 pointer-events-none"
                       style={{
                         background: 'radial-gradient(circle at left bottom, rgba(117, 132, 214, 0.25) 0%, rgba(117, 132, 214, 0.15) 30%, rgba(117, 132, 214, 0.08) 60%, rgba(117, 132, 214, 0.02) 80%, transparent 100%)',
                         zIndex: 1,
                       }}
                     />
                                          <div className={`${isMobile ? 'flex-1 flex flex-col' : 'h-full'} w-full flex ${isMobileLayout ? 'flex-col' : 'flex-col md:flex-row'} px-1`} style={{
                        flex: isMobile ? '1 1 auto' : 'none',
                      }}>
                       {/* Left Content - Testimonial */}
                                              <div 
                          className={`w-full ${isMobileLayout ? 'w-full' : 'md:w-1/2'} flex flex-col ${isMobile ? 'justify-start items-center text-center' : 'justify-center'} relative`}
                          style={{
                            padding: isMobile ? '28px 20px 0 20px' : isMobileLayout ? '60px 24px' : isTablet ? '90px 40px' : '138px 27px 138px 27px',
                            zIndex: 3,
                            flex: isMobile ? '0 0 auto' : 'auto',
                          }}
                        >
                                                  <blockquote 
                           className={isMobile ? "mb-6" : "mb-14"}
                           style={{
                             fontFamily: 'Manrope',
                             fontWeight: 400,
                             fontStyle: 'Regular',
                             fontSize: isMobile ? getMobileQuoteFontSize(testimonial.quote) : isTablet ? '16px' : '18px',
                             lineHeight: '140%',
                             letterSpacing: '0%',
                             color: 'black',
                           }}
                          >
                            {testimonial.quote}
                          </blockquote>
                        
                        <div className="space-y-2">
                          <h4 
                            style={{
                              fontFamily: 'Space Grotesk',
                              fontWeight: 500,
                              fontStyle: 'Medium',
                               fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
                              lineHeight: '136%',
                              letterSpacing: '0%',
                              color: 'black',
                            }}
                          >
                            {testimonial.name}
                          </h4>
                          <p 
                            style={{
                              fontFamily: 'Space Grotesk',
                              fontWeight: 300,
                              fontStyle: 'Light',
                               fontSize: isMobile ? '10px' : isTablet ? '12px' : '12px',
                              lineHeight: '136%',
                              letterSpacing: '0%',
                              color: 'black',
                            }}
                          >
                            {testimonial.title}
                          </p>
                        </div>
                      </div>

                                                                                                                                                                                                                                                                                                                                                                               {/* Right Content - Image */}
                          <div className={`w-full ${isMobileLayout ? 'w-full' : 'md:w-2/3'} flex items-end ${testimonial.id === 't5' || testimonial.id === 't6' ? 'justify-end' : 'justify-center'} relative ${isMobile ? (testimonial.id === 't5' ? 'pl-3 pr-0 -mr-1' : 'px-3') : ''}`} style={{ 
                            zIndex: 2,
                            flex: isMobile ? '1 1 auto' : 'auto',
                            minHeight: isMobile ? 'auto' : 'auto',
                          }}>
                           <div
                             className="relative rounded-xl overflow-hidden"
                                                      style={{
                              width: isMobile ? getMobileImageWidth(testimonial.quote) : isMobileLayout ? '400px' : isTablet ? '400px' : '608px',
                              height: isMobile ? 'auto' : isMobileLayout ? '300px' : isTablet ? '320px' : '457px',
                              aspectRatio: isMobile ? '372 / 322' : undefined,
                              zIndex: 3,
                              transform: (testimonial.id === 't5' || testimonial.id === 't6')
                                ? (isMobile
                                    ? (testimonial.id === 't5' ? 'translateX(9px)' : 'translateX(5px)')
                                    : 'translateX(5px)')
                                : 'none',
                              maxWidth: isMobile ? '100%' : 'none',
                            }}
                           >
                           <img
                             src={isMobile ? testimonial.mobileImage : testimonial.image}
                             alt={`Product screenshot for ${testimonial.name}'s testimonial`}
                             style={{
                               width: '100%',
                               height: '100%',
                               objectFit: isMobile ? 'contain' : 'cover',
                               objectPosition: isMobile && testimonial.id === 't5' ? 'right center' : undefined,
                               borderRadius: '12px',
                             }}
                           />
                         </div>
                       </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Mobile controls under the card */}
          {isMobile && (
            <div className="mt-4 flex items-center justify-center gap-6">
              <button
                aria-label="Previous testimonial"
                tabIndex={0}
                disabled={current === 0}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && current !== 0) {
                    e.preventDefault()
                    api?.scrollPrev()
                  }
                }}
                onClick={() => current !== 0 && api?.scrollPrev()}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${current === 0 ? '' : 'relative overflow-hidden'}`}
                style={{
                  background:
                    current === 0
                      ? '#C4C4C4F5'
                      : 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                }}
              >
                <div className="w-[37px] h-[37px] rounded-full bg-white flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke={current === 0 ? '#9CA3AF' : '#4FABFF'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              <button
                aria-label="Next testimonial"
                tabIndex={0}
                disabled={current === count - 1}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && current !== count - 1) {
                    e.preventDefault()
                    api?.scrollNext()
                  }
                }}
                onClick={() => current !== count - 1 && api?.scrollNext()}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${current === count - 1 ? '' : 'relative overflow-hidden'}`}
                style={{
                  background:
                    current === count - 1
                      ? '#C4C4C4F5'
                      : 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                }}
              >
                <div className="w-[37px] h-[37px] rounded-full bg-white flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke={current === count - 1 ? '#9CA3AF' : '#4FABFF'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}