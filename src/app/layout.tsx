import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ErrorBoundary from "@/components/ErrorBoundary";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Data House - Sri Lanka's Premier Data Science & AI Learning Hub",
  description: "Empowering Sri Lankan youth with industry-driven education in AI & Data Science",
  metadataBase: new URL('https://thedatahouse.netlify.app'),
  openGraph: {
    title: "The Data House",
    description: "Sri Lanka's Premier Data Science & AI Learning Hub",
    url: 'https://thedatahouse.netlify.app',
    siteName: 'The Data House',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-black text-white`}>
        <ErrorBoundary>
          <Navigation />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
} 