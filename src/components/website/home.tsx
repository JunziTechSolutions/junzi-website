import Header from "@/components/website/layout/header";
import { MotionWrapper } from "@/components/website/motion-wrapper";
import CasesSection from "@/components/website/sections/cases-section";
import HeroSection from "@/components/website/sections/hero-section";
import ProcessSection from "@/components/website/sections/process-section";
import ServicesSection from "@/components/website/sections/services-section";
import BrandsSlider from "@/components/website/sections/trusted-by-section";
// import PricingSection from "@/components/website/sections/pricing-block";
import WeDeliverSection from "@/components/website/sections/we-deliver-section";
import CtaSection from "@/components/website/sections/cta-section";
import Footer from "@/components/website/layout/footer";
import DevelopmentSprints from "@/components/website/sections/cal/development-cal";
// import PerformanceMonitor from "@/components/analytics/PerformanceMonitor";
import { Suspense, Component, ReactNode } from "react";

// Fallback компонент для случаев когда секция не загружается
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
    console.error('Section error:', error, errorInfo);
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
  sectionName 
}: { 
  children: React.ReactNode; 
  fallback?: React.ReactNode;
  sectionName: string;
}) => {
  return (
    <ErrorBoundary fallback={<SectionFallback sectionName={sectionName} />}>
      <Suspense fallback={fallback || <SectionFallback sectionName={sectionName} />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default function WebsiteHome() {
    return (
      <>
        <div className="flex flex-col min-h-screen" style={{ background: '#f4f3fa' }}>
          <Header />
          <main className="flex-1">
            <SafeSection sectionName="Hero">
              <HeroSection />
            </SafeSection>
            
            <SafeSection sectionName="Brands">
              <BrandsSlider />
            </SafeSection>

            <SafeSection sectionName="Cases">
              <MotionWrapper>
                <CasesSection />
              </MotionWrapper>
            </SafeSection>
            
            <SafeSection sectionName="Services">
              <MotionWrapper>
                <ServicesSection />
              </MotionWrapper>
            </SafeSection>
            
            <SafeSection sectionName="DevelopmentSprints">
              <MotionWrapper>
                <DevelopmentSprints />
              </MotionWrapper>
            </SafeSection>
            
            <SafeSection sectionName="Process">
              <MotionWrapper>
                <ProcessSection />
              </MotionWrapper>
            </SafeSection>
            
            {/* <SafeSection sectionName="Pricing">
              <MotionWrapper>
                <PricingSection />
              </MotionWrapper>
            </SafeSection> */}
            
            <SafeSection sectionName="WeDeliver">
              <MotionWrapper>
                <WeDeliverSection />
              </MotionWrapper>
            </SafeSection>
            
            <SafeSection sectionName="Cta">
              <CtaSection />
            </SafeSection>
          </main>
          <SafeSection sectionName="Footer">
            <Footer />
          </SafeSection>
        </div>
        
        {/* Performance Monitor для отладки */}
        {/* <PerformanceMonitor /> */}
      </>
    );
  }
  