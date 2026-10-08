export interface AirlinePolicyFAQ {
    question: string;
    answer: string;
}

export interface AirlinePolicySection {
    title: string;
    description: string;
    points: string[];
}

export interface AirlinePolicyContent {
    slug: string;
    label: string;
    shortTitle: string;
    title: string;
    description: string;

    heroImage: string;
    overviewImage: string;
    secondaryImage: string;

    heroPoints: {
        title: string;
        description: string;
    }[];

    overview: {
        title: string;
        paragraphs: string[];
        note: string;
    };

    quickInfo: {
        title: string;
        description: string;
        items: {
            title: string;
            description: string;
        }[];
    };

    sections: AirlinePolicySection[];

    process: {
        number: string;
        title: string;
        description: string;
    }[];

    tips: string[];

    faq: AirlinePolicyFAQ[];
}

export const airlinePolicyContent: Record<
    string,
    AirlinePolicyContent
> = {
    "flight-change": {
        slug: "flight-change",
        label: "FLIGHT CHANGE POLICY",
        shortTitle: "Flight Changes",
        title: "Flight Change Policy",
        description:
            "Need to change your travel plans? Understand airline change rules, fare differences, deadlines, and the important details to check before modifying your flight.",

        heroImage:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85",

        overviewImage:
            "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1000&q=85",

        secondaryImage:
            "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1000&q=85",

        heroPoints: [
            {
                title: "Flexible Options",
                description: "Review available flight alternatives.",
            },
            {
                title: "Clear Fare Rules",
                description: "Understand fees and fare differences.",
            },
            {
                title: "Travel Support",
                description: "Get help before changing your booking.",
            },
        ],

        overview: {
            title: "What Does a Flight Change Mean?",
            paragraphs: [
                "A flight change allows a passenger to modify an existing reservation instead of cancelling the entire booking and purchasing a new ticket.",
                "Depending on the airline, fare type, route, and timing of the request, you may be able to change your travel date, departure time, flight, or in some cases your route.",
                "Some tickets offer greater flexibility than others. A change may involve a change fee, fare difference, or both.",
            ],
            note:
                "Airline change rules are different for every carrier and fare type. Always check the conditions attached to your specific ticket before making a change.",
        },

        quickInfo: {
            title: "Flight Change at a Glance",
            description:
                "These are the main areas to review before requesting a flight change.",
            items: [
                {
                    title: "Change Deadline",
                    description:
                        "Some airlines require changes to be completed before departure.",
                },
                {
                    title: "Fare Difference",
                    description:
                        "A higher-priced replacement flight may require an additional payment.",
                },
                {
                    title: "Change Fee",
                    description:
                        "Certain fares may include a separate airline change charge.",
                },
                {
                    title: "Fare Conditions",
                    description:
                        "Your ticket type determines how flexible your reservation is.",
                },
                {
                    title: "Seat Selection",
                    description:
                        "Your original seat may not automatically transfer.",
                },
                {
                    title: "Baggage",
                    description:
                        "Baggage allowance may depend on the new itinerary and fare.",
                },
            ],
        },

        sections: [
            {
                title: "Changing Your Travel Date",
                description:
                    "One of the most common flight changes is moving your departure to a different date.",
                points: [
                    "Availability on the new travel date must generally exist.",
                    "The new fare may be higher or lower than the original fare.",
                    "A fare difference may apply when the new flight costs more.",
                    "Some flexible fares may allow changes with reduced or no change fees.",
                    "The new ticket conditions may differ from the original reservation.",
                ],
            },
            {
                title: "Changing Your Flight Time",
                description:
                    "If your schedule changes, you may be able to move to another flight on the same day.",
                points: [
                    "The airline must have an eligible alternative available.",
                    "Different flight times may have different fares.",
                    "Connection times should be checked carefully.",
                    "Airport and terminal information should be reviewed after the change.",
                    "Always confirm the updated itinerary before travelling.",
                ],
            },
            {
                title: "Fare Difference and Change Fees",
                description:
                    "The final amount payable for a change depends on the airline and ticket conditions.",
                points: [
                    "A change fee and fare difference are separate charges.",
                    "Some airlines waive change fees on selected fares.",
                    "Promotional and restricted fares may have limited flexibility.",
                    "If the replacement flight costs more, the difference may be collected.",
                    "Refunds for lower-priced replacement flights depend on airline rules.",
                ],
            },
        ],

        process: [
            {
                number: "01",
                title: "Review Your Booking",
                description:
                    "Check your ticket type, travel date, airline, and existing fare conditions.",
            },
            {
                number: "02",
                title: "Explore Alternatives",
                description:
                    "Look at available dates, flight times, and replacement itineraries.",
            },
            {
                number: "03",
                title: "Check the Cost",
                description:
                    "Confirm whether a change fee or fare difference applies.",
            },
            {
                number: "04",
                title: "Confirm the Change",
                description:
                    "Once the new itinerary is confirmed, review the updated booking carefully.",
            },
        ],

        tips: [
            "Make changes as early as possible when your plans are known.",
            "Compare alternative flight dates before confirming a change.",
            "Check the complete fare conditions before paying.",
            "Review baggage and seat details after the change.",
            "Keep your updated confirmation accessible.",
        ],

        faq: [
            {
                question: "Can I change my flight after booking?",
                answer:
                    "In many cases, yes. Whether a change is permitted depends on the airline, fare type, route, and ticket conditions.",
            },
            {
                question: "Will I have to pay to change my flight?",
                answer:
                    "You may need to pay a change fee, a fare difference, or both. Some flexible fares may allow changes with reduced or no change fees.",
            },
            {
                question: "Can I change the date of my flight?",
                answer:
                    "Usually, if the fare permits changes and seats are available on the requested date. The airline may recalculate the fare.",
            },
            {
                question: "What happens if the new flight is cheaper?",
                answer:
                    "Whether you receive a refund or travel credit depends on the airline and fare rules. Some fares do not provide a refund for a lower-priced replacement.",
            },
            {
                question: "Can I change my flight on the day of departure?",
                answer:
                    "Some airlines allow same-day changes under specific conditions, while others may restrict them. Always check the airline's rules before departure.",
            },
            {
                question: "Will my baggage allowance remain the same?",
                answer:
                    "Not necessarily. Your baggage allowance may depend on the new flight, fare type, route, and airline.",
            },
        ],
    },

    cancellation: {
        slug: "cancellation",
        label: "CANCELLATION POLICY",
        shortTitle: "Flight Cancellation",
        title: "Flight Cancellation Policy",
        description:
            "Before cancelling your flight, understand refund eligibility, cancellation charges, travel credits, deadlines, and the conditions attached to your ticket.",

        heroImage:
            "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1400&q=85",

        overviewImage:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",

        secondaryImage:
            "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1000&q=85",

        heroPoints: [
            {
                title: "Know Your Options",
                description: "Review cancellation conditions first.",
            },
            {
                title: "Refund Guidance",
                description: "Understand potential refund eligibility.",
            },
            {
                title: "Clear Next Steps",
                description: "Know what happens after cancellation.",
            },
        ],

        overview: {
            title: "Understanding Flight Cancellations",
            paragraphs: [
                "Cancelling a flight means ending your existing reservation before travel. The amount you may receive back depends heavily on your airline, fare type, route, and ticket conditions.",
                "Some tickets may be refundable, while others may only provide a travel credit or may be non-refundable.",
                "Taxes, government charges, airline fees, and unused portions of a ticket may each have different refund conditions.",
            ],
            note:
                "Never assume that a ticket is refundable. Review the fare conditions before cancelling because completing a cancellation can affect your available options.",
        },

        quickInfo: {
            title: "Cancellation at a Glance",
            description:
                "Check these details before submitting a cancellation request.",
            items: [
                {
                    title: "Refund Eligibility",
                    description:
                        "Your fare conditions determine whether a refund may be available.",
                },
                {
                    title: "Cancellation Fee",
                    description:
                        "Some fares may have a cancellation charge.",
                },
                {
                    title: "Travel Credit",
                    description:
                        "Certain airlines may offer credit instead of a cash refund.",
                },
                {
                    title: "Taxes & Fees",
                    description:
                        "Unused taxes and charges may have separate refund rules.",
                },
                {
                    title: "Processing Time",
                    description:
                        "Refund timing depends on the airline and payment method.",
                },
                {
                    title: "No-Show Rules",
                    description:
                        "Missing a flight without cancelling may affect your refund.",
                },
            ],
        },

        sections: [
            {
                title: "Refundable and Non-Refundable Tickets",
                description:
                    "Your ticket's fare conditions are one of the most important factors in determining your cancellation options.",
                points: [
                    "Refundable tickets generally provide greater flexibility.",
                    "Non-refundable tickets may not provide a refund of the base fare.",
                    "Some non-refundable fares may still allow eligible taxes or credits.",
                    "Refund conditions can vary even between different fares on the same airline.",
                    "Always review the exact fare rules for your booking.",
                ],
            },
            {
                title: "Cancellation Charges",
                description:
                    "Depending on your ticket, cancelling may result in a fee or deduction.",
                points: [
                    "Cancellation charges vary by airline and fare.",
                    "The charge may depend on how close cancellation is to departure.",
                    "Some flexible fares may have lower cancellation costs.",
                    "Promotional fares may have strict restrictions.",
                    "A cancellation charge may be deducted before any eligible refund is processed.",
                ],
            },
            {
                title: "Refund Processing",
                description:
                    "A refund is not always immediate after the cancellation is completed.",
                points: [
                    "Processing time varies by airline.",
                    "Payment providers may require additional processing time.",
                    "The refund may return to the original payment method.",
                    "Travel credits may have separate validity conditions.",
                    "Keep your cancellation confirmation until the refund or credit is received.",
                ],
            },
        ],

        process: [
            {
                number: "01",
                title: "Check Your Fare",
                description:
                    "Review whether your ticket is refundable, credit-eligible, or restricted.",
            },
            {
                number: "02",
                title: "Review Charges",
                description:
                    "Check cancellation fees and any other applicable deductions.",
            },
            {
                number: "03",
                title: "Cancel the Booking",
                description:
                    "Submit the cancellation request through the applicable airline or booking channel.",
            },
            {
                number: "04",
                title: "Track Your Refund",
                description:
                    "Keep your confirmation and monitor the refund or travel credit status.",
            },
        ],

        tips: [
            "Review your fare rules before cancelling.",
            "Avoid becoming a no-show if cancellation is still possible.",
            "Keep your booking and cancellation reference numbers.",
            "Ask whether a travel credit is available before choosing a refund.",
            "Check refund timelines after cancellation.",
        ],

        faq: [
            {
                question: "Can I cancel my flight and get a refund?",
                answer:
                    "It depends on your fare conditions, airline rules, and the circumstances of the cancellation. Some tickets are refundable while others may provide only a credit or no refund.",
            },
            {
                question: "Are non-refundable flights completely non-refundable?",
                answer:
                    "Not necessarily. Certain taxes, government charges, or travel credits may still be available depending on the airline's rules.",
            },
            {
                question: "How long does an airline refund take?",
                answer:
                    "Refund processing times vary by airline and payment method. The airline may process the refund first, followed by your bank or card provider.",
            },
            {
                question: "What happens if I don't cancel and simply miss my flight?",
                answer:
                    "A no-show can trigger additional restrictions and may affect the remaining portions of your itinerary. It is generally better to check the airline's cancellation or change options before departure.",
            },
            {
                question: "Can I get a travel credit instead of a refund?",
                answer:
                    "Some airlines offer travel credits for eligible bookings. The value, validity period, and conditions vary.",
            },
        ],
    },

    "name-change": {
        slug: "name-change",
        label: "NAME CHANGE POLICY",
        shortTitle: "Name Corrections",
        title: "Airline Name Change & Correction Policy",
        description:
            "Passenger names must match travel documents. Learn the difference between a simple name correction and a passenger-name change before requesting an update.",

        heroImage:
            "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=1400&q=85",

        overviewImage:
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1000&q=85",

        secondaryImage:
            "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1000&q=85",

        heroPoints: [
            {
                title: "Check Your Name",
                description: "Compare your booking with your ID.",
            },
            {
                title: "Correct Early",
                description: "Request corrections before departure.",
            },
            {
                title: "Avoid Problems",
                description: "Travel documents should match your booking.",
            },
        ],

        overview: {
            title: "Why Passenger Names Matter",
            paragraphs: [
                "Airlines generally require the passenger name on a reservation to correspond with the passenger's valid travel document.",
                "A minor spelling correction may be treated differently from transferring a ticket to another person.",
                "Airlines may have specific rules for correcting titles, spelling errors, missing middle names, or other passenger-name issues.",
            ],
            note:
                "A name correction is not always the same as a name change. Never assume that a ticket can be transferred from one passenger to another.",
        },

        quickInfo: {
            title: "Name Policy at a Glance",
            description:
                "Review these details when checking a passenger name.",
            items: [
                {
                    title: "Spelling",
                    description:
                        "Check that the name is entered correctly.",
                },
                {
                    title: "Travel Document",
                    description:
                        "The reservation should correspond with your identification.",
                },
                {
                    title: "Middle Name",
                    description:
                        "Airline formatting rules may differ.",
                },
                {
                    title: "Title",
                    description:
                        "Titles may follow specific airline formatting rules.",
                },
                {
                    title: "Name Correction",
                    description:
                        "Minor errors may sometimes be corrected.",
                },
                {
                    title: "Passenger Transfer",
                    description:
                        "Tickets generally cannot simply be transferred to another person.",
                },
            ],
        },

        sections: [
            {
                title: "Minor Name Corrections",
                description:
                    "Some airlines permit limited corrections when the reservation contains a genuine spelling or formatting mistake.",
                points: [
                    "The correction policy varies by airline.",
                    "Some airlines limit the number of characters that can be corrected.",
                    "Supporting identification may be requested.",
                    "A correction may need to be completed before check-in.",
                    "Fees may apply depending on the airline and booking channel.",
                ],
            },
            {
                title: "Name Changes vs Name Corrections",
                description:
                    "These two terms can have very different meanings under airline rules.",
                points: [
                    "A correction usually fixes an error belonging to the same passenger.",
                    "A passenger transfer means replacing one traveller with another.",
                    "Many airlines do not permit passenger transfers.",
                    "Marriage or legal name changes may require supporting documentation.",
                    "Always check the airline's specific policy before making a request.",
                ],
            },
            {
                title: "Travel Documents",
                description:
                    "The safest approach is to check your booking against the document you intend to use for travel.",
                points: [
                    "Review your name immediately after booking.",
                    "Check spelling carefully.",
                    "Use the same identity information required by the airline.",
                    "Verify passport information for international travel where required.",
                    "Correct errors as early as possible.",
                ],
            },
        ],

        process: [
            {
                number: "01",
                title: "Compare Your Details",
                description:
                    "Check the booking name against your passport or accepted travel document.",
            },
            {
                number: "02",
                title: "Identify the Issue",
                description:
                    "Determine whether the issue is a typo, formatting problem, or actual passenger-name change.",
            },
            {
                number: "03",
                title: "Check Airline Rules",
                description:
                    "Review the applicable airline's name correction conditions.",
            },
            {
                number: "04",
                title: "Request the Update",
                description:
                    "Submit the correction through the appropriate airline or booking channel.",
            },
        ],

        tips: [
            "Review passenger names immediately after receiving your confirmation.",
            "Do not wait until airport check-in to report a spelling issue.",
            "Keep identification documents available when requesting a correction.",
            "Do not assume that a ticket can be transferred to another traveller.",
            "Check the airline's exact name correction rules.",
        ],

        faq: [
            {
                question: "Can I correct a spelling mistake on my flight ticket?",
                answer:
                    "Many airlines allow certain minor corrections, but the permitted changes and fees vary by carrier.",
            },
            {
                question: "Can I change the passenger to another person?",
                answer:
                    "Generally, airline tickets are not freely transferable. Some airlines may offer limited name-change options, but this is carrier-specific.",
            },
            {
                question: "What if my middle name is missing?",
                answer:
                    "Airline formatting requirements vary. Some carriers may not require a middle name to appear in a particular format, while others may request a correction.",
            },
            {
                question: "Can I change my name after marriage?",
                answer:
                    "Some airlines may permit a legal name update with supporting documentation. Contact the airline or booking provider before travelling.",
            },
            {
                question: "Is there a fee for correcting a name?",
                answer:
                    "A fee may apply depending on the airline, fare, booking channel, and type of correction.",
            },
        ],
    },

    baggage: {
        slug: "baggage",
        label: "BAGGAGE POLICY",
        shortTitle: "Baggage",
        title: "Airline Baggage Policy",
        description:
            "Understand cabin baggage, checked baggage, weight limits, size restrictions, excess baggage, and restricted items before you head to the airport.",

        heroImage:
            "https://images.unsplash.com/photo-1632165061207-81a8a3baee47?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        overviewImage:
            "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=1000&q=85",

        secondaryImage:
            "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1000&q=85",

        heroPoints: [
            {
                title: "Pack Smart",
                description: "Know your allowance before departure.",
            },
            {
                title: "Avoid Extra Fees",
                description: "Check weight and size limits.",
            },
            {
                title: "Travel Prepared",
                description: "Know restricted items in advance.",
            },
        ],

        overview: {
            title: "What Baggage Can You Take?",
            paragraphs: [
                "Airlines generally divide passenger baggage into cabin baggage and checked baggage, with separate limits for each.",
                "Your allowance can depend on your airline, route, cabin class, fare type, frequent-flyer status, and ticket conditions.",
                "Baggage that exceeds the permitted weight, size, or number of pieces may be subject to additional charges or restrictions.",
            ],
            note:
                "Baggage allowances are airline-specific. Always check the baggage allowance displayed on your booking before travelling.",
        },

        quickInfo: {
            title: "Baggage at a Glance",
            description:
                "These are the key baggage areas to check before your flight.",
            items: [
                {
                    title: "Cabin Baggage",
                    description:
                        "Check your permitted carry-on size and weight.",
                },
                {
                    title: "Checked Baggage",
                    description:
                        "Review the number and weight of checked pieces.",
                },
                {
                    title: "Size Limits",
                    description:
                        "Oversized baggage may require special handling.",
                },
                {
                    title: "Excess Baggage",
                    description:
                        "Additional charges may apply to excess allowance.",
                },
                {
                    title: "Restricted Items",
                    description:
                        "Certain articles cannot be carried in baggage.",
                },
                {
                    title: "Special Baggage",
                    description:
                        "Sports equipment and unusual items may require special rules.",
                },
            ],
        },

        sections: [
            {
                title: "Cabin Baggage",
                description:
                    "Cabin baggage is carried with you into the aircraft cabin and is subject to airline size and weight requirements.",
                points: [
                    "Check the maximum permitted cabin-bag dimensions.",
                    "Weight limits vary by airline and fare.",
                    "Personal items may have separate size requirements.",
                    "Liquids and other restricted items are subject to security regulations.",
                    "Oversized cabin baggage may need to be checked.",
                ],
            },
            {
                title: "Checked Baggage",
                description:
                    "Checked baggage is handed to the airline before security or departure and transported in the aircraft hold.",
                points: [
                    "Your ticket may include a specific number of checked bags.",
                    "Each bag may have a maximum permitted weight.",
                    "Oversized or overweight baggage may attract additional charges.",
                    "Some fares may not include checked baggage.",
                    "Always check the baggage allowance attached to your ticket.",
                ],
            },
            {
                title: "Restricted and Prohibited Items",
                description:
                    "Certain items are restricted or prohibited for aviation safety reasons.",
                points: [
                    "Dangerous goods are subject to strict regulations.",
                    "Sharp objects may have restrictions.",
                    "Some batteries and electronic devices have specific carriage rules.",
                    "Liquids are subject to airport security requirements.",
                    "Airline and airport restrictions may differ depending on the route.",
                ],
            },
        ],

        process: [
            {
                number: "01",
                title: "Check Your Allowance",
                description:
                    "Review your booking to see what cabin and checked baggage is included.",
            },
            {
                number: "02",
                title: "Measure and Weigh",
                description:
                    "Check the dimensions and weight of your bags before leaving home.",
            },
            {
                number: "03",
                title: "Remove Restricted Items",
                description:
                    "Review airline and airport rules before packing.",
            },
            {
                number: "04",
                title: "Prepare for Check-In",
                description:
                    "Keep important documents and baggage information accessible.",
            },
        ],

        tips: [
            "Check your baggage allowance before packing.",
            "Weigh your bags at home when possible.",
            "Keep valuables and important documents in your cabin baggage where permitted.",
            "Label your checked baggage with current contact information.",
            "Check special baggage rules for sports equipment and unusual items.",
        ],

        faq: [
            {
                question: "How much baggage can I take on a flight?",
                answer:
                    "The allowance depends on the airline, route, fare type, cabin class, and ticket conditions. Check your booking for the exact allowance.",
            },
            {
                question: "Is cabin baggage included in my ticket?",
                answer:
                    "Many fares include some cabin baggage, but the amount and dimensions vary. Some low-cost or restricted fares may have different conditions.",
            },
            {
                question: "What happens if my checked bag is overweight?",
                answer:
                    "The airline may charge an excess baggage fee or require the contents to be redistributed, depending on its rules.",
            },
            {
                question: "Can I carry liquids in my cabin baggage?",
                answer:
                    "Liquids are subject to airport security rules, which can vary by airport and jurisdiction. Check the departure airport's current requirements.",
            },
            {
                question: "Can I carry sports equipment?",
                answer:
                    "Many airlines accept sports equipment under special baggage rules. Additional charges, packaging requirements, and advance notification may apply.",
            },
            {
                question: "What items are not allowed in checked baggage?",
                answer:
                    "Certain dangerous goods and restricted items cannot be transported. Always check the airline and applicable aviation-safety rules before packing.",
            },
        ],
    },

    "pet-travel": {
        slug: "pet-travel",
        label: "PET TRAVEL POLICY",
        shortTitle: "Pet Travel",
        title: "Airline Pet Travel Policy",
        description:
            "Planning to fly with your pet? Learn about airline approval, carrier requirements, documentation, cabin and cargo options, and travel preparation.",

        heroImage:
            "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=85",

        overviewImage:
            "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1000&q=85",

        secondaryImage:
            "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1000&q=85",

        heroPoints: [
            {
                title: "Plan Early",
                description: "Pet capacity can be limited.",
            },
            {
                title: "Check Documents",
                description: "Requirements vary by destination.",
            },
            {
                title: "Travel Prepared",
                description: "Use an airline-approved carrier.",
            },
        ],

        overview: {
            title: "Flying with Your Pet",
            paragraphs: [
                "Airline pet policies can differ significantly depending on the airline, aircraft, route, destination, animal type, size, and travel conditions.",
                "Depending on the carrier and itinerary, eligible pets may be permitted in the cabin, transported as checked or specially handled animals, or subject to other arrangements.",
                "International travel can involve additional veterinary, health, vaccination, import, quarantine, or documentation requirements.",
            ],
            note:
                "Never assume that a pet can travel simply because the airline operates the route. Pet acceptance must be confirmed with the airline before travel.",
        },

        quickInfo: {
            title: "Pet Travel at a Glance",
            description:
                "Review these areas before booking travel with an animal.",
            items: [
                {
                    title: "Pet Eligibility",
                    description:
                        "Airlines may restrict which animals can travel.",
                },
                {
                    title: "Carrier Size",
                    description:
                        "Cabin carriers must meet airline requirements.",
                },
                {
                    title: "Advance Approval",
                    description:
                        "Pet capacity may be limited and require prior confirmation.",
                },
                {
                    title: "Health Documents",
                    description:
                        "Some routes require veterinary documentation.",
                },
                {
                    title: "Destination Rules",
                    description:
                        "Countries may have separate import requirements.",
                },
                {
                    title: "Pet Fees",
                    description:
                        "Pet travel charges vary by airline and itinerary.",
                },
            ],
        },

        sections: [
            {
                title: "Pets in the Cabin",
                description:
                    "Some airlines allow eligible small pets to travel in the cabin under specific conditions.",
                points: [
                    "The pet generally needs to remain inside an approved carrier.",
                    "The carrier must fit within the airline's permitted dimensions.",
                    "The combined pet and carrier weight may be restricted.",
                    "The pet may need to remain in the carrier during the flight.",
                    "Airline approval may be required before departure.",
                ],
            },
            {
                title: "Pet Travel Documentation",
                description:
                    "Documentation requirements depend on the airline, route, and destination.",
                points: [
                    "A health certificate may be required for certain journeys.",
                    "Vaccination records may be requested.",
                    "Microchip requirements may apply for some international destinations.",
                    "Import permits or other government documents may be required.",
                    "Quarantine requirements can apply depending on the destination.",
                ],
            },
            {
                title: "International Pet Travel",
                description:
                    "International travel with pets requires additional planning because destination-country rules may apply.",
                points: [
                    "Check destination entry requirements before booking.",
                    "Review vaccination and health requirements.",
                    "Check whether an import permit is required.",
                    "Confirm any quarantine requirements.",
                    "Allow sufficient time to obtain required documentation.",
                ],
            },
        ],

        process: [
            {
                number: "01",
                title: "Check Airline Eligibility",
                description:
                    "Confirm that the airline accepts your type of pet on your specific route.",
            },
            {
                number: "02",
                title: "Review Destination Rules",
                description:
                    "Check veterinary and government requirements for your destination.",
            },
            {
                number: "03",
                title: "Prepare the Carrier",
                description:
                    "Use a carrier that meets the airline's requirements.",
            },
            {
                number: "04",
                title: "Confirm Pet Travel",
                description:
                    "Obtain airline confirmation before arriving at the airport.",
            },
        ],

        tips: [
            "Start planning pet travel well before your departure date.",
            "Confirm pet availability before purchasing or finalising your ticket.",
            "Check the carrier dimensions before travelling.",
            "Keep required veterinary documents accessible.",
            "Review destination-country requirements for international trips.",
        ],

        faq: [
            {
                question: "Can I take my pet on a plane?",
                answer:
                    "Some airlines allow eligible pets, but policies vary by airline, route, aircraft, animal type, and size. Always obtain confirmation before travel.",
            },
            {
                question: "Can my pet travel in the cabin?",
                answer:
                    "Some airlines permit eligible small pets in the cabin if they meet the carrier and weight requirements. Availability may be limited.",
            },
            {
                question: "Do I need a pet carrier?",
                answer:
                    "For cabin travel, airlines generally require an appropriate carrier that meets their dimensions and safety requirements.",
            },
            {
                question: "Do pets need health documents?",
                answer:
                    "Depending on the route and destination, health certificates, vaccination records, microchip information, or other documents may be required.",
            },
            {
                question: "Can I travel internationally with my pet?",
                answer:
                    "International pet travel is possible on some routes, but destination-country import requirements can be extensive. Plan well in advance.",
            },
            {
                question: "How much does it cost to fly with a pet?",
                answer:
                    "Pet travel fees vary by airline, route, travel method, and animal. Check the airline's current pet-fee schedule for your itinerary.",
            },
        ],
    },
};