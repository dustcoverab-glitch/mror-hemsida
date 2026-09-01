"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { featuredProjects, services } from "@/lib/site-content";
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

export function ServicesOverview() {
  return (
    <>
      <section className="bg-[#171A1B] px-4 pb-20 pt-36 text-[#F6F0E6] sm:px-6 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <Reveal>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#8FDDF0]">Tjänster</p>
            <h1 className="font-heading max-w-[760px] text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              VVS-tjänster för hem, fastigheter och företag.
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-[640px] text-xl leading-9 text-white/72">
              M Rör Linköping AB utför installation, service och renovering med fokus på tydliga lösningar, noggrant utförande och långsiktig funktion.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F7F9FA] px-4 py-18 text-[#171A1B] sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug}>
              <Link
                href={`/tjanster/${service.slug}`}
                className={cn(
                  "group block h-full border border-[#DCE6EA] bg-white p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#00A9D6]/60 hover:shadow-xl hover:shadow-[#14566b]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]",
                  index === 0 && "lg:mt-10",
                  index === 2 && "lg:mt-16"
                )}
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#008FBD]">0{index + 1}</p>
                <h2 className="mt-5 font-heading text-3xl font-semibold tracking-[-0.035em]">{service.title}</h2>
                <p className="mt-4 leading-7 text-[#58666B]">{service.short}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#171A1B]">
                  Läs mer
                  <ArrowRight className="size-4 text-[#00A9D6] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-[#171A1B] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="mb-14 max-w-[820px]">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008FBD]">Vad vi erbjuder</p>
            <h2 className="font-heading text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Rätt VVS-kompetens för både planerade arbeten och akuta behov.
            </h2>
          </Reveal>

          <div className="grid gap-16">
            {services.map((service, index) => (
              <Reveal key={service.slug}>
                <article className="grid gap-8 border-t border-[#DCE6EA] pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className={cn("relative min-h-[360px] overflow-hidden bg-[#1D2022]", index % 2 === 1 && "lg:order-2")}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="object-cover transition duration-700 hover:scale-[1.03]"
                    />
                  </div>
                  <div>
                    <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#008FBD]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-heading text-4xl font-semibold tracking-[-0.035em]">{service.title}</h3>
                    <p className="mt-5 max-w-[680px] text-lg leading-8 text-[#4B5559]">{service.intro}</p>
                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-sm font-bold text-[#293033]">
                          <span className="size-2 bg-[#00A9D6]" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/tjanster/${service.slug}`}
                      className="mt-8 inline-flex h-12 items-center justify-center gap-2 bg-[#171A1B] px-5 text-sm font-extrabold text-white transition-colors hover:bg-[#24282A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
                    >
                      Läs mer om {service.title.toLowerCase()}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF4F7] px-4 py-20 text-[#171A1B] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008FBD]">Tidigare projekt</p>
            <h2 className="font-heading max-w-[620px] text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Se exempel på arbeten i verkliga miljöer.
            </h2>
            <Link
              href="/projekt"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 bg-[#171A1B] px-5 text-sm font-extrabold text-white transition-colors hover:bg-[#24282A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
            >
              Till projekt
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Reveal key={project.title}>
                <Link href="/projekt" className="group relative block min-h-[330px] overflow-hidden bg-[#171A1B] text-white">
                  <Image src={project.image} alt={project.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,26,27,0.75),rgba(23,26,27,0.08)_58%)]" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
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
        <Reveal className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#8FDDF0]">Kontakt</p>
            <h2 className="font-heading max-w-[760px] text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Osäker på vilken tjänst du behöver?
            </h2>
            <p className="mt-5 max-w-[620px] text-lg leading-8 text-white/70">
              Berätta kort om jobbet så hjälper M Rör dig vidare till rätt lösning.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="tel:+46734148505" className="inline-flex h-13 items-center justify-center gap-3 bg-[#00A9D6] px-6 text-sm font-extrabold text-[#071011] transition-colors hover:bg-[#43C8E8]">
              <Phone className="size-4" aria-hidden="true" />
              0734-14 85 05
            </a>
            <Link href="/kontakt" className="inline-flex h-13 items-center justify-center gap-2 border border-white/18 px-6 text-sm font-extrabold text-white transition-colors hover:border-white/42 hover:bg-white/[0.04]">
              Kontakta oss
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
