import React from "react";
import {
  Network,
  ShieldCheck,
  Fingerprint,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Infrastructure-Free Deployment",
  },
  {
    icon: ShieldCheck,
    title: "Zero Upfront Complexity",
  },
  {
    icon: Fingerprint,
    title: "Enterprise Model Governance",
  },
  {
    icon: Sparkles,
    title: "Future-Ready Integration",
  },
];

export default function AIServiceHero() {
  return (
    <section
      className="
        flex
        min-h-[580px]
        w-full
        items-center
        sm:min-h-[600px]
        md:min-h-[620px]
        lg:min-h-[640px]
      "
      style={{
        background:
          "radial-gradient(120% 140% at 15% 10%, #5c0f38 0%, #3a0a26 45%, #24061a 100%)",
      }}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          px-4
          py-10
          sm:px-6
          sm:py-12
          md:px-8
          md:py-14
          lg:px-10
          lg:py-16
        "
      >
        {/* ================= EYEBROW ================= */}

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
              text-[9px]
              font-medium
              tracking-wide
              text-rose-100/90
              sm:text-[10px]
              md:text-[11px]
            "
          >
            Artificial Intelligence as a Service
          </span>
        </div>

        {/* ================= HEADLINE ================= */}

        <h1
          className="
            mb-4
            max-w-3xl
            font-['Plus_Jakarta_Sans']
            text-[28px]
            font-bold
            leading-[1.15]
            tracking-[-0.025em]
            text-white
            sm:mb-5
            sm:text-[36px]
            md:text-[44px]
            lg:text-[48px]
          "
        >
          Artificial Intelligence as a Service for Modern Businesses
        </h1>

        {/* ================= BODY COPY ================= */}

        <div
          className="
            mb-6
            max-w-2xl
            space-y-3
            sm:mb-7
            sm:space-y-4
            md:max-w-2xl
          "
        >
          <p
            className="
              font-['Inter']
              text-[12px]
              leading-[1.65]
              text-rose-100/70
              sm:text-[13px]
              md:text-[14px]
              lg:text-[15px]
            "
          >
            At TechTorch Solutions, we provide Artificial Intelligence as a
            Service that enables businesses to harness the power of AI without
            the complexity of building and maintaining their own
            infrastructure.
          </p>

          <p
            className="
              font-['Inter']
              text-[12px]
              leading-[1.65]
              text-rose-100/55
              sm:text-[13px]
              md:text-[14px]
              lg:text-[15px]
            "
          >
            Our approach is focused on making advanced technology more
            accessible to businesses while helping them move towards a more
            efficient, technology-driven and future-ready environment.
          </p>
        </div>

        {/* ================= CTA ================= */}

        <button
          className="
            mb-8
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-white
            px-5
            py-2.5
            font-['Inter']
            text-[11px]
            font-semibold
            text-[#3a0a26]
            transition-all
            duration-300
            hover:bg-rose-50
            hover:-translate-y-0.5
            sm:mb-10
            sm:px-6
            sm:py-3
            sm:text-[12px]
            md:text-[13px]
          "
        >
          Talk to Our Experts

          <ArrowRight
            className="h-3.5 w-3.5 sm:h-4 sm:w-4"
          />
        </button>

        {/* ================= DIVIDER ================= */}

        <div className="mb-5 border-t border-white/10 sm:mb-6" />

        {/* ================= FEATURE STRIP ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-2.5
            sm:grid-cols-2
            sm:gap-3
            md:grid-cols-4
            md:gap-4
          "
        >
          {features.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-3
                py-3
                transition-all
                duration-300
                hover:bg-white/[0.06]
                sm:px-4
                sm:py-3.5
                md:items-start
                md:py-4
              "
            >
              <Icon
                className="
                  mt-0.5
                  h-4
                  w-4
                  shrink-0
                  text-rose-100/80
                "
              />

              <span
                className="
                  font-['Inter']
                  text-[11px]
                  font-medium
                  leading-snug
                  text-white/85
                  sm:text-[12px]
                  md:text-[13px]
                "
              >
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}