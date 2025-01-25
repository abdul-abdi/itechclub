import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iTech Club",
  description: "iTech Club is a student-led technology club at the University of Minnesota that aims to foster a community of tech enthusiasts and provide opportunities for learning and growth.",
  keywords: ["iTech Club", "University of Minnesota", "Technology", "Student Organization", "Tech Club", "Programming", "Software Development", "Tech Community"],
  openGraph: {
    title: "iTech Club",
    description: "iTech Club is a student-led technology club at the University of Minnesota that aims to foster a community of tech enthusiasts and provide opportunities for learning and growth.",
    url: "https://itechclub.vercel.app",
    siteName: "iTech Club",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        sizes: "any"
      }
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
