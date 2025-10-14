import Header from "@/components/landing/layout/header";
import TopPromoBar from "@/components/landing/top-promo-bar";
import { MotionWrapper } from "@/components/landing/motion-wrapper";
import CasesSection from "@/components/landing/sections/cases-section";
import HeroSection from "@/components/landing/sections/hero-section";
import ServicesSection from "@/components/landing/sections/services-section";
import CompetitorsSection from "@/components/landing/sections/competitors-section";
import BrandsSlider from "@/components/landing/sections/trusted-by-section";
import HowWeWorksSection from "@/components/landing/sections/how-we-works-section";
import WeDeliverSection from "@/components/landing/sections/we-deliver-section";
import ReadyToBuildSection from "@/components/landing/sections/ready-to-build-section";
import JunziTextSection from "@/components/landing/sections/junzi-text-section";
import Footer from "@/components/landing/layout/footer";
import DevelopmentSprints from "@/components/landing/sections/cal/development-cal";
// import PricingBlock from "@/components/landing/sections/pricing-block";
import TrustedByMobileSection from "@/components/landing/sections/trusted-by-mobile-section";
import { Suspense, Component, ReactNode, useState, useEffect } from "react";

const SectionFallback = ({ sectionName }: { sectionName: string }) => (
  <div className="py-8 text-center">
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
      <div className="h-2 bg-gray-200 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
);

// Собственный ErrorBoundary компонент
class ErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Section error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

// Компонент-обертка для безопасной загрузки секций
const SafeSection = ({
  children,
  fallback = null,
  sectionName,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  sectionName: string;
}) => {
  return (
    <ErrorBoundary fallback={<SectionFallback sectionName={sectionName} />}>
      <Suspense
        fallback={fallback || <SectionFallback sectionName={sectionName} />}
      >
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div
        className="flex flex-col min-h-screen backdrop-blur-[100px] bg-gray-50 overflow-x-hidden pt-16 md:pt-20"
        style={{
          backgroundImage: `
             radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)
           `,
          backgroundSize: "3px 3px",
        }}
      >
        <main className="flex-1 relative">
          <SafeSection sectionName="Hero">
            <HeroSection />
          </SafeSection>

          <SafeSection sectionName="Brands">
            <BrandsSlider />
          </SafeSection>
          <div
            className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[400px] h-[300px] pointer-events-none md:hidden"
            style={{
              background: `
                    radial-gradient(ellipse 300px 200px at 50% 50%, rgba(150, 202, 230, 0.4) 0%, rgba(150, 202, 230, 0.2) 15%, rgba(150, 202, 230, 0.1) 30%, transparent 60%),
                    radial-gradient(ellipse 250px 150px at 50% 50%, rgba(150, 202, 230, 0.3) 0%, rgba(150, 202, 230, 0.15) 20%, transparent 50%)
                  `,
              filter: "blur(2px)",
              zIndex: -1,
            }}
          />
          {/* Background spray effect for HowWeWorksSection */}
          <div className="relative">
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ zIndex: 0 }}
            >
              {/* Center spray effect for HowWeWorksSection - Desktop */}

              {/* Center spray effect for HowWeWorksSection - Mobile */}
            </div>
            <div
              className="absolute top-0 left-[40%] transform -translate-x-1/2 w-[1260px] h-[810px] pointer-events-none hidden md:block"
              style={{
                background: `
                    radial-gradient(ellipse 900px 630px at 50% 50%, rgba(150, 202, 230, 0.4) 0%, rgba(150, 202, 230, 0.4) 15%, rgba(150, 202, 230, 0.25) 30%, rgba(150, 202, 230, 0.15) 45%, transparent 60%),
                    radial-gradient(ellipse 810px 540px at 50% 50%, rgba(150, 202, 230, 0.3) 0%, rgba(150, 202, 230, 0.3) 20%, rgba(150, 202, 230, 0.2) 35%, rgba(150, 202, 230, 0.1) 50%, transparent 65%),
                    radial-gradient(ellipse 720px 450px at 50% 50%, rgba(150, 202, 230, 0.25) 0%, rgba(150, 202, 230, 0.28) 25%, rgba(150, 202, 230, 0.18) 40%, rgba(150, 202, 230, 0.08) 55%, transparent 70%),
                    radial-gradient(ellipse 630px 360px at 50% 50%, rgba(150, 202, 230, 0.2) 0%, rgba(150, 202, 230, 0.25) 30%, rgba(150, 202, 230, 0.15) 45%, rgba(150, 202, 230, 0.06) 60%, transparent 75%)
                  `,
                filter: "blur(3px)",
                zIndex: -1,
              }}
            />
            <SafeSection sectionName="HowWeWorks">
              <MotionWrapper>
                <HowWeWorksSection />
              </MotionWrapper>
            </SafeSection>
          </div>

          {/* Background spray effect covering Cases and Services sections */}
          <div className="relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: -1 }}
            >
              {/* Main spray center covering both sections - desktop */}
              <div
                className="absolute hidden md:block"
                style={{
                  left: "45%",
                  top: "50%",
                  width: "1200px",
                  height: "800px",
                  background:
                    "radial-gradient(ellipse 600px 600px at center, rgba(150, 202, 230, 0.4) 0%, rgba(79, 171, 255, 0.2) 30%, rgba(128, 229, 255, 0.1) 60%, transparent 80%)",
                  filter: "blur(8px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                }}
              />

              {/* Main spray center covering both sections - mobile */}
              <div
                className="absolute md:hidden"
                style={{
                  left: "40%",
                  top: "55%",
                  width: "400px",
                  height: "800px",
                  background:
                    "radial-gradient(ellipse 200px 600px at center, rgba(150, 202, 230, 0.3) 0%, rgba(79, 171, 255, 0.15) 30%, rgba(128, 229, 255, 0.08) 60%, transparent 80%)",
                  filter: "blur(6px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                }}
              />

              {/* Additional spray elements for depth - desktop */}

              {/* Additional spray elements for depth - mobile */}
              <div
                className="absolute md:hidden"
                style={{
                  left: "40%",
                  top: "55%",
                  width: "300px",
                  height: "400px",
                  background:
                    "radial-gradient(ellipse 150px 300px at center, rgba(150, 202, 230, 0.12) 0%, rgba(79, 171, 255, 0.08) 40%, transparent 70%)",
                  filter: "blur(12px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                }}
              />
            </div>

            <SafeSection sectionName="Cases">
              <MotionWrapper>
                <CasesSection />
              </MotionWrapper>
            </SafeSection>

            <SafeSection sectionName="Services">
              <div className="relative">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ zIndex: -1 }}
                >
                  {/* Bottom Services effect - desktop */}
                  <div
                    className="absolute hidden md:block"
                    style={{
                      left: "30%",
                      bottom: "10%",
                      width: "1200px",
                      height: "400px",
                      background:
                        "radial-gradient(ellipse 600px 250px at center, rgba(150, 202, 230, 0.8) 0%, rgba(79, 171, 255, 0.5) 30%, rgba(128, 229, 255, 0.3) 60%, transparent 85%)",
                      filter: "blur(4px)",
                      transform: "translate(-50%, 0%)",
                      zIndex: -1,
                    }}
                  />

                  {/* Bottom Services effect - mobile */}
                  <div
                    className="absolute md:hidden"
                    style={{
                      left: "50%",
                      bottom: "15%",
                      width: "400px",
                      height: "250px",
                      background:
                        "radial-gradient(ellipse 200px 180px at center, rgba(150, 202, 230, 0.7) 0%, rgba(79, 171, 255, 0.4) 30%, rgba(128, 229, 255, 0.2) 60%, transparent 85%)",
                      filter: "blur(3px)",
                      transform: "translate(-50%, 0%)",
                      zIndex: -1,
                    }}
                  />
                </div>
                <MotionWrapper>
                  <ServicesSection />
                </MotionWrapper>
              </div>
            </SafeSection>
          </div>

          {/* Background spray effect covering Competitors section */}
          <div className="relative">
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ zIndex: 0 }}
            >
              {/* Main spray center covering both sections - desktop */}
              {/* <div 
                className="absolute hidden md:block"
                style={{
                  left: 'calc(50% - 200px)',
                  top: '60%',
                  width: '1500px',
                  height: '600px',
                  background: 'radial-gradient(circle,rgba(150, 202, 230, 0.4) 0%, rgba(79, 171, 255, 0.15) 30%, rgba(128, 229, 255, 0.08) 60%, transparent 80%)',
                  filter: 'blur(10px)',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0
                }}
              /> */}

              {/* Main spray center covering both sections - mobile */}
              {/* <div 
                className="absolute md:hidden"
                style={{
                  left: '45%',
                  top: '50%',
                  width: '400px',
                  height: '600px',
                  background: 'radial-gradient(circle,rgba(150, 202, 230, 0.3) 0%, rgba(79, 171, 255, 0.1) 30%, rgba(128, 229, 255, 0.05) 60%, transparent 80%)',
                  filter: 'blur(8px)',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0
                }}
              /> */}

              {/* Additional spray elements for depth - desktop */}
              {/* <div 
                className="absolute hidden md:block"
                style={{
                  left: 'calc(50% - 150px)',
                  top: '45%',
                  width: '800px',
                  height: '800px',
                  background: 'radial-gradient(circle, rgba(150, 202, 230, 0.12) 0%, rgba(79, 171, 255, 0.08) 40%, transparent 70%)',
                  filter: 'blur(30px)',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0
                }}
              /> */}

              {/* Additional spray elements for depth - mobile */}
              {/* <div 
                className="absolute md:hidden"
                style={{
                  left: '45%',
                  top: '45%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(150, 202, 230, 0.08) 0%, rgba(79, 171, 255, 0.05) 40%, transparent 70%)',
                  filter: 'blur(20px)',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0
                }}
              /> */}

              {/* Smaller spray elements scattered around - desktop only */}
              {/* <div 
                className="absolute hidden md:block"
                style={{
                  left: 'calc(50% - 300px)',
                  top: '60%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(128, 229, 255, 0.1) 0%, transparent 60%)',
                  filter: 'blur(25px)',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0
                }}
              />
              
              <div 
                className="absolute hidden md:block"
                style={{
                  left: 'calc(50% + 150px)',
                  top: '50%',
                  width: '250px',
                  height: '250px',
                  background: 'radial-gradient(circle, rgba(79, 171, 255, 0.08) 0%, transparent 50%)',
                  filter: 'blur(20px)',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0
                }}
              /> */}

              {/* Subtle background particles - desktop only */}
              {/* <div 
                className="absolute inset-0 hidden md:block"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 80%, rgba(150, 202, 230, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(128, 229, 255, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(150, 202, 230, 0.02) 0%, transparent 50%)
                  `,
                  zIndex: 0
                }}
              /> */}
            </div>
            <SafeSection sectionName="Competitors">
              <MotionWrapper>
                <CompetitorsSection />
              </MotionWrapper>
            </SafeSection>
          </div>

          {/* Background spray effect for DevelopmentSprints */}
          <div className="relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 0 }}
            >
              {/* Main spray center for DevelopmentSprints - desktop */}
              <div
                className="absolute hidden md:block"
                style={{
                  left: "45%",
                  top: "55%",
                  width: "1000px",
                  height: "900px",
                  background:
                    "radial-gradient(ellipse 550px 650px at center, rgba(150, 202, 230, 1) 0%, rgba(79, 171, 255, 0.5) 30%, rgba(128, 229, 255, 0.3) 60%, transparent 80%)",
                  filter: "blur(5px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />

              {/* Main spray center for DevelopmentSprints - mobile */}
              <div
                className="absolute md:hidden"
                style={{
                  left: "45%",
                  top: "50%",
                  width: "350px",
                  height: "500px",
                  background:
                    "radial-gradient(ellipse 175px 400px at center, rgba(150, 202, 230, 0.9) 0%, rgba(79, 171, 255, 0.4) 30%, rgba(128, 229, 255, 0.2) 60%, transparent 80%)",
                  filter: "blur(4px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />

              {/* Additional spray elements for depth - desktop */}
              <div
                className="absolute hidden md:block"
                style={{
                  left: "45%",
                  top: "70%",
                  width: "700px",
                  height: "500px",
                  background:
                    "radial-gradient(ellipse 350px 400px at center, rgba(150, 202, 230, 0.3) 0%, rgba(79, 171, 255, 0.2) 40%, transparent 70%)",
                  filter: "blur(18px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />

              {/* Additional spray elements for depth - mobile */}
              <div
                className="absolute md:hidden"
                style={{
                  left: "45%",
                  top: "60%",
                  width: "220px",
                  height: "300px",
                  background:
                    "radial-gradient(ellipse 110px 200px at center, rgba(150, 202, 230, 0.25) 0%, rgba(79, 171, 255, 0.15) 40%, transparent 70%)",
                  filter: "blur(10px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />
            </div>
            <SafeSection sectionName="DevelopmentSprints">
              <MotionWrapper>
                <DevelopmentSprints />
              </MotionWrapper>
            </SafeSection>
          </div>

          {/* Background spray effect for PricingBlock */}
          {/* <div className="relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                  <div 
                    className="absolute hidden md:block"
                    style={{
                      left: '45%',
                      top: '50%',
                      width: '900px',
                      height: '600px',
                      background: 'radial-gradient(ellipse 500px 500px at center, rgba(150, 202, 230, 0.9) 0%, rgba(79, 171, 255, 0.4) 30%, rgba(128, 229, 255, 0.2) 60%, transparent 80%)',
                      filter: 'blur(6px)',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 0
                    }}
                  />
                  
                  <div 
                    className="absolute md:hidden"
                    style={{
                      left: '45%',
                      top: '50%',
                      width: '300px',
                      height: '350px',
                      background: 'radial-gradient(ellipse 150px 250px at center, rgba(150, 202, 230, 0.8) 0%, rgba(79, 171, 255, 0.3) 30%, rgba(128, 229, 255, 0.15) 60%, transparent 80%)',
                      filter: 'blur(5px)',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 0
                    }}
                  />
                  
                  <div 
                    className="absolute hidden md:block"
                    style={{
                      left: '45%',
                      top: '65%',
                      width: '600px',
                      height: '400px',
                      background: 'radial-gradient(ellipse 300px 300px at center, rgba(150, 202, 230, 0.25) 0%, rgba(79, 171, 255, 0.15) 40%, transparent 70%)',
                      filter: 'blur(20px)',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 0
                    }}
                  />
                  
                  <div 
                    className="absolute md:hidden"
                    style={{
                      left: '45%',
                      top: '50%',
                      width: '180px',
                      height: '200px',
                      background: 'radial-gradient(ellipse 90px 150px at center, rgba(150, 202, 230, 0.2) 0%, rgba(79, 171, 255, 0.12) 40%, transparent 70%)',
                      filter: 'blur(12px)',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 0
                    }}
                  />
                </div>
                <SafeSection sectionName="Pricing">
                  <MotionWrapper>
                    <div className="relative z-10">
                      <PricingBlock />
                    </div>
                  </MotionWrapper>
                </SafeSection>
              </div> */}

          {/* TrustedByMobileSection - только для мобильных устройств */}
          <SafeSection sectionName="TrustedByMobile">
            <TrustedByMobileSection />
          </SafeSection>

          {/* WeDeliverSection with separate background effect */}
          <div className="relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 0 }}
            >
              {/* Background effect for WeDeliverSection */}
              <div
                className="absolute hidden md:block"
                style={{
                  left: "calc(50% - 200px)",
                  top: "35%",
                  width: "1500px",
                  height: "2000px",
                  background:
                    "radial-gradient(circle,rgba(150, 202, 230, 0.3) 0%, rgba(79, 171, 255, 0.05) 30%, rgba(128, 229, 255, 0.03) 60%, transparent 80%)",
                  filter: "blur(10px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />

              <div
                className="absolute md:hidden"
                style={{
                  left: "45%",
                  top: "35%",
                  width: "400px",
                  height: "800px",
                  background:
                    "radial-gradient(circle,rgba(150, 202, 230, 0.2) 0%, rgba(79, 171, 255, 0.03) 30%, rgba(128, 229, 255, 0.02) 60%, transparent 80%)",
                  filter: "blur(8px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />
            </div>
            <SafeSection sectionName="WeDeliver">
              <MotionWrapper>
                <WeDeliverSection />
              </MotionWrapper>
            </SafeSection>
          </div>
          {/* Background spray effect covering ReadyToBuildSection and JunziTextSection */}
          <div className="relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 0 }}
            >
              {/* Main spray center - desktop */}
              <div
                className="absolute hidden md:block"
                style={{
                  left: "calc(50% - 200px)",
                  top: "30%",
                  width: "1000px",
                  height: "400px",
                  background:
                    "radial-gradient(ellipse 600px 300px at center, rgba(150, 202, 230, 0.6) 0%, rgba(79, 171, 255, 0.15) 30%, rgba(128, 229, 255, 0.08) 60%, transparent 80%)",
                  filter: "blur(10px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />

              {/* Main spray center - mobile */}
              <div
                className="absolute md:hidden"
                style={{
                  left: "45%",
                  top: "50%",
                  width: "100px",
                  height: "100px",
                  background:
                    "radial-gradient(ellipse 150px 80px at center, rgba(150, 202, 230, 0.5) 0%, rgba(79, 171, 255, 0.12) 30%, rgba(128, 229, 255, 0.06) 60%, transparent 80%)",
                  filter: "blur(8px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />

              {/* Additional spray elements for depth - desktop */}
              <div
                className="absolute hidden md:block"
                style={{
                  left: "calc(50% - 150px)",
                  top: "45%",
                  width: "300px",
                  height: "100px",
                  background:
                    "radial-gradient(ellipse 250px 120px at center, rgba(150, 202, 230, 0.25) 0%, rgba(79, 171, 255, 0.15) 40%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />

              {/* Additional spray elements for depth - mobile */}
              <div
                className="absolute md:hidden"
                style={{
                  left: "45%",
                  top: "45%",
                  width: "250px",
                  height: "150px",
                  background:
                    "radial-gradient(ellipse 200px 100px at center, rgba(150, 202, 230, 0.2) 0%, rgba(79, 171, 255, 0.12) 40%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />

              {/* Smaller spray elements scattered around - desktop only */}
              <div
                className="absolute hidden md:block"
                style={{
                  left: "calc(50% - 300px)",
                  top: "50%",
                  width: "300px",
                  height: "100px",
                  background:
                    "radial-gradient(ellipse 250px 80px at center, rgba(128, 229, 255, 0.25) 0%, transparent 60%)",
                  filter: "blur(25px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />

              <div
                className="absolute hidden md:block"
                style={{
                  left: "calc(50% + 100px)",
                  top: "50%",
                  width: "250px",
                  height: "150px",
                  background:
                    "radial-gradient(ellipse 200px 120px at center, rgba(79, 171, 255, 0.2) 0%, transparent 50%)",
                  filter: "blur(20px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />

              {/* Subtle background particles - desktop only */}
            </div>

            {/* Noise texture overlay */}

            <SafeSection sectionName="ReadyToBuild">
              <MotionWrapper>
                <ReadyToBuildSection />
              </MotionWrapper>
            </SafeSection>
          </div>

          {/* JunziText and Footer with right wall effect */}
          <div className="relative w-full">
            {/* Эффект правой стенки для JunziText и footer - desktop only */}
            {/* Оригинальный эффект для ПК */}
            <div
              className="absolute top-0 right-0 w-[200px] h-full pointer-events-none hidden md:block"
              style={{
                background: `
                  radial-gradient(ellipse 120px 600px at 90% 70%, rgba(150, 202, 230, 0.6) 0%, transparent 70%),
                  radial-gradient(ellipse 80px 450px at 95% 50%, rgba(150, 202, 230, 0.5) 0%, transparent 80%)
                `,
                filter: "blur(1px)",
                zIndex: 0,
              }}
            />
            {/* Эффект для мобилки */}
            <div
              className="absolute top-0 right-0 w-[120px] h-full pointer-events-none block md:hidden"
              style={{
                background: `
                  radial-gradient(ellipse 60px 300px at 90% 70%, rgba(150, 202, 230, 0.5) 0%, transparent 70%),
                  radial-gradient(ellipse 40px 220px at 95% 50%, rgba(150, 202, 230, 0.4) 0%, transparent 80%)
                `,
                filter: "blur(1px)",
                zIndex: 0,
              }}
            />
            <SafeSection sectionName="JunziText">
              <JunziTextSection />
            </SafeSection>
            <SafeSection sectionName="Footer">
              <Footer />
            </SafeSection>
          </div>
        </main>
      </div>

      {/* Performance Monitor для отладки */}
      {/* <PerformanceMonitor /> */}

      {/* <SplashCursor /> */}
    </>
  );
}
