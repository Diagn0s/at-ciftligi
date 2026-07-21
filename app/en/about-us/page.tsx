import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import IconPlaceholderRow from "@/components/IconPlaceholderRow";
import ContactNewsletterSection from "@/components/ContactNewsletterSection";
import {
  stats,
  partners,
  aboutIntro,
  aboutNumbersIntro,
  aboutGalleryImages,
  aboutPartnersIntro,
} from "@/lib/data";

export const metadata = {
  title: "Hakkımızda | B-Horse",
};

export default function AboutUsPage() {
  return (
    <>
      <PageBanner title="Hakkımızda" crumbs={[{ href: "/en", label: "Anasayfa" }]} />

      <section className="bg-white py-16">
        <div className="container-page mx-auto flex max-w-3xl flex-col gap-8">
          <p className="leading-relaxed text-black/60">{aboutIntro[0]}</p>
          <IconPlaceholderRow text={aboutIntro[1]} />
          <IconPlaceholderRow text={aboutIntro[2]} />
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-page text-center">
          <h2 className="font-sans text-4xl font-bold text-dark sm:text-5xl lg:text-[4.4rem]">
            Bu rakamlar ne anlama geliyor?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-black/60">
            {aboutNumbersIntro}
          </p>
          <div className="mt-16 grid gap-10 text-left sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="font-sans text-4xl font-medium text-dark">
                  {stat.value}
                  <span className="text-gold">{stat.suffix}</span>
                </p>
                <div className="mt-3 h-1 w-20 bg-white" />
                <p className="mt-4 font-sans font-medium text-gold">{stat.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-black/50">{stat.label2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20">
        <div className="container-page grid grid-cols-2 gap-4 sm:grid-cols-4">
          {aboutGalleryImages.map((src) => (
            <div key={src} className="relative h-56 overflow-hidden rounded-lg">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page text-center">
          <h2 className="font-sans text-4xl font-bold text-dark sm:text-5xl lg:text-[4.4rem]">
            Uzun soluklu iş ortaklarımız
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-black/60">
            {aboutPartnersIntro}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-lg font-semibold tracking-wide text-black/30"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactNewsletterSection />
    </>
  );
}
