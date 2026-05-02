"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/landing/hero";
import { LazySection } from "@/components/landing/lazy-section";
import { LoadingSection } from "@/components/ui/loading-section";

const ProblemSection = dynamic(() => import("@/components/landing/problem-section").then(mod => mod.ProblemSection), { 
  ssr: true,
  loading: () => <LoadingSection height="600px" type="list" />
});
const SolutionSection = dynamic(() => import("@/components/landing/solution-section").then(mod => mod.SolutionSection), { 
  ssr: true,
  loading: () => <LoadingSection height="600px" />
});
const ServicesSection = dynamic(() => import("@/components/landing/services-section").then(mod => mod.ServicesSection), { 
  ssr: true,
  loading: () => <LoadingSection height="800px" type="grid" />
});
const HowItWorks = dynamic(() => import("@/components/landing/how-it-works").then(mod => mod.HowItWorks), { 
  ssr: true,
  loading: () => <LoadingSection height="750px" type="list" />
});
const FeaturesSection = dynamic(() => import("@/components/landing/features-section").then(mod => mod.FeaturesSection), { 
  ssr: true,
  loading: () => <LoadingSection height="800px" type="grid" />
});
const PortfolioSection = dynamic(() => import("@/components/landing/portfolio-section").then(mod => mod.PortfolioSection), { 
  ssr: true,
  loading: () => <LoadingSection height="900px" type="grid" />
});
const WhyUsSection = dynamic(() => import("@/components/landing/why-us-section").then(mod => mod.WhyUsSection), { 
  ssr: true,
  loading: () => <LoadingSection height="600px" />
});
const FAQSection = dynamic(() => import("@/components/landing/faq-section").then(mod => mod.FAQSection), { 
  ssr: false, 
  loading: () => <LoadingSection height="600px" type="list" />
});
const CTASection = dynamic(() => import("@/components/landing/cta-section").then(mod => mod.CTASection), { 
  ssr: true,
  loading: () => <LoadingSection height="400px" type="hero" />
});
const Footer = dynamic(() => import("@/components/landing/footer").then(mod => mod.Footer), { 
  ssr: false, 
  loading: () => <LoadingSection height="300px" type="list" />
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* First two sections after hero have a smaller offset to load earlier */}
      <LazySection height="600px" offset="400px" type="list">
        <ProblemSection />
      </LazySection>
      
      <LazySection height="600px" offset="300px">
        <SolutionSection />
      </LazySection>
      
      <LazySection height="800px" type="grid">
        <ServicesSection />
      </LazySection>
      
      <LazySection height="750px" type="list">
        <HowItWorks />
      </LazySection>
      
      <LazySection height="800px" type="grid">
        <FeaturesSection />
      </LazySection>
      
      <LazySection height="900px" type="grid">
        <PortfolioSection />
      </LazySection>
      
      <LazySection height="600px">
        <WhyUsSection />
      </LazySection>
      
      <LazySection height="600px" type="list">
        <FAQSection />
      </LazySection>
      
      <LazySection height="400px" type="hero">
        <CTASection />
      </LazySection>
      
      <LazySection height="300px" type="list">
        <Footer />
      </LazySection>
    </main>
  );
}
