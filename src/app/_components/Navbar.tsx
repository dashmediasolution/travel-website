"use client";

import Link from "next/link";
import { ChevronDown, Phone, Menu } from "lucide-react";
import { useState } from "react";
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

                    <span className="hidden text-[19px] font-bold tracking-[-0.4px] text-[#073d5b] sm:flex">
                        Travel Website
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">

                    {/* Flights */}
                    <Link
                        href="/flights"
                        className="text-sm font-semibold text-[#244e63] transition-colors hover:text-[#129c98]"
                    >
                        Flights
                    </Link>

                    {/* Airline Policy Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setPolicyOpen(true)}
                        onMouseLeave={() => setPolicyOpen(false)}
                    >
                        <button
                            type="button"
                            onClick={() => setPolicyOpen(!policyOpen)}
                            className="flex items-center gap-1.5 text-sm font-semibold text-[#244e63] transition-colors hover:text-[#129c98]"
                        >
                            Airline Policy
                            <ChevronDown
                                className={`h-4 w-4 transition-transform duration-200 ${policyOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Dropdown */}
                        <div
                            className={`
                                absolute left-1/2 top-full z-50
                                w-[270px]
                                -translate-x-1/2
                                pt-4
                                transition-all duration-200
                                ${policyOpen
                                    ? "visible translate-y-0 opacity-100"
                                    : "invisible -translate-y-2 opacity-0"
                                }
                            `}
                        >
                            <div className="overflow-hidden rounded-[18px] border border-slate-100 bg-white p-2 shadow-[0_20px_50px_rgba(0,56,59,0.12)]">

                                <div className="px-4 pb-2 pt-3">
                                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#159b9c] md:text-base">
                                        Airline Policies
                                    </p>

                                    <p className="mt-1 text-[11px] font-medium text-[#8a9aaa] md:text-sm">
                                        Know the rules before you fly
                                    </p>
                                </div>

                                {airlinePolicies.map((policy) => (
                                    <Link
                                        key={policy.href}
                                        href={policy.href}
                                        onClick={() => setPolicyOpen(false)}
                                        className="group flex items-center justify-between rounded-[12px] px-4 py-3 transition-colors hover:bg-[#eefaf9]"
                                    >
                                        <span className="text-[13px] font-semibold text-[#244e63] md:text-base group-hover:text-[#129c98]">
                                            {policy.title}
                                        </span>

                                        <span className="text-[#b5c9cc] transition-transform group-hover:translate-x-1 group-hover:text-[#129c98]">
                                            →
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Deals */}
                    <Link
                        href="/deals"
                        className="text-sm font-semibold text-[#244e63] transition-colors hover:text-[#129c98]"
                    >
                        Deals
                    </Link>
                </nav>

                {/* Desktop CTA */}
                <Button
                    className="
                        hidden
                        cursor-pointer
                        rounded-full
                        bg-[#079a91]
                        px-5
                        py-5
                        text-sm
                        font-bold
                        text-white
                        hover:bg-[#078a82]
                        hover:text-white
                        md:flex
                    "
                >
                    <Link
                        href="tel:+919876543210"
                        className="flex items-center gap-2"
                    >
                        <Phone
                            className="h-3.5 w-3.5"
                            fill="currentColor"
                        />
                        +91 9876543210
                    </Link>
                </Button>

                {/* Mobile */}
                <div className="flex items-center gap-2 md:hidden">

                    {/* Talk to us */}
                    <Button
                        size="sm"
                        className="
                            rounded-full
                            bg-[#079a91]
                            px-3.5
                            text-xs
                            font-bold
                            text-white
                            hover:bg-[#078a82]
                            hover:text-white
                        "
                    >
                        <Link
                            href="tel:+919876543210"
                            className="flex items-center gap-2"
                        >
                            <Phone
                                className="h-4 w-4"
                                fill="currentColor"
                            />
                            Talk to us
                        </Link>
                    </Button>

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
                                    Travel Website
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
                                    href="tel:+919876543210"
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

                                    +91 9876543210
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}