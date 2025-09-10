import React, { useEffect } from 'react';
import { RaiseCardData } from '../types';

interface RaiseCardProps extends Omit<RaiseCardData, 'id'> {
  className?: string;
}

export const RaiseCard: React.FC<RaiseCardProps> = ({
  number,
  image,
  title,
  description,
  className = ''
}) => {
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
    <div 
      className={`rounded-[20px] backdrop-blur-[60px] flex flex-col ${className}`}
      style={{
        width: isMobile ? '280px' : '370px',
        height: isMobile ? '360px' : '400px',
        padding: isMobile ? '32px 24px' : '43px 40px',
        borderRadius: isMobile ? '18px' : '20px',
        border: isMobile ? '1px solid' : '0.87px solid rgba(255, 255, 255, 0.3)',
        background: isMobile ? 'transparent' : 'rgba(255, 255, 255, 0.15)',
        boxShadow: isMobile ? 'none' : '0 8px 32px rgba(0, 0, 0, 0.1)',
        borderImageSlice: isMobile ? 1 : undefined,
        borderImageSource: isMobile 
          ? 'linear-gradient(267.31deg, rgba(11, 30, 84, 0.5) -3.38%, rgba(79, 171, 255, 0) 233.13%)' 
          : undefined
      }}
    >
      {/* Number circle */}
      <div 
        className="flex justify-center"
        style={{ marginBottom: isMobile ? '24px' : '32px' }}
      >
        <div 
          className="w-10 h-[37px] rounded-[30px] flex items-center justify-center"
          style={{ backgroundColor: '#F1F2F9' }}
        >
          <span 
            className="text-[#545C9E] text-[14px] font-bold leading-[130%] tracking-[-2%]"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            {number}
          </span>
        </div>
      </div>
      
      {/* Image */}
      <div 
        className="flex justify-center"
        style={{ marginBottom: isMobile ? '24px' : '32px' }}
      >
        <img 
          src={image.src}
          alt={image.alt}
          className={isMobile ? "w-[90px] h-[90px]" : "w-[131px] h-[132px]"}
          loading="lazy"
        />
      </div>
      
      {/* Title */}
      <div 
        className="flex items-center justify-center text-center"
                  style={{ 
            height: isMobile ? '44px' : '48px',
            marginBottom: isMobile ? '30px' : '24px'
          }}
      >
        <h3 
          className="text-[#111827] font-bold leading-[120%] tracking-0"
          style={{ 
            fontFamily: 'Space Grotesk',
            fontSize: isMobile ? '18px' : '20px'
          }}
        >
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <div className={isMobile ? '' : 'flex-1 flex items-end'}>
        <p 
          className="text-[#545C9E] font-normal leading-[130%] tracking-[-2%] text-center w-full"
          style={{ 
            fontFamily: 'Manrope',
            fontSize: isMobile ? '11px' : '14px'
          }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};