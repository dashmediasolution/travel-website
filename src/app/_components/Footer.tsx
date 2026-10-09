
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";

const legalLinks = [
    { label: "Privacy Policy", href: "/#" },
    { label: "Terms & Conditions", href: "/#" },
    { label: "Disclaimer", href: "/#" },
];

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer
            aria-hidden={!isVisible}
            className={`md:fixed inset-x-0 bottom-0 z-50 max-h-[80vh] w-full overflow-y-auto bg-[#F9FCFC] text-[#15546A] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-full opacity-0"
            }`}
        >
            {/* Main Footer */}
            <div className="mx-auto w-full max-w-[1200px] px-5 py-4 sm:px-8 lg:px-10">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.5fr_1fr] lg:items-center lg:gap-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src="/images/vuelofarelogo.svg"
                                alt="Vuelofare"
                                width={120}
                                height={35}
                                className="h-auto w-[100px] sm:w-[120px]"
                            />
                        </Link>

                        <p className="mt-2 max-w-[260px] text-xs font-medium leading-5 text-[#718b9b] sm:text-[13px]">
                            Real people. Expert support. Better journeys.
                        </p>
                    </div>

                    {/* Address */}
                    <div className="w-fit">
                        <h3 className="text-sm font-bold text-[#073452] sm:text-[15px]">
                            Our Address
                        </h3>

                        <p className="mt-2 max-w-[320px] text-xs font-medium leading-5 text-[#718b9b] sm:text-[13px]">
                            B-16 S/F R/SIDE, Janakpuri Community Centre,
                            Janakpuri, New Delhi – 110058
                        </p>

                        <p className="mt-1 text-[11px] font-medium text-[#718b9b] sm:text-xs">
                            The Unit of JS Enterprises
                        </p>
                    </div>

                    {/* Legal and Contact */}
                    <div className="grid grid-cols-2 gap-10 md:w-[400px]">
                        {/* Legal */}
                        <div>
                            <h3 className="text-sm font-bold text-[#073452] sm:text-[15px]">
                                Legal
                            </h3>

                            <ul className="mt-3 space-y-2">
                                {legalLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-xs font-medium text-[#718b9b] transition-colors hover:text-[#159b9c] sm:text-[13px]"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-sm font-bold text-[#073452] sm:text-[15px]">
                                Contact
                            </h3>

                            <Link
                                href="tel:8778810087"
                                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#073452] transition-colors hover:text-[#159b9c] sm:text-[13px]"
                            >
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8f7f6] text-[#159b9c]">
                                    <Phone size={14} />
                                </span>

                                <span className="md:text-lg">
                                    (877) 881-0087
                                </span>
                            </Link>

                            <p className="mt-1 text-[12px] font-medium text-[#8ba0ac]">
                                Mon - Sun, 24/7
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#e7eeee]">
                <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-1 px-5 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
                    <p className="text-[10px] font-medium text-[#8ba0ac] sm:text-[11px]">
                        © 2026 Vuelofare. All rights reserved.
                    </p>

                    <p className="text-[10px] font-medium text-[#8ba0ac] sm:text-[11px]">
                        Travel smarter. With people who care.
                    </p>
                </div>
            </div>
        </footer>
    );
}