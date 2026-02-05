import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Ayris Global | Payment Solutions & Consulting",
  description: "Empowering the payment ecosystem with precision, innovation, and reliability. Building secure, scalable, and future-ready solutions for modern financial infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${outfit.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
