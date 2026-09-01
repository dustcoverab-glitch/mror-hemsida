"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
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

export function ProjectsOverview() {
  return (
    <>
      <section className="bg-[#171A1B] px-4 pb-20 pt-36 text-[#F6F0E6] sm:px-6 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#8FDDF0]">Projekt</p>
            <h1 className="font-heading max-w-[760px] text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Utvalda arbeten från verkliga miljöer.
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-[660px] text-xl leading-9 text-white/72">
              Här visas ett urval av tidigare projekt och arbeten där M Rör har hjälpt kunder med installation, värme, service och rördragning.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#EEF4F7] px-4 py-18 text-[#171A1B] sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-4 lg:grid-cols-12">
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
              <article className="group grid h-full overflow-hidden bg-white shadow-sm shadow-[#14566b]/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#14566b]/10">
                <div className="relative min-h-[360px] overflow-hidden bg-[#1D2022] lg:min-h-[440px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    sizes={index === 0 || index === 3 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,26,27,0.56),rgba(23,26,27,0.04)_58%)]" aria-hidden="true" />
                  <p className="absolute bottom-5 left-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#8FDDF0]">
                    {project.location}
                  </p>
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="font-heading text-3xl font-semibold tracking-[-0.035em] text-[#171A1B]">{project.title}</h2>
                  <p className="mt-4 max-w-[680px] leading-7 text-[#58666B]">{project.text}</p>
                  <Link
                    href="/kontakt"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#171A1B] transition-colors hover:text-[#008FBD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
                  >
                    Fråga om liknande projekt
                    <ArrowRight className="size-4 text-[#00A9D6] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-[#171A1B] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008FBD]">Nästa projekt</p>
            <h2 className="font-heading max-w-[720px] text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Vill du veta mer om ett tidigare arbete eller diskutera ett eget projekt?
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-[640px] text-lg leading-8 text-[#4B5559]">
              Kontakta M Rör så kan ni prata igenom behov, förutsättningar och vilken typ av VVS-lösning som passar bäst.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+46734148505"
                className="inline-flex h-13 items-center justify-center gap-3 bg-[#00A9D6] px-6 text-sm font-extrabold text-[#071011] transition-colors hover:bg-[#43C8E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171A1B]"
              >
                <Phone className="size-4" aria-hidden="true" />
                0734-14 85 05
              </a>
              <Link
                href="/kontakt"
                className="inline-flex h-13 items-center justify-center gap-2 border border-[#C9D6DB] px-6 text-sm font-extrabold text-[#171A1B] transition-colors hover:border-[#00A9D6] hover:bg-[#F7F9FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
              >
                Kontakta oss
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
