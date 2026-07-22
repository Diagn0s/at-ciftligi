import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import ContactNewsletterSection from "@/components/ContactNewsletterSection";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Blog | B-Horse",
};



export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blog" crumbs={[{ href: "/tr", label: "Anasayfa" }]} />

      <section className="bg-white py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="flex flex-col gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            <nav className="mt-14 flex items-center justify-center gap-2 text-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold font-medium text-dark">
                1
              </span>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-black/10 hover:border-gold"
              >
                2
              </Link>
              <Link
                href="#"
                className="flex h-9 items-center rounded-md border border-black/10 px-3 hover:border-gold"
              >
                Sonraki →
              </Link>
              <Link
                href="#"
                className="flex h-9 items-center rounded-md border border-black/10 px-3 hover:border-gold"
              >
                Son »
              </Link>
            </nav>
          </div>

          <BlogSidebar />
        </div>
      </section>

      <ContactNewsletterSection />
    </>
  );
}
