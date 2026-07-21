import PageBanner from "@/components/PageBanner";
import HorseCard from "@/components/HorseCard";
import ContactNewsletterSection from "@/components/ContactNewsletterSection";
import { horses, horseCategories } from "@/lib/data";

export const metadata = {
  title: "Atlarımız | B-Horse",
};

export default function HorsesPage() {
  return (
    <>
      <PageBanner title="Atlarımız" crumbs={[{ href: "/en", label: "Anasayfa" }]} />

      <section className="bg-white pb-16">
        <div className="container-page">
          <div className="-mt-1 mb-10 rounded-b-xl bg-dark px-6 py-6 sm:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
              <label className="flex flex-col gap-2 text-sm text-white">
                Kategori
                <select className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm text-white focus:border-gold focus:outline-none">
                  <option>- Tümü -</option>
                  {horseCategories.map((cat) => (
                    <option key={cat} className="text-dark">
                      {cat}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-white">
                İsim
                <input
                  type="text"
                  className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm text-white focus:border-gold focus:outline-none"
                />
              </label>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {horses.map((horse) => (
              <HorseCard key={horse.slug} horse={horse} />
            ))}
          </div>
        </div>
      </section>

      <ContactNewsletterSection />
    </>
  );
}
