"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, Clock, Droplets, Hammer, Home, MapPin, Phone, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

function Reveal({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      variants={reveal}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    title: "VVS-installationer",
    text: "Installationer för kök, badrum, värme och vatten där utförandet behöver vara rent, korrekt och långsiktigt.",
    image: "/assets/mror/rorinstallation-current-site.webp",
    icon: Droplets,
  },
  {
    title: "Badrumsrenovering",
    text: "Planerade badrumsarbeten med fokus på funktion, finish och samordning mellan installation och färdigt resultat.",
    image: "/assets/mror/badrumsrenovering-current-site.jpg",
    icon: Home,
  },
  {
    title: "Service & reparation",
    text: "Felsökning, service och reparation när värme, vatten eller avlopp behöver fungera snabbt och tryggt igen.",
    image: "/assets/mror/vvs-service-current-site.webp",
    icon: Wrench,
  },
  {
    title: "Renovering & ombyggnation",
    text: "Rördragning och installation i pågående byggprojekt, ombyggnationer och fastigheter med flera tekniska delar.",
    image: "/assets/mror/vindslagenheter-rordragning.jpg",
    icon: Hammer,
  },
];

const projects = [
  {
    title: "Golvvärme i nyproduktion",
    location: "Varamon",
    image: "/assets/mror/golvvarme-varamon-projekt.jpg",
  },
  {
    title: "Pumpbyte och värmeservice",
    location: "Linköping",
    image: "/assets/mror/pumpbyte-grundfos-installation.jpg",
  },
  {
    title: "Bergvärme vid villaprojekt",
    location: "Trivselhus",
    image: "/assets/mror/trivselhus-bergvarme-instagram.jpg",
  },
  {
    title: "Lokalprojekt med rördragning",
    location: "Tornby",
    image: "/assets/mror/tornby-lokalprojekt-instagram.jpg",
  },
];

export function HomeSections() {
  const [activeService, setActiveService] = useState(0);
  const selectedService = services[activeService];
  const SelectedIcon = selectedService.icon;

  return (
    <>
      <section className="bg-[#F7F9FA] px-4 py-20 text-[#171A1B] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008FBD]">Om oss</p>
            <h2 className="font-heading max-w-[760px] text-balance text-4xl font-semibold tracking-[-0.035em] text-[#171A1B] sm:text-5xl lg:text-6xl">
              Lokalt VVS-företag med tydlig känsla för detaljer.
            </h2>
          </Reveal>
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_0.76fr] lg:items-end">
            <p className="text-lg leading-8 text-[#4B5559]">
              M Rör Linköping AB utför VVS-arbeten för privatpersoner, företag och fastighetsägare. Tonen är rak och praktisk: kvalitet i varje detalj, personlig service och lösningar som fungerar över tid.
            </p>
            <div className="border-l-2 border-[#00A9D6] pl-5">
              <p className="text-3xl font-extrabold tracking-[-0.03em] text-[#171A1B]">Sedan 2007</p>
              <p className="mt-2 text-sm font-bold text-[#627075]">Certifierade enligt Säker Vatten.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-[#171A1B] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008FBD]">Tjänster</p>
              <h2 className="font-heading max-w-[720px] text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Från planerade installationer till snabb service.
              </h2>
            </div>
            <Link
              href="/tjanster"
              className="inline-flex h-12 items-center justify-center gap-2 bg-[#171A1B] px-5 text-sm font-extrabold text-white transition-colors hover:bg-[#24282A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
            >
              Alla tjänster
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal className="grid overflow-hidden border border-[#DFE7EA] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="divide-y divide-[#DFE7EA] bg-[#F7F9FA]">
              {services.map((service, index) => {
                const Icon = service.icon;
                const active = activeService === index;
                return (
                  <button
                    key={service.title}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveService(index)}
                    className={cn(
                      "group flex w-full items-start gap-4 p-6 text-left transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#00A9D6] sm:p-8",
                      active && "bg-white"
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-11 shrink-0 items-center justify-center border border-[#CAD7DC] text-[#008FBD] transition-colors",
                        active && "border-[#00A9D6] bg-[#00A9D6] text-[#071011]"
                      )}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xl font-extrabold tracking-[-0.02em] text-[#171A1B]">{service.title}</span>
                      <span className="mt-2 block max-w-[520px] text-sm leading-6 text-[#58666B]">{service.text}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="relative min-h-[460px] bg-[#1D2022]">
              <Image
                key={selectedService.image}
                src={selectedService.image}
                alt={selectedService.title}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,26,27,0.58),transparent_52%)]" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <SelectedIcon className="mb-4 size-7 text-[#00A9D6]" aria-hidden="true" />
                <p className="font-heading max-w-[520px] text-3xl font-semibold tracking-[-0.035em]">
                  {selectedService.title}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#EEF4F7] px-4 py-20 text-[#171A1B] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008FBD]">Projekt</p>
              <h2 className="font-heading max-w-[640px] text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Verkliga jobb, verkliga miljöer.
              </h2>
            </div>
            <p className="max-w-[660px] text-lg leading-8 text-[#4B5559]">
              Ett urval av tidigare arbeten där M Rör har hjälpt kunder med golvvärme, värmeservice, bergvärme och rördragning i olika typer av miljöer.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                className={cn(
                  index === 0 && "lg:col-span-7",
                  index === 1 && "lg:col-span-5",
                  index === 2 && "lg:col-span-5",
                  index === 3 && "lg:col-span-7"
                )}
              >
                <Link
                  href="/projekt"
                  className={cn(
                    "group relative block min-h-[360px] overflow-hidden bg-[#171A1B] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]",
                    (index === 0 || index === 3) && "lg:min-h-[430px]",
                    (index === 1 || index === 2) && "lg:min-h-[430px]"
                  )}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={index === 0 || index === 3 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,26,27,0.72),rgba(23,26,27,0.08)_58%)]" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#8FDDF0]">{project.location}</p>
                    <h3 className="mt-2 font-heading text-2xl font-semibold tracking-[-0.03em]">{project.title}</h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold">
                      Läs mer
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-[#171A1B] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008FBD]">Så arbetar vi</p>
            <h2 className="font-heading max-w-[640px] text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Tydligt från första samtal till färdig installation.
            </h2>
          </Reveal>
          <div className="grid gap-5">
            {[
              ["01", "Förstå jobbet", "Vi börjar med behov, förutsättningar och rätt teknisk lösning för fastigheten eller projektet."],
              ["02", "Planera utförandet", "Material, timing och arbetsmoment hålls tydliga så installationen kan göras effektivt."],
              ["03", "Lämna över tryggt", "Arbetet avslutas med funktion, finish och långsiktig drift i fokus."],
            ].map(([number, title, text]) => (
              <Reveal key={number}>
                <div className="grid gap-4 border-t border-[#D6E1E5] py-7 sm:grid-cols-[80px_1fr]">
                  <span className="text-sm font-extrabold tracking-[0.14em] text-[#00A9D6]">{number}</span>
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-[-0.025em]">{title}</h3>
                    <p className="mt-3 max-w-[720px] leading-7 text-[#58666B]">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171A1B] px-4 py-20 text-[#F6F0E6] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#8FDDF0]">Kontakt</p>
            <h2 className="font-heading max-w-[760px] text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Behöver du hjälp med VVS i Linköping?
            </h2>
            <p className="mt-6 max-w-[620px] text-lg leading-8 text-[#F6F0E6]/72">
              Ring M Rör eller skicka en förfrågan så tar ni nästa steg från rätt plats.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+46734148505"
                className="inline-flex h-13 items-center justify-center gap-3 bg-[#00A9D6] px-6 text-sm font-extrabold text-[#071011] transition-colors hover:bg-[#43C8E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Phone className="size-4" aria-hidden="true" />
                0734-14 85 05
              </a>
              <Link
                href="/kontakt"
                className="inline-flex h-13 items-center justify-center gap-2 border border-white/18 px-6 text-sm font-extrabold text-white transition-colors hover:border-white/42 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
              >
                Till kontaktsidan
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid gap-4 border border-white/12 bg-[#1D2022] p-6 sm:p-8">
              <div className="flex gap-4 border-b border-white/10 pb-5">
                <MapPin className="mt-1 size-5 shrink-0 text-[#00A9D6]" aria-hidden="true" />
                <div>
                  <p className="font-extrabold">Idögatan 33</p>
                  <p className="mt-1 text-sm text-white/62">582 78 Linköping</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-white/10 pb-5">
                <Clock className="mt-1 size-5 shrink-0 text-[#00A9D6]" aria-hidden="true" />
                <div>
                  <p className="font-extrabold">Mån-fre 07.00-16.00</p>
                  <p className="mt-1 text-sm text-white/62">Öppettider från befintlig webbplats.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 size-5 shrink-0 text-[#00A9D6]" aria-hidden="true" />
                <div>
                  <p className="font-extrabold">Säker Vatten</p>
                  <p className="mt-1 text-sm text-white/62">Certifiering enligt befintlig information.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
