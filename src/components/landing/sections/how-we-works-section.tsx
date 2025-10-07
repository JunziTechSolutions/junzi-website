"use client";
import React, { useEffect, useRef } from 'react';

const HowWeWorksSection = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true)
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const steps = [
    {
      step: "Step 1",
      icon: "/works/prototype.png",
      title: "Prototype",
      description: "See your idea live in 2-4 days — no upfront cost."
    },
    {
      step: "Step 2", 
      icon: "/works/proposal.svg",
      title: "Get a Proposal",
      description: "Fixed pricing, clear milestones, no fees."
    },
    {
      step: "Step 3",
      icon: "/works/development.svg", 
      title: "Full Development",
      description: "Weekly updates, full transparency."
    },
    {
      step: "Step 4",
      icon: "/works/scale.svg",
      title: "Optimize & Scale", 
      description: "You own everything. We support only if you need it."
    }
  ];

  return (
    <section id="process" className="relative py-18 px-4 overflow-hidden pt-12">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          {/* Text above title */}
          <div 
            className="text-[#545C9E] uppercase tracking-[0.08em] mb-3 md:mb-3"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 600,
              fontSize: isMobile ? '14px' : '14.18px',
              lineHeight: '110%',
              marginBottom: isMobile ? '8px' : '12px'
            }}
          >
            HOW WE WORK
          </div>

          {/* Line */}
          <div className="flex justify-center" style={{ marginBottom: isMobile ? '22px' : '28px' }}>
            <div 
              style={{
                width: isMobile ? '22px' : '28px',
                height: isMobile ? '0.69px' : '1px',
                background: 'linear-gradient(90deg, #80E5FF 0%, #7584D6 100%)'
              }}
            ></div>
          </div>

          {/* Main title */}
          <h2 
            className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-[-0.03em]"
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 500,
              fontSize: isMobile ? '36px' : '50.4px',
              lineHeight: '120%',
              background: 'linear-gradient(278.09deg, #0B1E54 12.96%, #4FABFF 78.29%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: isMobile ? '25px' : '28px'
            }}
          >
            {!isMounted ? (
              'Explore Our Simple Process'
            ) : isMobile ? (
              <>
                Explore Our Simple Process
              </>
            ) : (
              'Explore Our Simple Process'
            )}
          </h2>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-[#111827] max-w-4xl mx-auto tracking-[-0.02em]"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 400,
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: '120%',
              marginBottom: isMobile ? '32px' : '56px'
            }}
          >
            {!isMounted ? (
              'From prototype to scale — transparent pricing, no surprises, full ownership'
            ) : isMobile ? (
              <>
                From prototype to scale — transparent<br/>
                pricing, no surprises, full ownership
              </>
            ) : (
              'From prototype to scale — transparent pricing, no surprises, full ownership'
            )}
          </p>
        </div>

        {/* Steps cards */}
        {!isMounted ? (
          <div className="mb-14 flex flex-col gap-6 px-4">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        ) : isMobile ? (
          <div className="mb-14 flex flex-col gap-6 px-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative transition-all duration-300 ease-in-out glass-card w-full"
                style={{ 
                  borderRadius: '18px',
                  minHeight: '280px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                } as React.CSSProperties}
              >
                <div className="flex flex-col items-center justify-center h-full" style={{ padding: '32px 24px' }}>
                  <div
                    className="mb-6 px-4 py-2 rounded-full"
                    style={{
                      background: '#F1F2F9',
                      fontFamily: 'Manrope',
                      fontWeight: 400,
                      fontSize: '14.4px',
                      lineHeight: '130%',
                      letterSpacing: '-0.02em',
                      color: '#545C9E',
                    }}
                  >
                    {step.step}
                  </div>
                  <div className="mb-6">
                    <img src={step.icon} alt={step.title} width={80} height={80} className="w-[80px] h-[80px]" />
                  </div>
                  <h3
                    className="text-lg font-bold text-center mb-4 text-[#111827]"
                    style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', lineHeight: '120%' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-center text-[#545C9E]"
                    style={{ fontFamily: 'Manrope', fontWeight: 400, fontSize: '14.4px', lineHeight: '130%', letterSpacing: '-0.02em' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative transition-all duration-300 ease-in-out glass-card w-full max-w-[239px] hover:scale-105 hover:shadow-xl"
                style={{ width: '239px', height: '360px', borderRadius: '18px' } as React.CSSProperties}
              >
                <div className="flex flex-col items-center justify-center h-full" style={{ padding: '52px 35px' }}>
                  <div
                    className="mb-7 px-4 py-2 rounded-full"
                    style={{
                      background: '#F1F2F9',
                      fontFamily: 'Manrope',
                      fontWeight: 400,
                      fontSize: '14.4px',
                      lineHeight: '130%',
                      letterSpacing: '-0.02em',
                      color: '#545C9E',
                    }}
                  >
                    {step.step}
                  </div>
                  <div className="mb-7">
                    <img src={step.icon} alt={step.title} width={90} height={90} className="w-[90px] h-[90px]" />
                  </div>
                  <h3
                    className="text-lg md:text-xl font-bold text-center mb-5 text-[#111827]"
                    style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', lineHeight: '120%' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-center text-[#545C9E]"
                    style={{ fontFamily: 'Manrope', fontWeight: 400, fontSize: '14.4px', lineHeight: '130%', letterSpacing: '-0.02em' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HowWeWorksSection;