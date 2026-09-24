import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActions } from "@/components/layout/MobileActions";
import { Experiences } from "@/components/sections/Experiences";
import { Farm } from "@/components/sections/Farm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Gallery } from "@/components/sections/Gallery";
import { Gastronomy } from "@/components/sections/Gastronomy";
import { Hero } from "@/components/sections/Hero";
import { History } from "@/components/sections/History";
import { Instagram } from "@/components/sections/Instagram";
import { Intro } from "@/components/sections/Intro";
import { Location } from "@/components/sections/Location";
import { Reviews } from "@/components/sections/Reviews";
import { Schedule } from "@/components/sections/Schedule";
import { restaurantJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd()) }}
      />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Experiences />
        <Gastronomy />
        <Farm />
        <History />
        <Schedule />
        <Gallery />
        <Reviews />
        <Instagram />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActions />
    </>
  );
}
