"use client";

import Link from "next/link";
import {
       Mail,
    Phone,
    Plane,
 } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

const quickLinks = [
   
    {
        label: "How It Works",
        href: "#how-it-works",
    },
    {
        label: "Why TravelConnect",
        href: "#why-travelconnect",
    },
    {
        label: "FAQs",
        href: "#faqs",
    },
];

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
        <footer className="w-full bg-white">
            {/* Main Footer */}
            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1200px]
                    px-5
                    py-12
                    sm:px-8
                    sm:py-14
                    lg:px-10
                    lg:py-16
                "
            >
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-10
                        sm:grid-cols-2
                        lg:grid-cols-[1.3fr_1fr_1fr_1fr]
                        lg:gap-10
                    "
                >
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="
                                inline-flex
                                items-center
                                gap-3
                            "
                        >
                   


                    <Image
                        src="/images/vuelofarelogo.svg"
                        alt="Vuelofare"
                        width={140}
                        height={40}
                        className="hidden h-auto w-[110px] sm:flex md:w-[140px]"
                    />
                </Link>
                   

                        <p
                            className="
                                mt-4
                                max-w-[290px]
                                text-[14px]
                                font-medium
                                leading-[1.6]
                                text-[#718b9b]
                                sm:text-[15px]
                            "
                        >
                            Real people. Expert support.
                            Better journeys.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-2.5">
                            <SocialLink
                                href="#"
                                label="Facebook"
                                icon={<FaFacebook size={16} />}
                            />

                            <SocialLink
                                href="#"
                                label="Instagram"
                                icon={<FaInstagram size={16} />}
                            />

                            <SocialLink
                                href="#"
                                label="LinkedIn"
                                icon={<IoLogoLinkedin size={16} />}
                            />

                            <SocialLink
                                href="#"
                                label="YouTube"
                                icon={<FaYoutube size={16} />}
                            />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <FooterColumn
                        title="Quick Links"
                        links={quickLinks}
                    />

                    {/* Legal */}
                    <FooterColumn
                        title="Legal"
                        links={legalLinks}
                    />

                    {/* Contact */}
                    <div>
                        <h3
                            className="
                                text-[16px]
                                font-bold
                                text-[#073452]
                                sm:text-[17px]
                            "
                        >
                            Contact
                        </h3>

                        <Link
                            href="tel:8778810087"
                            className="
                                mt-5
                                flex
                                items-center
                                gap-3
                                text-[15px]
                                font-bold
                                text-[#073452]
                                transition-colors
                                hover:text-[#159b9c]
                                sm:text-[16px]
                            "
                        >
                            <span
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#e8f7f6]
                                    text-[#159b9c]
                                "
                            >
                                <Phone size={16} />
                            </span>

                            <span className="text-2xl">8778810087</span>
                        </Link>

                        <p
                            className="
                                ml-12
                                mt-1
                                text-[12px]
                                font-medium
                                text-[#8ba0ac]
                                sm:text-[13px]
                            "
                        >
                            Mon - Sun, 24/7
                        </p>

                        {/* Brand Badge */}
                        <div
                            className="
                                mt-6
                                flex
                                max-w-[240px]
                                items-center
                                gap-3
                                rounded-full
                                bg-[#e7f8f6]
                                px-4
                                py-3
                            "
                        >
                            <span
                                className="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#159b9c]
                                    text-white
                                "
                            >
                                <Mail size={14} />
                            </span>

                            <div>
                                <p
                                    className="
                                        text-[13px]
                                        font-bold
                                        text-[#073452]
                                        md:text-base
                                    "
                                >
                                 Vuelofare 
                                </p>

                                <p
                                    className="
                                        mt-0.5
                                        text-[10px]
                                        font-medium
                                        text-[#7a929e]
                                    "
                                >
                                    Your journey, Our priority.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#e7eeee]">
                <div
                    className="
                        mx-auto
                        flex
                        w-full
                        max-w-[1200px]
                        flex-col
                        gap-3
                        px-5
                        py-5
                        sm:px-8
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        lg:px-10
                    "
                >
                    <p
                        className="
                            text-[12px]
                            font-medium
                            text-[#8ba0ac]
                            sm:text-[13px]
                        "
                    >
                        © 2026 TravelConnect. All rights reserved.
                    </p>

                    <p
                        className="
                            text-[12px]
                            font-medium
                            text-[#8ba0ac]
                            sm:text-[13px]
                        "
                    >
                        Travel smarter. With people who care.
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* --------------------------------
   Footer Column
-------------------------------- */

interface FooterColumnProps {
    title: string;
    links: {
        label: string;
        href: string;
    }[];
}

function FooterColumn({
    title,
    links,
}: FooterColumnProps) {
    return (
        <div>
            <h3
                className="
                    text-[16px]
                    font-bold
                    text-[#073452]
                    sm:text-[17px]
                "
            >
                {title}
            </h3>

            <ul className="mt-5 space-y-3">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className="
                                text-[14px]
                                font-medium
                                text-[#718b9b]
                                transition-colors
                                hover:text-[#159b9c]
                                sm:text-[15px]
                            "
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* --------------------------------
   Social Link
-------------------------------- */

interface SocialLinkProps {
    href: string;
    label: string;
    icon: React.ReactNode;
}

function SocialLink({
    href,
    label,
    icon,
}: SocialLinkProps) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#dce8e9]
                text-[#486477]
                transition-all
                duration-300
                hover:border-[#159b9c]
                hover:bg-[#159b9c]
                hover:text-white
            "
        >
            {icon}
        </Link>
    );
}

 