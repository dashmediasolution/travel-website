import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import CallUsDialog from "./_components/CallUsDialog";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geist = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://vuelofare.com  ";

const SITE_NAME = "vuelofare";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: {
        default: "Vuelofare | Flight Booking & Travel Assistance",
        template: "%s | Vuelofare.com",
    },

    description:
        "Get expert assistance with flight bookings, flight changes, cancellations, baggage information, travel planning, itineraries, and travel support.",

    applicationName: SITE_NAME,

    keywords: [
        "flight booking",
        "flight booking assistance",
        "travel assistance",
        "flight changes",
        "flight cancellation",
        "flight information",
        "baggage assistance",
        "travel planning",
        "international flights",
        "domestic flights",
        "USA flights",
    ],

    authors: [
        {
            name: SITE_NAME,
        },
    ],

    creator: SITE_NAME,
    publisher: SITE_NAME,

    alternates: {
        canonical: "/",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "/",
        siteName: SITE_NAME,
        title: "Vuelofare.com | Flight Booking & Travel Assistance",
        description:
            "Get expert assistance with flight bookings, flight changes, cancellations, baggage information, travel planning, and travel support.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Vuelofare - Flight Booking and Travel Assistance",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Vuelofare | Flight Booking & Travel Assistance",
        description:
            "Expert assistance for flight bookings, changes, cancellations, travel planning, and travel support.",
        images: ["/images/og-image.jpg"],
    },

    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    category: "travel",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#159b9c",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geist.variable} min-h-screen bg-white antialiased`}
            >
                <Navbar />

                <main className="min-h-screen">{children}</main>

                <CallUsDialog />

                <Footer />
            </body>
        </html>
    );
}