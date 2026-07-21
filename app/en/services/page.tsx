import PageBanner from "@/components/PageBanner";
import ServiceCard from "@/components/ServiceCard";
import ContactNewsletterSection from "@/components/ContactNewsletterSection";
import { services } from "@/lib/data";

export const metadata = {
  title: "Hizmetler | B-Horse",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Hizmetler" crumbs={[{ href: "/en", label: "Anasayfa" }]} />

      <section className="bg-white py-16">
        <div className="container-page flex flex-col gap-20">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <ContactNewsletterSection />
    </>
  );
}
