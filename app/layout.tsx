import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elijahkurien.com"),
  title: "Elijah Kurien",
  description: "My Portfolio",
  openGraph: {
    title: "Elijah Kurien",
    description: "My Personal Website",
    url: "https://elijahkurien.com", 
    siteName: "Elijah Kurien",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elijah Kurien",
    description: "Machine Learning Engineer and VC, building the future.",
    creator: "@ElijahKurien",
    images: ["/preview.png"],
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
        {children}
      </body>
    </html>
  );
}
