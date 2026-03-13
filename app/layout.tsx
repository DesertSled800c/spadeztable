import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
