import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, LineChart, Lightbulb, CreditCard, Target, Wind, Monitor } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";
import ContactNewsletterSection from "@/components/ContactNewsletterSection";
import {
  horses,
  stats,
  homeServiceFeatures,
  siteInfo,
  homeHorsesIntro,
  homeWhatWeDoText,
  homeServicesIntro,
  homeServicesOutro,
} from "@/lib/data";

const serviceIcons = [LineChart, Lightbulb, CreditCard, Target, Wind, Monitor];

export default function HomePage() {
  const galleryHorses = horses;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[720px] items-center overflow-hidden bg-dark text-white">
        <Image src="/images/hero.jpg" alt="" fill priority className="object-cover" />

        <div className="container-page relative z-10 w-full py-32">
          <div className="relative mx-auto aspect-[1950/1303] w-full max-w-3xl">
            <Image src="/images/borse_first.png" alt="B-Horse" fill className="object-contain" priority />
          </div>
          <p className="font-script -mt-8 text-center text-3xl text-gold-light sm:-mt-14 sm:text-4xl">
            Yardımcı olabilir miyiz?
          </p>
        </div>

        <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-5 sm:flex">
          <a href={siteInfo.social.facebook} aria-label="Facebook" className="hover:text-gold-light">
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a href={siteInfo.social.instagram} aria-label="Instagram" className="hover:text-gold-light">
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a href={siteInfo.social.linkedin} aria-label="LinkedIn" className="hover:text-gold-light">
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="container-page absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-10 text-sm">
          <Link href="/en/all-products" className="flex items-center gap-2 font-medium hover:text-gold-light">
            <ArrowLeft className="h-4 w-4" /> Atlarımız
          </Link>
          <span className="h-2.5 w-2.5 rounded-full bg-gold-light" />
          <Link href="/en/services" className="flex items-center gap-2 font-medium hover:text-gold-light">
            Hizmetler <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Atlarımıza göz atın! */}
      <section className="bg-white py-24">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-center">
            <SectionHeading goldWord="Atlarımıza" darkWord="göz atın!" script="Tüm galeri" align="center" />
            <p className="mt-6 leading-relaxed text-black/60">{homeHorsesIntro}</p>
            <Link
              href="/en/all-products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-dark px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-dark-soft"
            >
              Tüm atları görüntüle <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {galleryHorses.map((horse, i) => (
              <div
                key={horse.slug}
                className={`relative overflow-hidden rounded-lg ${i === 0 ? "col-span-2 h-64" : "h-48"}`}
              >
                <Image src={horse.image} alt={horse.name} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aslında ne yapıyoruz */}
      <section className="bg-dark py-24 text-white">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <Image src="/images/headerhorse.png" alt="" fill className="object-cover object-top" />
            </div>
          </div>
          <div className="order-1 text-center lg:order-2">
            <SectionHeading goldWord="Aslında" darkWord="ne yapıyoruz" script="Biz böyleyiz" light align="center" />
            <p className="mt-6 leading-relaxed text-white/60">{homeWhatWeDoText}</p>
            <div className="mt-8 flex items-center justify-center gap-10 text-sm">
              <Link href="/en/about-us" className="flex items-center gap-2 font-medium hover:text-gold-light">
                <ArrowLeft className="h-4 w-4" /> Hakkımızda
              </Link>
              <span className="h-2.5 w-2.5 rounded-full bg-gold-light" />
              <Link href="/en/contacts" className="flex items-center gap-2 font-medium hover:text-gold-light">
                Referanslarımız <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rakamlarla biz */}
      <section className="bg-white py-24">
        <div className="container-page">
          <SectionHeading goldWord="Rakamlarla" darkWord="biz" script="Rakamlar bizim adımıza konuşuyor" align="center" />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="font-sans text-4xl font-medium text-dark">
                  {stat.value}
                  <span className="text-gold">{stat.suffix}</span>
                </p>
                <div className="mt-3 h-1 w-20 bg-cream" />
                <p className="mt-4 font-sans font-medium text-gold">{stat.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-black/50">{stat.label2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz hakkında */}
      <section className="bg-cream py-24">
        <div className="container-page">
          <SectionHeading goldWord="Hizmetlerimiz" darkWord="hakkında" script="Çözümlerimiz" align="center" />
          <p className="mt-8 leading-relaxed text-black/60">{homeServicesIntro}</p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {homeServiceFeatures.map((feature, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <div
                  key={i}
                  className="rounded-[20px] border border-[#f1f6f7] bg-white p-9 shadow-sm"
                >
                  <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full border border-gold">
                    <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-sans text-2xl font-medium text-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-black/60">{feature.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 shrink-0 rounded-full border border-gold" />
              <p className="leading-relaxed text-black/60">{homeServicesOutro}</p>
            </div>
            <Link
              href="/en/services"
              className="flex shrink-0 items-center gap-4 font-sans font-medium text-gold hover:text-dark"
            >
              <span className="h-px w-8 bg-gold" /> Tüm hizmetler
            </Link>
          </div>
        </div>
      </section>

      <ContactNewsletterSection />
    </>
  );
}
