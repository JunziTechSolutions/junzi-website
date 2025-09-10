import React, { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"
import { useConditionalAnimation } from "@/hooks/use-mobile"

interface PricingCard {
  title: string
  description: string
  price: string
  features: string[]
  isPopular?: boolean
  isMain?: boolean
}

export function PricingBlock() {
  const { getConditionalAnimate, isMobile } = useConditionalAnimation();
  const sectionRef = useRef<HTMLElement | null>(null);
  
  const pricingCards: PricingCard[] = [
    {
      title: "MVP + Custom Features",
      description: "MVP + Custom Features, upgraded design, and light integration",
      price: "$15,000 - $25,000",
      features: [
        "User-centered design approach",
        "Custom visuals tailored to your brand",
        "Wireframes and prototypes included",
        "Responsive design for all devices",
        "Design revisions to ensure satisfaction"
      ]
    },
    {
      title: "Scalable\nbuild",
      description: "Scalable build with multiple integrations and admin tools",
      price: "$25,000 - $40,000",
      features: [
        "Full-stack development for web or mobile",
        "Clean, scalable code",
        "Integration with existing tools",
        "Testing and debugging included",
        "Clear timeline with milestones"
      ],
      isPopular: true,
      isMain: true
    },
    {
      title: "Enterprise\nsystem",
      description: "Enterprise system with full integration, dashboard, and advanced backend",
      price: "$50,000+",
      features: [
        "Complete design and development package",
        "Seamless integration between design and development teams",
        "End-to-end project management",
        "Testing and quality assurance",
        "Post-launch support included"
      ]
    }
  ]

  const [headerRef, headerInView] = useInView({ triggerOnce: false, threshold: 0.1 })
  const [cardsRef, cardsInView] = useInView({ triggerOnce: false, threshold: 0.1 })

  return (
    <section className="relative py-12 md:py-12" id="pricing" ref={sectionRef as any}>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-14.4 md:mb-14.4"
          initial={{ opacity: 0, y: 20 }}
          animate={getConditionalAnimate(headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
          transition={{ duration: 0.6 }}
        >
          {/* PRICING text */}
          <div 
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: isMobile ? '14px' : 'clamp(11px, 2.5vw, 13.14px)',
              lineHeight: '110%',
              letterSpacing: '8%',
              textAlign: isMobile ? 'left' : 'center',
              textTransform: 'uppercase',
              color: '#545C9E',
              marginBottom: isMobile ? '12px' : '10.8px'
            }}
          >
            PRICING
          </div>

          {/* Line */}
          <div 
            className={isMobile ? "" : "mx-auto"}
            style={{
              width: isMobile ? '33px' : '30.04px',
              height: isMobile ? '1.04px' : '0.94px',
              background: 'linear-gradient(90deg, #80E5FF 0%, #7584D6 100%)',
              marginBottom: isMobile ? '25px' : '29.7px'
            }}
          />

          {/* Main title */}
          <h2 
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: isMobile ? '36px' : 'clamp(28px, 6vw, 52.57px)',
              lineHeight: '120%',
              letterSpacing: '-3%',
              textAlign: isMobile ? 'left' : 'center',
              background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: isMobile ? '33px' : '29.7px'
            }}
          >
            Transparent Pricing for Digital Excellence.
          </h2>

          {/* Description */}
          <p 
            className={isMobile ? "" : "max-w-3xl mx-auto px-4"}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: isMobile ? '16px' : 'clamp(14px, 3.5vw, 15.02px)',
              lineHeight: '120%',
              letterSpacing: '-4%',
              color: '#465478',
              textAlign: isMobile ? 'left' : 'center',
              marginBottom: isMobile ? '36px' : '0'
            }}
          >
            Choose a package that aligns with your project goals, or let's discuss a custom solution tailored to your unique needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          ref={cardsRef}
          className={`${isMobile ? 'flex flex-col gap-6' : 'flex flex-col md:flex-row justify-center items-center md:items-center relative z-10 pt-14 gap-6 md:gap-8'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={getConditionalAnimate(cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            gap: isMobile ? '23px' : undefined
          }}
        >
          {pricingCards.map((card, index) => (
            <PricingCard key={index} card={card} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PricingCard({ card, index }: { card: PricingCard; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })
  const { getConditionalAnimate, isMobile } = useConditionalAnimation();

  return (
    <motion.div
      ref={ref}
      className={`relative ${!isMobile ? 'transition-transform duration-300 ease-out hover:scale-105' : ''} ${!isMobile && card.isMain ? 'md:-mt-8' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={getConditionalAnimate(inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={isMobile ? undefined : { scale: card.isMain ? 1.05 : 1.03 }}
      style={{
        width: isMobile ? '100%' : undefined
      }}
    >
      <div
        className={`relative rounded-[18.77px] ${!isMobile ? 'transition-all duration-300 ease-out hover:shadow-2xl' : ''} w-full`}
        style={{
          width: isMobile ? '100%' : (card.isMain ? '380px' : '360px'),
          height: isMobile ? 'auto' : (card.isMain ? '631.8px' : '602.1px'),
          minHeight: isMobile ? '580px' : '500px',
          borderRadius: isMobile ? '17.52px' : (card.isMain ? '19.76px' : '18.77px'),
          background: isMobile ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.25)',
          opacity: 1,
          border: isMobile ? (card.isMain ? '1.8px solid rgba(255, 255, 255, 0.9)' : '1.35px solid rgba(255, 255, 255, 0.9)') : (card.isMain ? '1.8px solid rgba(255, 255, 255, 0.9)' : '1.35px solid rgba(255, 255, 255, 0.9)'),
          backdropFilter: 'blur(20px)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: isMobile ? (card.isMain 
            ? '0px 7.2px 28.8px rgba(0, 0, 0, 0.1), 0px 1.8px 7.2px rgba(0, 0, 0, 0.05), inset 0px 0.9px 0px rgba(255, 255, 255, 0.4), 0 0 0 0.9px rgba(255, 255, 255, 0.1)'
            : '0px 3.6px 18px rgba(0, 0, 0, 0.08), 0px 0.9px 3.6px rgba(0, 0, 0, 0.04), inset 0px 0.9px 0px rgba(255, 255, 255, 0.3), 0 0 0 0.9px rgba(255, 255, 255, 0.1)') : (card.isMain 
            ? '0px 7.2px 28.8px rgba(0, 0, 0, 0.1), 0px 1.8px 7.2px rgba(0, 0, 0, 0.05), inset 0px 0.9px 0px rgba(255, 255, 255, 0.4), 0 0 0 0.9px rgba(255, 255, 255, 0.1)'
            : '0px 3.6px 18px rgba(0, 0, 0, 0.08), 0px 0.9px 3.6px rgba(0, 0, 0, 0.04), inset 0px 0.9px 0px rgba(255, 255, 255, 0.3), 0 0 0 0.9px rgba(255, 255, 255, 0.1)')
        }}
      >
        {/* Dotted background pattern for side cards */}
        {!card.isMain && !isMobile && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(150, 202, 230, 0.15) 0.9px, transparent 0.9px)',
              backgroundSize: '18px 18px',
              opacity: 0.4
            }}
          />
        )}
        
        {/* Inner glow effect */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[18.77px]"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
            opacity: 0.6
          }}
        />
        
        {/* Most Popular tag */}
        {card.isPopular && !isMobile && (
          <div
            className="absolute"
            style={{
              width: '88.89px',
              height: '19.78px',
              borderRadius: '11.68px',
              padding: '5.84px 9.34px',
              background: '#111827',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              top: '45px',
              right: '36.9px'
            }}
          >
            <span
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '11.68px',
                lineHeight: '120%',
                letterSpacing: '-2%',
                color: '#FFFFFF',
                whiteSpace: 'nowrap'
              }}
            >
              Most Popular
            </span>
          </div>
        )}

        <div className="h-full flex flex-col relative z-10" style={{ 
          padding: isMobile ? '34px 34px 52px 34px' : '36.9px 36.9px 55.8px 36.9px',
          paddingTop: isMobile ? '34px' : (card.isMain ? '36.9px' : '27px'),
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}>
          {/* Title */}
          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: isMobile ? '27px' : (card.isMain ? 'clamp(24px, 5vw, 31.62px)' : 'clamp(22px, 5vw, 30.04px)'),
              lineHeight: '120%',
              letterSpacing: '-4%',
              color: '#111827',
              marginBottom: isMobile ? '19px' : (card.isMain ? '30.6px' : '20.7px'),
              whiteSpace: 'pre-line',
              flexShrink: 0,
              minHeight: isMobile ? '32px' : '38px'
            }}
          >
            {card.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: isMobile ? '12px' : 'clamp(12px, 3vw, 13.22px)',
              lineHeight: '120%',
              letterSpacing: '-4%',
              color: '#465478',
              marginBottom: isMobile ? '40px' : (card.isMain ? '54px' : '43.2px'),
              flexShrink: 0,
              minHeight: isMobile ? '32px' : '32px'
            }}
          >
            {card.description}
          </p>

          {/* Price */}
          <div
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: isMobile ? '24px' : (card.isMain ? 'clamp(18px, 4vw, 24px)' : 'clamp(18px, 4vw, 24px)'),
              lineHeight: '110%',
              letterSpacing: '-4%',
              color: '#111827',
              marginBottom: isMobile ? '25px' : (card.isMain ? '30.6px' : '28.8px'),
              flexShrink: 0,
              minHeight: isMobile ? '26px' : '26px'
            }}
          >
            {card.price}
          </div>

          {/* Features */}
          <div
            style={{
              marginBottom: isMobile ? '32px' : '30.6px',
              flexShrink: 0,
              minHeight: isMobile ? '180px' : '180px'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '18px' : '18px' }}>
              {card.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check 
                    className="mt-1 flex-shrink-0" 
                    size={14}
                    style={{ color: '#7584D6' }}
                  />
                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: isMobile ? '13px' : 'clamp(13px, 3.2vw, 15.02px)',
                      lineHeight: '120%',
                      letterSpacing: '-2%',
                      color: '#545C9E'
                    }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button - positioned at bottom */}
          <div style={{ marginTop: 'auto', flexShrink: 0, minHeight: isMobile ? '52px' : '55.9px' }}>
            <a href="/form">
              <button
                className={`w-full py-4 px-6 font-medium ${!isMobile ? 'transition-all duration-300 hover:scale-105' : ''} relative`}
                style={{
                  width: isMobile ? '100%' : '100%',
                  maxWidth: isMobile ? '100%' : '280px',
                  height: isMobile ? '52px' : '55.9px',
                  borderRadius: isMobile ? '87.45px' : '93.87px',
                  padding: isMobile ? '12.24px 20.99px' : '13.14px 22.53px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: isMobile ? (card.isMain ? 700 : 500) : (card.isMain ? 700 : 500),
                  fontSize: isMobile ? '13px' : 'clamp(14px, 3.5vw, 15.02px)',
                  lineHeight: '130%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  background: isMobile ? (card.isMain 
                    ? 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)'
                    : 'transparent') : (card.isMain 
                    ? 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)'
                    : 'transparent'),
                  color: isMobile ? (card.isMain ? '#FFFFFF' : 'transparent') : (card.isMain ? '#FFFFFF' : 'transparent'),
                  border: isMobile ? (card.isMain ? 'none' : '0.78px solid rgba(255, 255, 255, 0.9)') : 'none',
                  boxShadow: isMobile ? (card.isMain 
                    ? '0px -1.88px 0.94px 0px rgba(12, 25, 40, 0.18) inset, 0px 6.57px 14.08px -2.82px rgba(100, 124, 153, 0.2), 0px 1.88px 3.75px 0px rgba(100, 124, 153, 0.3), 0px 1.88px 0.94px 0px rgba(255, 255, 255, 0.1) inset'
                    : 'none') : (card.isMain 
                    ? '0px -1.88px 0.94px 0px rgba(12, 25, 40, 0.18) inset, 0px 6.57px 14.08px -2.82px rgba(100, 124, 153, 0.2), 0px 1.88px 3.75px 0px rgba(100, 124, 153, 0.3), 0px 1.88px 0.94px 0px rgba(255, 255, 255, 0.1) inset'
                    : 'none')
                }}
              >
                {/* Gradient border for side cards */}
                {!card.isMain && !isMobile && (
                  <div
                    className="absolute inset-0 rounded-[93.87px] pointer-events-none"
                    style={{
                      background: 'linear-gradient(98.55deg, #5967B5 -6.89%, #908EED 91.15%)',
                      padding: '0.84px',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor'
                    }}
                  />
                )}

                {/* Gradient border for side card buttons on mobile */}
                {!card.isMain && isMobile && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      borderRadius: '87.45px',
                      background: 'linear-gradient(98.55deg, #5967B5 -6.89%, #908EED 91.15%)',
                      padding: '0.84px',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor'
                    }}
                  />
                )}
                <span
                  style={{
                    background: isMobile ? (card.isMain ? 'none' : 'linear-gradient(279.19deg, #80E5FF -11.2%, #545C9E 41.14%)') : (card.isMain ? 'none' : 'linear-gradient(279.19deg, #80E5FF -11.2%, #545C9E 41.14%)'),
                    WebkitBackgroundClip: isMobile ? (card.isMain ? 'none' : 'text') : (card.isMain ? 'none' : 'text'),
                    WebkitTextFillColor: isMobile ? (card.isMain ? 'inherit' : 'transparent') : (card.isMain ? 'inherit' : 'transparent'),
                    backgroundClip: isMobile ? (card.isMain ? 'none' : 'text') : (card.isMain ? 'none' : 'text'),
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  Get Started
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PricingBlock 