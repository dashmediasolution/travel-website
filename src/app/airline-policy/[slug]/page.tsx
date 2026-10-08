import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Check,
    ChevronDown,
    ChevronRight,
    Clock3,
    FileCheck2,
    Home,
    Info,
    Plane,
    ShieldCheck,
} from "lucide-react";

import { airlinePolicyContent } from "@/data/airline-policy-content";

export const instant = false;

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}
export function generateStaticParams() {
    return Object.keys(airlinePolicyContent).map((slug) => ({
        slug,
    }));
}

export default async function AirlinePolicyPage({ params }: PageProps) {
    const { slug } = await params;

    const policy = airlinePolicyContent[slug];

    if (!policy) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center bg-[#f7fbfb] px-6">
                <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#159b9c]">
                        Airline Policy
                    </p>

                    <h1 className="mt-4 text-4xl font-bold text-[#082f49] sm:text-5xl">
                        Policy Not Found
                    </h1>

                    <Link
                        href="/"
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#159b9c] px-7 py-4 text-base font-bold text-white transition hover:bg-[#078a82]"
                    >
                      `  Back to Home`
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#102d5b]">
            {/* ===================================================== */}
            {/* HERO */}
            {/* ===================================================== */}

            <section className="relative overflow-hidden bg-[#f1fbfb]">
                {/* Background decoration */}
                <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#d8f4f1]" />

                <div className="absolute -bottom-40 left-[-180px] h-[450px] w-[450px] rounded-full bg-[#e1f6f6]" />

                <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 lg:px-12 lg:pb-28 lg:pt-12">
                    {/* Breadcrumb */}
                    <div className="mb-10 flex flex-wrap items-center gap-2 text-[12px] font-semibold text-[#7890a2] sm:text-[13px]">
                        <Link
                            href="/"
                            className="flex items-center gap-1.5 transition-colors hover:text-[#159b9c]"
                        >
                            <Home size={14} />
                            Home
                        </Link>
 

                        <ChevronRight size={14} />

                        <span className="text-[#159b9c]">
                            {policy.shortTitle}
                        </span>
                    </div>

                    {/* Hero content */}
                    <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-24">
                        {/* Left */}
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#bce9e4] bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#159b9c] shadow-sm sm:text-[12px]">
                                <Plane size={14} />
                                {policy.label}
                            </div>

                            <h1 className="mt-6 max-w-[780px] text-[44px] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#082f49] sm:text-[58px] md:text-[66px] lg:text-[72px] xl:text-[80px]">
                                {policy.title}
                            </h1>

                            <p className="mt-7 max-w-[690px] text-[17px] font-medium leading-[1.75] text-[#5f7890] sm:text-[19px] lg:text-[20px]">
                                {policy.description}
                            </p>

                            {/* Hero points */}
                            <div className="mt-9 grid gap-5 sm:grid-cols-3">
                                {policy.heroPoints.map((point) => (
                                    <div
                                        key={point.title}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d5f5f1] text-[#159b9c]">
                                            <Check
                                                size={18}
                                                strokeWidth={2.8}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[13px] font-extrabold leading-[1.2] text-[#082f49] sm:text-[14px]">
                                                {point.title}
                                            </p>

                                            <p className="mt-1.5 text-[11px] font-medium leading-[1.5] text-[#7890a2] sm:text-[12px]">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right image */}
                        <div className="relative">
                            <div className="absolute -bottom-7 -left-7 hidden h-32 w-32 rounded-full border-[22px] border-[#c8eeeb] lg:block" />

                            <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-[#159b9c] lg:block" />

                            <div className="relative overflow-hidden rounded-[30px] bg-white p-2 shadow-[0_30px_80px_rgba(0,56,59,0.15)] sm:p-3">
                                <div className="relative aspect-[1.18/0.85] overflow-hidden rounded-[24px]">
                                    <Image
                                        src={policy.heroImage}
                                        alt={policy.title}
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 55vw"
                                        className="object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002f47]/55 via-transparent to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="rounded-[18px] border border-white/20 bg-white/90 p-5 backdrop-blur-md">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#159b9c] text-white">
                                                    <ShieldCheck
                                                        size={21}
                                                    />
                                                </div>

                                                <div>
                                                    <p className="text-[13px] font-bold text-[#082f49]">
                                                        Travel with clarity
                                                    </p>

                                                    <p className="mt-1 text-[11px] font-medium text-[#71879d]">
                                                        Understand the rules
                                                        before you fly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-7 right-5 rounded-[18px] bg-[#003847] px-5 py-4 text-white shadow-[0_15px_35px_rgba(0,56,59,0.22)] sm:right-8">
                                <p className="text-[11px] font-semibold text-[#8fdcd5]">
                                    POLICY GUIDE
                                </p>

                                <p className="mt-1 text-[14px] font-bold">
                                    Know before you fly
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================================================== */}
            {/* POLICY NAVIGATION */}
            {/* ===================================================== */}

            <section className="sticky top-[64px] z-30 border-b border-[#e6eeee] bg-white/95 backdrop-blur-xl">
                <div className="mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-5 py-3 scrollbar-hide sm:px-8 lg:px-12">
                    <a
                        href="#overview"
                        className="whitespace-nowrap rounded-full bg-[#e8f8f5] px-5 py-2.5 text-[12px] font-bold text-[#159b9c] sm:text-[13px]"
                    >
                        Overview
                    </a>

                    <a
                        href="#quick-guide"
                        className="whitespace-nowrap rounded-full px-5 py-2.5 text-[12px] font-bold text-[#668198] transition hover:bg-[#eef9f8] hover:text-[#159b9c] sm:text-[13px]"
                    >
                        Quick Guide
                    </a>

                    <a
                        href="#policy-details"
                        className="whitespace-nowrap rounded-full px-5 py-2.5 text-[12px] font-bold text-[#668198] transition hover:bg-[#eef9f8] hover:text-[#159b9c] sm:text-[13px]"
                    >
                        Policy Details
                    </a>

                    <a
                        href="#process"
                        className="whitespace-nowrap rounded-full px-5 py-2.5 text-[12px] font-bold text-[#668198] transition hover:bg-[#eef9f8] hover:text-[#159b9c] sm:text-[13px]"
                    >
                        How It Works
                    </a>

                    <a
                        href="#faq"
                        className="whitespace-nowrap rounded-full px-5 py-2.5 text-[12px] font-bold text-[#668198] transition hover:bg-[#eef9f8] hover:text-[#159b9c] sm:text-[13px]"
                    >
                        FAQ
                    </a>
                </div>
            </section>

            {/* ===================================================== */}
            {/* OVERVIEW */}
            {/* ===================================================== */}

            <section
                id="overview"
                className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
            >
                <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    {/* Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[28px] bg-[#e5f7f5]" />

                        <div className="relative aspect-[1.08/1] overflow-hidden rounded-[28px]">
                            <Image
                                src={policy.overviewImage}
                                alt={policy.overview.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute bottom-5 left-5 rounded-[18px] bg-white px-5 py-4 shadow-[0_12px_35px_rgba(0,56,59,0.12)] sm:bottom-7 sm:left-7">
                            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#159b9c]">
                                Good to know
                            </p>

                            <p className="mt-1 text-[14px] font-bold text-[#082f49] sm:text-[15px]">
                                Rules can vary by fare
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#159b9c] sm:text-[13px]">
                            OVERVIEW
                        </p>

                        <h2 className="mt-4 max-w-[750px] text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] text-[#082f49] sm:text-[48px] lg:text-[56px]">
                            {policy.overview.title}
                        </h2>

                        <div className="mt-7 space-y-5">
                            {policy.overview.paragraphs.map((paragraph) => (
                                <p
                                    key={paragraph}
                                    className="max-w-[730px] text-[16px] font-medium leading-[1.8] text-[#667f95] sm:text-[18px]"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-8 flex items-start gap-4 rounded-[20px] border border-[#d9efed] bg-[#f1fbfa] p-5 sm:p-6">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d5f4f0] text-[#159b9c]">
                                <Info size={21} />
                            </div>

                            <p className="text-[14px] font-semibold leading-[1.7] text-[#557492] sm:text-[15px]">
                                {policy.overview.note}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================================================== */}
            {/* QUICK GUIDE */}
            {/* ===================================================== */}

            <section
                id="quick-guide"
                className="bg-[#f4fafa]"
            >
                <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
                    <div className="max-w-[820px]">
                        <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#159b9c] sm:text-[13px]">
                            QUICK GUIDE
                        </p>

                        <h2 className="mt-4 text-[38px] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#082f49] sm:text-[48px] lg:text-[56px]">
                            {policy.quickInfo.title}
                        </h2>

                        <p className="mt-5 text-[16px] font-medium leading-[1.8] text-[#6c8398] sm:text-[18px]">
                            {policy.quickInfo.description}
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {policy.quickInfo.items.map((item, index) => (
                            <div
                                key={item.title}
                                className="group relative overflow-hidden rounded-[24px] border border-[#e1eeee] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,56,59,0.08)] sm:p-8"
                            >
                                <span className="absolute right-6 top-3 text-[72px] font-extrabold leading-none text-[#edf8f7]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div className="relative">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#e0f7f4] text-[#159b9c]">
                                        {index === 0 ? (
                                            <FileCheck2 size={22} />
                                        ) : index === 1 ? (
                                            <Clock3 size={22} />
                                        ) : (
                                            <ShieldCheck size={22} />
                                        )}
                                    </div>

                                    <h3 className="mt-7 text-[20px] font-extrabold text-[#082f49] sm:text-[22px]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-[15px] font-medium leading-[1.75] text-[#71879d] sm:text-[16px]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================================================== */}
            {/* POLICY DETAILS */}
            {/* ===================================================== */}

            <section
                id="policy-details"
                className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
            >
                <div className="mb-14 max-w-[850px] sm:mb-16">
                    <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#159b9c] sm:text-[13px]">
                        POLICY DETAILS
                    </p>

                    <h2 className="mt-4 text-[38px] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#082f49] sm:text-[50px] lg:text-[58px]">
                        Everything you should know before making a change
                    </h2>

                    <p className="mt-5 max-w-[760px] text-[16px] font-medium leading-[1.8] text-[#71879d] sm:text-[18px]">
                        Review the important rules, requirements, restrictions,
                        and practical details associated with this airline
                        policy.
                    </p>
                </div>

                <div className="space-y-6">
                    {policy.sections.map((section, index) => (
                        <article
                            key={section.title}
                            className="group overflow-hidden rounded-[26px] border border-[#e3eded] bg-white shadow-[0_8px_30px_rgba(0,56,59,0.035)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(0,56,59,0.07)]"
                        >
                            <div className="grid lg:grid-cols-[180px_1fr]">
                                {/* Number */}
                                <div className="flex min-h-[140px] items-start justify-between bg-[#f1fbfa] px-6 py-7 lg:min-h-full lg:flex-col lg:px-8 lg:py-8">
                                    <span className="text-[58px] font-extrabold leading-none tracking-[-0.05em] text-[#bfe7e2] sm:text-[68px]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <Plane
                                        size={23}
                                        className="text-[#159b9c]"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-7 sm:p-9 lg:p-10">
                                    <h3 className="text-[26px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#082f49] sm:text-[31px]">
                                        {section.title}
                                    </h3>

                                    <p className="mt-4 max-w-[900px] text-[15px] font-medium leading-[1.8] text-[#71879d] sm:text-[17px]">
                                        {section.description}
                                    </p>

                                    <div className="mt-7 grid gap-4 md:grid-cols-2">
                                        {section.points.map((point) => (
                                            <div
                                                key={point}
                                                className="flex items-start gap-3 rounded-[14px] bg-[#f8fbfb] p-4"
                                            >
                                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d5f4ef] text-[#159b9c]">
                                                    <Check
                                                        size={13}
                                                        strokeWidth={3}
                                                    />
                                                </div>

                                                <p className="text-[14px] font-medium leading-[1.65] text-[#607a91] sm:text-[15px]">
                                                    {point}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ===================================================== */}
            {/* PROCESS */}
            {/* ===================================================== */}

            <section
                id="process"
                className="relative overflow-hidden bg-[#003847]"
            >
                <div className="absolute -right-40 top-[-180px] h-[500px] w-[500px] rounded-full border-[70px] border-white/[0.03]" />

                <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#159b9c]/10" />

                <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
                    <div className="max-w-[820px]">
                        <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#65d5ca] sm:text-[13px]">
                            HOW IT WORKS
                        </p>

                        <h2 className="mt-4 text-[38px] font-extrabold leading-[1.04] tracking-[-0.035em] text-white sm:text-[50px] lg:text-[58px]">
                            Make informed travel decisions
                        </h2>

                        <p className="mt-5 max-w-[750px] text-[16px] font-medium leading-[1.8] text-[#b4ced1] sm:text-[18px]">
                            Follow these simple steps before changing,
                            cancelling, or updating your flight.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {policy.process.map((step, index) => (
                            <div
                                key={step.number}
                                className="relative rounded-[24px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-8"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-[54px] font-extrabold leading-none text-[#65d5ca]/20">
                                        {step.number}
                                    </span>

                                    {index < policy.process.length - 1 && (
                                        <ArrowRight
                                            size={20}
                                            className="hidden text-[#65d5ca]/50 lg:block"
                                        />
                                    )}
                                </div>

                                <h3 className="mt-8 text-[20px] font-extrabold text-white sm:text-[22px]">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-[14px] font-medium leading-[1.75] text-[#b4ced1] sm:text-[15px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================================================== */}
            {/* TRAVEL TIPS */}
            {/* ===================================================== */}

            <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
                    <div className="relative">
                        <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[28px] bg-[#dff5f2]" />

                        <div className="relative aspect-[1.05/0.9] overflow-hidden rounded-[28px]">
                            <Image
                                src={policy.secondaryImage}
                                alt={`${policy.shortTitle} travel tips`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#159b9c] sm:text-[13px]">
                            TRAVEL SMART
                        </p>

                        <h2 className="mt-4 text-[38px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#082f49] sm:text-[48px] lg:text-[56px]">
                            Helpful things to remember before you fly
                        </h2>

                        <div className="mt-9 space-y-5">
                            {policy.tips.map((tip, index) => (
                                <div
                                    key={tip}
                                    className="flex items-start gap-4"
                                >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d7f4ef] text-[#159b9c]">
                                        <Check
                                            size={15}
                                            strokeWidth={3}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[15px] font-semibold leading-[1.7] text-[#5e7890] sm:text-[16px]">
                                            {tip}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================================================== */}
            {/* FAQ */}
            {/* ===================================================== */}

            <section
                id="faq"
                className="bg-[#f4fafa]"
            >
                <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
                    <div className="text-center">
                        <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#159b9c] sm:text-[13px]">
                            FAQ
                        </p>

                        <h2 className="mt-4 text-[38px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#082f49] sm:text-[50px] lg:text-[56px]">
                            Questions travelers often ask
                        </h2>

                        <p className="mx-auto mt-5 max-w-[700px] text-[16px] font-medium leading-[1.8] text-[#71879d] sm:text-[18px]">
                            Find quick answers to common questions about{" "}
                            {policy.shortTitle.toLowerCase()}.
                        </p>
                    </div>

                    <div className="mt-12 space-y-4">
                        {policy.faq.map((item, index) => (
                            <details
                                key={item.question}
                                className="group overflow-hidden rounded-[20px] border border-[#dfebeb] bg-white"
                            >
                                <summary className="flex cursor-pointer list-none items-center gap-5 px-5 py-5 sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e3f8f5] text-[12px] font-extrabold text-[#159b9c]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="flex-1 text-[15px] font-bold leading-[1.4] text-[#082f49] sm:text-[17px] lg:text-[18px]">
                                        {item.question}
                                    </span>

                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf9f7] text-[#159b9c] transition-transform duration-300 group-open:rotate-180">
                                        <ChevronDown size={18} />
                                    </span>
                                </summary>

                                <div className="border-t border-[#edf2f2] px-5 pb-6 pt-5 pl-[68px] sm:px-7 sm:pb-7 sm:pl-[88px]">
                                    <p className="max-w-[850px] text-[15px] font-medium leading-[1.8] text-[#71879d] sm:text-[16px]">
                                        {item.answer}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================================================== */}
            {/* CTA */}
            {/* ===================================================== */}

            <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-[#082f49] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[50px] border-[#159b9c]/10" />

                    <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#159b9c]/10" />

                    <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                        <div className="max-w-[800px]">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#65d5ca] sm:text-[13px]">
                                NEED HELP?
                            </p>

                            <h2 className="mt-4 text-[38px] font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-[50px] lg:text-[58px]">
                                Not sure which airline policy applies to your
                                trip?
                            </h2>

                            <p className="mt-5 max-w-[700px] text-[16px] font-medium leading-[1.8] text-[#b6ced2] sm:text-[18px]">
                                Airline rules can depend on your fare, route,
                                airline, ticket type, and booking conditions.
                                Our travel specialists can help you understand
                                your options before you make a change.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#159b9c] px-7 py-4 text-[14px] font-bold text-white transition-all hover:bg-[#12b1ad] sm:px-8 sm:py-4 sm:text-[15px]"
                        >
                            Talk to a Specialist
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}