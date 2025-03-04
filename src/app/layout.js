import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nekozuma",
  description: "The collection of 5555 NFTs on the Solana blockchain.",
  openGraph: {
    title: "Nekozuma",
    description: "The collection of 5555 NFTs on the Solana blockchain.",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "Nekozuma Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nekozuma",
    description: "The collection of 5555 NFTs on the Solana blockchain.",
    images: ["/meta-image.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
