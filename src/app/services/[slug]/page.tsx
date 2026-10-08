import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Check,
    ChevronRight,
    CircleHelp,
    Headphones,
    Home,
    Plane,
} from "lucide-react";

import { servicesContent } from "@/data/services-content";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return Object.keys(servicesContent).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;

    const service = servicesContent[slug];

    if (!service) {
        return (
            <main className="flex min-h-[60vh] items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#073452] sm:text-4xl">
                        Service Not Found
                    </h1>

                    <Link
                        href="/"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#159b9c] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#108486] sm:text-base"
                    >
                        Back to Home
                        <ArrowRight size={17} />
                    </Link>
                </div>
            </main>
        );
    }

    const related = service.relatedServices
        .map((item) => servicesContent[item])
        .filter(Boolean);

    return (
        <main className="min-h-screen overflow-hidden bg-white">
            {/* ===================================================== */}
            {/* HERO */}
            {/* ===================================================== */}

            <section className="relative overflow-hidden bg-[#effcfc]">
                {/* Decorative blobs */}
                <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#d7f5f3] blur-2xl sm:h-80 sm:w-80" />

                <div className="absolute right-[8%] top-20 h-48 w-48 rounded-full bg-[#c7eef1] blur-xl sm:h-60 sm:w-60" />

                <div className="relative mx-auto w-[92%] max-w-[1400px] py-7 sm:w-[90%] sm:py-9 lg:py-11">
                    {/* Breadcrumb */}
                    <div className="mb-8 flex flex-wrap items-center gap-2 text-[12px] font-medium text-[#6e879c] sm:mb-9 sm:text-[12px] lg:text-[13px]">
                        <Link
                            href="/"
                            className="flex items-center gap-1.5 transition-colors hover:text-[#159b9c]"
                        >
                            <Home size={13} />
                            Home
                        </Link>

                  
                        <ChevronRight size={13} />

                        <span className="text-[#159b9c]">
                            {service.shortTitle}
                        </span>
                    </div>

                    <div className="grid items-center gap-11 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
                        {/* ================================================= */}
                        {/* HERO TEXT */}
                        {/* ================================================= */}

                        <div className="max-w-[700px]">
                            <span className="inline-flex rounded-full bg-[#d9f5f1] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.12em] text-[#159b9c] sm:text-[11px] lg:text-[12px]">
                                {service.label}
                            </span>

                            <h1 className="mt-4 text-[38px] font-bold leading-[1.08] tracking-[-0.035em] text-[#102d5b] sm:text-[48px] sm:leading-[1.06] lg:text-[60px]">
                                {service.title}
                            </h1>

                            <p className="mt-5 max-w-[620px] text-[15px] font-medium leading-[1.75] text-[#557492] sm:text-[17px] sm:leading-[1.7] lg:text-[18px]">
                                {service.description}
                            </p>

                            {/* Hero points */}
                            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
                                {service.heroPoints.map((point) => (
                                    <div
                                        key={point.title}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d5f5f1] text-[#159b9c] sm:h-11 sm:w-11">
                                            <Check
                                                size={18}
                                                strokeWidth={2.8}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[12px] font-extrabold leading-[1.3] text-[#073452] sm:text-[13px]">
                                                {point.title}
                                            </p>

                                            <p className="mt-1 text-[11px] font-medium leading-[1.45] text-[#7690a5] sm:text-[12px]">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* HERO IMAGE */}
                        {/* ================================================= */}

                        <div className="relative mx-auto w-full max-w-[620px]">
                            <div className="absolute -left-4 -top-4 h-full w-full rounded-[40%] bg-[#d8f4f4] sm:-left-5 sm:-top-5" />

                            <div className="relative aspect-[1.3/0.8] overflow-hidden rounded-[42%]">
                                <Image
                                    src={service.heroImage}
                                    alt={service.title}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================================================== */}
            {/* OVERVIEW */}
            {/* ===================================================== */}

            <section className="mx-auto w-[92%] max-w-[1400px] py-14 sm:w-[90%] sm:py-17 lg:py-20">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="text-[11px] font-extrabold tracking-[0.2em] text-[#159b9c] sm:text-[11px] lg:text-[12px]">
                            OVERVIEW
                        </p>

                        <h2 className="mt-3 max-w-[620px] text-[30px] font-bold leading-[1.1] tracking-[-0.025em] text-[#102d5b] sm:text-[36px] lg:text-[42px]">
                            {service.overview.title}
                        </h2>

                        {service.overview.paragraphs.map(
                            (paragraph, index) => (
                                <p
                                    key={index}
                                    className="mt-5 max-w-[630px] text-[15px] font-medium leading-[1.75] text-[#71879d] sm:text-[16px] lg:text-[17px]"
                                >
                                    {paragraph}
                                </p>
                            ),
                        )}

                        <div className="mt-7 flex items-start gap-3.5 rounded-[15px] bg-[#eefaf8] px-4 py-4 sm:px-5 sm:py-5">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d4f4ef] text-[#159b9c]">
                                <CircleHelp size={18} />
                            </div>

                            <p className="text-[13px] font-semibold leading-[1.6] text-[#557492] sm:text-[14px] lg:text-[15px]">
                                {service.overview.note}
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-[1.55/1] overflow-hidden rounded-[20px] sm:rounded-[22px]">
                        <Image
                            src={service.overviewImage}
                            alt={service.overview.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ===================================================== */}
            {/* KEY INFORMATION */}
            {/* ===================================================== */}

            <section className="mx-auto w-[92%] max-w-[1400px] pb-14 sm:w-[90%] sm:pb-17 lg:pb-20">
                <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                    <div>
                        <p className="text-[11px] font-extrabold tracking-[0.2em] text-[#159b9c] sm:text-[11px] lg:text-[12px]">
                            INFORMATION
                        </p>

                        <h2 className="mt-3 text-[29px] font-bold leading-[1.1] text-[#102d5b] sm:text-[36px] lg:text-[41px]">
                            {service.keyInformation.title}
                        </h2>

                        <p className="mt-5 max-w-[700px] text-[15px] font-medium leading-[1.75] text-[#71879d] sm:text-[16px] lg:text-[17px]">
                            {service.keyInformation.description}
                        </p>

                        <div className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                            {service.keyInformation.items.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3"
                                >
                                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c8f1eb] text-[#159b9c]">
                                        <Check
                                            size={13}
                                            strokeWidth={3}
                                        />
                                    </div>

                                    <span className="text-[13px] font-medium leading-[1.45] text-[#668198] sm:text-[14px] lg:text-[15px]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ================================================= */}
                    {/* CONFIDENCE CARD */}
                    {/* ================================================= */}

                    <div className="relative overflow-hidden rounded-[22px] bg-[#eefaf8] p-7 sm:p-8 lg:p-9">
                        <div className="absolute -bottom-12 -right-12 h-36 w-36 rounded-full border-[18px] border-[#dcf6f3]" />

                        <div className="relative">
                            <div className="flex items-start gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c9f1ec] text-[#159b9c]">
                                    <Headphones
                                        size={26}
                                        strokeWidth={2}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-[22px] font-bold leading-[1.1] text-[#102d5b] sm:text-[24px]">
                                        {service.confidenceCard.title}
                                    </h3>

                                    <p className="mt-2.5 text-[13px] font-medium leading-[1.6] text-[#71879d] sm:text-[14px]">
                                        {service.confidenceCard.description}
                                    </p>
                                </div>
                            </div>

                            <div className="my-7 h-px w-12 bg-[#159b9c]" />

                            <div className="space-y-5">
                                {service.confidenceCard.items.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d9f5f1] text-[#159b9c]">
                                            <Plane
                                                size={16}
                                                strokeWidth={2}
                                            />
                                        </div>

                                        <span className="text-[13px] font-semibold text-[#557492] sm:text-[14px]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================================================== */}
            {/* GENERAL CONDITIONS */}
            {/* ===================================================== */}

            <section className="bg-[#eefafa]">
                <div className="mx-auto grid w-[92%] max-w-[1400px] items-center gap-10 py-14 sm:w-[90%] sm:py-17 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
                    <div className="relative aspect-[1.1/1] overflow-hidden rounded-[20px]">
                        <Image
                            src={service.conditionsImage}
                            alt={service.generalConditions.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-[11px] font-extrabold tracking-[0.2em] text-[#159b9c] sm:text-[11px] lg:text-[12px]">
                            GENERAL CONDITIONS
                        </p>

                        <h2 className="mt-3 text-[30px] font-bold leading-[1.1] text-[#102d5b] sm:text-[36px] lg:text-[42px]">
                            {service.generalConditions.title}
                        </h2>

                        <p className="mt-5 text-[15px] font-medium leading-[1.75] text-[#71879d] sm:text-[16px] lg:text-[17px]">
                            {service.generalConditions.description}
                        </p>

                        <div className="mt-6 space-y-4">
                            {service.generalConditions.points.map((point) => (
                                <div
                                    key={point}
                                    className="flex items-start gap-3"
                                >
                                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c6eee8] text-[#159b9c]">
                                        <Check
                                            size={13}
                                            strokeWidth={3}
                                        />
                                    </div>

                                    <p className="text-[13px] font-medium leading-[1.6] text-[#668198] sm:text-[14px] lg:text-[15px]">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-7 text-[13px] font-medium leading-[1.65] text-[#668198] sm:text-[14px]">
                            {service.generalConditions.footerText}
                        </p>
                    </div>
                </div>
            </section>

            {/* ===================================================== */}
            {/* RELATED SERVICES */}
            {/* ===================================================== */}

            <section className="mx-auto w-[92%] max-w-[1400px] py-14 sm:w-[90%] sm:py-17 lg:py-20">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-[11px] font-extrabold tracking-[0.2em] text-[#159b9c] sm:text-[11px] lg:text-[12px]">
                            EXPLORE MORE
                        </p>

                        <h2 className="mt-3 text-[30px] font-bold text-[#102d5b] sm:text-[36px] lg:text-[42px]">
                            Other Travel Services
                        </h2>

                        <p className="mt-3 max-w-[680px] text-[14px] font-medium leading-[1.6] text-[#71879d] sm:text-[16px]">
                            Get additional assistance for different parts of
                            your journey.
                        </p>
                    </div>

                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 self-start rounded-full border border-[#b9d2d8] px-5 py-3 text-[12px] font-bold text-[#159b9c] transition-all hover:border-[#159b9c] hover:bg-[#159b9c] hover:text-white sm:self-auto sm:text-[13px]"
                    >
                        View All Services
                        <ArrowRight size={15} />
                    </Link>
                </div>

                <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {related.slice(0, 4).map((item) => (
                        <Link
                            key={item.slug}
                            href={`/services/${item.slug}`}
                            className="group rounded-[18px] border border-[#e6f0f1] bg-white p-5 shadow-[0_8px_25px_rgba(0,56,59,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(0,56,59,0.09)] sm:p-6"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4f8f5] text-[#159b9c]">
                                    <Plane size={19} />
                                </div>

                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9dfe1] text-[#159b9c] transition-all group-hover:bg-[#159b9c] group-hover:text-white">
                                    <ArrowRight size={15} />
                                </div>
                            </div>

                            <h3 className="mt-5 text-[17px] font-bold leading-[1.25] text-[#102d5b] sm:text-[18px]">
                                {item.shortTitle}
                            </h3>

                            <p className="mt-2.5 line-clamp-3 text-[13px] font-medium leading-[1.6] text-[#8091a5] sm:text-[14px]">
                                {item.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}