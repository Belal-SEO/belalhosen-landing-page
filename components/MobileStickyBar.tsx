import { bookingUrl, phoneHref } from "@/lib/data";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] hidden border-t border-border-alt bg-white shadow-[0_-4px_20px_rgba(18,60,80,0.1)] max-[720px]:flex">
      <a
        href={phoneHref}
        className="flex-1 py-[15px] text-center font-heading text-[15px] font-bold text-link"
      >
        Call
      </a>
      <a
        href={bookingUrl}
        className="flex-[1.4] bg-green py-[15px] text-center font-heading text-[15px] font-bold text-white"
      >
        Book Online
      </a>
    </div>
  );
}
