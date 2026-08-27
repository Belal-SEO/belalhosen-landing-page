export default function DecideCTAs() {
  return (
    <section className="py-[clamp(56px,7vw,96px)]">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mx-auto mb-10 max-w-[680px] text-center">
          <h2 className="text-[clamp(26px,3.8vw,42px)] font-extrabold tracking-[-0.5px]">
            Want help deciding if physio is right for you?
          </h2>
          <p className="mt-3.5 text-base leading-[1.6] text-slate">
            Not quite ready to book? We offer two free, no-pressure ways to
            get your questions answered first.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          <div className="rounded-[20px] bg-gradient-to-br from-green to-green-dark p-[34px] text-white">
            <h3 className="text-[22px] font-bold text-white">
              Free Discovery Session
            </h3>
            <p className="mt-3 text-[15px] leading-[1.65] text-[#eaf6da]">
              Unsure if physio will work for you, or had a bad experience in
              the past? Come in, see the clinic and find out for yourself how
              we can help — no treatment, no pressure.
            </p>
            <a
              href="https://www.nosecreekphysiotherapy.com/free-discovery-session/"
              className="mt-5 inline-block rounded-[9px] bg-white px-6 py-[13px] font-heading font-bold text-green-dark hover:bg-[#eef7e2]"
            >
              Apply for a Free Discovery Session →
            </a>
          </div>
          <div className="rounded-[20px] bg-gradient-to-br from-sky to-sky-deep p-[34px] text-white">
            <h3 className="text-[22px] font-bold text-white">
              Talk to a Physio First
            </h3>
            <p className="mt-3 text-[15px] leading-[1.65] text-[#e2f2fa]">
              Have questions and want to be 100% sure we can help before
              booking? Schedule a free call and one of our physios will
              answer everything over the phone.
            </p>
            <a
              href="https://www.nosecreekphysiotherapy.com/telephone-consultation/"
              className="mt-5 inline-block rounded-[9px] bg-white px-6 py-[13px] font-heading font-bold text-sky-deep hover:bg-[#e6f4fb]"
            >
              Arrange a free phone consult →
            </a>
          </div>
        </div>
        <p className="mt-[22px] text-center text-[13px] text-[#8a97a1]">
          There is no treatment given at a discovery session — it&apos;s for
          you to ask questions and for us to confirm whether we can help.
        </p>
        <div className="mt-5 text-center">
          <a
            href="https://www.nosecreekphysiotherapy.com/inquire/"
            className="font-heading font-bold text-link hover:text-link-dark"
          >
            Just want to know cost &amp; availability? Inquire here →
          </a>
        </div>
      </div>
    </section>
  );
}
