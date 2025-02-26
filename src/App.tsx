import { Navbar } from "@components/layout";
import { HeroSection } from "@components/sections";
import { SponsorsLogotypes } from "@components/ui";

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SponsorsLogotypes />
    </>
  )
}