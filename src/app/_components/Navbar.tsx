"use client";

import Link from "next/link";
import {
    ChevronDown,
    Menu,
    Phone,
    X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative z-50 w-full border-b border-slate-100 bg-white sticky top-0">
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

                    <span className="hidden text-[18px] font-bold tracking-[-0.4px] text-[#073d5b] md:flex sm:text-[20px]">
                        Travel Website
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#flights"
                        className="flex items-center gap-1 text-sm font-semibold text-[#244e63] transition-colors hover:text-[#129c98]"
                    >
                        Flights
                        <ChevronDown className="h-4 w-4" />
                    </Link>

                    <Link
                        href="#airline-policy"
                        className="text-sm font-semibold text-[#244e63] transition-colors hover:text-[#129c98]"
                    >
                        Airline Policy
                    </Link>

                    <Link
                        href="#deals"
                        className="text-sm font-semibold text-[#244e63] transition-colors hover:text-[#129c98]"
                    >
                        Deals
                    </Link>
                </nav>

                {/* Desktop CTA */}
                <Button
                     
                    className="
                        hidden
                        rounded-full
                        bg-[#079a91]
                        p-5
                        text-sm
                        font-bold
                        text-white
                        hover:bg-[#078a82]
                        hover:text-white
                        hover:shadow-md
                        md:flex 
                        cursor-pointer
                     "
                >
                    <Link href="tel:+919876543210" className="flex gap-2">
                        <Phone
                            className="h-3.5 w-3.5"
                            fill="currentColor"
                        />
                        +91 9876543210 
                    </Link>
                </Button>

                {/* Mobile */}
                <div className="flex items-center gap-2 md:hidden">
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
                        <Link href="tel:+919876543210" className="flex gap-2">
                            <Phone
                                className="h-4 w-4"
                                fill="currentColor"
                            />
                            Talk to us
                        </Link>
                    </Button>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
                            className="w-[300px] border-l border-slate-100 bg-white"
                        >
                            <SheetHeader>
                                <SheetTitle className="text-left text-[#073d5b]">
                                    Travel Website
                                </SheetTitle>
                            </SheetHeader>

                            <nav className="mt-8 flex flex-col gap-2">
                                <Link
                                    href="#flights"
                                    onClick={() => setIsOpen(false)}
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-sm
                                        font-semibold
                                        text-[#244e63]
                                        transition-colors
                                        hover:bg-[#eefaf9]
                                        hover:text-[#129c98]
                                    "
                                >
                                    Flights
                                    <ChevronDown className="h-4 w-4" />
                                </Link>

                                <Link
                                    href="#airline-policy"
                                    onClick={() => setIsOpen(false)}
                                    className="
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-sm
                                        font-semibold
                                        text-[#244e63]
                                        transition-colors
                                        hover:bg-[#eefaf9]
                                        hover:text-[#129c98]
                                    "
                                >
                                    Airline Policy
                                </Link>

                                <Link
                                    href="#deals"
                                    onClick={() => setIsOpen(false)}
                                    className="
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-sm
                                        font-semibold
                                        text-[#244e63]
                                        transition-colors
                                        hover:bg-[#eefaf9]
                                        hover:text-[#129c98]
                                    "
                                >
                                    Deals
                                </Link>

                                <div className="my-4 h-px bg-slate-100" />

                                <Button
                                     
                                    className="
                                        w-full
                                        rounded-full
                                        bg-[#079a91]
                                        text-white
                                        p-5
                                        hover:bg-[#078a82]
                                         hover:text-white
                                    "
                                >
                                    <Link
                                        href="tel:+919876543210"
                                        onClick={() => setIsOpen(false)}
                                        className="flex gap-3"
                                    >
                                        <Phone
                                            className="h-4 w-4"
                                            fill="currentColor"
                                        />
                                        +91 9876543210
                                    </Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}