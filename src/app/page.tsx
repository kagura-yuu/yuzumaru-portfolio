import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { WorksOverview } from "@/components/WorksOverview";
import { Works } from "@/components/Works";
import { StampsSection } from "@/components/StampsSection";
import { AppDev } from "@/components/AppDev";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <AboutMe />
      <WorksOverview />
      <StampsSection />
      <Works />
      <AppDev />
      <Footer />
    </main>
  );
}
