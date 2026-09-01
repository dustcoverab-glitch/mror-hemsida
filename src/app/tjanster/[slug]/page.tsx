import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { services } from "@/lib/site-content";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <section className="bg-[#171A1B] px-4 pb-18 pt-36 text-[#F6F0E6] sm:px-6 lg:px-10 lg:pb-24 lg:pt-44">
          <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Link href="/tjanster" className="mb-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#8FDDF0] transition-colors hover:text-white">
                <ArrowLeft className="size-4" aria-hidden="true" />
                Tillbaka till tjänster
              </Link>
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#8FDDF0]">Tjänst</p>
              <h1 className="font-heading max-w-[760px] text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                {service.title}
              </h1>
            </div>
            <p className="max-w-[640px] text-xl leading-9 text-white/72">{service.intro}</p>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="relative min-h-[430px] overflow-hidden bg-[#1D2022] lg:min-h-[620px]">
              <Image src={service.image} alt={service.title} fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
            </div>
            <div className="bg-white p-6 sm:p-8 lg:p-10">
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008FBD]">Det här ingår ofta</p>
              <h2 className="font-heading text-4xl font-semibold tracking-[-0.035em] text-[#171A1B]">När passar tjänsten?</h2>
              <p className="mt-5 text-lg leading-8 text-[#4B5559]">
                Varje jobb behöver bedömas efter plats, skick och mål. Den här tjänsten passar när du vill ha ett praktiskt genomfört VVS-arbete med tydlig kommunikation och noggrann installation.
              </p>
              <ul className="mt-8 grid gap-4">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 border-t border-[#DCE6EA] pt-4 text-base font-bold text-[#293033]">
                    <span className="size-2 bg-[#00A9D6]" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="tel:+46734148505" className="inline-flex h-13 items-center justify-center gap-3 bg-[#00A9D6] px-6 text-sm font-extrabold text-[#071011] transition-colors hover:bg-[#43C8E8]">
                  <Phone className="size-4" aria-hidden="true" />
                  Ring M Rör
                </a>
                <Link href="/kontakt" className="inline-flex h-13 items-center justify-center gap-2 border border-[#C9D6DB] px-6 text-sm font-extrabold text-[#171A1B] transition-colors hover:border-[#00A9D6]">
                  Skicka förfrågan
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1320px]">
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.035em] text-[#171A1B]">Fler tjänster</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {otherServices.map((item) => (
                <Link key={item.slug} href={`/tjanster/${item.slug}`} className="group border border-[#DCE6EA] p-6 transition-colors hover:border-[#00A9D6]/70">
                  <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-[#171A1B]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#58666B]">{item.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#171A1B]">
                    Läs mer
                    <ArrowRight className="size-4 text-[#00A9D6] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
