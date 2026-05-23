import { Hero } from "@/components/home/Hero";
import { Announcements } from "@/components/home/Announcements";
import { ServiceChips } from "@/components/home/ServiceChips";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ServiceBento } from "@/components/home/ServiceBento";
import { StatsSection } from "@/components/home/StatsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqPreview } from "@/components/home/FaqPreview";
import { CtaBanner } from "@/components/layout/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Announcements />
      <ServiceChips />
      <AboutTeaser />
      <ServiceBento />
      <StatsSection />
      <Testimonials />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
