"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type TestimonialsSectionProps = {
  mobileBottomPadding?: number; // px
};

export const TestimonialsSection = ({ mobileBottomPadding = 1 }: TestimonialsSectionProps) => {
  const testimonials = [
    {
      id: 1,
      avatar: "/investor/testimonials/1man.png",
      quote: "I used this to raise my first $100K. The prototype and deck were exactly what I needed to get investors to take me seriously.",
      name: "Alex R.",
      title: "Founder of SaaS Co.",
      position: "top"
    },
    {
      id: 2,
      avatar: "/investor/testimonials/2man.png", 
      quote: "I had no tech team — this got me investor-ready. The process was fast and the quality was top-notch.",
      name: "Sarah L.",
      title: "Founder of a Mobile App",
      position: "center"
    },
    {
      id: 3,
      avatar: "/investor/testimonials/3man.png",
      quote: "I used this to raise my first $100K. The prototype and deck were exactly what I needed to get investors to take me seriously.",
      name: "Alex R.",
      title: "Founder of SaaS Co.",
      position: "bottom"
    }
  ];

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState<number>(0);
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-24 relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-16">
          {/* Левая часть */}
          <div className="flex flex-col justify-center">
            {/* TESTIMONIALS текст */}
            <div className="text-center lg:text-left">
              <p 
                className="text-[#545C9E] tracking-[0.08em] uppercase text-[15.75px] font-semibold leading-[110%]"
                style={{ fontFamily: 'Manrope' }}
              >
                testimonials
              </p>
              
              {/* Линия с градиентом */}
              <div className="mt-2 mb-[12px]">
                <div 
                  className="w-8 h-px mx-auto lg:mx-0"
                  style={{
                    background: 'linear-gradient(90deg, #80E5FF 0%, #7584D6 100%)'
                  }}
                />
              </div>
              
              {/* Заголовок */}
              <h2 
                className="text-[56px] font-medium leading-[120%] tracking-[-0.03em] mb-[32px]"
                style={{
                  fontFamily: 'Space Grotesk',
                  background: 'linear-gradient(278.09deg, #0B1E54 12.96%, #4FABFF 78.29%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Trusted by<br />Founders
              </h2>
              
              {/* Описание */}
              <p 
                className="text-[#111827] text-xl leading-[100%] tracking-[-0.02em] max-w-lg"
                style={{ fontFamily: 'Manrope', lineHeight: '120%' }}
              >
                Hear from early-stage founders who used our package to accelerate their fundraising journey.
              </p>
            </div>
          </div>

          {/* Правая часть с отзывами: Desktop (stacked) */}
          <div className="relative overflow-visible hidden lg:block">
            <div className="space-y-4 overflow-visible">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`
                    relative w-full lg:w-[422px] h-auto lg:min-h-[176px]
                    transform transition-all duration-300 lg:shadow-lg z-50
                    ${index === 0 ? 'ml-0' : ''}
                    ${index === 1 ? 'ml-0 lg:-translate-x-[87px]' : ''}
                    ${index === 2 ? 'ml-0 lg:ml-3' : ''}
                  `}
                  style={{
                    borderRadius: '20px',
                    border: '0.87px solid #FFFFFF',
                    backdropFilter: 'blur(60px)',
                    background:
                      index === 1
                        ? `url(/investor/testimonials/background.svg), rgba(255, 255, 255, 0.1)`
                        : 'rgba(255, 255, 255, 0.1)',
                    backgroundSize: index === 1 ? 'cover' : 'auto',
                    backgroundPosition: index === 1 ? 'center' : 'initial',
                    backgroundRepeat: index === 1 ? 'no-repeat' : 'initial',
                    opacity: 1,
                  }}
                >
                  {/* Аватар */}
                  <div
                    className="absolute"
                    style={{
                      top: '15px',
                      left: '-52px',
                      width: '105px',
                      height: '105px',
                      zIndex: 10,
                    }}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div
                    className="h-full flex flex-col justify-between"
                    style={{
                      paddingTop: '25px',
                      paddingBottom: '25px',
                      paddingLeft: '66px',
                      paddingRight: '59px',
                    }}
                  >
                    {/* Отзыв */}
                    <p
                      style={{
                        fontFamily: 'Manrope',
                        fontWeight: 500,
                        fontSize: '16.5px',
                        lineHeight: '140%',
                        letterSpacing: '-2%',
                        color: '#111827',
                        marginBottom: '14px',
                      }}
                    >
                      "{testimonial.quote}"
                    </p>

                    {/* Имя и должность */}
                    <div>
                      <p
                        style={{
                          fontFamily: 'Space Grotesk',
                          fontWeight: 700,
                          fontSize: '19.7px',
                          lineHeight: '130%',
                          letterSpacing: '-3%',
                          background:
                            'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          marginBottom: '7px',
                        }}
                      >
                        - {testimonial.name}
                      </p>
                      <p
                        style={{
                          fontFamily: 'Manrope',
                          fontWeight: 500,
                          fontSize: '13.1px',
                          lineHeight: '140%',
                          letterSpacing: '-2%',
                          color: '#111827',
                        }}
                      >
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Мобильная версия: Slider */}
          <div className="lg:hidden w-full">
            <Carousel
              setApi={setApi}
              className="w-full px-3"
              opts={{
                loop: true,
                align: 'start',
                skipSnaps: false,
                containScroll: 'trimSnaps',
              }}
            >
              <CarouselContent className="ml-0">
                {testimonials.map((t) => (
                  <CarouselItem key={t.id} className="basis-full pl-0 px-2">
                    <div className="relative mx-auto w-full max-w-[540px] pt-12">
                      {/* Карточка */}
                      <div
                        className="relative w-full rounded-[20px] min-h-[340px]"
                        style={{
                          border: '0.87px solid #FFFFFF',
                          backdropFilter: 'blur(60px)',
                          background:
                            'url(/investor/testimonials/background.svg), rgba(255,255,255,0.1)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        {/* Аватар сверху по центру */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[96px] h-[96px] z-10">
                          <img
                            src={t.avatar}
                            alt={`${t.name} avatar`}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>

                        <div className="px-6 pt-20 flex flex-col gap-10" style={{ paddingBottom: mobileBottomPadding }}>
                          <p
                            style={{
                              fontFamily: 'Manrope',
                              fontWeight: 500,
                              fontSize: '16.5px',
                              lineHeight: '140%',
                              letterSpacing: '-2%',
                              color: '#111827',
                              marginBottom: 0,
                            }}
                          >
                            "{t.quote}"
                          </p>

                          <div className="flex flex-col gap-1.5">
                            <p
                              className=""
                              style={{
                                fontFamily: 'Space Grotesk',
                                fontWeight: 700,
                                fontSize: '19.7px',
                                lineHeight: '130%',
                                letterSpacing: '-3%',
                                background:
                                  'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                              }}
                            >
                              - {t.name}
                            </p>
                            <p
                              style={{
                                fontFamily: 'Manrope',
                                fontWeight: 500,
                                fontSize: '13.1px',
                                lineHeight: '140%',
                                letterSpacing: '-2%',
                                color: '#111827',
                              }}
                            >
                              {t.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Навигация (стрелки) */}
            <div className="mt-4 flex justify-center gap-4">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                aria-label="Previous testimonial"
                disabled={current === 0}
                className={`group relative h-10 w-10 rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4FABFF] transition-all duration-200 ${current === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`}
                style={{
                  background: current === 0 ? '#C4C4C4F5' : 'linear-gradient(90deg, #80E5FF 0%, #7584D6 100%)',
                }}
              >
                <span className={`flex h-full w-full items-center justify-center rounded-full bg-white transition ${current === 0 ? 'text-[#C4C4C4]' : 'text-[#4FABFF] group-active:scale-95'}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <button
                type="button"
                onClick={() => api?.scrollNext()}
                aria-label="Next testimonial"
                disabled={current === count - 1}
                className={`group relative h-10 w-10 rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4FABFF] transition-all duration-200 ${current === count - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`}
                style={{
                  background: current === count - 1 ? '#C4C4C4F5' : 'linear-gradient(90deg, #80E5FF 0%, #7584D6 100%)',
                }}
              >
                <span className={`flex h-full w-full items-center justify-center rounded-full bg-white transition ${current === count - 1 ? 'text-[#C4C4C4]' : 'text-[#4FABFF] group-active:scale-95'}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};