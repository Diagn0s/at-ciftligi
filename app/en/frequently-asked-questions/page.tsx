import PageBanner from "@/components/PageBanner";
import IconPlaceholderRow from "@/components/IconPlaceholderRow";
import FaqAccordion from "@/components/FaqAccordion";
import ContactNewsletterSection from "@/components/ContactNewsletterSection";
import { faqIntro, faqItems } from "@/lib/data";

export const metadata = {
  title: "Sıkça Sorulan Sorular | B-Horse",
};

export default function FaqPage() {
  return (
    <>
      <PageBanner
        title="Sıkça Sorulan Sorular"
        crumbs={[{ href: "/en", label: "Anasayfa" }]}
      />

      <section className="bg-white py-16">
        <div className="container-page mx-auto flex max-w-3xl flex-col gap-10">
          <div className="flex flex-col gap-8">
            <p className="leading-relaxed text-black/60">{faqIntro[0]}</p>
            <IconPlaceholderRow text={faqIntro[1]} />
            <IconPlaceholderRow text={faqIntro[2]} />
            <IconPlaceholderRow text={faqIntro[1]} />
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <ContactNewsletterSection />
    </>
  );
}
