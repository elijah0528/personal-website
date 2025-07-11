import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elijah Kurien",
  description: "My Portfolio",
  openGraph: {
    title: "Elijah Kurien",
    description: "My Personal Website",
    url: "https://elijahkurien.com", 
    siteName: "Elijah Kurien",
    images: [
      {
        url: "/preview.png", // Path to your OG image in the public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" style={{ scrollBehavior: "smooth" }}>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
