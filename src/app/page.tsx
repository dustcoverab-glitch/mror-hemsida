import { HomeHero } from "@/components/site/home-hero";
import { HomeSections } from "@/components/site/home-sections";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080a0a]">
      <SiteHeader />
      <main>
        <HomeHero />
        <HomeSections />
      </main>
      <SiteFooter />
    </div>
  );
}
