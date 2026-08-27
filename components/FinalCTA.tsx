import { bookingUrl, phoneDisplay, phoneHref } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-sky to-sky-deep text-white">
      <div className="mx-auto max-w-[900px] px-6 py-[clamp(48px,6vw,80px)] text-center">
        <h2 className="text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.12] tracking-[-0.5px] text-white">
          Ready to move faster and feel better?
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-[1.6] text-[#e2f2fa]">
          Book your appointment online in under two minutes, or give us a
          call — we&apos;d love to help you get back to the life you
          deserve.
        </p>
        <div className="mt-[30px] flex flex-wrap justify-center gap-3.5">
          <a
            href={bookingUrl}
            className="rounded-[10px] bg-lime px-[30px] py-4 font-heading text-[17px] font-bold text-navy shadow-[0_12px_28px_rgba(0,0,0,0.18)] hover:bg-[#7ab52f]"
          >
            Book Your Treatment Online
          </a>
          <a
            href={phoneHref}
            className="rounded-[10px] border border-white/50 bg-white/[0.14] px-7 py-[15px] font-heading text-[17px] font-bold text-white hover:bg-white/[0.24]"
          >
            Call {phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
