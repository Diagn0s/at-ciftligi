"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import HorseLogo from "./HorseLogo";
import { navLinks, siteInfo } from "@/lib/data";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "z-30 text-white transition-colors",
        scrolled ? "fixed top-0 left-0 right-0 bg-black shadow-lg" : "absolute top-0 left-0 right-0"
      )}
    >
      <div className="container-page relative flex items-center justify-between py-4">
        <Link
          href="/tr"
          className="absolute left-1/2 flex -translate-x-1/2 items-center shrink-0 lg:static lg:left-auto lg:translate-x-0"
        >
          <HorseLogo className="h-11 w-12 text-white" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9 font-sans text-sm lowercase">
          {navLinks.map((link) => {
            const active =
              link.href === "/tr"
                ? pathname === "/tr"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "transition-colors hover:text-gold-light",
                  active ? "text-gold-light" : "text-white/90"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {scrolled ? (
          <a
            href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
            className="hidden md:inline-flex items-center rounded-full bg-gold px-5 py-2 text-sm font-medium text-white hover:bg-gold-light"
          >
            {siteInfo.phone}
          </a>
        ) : (
          <div className="hidden md:flex items-center gap-4 font-sans text-sm shrink-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold-light text-gold-light">
              TR
            </span>
            <a
              href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
              className="ml-4 hidden xl:inline text-white/80 hover:text-gold-light"
            >
              {siteInfo.phone}
            </a>
          </div>
        )}

        <button
          className="ml-auto text-white lg:hidden"
          aria-label="Menüyü aç/kapat"
          onClick={() => setOpen((o) => !o)}
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      <div
        className={clsx(
          "fixed inset-0 z-40 lg:hidden",
          open ? "" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        {/* backdrop over the left 20% (and behind the panel) — click to close */}
        <button
          aria-label="Menüyü kapat"
          onClick={() => setOpen(false)}
          className={clsx(
            "absolute inset-0 h-full w-full bg-black/40 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0"
          )}
        />

        {/* sliding panel */}
        <div
          className={clsx(
            "absolute right-0 top-0 flex h-full w-[80%] flex-col overflow-y-auto bg-dark shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="relative flex items-center justify-center py-4">
            <button
              aria-label="Menüyü kapat"
              onClick={() => setOpen(false)}
              className="absolute left-5 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <span className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              Menü
            </span>
          </div>
          <div className="h-px w-full bg-white/10" />

          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.href} className="border-b border-white/10">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="container-page block py-4 font-sans text-base text-white hover:text-gold-light"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="mt-8 flex items-center justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-sans text-xs font-medium text-dark">
              TR
            </span>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 pb-8">
            <a
              href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
              aria-label="Telefon"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-gold"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={siteInfo.social.maps}
              target="_blank"
              rel="noreferrer"
              aria-label="Konum"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-gold"
            >
              <MapPin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${siteInfo.email}`}
              aria-label="E-posta"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-gold"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
