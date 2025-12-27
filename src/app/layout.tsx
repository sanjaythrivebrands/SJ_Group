import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SJ Group | Innovation & Technology Leadership",
  description: "SJ Group is a pioneering technology company delivering innovative solutions across healthcare, consumer products, and enterprise technology sectors.",
  keywords: ["SJ Group", "Technology", "Innovation", "Enterprise Solutions", "Digital Transformation"],
  authors: [{ name: "SJ Group" }],
  openGraph: {
    title: "SJ Group | Innovation & Technology Leadership",
    description: "Pioneering the future of technology with innovative solutions that transform businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakartaSans.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <ScrollToTop />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
