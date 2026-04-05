import "./globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto_Condensed, Playfair_Display } from "next/font/google";

import { APP_NAME, APP_DESC, SERVER_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const playfair_display = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const roboto_condensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Auth App`,
    default: APP_NAME,
  },
  description: APP_DESC,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn([
        playfair_display.variable,
        roboto_condensed.variable,
        "antialiased",
        "scroll-smooth",
      ])}
      suppressHydrationWarning
    >
      <body className="min-h-svh text-slate-blue bg-almond">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
