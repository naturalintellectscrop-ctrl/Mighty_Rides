import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mighty Rides | East Africa's Premium Automotive Dealership",
  description: "Mighty Rides is East Africa's premier destination for luxury car sales, premium rentals, vehicle sourcing, and automotive services. Located in Kampala, Uganda.",
  keywords: ["Mighty Rides", "luxury cars", "premium vehicles", "car dealership", "Kampala", "Uganda", "car rentals", "vehicle sourcing", "automotive services"],
  authors: [{ name: "Mighty Rides" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Mighty Rides | East Africa's Premium Automotive Dealership",
    description: "Luxury car sales, premium rentals, vehicle sourcing, and automotive services in Kampala, Uganda.",
    url: "https://themightyrides.com",
    siteName: "Mighty Rides",
    type: "website",
    locale: "en_UG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mighty Rides | Premium Automotive Dealership",
    description: "East Africa's premier destination for luxury vehicles and premium automotive services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
