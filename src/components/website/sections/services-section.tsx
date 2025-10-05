"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface Service {
  video: string;
  fallbackImage: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    video: "/services/videos/Service 1.mp4",
    fallbackImage: "/services/cards/white.svg",
    title: "Product Strategy",
    description:
      "Crafting actionable strategies that align product vision with market opportunities and user needs.",
  },
  {
    video: "/services/videos/Service 2.mp4",
    fallbackImage: "/services/cards/white.svg",
    title: "UX/UI Design",
    description:
      "Designing intuitive and engaging user experiences that drive adoption and satisfaction.",
  },
  {
    video: "/services/videos/Service 3.mp4",
    fallbackImage: "/services/cards/white.svg",
    title: "Growth & Marketing",
    description:
      "Implementing data-driven strategies to acquire, engage, and retain users for your product.",
  },
  {
    video: "/services/videos/Service 4.mp4",
    fallbackImage: "/services/cards/white.svg",
    title: "Engineering",
    description:
      "Building scalable, robust, and high-performance digital products using modern technologies.",
  },
];

// Константы для стилей
const CARD_STYLES = {
  base: {
    width: '100%',
    maxWidth: 'clamp(200px, 80vw, 493px)',
    height: 'auto',
    minHeight: 'clamp(180px, 28vh, 466px)',
    background: 'white',
    border: '1px solid white',
    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    position: 'relative' as const,
  },
};

const TYPOGRAPHY_STYLES = {
  servicesLabel: {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: 'clamp(14px, 2.7vw, 19.19px)',
    lineHeight: '110%',
    letterSpacing: '8%',
    textAlign: 'center' as const,
    textTransform: 'uppercase' as const,
    color: '#545C9E',
  },
  mainHeading: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 'clamp(36px, 7.2vw, 53.71px)',
    lineHeight: '120%',
    letterSpacing: '-3%',
    textAlign: 'center' as const,
    background: 'linear-gradient(278.09deg, #0B1E54 12.96%, #0065C0 78.29%)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
    backgroundClip: 'text' as const,
  },
  subtitle: {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 'clamp(14.4px, 3.15vw, 19.19px)',
    lineHeight: '140%',
    letterSpacing: '0%',
    textAlign: 'center' as const,
    color: '#111827',
  },
  serviceTitle: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '113%',
    letterSpacing: '0%',
    background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
    backgroundClip: 'text' as const,
  },
  serviceDescription: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '120%',
    color: '#000000',
  },
  learnMore: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '10px',
    lineHeight: '100%',
    letterSpacing: '-2%',
    background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
    backgroundClip: 'text' as const,
  }
};

const GRADIENT_LINE_STYLES = {
  width: 'clamp(21.6px, 5.4vw, 31.13px)',
  height: '0px',
  border: '0.97px solid',
  borderImage: 'linear-gradient(90deg, #80E5FF 0%, #7584D6 100%) 1',
};

// Компонент для видео с оптимизацией
const OptimizedVideo = ({ 
  videoSrc, 
  fallbackImage, 
  title 
}: { 
  videoSrc: string; 
  fallbackImage: string; 
  title: string; 
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true)
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (isIntersecting && videoRef.current && !hasError) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        video.play().catch(() => {
          setHasError(true);
        });
      };

      const handleError = () => {
        setHasError(true);
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, [isIntersecting, hasError]);

  const videoClassName = `w-full h-[118px] sm:h-[162px] md:h-[198px] lg:h-[276px] object-cover rounded-[8px] sm:rounded-[10px] md:rounded-[12px] transition-opacity duration-300 ${
    isVideoLoaded ? 'opacity-100' : 'opacity-0'
  }`;

  const imageClassName = `w-full h-[118px] sm:h-[162px] md:h-[198px] lg:h-[276px] object-contain rounded-[8px] sm:rounded-[10px] md:rounded-[12px] transition-opacity duration-300 ${
    !isVideoLoaded || hasError ? 'opacity-100' : 'opacity-0'
  }`;

  return (
    <div ref={containerRef} className="relative">
      {/* Fallback Image */}
      <Image
        src={fallbackImage}
        alt={title}
        width={493}
        height={276}
        className={imageClassName}
        loading="lazy"
      />
      
      {/* Video */}
      {isIntersecting && !hasError && (
        <video
          ref={videoRef}
          src={videoSrc}
          className={`absolute inset-0 ${videoClassName}`}
          muted
          loop
          playsInline
          preload="metadata"
          poster={fallbackImage}
        />
      )}
    </div>
  );
};

export default function ServicesSection() {
  return (
    <>
      <style>{`
        @media (max-width: 1208px) {
          .services-frame {
            display: none !important;
          }
          .services-frame-mobile {
            display: block !important;
          }
        }
        .services-frame-mobile { display: none; }
        
        /* Оптимизация для мобильных устройств */
        @media (max-width: 749px) {
          video {
            display: block;
          }
          /* Точные размеры типографики на мобилке */
          .services-label { font-size: 14px !important; }
          .services-main-heading { font-size: 36px !important; }
          /* Рамка должна подстраиваться под высоту содержимого и не расширять ширину */
          .services-frame-mobile,
          .services-frame-mobile > span,
          .services-frame-mobile picture {
            max-width: 100% !important;
            width: 100% !important;
            height: 100% !important;
          }
        }

        /* Включаем градиентную рамку только на устройствах < 1024px, на ПК (>=1024px) отключаем */
        @media (max-width: 1023px) {
          .card-hover-gradient:hover,
          .card-hover-gradient:focus-within {
            background: linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%);
          }
        }
        @media (min-width: 1024px) {
          .card-hover-gradient:hover,
          .card-hover-gradient:focus-within {
            background: white !important;
          }
        }

        /* Диапазон 370–440px: делаем карточки чуть уже, чтобы не упирались в рамку на iPhone */
        @media (min-width: 370px) and (max-width: 440px) {
          .service-card-wrap { max-width: 66vw !important; }
        }
        
        /* Улучшение производительности */
        video {
          will-change: opacity;
          transform: translateZ(0);
        }
      `}</style>
      <section id="services" className="pt-5 pb-11 sm:pt-7 sm:pb-14 md:pt-9 md:pb-18 lg:pt-14 lg:pb-29">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto mb-7 sm:mb-11 md:mb-14 text-center">
            {/* OUR SERVICES text */}
            <div className="services-label text-center mb-3 sm:mb-4" style={TYPOGRAPHY_STYLES.servicesLabel}>
              OUR SERVICES
            </div>
            
            {/* Gradient line */}
            <div className="mx-auto mb-4 sm:mb-5" style={GRADIENT_LINE_STYLES} />
            
            {/* Main heading */}
            <h2 className="services-main-heading font-bold tracking-tight mb-4 sm:mb-5" style={TYPOGRAPHY_STYLES.mainHeading}>
              Our Expertise. Your Success.
            </h2>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg" style={TYPOGRAPHY_STYLES.subtitle}>
              We offer a comprehensive suite of services to bring your digital
              product from concept to market leader.
            </p>
          </div>

          {/* Services Cards Container with Frame */}
          <div className="relative max-w-[1125px] mx-auto overflow-hidden">
            {/* Background Frame - Hidden on screens smaller than 1169px */}
            <div className="absolute inset-0 services-frame">
              <Image
                src="/services/frame.png"
                alt="Services frame"
                width={1125}
                height={1102}
                className="w-full h-auto"
                priority={false}
              />
            </div>
            {/* Mobile Background Frame - Visible only on small screens */}
            <div className="absolute inset-0 services-frame-mobile -z-10 pointer-events-none">
              <Image
                src="/services/frameMobile.svg"
                alt="Services mobile frame"
                fill
                className="w-full h-full object-contain"
                priority={false}
              />
            </div>
            
                         {/* Cards Grid */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-5 md:gap-7 p-3 pt-16 pb-10 sm:p-7 sm:pt-0 md:p-14 md:pt-20 justify-items-center">
              {services.map((service) => (
                <Link href="/form" key={service.title} aria-label={`${service.title} – learn more`}>
                  {/* Gradient border wrapper (appears on hover) */}
                    <div className="service-card-wrap group p-[1px] rounded-[14px] sm:rounded-[18px] md:rounded-[25.3px] bg-white transition-colors duration-300 card-hover-gradient">
                    <div
                      className="flex flex-col rounded-[13px] sm:rounded-[17px] md:rounded-[24.3px] p-3 sm:p-5 md:p-7 relative cursor-pointer shadow-[0_4px_18px_rgba(0,0,0,0.08)] sm:shadow-[0_7px_27px_rgba(0,0,0,0.12)] md:shadow-[0_4px_18px_rgba(0,0,0,0.06)] bg-white"
                      style={{ ...CARD_STYLES.base, border: '0' }}
                    >
                                         {/* Service Video/Image */}
                      <div className="flex justify-center mb-5 sm:mb-5">
                       <OptimizedVideo
                         videoSrc={service.video}
                         fallbackImage={service.fallbackImage}
                         title={service.title}
                       />
                     </div>
                    
                                         {/* Service Title */}
                      <h3 className="text-[18px] sm:text-xl font-semibold mb-3 sm:mb-6 text-center sm:text-left" style={TYPOGRAPHY_STYLES.serviceTitle}>
                       {service.title}
                     </h3>
                     
                     {/* Service Description */}
                      <p className="text-sm sm:text-sm mb-4 sm:mb-7 text-center sm:text-left" style={TYPOGRAPHY_STYLES.serviceDescription}>
                       {service.description}
                     </p>
                     
                                           {/* Learn More Link */}
                       <div className="text-center sm:text-left">
                         <span className="inline-flex items-center cursor-pointer group text-[10px] sm:text-[12px]" style={TYPOGRAPHY_STYLES.learnMore}>
                          Learn more <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                        </span>
                      </div>
                      </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}