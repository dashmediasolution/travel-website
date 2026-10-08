import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CallUsDialog from "./_components/CallUsDialog";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Travel Website | Your Trusted Travel Assistance Partner",
    description:
        "Travel Website makes travel easier with expert help for flight bookings, changes, cancellations, travel planning, itineraries, and 24/7 help.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                {children}

                <CallUsDialog />
            </body>
        </html>
    );
}