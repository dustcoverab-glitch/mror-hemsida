import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { ProjectsOverview } from "@/components/site/projects-overview";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <ProjectsOverview />
      </main>
      <SiteFooter />
    </div>
  );
}
