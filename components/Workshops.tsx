export default function Workshops() {
  return (
    <section className="bg-[#eef6e4] py-[clamp(44px,5vw,70px)]">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <h2 className="text-[clamp(24px,3.4vw,36px)] font-extrabold text-[#3a6412]">
          Join a free health education or posture workshop
        </h2>
        <p className="mt-3.5 text-base leading-[1.6] text-[#4d6b28]">
          Our workshops are 100% free. Request the dates and times of our
          next event and get practical tips you can start using right away.
        </p>
        <a
          href="https://www.nosecreekphysiotherapy.com/workshops/"
          className="mt-6 inline-block rounded-[10px] bg-green px-[30px] py-[15px] font-heading text-base font-bold text-white shadow-[0_10px_24px_rgba(111,175,28,0.28)] hover:bg-green-dark"
        >
          Request Dates &amp; Times →
        </a>
      </div>
    </section>
  );
}
