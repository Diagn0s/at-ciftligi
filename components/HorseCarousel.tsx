"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Horse } from "@/lib/data";

export default function HorseCarousel({ horses }: { horses: Horse[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const dragging = useRef(false);
  const moved = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const [ready, setReady] = useState(false);

  // duplicate the list so the loop can reset seamlessly halfway through
  const items = [...horses, ...horses];

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const track = trackRef.current;
    if (!track) return;

    let raf: number;
    const step = () => {
      if (!paused.current && !dragging.current) {
        track.scrollLeft += 0.6;
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [ready]);

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragging.current = true;
    moved.current = false;
    paused.current = true;
    startX.current = e.pageX;
    startScroll.current = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !dragging.current) return;
    const dx = e.pageX - startX.current;
    if (Math.abs(dx) > 4) moved.current = true;
    track.scrollLeft = startScroll.current - dx;
  };

  const endDrag = () => {
    dragging.current = false;
    paused.current = false;
  };

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={() => {
        endDrag();
      }}
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        if (!dragging.current) paused.current = false;
      }}
      className="relative z-10 mt-16 w-full cursor-grab overflow-x-auto active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-max items-center gap-6 px-6 sm:px-10">
        {items.map((horse, i) => (
          <Link
            href={`/tr/atlar/${horse.slug}`}
            key={i}
            draggable={false}
            onClick={(e) => {
              if (moved.current) e.preventDefault();
            }}
            className="group relative h-64 w-52 shrink-0 select-none overflow-hidden rounded-2xl shadow-xl sm:h-[26rem] sm:w-80"
          >
            <Image
              src={horse.image}
              alt={horse.name}
              fill
              draggable={false}
              className="pointer-events-none object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="p-4 font-sans text-lg font-semibold text-gold-light">
                {horse.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
