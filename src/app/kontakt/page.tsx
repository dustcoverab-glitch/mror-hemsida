import { ContactOverview } from "@/components/site/contact-overview";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <ContactOverview />
      </main>
      <SiteFooter />
    </div>
  );
}
