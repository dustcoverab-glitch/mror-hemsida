"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

import { cn } from "@/lib/utils";

const navigation = [
  { label: "Start", href: "/" },
  { label: "Tjänster", href: "/tjanster" },
  { label: "Projekt", href: "/projekt" },
  { label: "Om M Rör", href: "/om-m-ror" },
  { label: "Kontakt", href: "/kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b text-[#F6F0E6] backdrop-blur-md transition-colors duration-300",
        scrolled || open ? "border-white/10 bg-[#171A1B]/92" : "border-white/10 bg-[#171A1B]/32"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          aria-label="M Rör Linköping AB start"
          className="group flex items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00a9d6]"
        >
          <span className="relative flex h-12 w-[102px] items-center overflow-hidden">
            <Image
              src="/assets/mror/mror-logo.webp"
              alt="M Rör Linköping AB"
              width={441}
              height={235}
              priority
              loading="eager"
              className="h-auto w-full object-contain"
            />
          </span>
          <span className="hidden border-l border-white/14 pl-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/58 sm:block">
            Linköping AB
          </span>
        </Link>

        <nav aria-label="Huvudnavigation" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <HeaderLink key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+46734148505"
            className="group inline-flex h-11 items-center gap-3 px-1 text-sm font-bold text-white transition-colors hover:text-white/78 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6]"
          >
            <Phone className="size-4 text-[#00A9D6]" aria-hidden="true" />
            0734-14 85 05
          </a>
          <Link
            href="/kontakt"
            className="inline-flex h-11 items-center bg-[#00A9D6] px-5 text-sm font-extrabold text-[#071011] transition-colors hover:bg-[#43C8E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Kontakt
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center border border-white/18 bg-[#171A1B]/18 text-white backdrop-blur-sm transition-colors hover:border-[#00A9D6]/70 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A9D6] lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/10 bg-[#171A1B]/96 px-4 pb-5 pt-3 shadow-2xl shadow-black/30 backdrop-blur-md lg:hidden"
          >
            <nav aria-label="Mobil huvudnavigation" className="mx-auto grid max-w-[1440px] gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/8 py-4 text-base font-bold text-white/84 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A9D6]"
                >
                  {item.label}
                  {isActivePath(pathname, item.href) ? <span className="h-px w-8 bg-[#00A9D6]" aria-hidden="true" /> : null}
                </Link>
              ))}
              <a
                href="tel:+46734148505"
                className="mt-4 inline-flex h-12 items-center justify-center gap-3 bg-[#00A9D6] px-5 text-sm font-extrabold text-[#071011] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Phone className="size-4" aria-hidden="true" />
                0734-14 85 05
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function HeaderLink({
  item,
  pathname,
}: Readonly<{
  item: { label: string; href: string };
  pathname: string;
}>) {
  const active = isActivePath(pathname, item.href);

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative text-[0.92rem] font-bold text-white/72 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-[#00A9D6]",
        active && "text-white"
      )}
    >
      {item.label}
      <span
        className={cn(
          "absolute -bottom-7 left-0 h-px w-full origin-left scale-x-0 bg-[#00A9D6] transition-transform duration-200 group-hover:scale-x-100",
          active && "scale-x-100"
        )}
      />
    </Link>
  );
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
