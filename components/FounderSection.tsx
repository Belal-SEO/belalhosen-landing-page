export default function FounderSection() {
  return (
    <section className="bg-navy py-[clamp(56px,7vw,96px)] text-[#eaf3f8]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-center gap-x-[clamp(32px,4vw,56px)] gap-y-[clamp(32px,4vw,56px)] px-6">
        <div className="text-center">
          <img
            src="https://www.nosecreekphysiotherapy.com/wp-content/uploads/blair-2.jpg"
            alt="Blair Schachterle, President and Physiotherapist"
            className="mx-auto aspect-square w-[min(300px,80%)] rounded-full border-[6px] border-sky object-cover shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          />
        </div>
        <div>
          <div className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[1.5px] text-lime">
            Meet the founder
          </div>
          <h2 className="text-[clamp(26px,3.6vw,40px)] font-extrabold tracking-[-0.5px] text-white">
            Blair Schachterle
          </h2>
          <p className="mt-1.5 text-sm font-semibold text-[#9fc9d9]">
            President — BScPT, Dip Manip PT, Dip Sport PT, FCAMPT, CGIMS
          </p>
          <p className="mt-4 text-[15.5px] leading-[1.7] text-[#cbdbe4]">
            Blair has been a physiotherapist at Nose Creek since 2001. He
            graduated from the University of Alberta with a BScPT in 1992,
            focusing on Orthopaedic Manual Therapy and Sport Therapy. He
            completed his Sport Therapy Diploma in 1997 and his Advanced
            Manual &amp; Manipulative Diploma in 1998, and previously served
            six years as Executive Chair of the Canadian Academy of
            Manipulative Therapy (CAMPT).
          </p>
          <a
            href="https://www.nosecreekphysiotherapy.com/team/"
            className="mt-[22px] inline-block rounded-[9px] bg-sky px-6 py-[13px] font-heading font-bold text-white hover:bg-sky-dark"
          >
            Meet our team →
          </a>
        </div>
      </div>
    </section>
  );
}
