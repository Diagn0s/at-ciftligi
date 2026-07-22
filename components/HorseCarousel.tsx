import Link from "next/link";
import Image from "next/image";
import type { Horse } from "@/lib/data";

export default function HorseCarousel({ horses }: { horses: Horse[] }) {
  // duplicate the list so the CSS animation can loop seamlessly at -50%
  const items = [...horses, ...horses];

  return (
    <div className="relative z-10 mt-16 w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex w-max animate-marquee items-center gap-6 px-6 sm:px-10">
        {items.map((horse, i) => (
          <Link
            href={`/tr/atlar/${horse.slug}`}
            key={i}
            className="group relative h-64 w-52 shrink-0 overflow-hidden rounded-2xl shadow-xl sm:h-[26rem] sm:w-80"
          >
            <Image
              src={horse.image}
              alt={horse.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="p-4 font-sans text-lg font-semibold text-gold-light">
                {horse.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
