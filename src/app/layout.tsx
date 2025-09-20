import type { Metadata } from "next";
import { outfit, figtree } from "./font";
import "./globals.css";


export const metadata: Metadata = {
  title: "Sliite",
  description: "Innovation meets simplicity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${figtree.variable}`}>
      <body className="font-figtree">
        {children}
      </body>
    </html>
  );
}
