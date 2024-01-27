import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ni Portfolio",
  description:
    "Front-end Developer. My portfolio to see the fusion of creativity and code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-[600px] flex flex-col align-center">
          <Header />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
