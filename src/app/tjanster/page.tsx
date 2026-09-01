import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { ServicesOverview } from "@/components/site/services-overview";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <ServicesOverview />
      </main>
      <SiteFooter />
    </div>
  );
}
