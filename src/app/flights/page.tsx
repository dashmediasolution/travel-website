"use client";

import Image from "next/image";
import {
    ArrowRight,
    BaggageClaim,
    CalendarDays,
    Check,
    ChevronRight,
    Clock3,
    FileText,
    Globe2,
    Headphones,
    Info,
    Luggage,
    MapPin,
    Phone,
    Plane,
    RefreshCw,
    Search,
    ShieldCheck,
    Ticket,
    UserRound,
    XCircle,
} from "lucide-react";

const PHONE_NUMBER = "87788100870";
const DISPLAY_PHONE = "8778810087";

const usaFlights = [
    {
        from: "Delhi",
        fromCode: "DEL",
        to: "New York",
        toCode: "JFK",
        image:
            "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80",
    },
    {
        from: "Delhi",
        fromCode: "DEL",
        to: "Chicago",
        toCode: "ORD",
        image:
            "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1200&q=80",
    },
    {
        from: "Delhi",
        fromCode: "DEL",
        to: "San Francisco",
        toCode: "SFO",
        image:
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    },
    {
        from: "Delhi",
        fromCode: "DEL",
        to: "Washington",
        toCode: "IAD",
        image:
            "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    },
    {
        from: "Mumbai",
        fromCode: "BOM",
        to: "New York",
        toCode: "JFK",
        image:
            "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=1200&q=80",
    },
    {
        from: "Mumbai",
        fromCode: "BOM",
        to: "San Francisco",
        toCode: "SFO",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
        from: "Bengaluru",
        fromCode: "BLR",
        to: "Dallas",
        toCode: "DFW",
        image:
            "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&w=1200&q=80",
    },
    {
        from: "Bengaluru",
        fromCode: "BLR",
        to: "Los Angeles",
        toCode: "LAX",
        image:
            "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=1200&q=80",
    },
];

const domesticFlights = [
    ["Delhi", "DEL", "Mumbai", "BOM"],
    ["Delhi", "DEL", "Bengaluru", "BLR"],
    ["Delhi", "DEL", "Hyderabad", "HYD"],
    ["Delhi", "DEL", "Chennai", "MAA"],
    ["Delhi", "DEL", "Kolkata", "CCU"],
    ["Mumbai", "BOM", "Goa", "GOI"],
];

const internationalFlights = [
    ["India", "USA"],
    ["India", "UK"],
    ["India", "Canada"],
    ["India", "Dubai"],
    ["India", "Singapore"],
    ["India", "Australia"],
    ["India", "Europe"],
    ["India", "Thailand"],
];

const flightServices = [
    {
        icon: Ticket,
        title: "Flight Booking",
        description:
            "Tell us your route, dates and travel requirements. Our team will help you with your flight booking.",
    },
    {
        icon: Info,
        title: "Flight Information",
        description:
            "Need help understanding your flight, airline rules, baggage or airport requirements?",
    },
    {
        icon: RefreshCw,
        title: "Flight Changes",
        description:
            "Get assistance with changing your flight details, travel dates or itinerary.",
    },
    {
        icon: XCircle,
        title: "Flight Cancellation",
        description:
            "Speak with our team about cancellation options and airline-specific requirements.",
    },
    {
        icon: UserRound,
        title: "Name Changes",
        description:
            "Need help with a name correction or passenger information? We can guide you.",
    },
    {
        icon: BaggageClaim,
        title: "Baggage Assistance",
        description:
            "Understand baggage allowances, additional baggage and airline baggage rules.",
    },
    {
        icon: CalendarDays,
        title: "Travel Planning",
        description:
            "Planning a complex journey? We can help with one-way, return and multi-city flights.",
    },
    {
        icon: Headphones,
        title: "Travel Support",
        description:
            "Have a question before or after booking? Speak directly with our travel team.",
    },
];

const flightInformation = [
    {
        icon: Luggage,
        title: "Baggage Information",
        description:
            "Understand cabin baggage, checked baggage and additional baggage requirements.",
    },
    {
        icon: Clock3,
        title: "Flight Timing",
        description:
            "Get help understanding departure times, arrival times and connecting flights.",
    },
    {
        icon: FileText,
        title: "Travel Documents",
        description:
            "Ask about the documents and requirements you may need for your journey.",
    },
    {
        icon: ShieldCheck,
        title: "Airline Policies",
        description:
            "Get guidance on airline-specific booking, change and cancellation policies.",
    },
];

export default function FlightsPage() {
    return (
        <main className="min-h-screen bg-white text-[#102d5b]">
            {/* HERO */}
            <section className="relative overflow-hidden bg-[#effafa]">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#159b9c] shadow-sm">
                            <Plane className="h-4 w-4" />
                            Domestic & International Flights
                        </div>

                        <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                            Flights to the USA
                            <span className="block text-[#159b9c]">
                                & Around the World
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                            Looking for a flight from India to the USA or
                            somewhere closer? Tell us your route and travel
                            requirements. Our team can help you understand your
                            options and arrange your flight.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#159b9c] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#128b8c]"
                            >
                                <Phone className="h-5 w-5" />
                                Book a Flight
                            </a>

                            <a
                                href="#flight-information"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#159b9c]/20 bg-white px-7 py-4 text-base font-semibold text-[#102d5b] transition hover:border-[#159b9c] hover:text-[#159b9c]"
                            >
                                Flight Information
                                <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-[#159b9c]" />
                                USA flights
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-[#159b9c]" />
                                Domestic flights
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-[#159b9c]" />
                                International flights
                            </div>
                        </div>
                    </div>

                    {/* HERO IMAGE */}
                    <div className="relative">
                        <div className="relative h-[380px] overflow-hidden rounded-[32px] sm:h-[470px]">
                            <Image
                                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85"
                                alt="Passenger airplane"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white p-5 shadow-xl sm:left-8 sm:right-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#effafa] text-[#159b9c]">
                                    <Phone className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="font-bold text-[#102d5b]">
                                        Need help choosing a flight?
                                    </p>
                                    <p className="mt-1 text-sm leading-5 text-slate-500">
                                        Tell us your From and To locations and
                                        speak with our travel team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* USA FLIGHTS */}
            <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#159b9c]">
                                <Globe2 className="h-4 w-4" />
                                USA Flights
                            </div>

                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Popular India to USA routes
                            </h2>

                            <p className="mt-3 max-w-2xl text-slate-500">
                                Looking for flights to the United States?
                                Explore some of the routes travelers commonly
                                ask us about.
                            </p>
                        </div>

                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="inline-flex w-fit items-center gap-2 font-semibold text-[#159b9c]"
                        >
                            Ask about your route
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {usaFlights.map((flight) => (
                            <div
                                key={`${flight.fromCode}-${flight.toCode}`}
                                className="group overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={flight.image}
                                        alt={`${flight.from} to ${flight.to}`}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#159b9c] shadow">
                                        USA
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-lg font-bold">
                                                {flight.from}
                                            </p>
                                            <p className="text-xs font-medium text-slate-400">
                                                {flight.fromCode}
                                            </p>
                                        </div>

                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#effafa] text-[#159b9c]">
                                            <Plane className="h-4 w-4" />
                                        </div>

                                        <div className="text-right">
                                            <p className="text-lg font-bold">
                                                {flight.to}
                                            </p>
                                            <p className="text-xs font-medium text-slate-400">
                                                {flight.toCode}
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href={`tel:${PHONE_NUMBER}`}
                                        className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#102d5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0b2347]"
                                    >
                                        Ask About This Flight
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOMESTIC */}
            <section className="bg-[#effafa] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#159b9c]">
                            Domestic Flights
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Flying within India?
                        </h2>

                        <p className="mt-3 text-slate-600">
                            From short domestic trips to frequent business
                            travel, tell us where you are flying from and
                            where you want to go.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {domesticFlights.map(
                            ([from, fromCode, to, toCode]) => (
                                <a
                                    key={`${fromCode}-${toCode}`}
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="group flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#effafa] text-[#159b9c]">
                                            <Plane className="h-5 w-5" />
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 font-semibold">
                                                {from}
                                                <ChevronRight className="h-4 w-4 text-slate-300" />
                                                {to}
                                            </div>

                                            <p className="mt-1 text-xs text-slate-400">
                                                {fromCode} → {toCode}
                                            </p>
                                        </div>
                                    </div>

                                    <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:text-[#159b9c]" />
                                </a>
                            ),
                        )}
                    </div>
                </div>
            </section>

            {/* INTERNATIONAL */}
            <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#159b9c]">
                            International Flights
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Going beyond India?
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
                            Tell us your destination and our team can help you
                            explore suitable flight options.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {internationalFlights.map(([from, to]) => (
                            <a
                                key={to}
                                href={`tel:${PHONE_NUMBER}`}
                                className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#159b9c]/20 hover:shadow-lg"
                            >
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#effafa] text-[#159b9c]">
                                    <Globe2 className="h-5 w-5" />
                                </div>

                                <p className="mt-4 font-semibold">
                                    {from} → {to}
                                </p>

                                <p className="mt-2 text-sm text-slate-400">
                                    Ask about flights
                                </p>

                                <ArrowRight className="mx-auto mt-4 h-4 w-4 text-[#159b9c] transition group-hover:translate-x-1" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="bg-[#102d5b] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#5ee0dc]">
                            More Flight Services
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            More than just flight booking
                        </h2>

                        <p className="mt-4 leading-7 text-white/65">
                            Have a question about your journey? Our team can
                            help with different parts of your flight and travel
                            requirements.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {flightServices.map((service) => {
                            const Icon = service.icon;

                            return (
                                <a
                                    key={service.title}
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="group rounded-[22px] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.1]"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#159b9c] text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3 className="mt-6 text-lg font-bold">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-white/60">
                                        {service.description}
                                    </p>

                                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#5ee0dc]">
                                        Get assistance
                                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FLIGHT INFORMATION */}
            <section
                id="flight-information"
                className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
            >
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div className="relative h-[420px] overflow-hidden rounded-[30px]">
                        <Image
                            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85"
                            alt="Airplane flying"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white p-5 shadow-xl">
                            <p className="text-sm font-semibold text-[#159b9c]">
                                Need an answer?
                            </p>

                            <p className="mt-1 font-bold text-[#102d5b]">
                                Call {DISPLAY_PHONE}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#159b9c]">
                            Flight Information
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Questions before you fly?
                        </h2>

                        <p className="mt-5 leading-7 text-slate-500">
                            Flights can involve more than simply choosing a
                            destination. If you are unsure about baggage,
                            timings, documents, changes or airline policies,
                            speak with our team.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {flightInformation.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="rounded-2xl border border-slate-100 bg-[#f8fbfb] p-5"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#effafa] text-[#159b9c]">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <h3 className="mt-4 font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#159b9c] px-7 py-4 font-semibold text-white transition hover:bg-[#128b8c]"
                        >
                            <Phone className="h-5 w-5" />
                            Talk to Our Flight Team
                        </a>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-[#effafa] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <div className="text-sm font-semibold uppercase tracking-wider text-[#159b9c]">
                            Simple Process
                        </div>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Getting help with your flight is simple
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                number: "01",
                                title: "Tell us your route",
                                text: "Share your From, To, travel dates and any requirements.",
                            },
                            {
                                number: "02",
                                title: "Speak with our team",
                                text: "We will understand what you need and answer your questions.",
                            },
                            {
                                number: "03",
                                title: "Get flight assistance",
                                text: "We guide you through the next steps for your journey.",
                            },
                        ].map((step) => (
                            <div
                                key={step.number}
                                className="rounded-[24px] bg-white p-7 shadow-sm"
                            >
                                <span className="text-4xl font-bold text-[#159b9c]/30">
                                    {step.number}
                                </span>

                                <h3 className="mt-5 text-xl font-bold">
                                    {step.title}
                                </h3>

                                <p className="mt-3 leading-6 text-slate-500">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#102d5b] px-6 py-14 text-center text-white sm:px-10 lg:py-20">
                    <div className="mx-auto max-w-3xl">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#159b9c]">
                            <Plane className="h-6 w-6" />
                        </div>

                        <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Tell us where you want to fly.
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-white/65">
                            Whether you are flying to New York, Chicago,
                            Mumbai or somewhere else, speak with our team for
                            flight booking and information.
                        </p>  n 

                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#159b9c] px-8 py-4 font-semibold text-white transition hover:bg-[#128b8c]"
                        >
                            <Phone className="h-5 w-5" />
                            Call {DISPLAY_PHONE}
                        </a>
                    </div>
                </div>
            </section>

            {/* MOBILE CALL BUTTON */}
            <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
                <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center justify-center gap-3 rounded-full bg-[#159b9c] px-6 py-4 font-bold text-white shadow-2xl"
                >
                    <Phone className="h-5 w-5" />
                    Call for Flight Assistance
                </a>
            </div>
        </main>
    );
}