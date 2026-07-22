import Link from "next/link";
import Image from "next/image";
import type { Horse } from "@/lib/data";

export default function HorseCard({ horse }: { horse: Horse }) {
  return (
    <Link
      href={`/tr/atlar/${horse.slug}`}
      className="group relative block h-72 w-full overflow-hidden rounded-2xl"
    >
      <Image
        src={horse.image}
        alt={horse.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-sans text-xl font-semibold text-gold-light">
          {horse.name}
        </h3>
        <p className="mt-0.5 text-sm text-white/80">{horse.category}</p>
      </div>
    </Link>
  );
}
