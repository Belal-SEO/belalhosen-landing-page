import { bookingUrl, phoneDisplay, phoneHref } from "@/lib/data";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-tint-blue to-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-x-[clamp(32px,4vw,56px)] gap-y-[clamp(32px,4vw,56px)] px-6 py-[clamp(40px,6vw,80px)]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-tint-green px-3.5 py-[7px] font-heading text-[13px] font-bold text-green-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-green" />
            Trusted in Calgary North since 2001
          </div>
          <h1 className="font-heading font-extrabold leading-[1.1] tracking-[-0.5px]">
            <span className="mb-1.5 block text-[clamp(20px,2.4vw,28px)] text-ink">
              Physiotherapy in Calgary North
            </span>
            <span className="block text-[clamp(30px,4.2vw,50px)] leading-[1.08] text-sky">
              Restore your mobility, strength &amp; balance naturally.
            </span>
          </h1>
          <p className="mt-5 max-w-[560px] text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-muted">
            Serving NW &amp; NE Calgary. Our team of physiotherapists, massage
            &amp; movement specialists gets you moving faster and feeling
            better — with less dependence on medication, so you can get back
            to the life you deserve.
          </p>
          <div className="mt-[30px] flex flex-wrap gap-3.5">
            <a
              href={bookingUrl}
              className="inline-flex items-center gap-2.5 rounded-[10px] bg-green px-7 py-4 font-heading text-[16.5px] font-bold text-white shadow-[0_10px_24px_rgba(111,175,28,0.32)] hover:bg-green-dark"
            >
              Book Your Treatment Online
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2.5 rounded-[10px] border-2 border-[#cfe6f2] bg-white px-[26px] py-3.5 font-heading text-[16.5px] font-bold text-link hover:border-sky hover:text-link-dark"
            >
              Call {phoneDisplay}
            </a>
          </div>
          <div className="mt-[26px] flex flex-wrap gap-x-[22px] gap-y-2 text-sm font-semibold text-slate">
            <span>✓ Extended-health direct billing</span>
            <span>✓ Open 7 days / evenings &amp; Saturdays</span>
            <span>✓ FCAMPT-certified team</span>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://www.nosecreekphysiotherapy.com/wp-content/uploads/reception-desktop.jpg"
            alt="Reception at Nose Creek Physiotherapy in NE Calgary"
            className="aspect-[4/3] w-full rounded-[18px] object-cover shadow-[0_24px_60px_rgba(18,60,80,0.18)]"
          />
          <div className="absolute -bottom-[22px] left-[18px] flex items-center gap-3 rounded-2xl bg-white px-[18px] py-3.5 shadow-[0_14px_34px_rgba(18,60,80,0.16)]">
            <div className="font-heading text-[30px] font-extrabold leading-none text-ink">
              4.9<span className="text-base text-gold"> ★</span>
            </div>
            <div className="text-[12.5px] font-semibold leading-[1.3] text-slate">
              545 Google
              <br />
              reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
