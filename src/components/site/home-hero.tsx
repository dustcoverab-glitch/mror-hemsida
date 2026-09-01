"use client";

import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const content: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: smoothEase },
  },
};

const trustPoints = ["SEDAN 2007", "SÄKER VATTEN", "LINKÖPING"];

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 46]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[92svh] overflow-hidden bg-[#171A1B] text-[#F6F0E6] lg:min-h-[94svh]"
    >
      <motion.div
        initial={{ scale: 1.045 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: smoothEase }}
        style={{ y: imageY }}
        className="absolute inset-0 -z-30"
      >
        <Image
          src="/assets/mror/current-site-hero-vvs.webp"
          alt="VVS-arbete under handfat från M Rörs befintliga webbplats"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[54%_48%]"
        />
      </motion.div>

      <div
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(23,26,27,0.56)_0%,rgba(23,26,27,0.28)_48%,rgba(23,26,27,0.14)_100%),linear-gradient(0deg,rgba(23,26,27,0.62)_0%,rgba(23,26,27,0.08)_48%,rgba(23,26,27,0.24)_100%)]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#F4F7F8] via-[#F4F7F8]/62 to-transparent"
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.2,
            },
          },
        }}
        className="mx-auto grid min-h-[92svh] w-full max-w-[1440px] items-end gap-4 px-4 pb-7 pt-28 sm:px-6 sm:pb-9 lg:min-h-[94svh] lg:grid-cols-[minmax(0,1fr)_360px] lg:px-10 lg:pb-12"
      >
        <motion.div
          variants={content}
          className="relative max-w-[780px] bg-[#F7FAFA]/95 p-6 text-[#171A1B] shadow-[0_26px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-8 lg:p-10"
        >
          <div className="mb-7 h-1 w-16 bg-[#00A9D6]" aria-hidden="true" />

          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#007FA4]">
            M Rör Linköping AB
          </p>

          <h1 className="font-heading max-w-[720px] text-balance text-[clamp(3.4rem,6.2vw,5.7rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#171A1B]">
            VVS som håller.
          </h1>

          <p className="mt-6 max-w-[590px] text-pretty text-lg font-semibold leading-8 text-[#303638] sm:text-xl">
            Installation, service och entreprenad för hem, fastigheter och företag i Linköping.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="group inline-flex h-13 items-center justify-center bg-[#00A9D6] px-6 text-sm font-extrabold text-[#071011] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#43C8E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171A1B]"
            >
              Kontakta oss
            </Link>
            <Link
              href="/projekt"
              className="group inline-flex h-13 items-center justify-center gap-2 border border-[#171A1B]/18 bg-white/40 px-6 text-sm font-extrabold text-[#171A1B] transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#00A9D6]/80 hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
            >
              Se våra projekt
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-8 grid gap-3 border-t border-[#171A1B]/10 pt-5 text-[0.76rem] font-extrabold tracking-[0.12em] text-[#465052] sm:flex sm:flex-wrap sm:gap-x-8">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#00A9D6]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.aside
          variants={content}
          className="hidden bg-[#171A1B]/84 p-5 text-[#F7FAFA] shadow-[0_22px_70px_rgba(0,0,0,0.26)] backdrop-blur-md lg:mb-1 lg:block"
          aria-label="Snabbt kontaktformulär"
        >
          <div className="flex items-center justify-between border-b border-white/12 pb-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/60">Snabb kontakt</p>
            <span className="h-1 w-10 bg-[#00A9D6]" aria-hidden="true" />
          </div>

          <p className="mt-4 text-sm font-medium leading-6 text-white/72">
            Berätta kort vad du behöver hjälp med, så kan M Rör återkomma via telefon eller mail.
          </p>

          <form className="mt-5 grid gap-3" action="/kontakt">
            <label className="grid gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white/52">
              Namn
              <input
                name="namn"
                type="text"
                className="h-11 border border-white/12 bg-white/[0.06] px-3 text-sm font-semibold normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/34 focus:border-[#00A9D6]"
                placeholder="Ditt namn"
              />
            </label>
            <label className="grid gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white/52">
              Telefon eller mail
              <input
                name="kontakt"
                type="text"
                className="h-11 border border-white/12 bg-white/[0.06] px-3 text-sm font-semibold normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/34 focus:border-[#00A9D6]"
                placeholder="Hur når vi dig?"
              />
            </label>
            <label className="grid gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white/52">
              Ärende
              <textarea
                name="arende"
                rows={3}
                className="resize-none border border-white/12 bg-white/[0.06] px-3 py-3 text-sm font-semibold normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/34 focus:border-[#00A9D6]"
                placeholder="Kort om jobbet"
              />
            </label>

            <button
              type="submit"
              className="group mt-1 inline-flex h-12 items-center justify-center gap-2 bg-[#00A9D6] px-5 text-sm font-extrabold text-[#071011] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#43C8E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Skicka förfrågan
              <Send className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
          </form>

          <Link
            href="/kontakt"
            className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#55D4F2] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
          >
            Öppna kontaktsidan
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </motion.aside>
      </motion.div>
    </section>
  );
}
