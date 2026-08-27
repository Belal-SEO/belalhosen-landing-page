import { credentials } from "@/lib/data";

export default function Credentials() {
  return (
    <section className="py-[clamp(40px,5vw,64px)]">
      <div className="mx-auto max-w-[1100px] px-6">
        <p className="mb-7 text-center font-heading text-[13px] font-semibold uppercase tracking-[1px] text-[#8a97a1]">
          Associations &amp; credentials
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-11 gap-y-7">
          {credentials.map((cred) => (
            <img
              key={cred.alt}
              src={cred.src}
              alt={cred.alt}
              className={`w-auto ${cred.height} object-contain opacity-85`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
