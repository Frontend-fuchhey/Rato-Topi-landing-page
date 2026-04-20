import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Mukta } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Rato Topi | Agency",
  description: "Engineering Digital Solutions with Precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${mukta.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
