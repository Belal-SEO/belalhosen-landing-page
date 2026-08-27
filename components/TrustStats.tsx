const stats = [
  { value: "2001", label: "Serving Calgary since" },
  { value: "24+", label: "Years of care" },
  { value: "7", label: "Therapy services" },
  { value: "4.9★", label: "545 Google reviews" },
];

export default function TrustStats() {
  return (
    <section className="bg-navy text-[#eaf3f8]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 px-6 py-[clamp(30px,4vw,44px)] text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-heading text-[clamp(28px,3.4vw,38px)] font-extrabold text-lime">
              {stat.value}
            </div>
            <div className="mt-1 text-[13.5px] font-semibold text-[#b9cdd8]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
