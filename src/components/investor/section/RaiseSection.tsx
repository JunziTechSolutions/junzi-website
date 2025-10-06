import React, { useEffect, useRef } from 'react';
import { RaiseCard } from './RaiseCard';
import { RaiseCardData, SectionHeaderData } from '../types';

interface SectionHeaderProps extends SectionHeaderData {}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title, description }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="text-center">
      {/* Subtitle */}
      <h3 
        className="text-[#545C9E] font-semibold leading-[110%] tracking-[8%] uppercase"
        style={{ 
          fontFamily: 'Manrope',
          fontSize: isMobile ? '14px' : '15.75px',
          marginBottom: isMobile ? '8px' : '12px'
        }}
      >
        {subtitle}
      </h3>
      
      {/* Line with gradient */}
      <div 
        className="flex justify-center"
        style={{ marginBottom: isMobile ? '22px' : '32px' }}
      >
        <div 
          className="h-px"
          style={{
            width: isMobile ? '22px' : '32px',
            background: 'linear-gradient(90deg, #80E5FF 0%, #7584D6 100%)'
          }}
        />
      </div>
      
      {/* Main title */}
      <h1 
        className="font-medium leading-[120%] tracking-[-3%] text-center"
        style={{ 
          fontFamily: 'Space Grotesk',
          fontSize: isMobile ? '36px' : '56px',
          background: 'linear-gradient(278.09deg, #0B1E54 12.96%, #4FABFF 78.29%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: isMobile ? '25px' : '32px'
        }}
      >
        {isMobile ? (
          <>
            You Can't Raise Money<br/>
            With Just an Idea
          </>
        ) : (
          title
        )}
      </h1>
      
      {/* Description */}
      <p 
        className="text-[#111827] font-normal leading-[100%] tracking-[-2%] text-center"
        style={{ 
          fontFamily: 'Manrope',
          fontSize: isMobile ? '16px' : '20px',
          marginBottom: isMobile ? '40px' : '70px'
        }}
      >
        {isMobile ? (
          <>
            Investors need to see more than just a concept.<br/>
            They need to see a plan and a tangible<br/>
            product vision.
          </>
        ) : (
          description
        )}
      </p>
    </div>
  );
};

const RAISE_CARDS_DATA: readonly RaiseCardData[] = [
  {
    id: 'no-prototype',
    number: '1',
    image: {
      src: '/investor/cards/raise/triangle.svg',
      alt: 'Triangle representing abstract concept'
    },
    title: 'No Prototype = No Traction',
    description: 'Without a clickable prototype, your idea<br />remains abstract and unproven to investors.'
  },
  {
    id: 'investors-execution',
    number: '2',
    image: {
      src: '/investor/cards/raise/abstract.svg',
      alt: 'Abstract shape representing execution'
    },
    title: 'Investors Want Execution',
    description: 'A pitch deck and roadmap show you\'ve thought through the execution details.'
  },
  {
    id: 'full-dev-cost',
    number: '3',
    image: {
      src: '/investor/cards/raise/square.svg',
      alt: 'Square representing development cost'
    },
    title: 'Full Dev is $10,000+',
    description: 'You don\'t need a fully-coded app yet. Validate your idea and raise funds first.'
  }
];

interface RaiseSectionProps {
  className?: string;
}

export const RaiseSection: React.FC<RaiseSectionProps> = ({ className = '' }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={`py-20 px-4 ${className}`} id="raise-section">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="IDENTIFYING THE PAIN POINT"
          title="You Can't Raise Money With Just an Idea"
          description="Investors need to see more than just a concept. They need to see a plan and a tangible product vision."
        />
        
        {/* Cards Grid */}
        <div 
          className={
            isMobile 
              ? 'flex flex-col gap-6' 
              : 'flex justify-center gap-[45px] flex-wrap'
          }
        >
          {RAISE_CARDS_DATA.map((card) => (
            <div key={card.id}>
              <RaiseCard
                number={card.number}
                image={card.image}
                title={card.title}
                description={card.description}
                className={isMobile ? 'w-full max-w-[320px] mx-auto' : ''}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
