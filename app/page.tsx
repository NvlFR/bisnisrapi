import dynamic from "next/dynamic";
import { Hero } from "@/components/landing/hero";

const ProblemSection = dynamic(() => import("@/components/landing/problem-section").then(mod => mod.ProblemSection), { ssr: true });
const SolutionSection = dynamic(() => import("@/components/landing/solution-section").then(mod => mod.SolutionSection), { ssr: true });
const HowItWorks = dynamic(() => import("@/components/landing/how-it-works").then(mod => mod.HowItWorks), { ssr: true });
const FeaturesSection = dynamic(() => import("@/components/landing/features-section").then(mod => mod.FeaturesSection), { ssr: true });
const PortfolioSection = dynamic(() => import("@/components/landing/portfolio-section").then(mod => mod.PortfolioSection), { ssr: true });
const WhyUsSection = dynamic(() => import("@/components/landing/why-us-section").then(mod => mod.WhyUsSection), { ssr: true });
const FAQSection = dynamic(() => import("@/components/landing/faq-section").then(mod => mod.FAQSection), { ssr: true });
const CTASection = dynamic(() => import("@/components/landing/cta-section").then(mod => mod.CTASection), { ssr: true });
const Footer = dynamic(() => import("@/components/landing/footer").then(mod => mod.Footer), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <FeaturesSection />
      {/* <PortfolioSection />
      <WhyUsSection />
      <FAQSection />
      <CTASection /> */}
      <Footer />
    </main>
  );
}
