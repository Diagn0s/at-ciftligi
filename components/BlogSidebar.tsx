import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";
import NewsletterForm from "./NewsletterForm";
import { author, blogCategories } from "@/lib/data";

export default function BlogSidebar() {
  return (
    <aside className="flex flex-col gap-10">
      <div className="rounded-2xl bg-[#f1f6f7] p-6 text-center">
        <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full">
          <Image src={author.image} alt={author.name} fill className="object-cover" />
        </div>
        <h3 className="mt-4 font-sans text-lg font-semibold text-dark">
          Yazar: {author.name}
        </h3>
        <p className="text-sm text-black/50">{author.role}</p>
        <Link
          href="/en/about-us"
          className="mt-4 inline-flex items-center rounded-full border border-dark px-6 py-2 text-sm font-medium text-dark hover:bg-dark hover:text-white"
        >
          Tanıtım
        </Link>
      </div>

      <div className="rounded-2xl bg-[#f1f6f7] p-6">
        <h3 className="font-sans text-lg font-semibold text-dark">Kategoriler</h3>
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          {blogCategories.map((cat) => (
            <li key={cat}>
              <Link href="/en/blog" className="text-gold hover:text-dark">
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-[#f1f6f7] p-6">
        <h3 className="font-sans text-lg font-semibold text-dark">İletişim</h3>
        <div className="mt-4">
          <ContactForm />
        </div>
      </div>

      <div className="rounded-2xl bg-[#f1f6f7] p-6">
        <h3 className="font-sans text-lg font-semibold text-dark">Bülten</h3>
        <div className="mt-4">
          <NewsletterForm />
        </div>
      </div>
    </aside>
  );
}
