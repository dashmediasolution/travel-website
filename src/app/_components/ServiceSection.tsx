"use client";

import Image from "next/image";
import {
    ArrowRight,
    ArrowUpRight,
    Headphones,
    List,
    Map,
    Plane,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    image?: string;
    className?: string;
    variant?: "normal" | "teal" | "light" | "plain";
    lightText?: boolean;
}

const services = [
    {
        title: "Flight Reservations",
        description:
            "Book the right flight at the right price — with expert guidance and real-time support.",
        icon: <Plane size={17} strokeWidth={2.5} />,
        image: "/images/flight.png",
        variant: "normal" as const,
    },
    {
        title: "Flight Changes",
        description:
            "Book the right flight at the right price — with expert guidance and real-time support.",
        icon: <Plane size={17} strokeWidth={2.5} />,
        image: "/images/image_02.png",
        variant: "teal" as const,
    },
    {
        title: "Cancellations",
        description:
            "Book the right flight at the right price — with expert guidance and real-time support.",
        icon: <X size={18} strokeWidth={2.5} />,
        image: "/images/image_01.png",
        variant: "light" as const,
    },
    {
        title: "Travel Planning",
        description:
            "Book the right flight at the right price — with expert guidance and real-time support.",
        icon: <Map size={17} strokeWidth={2.3} />,
        image: "/images/planning.jpg",
        variant: "normal" as const,
    },
    {
        title: "Itinerary Help",
        description:
            "Book the right flight at the right price — with expert guidance and real-time support.",
        icon: <List size={17} strokeWidth={2.3} />,
        variant: "plain" as const,
    },
    {
        title: "Travel Support",
        description:
            "Book the right flight at the right price — with expert guidance and real-time support.",
        icon: <Headphones size={17} strokeWidth={2.3} />,
        image: "/images/image_06.png",
        variant: "teal" as const,
    },
];
function ServiceCard({
    title,
    description,
    icon,
    image,
    className = "",
    variant = "normal",
    lightText = false,
}: ServiceCardProps) {
    const isTeal = variant === "teal";
    const isLight = variant === "light";
    const isPlain = variant === "plain";

    return (
        <article
            className={`
                group
                relative
                h-full
                min-h-[220px]
                overflow-hidden
                rounded-[14px]
                ${isPlain
                    ? "bg-[#ccefed]"
                    : "bg-[#eef8f7]"
                }
                ${className}
            `}
        >
            {/* Image */}
            {image && (
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="
                        (max-width: 639px) 100vw,
                        (max-width: 1023px) 50vw,
                        25vw
                    "
                    className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                    "
                />
            )}

            {/* Teal gradient - only left portion is shaded */}
            {isTeal && (
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#008f91]
                        via-[#008f91]/80
                        via-[48%]
                        to-transparent
                    "
                />
            )}

            {/* Cancellations soft image shade */}
            {isLight && (
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-white/40
                        via-white/15
                        to-transparent
                    "
                />
            )}

            {/* Content */}
            <div
                className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    p-4
                    sm:p-5
                "
            >
                {/* Icon */}
                <div
                    className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[#159b9c]
                    "
                >
                    {icon}
                </div>

                {/* Text */}
                <div className="mt-2.5 max-w-[285px]">
                    <h3
                        className={`
                            text-[30px]
                            font-bold
                            leading-[1.08]
                            tracking-[-0.025em]
                            sm:text-[18px]
                            lg:text-[25px]
                           ${isTeal || lightText
                                ? "text-white"
                                : "text-[#073452]"
                            }
                        `}
                    >
                        {title}
                    </h3>

                    <p
                        className={`
                            mt-1.5
                            max-w-[270px]
                            text-[20px]
                             font-medium
                            leading-[1.25]
                            sm:text-[10px]
                            md:text-base
                            ${isTeal || isLight || lightText
                                ? "text-white"
                                : "text-[#34546a]"
                            }
                        `}
                    >
                        {description}
                    </p>
                </div>

                {/* Arrow */}
                <Button
                    variant="outline"
                    size="icon"
                    className={`
                        mt-auto
                        h-7
                        w-7
                        rounded-full
                        border
                        bg-transparent
                        p-0
                        shadow-none
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        ${isTeal
                            ? "border-white/60 text-white hover:bg-white hover:text-[#00383b]"
                            : "border-[#8bb8bd] text-[#176878] hover:bg-[#159b9c] hover:text-white"
                        }
                    `}
                    aria-label={`Learn more about ${title}`}
                >
                    <ArrowRight
                        size={14}
                        strokeWidth={2.2}
                    />
                </Button>
            </div>
        </article>
    );
}

export default function ServicesSection() {
    return (
        <section
            className="
                w-full
                bg-white
                px-4
                py-12
                sm:px-6
                sm:py-16
                lg:px-8
                lg:py-20
            "
        >
            <div className="mx-auto w-full max-w-[1200px]">

                {/* Header */}
                <div className="mb-7 max-w-[650px] sm:mb-8">
                    <p
                        className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-[#159b9c]
                            sm:text-[11px]
                        "
                    >
                        Services
                    </p>

                    <div className="mt-2 flex items-start justify-between gap-4">
                        <div>
                            <h2
                                className="
                                    max-w-[620px]
                                    text-[30px]
                                    font-bold
                                    leading-[1.08]
                                    tracking-[-0.035em]
                                    text-[#073452]
                                    sm:text-[38px]
                                    lg:text-[42px]
                                "
                            >
                                Support for every step
                                <br className="hidden sm:block" />
                                {" "}of your journey.
                            </h2>

                            <p
                                className="
                                    mt-3
                                    max-w-[600px]
                                    text-[12px]
                                    leading-[1.5]
                                    text-[#9aa9b1]
                                    sm:text-[13px]
                                "
                            >
                                Whether you're planning, mid-trip, or facing
                                the unexpected, our specialists are ready to
                                help with a range of travel needs.
                            </p>
                        </div>

                        <div className="hidden shrink-0 sm:flex">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="
                                    h-10
                                    w-10
                                    rounded-full
                                    text-[#159b9c]
                                    hover:bg-[#e8f7f6]
                                "
                                aria-label="View all services"
                            >
                                <ArrowUpRight size={21} />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* ========================= */}
                {/* SERVICES GRID              */}
                {/* ========================= */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-3

                        md:grid-cols-2

                         lg:grid-cols-[1.5fr_3fr]
                        lg:grid-rows-[415px_162px]
                    "
                >
                    {/* ================================= */}
                    {/* LEFT - FLIGHT RESERVATIONS       */}
                    {/* ================================= */}

                    <ServiceCard
                        title={services[0].title}
                        description={services[0].description}
                        icon={services[0].icon}
                        image={services[0].image}
                        variant="normal"
                        lightText
                        className="
        min-h-[430px]
        md:min-h-[430px]
        lg:row-span-2
        lg:min-h-0
    "
                    />

                    {/* ================================= */}
                    {/* RIGHT SIDE                         */}
                    {/* ================================= */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-3

                            sm:grid-cols-2

                            lg:grid-cols-6
                            lg:grid-rows-[230px_162px]
                        "
                    >
                        {/* Flight Changes */}
                        <ServiceCard
                            title={services[1].title}
                            description={services[1].description}
                            icon={services[1].icon}
                            image={services[1].image}
                            variant="teal"
                            className="
                                min-h-[146px]

                                lg:col-span-3
                             "
                        />

                        {/* Cancellations */}
                        <ServiceCard
                            title={services[2].title}
                            description={services[2].description}
                            icon={services[2].icon}
                            image={services[2].image}
                            variant="light"
                            className="
                                min-h-[146px]

                                lg:col-span-3
                             "
                        />

                        {/* Travel Planning */}
                        <ServiceCard
                            title={services[3].title}
                            description={services[3].description}
                            icon={services[3].icon}
                            image={services[3].image}
                            variant="normal"
                            className="
                                min-h-[350px]

                                lg:col-span-2
                             "
                        />

                        {/* Itinerary Help */}
                        <div
                            className="
        relative
        h-full
        min-h-[350px]
        overflow-hidden
        rounded-[14px]
        bg-[#ccefed]
        lg:col-span-2
    "
                        >
                            {/* Content */}
                            <div
                                className="
            z-10
            flex
            h-full
            flex-col
            p-4
            sm:p-5
        "
                            >
                                {/* Icon */}
                                <div
                                    className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#159b9c]
            "
                                >
                                    <List size={17} strokeWidth={2.3} />
                                </div>

                                {/* Text */}
                                <div className="mt-2.5 max-w-[285px]">
                                    <h3
                                        className="
                    text-3xl
                    font-bold
                    md:text-[1.5rem]
                    leading-[1.08]
                    tracking-[-0.025em]
                    text-[#073452]
                "
                                    >
                                        Itinerary Help
                                    </h3>

                                    <p
                                        className="
                                            mt-1.5
                                            max-w-[270px]
                                            text-base
                                            sm:text-[20px]
                                            md:text-base
                                            font-medium
                                            leading-[1.25]
                                            text-[#34546a]
                                        "
                                    >
                                        Book the right flight at the right price — with expert
                                        guidance and real-time support.
                                    </p>
                                </div>
                            </div>

                            {/* Plane SVG */}
                            <Image
                                src="/images/plane.svg"
                                alt=""
                                width={140}
                                height={100}
                                className="
            absolute
            bottom-7
            right-14
            z-0
            w-[150px]
            object-contain
            opacity-90
        "
                            />
                        </div>

                        {/* Travel Support */}
                        <ServiceCard
                            title={services[5].title}
                            description={services[5].description}
                            icon={services[5].icon}
                            image={services[5].image}
                            variant="teal"
                            className="
                                 min-h-[350px]


                                lg:col-span-2
                             "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}