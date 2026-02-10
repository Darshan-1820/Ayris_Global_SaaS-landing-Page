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
  metadataBase: new URL("https://ayrisglobal.com"),
  title: "Ayris Global | Payment Infrastructure & Consulting",
  description: "Accelerate certification, streamline acceptance, and build global payment products with modular, cloud-native infrastructure. PCI-DSS compliant solutions by Ayris Global.",
  keywords: ["payment infrastructure", "PCI-DSS", "payment consulting", "EMV certification", "SoftPOS", "cloud-native payments", "Ayris Global"],
  authors: [{ name: "Ayris Global" }],
  openGraph: {
    title: "Ayris Global | Payment Infrastructure & Consulting",
    description: "Build payments that just work. Modular, cloud-native payment infrastructure for modern enterprises.",
    url: "https://ayrisglobal.com",
    siteName: "Ayris Global",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayris Global — Build payments that just work.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayris Global | Payment Infrastructure & Consulting",
    description: "Build payments that just work. Modular, cloud-native payment infrastructure for modern enterprises.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
