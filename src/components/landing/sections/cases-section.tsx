"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Form from "../form/Form";
import { Modal } from "@/components/ui/modal";
import { useModal } from "../hooks/useModal";
import { casesData } from "@/data/cases"
import { AnimatedNavigationButton } from "@/components/shared/buttons/AnimatedNavigationButton"

// Используем первый кейс как featured case
const featuredCase = casesData[0]

// Создаем массив с данными для маленьких карточек согласно дизайну
const smallCardsData = [
  {
    id: "publefy",
    slug: "publefy",
    category: "MarTech/Social Media Automation",
    title: "Publefy AI Meme Generator",
    result: "Reduction in meme production time: 50%",
    tags: ["AI", "Content Automation", "UX/UI Design"],
    image: "/cases/plus/publefy.svg"
  },
  {
    id: "engie",
    slug: "eingie-energy",
    category: "IoT/Industrial Analytics",
    title: "Engie Energy Monitoring",
    result: "Engery cost reduction: 25%",
    tags: ["AI", "Content Automation", "UX/UI Design"],
    image: "/cases/plus/engie.svg"
  },
  {
    id: "taxbot",
    slug: "taxbot",
    category: "FinTech/Tax Technology",
    title: "TaxBot Conversational Assistant",
    result: "Reduction in user errors: 50%",
    tags: ["ChatBot", "Automation", "User Testing"],
    image: "/cases/plus/taxbot.svg"
  }
]

export default function CasesSection() {
  const { isOpen, isClosing, openModal, closeModal } = useModal();

  return (
    <>
    <style> {`
    /* Адаптивные стили для мобильных устройств */
    @media (max-width: 1023px) {
      .mobile-case-card {
        width: 100% !important;
        max-width: 384px !important;
        height: auto !important;
        min-height: 432px !important;
        border-radius: 16.09px !important;
        background: url(/cases/plus/backgroundMini.png) !important;
        background-size: cover !important;
        background-position: center !important;
        border: none !important;
        transition: all 0.5s ease-in-out !important;
      }

      .mobile-case-card:hover {
        transform: none !important;
        animation: none !important;
      }

      .mobile-case-card .case-image {
        transition: all 0.5s ease-in-out !important;
      }

      .mobile-case-card:hover .case-image {
        transform: none !important;
        animation: none !important;
      }

      /* Градиентная рамка для мобильных устройств */
      .mobile-border-frame {
        position: absolute !important;
        inset: 0 !important;
        pointer-events: none !important;
        border-radius: 16.09px !important;
        padding: 1.1px !important;
        background: linear-gradient(318.85deg, rgba(11, 30, 84, 0.25) 23.4%, rgba(79, 171, 255, 0) 112.41%) !important;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0) !important;
        mask-composite: exclude !important;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0) !important;
        -webkit-mask-composite: xor !important;
      }

      /* Адаптивные размеры для разных экранов */
      @media (max-width: 480px) {
        .mobile-case-card {
          max-width: 320px !important;
          min-height: 380px !important;
        }
        
        .mobile-case-card .case-image {
          margin-right: 8px !important;
        }
      }

      @media (max-width: 375px) {
        .mobile-case-card {
          max-width: 280px !important;
          min-height: 350px !important;
        }
      }

      @media (max-width: 320px) {
        .mobile-case-card {
          max-width: 260px !important;
          min-height: 320px !important;
        }
      }
    }

    /* Отключаем scale эффекты для карточек кейсов */
    .case-card {
      transition: all 0.5s ease-in-out !important;
    }

    .case-card:hover {
      transform: none !important;
      animation: none !important;
    }

    .case-card .case-image {
      transition: all 0.5s ease-in-out !important;
    }

    .case-card:hover .case-image {
      transform: none !important;
      animation: none !important;
    }

    /* Убираем рамки для десктопной версии */
    @media (min-width: 1024px) {
      .case-card {
        border: none !important;
      }
      
      .case-card::before,
      .case-card::after {
        display: none !important;
      }
      
      /* Убираем градиентные рамки для десктопа */
      .case-card > div[style*="borderImageSource"] {
        display: none !important;
      }
      
      .case-card > div[style*="mask"] {
        display: none !important;
      }
      
      /* Скрываем мобильные рамки на десктопе */
      .mobile-border-frame {
        display: none !important;
      }
    }

    `}</style>
      <section id="cases" className="pt-7 pb-4 sm:pt-11 sm:pb-5 md:pt-14 md:pb-7 lg:pt-18 lg:pb-1 xl:pt-22 xl:pb-11">
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[110px]">
          {/* Контейнер для всего контента */}
          <div className="max-w-6xl mx-auto">
            {/* Заголовок и подзаголовок */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5 lg:gap-7 mb-7 sm:mb-9 md:mb-11 lg:mb-14">
              <div className="max-w-xl">
                <h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[120%]"
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: 500,
                    fontSize: 'clamp(36px, 4.5vw, 53.71px)',
                    lineHeight: '120%',
                    letterSpacing: '-3%',
                    background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '25px'
                  }}
                >
                  <span className="hidden lg:inline">Driving Digital Transformation.</span>
                  <span className="lg:hidden">
                    Driving Digital<br />
                    Transformation.
                  </span>
                </h2>
              </div>
              <div className="max-w-sm">
                <p 
                  className="text-sm sm:text-base leading-[120%]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 400,
                    fontSize: 'clamp(16px, 2.25vw, 19.19px)',
                    lineHeight: '120%',
                    letterSpacing: '-2%',
                    color: '#111827'
                  }}
                >
                  <span className="hidden lg:inline">
                    Explore our portfolio of successful projects and see how we empower corporations with cutting-edge digital solutions.
                  </span>
                  <span className="lg:hidden">
                    Explore our portfolio of successful projects and see<br />
                    how we empower corporations with cutting-edge<br />
                    digital solutions.
                  </span>
                </p>
              </div>
            </div>

          {/* Главная карточка кейса */}
          <div className="block mb-7 sm:mb-9 md:mb-11 lg:mb-14 flex justify-center lg:block">
            <Link href={`/cases/${featuredCase.slug}`} className="block">
              {/* Мобильная версия карточки */}
              <Card 
                className="case-card mobile-case-card lg:hidden flex flex-col overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group relative"
              >
                {/* Градиентная рамка - только для мобилки */}
                <div 
                  className="absolute inset-0 pointer-events-none mobile-border-frame"
                />
                {/* Изображение */}
                <div className="relative" style={{ padding: '20px' }}>
                  <Image
                    src="/cases/worthefy/worthefyMobile.svg"
                    alt={featuredCase.title}
                    width={325}
                    height={198}
                    className="w-full h-auto rounded-lg case-image transition-all duration-500 ease-in-out"
                  />
                </div>
                
                {/* Контент */}
                <CardContent className="px-4 pb-4 flex flex-col flex-grow">
                  <p 
                    className="group-hover:text-primary transition-colors"
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 400,
                      fontSize: '10px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: 'black',
                      marginBottom: '17px'
                    }}
                  >
                    {featuredCase.category}
                  </p>
                  <h4 
                    className="font-bold group-hover:text-primary transition-colors"
                    style={{
                      fontFamily: 'Space Grotesk',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '21px'
                    }}
                  >
                    {featuredCase.title}
                  </h4>
                  <p 
                    className="font-medium"
                    style={{
                      fontFamily: 'Space Grotesk',
                      fontWeight: 500,
                      fontSize: '13.43px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: 'black',
                      marginBottom: '21px'
                    }}
                  >
                    {featuredCase.results[0]?.title}: {featuredCase.results[0]?.value}
                  </p>
                  <div className="flex flex-wrap gap-1.5" style={{ marginBottom: '21px' }}>
                    {featuredCase.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded"
                        style={{
                          background: 'linear-gradient(97.94deg, rgba(140, 163, 231, 0.15) -2.89%, rgba(79, 171, 255, 0.15) 91.06%)',
                          fontFamily: 'Manrope',
                          fontWeight: 400,
                          fontSize: '8.74px',
                          lineHeight: '130%',
                          letterSpacing: '2%',
                          textAlign: 'center',
                          color: 'transparent',
                          backgroundImage: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="mt-auto inline-flex items-center font-semibold group-hover:underline cursor-pointer"
                    style={{
                      fontFamily: 'Space Grotesk',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      verticalAlign: 'middle',
                      textDecoration: 'underline',
                      background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    View Case Study
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </CardContent>
              </Card>

              {/* Десктопная версия карточки */}
              <Card 
                className="case-card hidden lg:block overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer relative group"
                style={{
                  width: '100%',
                  maxWidth: '1152px',
                  height: 'auto',
                  minHeight: 'clamp(360px, 54vh, 523.8px)',
                  borderRadius: 'clamp(14.4px, 2.7vw, 28.99px)',
                  background: 'url(/cases/plus/background.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: 'none'
                }}
              >
                {/* Эффект распыленного синего цвета в верхнем левом углу */}
                <div 
                  className="absolute top-0 left-0 w-[630px] h-[630px] pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(ellipse 450px 270px at 10% 10%, rgba(150, 202, 230, 0.6) 0%, transparent 50%),
                      radial-gradient(ellipse 405px 225px at 20% 20%, rgba(150, 202, 230, 0.4) 0%, transparent 60%),
                      radial-gradient(ellipse 360px 198px at 5% 15%, rgba(150, 202, 230, 0.3) 0%, transparent 70%)
                    `,
                    filter: 'blur(1px)',
                    borderRadius: 'clamp(14.4px, 2.7vw, 28.99px) 0 0 0',
                    zIndex: 0
                  }}
                />
                {/* Эффект распыленного синего цвета в нижнем правом углу */}
                <div 
                  className="absolute bottom-0 right-0 w-[630px] h-[630px] pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(ellipse 450px 270px at 90% 90%, rgba(150, 202, 230, 0.6) 0%, transparent 50%),
                      radial-gradient(ellipse 405px 225px at 80% 80%, rgba(150, 202, 230, 0.4) 0%, transparent 60%),
                      radial-gradient(ellipse 360px 198px at 95% 85%, rgba(150, 202, 230, 0.3) 0%, transparent 70%)
                    `,
                    filter: 'blur(1px)',
                    borderRadius: '0 0 clamp(14.4px, 2.7vw, 28.99px) 0',
                    zIndex: 0
                  }}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full relative z-10">
                  {/* Левая часть с текстом */}
                  <CardContent className="p-4 sm:p-5 md:p-7 lg:p-9 xl:p-11 h-full flex flex-col justify-center">
                    <p 
                      className="mb-4"
                      style={{
                        fontFamily: 'Manrope',
                        fontWeight: 400,
                        fontSize: 'clamp(12.6px, 1.35vw, 15.46px)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: 'black'
                      }}
                    >
                      {featuredCase.category}
                    </p>
                    <h3 
                      className="text-lg sm:text-xl md:text-2xl font-bold mb-5 group-hover:text-primary transition-colors"
                      style={{
                        fontFamily: 'Space Grotesk',
                        fontWeight: 700,
                        fontSize: 'clamp(18px, 2.7vw, 27.06px)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {featuredCase.title}
                    </h3>
                    <p 
                      className="mb-5 text-sm sm:text-base md:text-md"
                      style={{
                        fontFamily: 'Manrope',
                        fontWeight: 400,
                        fontSize: 'clamp(12.6px, 1.35vw, 15.46px)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#111827BF'
                      }}
                    >
                      {featuredCase.description}
                    </p>
                    <p 
                      className="font-semibold text-sm sm:text-base md:text-md mb-5"
                      style={{
                        fontFamily: 'Space Grotesk',
                        fontWeight: 500,
                        fontSize: 'clamp(14.4px, 1.8vw, 19.33px)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: 'black'
                      }}
                    >
                      {featuredCase.results[0]?.title}: {featuredCase.results[0]?.value}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {featuredCase.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm"
                          style={{
                            background: 'linear-gradient(97.94deg, rgba(140, 163, 231, 0.15) -2.89%, rgba(79, 171, 255, 0.15) 91.06%)',
                            fontFamily: 'Manrope',
                            fontWeight: 400,
                            fontSize: 'clamp(9.9px, 1.08vw, 12.65px)',
                            lineHeight: '130%',
                            letterSpacing: '2%',
                            textAlign: 'center'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span 
                      className="inline-flex items-center font-semibold group-hover:underline p-0 h-auto text-sm sm:text-base cursor-pointer"
                      style={{
                        fontFamily: 'Space Grotesk',
                        fontWeight: 500,
                        fontSize: 'clamp(12.6px, 1.35vw, 15.46px)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        verticalAlign: 'middle',
                        textDecoration: 'underline',
                        background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      View Case Study
                      <ArrowUpRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                    </span>
                  </CardContent>
                  
                  {/* Правая часть с изображением */}
                  <div className="relative h-full flex items-center justify-end p-0">
                    <Image
                      src="/cases/plus/worthefy.svg"
                      alt={featuredCase.title}
                      width={839}
                      height={499}
                      style={{ objectFit: "contain" }}
                      className="case-image transition-all duration-500 ease-in-out w-full h-auto max-w-full"
                    />
                  </div>
                </div>
              </Card>
            </Link>
          </div>

            {/* Маленькие карточки кейсов */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-7 lg:gap-9 mb-7 sm:mb-9 md:mb-11 lg:mb-14 justify-items-center lg:justify-items-stretch">
              {smallCardsData.map((project) => (
                <div key={project.id} className="group block">
                  <Link href={`/cases/${project.slug}`} className="block">
                    <Card 
                      className="case-card mobile-case-card flex flex-col overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group relative"
                    >
                      {/* Градиентная рамка - только для мобилки */}
                      <div 
                        className="absolute inset-0 pointer-events-none mobile-border-frame"
                      />
                      {/* Изображение */}
                      <div className="relative" style={{ padding: '20px' }}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={325}
                          height={198}
                          className="w-full h-auto rounded-lg case-image transition-all duration-500 ease-in-out"
                        />
                      </div>
                      
                      {/* Контент */}
                      <CardContent className="px-4 pb-4 flex flex-col flex-grow">
                        <p 
                          className="group-hover:text-primary transition-colors"
                          style={{
                            fontFamily: 'Manrope',
                            fontWeight: 400,
                            fontSize: '10px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: 'black',
                            marginBottom: '17px'
                          }}
                        >
                          {project.category}
                        </p>
                        <h4 
                          className="font-bold group-hover:text-primary transition-colors"
                          style={{
                            fontFamily: 'Space Grotesk',
                            fontWeight: 700,
                            fontSize: '20px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '21px'
                          }}
                        >
                          {project.title}
                        </h4>
                        <p 
                          className="font-medium"
                          style={{
                            fontFamily: 'Space Grotesk',
                            fontWeight: 500,
                            fontSize: '13.43px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: 'black',
                            marginBottom: '21px'
                          }}
                        >
                          {project.result}
                        </p>
                        <div className="flex flex-wrap gap-1.5" style={{ marginBottom: '21px' }}>
                          {project.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="px-2 py-1 rounded"
                              style={{
                                background: 'linear-gradient(97.94deg, rgba(140, 163, 231, 0.15) -2.89%, rgba(79, 171, 255, 0.15) 91.06%)',
                                fontFamily: 'Manrope',
                                fontWeight: 400,
                                fontSize: '8.74px',
                                lineHeight: '130%',
                                letterSpacing: '2%',
                                textAlign: 'center',
                                color: 'transparent',
                                backgroundImage: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span
                          className="mt-auto inline-flex items-center font-semibold group-hover:underline cursor-pointer"
                          style={{
                            fontFamily: 'Space Grotesk',
                            fontWeight: 500,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            verticalAlign: 'middle',
                            textDecoration: 'underline',
                            background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                        >
                          View Case Study
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              {/* <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-3 text-base font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href="/cases">Explore All Projects</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Modal Form */}
      <Modal isOpen={isOpen} isClosing={isClosing} onClose={closeModal}>
        <Form />
      </Modal>
    </>
  )
}
