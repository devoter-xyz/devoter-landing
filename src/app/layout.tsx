import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbh-sans",
});

export const metadata: Metadata = {
  title: "Devoter",
  description:
    "DEVoter is an open-source voting platform that bridges web3 repository maintainers with the ScoutGame ecosystem. We enable community-driven discovery and validation of promising open-source projects through token-weighted voting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
