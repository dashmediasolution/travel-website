"use client";

import Link from "next/link";
import { ChevronDown, Phone, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const airlinePolicies = [
    {
        title: "Flight Change Policy",
        href: "/airline-policy/flight-change",
    },
    {
        title: "Cancellation Policy",
        href: "/airline-policy/cancellation",
    },
    {
        title: "Name Change Policy",
        href: "/airline-policy/name-change",
    },
    {
        title: "Baggage Policy",
        href: "/airline-policy/baggage",
    },
    {
        title: "Pet Policy",
        href: "/airline-policy/pet-travel",
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [policyOpen, setPolicyOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
            <div className="mx-auto flex h-[68px] w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2.5"
                    onClick={() => setIsOpen(false)}
                >


                    <Image
                        src="/images/vuelofarelogo.svg"
                        alt="Vuelofare"
                        width={140}
                        height={40}
                        className="hidden h-auto w-[110px] sm:flex md:w-[140px]"
                    />
                </Link>

                {/* Desktop Navigation */}


                {/* Desktop CTA */}
                <Link
                    href="tel:8778810087"
                    className="
        hidden
        items-center
        gap-2
        rounded-full
        bg-[#079a91]
        px-5
        py-2.5
        text-base
         font-bold
        text-white
        transition-colors
        hover:bg-[#078a82]
        md:flex
    "
                >
                    <Phone
                        className="h-3.5 w-3.5"
                        fill="currentColor"
                    />
                    8778810087
                </Link>

                {/* Mobile */}
                <div className="flex items-center gap-2 md:hidden">

                    {/* Talk to us */}
                    <Link
                        href="tel:+18778810087"
                        className="
                            hidden
                            items-center
                            gap-2
                            rounded-full
                            bg-[#079a91]
                            px-5
                            py-3.5
                            text-sm
                            font-bold
                            text-white
                            transition-colors
                            hover:bg-[#078a82]
                            md:flex
                        "
                    >
                        <Phone
                            className="h-3.5 w-3.5"
                            fill="currentColor"
                        />
                        8778810087
                    </Link>

                    {/* Mobile Menu */}
                    <Sheet
                        open={isOpen}
                        onOpenChange={setIsOpen}
                    >
                        <SheetTrigger  >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9 text-[#073d5b]"
                            >
                                <Menu className="h-5 w-5" />

                                <span className="sr-only">
                                    Open menu
                                </span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="w-[320px] border-l border-slate-100 bg-white"
                        >
                            <SheetHeader>
                                <SheetTitle className="text-left text-[#073d5b]">
                                    Vuelofare
                                </SheetTitle>
                            </SheetHeader>

                            <nav className="mt-8 flex flex-col gap-1">

                                {/* Flights */}
                                <Link
                                    href="#flights"
                                    onClick={() => setIsOpen(false)}
                                    className="
                                        rounded-lg
                                        px-4
                                        py-3.5
                                        text-sm
                                        font-semibold
                                        text-[#244e63]
                                        hover:bg-[#eefaf9]
                                        hover:text-[#129c98]
                                    "
                                >
                                    Flights
                                </Link>

                                {/* Airline Policy */}
                                <div>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setPolicyOpen(!policyOpen)
                                        }
                                        className="
                                            flex
                                            w-full
                                            items-center
                                            justify-between
                                            rounded-lg
                                            px-4
                                            py-3.5
                                            text-sm
                                            font-semibold
                                            text-[#244e63]
                                            hover:bg-[#eefaf9]
                                            hover:text-[#129c98]
                                        "
                                    >
                                        Airline Policy

                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform ${policyOpen
                                                ? "rotate-180"
                                                : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Mobile Child Menu */}
                                    {policyOpen && (
                                        <div className="mt-1 ml-3 border-l border-[#dceeed] pl-3">
                                            {airlinePolicies.map(
                                                (policy) => (
                                                    <Link
                                                        key={policy.href}
                                                        href={policy.href}
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setPolicyOpen(
                                                                false,
                                                            );
                                                        }}
                                                        className="
                                                            block
                                                            rounded-lg
                                                            px-4
                                                            py-3
                                                            text-[13px]
                                                            font-medium
                                                            text-[#668198]
                                                            hover:bg-[#eefaf9]
                                                            hover:text-[#129c98]
                                                        "
                                                    >
                                                        {policy.title}
                                                    </Link>
                                                ),
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Deals */}
                                <Link
                                    href="#deals"
                                    onClick={() => setIsOpen(false)}
                                    className="
                                        rounded-lg
                                        px-4
                                        py-3.5
                                        text-sm
                                        font-semibold
                                        text-[#244e63]
                                        hover:bg-[#eefaf9]
                                        hover:text-[#129c98]
                                    "
                                >
                                    Deals
                                </Link>

                                <div className="my-5 h-px bg-slate-100" />

                                {/* Phone */}
                                <Link
                                    href="tel:8778810087"
                                    onClick={() => setIsOpen(false)}
                                    className="
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        gap-3
                                        rounded-full
                                        bg-[#079a91]
                                        p-5
                                        text-white
                                        transition-colors
                                        hover:bg-[#078a82]
                                    "
                                >
                                    <Phone
                                        className="h-4 w-4"
                                        fill="currentColor"
                                    />

                                    8778810087
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}