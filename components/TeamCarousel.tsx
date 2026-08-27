"use client";

import { useRef } from "react";
import { team } from "@/lib/data";

export default function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(690, el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="bg-white py-[clamp(48px,6vw,84px)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[1.5px] text-sky">
              Meet the team
            </div>
            <h2 className="text-[clamp(26px,3.6vw,42px)] font-extrabold tracking-[-0.5px]">
              The rest of the Nose Creek team
            </h2>
          </div>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous team members"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#d7e6ef] bg-white font-heading text-[22px] leading-none text-link hover:border-sky"
            >
              &#8249;
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next team members"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#d7e6ef] bg-white font-heading text-[22px] leading-none text-link hover:border-sky"
            >
              &#8250;
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-5 overflow-x-auto px-1 pb-3 pt-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {team.map((member) => (
            <a
              key={member.name}
              href={member.href}
              className="flex-none scroll-snap-align-start hover:opacity-[0.94]"
              style={{ flex: "0 0 230px", scrollSnapAlign: "start" }}
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_8px_24px_rgba(18,60,80,0.08)]">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="aspect-[3/4] w-full bg-[#eef3f6] object-cover object-top"
                />
                <div className="px-3 py-4 text-center">
                  <div className="font-heading text-[17px] font-bold text-ink">
                    {member.name}
                  </div>
                  <div className="mt-1 text-[13px] leading-[1.35] text-slate">
                    {member.role}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-[26px] text-center">
          <a
            href="https://www.nosecreekphysiotherapy.com/team/"
            className="inline-block rounded-[9px] bg-sky px-[26px] py-[13px] font-heading font-bold text-white hover:bg-sky-dark"
          >
            View the full team &#8594;
          </a>
        </div>
      </div>
    </section>
  );
}
