import { bookingUrl, nav } from "@/lib/data";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/96 shadow-[0_1px_12px_rgba(20,60,80,0.05)] backdrop-blur-[6px]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-[18px] px-6 py-3">
        <a
          href="https://www.nosecreekphysiotherapy.com/"
          className="flex flex-none items-center"
        >
          <img
            src="https://www.nosecreekphysiotherapy.com/wp-content/uploads/nose-creek-logo.webp"
            alt="Nose Creek Physiotherapy — Move Faster. Feel Better."
            className="h-[52px] w-auto"
          />
        </a>
        <nav className="flex flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-1.5 font-heading text-[14.5px] font-semibold">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="text-ink hover:text-sky">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-none items-center gap-3">
          <a
            href={bookingUrl}
            className="inline-block rounded-lg bg-green px-5 py-3 font-heading text-[14.5px] font-bold text-white shadow-[0_6px_16px_rgba(111,175,28,0.32)] transition-colors hover:bg-green-dark hover:shadow-[0_4px_12px_rgba(111,175,28,0.4)]"
          >
            Book Online
          </a>
        </div>
      </div>
    </header>
  );
}
