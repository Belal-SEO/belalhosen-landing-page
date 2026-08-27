import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const siteUrl = "https://www.nosecreekphysiotherapy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Physiotherapy in Calgary North | Nose Creek Physiotherapy",
  description:
    "Serving NW & NE Calgary since 2001. Our physiotherapists, massage & movement specialists get you moving faster and feeling better — book online today.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nose Creek Physiotherapy",
    title: "Physiotherapy in Calgary North | Nose Creek Physiotherapy",
    description:
      "Serving NW & NE Calgary since 2001. Our physiotherapists, massage & movement specialists get you moving faster and feeling better — book online today.",
    images: ["https://www.nosecreekphysiotherapy.com/wp-content/uploads/NoseCreek.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy in Calgary North | Nose Creek Physiotherapy",
    description:
      "Serving NW & NE Calgary since 2001. Our physiotherapists, massage & movement specialists get you moving faster and feeling better — book online today.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physiotherapy",
  name: "Nose Creek Physiotherapy",
  image: "https://www.nosecreekphysiotherapy.com/wp-content/uploads/NoseCreek.png",
  "@id": siteUrl + "/",
  url: siteUrl + "/",
  telephone: "+1-403-295-8590",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8220 Centre St NE #153",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T3K 1J7",
    addressCountry: "CA",
  },
  areaServed: ["Calgary NW", "Calgary NE", "Beddington"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "545",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:45",
      closes: "19:15",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white font-sans text-body antialiased">
        {children}
      </body>
    </html>
  );
}
