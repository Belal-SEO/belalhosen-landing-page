export default function AboutClinic() {
  return (
    <section className="py-[clamp(56px,7vw,96px)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-x-[clamp(32px,4vw,56px)] gap-y-[clamp(32px,4vw,56px)] px-6">
        <div className="grid grid-cols-2 gap-3.5">
          <img
            src="https://www.nosecreekphysiotherapy.com/wp-content/uploads/clinic-mobile.jpg"
            alt="Nose Creek Physiotherapy clinic entrance"
            className="row-span-2 aspect-[3/4] w-full rounded-2xl object-cover"
          />
          <img
            src="https://www.nosecreekphysiotherapy.com/wp-content/uploads/reception-three.jpg"
            alt="Treatment area at Nose Creek Physiotherapy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <img
            src="https://www.nosecreekphysiotherapy.com/wp-content/uploads/reception-four.jpg"
            alt="Reception desk at Nose Creek Physiotherapy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
        <div>
          <div className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[1.5px] text-sky">
            About Nose Creek Physiotherapy
          </div>
          <h2 className="text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.15] tracking-[-0.5px]">
            A Calgary clinic built on 20+ years of trust
          </h2>
          <p className="mt-4.5 text-base leading-[1.7] text-muted">
            Blair Schachterle founded Nose Creek Physiotherapy in 2001. The
            physio and massage therapy clinic first opened in Calgary&apos;s
            Beddington Co-op Shopping Mall with four staff members. The
            response was overwhelming, and it later expanded to 2,600 square
            feet with five physiotherapists and two massage therapists. In
            2018, we expanded again — taking on more space to meet the demand
            for our service.
          </p>
          <a
            href="https://www.nosecreekphysiotherapy.com/about/"
            className="mt-[22px] inline-block font-heading font-bold text-link hover:text-link-dark"
          >
            Follow our story →
          </a>
        </div>
      </div>
    </section>
  );
}
