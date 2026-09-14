import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  Clipboard,
  Code2,
  UploadCloud,
  TrendingUp,
  Clock,
  ShieldCheck,
  Lock,
  ArrowRight,
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    label: "UNDERSTAND",
    icon: Users,
    description:
      "We begin by analyzing your workflows, objectives, pain points, and current legacy systems.",
  },
  {
    number: "02",
    label: "PLAN",
    icon: Clipboard,
    description:
      "We engineer solution blueprints, technical roadmaps, database schemas, and UX user flows.",
  },
  {
    number: "03",
    label: "BUILD",
    icon: Code2,
    description:
      "Our engineering squads build and integrate with focus on quality, speed, security, and scalability.",
  },
  {
    number: "04",
    label: "DEPLOY",
    icon: UploadCloud,
    description:
      "We execute seamless rollouts with comprehensive staff onboarding and zero downtime transition.",
  },
  {
    number: "05",
    label: "IMPROVE",
    icon: TrendingUp,
    description:
      "Ongoing performance telemetry, agile iterations, and scalable enhancements as your team expands.",
  },
];

const PILLS = [
  { icon: Clock, label: "24h Rapid Response" },
  { icon: ShieldCheck, label: "Direct Senior Architect Advisory" },
  { icon: Lock, label: "Enterprise NDA & Security First" },
];

export default function ApproachAndCtaSection() {
  const timelineRef = useRef(null);
  const [activeSteps, setActiveSteps] = useState([]);

  useEffect(() => {
    const section = timelineRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          // Reset first
          setActiveSteps([]);

          // Activate icons one by one
          STEPS.forEach((_, index) => {
            setTimeout(() => {
              setActiveSteps((prev) => [...prev, index]);
            }, index * 550);
          });

          observer.unobserve(section);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#faf9fb]">

      {/* =====================================================
          TIMELINE
      ====================================================== */}

      <div
        ref={timelineRef}
        className="
          mx-auto
          w-full
          max-w-6xl
          px-4
          pt-10
          pb-12
          sm:px-6
          sm:pt-14
          sm:pb-14
          md:px-8
          md:pt-16
          md:pb-16
          lg:px-10
          lg:pt-20
          lg:pb-16
        "
      >
        {/* Header */}

        <div
          className="
            mx-auto
            mb-9
            w-full
            max-w-2xl
            text-center
            sm:mb-11
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
              style={{ backgroundColor: "#730024" }}
            />

            <span
              className="
                font-['Inter']
                text-[9px]
                font-bold
                uppercase
                tracking-[0.14em]
                sm:text-[10px]
                md:text-[11px]
              "
              style={{ color: "#730024" }}
            >
              From Requirement to Reality
            </span>

            <span
              className="h-px w-6 sm:w-8 md:w-10"
              style={{ backgroundColor: "#730024" }}
            />
          </div>

          {/* Heading */}

          <h2
            className="
              font-['Plus_Jakarta_Sans']
              text-[23px]
              font-bold
              leading-[1.2]
              tracking-[-0.02em]
              text-slate-900
              sm:text-[28px]
              md:text-[30px]
              lg:text-[32px]
            "
          >
            Our Approach
          </h2>
        </div>

        {/* =====================================================
            STEPS
        ====================================================== */}

        <div
          className="
            relative
            grid
            grid-cols-1
            gap-7
            sm:grid-cols-2
            sm:gap-x-5
            sm:gap-y-10
            lg:grid-cols-5
            lg:gap-4
          "
        >
          {/* Desktop Connecting Line */}

          <div
            className="
              absolute
              left-[10%]
              right-[10%]
              top-6
              hidden
              h-px
              bg-slate-200
              lg:block
            "
          />

          {STEPS.map(
            ({ number, label, icon: Icon, description }, index) => {
              const isActive = activeSteps.includes(index);

              return (
                <div
                  key={number}
                  className="
                    relative
                    flex
                    flex-col
                    items-center
                    px-2
                    text-center
                  "
                >
                  {/* Icon */}

                  <div
                    className={`
                      relative
                      z-10
                      mb-4
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-500
                      ease-out
                      ${
                        isActive
                          ? "scale-110 shadow-[0_0_0_6px_rgba(115,0,36,0.10)]"
                          : "scale-100"
                      }
                    `}
                    style={
                      isActive
                        ? {
                            backgroundColor: "#730024",
                            border: "1.5px solid #730024",
                          }
                        : {
                            backgroundColor: "#faf9fb",
                            border: "1.5px solid #d9b8c6",
                          }
                    }
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className="transition-all duration-500"
                      style={{
                        color: isActive ? "#ffffff" : "#730024",
                      }}
                    />

                    {/* Small active pulse */}

                    {isActive && (
                      <span
                        className="
                          absolute
                          inset-0
                          rounded-full
                          border
                          border-[#730024]
                          animate-ping
                          opacity-20
                        "
                      />
                    )}
                  </div>

                  {/* Number + Label */}

                  <p
                    className="
                      mb-2
                      font-['Inter']
                      text-[10px]
                      font-bold
                      tracking-[0.06em]
                      transition-colors
                      duration-500
                      sm:text-[11px]
                      md:text-[12px]
                    "
                    style={{
                      color: isActive ? "#730024" : "#0f172a",
                    }}
                  >
                    {number} — {label}
                  </p>

                  {/* Description */}

                  <p
                    className="
                      max-w-[190px]
                      font-['Inter']
                      text-[11.5px]
                      leading-[1.65]
                      text-slate-500
                      sm:text-[12px]
                      md:text-[12.5px]
                    "
                  >
                    {description}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* =====================================================
          CTA
      ====================================================== */}

      <div
        className="
          px-4
          pb-12
          sm:px-6
          sm:pb-16
          md:px-8
          md:pb-20
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-6xl
            rounded-[22px]
            px-5
            py-10
            text-center
            sm:rounded-[26px]
            sm:px-8
            sm:py-12
            md:rounded-[28px]
            md:px-10
            md:py-16
          "
          style={{
            background:
              "radial-gradient(120% 140% at 50% 0%, #730024 0%, #3a0e20 70%)",
          }}
        >
          {/* CTA Label */}

          <div className="mb-5 flex justify-center sm:mb-6">
            <span
              className="
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/5
                px-3
                py-1.5
                font-['Inter']
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white/80
                sm:px-3.5
                sm:text-[9px]
                md:text-[10px]
              "
            >
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />

              Tailored Architecture & Delivery Advisory
            </span>
          </div>

          {/* CTA Heading */}

          <h2
            className="
              mx-auto
              mb-4
              max-w-3xl
              font-['Plus_Jakarta_Sans']
              text-[23px]
              font-bold
              leading-[1.2]
              tracking-[-0.02em]
              text-white
              sm:mb-5
              sm:text-[29px]
              md:text-[34px]
              lg:text-[38px]
            "
          >
            Ready to Move Your Business Forward?
          </h2>

          {/* CTA Sub Heading */}

          <p
            className="
              mx-auto
              mb-7
              max-w-2xl
              font-['Plus_Jakarta_Sans']
              text-[11.5px]
              leading-[1.7]
              text-white/60
              sm:mb-8
              sm:text-[13px]
              md:text-[14px]
              lg:text-[15px]
            "
          >
            Let's build the right digital solution for your business.
            Connect with our principal enterprise architects to explore
            tailored systems, legacy migrations, and high-impact digital
            transformation roadmaps.
          </p>

          {/* CTA Button */}

          <div className="mb-7 flex justify-center sm:mb-8">
            <button
              className="
                inline-flex
                w-full
                max-w-[260px]
                items-center
                justify-center
                gap-2
                rounded-lg
                px-5
                py-3
                font-['Inter']
                text-[12px]
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:opacity-90
                sm:w-auto
                sm:max-w-none
                sm:px-6
                sm:py-3.5
                sm:text-[13px]
              "
              style={{
                backgroundColor: "#ffffff",
                color: "#730024",
              }}
            >
              Talk to Our Experts
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Divider */}

          <div
            className="
              mx-auto
              mb-5
              h-px
              w-full
              max-w-2xl
              bg-white/10
              sm:mb-6
            "
          />

          {/* Pills */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-2
              sm:gap-3
            "
          >
            {PILLS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-1.5
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1.5
                  font-['Inter']
                  text-[9px]
                  font-medium
                  leading-tight
                  text-white/70
                  sm:gap-2
                  sm:px-3.5
                  sm:py-2
                  sm:text-[10px]
                  md:text-[11.5px]
                "
              >
                <Icon
                  size={11}
                  className="flex-shrink-0 text-white/50 sm:h-3 sm:w-3"
                />

                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}