import "./globals.css";

import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import NavbarEl from "@/components/Shared/Navbar";
import FooterEl from "@/components/Shared/Footer";

export const metadata = {
  title: "Dilhi Flavours – Capital Of Taste",
  description:
    "Dilhi Flavours is a premier restaurant in Ranchi offering authentic North Indian cuisine, Chinese delights, and fast food in a cozy dining experience. Visit us for great food and warm hospitality.",
  keywords: [
    "Dilhi Flavours",
    "Ranchi restaurant",
    "North Indian food",
    "best food in Ranchi",
    "Chinese cuisine Ranchi",
    "family restaurant",
    "Dilhi Flavours menu",
    "top restaurants Ranchi",
    "dine-in Ranchi",
    "Ranchi food delivery",
  ],
  authors: [{ name: "Dilhi Flavours", url: "https://dilhiflavours.in" }],
  openGraph: {
    title: "Dilhi Flavours – Capital of Taste",
    description:
      "Enjoy delicious North Indian, Chinese, and street food at Dilhi Flavours. Perfect for family dinners, takeout, and food lovers in Ranchi.",
    url: "https://dilhiflavours.in",
    siteName: "Dilhi Flavours",
    images: [
      {
        url: "/logo.jpg", // Ensure this image exists in /public
        width: 1200,
        height: 630,
        alt: "Dilhi Flavours Restaurant in Ranchi",
      },
    ],
    locale: "en_IN",
    type: "website", // ✅ Fixed: "restaurant" → "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@dilhiflavours", // Replace with actual handle if available
    title: "Dilhi Flavours – Discover Rich Flavours in Every Bite",
    description:
      "Savor the best of North Indian and Chinese cuisine in Ranchi at Dilhi Flavours. Dine-in, takeaway, or order online.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarEl />
        {children}
        <FooterEl />
        {/* Floating Action Buttons */}
        <div className="fixed bottom-4 right-4 flex flex-col items-end gap-2 z-50">
          <a
            href="tel:+919905555938"
            className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 flex items-center justify-center rounded-[5px] shadow-md transition"
            title="Call Now"
          >
            <CallIcon fontSize="small" />
          </a>   
          <a
            href="https://wa.me/919905555938"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-[5px] shadow-md transition"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon fontSize="small" />
          </a>
        </div>
      </body>
    </html>
  );
}
