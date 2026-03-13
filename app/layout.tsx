import type { Metadata } from "next";
import { Lexend, DM_Sans } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SpadezTable | The Table Where Real Talk Lives",
  description:
    "SpadezTable is a bold, unapologetic media platform for real conversations. Watch episodes, shop merch, and join the community.",
  keywords: ["SpadezTable", "podcast", "talk show", "media", "community"],
  metadataBase: new URL("https://spadeztable.com"),
  openGraph: {
    title: "SpadezTable",
    description: "The Table Where Real Talk Lives",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
