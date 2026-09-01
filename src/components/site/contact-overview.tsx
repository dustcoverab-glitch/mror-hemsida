"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import type { ReactNode } from "react";

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

export function ContactOverview() {
  return (
    <>
      <section className="bg-[#171A1B] px-4 pb-20 pt-36 text-[#F6F0E6] sm:px-6 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#8FDDF0]">Kontakt</p>
            <h1 className="font-heading max-w-[760px] text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Kontakta M Rör i Linköping.
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-[660px] text-xl leading-9 text-white/72">
              Hör av dig om du behöver hjälp med installation, service, renovering eller ett kommande VVS-projekt.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F7F9FA] px-4 py-20 text-[#171A1B] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div className="grid gap-4">
              <ContactCard icon={Phone} title="Telefon" text="0734-14 85 05" href="tel:+46734148505" />
              <ContactCard icon={Mail} title="E-post" text="info@mrorab.se" href="mailto:info@mrorab.se" />
              <ContactCard icon={MapPin} title="Adress" text="Idögatan 33, 582 78 Linköping" />
              <ContactCard icon={Clock} title="Öppettider" text="Mån-fre 07.00-16.00" />
            </div>
          </Reveal>

          <Reveal>
            <form
              action="mailto:info@mrorab.se"
              method="post"
              encType="text/plain"
              className="bg-white p-6 shadow-sm shadow-[#14566b]/5 sm:p-8 lg:p-10"
            >
              <div className="mb-8">
                <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008FBD]">Förfrågan</p>
                <h2 className="font-heading max-w-[720px] text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                  Berätta kort vad du behöver hjälp med.
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Namn" name="namn" autoComplete="name" />
                <Field label="Telefon" name="telefon" autoComplete="tel" />
                <Field label="E-post" name="epost" autoComplete="email" type="email" />
                <Field label="Typ av jobb" name="typ_av_jobb" placeholder="Installation, service, badrum..." />
                <label className="grid gap-2 sm:col-span-2">
                  <span className="text-sm font-extrabold text-[#293033]">Meddelande</span>
                  <textarea
                    name="meddelande"
                    rows={7}
                    className="resize-y border border-[#C9D6DB] bg-[#F7F9FA] px-4 py-3 text-base text-[#171A1B] outline-none transition-colors placeholder:text-[#7B8B91] focus:border-[#00A9D6] focus:bg-white"
                    placeholder="Skriv gärna var jobbet gäller och vad som behöver göras."
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex h-13 items-center justify-center gap-3 bg-[#00A9D6] px-6 text-sm font-extrabold text-[#071011] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#43C8E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171A1B]"
                >
                  Skicka förfrågan
                  <Send className="size-4" aria-hidden="true" />
                </button>
                <p className="max-w-[420px] text-sm leading-6 text-[#627075]">
                  Formuläret öppnar din e-postklient och skickar uppgifterna till M Rör.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  text,
  href,
}: Readonly<{
  icon: typeof Phone;
  title: string;
  text: string;
  href?: string;
}>) {
  const content = (
    <>
      <Icon className="mt-1 size-5 shrink-0 text-[#00A9D6]" aria-hidden="true" />
      <span>
        <span className="block text-sm font-extrabold uppercase tracking-[0.12em] text-[#008FBD]">{title}</span>
        <span className="mt-2 block text-lg font-extrabold tracking-[-0.02em] text-[#171A1B]">{text}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex gap-4 border border-[#DCE6EA] bg-white p-6 transition-colors hover:border-[#00A9D6]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
      >
        {content}
      </a>
    );
  }

  return <div className="flex gap-4 border border-[#DCE6EA] bg-white p-6">{content}</div>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
}: Readonly<{
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}>) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-extrabold text-[#293033]">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="h-13 border border-[#C9D6DB] bg-[#F7F9FA] px-4 text-base text-[#171A1B] outline-none transition-colors placeholder:text-[#7B8B91] focus:border-[#00A9D6] focus:bg-white"
      />
    </label>
  );
}
