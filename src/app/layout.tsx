import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justine Ivan Gueco | Portfolio",
  description: "Software Developer based from Philippines.",
  verification: {
    google: "BjXaHPTLo9rL0gmsdPSfAHSSSqkv3mm8gMKzAP3c2qM",
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
        className={`${jetBrainsMono.className} antialiased flex justify-center min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="p-3 max-w-7xl">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
