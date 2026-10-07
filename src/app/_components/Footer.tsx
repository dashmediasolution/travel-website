"use client";

import Link from "next/link";
import { Phone, Plane } from "lucide-react";

const legalLinks = [
    {
        label: "Privacy Policy",
        href: "/privacy-policy",
    },
    {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
    },
    {
        label: "Disclaimer",
        href: "/disclaimer",
    },
];

export default function Footer() {
    return (
        <footer className="w-full bg-[#030b1b] text-white">
            <div className="mx-auto w-full max-w-[1080px] px-5 py-12 sm:px-8 sm:py-14 lg:px-0 lg:py-14">

                {/* Top */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-10
                        md:grid-cols-[1fr_auto]
                        md:gap-16
                    "
                >
                    {/* Brand */}
                    <div className="max-w-[620px]">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3"
                        >
                            <span
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-[12px]
                                    bg-[#079a91]
                                    text-white
                                "
                            >
                                <Plane
                                    size={21}
                                    strokeWidth={2.6}
                                    fill="currentColor"
                                />
                            </span>

                            <span
                                className="
                                    text-[20px]
                                    font-bold
                                    tracking-[-0.03em]
                                    text-white
                                    sm:text-[21px]
                                "
                            >
                                Travelwebsite
                            </span>
                        </Link>

                        {/* Description */}
                        <p
                            className="
                                mt-5
                                max-w-[600px]
                                text-[16px]
                                font-medium
                                leading-[1.45]
                                text-[#91a9c4]
                                sm:text-[17px]
                            "
                        >
                            Travel assistance services websiteing you with
                            specialists for flight reservations, changes,
                            cancellations, and travel planning.
                        </p>

                        {/* Phone */}
                        <Link
                            href="tel:+918446950263"
                            className="
                                mt-5
                                inline-flex
                                items-center
                                gap-2
                                text-[16px]
                                font-semibold
                                text-[#42ddd0]
                                underline
                                underline-offset-2
                                transition-colors
                                hover:text-[#70eee4]
                                sm:text-[20px]
                                md:text-[25px]
                            "
                        >
                            <Phone
                                size={2}
                                strokeWidth={2.5}
                                fill="currentColor"
                            />

                            <span>(844) 595-0263</span>
                        </Link>
                    </div>

                    {/* Legal */}
                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            md:min-w-[175px]
                        "
                    >
                        {legalLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="
                                    text-[16px]
                                    font-medium
                                    text-[#d8dfeb]
                                    transition-colors
                                    hover:text-[#42ddd0]
                                    sm:text-[17px]
                                "
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-9 h-px w-full bg-[#1c2a3e]" />

                {/* Disclaimer */}
                <div className="pt-6">
                    <p
                        className="
                            max-w-[1080px]
                            text-[13px]
                            font-medium
                            leading-[1.7]
                            text-[#7290ad]
                            sm:text-[14px]
                        "
                    >
                        © 2026 Travel Website. All rights reserved.
                        Travelwebsite is an independent travel assistance
                        service and is not affiliated with, endorsed by, or
                        sponsored by any airline, hotel, or travel provider.
                        We do not sell tickets directly.
                    </p>
                </div>
            </div>
        </footer>
    );
}