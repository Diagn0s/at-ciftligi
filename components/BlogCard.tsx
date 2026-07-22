import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/data";
import { blogExcerptText } from "@/lib/data";

export default function BlogCard({ post }: { post: BlogPost }) {
  const d = new Date(post.date);
  const date = `${d.getDate()} ${d.toLocaleDateString("tr-TR", { month: "long" })} ${d.getFullYear()}`;

  return (
    <article className="grid gap-6 rounded-2xl bg-[#f1f6f7] p-6 sm:grid-cols-[260px_1fr] sm:p-8">
      <Link href={`/tr/blog/${post.slug}`} className="relative h-48 w-full overflow-hidden rounded-xl sm:h-full">
        <Image src="/images/root_bg.jpg" alt="Makale görseli" fill className="object-cover" />
      </Link>
      <div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gold"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-black/50">{date}</p>
        <h3 className="mt-1 font-sans text-3xl font-bold text-dark">
          <Link href={`/tr/blog/${post.slug}`} className="hover:text-gold">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 leading-relaxed text-black/60">{blogExcerptText}</p>
        <Link
          href={`/tr/blog/${post.slug}`}
          className="mt-5 inline-flex items-center rounded-full border border-dark px-8 py-2.5 text-sm font-medium text-dark hover:bg-dark hover:text-white"
        >
          Devamı
        </Link>
      </div>
    </article>
  );
}
