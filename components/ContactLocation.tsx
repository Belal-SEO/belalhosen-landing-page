import { phoneDisplay, phoneHref } from "@/lib/data";

export default function ContactLocation() {
  return (
    <section id="contact" className="py-[clamp(56px,7vw,96px)]">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mx-auto mb-11 max-w-[680px] text-center">
          <div className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[1.5px] text-green">
            Visit us
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.5px]">
            One clinic, ideally located in Calgary
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-stretch gap-7">
          <div className="min-h-[340px] overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(18,60,80,0.1)]">
            <iframe
              title="Map to Nose Creek Physiotherapy"
              src="https://www.google.com/maps?q=Nose%20Creek%20Physiotherapy%208220%20Centre%20St%20NE%20Suite%20153%2C%20Calgary%2C%20AB%20T3K%201J7&output=embed"
              className="h-full min-h-[340px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col gap-4.5 rounded-2xl bg-navy p-[clamp(26px,3vw,38px)] text-[#eaf3f8]">
            <div>
              <h3 className="text-[22px] font-bold text-white">
                Nose Creek Physiotherapy
              </h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#cbdbe4]">
                8220 Centre St NE #153
                <br />
                Calgary, AB T3K 1J7, Canada
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={phoneHref}
                className="rounded-[9px] bg-lime px-5 py-3 font-heading font-bold text-navy"
              >
                Call {phoneDisplay}
              </a>
              <a
                href="https://www.google.com/maps/dir//Nose+Creek+Physiotherapy"
                className="rounded-[9px] border border-[#3d5b68] px-5 py-3 font-heading font-bold text-[#eaf3f8] hover:border-lime"
              >
                Get directions
              </a>
            </div>
            <div className="border-t border-[#244452] pt-4">
              <div className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[1px] text-lime">
                Opening hours
              </div>
              <div className="flex flex-col gap-1.5 text-[14.5px]">
                <div className="flex justify-between gap-4">
                  <span className="text-[#b9cdd8]">Monday – Friday</span>
                  <span className="font-semibold text-white">6:45 AM – 7:15 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#b9cdd8]">Saturday</span>
                  <span className="font-semibold text-white">8:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#b9cdd8]">Sunday</span>
                  <span className="font-semibold text-white">Closed</span>
                </div>
              </div>
            </div>
            <p className="mt-0.5 text-[13px] text-[#9fc9d9]">
              Insurance-covered physiotherapy · Extended-health direct
              billing available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
