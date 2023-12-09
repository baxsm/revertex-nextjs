import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Revertex",
  description: "Revertex develops amazing websites for your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("antialiased scroll-smooth", poppins.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
