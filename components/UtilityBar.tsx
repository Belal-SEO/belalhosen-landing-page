import { phoneDisplay, phoneHref } from "@/lib/data";

export default function UtilityBar() {
  return (
    <div className="bg-navy text-[#e8f2f7] text-[13.5px] font-semibold">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-[22px] gap-y-2.5 px-6 py-[9px]">
        <div className="flex items-center gap-2">
          <span className="tracking-[1px] text-gold">★★★★★</span>
          <span>Rated 4.9 / 5 from 545 Google reviews</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-[22px] gap-y-2.5">
          <span>Direct billing available · Open 6:45am–7:15pm</span>
          <a href={phoneHref} className="font-bold text-lime">
            {phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
