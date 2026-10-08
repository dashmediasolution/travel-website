"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    ArrowRight,
    Check,
    ChevronRight,
    Headphones,
    Luggage,
    Map,
    Phone,
    Plane,
    ShieldCheck,
    Sparkles,
    X,
} from "lucide-react";

interface Deal {
    tag: string;
    title: string;
    description: string;
    image: string;
    icon: React.ElementType;
    includes: string[];
}

const PHONE_NUMBER = "+919876543210";
const DISPLAY_PHONE = "+91 9876543210";

const deals: Deal[] = [
    {
        tag: "FLIGHT SPECIAL",
        title: "Make your next flight easier",
        description:
            "Planning a trip? Let our travel team help you find suitable flight options and take care of the booking process.",
        image:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90",
        icon: Plane,
        includes: [
            "Flight booking assistance",
            "Suitable travel options",
            "Booking guidance",
            "Support before your journey",
        ],
    },
    {
        tag: "TRAVEL PLANNING",
        title: "Your trip, planned around you",
        description:
            "Tell us where you want to go and what kind of trip you have in mind. Our team can help put the right plan together.",
        image:
            "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=90",
        icon: Map,
        includes: [
            "Personal travel assistance",
            "Trip planning guidance",
            "Travel option suggestions",
            "One-to-one support",
        ],
    },
    {
        tag: "HOTEL SPECIAL",
        title: "Find a stay that fits your trip",
        description:
            "Need help choosing where to stay? Speak with our team and get assistance finding suitable accommodation.",
        image:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=90",
        icon: Sparkles,
        includes: [
            "Hotel selection assistance",
            "Stay recommendations",
            "Booking support",
            "Travel coordination",
        ],
    },
    {
        tag: "TRAVEL SUPPORT",
        title: "We're here when plans change",
        description:
            "Travel plans do not always go exactly as expected. Get assistance with changes and other travel requirements.",
        image:
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=90",
        icon: Headphones,
        includes: [
            "Travel support",
            "Booking change assistance",
            "Guidance when plans change",
            "Personal assistance",
        ],
    },
    {
        tag: "TRAVEL ASSISTANCE",
        title: "Take the stress out of travel",
        description:
            "From planning to preparation, our team is available to help you make sense of your travel options.",
        image:
            "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1400&q=90",
        icon: ShieldCheck,
        includes: [
            "Travel guidance",
            "Planning assistance",
            "Booking support",
            "Helpful travel information",
        ],
    },
    {
        tag: "TRAVEL SERVICES",
        title: "Everything you need for your journey",
        description:
            "Need help with different parts of your trip? Talk to our team and let us help you organise the details.",
        image:
            "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=1400&q=90",
        icon: Luggage,
        includes: [
            "Travel coordination",
            "Booking assistance",
            "Planning support",
            "Dedicated assistance",
        ],
    },
];

export default function DealsPage() {
    const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

    return (
        <main className="min-h-screen overflow-hidden bg-[#f7fbfb] text-[#12343b]">
            {/* HERO */}
            <section className="px-4 pt-5 sm:px-6 lg:px-8">
                <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] sm:rounded-[40px]">
                    <div className="relative min-h-[590px] sm:min-h-[640px] lg:min-h-[680px]">
                        <Image
                            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=90"
                            alt="Airplane travelling through the sky"
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#102d36]/80 via-[#102d36]/45 to-transparent" />

                        <div className="relative z-10 flex min-h-[590px] items-center px-6 py-20 sm:min-h-[640px] sm:px-10 lg:min-h-[680px] lg:px-16">
                            <div className="max-w-[720px] text-white">
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                                    <Sparkles className="h-4 w-4" />
                                    Special travel offers
                                </div>

                                <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[78px]">
                                    Travel more.
                                    <br />
                                    Worry less.
                                </h1>

                                <p className="mt-7 max-w-[610px] text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                                    Discover our latest travel offers and speak
                                    directly with our team to find the right
                                    option for your journey.
                                </p>

                                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                    <a
                                        href="#offers"
                                        className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#159b9c] px-7 text-sm font-bold text-white transition hover:bg-[#128b8c]"
                                    >
                                        Explore offers
                                        <ArrowRight className="h-4 w-4" />
                                    </a>

                                    <a
                                        href={`tel:${PHONE_NUMBER}`}
                                        className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#12343b] transition hover:bg-[#f0ffff]"
                                    >
                                        <Phone className="h-4 w-4" />
                                        Call us
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* HERO CALL CARD */}
                        <div className="absolute bottom-5 right-5 hidden w-[310px] rounded-[24px] bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] lg:block">
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e9f9f8] text-[#159b9c]">
                                    <Phone className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#159b9c]">
                                        Speak with us
                                    </p>

                                    <p className="mt-1 text-lg font-bold text-[#12343b]">
                                        Need help choosing?
                                    </p>

                                    <p className="mt-1 text-sm leading-5 text-[#73868a]">
                                        Our team is ready to help with your
                                        travel plans.
                                    </p>
                                </div>
                            </div>

                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="mt-4 flex h-11 items-center justify-center gap-2 rounded-full bg-[#159b9c] text-sm font-bold text-white transition hover:bg-[#128b8c]"
                            >
                                <Phone className="h-4 w-4" />
                                {DISPLAY_PHONE}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
                    <div>
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#159b9c]">
                            Explore our offers
                        </p>

                        <h2 className="max-w-[750px] text-4xl font-bold leading-tight tracking-[-0.035em] text-[#12343b] sm:text-5xl">
                            Something good for your next journey.
                        </h2>
                    </div>

                    <p className="text-base leading-7 text-[#6b8085] lg:pb-1">
                        Browse our latest travel offers and find something that
                        fits your plans. When you find an offer you like, simply
                        give us a call and our team will take it from there.
                    </p>
                </div>
            </section>

            {/* DEAL CARDS */}
            <section
                id="offers"
                className="mx-auto max-w-[1280px] px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"
            >
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {deals.map((deal) => {
                        const Icon = deal.icon;

                        return (
                            <article
                                key={deal.title}
                                className="group overflow-hidden rounded-[28px] bg-white shadow-[0_8px_35px_rgba(18,52,59,0.06)] ring-1 ring-[#e4eeee] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(18,52,59,0.11)]"
                            >
                                {/* IMAGE */}
                                <div className="relative h-[260px] overflow-hidden">
                                    <Image
                                        src={deal.image}
                                        alt={deal.title}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />

                                    <div className="absolute left-5 top-5 rounded-full bg-white px-3.5 py-2 text-[11px] font-bold tracking-[0.08em] text-[#159b9c] shadow-sm">
                                        {deal.tag}
                                    </div>

                                    <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#159b9c] shadow-lg">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="p-6 sm:p-7">
                                    <h3 className="text-2xl font-bold leading-tight tracking-[-0.025em] text-[#12343b]">
                                        {deal.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6c8085]">
                                        {deal.description}
                                    </p>

                                    <div className="mt-6 space-y-2.5">
                                        {deal.includes.slice(0, 3).map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-2.5 text-sm text-[#526b70]"
                                            >
                                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e9f9f8]">
                                                    <Check className="h-3 w-3 text-[#159b9c]" />
                                                </span>

                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-7 flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedDeal(deal)}
                                            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#effafa] text-sm font-bold text-[#159b9c] transition hover:bg-[#e1f7f6]"
                                        >
                                            View details
                                            <ChevronRight className="h-4 w-4" />
                                        </button>

                                        <a
                                            href={`tel:${PHONE_NUMBER}`}
                                            aria-label={`Call about ${deal.title}`}
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#159b9c] text-white transition hover:bg-[#128b8c]"
                                        >
                                            <Phone className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-[#effafa]">
                <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-[720px] text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159b9c]">
                            Simple process
                        </p>

                        <h2 className="mt-3 text-4xl font-bold tracking-[-0.035em] text-[#12343b] sm:text-5xl">
                            See something you like?
                        </h2>

                        <p className="mt-4 text-base leading-7 text-[#6b8085]">
                            You don't need to figure everything out yourself.
                            Just call us and our travel team will help you with
                            the next steps.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        <div className="rounded-[26px] bg-white p-7 text-center ring-1 ring-[#deeeee]">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f9f8] text-xl font-bold text-[#159b9c]">
                                01
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-[#12343b]">
                                Find an offer
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#718388]">
                                Browse our latest travel offers and choose
                                something that interests you.
                            </p>
                        </div>

                        <div className="rounded-[26px] bg-white p-7 text-center ring-1 ring-[#deeeee]">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f9f8] text-xl font-bold text-[#159b9c]">
                                02
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-[#12343b]">
                                Give us a call
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#718388]">
                                Call our team and tell us which offer caught
                                your attention.
                            </p>
                        </div>

                        <div className="rounded-[26px] bg-white p-7 text-center ring-1 ring-[#deeeee]">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f9f8] text-xl font-bold text-[#159b9c]">
                                03
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-[#12343b]">
                                Let us help
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#718388]">
                                Our travel team will guide you through the
                                available options and next steps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL CTA */}
            <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-[#12343b] px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
                    <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#159b9c]/20" />
                    <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#159b9c]/10" />

                    <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-[700px] text-white">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#8ce5df]">
                                <Phone className="h-4 w-4" />
                                Speak with our team
                            </div>

                            <h2 className="text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">
                                Found an offer you like?
                            </h2>

                            <p className="mt-4 max-w-[600px] text-base leading-7 text-white/70">
                                Give us a call. We'll answer your questions and
                                help you with the next step of your journey.
                            </p>
                        </div>

                        <div className="shrink-0">
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="flex h-14 items-center justify-center gap-3 rounded-full bg-[#159b9c] px-8 text-base font-bold text-white shadow-lg transition hover:bg-[#128b8c]"
                            >
                                <Phone className="h-5 w-5" />
                                {DISPLAY_PHONE}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* MOBILE STICKY CALL BUTTON */}
            <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
                <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex h-14 items-center justify-center gap-3 rounded-full bg-[#159b9c] px-6 text-sm font-bold text-white shadow-[0_10px_35px_rgba(21,155,156,0.35)]"
                >
                    <Phone className="h-5 w-5" />
                    Call {DISPLAY_PHONE}
                </a>
            </div>

            {/* DEAL DETAILS MODAL */}
            {selectedDeal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#102d36]/60 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedDeal(null)}
                >
                    <div
                        className="relative max-h-[90vh] w-full max-w-[560px] overflow-y-auto rounded-[30px] bg-white shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="relative h-[240px]">
                            <Image
                                src={selectedDeal.image}
                                alt={selectedDeal.title}
                                fill
                                className="object-cover"
                                sizes="560px"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                            <button
                                type="button"
                                onClick={() => setSelectedDeal(null)}
                                aria-label="Close"
                                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#12343b] shadow-lg transition hover:bg-[#effafa]"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="absolute bottom-5 left-5">
                                <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#159b9c]">
                                    {selectedDeal.tag}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 sm:p-8">
                            <h3 className="text-3xl font-bold tracking-[-0.03em] text-[#12343b]">
                                {selectedDeal.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-[#6c8085]">
                                {selectedDeal.description}
                            </p>

                            <div className="mt-7">
                                <p className="text-sm font-bold text-[#12343b]">
                                    This offer includes
                                </p>

                                <div className="mt-4 space-y-3">
                                    {selectedDeal.includes.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 text-sm text-[#526b70]"
                                        >
                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e9f9f8]">
                                                <Check className="h-3.5 w-3.5 text-[#159b9c]" />
                                            </span>

                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 rounded-[22px] bg-[#effafa] p-5">
                                <p className="text-sm leading-6 text-[#526b70]">
                                    Interested in this offer? Call our travel
                                    team and we'll help you with availability,
                                    options and the next steps.
                                </p>

                                <a
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="mt-4 flex h-12 items-center justify-center gap-2 rounded-full bg-[#159b9c] text-sm font-bold text-white transition hover:bg-[#128b8c]"
                                >
                                    <Phone className="h-4 w-4" />
                                    Call {DISPLAY_PHONE}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}