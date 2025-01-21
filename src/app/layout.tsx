import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "iTech Club - Zetech University",
  description:
    "Join Zetech University's premier tech community. Explore AI/ML, Web Development, Cybersecurity, and more. Learn, innovate, and grow with us.",
  keywords: [
    "iTech Club",
    "Zetech University",
    "Technology",
    "Programming",
    "Coding",
    "Community",
  ],
  authors: [{ name: "iTech Club" }],
  creator: "iTech Club",
  publisher: "Zetech University",
  robots: "index, follow",
  openGraph: {
    title: "iTech Club - Zetech University",
    description:
      "Join Zetech University's premier tech community. Explore AI/ML, Web Development, Cybersecurity, and more. Learn, innovate, and grow with us.",
    url: "https://itech.zetech.ac.ke",
    siteName: "iTech Club",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iTech Club - Zetech University",
    description:
      "Join Zetech University's premier tech community. Explore AI/ML, Web Development, Cybersecurity, and more. Learn, innovate, and grow with us.",
    creator: "@iTechClub",
    site: "@ZetechUni",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-sans antialiased">
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
