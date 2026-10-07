import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Yuji_Boku } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const yujiBoku = Yuji_Boku({
  subsets: ["latin"],
  variable: "--font-yuji-boku",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "KitsuneStream - Portal & Katalog Anime Modern",
  description: "Website katalog & direktori anime modern dengan tema Citrus & Sunrise Warm (Next.js App Router).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`dark ${plusJakartaSans.variable} ${yujiBoku.variable}`}>
      <body className="bg-stone-50 text-stone-900 dark:bg-brand-dark dark:text-stone-100 font-sans antialiased selection:bg-brand-orange selection:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
