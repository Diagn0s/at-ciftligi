import { notFound } from "next/navigation";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import BlogSidebar from "@/components/BlogSidebar";
import ContactNewsletterSection from "@/components/ContactNewsletterSection";
import { blogPosts, blogPostBody, author } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return { title: `${post?.title ?? "Blog yazısı"} | B-Horse` };
}

const shareLabels = ["Facebook", "Messenger", "LinkedIn", "WhatsApp", "Telegram", "Bağlantıyı Kopyala", "E-posta"];

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner
        title={post.title}
        crumbs={[{ href: "/tr", label: "Anasayfa" }, { href: "/tr/blog", label: "Blog" }]}
      />

      <section className="bg-white py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px]">
          <article>
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <Image src="/images/root_bg.jpg" alt="Makale görseli" fill className="object-cover" />
            </div>

            <div className="mt-6 flex flex-col gap-5">
              {blogPostBody.map((p, i) => (
                <p key={i} className="leading-relaxed text-black/60">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-cream px-3 py-1 text-xs text-dark/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-black/10 pt-6 text-sm text-black/50">
              <span className="font-medium text-dark">Paylaş</span>
              {shareLabels.map((label) => (
                <span key={label} className="hover:text-gold">
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-lg border border-black/10 p-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                <Image src={author.image} alt={author.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-sans font-semibold text-dark">Yazar: {author.name}</p>
                <p className="text-sm text-black/50">{author.role}</p>
              </div>
            </div>
          </article>

          <BlogSidebar />
        </div>
      </section>

      <ContactNewsletterSection />
    </>
  );
}
