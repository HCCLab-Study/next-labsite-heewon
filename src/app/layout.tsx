import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IDEA Lab",
  description: "IDEA Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={oswald.className}>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
