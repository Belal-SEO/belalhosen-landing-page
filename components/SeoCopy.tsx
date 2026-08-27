const areas = [
  { href: "https://www.nosecreekphysiotherapy.com/service-areas/", label: "Calgary NW" },
  { href: "https://www.nosecreekphysiotherapy.com/service-areas/", label: "Calgary NE" },
  { href: "https://www.nosecreekphysiotherapy.com/beddington/", label: "Beddington" },
  { href: "https://www.nosecreekphysiotherapy.com/service-areas/", label: "Thorncliffe & more" },
];

export default function SeoCopy() {
  return (
    <section className="py-[clamp(56px,7vw,90px)]">
      <div className="mx-auto max-w-[820px] px-6 text-center">
        <h2 className="text-[clamp(26px,3.6vw,40px)] font-extrabold tracking-[-0.5px]">
          Looking for a physiotherapist near you in Calgary?
        </h2>
        <p className="mt-5 text-[16.5px] leading-[1.75] text-muted">
          Searching for &quot;physiotherapy near me&quot; in Calgary, AB can
          feel overwhelming — you&apos;ve reached the right place. However
          big or small your issue feels, our experienced physiotherapists
          are eager to get started, and we take pride in every service we
          offer.
        </p>
        <p className="mt-4 text-[16.5px] leading-[1.75] text-muted">
          Nose Creek Physiotherapy strives to provide unequalled patient care
          throughout every stage of your therapy — from your first
          evaluation to your final billing. Every client is valuable to us,
          and we treat you that way from the moment you step through our
          doors.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-[14.5px] font-semibold">
          {areas.map((area) => (
            <a
              key={area.label}
              href={area.href}
              className="rounded-full border border-[#d7e6ef] bg-tint-blue px-[18px] py-2.5 text-ink"
            >
              {area.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
