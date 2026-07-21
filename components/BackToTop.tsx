"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Yukarı çık"
      className="fixed bottom-5 right-5 z-[300] flex h-10 w-10 items-center justify-center rounded-full bg-gold text-dark shadow-lg transition-opacity hover:bg-gold-light"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
