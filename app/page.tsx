import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ProblemSection } from "@/components/landing/problem-section";
import { SolutionSection } from "@/components/landing/solution-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FeaturesSection } from "@/components/landing/features-section";
import { PortfolioSection } from "@/components/landing/portfolio-section";
import { WhyUsSection } from "@/components/landing/why-us-section";
import { FAQSection } from "@/components/landing/faq-section";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <FeaturesSection />
      <PortfolioSection />
      <WhyUsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
