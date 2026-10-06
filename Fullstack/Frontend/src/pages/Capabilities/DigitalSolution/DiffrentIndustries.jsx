import React from "react";
import {
  Landmark,
  Heart,
  Factory,
  ShoppingCart,
  ArrowLeftRight,
  Zap,
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: Landmark,
    tag: "REGULATED FINTECH",
    title: "Finance & Banking",
    description:
      "Automated ledger reconciliation, risk modeling pipelines, KYC orchestration, and institutional transactional security compliance.",
    focus: "Bank-Grade Integrity",
    image: "/banking.png",
    alt: "Financial analysts working at a trading floor",
  },
  {
    icon: Heart,
    tag: "CLINICAL CARE",
    title: "Healthcare & Life Sciences",
    description:
      "HIPAA-compliant EHR integrations, telehealth routing, bedside staff management, and patient portal lifecycle orchestration.",
    focus: "Zero-Latency Care Data",
    image: "/healthcare.png",
    alt: "Clinicians reviewing a patient chart in a hospital",
  },
  {
    icon: Factory,
    tag: "INDUSTRY 4.0",
    title: "Manufacturing & Industrial",
    description:
      "Shop floor IoT telemetry, automated bill-of-materials scheduling, equipment maintenance prediction, and supplier traceability.",
    focus: "Continuous Throughput",
    image: "/industrial.png",
    alt: "Robotic arm on a manufacturing production line",
  },
  {
    icon: ShoppingCart,
    tag: "OMNICHANNEL",
    title: "E-Commerce & Retail",
    description:
      "High-concurrency checkout engines, dynamic multi-warehouse catalog sync, personalized merchandising, and returns automation.",
    focus: "Sub-Second Conversion",
    image: "/retail.png",
    alt: "Automated fulfillment warehouse with shelving units",
  },
  {
    icon: ArrowLeftRight,
    tag: "GLOBAL FREIGHT",
    title: "Logistics & Transportation",
    description:
      "Dynamic multi-modal route optimization, fleet dispatch telematics, warehouse sorting intelligence, and customs documentation.",
    focus: "Live Transit Transparency",
    image: "/logistic.png",
    alt: "Logistics team monitoring fleet dispatch screens",
  },
  {
    icon: Zap,
    tag: "CRITICAL INFRA",
    title: "Energy, Utilities & Telecom",
    description:
      "Smart grid asset tracking, billing convergence across millions of subscribers, predictive outage alerts, and field service dispatch.",
    focus: "High-Availability Scale",
    image: "/energy.png",
    alt: "Control room operators monitoring energy grid dashboards",
  },
];

export default function IndustriesSection() {
  return (
    <section
      className="
        w-full
        bg-white
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-16
        lg:px-10
        lg:py-18
      "
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mx-auto
            mb-8
            w-full
            max-w-2xl
            text-center
            sm:mb-10
            md:mb-12
          "
        >
          {/* Label */}

          <div
            className="
              mb-3
              flex
              items-center
              justify-center
              gap-2.5
              sm:mb-4
              sm:gap-3
            "
          >
            <span
              className="h-px w-6 sm:w-8 md:w-10"
              style={{ backgroundColor: "#9d174d" }}
            />

            <span
              className="
                font-['Inter']
                text-[9px]
                font-bold
                uppercase
                tracking-[0.13em]
                sm:text-[10px]
                md:text-[12px]
              "
              style={{ color: "#9d174d" }}
            >
              Built for Different Industries
            </span>

            <span
              className="h-px w-6 sm:w-8 md:w-10"
              style={{ backgroundColor: "#9d174d" }}
            />
          </div>

          {/* Main Heading */}

          <h2
            className="
              mb-3
              font-['Plus_Jakarta_Sans']
              text-[22px]
              font-bold
              leading-[1.2]
              tracking-[-0.02em]
              text-slate-900
              sm:mb-4
              sm:text-[27px]
              md:text-[30px]
              lg:text-[32px]
            "
          >
            Technology That Understands Your Industry
          </h2>

          {/* Sub Heading */}

          <p
            className="
              px-1
              font-['Inter']
              text-[11.5px]
              leading-[1.65]
              text-slate-500
              sm:px-0
              sm:text-[13px]
              md:text-[14px]
              lg:text-[15px]
            "
          >
            Different industries face fundamentally distinct operational
            mechanics. Rather than rigid one-size-fits-all software, we
            tailor architecture around the specific compliance, regulatory,
            transaction velocity, and human workflows defining each
            enterprise sector.
          </p>
        </div>

        {/* =====================================================
            INDUSTRY CARDS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {INDUSTRIES.map(
            ({
              icon: Icon,
              tag,
              title,
              description,
              focus,
              image,
              alt,
            }) => (
              <div
                key={title}
                className="
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-100
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                {/* ================= IMAGE ================= */}

                <div className="w-full overflow-hidden">
                  <img
                    src={image}
                    alt={alt}
                    className="
                      block
                      aspect-[16/9]
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-[1.02]
                    "
                  />
                </div>

                {/* ================= CARD CONTENT ================= */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-4
                    sm:p-5
                  "
                >
                  {/* Icon + Tag */}

                  <div
                    className="
                      mb-3
                      flex
                      items-center
                      justify-between
                      gap-2
                      sm:mb-4
                    "
                  >
                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-slate-200
                        sm:h-9
                        sm:w-9
                      "
                    >
                      <Icon
                        size={15}
                        className="text-slate-700 sm:h-4 sm:w-4"
                        strokeWidth={2}
                      />
                    </div>

                    {/* Tag */}

                    <span
                      className="
                        max-w-[75%]
                        truncate
                        rounded-full
                        px-2
                        py-1
                        font-['Inter']
                        text-[8px]
                        font-bold
                        tracking-[0.04em]
                        sm:px-2.5
                        sm:text-[9px]
                        md:text-[10px]
                      "
                      style={{
                        backgroundColor: "#fdeef4",
                        color: "#9d174d",
                      }}
                    >
                      {tag}
                    </span>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mb-1.5
                      font-['Plus_Jakarta_Sans']
                      text-[14px]
                      font-bold
                      leading-[1.3]
                      text-slate-900
                      sm:mb-2
                      sm:text-[15px]
                      md:text-[15.5px]
                    "
                  >
                    {title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mb-4
                      flex-1
                      font-['Inter']
                      text-[11.5px]
                      leading-[1.65]
                      text-slate-500
                      sm:text-[12px]
                      md:text-[13px]
                    "
                  >
                    {description}
                  </p>

                  {/* ================= CORE FOCUS ================= */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-2
                      border-t
                      border-slate-100
                      pt-3
                    "
                  >
                    <span
                      className="
                        flex-shrink-0
                        font-['Inter']
                        text-[9px]
                        text-slate-400
                        sm:text-[10px]
                        md:text-[11.5px]
                      "
                    >
                      Core Focus
                    </span>

                    <span
                      className="
                        text-right
                        font-['Inter']
                        text-[10px]
                        font-semibold
                        leading-tight
                        text-slate-700
                        sm:text-[11px]
                        md:text-[12px]
                      "
                    >
                      {focus}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}