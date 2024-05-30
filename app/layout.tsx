import type { Metadata } from "next";
import { Asap, Manrope } from "next/font/google";
import "@/styles/globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font--manrope" });
const asap = Asap({ subsets: ["latin"], variable: "--font--asap" });

export const metadata: Metadata = {
  title: "Loving Grace Assembly",
  description: "",
  manifest: "favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body
        className={`${manrope.className} ${manrope.variable} ${asap.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
