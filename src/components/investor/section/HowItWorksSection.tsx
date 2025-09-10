import React from 'react';

export const HowItWorksSection = () => {
  return (
    <section className="w-full py-16 flex flex-col items-center">
      {/* Content Block */}
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center mb-16">
        {/* "OUR PROCESS" текст */}
        <div 
          className="text-[15.75px] font-semibold leading-[110%] tracking-[8%] uppercase mb-3"
          style={{
            fontFamily: 'Manrope',
            fontWeight: 600,
          }}
        >
          OUR PROCESS
        </div>
        
        {/* Градиентная линия */}
        <div className="mb-8">
          <div 
            className="w-8 h-px"
            style={{
              background: 'linear-gradient(90deg, #80E5FF 0%, #7584D6 100%)',
            }}
          />
        </div>
        
        {/* Заголовок "How It Works" */}
        <h2 
          className="text-[56px] font-medium leading-[120%] tracking-[-3%] text-center mb-8"
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 500,
            background: 'linear-gradient(278.09deg, #0B1E54 12.96%, #4FABFF 78.29%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          How It <span style={{
            background: 'linear-gradient(278.09deg, #0B1E54 12.96%, #4FABFF 78.29%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Works</span>
        </h2>
        
        {/* Описание */}
        <p 
          className="text-[20px] font-normal leading-[100%] tracking-[-2%] text-center"
          style={{
            fontFamily: 'Manrope',
            fontWeight: 400,
            color: '#111827',
          }}
        >
          A simple, streamlined process to get you from idea to investor-ready in just one week.
        </p>
      </div>

      {/* Desktop layout */}
      <div 
        className="relative justify-center items-center hidden md:flex"
        style={{
          width: '1200px',
          height: '1200px',
        }}
      >
        {/* Form image positioned on the left */}
        <img 
          src="/investor/works/form.svg" 
          alt="Form"
          className="absolute"
          style={{
            left: '150px',
            top: '60px',
            width: '333px',
            height: '389px',
          }}
        />
        
        {/* Text content block on the right side behind the line */}
        <div 
          className="absolute"
          style={{
            left: '700px',
            top: '140px',
            maxWidth: '400px',
          }}
        >
          {/* Stage 1 text */}
          <div 
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '4%',
              textTransform: 'uppercase',
              color: '#111827',
              marginBottom: '12px',
            }}
          >
            STAGE 1
          </div>
          
          {/* Fill Out Our Form heading */}
          <h3 
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '130%',
              letterSpacing: '-3%',
              background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              marginBottom: '12px',
            }}
          >
            Fill Out Our Form
          </h3>
          
          {/* Description text */}
          <p 
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 500,
              fontSize: '17.92px',
              lineHeight: '140%',
              letterSpacing: '-2%',
              color: '#111827',
              margin: 0,
            }}
          >
            Submit your app idea and project details through our simple intake form.
          </p>
        </div>

        {/* Call image on the right side */}
        <img 
          src="/investor/works/call.svg" 
          alt="Call"
          className="absolute"
          style={{
            right: '150px',
            top: '339px', // 70px above the Stage 2 text
            width: '317px',
            height: '345px',
          }}
        />

        {/* Text content block on the left side below the image */}
        <div 
          className="absolute"
          style={{
            left: '150px',
            top: '400px', // 30px below the image (80px + 389px + 30px)
            maxWidth: '400px',
          }}
        >
          {/* Stage 2 text */}
          <div 
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '4%',
              textTransform: 'uppercase',
              color: '#111827',
              marginBottom: '12px',
            }}
          >
            STAGE 2
          </div>
          
          {/* Book a Discovery Call heading */}
          <h3 
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '130%',
              letterSpacing: '-3%',
              background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              marginBottom: '12px',
            }}
          >
            Book a Discovery Call
          </h3>
          
          {/* Description text */}
          <p 
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 500,
              fontSize: '17.92px',
              lineHeight: '140%',
              letterSpacing: '-2%',
              color: '#111827',
              margin: 0,
            }}
          >
            We'll schedule a 30-minute call to align on your vision and goals.
          </p>
        </div>

        {/* Build image on the left side below Stage 2 text */}
        <img 
          src="/investor/works/build.svg" 
          alt="Build"
          className="absolute"
          style={{
            left: '80px',
            top: '570px', // 70px below the Stage 2 description
            width: '502px',
            height: '333px',
          }}
        />

        {/* Text content block on the right side below the call image */}
        <div 
          className="absolute"
          style={{
            right: '100px',
            top: '650px', // 70px below the call image (429px + 345px + 70px)
            maxWidth: '400px',
          }}
        >
          {/* Stage 3 text */}
          <div 
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '4%',
              textTransform: 'uppercase',
              color: '#111827',
              marginBottom: '12px',
            }}
          >
            STAGE 3
          </div>
          
          {/* We Build Your Package heading */}
          <h3 
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '130%',
              letterSpacing: '-3%',
              background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              marginBottom: '12px',
            }}
          >
            We Build Your Package
          </h3>
          
          {/* Description text */}
          <p 
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 500,
              fontSize: '17.92px',
              lineHeight: '140%',
              letterSpacing: '-2%',
              color: '#111827',
              margin: 0,
            }}
          >
            Our team gets to work, delivering your complete package in 7 days.
          </p>
        </div>

        {/* Pitch image on the right side */}
        <img 
          src="/investor/works/pitch.svg" 
          alt="Pitch"
          className="absolute"
          style={{
            right: '40px',
            top: '820px', // 70px above the Stage 4 text
            width: '569px',
            height: '313px',
          }}
        />

        {/* Text content block on the left side below the build image */}
        <div 
          className="absolute"
          style={{
            left: '150px',
            top: '910px', // 70px below the build image (680px + 333px + 70px)
            maxWidth: '400px',
          }}
        >
          {/* Stage 4 text */}
          <div 
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '4%',
              textTransform: 'uppercase',
              color: '#111827',
              marginBottom: '12px',
            }}
          >
            STAGE 4
          </div>
          
          {/* Pitch with Confidence heading */}
          <h3 
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '130%',
              letterSpacing: '-3%',
              background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              marginBottom: '12px',
            }}
          >
            Pitch with Confidence
          </h3>
          
          {/* Description text */}
          <p 
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 500,
              fontSize: '17.92px',
              lineHeight: '140%',
              letterSpacing: '-2%',
              color: '#111827',
              margin: 0,
            }}
          >
            You're now equipped with everything you need to pitch investors.
          </p>
        </div>
        
        <svg 
          width="1503" 
          height="1529" 
          viewBox="0 0 1609 1636" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <g filter="url(#filter0_d_229_292)">
            <path d="M1528.2 28C1543.72 28.0001 1556.3 40.5834 1556.3 56.1055V1529.89C1556.3 1545.42 1543.72 1558 1528.2 1558H81.1055C65.5832 1558 53 1545.42 53 1529.89V56.1055C53.0002 40.5834 65.5833 28.0001 81.1055 28H1528.2ZM91.4834 123.199C75.9612 123.199 63.3779 135.782 63.3779 151.305V1508.53C63.3779 1524.06 75.9612 1536.64 91.4834 1536.64H1517.82C1533.34 1536.64 1545.92 1524.06 1545.92 1508.53V151.305C1545.92 135.782 1533.34 123.199 1517.82 123.199H91.4834Z" fill="white" fillOpacity="0.85" shapeRendering="crispEdges"/>
          </g>
          <circle cx="1413.43" cy="75.4257" r="12.4257" fill="url(#paint0_linear_229_292)"/>
          <circle cx="1456.92" cy="75.4257" r="12.4257" fill="url(#paint1_linear_229_292)"/>
          <circle cx="1500.41" cy="75.4257" r="12.4257" fill="url(#paint2_linear_229_292)"/>
          
          {/* Line SVG centered inside the border */}
          <g transform="translate(792, 231.5)">
            <rect x="12" width="2" height="1173" fill="url(#paint0_linear_line)"/>
            <ellipse cx="12.5" cy="12.7308" rx="12.5" ry="12.7308" fill="url(#paint1_linear_line)"/>
            <ellipse cx="12.5" cy="378.192" rx="12.5" ry="12.7308" fill="url(#paint2_linear_line)"/>
            <ellipse cx="12.5" cy="723.654" rx="12.5" ry="12.7308" fill="url(#paint3_linear_line)"/>
            <ellipse cx="12.5" cy="1089.12" rx="12.5" ry="12.7308" fill="url(#paint4_linear_line)"/>
          </g>
          <defs>
            <filter id="filter0_d_229_292" x="0.900002" y="0.900002" width="1607.5" height="1634.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="25"/>
              <feGaussianBlur stdDeviation="26.05"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_229_292"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_229_292" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_229_292" x1="1400.19" y1="62.9073" x2="1426.29" y2="66.5486" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B1E54"/>
              <stop offset="1" stopColor="#4FABFF"/>
            </linearGradient>
            <linearGradient id="paint1_linear_229_292" x1="1443.68" y1="62.9073" x2="1469.78" y2="66.5486" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B1E54"/>
              <stop offset="1" stopColor="#4FABFF"/>
            </linearGradient>
            <linearGradient id="paint2_linear_229_292" x1="1487.17" y1="62.9073" x2="1513.27" y2="66.5486" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B1E54"/>
              <stop offset="1" stopColor="#4FABFF"/>
            </linearGradient>
            
            {/* Line gradients */}
            <linearGradient id="paint0_linear_line" x1="11.9351" y1="-4.37679" x2="14.0764" y2="-4.37628" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B1E54"/>
              <stop offset="1" stopColor="#4FABFF"/>
            </linearGradient>
            <linearGradient id="paint1_linear_line" x1="-0.811069" y1="-0.0950042" x2="25.4616" y2="3.5042" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B1E54"/>
              <stop offset="1" stopColor="#4FABFF"/>
            </linearGradient>
            <linearGradient id="paint2_linear_line" x1="-0.811069" y1="365.366" x2="25.4616" y2="368.966" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B1E54"/>
              <stop offset="1" stopColor="#4FABFF"/>
            </linearGradient>
            <linearGradient id="paint3_linear_line" x1="-0.811069" y1="710.828" x2="25.4616" y2="714.427" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B1E54"/>
              <stop offset="1" stopColor="#4FABFF"/>
            </linearGradient>
            <linearGradient id="paint4_linear_line" x1="-0.811069" y1="1076.29" x2="25.4616" y2="1079.89" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B1E54"/>
              <stop offset="1" stopColor="#4FABFF"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mobile layout */}
      <div className="relative w-full md:hidden px-4">
        <div className="relative w-full max-w-[383px] mx-auto">
          {/* Border image */}
          <img
            src="/investor/border.svg"
            alt="Process container border"
            className="w-full h-auto select-none pointer-events-none"
            aria-hidden="true"
          />
          {/* Content inside border */}
          <div className="absolute inset-x-0 top-[85px] pb-5 px-5">
            {/* Stage 1 */}
            <div className="mb-2 text-center">
              <div
                className="mb-2 uppercase tracking-[0.04em] text-[#111827]"
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '120%',
                }}
              >
                STAGE 1
              </div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '130%',
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                }}
              >
                Fill Out Our Form
              </h3>
              <p
                className="text-[#111827]"
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Submit your app idea and project details through our simple intake form.
              </p>
              <div className="mt-3 flex justify-center">
                <img
                  src="/investor/stage/stage1.svg"
                  alt="Stage 1 visual"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Stage 2 */}
            <div className="mb-3 text-center">
              <div
                className="mb-2 uppercase tracking-[0.04em] text-[#111827]"
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '120%',
                }}
              >
                STAGE 2
              </div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '130%',
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                }}
              >
                Book a Discovery Call
              </h3>
              <p
                className="text-[#111827]"
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                We'll schedule a 30-minute call to align on your vision and goals.
              </p>
              <div className="mt-3 flex justify-center">
                <img
                  src="/investor/stage/stage2.svg"
                  alt="Stage 2 visual"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Stage 3 */}
            <div className="mb-3 text-center">
              <div
                className="mb-2 uppercase tracking-[0.04em] text-[#111827]"
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '120%',
                }}
              >
                STAGE 3
              </div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '130%',
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                }}
              >
                We Build Your Package
              </h3>
              <p
                className="text-[#111827]"
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Our team gets to work, delivering your complete package in 7 days.
              </p>
              <div className="mt-3 flex justify-center">
                <img
                  src="/investor/stage/stage3.svg"
                  alt="Stage 3 visual"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Stage 4 */}
            <div className="mb-1 text-center">
              <div
                className="mb-2 uppercase tracking-[0.04em] text-[#111827]"
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '120%',
                }}
              >
                STAGE 4
              </div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '130%',
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                }}
              >
                Pitch with Confidence
              </h3>
              <p
                className="text-[#111827]"
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                You're now equipped with everything you need to pitch investors.
              </p>
              <div className="mt-3 flex justify-center">
                <img
                  src="/investor/stage/stage4.svg"
                  alt="Stage 4 visual"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};