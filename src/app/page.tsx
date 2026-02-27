import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { StampsSection } from "@/components/StampsSection";
import { Works } from "@/components/Works";
import { AppDev } from "@/components/AppDev";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutMe />
      <StampsSection />
      <Works />
      <AppDev />
      <Footer />
    </main>
  );
}
