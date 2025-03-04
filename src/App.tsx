import { Navbar } from "@components/layout";
import { HeroSection, ServicesSection, CaseStudiesSection, WorkingProcess, TeamSection, TestimonialsSection, ContactSection } from "@components/sections";
import { Sponsors, CTA } from "@components/ui";

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Sponsors />
      <ServicesSection />
      <CTA />
      <CaseStudiesSection />
      <WorkingProcess />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}