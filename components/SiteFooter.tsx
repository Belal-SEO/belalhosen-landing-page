import { bookingUrl, phoneDisplay, phoneHref } from "@/lib/data";

const serviceLinks = [
  { href: "https://www.nosecreekphysiotherapy.com/physiotherapy/", label: "Physiotherapy" },
  { href: "https://www.nosecreekphysiotherapy.com/massage-therapy-calgary/", label: "Massage Therapy" },
  { href: "https://www.nosecreekphysiotherapy.com/acupuncture-calgary/", label: "Acupuncture" },
  { href: "https://www.nosecreekphysiotherapy.com/shockwave-therapy-calgary/", label: "Shockwave Therapy" },
  { href: "https://www.nosecreekphysiotherapy.com/custom-orthotics-calgary/", label: "Custom Orthotics" },
];

const clinicLinks = [
  { href: "https://www.nosecreekphysiotherapy.com/about/", label: "About Us" },
  { href: "https://www.nosecreekphysiotherapy.com/team/", label: "Meet the Team" },
  { href: "https://www.nosecreekphysiotherapy.com/reviews/", label: "Client Reviews" },
  { href: "https://www.nosecreekphysiotherapy.com/workshops/", label: "Workshops" },
  { href: "https://www.nosecreekphysiotherapy.com/blog/", label: "Blog" },
];

const startedLinks = [
  { href: "https://www.nosecreekphysiotherapy.com/inquire/", label: "Cost & Availability" },
  { href: "https://www.nosecreekphysiotherapy.com/free-discovery-session/", label: "Free Discovery Session" },
  { href: "https://www.nosecreekphysiotherapy.com/forms/", label: "Patient Forms" },
  { href: "https://www.nosecreekphysiotherapy.com/contact/", label: "Contact Us" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep pb-0 pt-[clamp(44px,5vw,64px)] text-[#a9c1cd] max-[720px]:pb-[72px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[34px] px-6">
        <div>
          <img
            src="https://www.nosecreekphysiotherapy.com/wp-content/uploads/nose-creek-logo.webp"
            alt="Nose Creek Physiotherapy"
            className="mb-4 h-[52px] w-auto opacity-90 brightness-0 invert"
          />
          <p className="text-sm leading-[1.6]">
            8220 Centre St NE #153
            <br />
            Calgary, AB T3K 1J7, Canada
          </p>
          <a href={phoneHref} className="mt-2.5 inline-block font-heading font-bold text-lime">
            {phoneDisplay}
          </a>
        </div>
        <div>
          <div className="mb-3.5 font-heading text-sm font-bold text-white">Services</div>
          <div className="flex flex-col gap-2.5 text-sm">
            {serviceLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-[#a9c1cd] hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-3.5 font-heading text-sm font-bold text-white">Clinic</div>
          <div className="flex flex-col gap-2.5 text-sm">
            {clinicLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-[#a9c1cd] hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-3.5 font-heading text-sm font-bold text-white">Get started</div>
          <div className="flex flex-col gap-2.5 text-sm">
            <a href={bookingUrl} className="font-bold text-lime">
              Book Online
            </a>
            {startedLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-[#a9c1cd] hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-4">
            <a
              href="https://www.facebook.com/calgaryphysiotherapy/"
              className="text-[#a9c1cd] hover:text-white"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/nosecreekphysiotherapy/"
              className="text-[#a9c1cd] hover:text-white"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-[#1c3a47]">
        <div className="mx-auto flex max-w-[1100px] flex-wrap justify-between gap-x-6 gap-y-2.5 px-6 py-5 text-[13px] text-[#7b95a2]">
          <span>© Nose Creek Physiotherapy 2026</span>
          <div className="flex gap-5">
            <a
              href="https://www.nosecreekphysiotherapy.com/privacy-policy/"
              className="text-[#7b95a2] hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.nosecreekphysiotherapy.com/injury-advice-disclaimer/"
              className="text-[#7b95a2] hover:text-white"
            >
              Injury Advice Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
