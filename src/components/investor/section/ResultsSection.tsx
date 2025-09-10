import React from 'react';

type ResultCard = {
  id: string;
  image: { src: string; alt: string };
  title: string;
};

const RESULTS_CARDS: readonly ResultCard[] = [
  { id: 'pitch', image: { src: '/investor/results/pitch.svg', alt: 'Pitch Deck Slides' }, title: 'Pitch Deck Slides' },
  { id: 'prototype', image: { src: '/investor/results/prototype.svg', alt: 'Figma-style Prototype' }, title: 'Figma-style Prototype' },
  { id: 'roadmap', image: { src: '/investor/results/roadmap.svg', alt: 'PDF Roadmap Sample' }, title: 'PDF Roadmap Sample' },
];

export const ResultsSection = () => {
  return (
    <section className="py-12 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Текст "Our results" */}
          <div 
            className="text-center uppercase tracking-[8%] mb-3 text-sm md:text-base"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 600,
              fontSize: '15.75px',
              lineHeight: '110%',
              color: '#545C9E'
            }}
          >
            Our results
          </div>
          
          {/* Линия с градиентом */}
          <div className="mb-6 md:mb-8">
            <div 
              className="h-px"
              style={{
                width: '32px',
                background: 'linear-gradient(90deg, #80E5FF 0%, #7584D6 100%)'
              }}
            />
          </div>
          
          {/* Заголовок "See What You'll Get" */}
          <h2 
            className="text-center mb-6 md:mb-8 text-3xl md:text-5xl lg:text-6xl leading-tight px-4"
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 500,
              letterSpacing: '-3%',
              background: 'linear-gradient(278.09deg, #0B1E54 12.96%, #4FABFF 78.29%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            See What You&apos;ll Get
          </h2>
          
          {/* Описание */}
          <p 
            className="text-center max-w-2xl mb-8 md:mb-16 text-base md:text-lg px-4"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 400,
              lineHeight: '140%',
              letterSpacing: '-2%',
              color: '#111827'
            }}
          >
            Get a sneak peek of the high-quality deliverables you&apos;ll receive.
          </p>
          
          {/* Карточки */}
          <div className="w-full max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {RESULTS_CARDS.map((card) => (
                <div key={card.id} className="w-full">
                  <div 
                    className="bg-white w-full max-w-sm mx-auto lg:max-w-none"
                    style={{
                      height: '300px',
                      borderWidth: '0.95px',
                      borderRadius: '21.87px',
                      border: '0.95px solid #E5E7EB'
                    }}
                  >
                    <div className="p-4 md:p-5 h-full flex flex-col items-center">
                      <img 
                        src={card.image.src}
                        alt={card.image.alt}
                        className="max-h-[208px] w-full max-w-[284px] h-auto object-contain"
                        style={{
                          borderRadius: '16px'
                        }}
                      />
                      <h3 
                        className="text-center mt-6 md:mt-7 text-lg md:text-xl"
                        style={{
                          fontFamily: 'Space Grotesk',
                          fontWeight: 700,
                          lineHeight: '120%',
                          letterSpacing: '0%',
                          background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};