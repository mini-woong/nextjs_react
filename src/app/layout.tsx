import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "스파르타 마지막 개인 과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full bg-black text-white p-[1rem]">
          <h1 className="font-serif text-center font-bold">Pokemon</h1>
        </header>
        {children}</body>
    </html>
  );
}
