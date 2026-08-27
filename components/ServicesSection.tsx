import type { ReactNode } from "react";

type Service = {
  href: string | null;
  iconBg: string;
  iconColor: string;
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
  ctaMuted?: boolean;
};

const services: Service[] = [
  {
    href: "https://www.nosecreekphysiotherapy.com/physiotherapy/",
    iconBg: "bg-[#e9f5fb]",
    iconColor: "#1c9fd8",
    icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
    title: "Physiotherapy",
    description:
      "Expert, hands-on physio to restore mobility, strength and balance — while minimizing your dependence on medication.",
    cta: "Learn more →",
  },
  {
    href: "https://www.nosecreekphysiotherapy.com/massage-therapy-calgary/",
    iconBg: "bg-[#eef6e4]",
    iconColor: "#6faf1c",
    icon: <path d="M12 21s-6-4.35-9-8.5C1.5 10 2 6.5 5 5.5S10 7 12 9c2-2 4-4.5 7-3.5s3.5 4.5 2 7c-3 4.15-9 8.5-9 8.5z" />,
    title: "Massage Therapy",
    description:
      "Therapeutic massage that soothes muscles, promotes recovery and leaves you refreshed and revitalized.",
    cta: "Learn more →",
  },
  {
    href: "https://www.nosecreekphysiotherapy.com/shockwave-therapy-calgary/",
    iconBg: "bg-[#e9f5fb]",
    iconColor: "#1c9fd8",
    icon: <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    title: "Shockwave Therapy",
    description:
      "State-of-the-art, non-invasive treatment that accelerates healing by targeting the root cause of persistent pain.",
    cta: "Learn more →",
  },
  {
    href: "https://www.nosecreekphysiotherapy.com/acupuncture-calgary/",
    iconBg: "bg-[#eef6e4]",
    iconColor: "#6faf1c",
    icon: (
      <>
        <line x1="4" y1="20" x2="20" y2="4" />
        <path d="M14 4h6v6" />
        <circle cx="7" cy="17" r="2" />
      </>
    ),
    title: "Acupuncture",
    description:
      "Certified practitioners stimulate specific points to balance energy and ease a wide range of ailments.",
    cta: "Learn more →",
  },
  {
    href: "https://www.nosecreekphysiotherapy.com/custom-orthotics-calgary/",
    iconBg: "bg-[#e9f5fb]",
    iconColor: "#1c9fd8",
    icon: (
      <>
        <path d="M4 16c0-3 1-5 4-5s3 2 6 2 4-1 4 2v2a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" />
        <path d="M8 11V5a2 2 0 0 1 4 0" />
      </>
    ),
    title: "Custom Orthotics",
    description:
      "Orthotics designed to align and support your feet — tailored to your unique needs for lasting comfort.",
    cta: "Learn more →",
  },
  {
    href: "https://www.nosecreekphysiotherapy.com/spring-loaded-knee-brace/",
    iconBg: "bg-[#eef6e4]",
    iconColor: "#6faf1c",
    icon: (
      <>
        <path d="M9 3v5l-2 3 2 3v7" />
        <path d="M15 3v5l2 3-2 3v7" />
        <line x1="9" y1="11" x2="15" y2="11" />
      </>
    ),
    title: "Knee Bracing",
    description:
      "Premium knee braces to protect, support and stabilize — whether recovering from injury or preventing one.",
    cta: "Learn more →",
  },
  {
    href: null,
    iconBg: "bg-[#e9f5fb]",
    iconColor: "#1c9fd8",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
      </>
    ),
    title: "Pelvic Health",
    description:
      "A dedicated women's health program — because caring for your body supports the wellbeing of your whole family.",
    cta: "Ask us at your visit",
    ctaMuted: true,
  },
];

function ServiceIcon({ color, children }: { color: string; children: ReactNode }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const body = (
    <>
      <div
        className={`mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-xl ${service.iconBg}`}
      >
        <ServiceIcon color={service.iconColor}>{service.icon}</ServiceIcon>
      </div>
      <h3 className="mb-2 text-xl font-bold text-ink">{service.title}</h3>
      <p className="text-[14.5px] leading-[1.6] text-slate">{service.description}</p>
      <span
        className={`mt-3.5 inline-block text-sm font-bold ${
          service.ctaMuted ? "text-[#8a97a1]" : "text-link"
        }`}
      >
        {service.cta}
      </span>
    </>
  );

  const className =
    "block rounded-2xl border border-border bg-white p-7 shadow-[0_6px_20px_rgba(18,60,80,0.05)] transition-all hover:border-sky hover:shadow-[0_14px_34px_rgba(18,60,80,0.12)]";

  if (!service.href) {
    return <div className={className}>{body}</div>;
  }

  return (
    <a href={service.href} className={className}>
      {body}
    </a>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-[clamp(56px,7vw,96px)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-11 max-w-[680px] text-center">
          <div className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[1.5px] text-sky">
            Our exceptional services in NE Calgary
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.5px]">
            Everything you need to move well, under one roof
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px]">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
