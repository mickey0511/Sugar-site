import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Money makes life good.",
  description: "Sugar is the first Earn protocol designed to maximize the return. Now enjoy the sweetest way to make money on earth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
