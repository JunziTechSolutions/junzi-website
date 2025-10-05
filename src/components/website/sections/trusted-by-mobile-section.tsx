import React from 'react';
import BrandsSlider from './trusted-by-section';
import Link from 'next/link';

const TrustedByMobileSection: React.FC = () => {

  return (
    <>
    <div className="md:hidden px-4 py-8">
      {/* Заголовок */}
      <h2 
        className="text-center mb-10"
        style={{
          fontFamily: 'Space Grotesk',
          fontWeight: 700,
          fontStyle: 'bold',
          fontSize: '14px',
          lineHeight: '110%',
          letterSpacing: '8%',
          textTransform: 'uppercase'
        }}
      >
        TRUSTED BY MARKET LEADERS
      </h2>

      {/* Компонент с логотипами компаний */}
      <div className="mb-8">
        <BrandsSlider hideTitle={true} />
      </div>

      {/* Горизонтальная линия */}
      <div 
        className="mx-auto mb-2.5"
        style={{
          width: '339px',
          borderTop: '1.04px solid rgba(117, 132, 214, 0.2)'
        }}
      />

      {/* Текст */}
      <p 
        className="text-center mb-6"
        style={{
          fontFamily: 'Manrope',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '16.69px',
          lineHeight: '130%',
          letterSpacing: '-2%',
          color: '#465478'
        }}
      >
        Unsure which plan to pick?
      </p>

      {/* Кнопка */}
      <div className="flex justify-center">
        <Link href="/form">
        <button
          className="flex items-center justify-center"
          style={{
            width: '167px',
            height: '62px',
            borderRadius: '104.3px',
            padding: '14.6px 25.03px',
            background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontStyle: 'bold',
            fontSize: '16px',
            lineHeight: '130%',
            letterSpacing: '-2%',
            textAlign: 'center',
            verticalAlign: 'middle',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Ask Our Expert
        </button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default TrustedByMobileSection;
