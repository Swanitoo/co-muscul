import { Button } from "@/components/ui/button";
import { FAQSection } from "@/features/landing/FAQSection";
import { FeatureSection } from "@/features/landing/FeatureSection";
import { HeroSection } from "@/features/landing/HeroSection";
import { LandingHeader } from "@/features/landing/LandingHeader";
import { PricingSection } from "@/features/landing/PricingSection";
import { ProblemsSection } from "@/features/landing/ProblemsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-16" />
      <LandingHeader />
      <HeroSection />
      <FeatureSection />
      <ProblemsSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
}
