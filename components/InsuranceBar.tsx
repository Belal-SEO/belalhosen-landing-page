export default function InsuranceBar() {
  return (
    <section className="bg-tint-green">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-x-7 gap-y-3 px-6 py-5 text-center font-heading text-[15px] font-semibold text-[#3a6412]">
        <span>Insurance-covered physiotherapy</span>
        <span className="text-[#a9c98a]">•</span>
        <span>Extended-health direct billing available</span>
        <span className="text-[#a9c98a]">•</span>
        <span>No doctor referral needed to start</span>
      </div>
    </section>
  );
}
