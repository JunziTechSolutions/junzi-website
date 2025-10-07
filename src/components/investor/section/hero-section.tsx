import { BackgroundVideo } from "@/components/ui/background-video"
import TrustedBrandsSection from "./trusted-brands-section"

export default function HeroSection() {
  const calendarUrl = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2oVv-sePyLOBENnkFnDy0WsL2YYCgffflb7BtXwcXD_y5Y3U1STtH6V4Zn1db9biq3X3TarrEI';
  const companyLogos = [
    { name: 'AstroAI', src: '/company/AstroAI.png' },
    { name: 'Boston E-Bikes', src: '/company/boston e bikes.svg' },
    { name: 'Overwatch', src: '/company/overwatch.svg' },
    { name: 'Publefy', src: '/company/publefy.png' },
    { name: 'Shout', src: '/company/shout.png' },
    { name: 'Iengie', src: '/company/iengie.png' }
  ];

  return (
    <section 
      className="relative overflow-hidden backdrop-blur-[100px] bg-gray-50" 
      style={{ 
        paddingTop: '160px', 
        paddingBottom: '113px',
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)
        `,
        backgroundSize: '3px 3px'
      }}
    >
      {/* Background Video */}
            {/* Background Pattern - removed to use page background */}
      <BackgroundVideo src="/videos/animation1.mp4" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:block flex flex-col items-center text-center lg:text-left">
            {/* Main Title */}
            <h1 
              className="bg-gradient-to-r from-[#0B1E54] to-[#4FABFF] bg-clip-text text-transparent mb-[30px] lg:mb-[45px] text-[48px] lg:text-[60.5px]"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 500,
                lineHeight: '120%',
                letterSpacing: '-3%'
              }}
            >
              Investor-Ready in{' '}
              <span className="bg-gradient-to-r from-[#0B1E54] to-[#4FABFF] bg-clip-text text-transparent">
                7 Days
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-[#111827] mb-[30px] lg:mb-[45px] text-[20px] lg:text-[18px]"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 400,
                lineHeight: '130%',
                letterSpacing: '-2%'
              }}
            >
              Get a clickable prototype, pitch deck, and roadmap — everything you need to raise funding.
            </p>

            {/* CTA Button */}
            <div className="mb-[40px] lg:mb-[50px]">
              <button 
                className="text-white transition-all duration-300 hover:scale-105 hover:cursor-pointer w-[216px] lg:w-[218px] h-[55px] lg:h-[54px] rounded-[92.75px] lg:rounded-[108px] text-[16px] lg:text-[19.2px] px-[22.26px] lg:px-[45px] py-[12.98px] lg:py-[11px]"
                style={{
                  background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  lineHeight: '130%',
                  letterSpacing: '-2%',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}
                aria-label="Open calendar to book a call"
                onClick={() => { window.location.href = calendarUrl; }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.location.href = calendarUrl;
                  }
                }}
              >
                Start for $489
              </button>
            </div>

            {/* Partnership Text - Desktop only */}
            <p 
              className="text-[#465478] uppercase hidden lg:block"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '16.8px',
                lineHeight: '110%',
                letterSpacing: '8%',
                textTransform: 'uppercase',
                marginBottom: '36px'
              }}
            >
              GROWING PARTNERSHIP AROUND THE WORLD
            </p>

            {/* Company Logos - Desktop only */}
            <div className="hidden lg:flex items-center gap-[22px] flex-wrap">
              {companyLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Image - Desktop version */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div 
              className="relative"
              style={{
                width: '691px',
                height: '569px'
              }}
            >
              <img 
                src="/investor/hero/right.svg" 
                alt="Investment Dashboard"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile Image - Below content on mobile */}
        <div className="lg:hidden flex justify-center mt-0">
          <div 
            className="relative w-[412px] h-[339px] max-w-full"
          >
            <img 
              src="/investor/hero/right.svg" 
              alt="Investment Dashboard"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>
      
      {/* Trusted Brands Section */}
      <TrustedBrandsSection />
    </section>
  )
}
