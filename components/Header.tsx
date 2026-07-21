"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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

  return (
    <header
      className={clsx(
        "z-30 text-white transition-colors",
        scrolled ? "fixed top-0 left-0 right-0 bg-black shadow-lg" : "absolute top-0 left-0 right-0"
      )}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/en" className="flex items-center shrink-0">
          <HorseLogo className="h-11 w-12 text-white" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9 font-sans text-sm lowercase">
          {navLinks.map((link) => {
            const active =
              link.href === "/en"
                ? pathname === "/en"
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
          className="lg:hidden text-white"
          aria-label="Menüyü aç/kapat"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-dark/95 backdrop-blur-sm">
          <nav className="container-page flex flex-col gap-1 py-4 font-sans text-sm lowercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-white/90 hover:text-gold-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
