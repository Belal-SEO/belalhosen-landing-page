import { conditions } from "@/lib/data";

export default function WhatWeTreat() {
  return (
    <section id="treat" className="bg-tint-blue py-[clamp(56px,7vw,96px)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-11 max-w-[680px] text-center">
          <div className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[1.5px] text-green">
            Where does it hurt?
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.5px]">
            What we treat
          </h2>
          <p className="mt-3.5 text-base leading-[1.6] text-slate">
            Find your area of concern below, then book an assessment — our
            team treats a wide range of conditions.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
          {conditions.map((condition, i) => (
            <a
              key={`${condition.label}-${i}`}
              href={condition.href}
              className="rounded-2xl border border-border-alt bg-white px-5 py-6 text-center font-heading font-bold text-ink transition-colors hover:bg-sky hover:text-white"
            >
              {condition.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
