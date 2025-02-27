import { Navbar } from "@components/layout";
import { HeroSection, ServicesSection } from "@components/sections";
import { Sponsors } from "@components/ui";

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Sponsors />
      <ServicesSection />
    </>
  )
}