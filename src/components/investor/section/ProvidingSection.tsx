import React, { useEffect, useRef, useState } from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
}

interface TimelineStepProps {
  week: string;
  title: string;
  description: string;
  iconPath: string;
  offsetTop: number;
  offsetLeft?: number;
  isVisible: boolean;
  index: number;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title, description }) => (
  <div className="text-center md:text-left">
    {/* Subtitle */}
    <h3 
      className="text-[#545C9E] text-[13px] md:text-[15.75px] font-semibold leading-[110%] tracking-[8%] uppercase mb-3"
      style={{ fontFamily: 'Manrope' }}
    >
      {subtitle}
    </h3>
    
    {/* Line with gradient */}
    <div className="flex justify-center md:justify-start mb-5 md:mb-8">
      <div 
        className="w-8 h-px"
        style={{
          borderWidth: '1px',
          border: '1px solid',
          borderImageSource: 'linear-gradient(90deg, #80E5FF 0%, #7584D6 100%)',
          borderImageSlice: '1'
        }}
      />
    </div>
    
    {/* Main title */}
    <h1 
      className="text-[36px] sm:text-[44px] md:text-[56px] font-medium leading-[120%] tracking-[-3%] text-center md:text-left mb-5 md:mb-8"
      style={{ 
        fontFamily: 'Space Grotesk',
        background: 'linear-gradient(278.09deg, #0B1E54 12.96%, #4FABFF 78.29%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
    >
      {title}
    </h1>
    
    {/* Description */}
    <p 
      className="text-[#111827] text-[16px] md:text-[20px] font-normal leading-[180%] md:leading-[180%] tracking-[-2%] text-center md:text-left max-w-[660px] mx-auto md:mx-0"
      style={{ fontFamily: 'Manrope' }}
    >
      {description}
    </p>
  </div>
);

const TimelineStep: React.FC<TimelineStepProps> = ({ 
  week, 
  title, 
  description, 
  iconPath, 
  offsetTop, 
  offsetLeft = 0, 
  isVisible, 
  index 
}) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
  // Определяем ширину для каждого элемента в соответствии со спецификацией
  const getCardWidth = (cardTitle: string) => {
    switch (cardTitle) {
      case "Clickable Prototype":
        return "320px";
      case "Gantt Chart + Dev Timeline":
        return "379px";
      case "Feature Breakdown":
        return "320px";
      case "10-Slide Pitch Deck":
        return "303px";
      default:
        return "294px";
    }
  };
  
  return (
    <div 
      ref={stepRef}
      className={`relative flex flex-col items-center transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-12'
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms` 
      }}
    >
      {/* Week Label - always at the top */}
      <div className={`text-center mb-8 -mt-[40px] transition-all duration-400 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
      }`}>
        <h3 
          className="text-[#000000] text-[14px] font-bold leading-[120%] tracking-[2%] uppercase mb-4"
          style={{ 
            fontFamily: 'Manrope',
            transitionDelay: `${index * 200 + 50}ms`
          }}
        >
          {week}
        </h3>
      </div>
      
      {/* Card with gradient background and bluebag background */}
      <div 
        className="flex flex-col items-center relative" 
        style={{ 
          marginTop: `${offsetTop}px`,
          marginLeft: `${offsetLeft}px`,
          backgroundImage: 'url(/bluebag.png)',
          backgroundSize: '416px 416px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '16px',
          padding: '24px',
          width: '416px',
          height: '416px'
        }}
      >
        <div 
          className={`flex items-center transition-all duration-600 ease-out ${
            isVisible ? 'scale-100 rotate-0 opacity-100' : 'scale-90 -rotate-2 opacity-0'
          }`}
          style={{
            width: getCardWidth(title),
            height: "62px",
            borderRadius: "103.27px",
            paddingTop: "7.23px",
            paddingRight: "30.98px",
            paddingBottom: "7.23px",
            paddingLeft: "9.29px",
            background: "linear-gradient(272.37deg, #80E5FF -48.95%, #545C9E 105.39%)",
            transitionDelay: `${index * 200 + 150}ms`
          }}
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            <img 
              src={iconPath} 
              alt={title}
              style={{
                width: "48px",
                height: "48px"
              }}
            />
          </div>
          
          {/* Spacing between icon and text */}
          <div style={{ width: "20px" }} />
          
          {/* Text */}
          <span 
            className="text-white text-[21.69px] font-bold leading-[130%] tracking-[-0.02em]"
            style={{ 
              fontFamily: 'Space Grotesk',
              whiteSpace: 'nowrap'
            }}
          >
            {title}
          </span>
        </div>
        
        {/* Description */}
        <p 
          className={`text-[#000000] text-[16px] font-normal leading-[140%] tracking-[-2%] text-left max-w-[280px] mt-[30px] transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            fontFamily: 'Manrope',
            transitionDelay: `${index * 200 + 300}ms`,
            border: '1.1px solid #FFFFFF',
            backdropFilter: 'blur(60px)',
            borderRadius: '8px',
            paddingTop: '30px',
            paddingBottom: '30px',
            paddingLeft: '20px',
            paddingRight: '20px',
            background: 'rgba(255, 255, 255, 0.1)'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

// Mobile card for timeline step
interface MobileStepCardProps {
  category: string;
  title: string;
  description: string;
  iconPath: string;
  index: number;
}

interface ArrowProps {
  position: 'left' | 'center' | 'right';
}

const Arrow: React.FC<ArrowProps> = ({ position }) => {
  const getPosition = () => {
    switch (position) {
      case 'left':
        return 'left-[25%]';
      case 'center':
        return 'left-[50%]';
      case 'right':
        return 'left-[75%]';
      default:
        return 'left-[25%]';
    }
  };

  const getMargins = () => {
    switch (position) {
      case 'left':
        return { marginLeft: '0px', marginRight: '30px' };
      case 'center':
        return { marginLeft: '30px', marginRight: '30px' };
      case 'right':
        return { marginLeft: '30px', marginRight: '0px' };
      default:
        return { marginLeft: '30px', marginRight: '30px' };
    }
  };

  return (
    <div className={`absolute top-[-40px] ${getPosition()} transform -translate-x-1/2 z-10`}>
      <div className="flex items-center justify-center" style={{ 
        width: '169px',
        ...getMargins()
      }}>
        <svg
          width="169"
          height="16"
          viewBox="0 0 169 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-4"
          aria-hidden="true"
        >
          <path 
            d="M168.707 8.70711C169.098 8.31658 169.098 7.68342 168.707 7.29289L162.343 0.928932C161.953 0.538408 161.32 0.538408 160.929 0.928932C160.538 1.31946 160.538 1.95262 160.929 2.34315L166.586 8L160.929 13.6569C160.538 14.0474 160.538 14.6805 160.929 15.0711C161.32 15.4616 161.953 15.4616 162.343 15.0711L168.707 8.70711ZM0 8V9H168V8V7H0V8Z" 
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

const MobileStepCard: React.FC<MobileStepCardProps> = ({
  category,
  title,
  description,
  iconPath,
  index,
}) => {
  return (
    <div
      role="group"
      aria-label={`${category} - ${title}`}
      className={`rounded-3xl border border-[#C9D0F3] bg-transparent shadow-none p-4 sm:p-5 transition-all duration-500 ease-out ${
        'opacity-100 translate-y-0'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* top label with arrow */}
      <div className="w-full flex items-center justify-center gap-3 mb-4">
        <span
          className="text-[#0B1E54] text-[16px] font-semibold tracking-[2%]"
          style={{ fontFamily: 'Manrope' }}
        >
          {category}
        </span>
        <svg
          className="h-4 w-[64px] shrink-0"
          width="64"
          height="16"
          viewBox="0 0 64 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 8V9H63V8V7H0V8Z" fill="black"/>
        </svg>
      </div>

      {/* gradient pill with inline icon (match desktop style) */}
      <div className="relative flex justify-center">
        <div
          className="inline-flex items-center rounded-full px-3 sm:px-4 py-2.5 sm:py-3 gap-3 sm:gap-4 w-[348px]"
          style={{
            background:
              'linear-gradient(272.37deg, #80E5FF -48.95%, #545C9E 105.39%)',
          }}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white ring-2 ring-[#5860A9] grid place-items-center">
            <img src={iconPath} alt="" className="w-6 h-6 sm:w-7 sm:h-7 object-contain pointer-events-none select-none" />
          </div>
          <span
            className="text-white text-[18px] sm:text-[20px] font-bold leading-[130%] tracking-[-0.02em]"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            {title}
          </span>
        </div>
      </div>

      {/* description bubble */}
      <div className="mt-4 bg-white rounded-2xl px-4 py-4 border border-[#ECEFF5] shadow-sm">
        <p
          className="text-[#111827] text-[15px] sm:text-[16px] font-medium leading-[150%] tracking-[-2%] text-center"
          style={{ fontFamily: 'Manrope' }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

interface ProvidingSectionProps {
  className?: string;
}

// Custom hook for Intersection Observer
const useIntersectionObserver = (
  elementRefs: React.RefObject<HTMLDivElement>[],
  options: IntersectionObserverInit = {}
): boolean[] => {
  const [visibleStates, setVisibleStates] = useState<boolean[]>(
    new Array(elementRefs.length).fill(false)
  );

  useEffect(() => {
    const currentRefs = elementRefs.map(ref => ref.current).filter(Boolean);
    
    if (currentRefs.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = currentRefs.indexOf(entry.target as HTMLDivElement);
        if (index !== -1) {
          setVisibleStates(prev => {
            const newStates = [...prev];
            newStates[index] = entry.isIntersecting;
            return newStates;
          });
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '-10% 0px -10% 0px',
      ...options
    });

    currentRefs.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [elementRefs, options]);

  return visibleStates;
};

export const ProvidingSection: React.FC<ProvidingSectionProps> = ({ className = '' }) => {
  const timelineSteps = [
    {
      week: "Showcase",
      title: "Clickable Prototype",
      description: "A high-fidelity Figma prototype to showcase your app's core user flow.",
      iconPath: "/investor/providing/icons/rocket.svg",
      offsetTop: 0,
      category: 'Showcase',
    },
    {
      week: "The Plan", 
      title: "Gantt Chart + Dev Timeline",
      description: "A detailed project timeline to show investors you have a clear plan.",
      iconPath: "/investor/providing/icons/rating.svg",
      offsetTop: 100,
      offsetLeft: 40,
      category: 'The Plan',
    },
    {
      week: "Features",
      title: "Feature Breakdown", 
      description: "A comprehensive document outlining your MVP and future features.",
      iconPath: "/investor/providing/icons/square.svg",
      offsetTop: 200,
      category: 'Features',
    },
    {
      week: "Investor Narrative",
      title: "10-Slide Pitch Deck",
      description: "A persuasive, professionally designed deck covering all key investor questions.",
      iconPath: "/investor/providing/icons/test.svg", 
      offsetTop: 300,
      category: 'Investor Narrative',
    }
  ];

  // Create refs for each timeline step
  const stepRefs = useRef<React.RefObject<HTMLDivElement>[]>(
    timelineSteps.map(() => React.createRef<HTMLDivElement>())
  );

  // Track visibility of each step
  const visibleSteps = useIntersectionObserver(stepRefs.current);

  return (
    <section className={`py-20 px-4 ${className}`} id="providing-section">
      <div className="max-w-7xl mx-auto pl-0 md:pl-[60px]">
        <SectionHeader
          subtitle="THE SOLUTION WE PROVIDING"
          title="What's Included in Your Package"
          description="We deliver a complete, professional package designed to impress investors and secure funding."
        />
        
        {/* Mobile list */}
        <div className="mt-8 md:hidden space-y-6">
          {timelineSteps.map((step, index) => (
            <MobileStepCard
              key={index}
              category={step.category as string}
              title={step.title}
              description={step.description}
              iconPath={step.iconPath}
              index={index}
            />
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="mt-20 hidden md:block">
          <div className="grid grid-cols-4 gap-32 relative">
            {/* Vertical divider lines - equal spacing */}
            <div className="hidden md:block absolute top-0 w-px h-[104%] bg-gray-300" style={{ left: '8%' }}></div>
            <div className="hidden md:block absolute top-0 w-px h-[104%] bg-gray-300" style={{ left: '30%' }}></div>
            <div className="hidden md:block absolute top-0 w-px h-[104%] bg-gray-300" style={{ left: '46%' }}></div>
            <div className="hidden md:block absolute top-0 w-px h-[104%] bg-gray-300" style={{ left: '62%' }}></div>
            <div className="hidden md:block absolute top-0 w-px h-[104%] bg-gray-300" style={{ left: '78%' }}></div>
            <div className="hidden md:block absolute top-0 w-px h-[104%] bg-gray-300" style={{ left: '94%' }}></div>

            {/* Arrows between categories */}
            <Arrow position="left" />
            <Arrow position="center" />
            <Arrow position="right" />

            {timelineSteps.map((step, index) => (
              <div key={index} ref={stepRefs.current[index]}>
                <TimelineStep
                  week={step.week}
                  title={step.title}
                  description={step.description}
                  iconPath={step.iconPath}
                  offsetTop={step.offsetTop}
                  offsetLeft={step.offsetLeft}
                  isVisible={visibleSteps[index]}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};