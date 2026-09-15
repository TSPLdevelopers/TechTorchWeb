import React from "react";
import {
  Landmark,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Settings,
  Cog,
  Radio,
  Zap,
  Monitor,
  Package,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Automated compliance, fraud anomaly detection & risk modeling",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Adaptive learning platforms, student analytics & automated grading",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Clinical diagnostic telemetry & secure patient data workflows",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Real-time hyper-personalization & automated inventory prediction",
  },
  {
    icon: Settings,
    title: "Information Technology",
    description:
      "Autonomous system observability & intelligent code assistance",
  },
  {
    icon: Cog,
    title: "Manufacturing",
    description:
      "Computer-vision defect analysis & predictive equipment maintenance",
  },
  {
    icon: Radio,
    title: "Telecommunications",
    description:
      "Network bandwidth orchestration & proactive customer care",
  },
  {
    icon: Zap,
    title: "Energy",
    description:
      "Smart grid load balancing & carbon telemetry optimization",
  },
  {
    icon: Monitor,
    title: "Transportation",
    description:
      "Fleet routing algorithms & predictive supply chain logistics",
  },
  {
    icon: Package,
    title: "FMCG",
    description:
      "Multi-echelon demand forecasting & distributor automation",
  },
];

export default function AIEcosystemIntegration() {
  return (
    <section
      className="
        relative
        flex
        min-h-[650px]
        w-full
        justify-center
        overflow-hidden
        sm:min-h-[700px]
        md:min-h-[760px]
      "
      style={{
        background:
          "radial-gradient(120% 140% at 10% 100%, #4a0a30 0%, #7a0f47 45%, #8a1450 100%)",
      }}
    >
      {/* =====================================================
          DIAGONAL STRIPE OVERLAY
          Very light / subtle like reference
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          sm:opacity-[0.04]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 1px, transparent 1px, transparent 30px)",
        }}
      />

      {/* Additional soft layer */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          px-4
          py-10
          sm:px-6
          sm:py-12
          md:px-8
          md:py-16
          lg:px-10
          lg:py-20
        "
      >
        {/* =====================================================
            EYEBROW
        ====================================================== */}

        <div
          className="
            mb-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/15
            bg-white/5
            px-3
            py-1.5
            sm:mb-6
            sm:px-4
            sm:py-1.5
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />

          <span
            className="
              font-['Inter']
              text-[8px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-rose-100/90
              sm:text-[9px]
              md:text-[10px]
            "
          >
            Ecosystem Integration
          </span>
        </div>

        {/* =====================================================
            HEADING
        ====================================================== */}

        <h1
          className="
            mb-4
            max-w-3xl
            font-['Plus_Jakarta_Sans']
            text-[27px]
            font-bold
            leading-[1.15]
            tracking-[-0.025em]
            text-white
            sm:mb-5
            sm:text-[34px]
            md:text-[40px]
            lg:text-[44px]
          "
        >
          Artificial Intelligence Within Your Business Technology Environment
        </h1>

        {/* =====================================================
            SUB HEADING / BODY
        ====================================================== */}

        <p
          className="
            mb-7
            max-w-3xl
            font-['Inter']
            text-[11.5px]
            leading-[1.65]
            text-rose-100/70
            sm:mb-9
            sm:text-[13px]
            md:mb-10
            md:text-[14px]
          "
        >
          How TechTorch embeds sovereign artificial intelligence seamlessly
          into industry-specific digital architectures, ensuring
          high-compliance execution, data isolation, and immediate domain
          value.
        </p>

        {/* =====================================================
            INDUSTRY GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            sm:gap-4
          "
        >
          {industries.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                group
                flex
                min-h-[78px]
                items-start
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.055]
                px-3
                py-3
                transition-all
                duration-300
                hover:bg-white/[0.08]
                hover:border-white/15
                sm:min-h-[84px]
                sm:gap-4
                sm:px-4
                sm:py-3.5
                md:px-5
                md:py-4
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.08]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                  sm:h-9
                  sm:w-9
                "
              >
                <Icon
                  className="
                    h-3.5
                    w-3.5
                    text-white/90
                    sm:h-4
                    sm:w-4
                  "
                />
              </div>

              {/* Content */}

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    mb-1
                    font-['Plus_Jakarta_Sans']
                    text-[11.5px]
                    font-semibold
                    leading-snug
                    text-white
                    sm:text-[13px]
                    md:text-[14px]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    font-['Inter']
                    text-[9.5px]
                    leading-[1.55]
                    text-rose-100/55
                    sm:text-[10.5px]
                    md:text-[11px]
                    lg:text-[11.5px]
                  "
                >
                  {description}
                </p>
              </div>

              {/* Arrow */}

              <ArrowUpRight
                className="
                  mt-0.5
                  h-3
                  w-3
                  shrink-0
                  text-rose-100/35
                  transition-all
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  group-hover:text-white/70
                  sm:h-3.5
                  sm:w-3.5
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}