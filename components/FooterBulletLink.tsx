import Link from "next/link";
import type { ReactNode } from "react";

export default function FooterBulletLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  const inner = (
    <>
      <span className="absolute left-0 top-[14px] h-2.5 w-2.5 rounded-full bg-white" />
      <span className="absolute left-[18px] top-[18px] h-px w-5 bg-white" />
      {children}
    </>
  );

  const className = "relative block pl-[50px] py-1.5 text-white hover:text-gold-light";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
