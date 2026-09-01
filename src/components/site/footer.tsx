import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Start", href: "/" },
  { label: "Tjänster", href: "/tjanster" },
  { label: "Projekt", href: "/projekt" },
  { label: "Om M Rör", href: "/om-m-ror" },
  { label: "Kontakt", href: "/kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#111414] px-4 py-12 text-[#F6F0E6] sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1320px] gap-10 border-t border-white/12 pt-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link
            href="/"
            aria-label="M Rör Linköping AB start"
            className="inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
          >
            <Image
              src="/assets/mror/mror-logo.webp"
              alt="M Rör Linköping AB"
              width={441}
              height={235}
              className="h-auto w-[126px]"
            />
          </Link>
          <p className="mt-6 max-w-[420px] text-sm leading-7 text-white/62">
            Professionella VVS-arbeten i Linköping med fokus på kvalitet, noggrannhet och långsiktiga lösningar.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#8FDDF0]">Sidor</p>
          <ul className="grid gap-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white/72 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
                >
                  {link.label}
                  <ArrowUpRight className="size-3.5 text-[#00A9D6]" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#8FDDF0]">Kontakt</p>
          <div className="grid gap-4 text-sm text-white/72">
            <a
              href="tel:+46734148505"
              className="inline-flex items-center gap-3 font-bold transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
            >
              <Phone className="size-4 text-[#00A9D6]" aria-hidden="true" />
              0734-14 85 05
            </a>
            <a
              href="mailto:info@mrorab.se"
              className="inline-flex items-center gap-3 font-bold transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
            >
              <Mail className="size-4 text-[#00A9D6]" aria-hidden="true" />
              info@mrorab.se
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#00A9D6]" aria-hidden="true" />
              <span>
                Idögatan 33
                <br />
                582 78 Linköping
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1320px] flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs font-semibold text-white/42 sm:flex-row">
        <p>© M Rör Linköping AB</p>
        <p>Sedan 2007 · Säker Vatten · Linköping</p>
      </div>
    </footer>
  );
}
