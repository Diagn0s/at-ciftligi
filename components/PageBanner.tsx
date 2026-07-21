import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function PageBanner({
  title,
  crumbs,
}: {
  title: string;
  crumbs: { href?: string; label: string }[];
}) {
  return (
    <section className="relative flex h-[505px] items-center overflow-hidden bg-dark">
      <Image src="/images/hero.jpg" alt="" fill priority className="object-cover" />
      <div className="container-page absolute inset-0 z-[1] w-full">
        <div className="relative h-full w-full">
          <Image src="/images/headerhorse.png" alt="" fill className="object-cover opacity-80" />
        </div>
      </div>

      <div className="container-page relative z-10 w-full text-white">
        <h1 className="font-sans text-5xl font-bold sm:text-6xl">{title}</h1>
        <nav className="mt-3 flex items-center gap-1.5 text-sm">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gold" />}
              {c.href ? (
                <Link href={c.href} className="text-gold hover:text-gold-light">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gold">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>

      <a
        href="#main-content"
        aria-label="Aşağı kaydır"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 hover:text-white"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
