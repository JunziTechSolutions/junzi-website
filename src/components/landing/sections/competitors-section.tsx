import React from 'react';

export default function CompetitorsSection() {
  return (
    <section className="pt-7 pb-1 sm:pt-80 sm:pb-72 md:pt-96 md:pb-80 px-4">
      <div className="w-full mx-auto text-center">
        {/* Заголовок */}
        <div className="mb-6 sm:mb-6 md:mb-8 lg:mb-10">
          <div className="max-w-full mx-auto">
            <div
              className="text-[36px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold break-words whitespace-normal"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 800,
                background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.3,
                wordBreak: 'break-word',
              }}
            >
              &ldquo;Every day, your competitors are<br />
              launching the next big thing&rdquo;
            </div>
          </div>
        </div>

        {/* Текст ниже */}
        <div>
          <p 
            className="text-[16px] sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-[100%] tracking-[0%]"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 400,
              color: 'black',
            }}
          >
            You want to build a future? We can do it.
          </p>
        </div>
      </div>
    </section>
  );
} 