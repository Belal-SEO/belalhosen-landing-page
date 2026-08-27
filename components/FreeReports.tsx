import { freeReports } from "@/lib/data";

export default function FreeReports() {
  return (
    <section className="bg-tint-blue py-[clamp(56px,7vw,96px)]">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mx-auto mb-10 max-w-[680px] text-center">
          <div className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[1.5px] text-green">
            Free advice reports
          </div>
          <h2 className="text-[clamp(26px,3.6vw,42px)] font-extrabold tracking-[-0.5px]">
            Written by Blair Schachterle
          </h2>
          <p className="mt-3.5 text-base leading-[1.6] text-slate">
            Download a free guide for your area of concern — practical advice
            you can start using right away.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
          {freeReports.map((report) => (
            <a
              key={report.label}
              href={report.href}
              className="overflow-hidden rounded-2xl border border-border-alt bg-white shadow-[0_6px_20px_rgba(18,60,80,0.06)] transition-shadow hover:shadow-[0_14px_30px_rgba(18,60,80,0.14)]"
            >
              <div
                className={`flex aspect-square flex-col items-center justify-center gap-2.5 bg-gradient-to-br ${report.gradient} p-6 text-center`}
              >
                <span className="font-heading text-[11px] font-semibold uppercase tracking-[1.5px] text-slate">
                  Free Report
                </span>
                <span
                  className="font-heading text-[22px] font-extrabold leading-[1.1]"
                  style={{ color: report.titleColor }}
                >
                  {report.title}
                  <br />
                  {report.titleLine2}
                </span>
                <span className="text-xs text-[#7a848d]">{report.subtitle}</span>
              </div>
              <div className="p-4 text-center font-heading font-bold text-sky">
                {report.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
