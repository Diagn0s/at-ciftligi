import { notFound } from "next/navigation";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import ContactNewsletterSection from "@/components/ContactNewsletterSection";
import { services, serviceDetailParagraphs } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return { title: `${service?.title ?? "Hizmet"} | B-Horse` };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageBanner
        title={service.title}
        crumbs={[
          { href: "/en", label: "Anasayfa" },
          { href: "/en/services", label: "Hizmetler" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            <Image src="/images/root_bg.jpg" alt="Hizmet görseli" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            {serviceDetailParagraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-black/60">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <ContactNewsletterSection />
    </>
  );
}
