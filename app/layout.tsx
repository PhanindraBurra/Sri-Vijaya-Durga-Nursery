import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Vijaya Durga Nursery | Leading Wholesale Plant Nursery in India",
  description:
    "Established in 1948 in Kadiyapulanka, Andhra Pradesh. India's trusted wholesale plant supplier for Fruit Plants, Avenue Trees, Ornamental Greens, Palms, and Landscaping.",
  keywords: [
    "Sri Vijaya Durga Nursery",
    "Kadiyapulanka Nursery",
    "Wholesale Plant Nursery Andhra Pradesh",
    "Fruit Plants Bulk Supplier",
    "Avenue Trees India",
    "Landscaping Plants Rajahmundry",
  ],
  authors: [{ name: "Sri Vijaya Durga Nursery" }],
  openGraph: {
    title: "Sri Vijaya Durga Nursery | Premium Wholesale Plant Nursery",
    description:
      "75+ Years of Excellence in Plant Propagation & Pan-India Bulk Supply.",
    url: "https://srivijayadurganursery.in",
    siteName: "Sri Vijaya Durga Nursery",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Vijaya Durga Nursery Greenery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sri Vijaya Durga Nursery",
  image: "https://srivijayadurganursery.in/images/hero.jpg",
  "@id": "https://srivijayadurganursery.in",
  url: "https://srivijayadurganursery.in",
  telephone: "+919160122226",
  email: "Svdn.plants@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kadiyapulanka",
    addressLocality: "Rajahmundry",
    addressRegion: "Andhra Pradesh",
    postalCode: "533126",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 16.9744485,
    longitude: 81.8217343,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/share/17AH3dvBPn/?mibextid=wwXIfr",
    "https://www.instagram.com/sri_vijaya_durga_nursery",
    "https://youtube.com/@srivijayadurganursery1948",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
