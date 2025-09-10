import Link from 'next/link';
import React from 'react';

export default function ReadyToBuildSection() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-8 md:mb-[69px]">
            <h1 
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: 'clamp(40px, 8vw, 86.62px)',
                lineHeight: '110%',
                letterSpacing: '-6%',
                textAlign: 'center',
                color: '#111827',
                marginBottom: '23px'
              }}
              className="md:mb-5"
            >
              <span style={{
                background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Ready To build your
              </span>
            </h1>
            
            <h1 
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: 'clamp(24px, 8vw, 86.62px)',
                lineHeight: '110%',
                letterSpacing: '-6%',
                textAlign: 'center',
                color: '#111827',
                marginBottom: '25px'
              }}
              className="whitespace-normal md:whitespace-nowrap md:mb-5"
            >
              <span>next </span>
              <span 
                className="inline-block rounded-full border-2"
                style={{
                  border: '2px solid #111827',
                  background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  padding: 'clamp(4px, 1vw, 8px) clamp(8px, 2vw, 16px) clamp(6px, 1.5vw, 12px) clamp(8px, 2vw, 16px)',
                  margin: '0 clamp(4px, 1vw, 8px)'
                }}
              >
                Break through
              </span>
              <span> system?</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8 md:mb-[69px]">
            <p 
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(16px, 4vw, 21.66px)',
                lineHeight: '130%',
                letterSpacing: '-2%',
                textAlign: 'center',
                color: '#111827',
                padding: '0 clamp(16px, 4vw, 0px)',
                marginBottom: '25px'
              }}
              className="md:mb-0"
            >
              Let's discuss your project. We're here to help you navigate the complexities of digital product development and turn your vision into a reality.
            </p>
          </div>

          {/* Button */}
          <a href="/form">
            <button
              style={{
                width: 'clamp(210px, 50vw, 252.17498779296875px)',
                height: 'clamp(53px, 12vw, 64.48750305175781px)',
                borderRadius: '90.17px',
                padding: 'clamp(12.62px, 3vw, 15.16px) clamp(21.64px, 5vw, 25.99px)',
                background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: 'clamp(16px, 4vw, 19.25px)',
                lineHeight: '130%',
                letterSpacing: '-2%',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0px 6px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              <Link href="/form">
              Start a Project
              </Link>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
} 