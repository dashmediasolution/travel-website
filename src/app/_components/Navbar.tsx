"use client";

import Link from "next/link";
import { useState } from "react";
import {
    ArrowRight,
    ChevronDown,
    Menu,
    Phone,
    X,
} from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative z-50 w-full border-b border-slate-100 bg-white">
            <div className="mx-auto flex h-[64px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2.5"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#129c98]">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-[18px] w-[18px] -rotate-12"
                        >
                            <path
                                d="M3 13.5L21 7L14.5 21L11.5 14.5L3 13.5Z"
                                fill="white"
                            />
                            <path
                                d="M11.5 14.5L21 7"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <span className="text-[18px] hidden md:flex font-bold tracking-[-0.4px] text-[#073d5b] sm:text-[20px]">
                        Travel Website
                    </span>
                </Link>

                {/* Desktop Navigation */}
                {/* <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#services"
                        className="flex items-center gap-1 text-[12px] font-semibold text-[#244e63] transition-colors hover:text-[#129c98]"
                    >
                        Services
                        <ChevronDown className="h-3 w-3" />
                    </Link>

                    <Link
                        href="#how-it-works"
                        className="text-[12px] font-semibold text-[#244e63] transition-colors hover:text-[#129c98]"
                    >
                        How It Works
                    </Link>

                    <Link
                        href="#why-travelconnect"
                        className="text-[12px] font-semibold text-[#244e63] transition-colors hover:text-[#129c98]"
                    >
                        Why TravelConnect
                    </Link>
                </nav> */}

                {/* Desktop CTA */}
                <Link
                    href="#contact"
                    className="hidden items-center gap-2 rounded-full bg-[#079a91] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#078a82] hover:shadow-md md:flex"
                >
                    <Phone
                        className="h-3.5 w-3.5"
                        fill="currentColor"
                    />

                              + 91 9876543210

                 </Link>

                {/* Mobile Controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <Link
                        href="#contact"
                        className="flex items-center gap-1.5 rounded-full bg-[#079a91] px-3.5 py-2 text-xs font-bold text-white"
                    >
                        <Phone
                            className="h-3 w-3"
                            fill="currentColor"
                        />

                        Talk to us
                    </Link>
 
                </div>
            </div>

         
        </header>
    );
}