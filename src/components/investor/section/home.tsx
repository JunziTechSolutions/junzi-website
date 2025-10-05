import InvestorHeader from "@/components/investor/layout/InvestorHeader";
import JunziTextSection from "@/components/landing/sections/junzi-text-section";
import Footer from "@/components/landing/layout/footer";
import { Suspense, Component, ReactNode } from "react";
import HeroSection from "./hero-section";
import { RaiseSection } from "./RaiseSection";
import { ProvidingSection } from "./ProvidingSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { ResultsSection } from "./ResultsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { GetFundedSection } from "./GetFundedSection";
import { FAQSection } from "./FAQSection";
const SectionFallback = ({ sectionName }: { sectionName: string }) => (
  <div className="py-8 text-center">
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
      <div className="h-2 bg-gray-200 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
);

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
  const calendarUrl = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2oVv-sePyLOBENnkFnDy0WsL2YYCgffflb7BtXwcXD_y5Y3U1STtH6V4Zn1db9biq3X3TarrEI';
  return (
    <>
      <InvestorHeader ctaHrefOverride={calendarUrl} />
      <div 
         className="flex flex-col min-h-screen backdrop-blur-[100px] bg-gray-50 overflow-x-hidden" 
         style={{
           backgroundImage: `
             radial-gradient(circle at 1px 1px, rgba(0,0,0,0.01) 1px, transparent 0)
           `,
           backgroundSize: '3px 3px'
         }}
       >
      <main className="flex-1 relative">
        <div className="relative">
          <SafeSection sectionName="Hero">
            <HeroSection />
          </SafeSection>
          
          {/* Smog Section */}
          {/* <section className="absolute bottom-[-100px] left-0 w-full transform translate-y-1/2 z-10 ">
            <div className="h-[115px] w-full">
              <img 
                src="/investor/smog.svg" 
                alt="Background pattern"
                className="w-full h-full object-cover"
              />
            </div>
          </section> */}
        </div>
        
        {/* Spacer for smog section */}
        {/* <div className="h-[415px]"></div> */}
        
        <SafeSection sectionName="Raise">
          <div id="raise">
            <RaiseSection />
          </div>
        </SafeSection>
        
        <SafeSection sectionName="Providing">
          <div id="providing">
            <ProvidingSection />
          </div>
        </SafeSection>
        
        <SafeSection sectionName="HowItWorks">
          <div id="how-it-works">
            <HowItWorksSection />
          </div>
        </SafeSection>
        
        <SafeSection sectionName="Results">
          <div id="results">
            <ResultsSection />
          </div>
        </SafeSection>
        
        <SafeSection sectionName="Testimonials">
          <div id="testimonials">
            <TestimonialsSection />
          </div>
        </SafeSection>
        
        {/* Ready to Get Funded Section */}
        <SafeSection sectionName="GetFunded">
          <div id="get-funded">
            <GetFundedSection />
          </div>
        </SafeSection>
        
        <SafeSection sectionName="FAQ">
          <div id="about">
            <FAQSection />
          </div>
        </SafeSection>
        
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
                filter: 'blur(1px)',
                zIndex: 0
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
                filter: 'blur(1px)',
                zIndex: 0
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
    </>
  );
}
