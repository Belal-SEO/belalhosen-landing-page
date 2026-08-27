import { faqs } from "@/lib/data";

export default function FAQSection() {
  return (
    <section className="bg-tint-blue py-[clamp(56px,7vw,96px)]">
      <div className="mx-auto max-w-[820px] px-6">
        <div className="mb-9 text-center">
          <div className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[1.5px] text-sky">
            FAQ
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.5px]">
            Frequently asked questions
          </h2>
        </div>
        <div className="flex flex-col gap-3.5">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border-alt bg-white px-[22px] py-1"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[18px] font-heading text-[17px] font-bold text-ink [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex-none text-2xl text-sky transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5 text-[15px] leading-[1.7] text-slate">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
