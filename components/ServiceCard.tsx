import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/data";

export default function ServiceCard({
  service,
  reverse = false,
}: {
  service: Service;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-0 sm:grid-cols-2">
      <div
        className={`relative h-64 w-full overflow-hidden rounded-2xl sm:h-96 ${
          reverse ? "sm:order-2" : "sm:order-1"
        }`}
      >
        <Image src="/images/root_bg.jpg" alt="Hizmet görseli" fill className="object-cover" />
      </div>
      <div
        className={`relative z-10 rounded-2xl bg-[#f1f6f7] p-9 sm:-mx-10 ${
          reverse ? "sm:order-1" : "sm:order-2"
        }`}
      >
        <h3 className="font-sans text-4xl font-bold text-dark">{service.title}</h3>
        <p className="mt-4 leading-relaxed text-black/60">{service.excerpt}</p>
        <Link
          href={`/tr/hizmetler/${service.slug}`}
          className="mt-6 inline-flex items-center rounded-full border border-dark px-8 py-2.5 text-sm font-medium text-dark hover:bg-dark hover:text-white"
        >
          İncele
        </Link>
      </div>
    </div>
  );
}
