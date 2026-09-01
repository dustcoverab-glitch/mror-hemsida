"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { projects } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const timeline = [
  {
    year: "2007",
    title: "M Rör startar i Linköping",
    text: "Företaget har funnits sedan 2007 och byggt sin verksamhet kring VVS-arbeten i Linköping med omnejd.",
  },
  {
    year: "Idag",
    title: "VVS för hem, företag och fastigheter",
    text: "Arbetet omfattar installation, service, renovering och ombyggnation för flera typer av kunder och miljöer.",
  },
  {
    year: "Trygghet",
    title: "Certifierade enligt Säker Vatten",
    text: "M Rör arbetar med kvalitet, noggrannhet och långsiktiga lösningar som grund i varje uppdrag.",
  },
];

function Reveal({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={reveal}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AboutOverview() {
  const selectedProjects = projects.slice(0, 3);

  return (
    <>
      <section className="bg-[#171A1B] px-4 pb-20 pt-36 text-[#F6F0E6] sm:px-6 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#8FDDF0]">Om M Rör</p>
            <h1 className="font-heading max-w-[780px] text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Lokalt VVS-företag med arbete som syns i detaljerna.
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-[660px] text-xl leading-9 text-white/72">
              M Rör Linköping AB utför professionella VVS-arbeten för privatpersoner, företag och fastighetsägare. Företaget är lokalt förankrat, praktiskt arbetande och certifierat enligt Säker Vatten.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F7F9FA] px-4 py-20 text-[#171A1B] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative min-h-[420px] overflow-hidden bg-[#1D2022] lg:min-h-[620px]">
              <Image
                src="/assets/mror/mercedes-premises-trust.jpg"
                alt="M Rör servicebil vid företagets lokaler i Linköping"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008FBD]">Företaget</p>
            <h2 className="font-heading max-w-[700px] text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Byggt för kunder som vill ha tydlighet, kvalitet och fungerande VVS.
            </h2>
            <p className="mt-6 max-w-[680px] text-lg leading-8 text-[#4B5559]">
              M Rörs nuvarande material lyfter fram professionella VVS-arbeten, personlig service och kvalitet i varje detalj. Uppdragen sträcker sig från service och reparation till badrumsrenovering, installationer och arbeten i större byggmiljöer.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Sedan 2007", "Etablerat i Linköping"],
                ["Säker Vatten", "Certifierat arbetssätt"],
                ["Privat / företag", "Även fastigheter"],
              ].map(([title, text]) => (
                <div key={title} className="border-t-2 border-[#00A9D6] bg-white p-5">
                  <p className="font-extrabold tracking-[-0.02em]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#627075]">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-[#171A1B] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008FBD]">Historik</p>
            <h2 className="font-heading max-w-[580px] text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              En kort tidslinje.
            </h2>
          </Reveal>
          <div className="grid gap-0">
            {timeline.map((item, index) => (
              <Reveal key={item.title}>
                <article className={cn("grid gap-5 border-t border-[#D6E1E5] py-8 sm:grid-cols-[130px_1fr]", index === timeline.length - 1 && "border-b")}>
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#00A9D6]">{item.year}</p>
                  <div>
                    <h3 className="font-heading text-3xl font-semibold tracking-[-0.035em]">{item.title}</h3>
                    <p className="mt-3 max-w-[760px] leading-7 text-[#58666B]">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF4F7] px-4 py-20 text-[#171A1B] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008FBD]">Tidigare projekt</p>
              <h2 className="font-heading max-w-[700px] text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Erfarenhet från både installation, service och byggprojekt.
              </h2>
            </div>
            <Link
              href="/projekt"
              className="inline-flex h-12 items-center justify-center gap-2 bg-[#171A1B] px-5 text-sm font-extrabold text-white transition-colors hover:bg-[#24282A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
            >
              Se alla projekt
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {selectedProjects.map((project) => (
              <Reveal key={project.title}>
                <Link href="/projekt" className="group relative block min-h-[360px] overflow-hidden bg-[#171A1B] text-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,26,27,0.72),rgba(23,26,27,0.08)_58%)]" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#8FDDF0]">{project.location}</p>
                    <h3 className="mt-2 font-heading text-2xl font-semibold tracking-[-0.03em]">{project.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171A1B] px-4 py-20 text-[#F6F0E6] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#8FDDF0]">Kontakt</p>
            <h2 className="font-heading max-w-[740px] text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Vill du prata med M Rör om ett kommande jobb?
            </h2>
            <p className="mt-6 max-w-[620px] text-lg leading-8 text-white/70">
              Ring direkt eller gå vidare till kontaktsidan så tar ni nästa steg tillsammans.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+46734148505"
                className="inline-flex h-13 items-center justify-center gap-3 bg-[#00A9D6] px-6 text-sm font-extrabold text-[#071011] transition-colors hover:bg-[#43C8E8]"
              >
                <Phone className="size-4" aria-hidden="true" />
                0734-14 85 05
              </a>
              <Link
                href="/kontakt"
                className="inline-flex h-13 items-center justify-center gap-2 border border-white/18 px-6 text-sm font-extrabold text-white transition-colors hover:border-white/42 hover:bg-white/[0.04]"
              >
                Kontakta oss
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid gap-5 border border-white/12 bg-[#1D2022] p-6 sm:p-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-[#00A9D6]" aria-hidden="true" />
                <p className="text-white/72">Idögatan 33, 582 78 Linköping</p>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 size-5 shrink-0 text-[#00A9D6]" aria-hidden="true" />
                <p className="text-white/72">Certifierade enligt Säker Vatten</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
