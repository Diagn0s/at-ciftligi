import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Circle, Heart, Building2, PawPrint, LineChart, Lightbulb, CreditCard } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import ContactNewsletterSection from "@/components/ContactNewsletterSection";
import {
  horses,
  productShortDescription,
  productFeatureList,
  productTag,
  productLongParagraph,
  productMiniCards,
  productIconRow,
  productChecklist,
} from "@/lib/data";

export function generateStaticParams() {
  return horses.map((horse) => ({ slug: horse.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const horse = horses.find((h) => h.slug === slug);
  return { title: `${horse?.name ?? "At"} | B-Horse` };
}

const miniCardIcons = [LineChart, Lightbulb, CreditCard];
const iconRowIcons = [Circle, Heart, Building2, PawPrint];

export default async function HorseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const horse = horses.find((h) => h.slug === slug);
  if (!horse) notFound();

  const startIndex = horses.findIndex((h) => h.slug === horse.slug);
  const gallery = [0, 1, 2].map((offset) => horses[(startIndex + offset) % 4].image);

  return (
    <>
      <PageBanner
        title={horse.name}
        crumbs={[
          { href: "/tr", label: "Anasayfa" },
          { href: "/tr/atlar", label: "Atlarımız" },
          { href: `/tr/atlar`, label: horse.category },
        ]}
      />

      <section className="bg-white py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-6">
            {gallery.map((src, i) => (
              <div key={i} className="relative h-96 w-full overflow-hidden rounded-lg">
                <Image src={src} alt={horse.name} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="h-fit rounded-[20px] bg-[#f1f6f7] p-9">
            <h1 className="font-sans text-2xl font-bold text-dark">{horse.name}</h1>
            <p className="mt-1 text-sm text-black/50">Ürün kodu: {horse.sku}</p>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-gold">
              {horse.category}
            </p>
            <p className="mt-4 leading-relaxed text-black/60">{productShortDescription}</p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {productFeatureList.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-dark">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#main-content"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-dark px-8 py-3 text-sm font-medium text-dark hover:bg-dark hover:text-white"
            >
              Teklif Al <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="container-page flex flex-col gap-10">
          <div className="rounded-lg border border-black/10 px-6 py-4 text-sm">
            <span className="font-semibold text-dark">Etiketler:</span>{" "}
            <span className="text-black/50">{productTag}</span>
          </div>

          <p className="leading-relaxed text-black/60">{productLongParagraph}</p>

          <div className="grid gap-6 sm:grid-cols-3">
            {productMiniCards.map((card, i) => {
              const Icon = miniCardIcons[i % miniCardIcons.length];
              const highlighted = i === 0;
              return (
                <div
                  key={i}
                  className={
                    highlighted
                      ? "rounded-[20px] bg-gold p-7 text-white"
                      : "rounded-[20px] border border-[#f1f6f7] bg-white p-7"
                  }
                >
                  <div
                    className={
                      highlighted
                        ? "flex h-12 w-12 items-center justify-center rounded-full bg-white/20"
                        : "flex h-12 w-12 items-center justify-center rounded-full border border-gold"
                    }
                  >
                    <Icon className={highlighted ? "h-5 w-5 text-white" : "h-5 w-5 text-gold"} strokeWidth={1.5} />
                  </div>
                  <h3 className={highlighted ? "mt-4 font-sans text-lg font-medium text-white" : "mt-4 font-sans text-lg font-medium text-dark"}>
                    {card.title}
                  </h3>
                  <p className={highlighted ? "mt-1 text-sm text-white/80" : "mt-1 text-sm text-black/50"}>
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="leading-relaxed text-black/60">{productLongParagraph}</p>

          <div className="grid gap-6 sm:grid-cols-4">
            {productIconRow.map((label, i) => {
              const Icon = iconRowIcons[i % iconRowIcons.length];
              return (
                <div key={label} className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <p className="font-sans font-medium text-dark">{label}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            {productChecklist.map((text, i) => (
              <label key={i} className="flex items-start gap-3 text-sm text-black/60">
                <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 rounded-full border-gold text-gold" />
                {text}
              </label>
            ))}
          </div>
        </div>
      </section>

      <ContactNewsletterSection />
    </>
  );
}
