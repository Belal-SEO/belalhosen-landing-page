import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-tint-blue py-[clamp(56px,7vw,96px)]">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mx-auto mb-11 max-w-[680px] text-center">
          <div className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[1.5px] text-green">
            Real patient stories
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.5px]">
            What people just like you are saying
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[26px]">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`rounded-[18px] border-t-4 bg-white p-[30px] shadow-[0_10px_30px_rgba(18,60,80,0.07)] ${t.accent}`}
            >
              <div className="mb-3.5 text-lg tracking-[2px] text-gold">★★★★★</div>
              <p className="text-base leading-[1.7] text-[#3a444d]">&quot;{t.quote}&quot;</p>
              <div className="mt-[22px] flex items-center gap-3.5">
                <img
                  src={t.image}
                  alt={`${t.name}, patient`}
                  className="h-[52px] w-[52px] rounded-full object-cover"
                />
                <div>
                  <div className="font-heading font-bold text-ink">{t.name}</div>
                  <div className="text-[13px] text-[#7a848d]">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[34px] text-center">
          <a
            href="https://www.nosecreekphysiotherapy.com/reviews/"
            className="inline-flex items-center gap-2.5 rounded-full border border-[#d7e6ef] bg-white px-[22px] py-3 font-heading font-bold text-ink hover:border-sky"
          >
            <span className="text-gold">★</span> 4.9 from 545 Google reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
