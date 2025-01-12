import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes"
import "./globals.css";

export const metadata: Metadata = {
  title: "Horizon Booking",
  description: "Horizon Booking",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider enableSystem={true} attribute="class">
        <body
          className={`${montserrat.variable}`}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
