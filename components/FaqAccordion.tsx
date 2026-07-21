"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-5">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="rounded-2xl bg-[#f1f6f7] px-7 py-6">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center gap-4 text-left"
            >
              {isOpen ? (
                <Minus className="h-5 w-5 shrink-0 text-gold" />
              ) : (
                <Plus className="h-5 w-5 shrink-0 text-gold" />
              )}
              <span className={`font-sans font-semibold ${isOpen ? "text-gold" : "text-dark"}`}>
                {item.q}
              </span>
            </button>
            {isOpen && (
              <p className="mt-3 pl-9 leading-relaxed text-black/60">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
