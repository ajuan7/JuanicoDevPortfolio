import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "@/app/components/navbar";

const SITE_URL = "https://juanicodevsolutions.com"; 
const DEVCOGNA_URL = "https://devcogna.com"; 
const HEADSHOT_URL = `${SITE_URL}/headphoto.jpeg`; 

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Angelo Juanico | Software Engineer Portfolio",
    template: "%s | Angelo Juanico",
  },
  description:
    "Angelo Juanico is a Software Engineer specialising in full-stack development, scalable SaaS systems, and modern web applications. Explore projects, builds, and engineering work.",
  keywords: [
    "Angelo Juanico",
    "Angelo Juanico Software Engineer",
    "Juanico DevSolutions",
    "Software Engineer Adelaide",
    "Graduate Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "SaaS Developer",
  ],
  authors: [{ name: "Angelo Juanico", url: SITE_URL }],
  creator: "Angelo Juanico",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    title: "Angelo Juanico | Software Engineer",
    description:
      "Software Engineer specialising in full-stack development, scalable SaaS systems, and modern web applications.",
    siteName: "Angelo Juanico Portfolio",
    images: [
      {
        url: "/headphoto.jpeg",
        width: 800,
        height: 800,
        alt: "Angelo Juanico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelo Juanico | Software Engineer",
    description:
      "Full-stack engineer building scalable SaaS systems and modern web applications.",
    images: ["/headphoto.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",

  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Angelo Juanico",
              url: SITE_URL,
              image: HEADSHOT_URL,
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Juanico DevSolutions",
                url: SITE_URL,
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of South Australia",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Adelaide",
                addressCountry: "Australia",
              },
              sameAs: [
                "https://au.linkedin.com/in/angelojuanico",
                DEVCOGNA_URL,
              ],
            }),
          }}
        />

        <NavBar />
        {children}
      </body>
    </html>
  );
}