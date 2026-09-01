import { AboutOverview } from "@/components/site/about-overview";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <AboutOverview />
      </main>
      <SiteFooter />
    </div>
  );
}
