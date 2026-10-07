"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#002f47]">
            {/* Background Image */}
            <div
                className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    bg-no-repeat
                "
                style={{
                    backgroundImage:
                        "url('/images/flight.png')",
                }}
            />



            {/* Subtle Gradient */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#002f47]/95
                    via-[#002f47]/85
                    to-[#002f47]/65
                "
            />

            {/* Content */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[360px]
                    w-full
                    max-w-[1200px]
                    items-center
                    justify-between
                    px-5
                    py-14
                    sm:min-h-[380px]
                    sm:px-8
                    lg:min-h-[400px]
                    lg:px-10
                    lg:py-16
                "
            >
                <div className="max-w-[620px]">
                    {/* Eyebrow */}
                    <p
                        className="
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-[#5bd2c7]
                            sm:text-[12px]
                        "
                    >
                        Ready when you are
                    </p>

                    {/* Heading */}
                    <h2
                        className="
                            mt-3
                            max-w-[600px]
                            text-[34px]
                            font-bold
                            leading-[1.05]
                            tracking-[-0.035em]
                            text-white
                            sm:text-[42px]
                            lg:text-[48px]
                        "
                    >
                        Your next trip starts with
                        <br className="hidden sm:block" />
                        the right help.
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            mt-4
                            max-w-[540px]
                            text-[15px]
                            font-medium
                            leading-[1.6]
                            text-white/85
                            sm:text-[17px]
                        "
                    >
                        Call 98765433210 and speak with a travel
                        specialist today.
                    </p>
                </div>
                {/* Actions */}
                <div
                    className="
                            mt-7
                            flex
                            flex-col
                            gap-3
                            sm:flex-row
                        "
                >
                    <Link
                        href="tel:9876543210"
                        className="
                                inline-flex
                                h-12
                                items-center
                                justify-center
                                gap-4
                                rounded-full
                                bg-[#18b9ad]
                                px-7
                                py-8
                                text-[14px]
                                font-bold
                                text-white
                                transition-all
                                duration-300
                                hover:bg-[#159f96]
                                hover:shadow-lg
                                sm:text-[15px]
                                md:text-[30px]
                            "
                    >
                        <Phone
                            size={30}
                            strokeWidth={2.5}
                        />

                        <span className="hidden md:flex">
                           9876543210
                        </span>
                    </Link>

                    

                </div>
            </div>
        </section>
    );
}