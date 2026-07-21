import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import ContactNewsletterSection from "@/components/ContactNewsletterSection";
import { FacebookIcon, InstagramIcon, YoutubeIcon, MapPinIcon } from "@/components/SocialIcons";
import { siteInfo, teamMembers, author } from "@/lib/data";

export const metadata = {
  title: "İletişim | B-Horse",
};

const infoCardClass = "flex flex-col justify-center rounded-2xl bg-[#f1f6f7] px-6 py-5 text-sm";
const infoCardGoldClass = "flex flex-col justify-center rounded-2xl bg-gold px-6 py-5 text-sm text-white";

export default function ContactsPage() {
  return (
    <>
      <PageBanner title="İletişim" crumbs={[{ href: "/en", label: "Anasayfa" }]} />

      <section className="bg-white py-16">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl lg:h-full">
            <Image src="/images/office1.jpg" alt="Ofis görseli" fill className="object-cover" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className={infoCardGoldClass}>
              <p>{siteInfo.phone}</p>
              <p>{siteInfo.phoneSecondary}</p>
            </div>
            <div className={infoCardClass}>
              <p>{siteInfo.email}</p>
              <p>{siteInfo.emailSales}</p>
            </div>
            <div className={infoCardClass}>
              {siteInfo.hours.map((h) => (
                <p key={h.label}>
                  {h.label}: {h.value}
                </p>
              ))}
            </div>
            <div className={infoCardClass}>
              <p>{siteInfo.address}</p>
            </div>
            <div className={infoCardClass}>
              <p>Vergi No: {siteInfo.taxId}</p>
              <p>IBAN: {siteInfo.bankAccount}</p>
            </div>
            <div className={`${infoCardClass} grid grid-cols-2 gap-2`}>
              <a href={siteInfo.social.facebook} aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href={siteInfo.social.instagram} aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={siteInfo.social.youtube} aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold">
                <YoutubeIcon className="h-4 w-4" />
              </a>
              <a href={siteInfo.social.maps} aria-label="Google Haritalar" className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold">
                <MapPinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="container-page mt-10">
          <h2 className="font-sans text-xl font-semibold text-dark">{siteInfo.legalName}</h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-black/60">
            Sorularınız, talepleriniz ve iş birliği önerileriniz için bize her zaman
            ulaşabilirsiniz. Ekibimiz en kısa sürede size geri dönüş yapacaktır.
          </p>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="container-page">
          <h2 className="text-center font-sans text-2xl font-bold text-dark">
            Ekibimiz
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-2xl bg-[#f1f6f7] p-6 text-center">
                <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full">
                  <Image src={author.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="mt-4 font-sans font-semibold text-dark">
                  {member.name}
                </h3>
                <p className="text-xs text-black/40">Ekip Üyesi</p>
                <p className="mt-1 text-sm text-black/50">{member.bio}</p>
                <p className="mt-1 text-xs font-medium text-gold">{member.email}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactNewsletterSection />
    </>
  );
}
