import type { Metadata } from "next";
import { Funnel_Display, Instrument_Sans, Geist } from "next/font/google";
// TypeScript may complain about side-effect CSS imports if no declarations are present.

// Ignore the type error for this import since it is intentionally a global stylesheet.

// @ts-ignore
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Expense Manager",
  description: "Expense Management Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        funnelDisplay.variable,
        instrumentSans.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="h-full bg-black flex justify-center antialiased">
        <ThemeProvider>
          <div className="relative w-full max-w-125">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
