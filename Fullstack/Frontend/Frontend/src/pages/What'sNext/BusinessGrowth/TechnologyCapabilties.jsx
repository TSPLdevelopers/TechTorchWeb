import React from "react";
import {
  Lightbulb,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Code2,
  Workflow,
  Rocket,
  Users,
} from "lucide-react";

const SERVICES = [
  {
    icon: Lightbulb,
    title: "IT Consultancy",
    description:
      "Get practical guidance for your digital transformation journey and make clearer technology decisions.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Explore AI-as-a-Service capabilities that can help businesses use AI without having to build and maintain the entire infrastructure themselves.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Build flexible infrastructure that can support changing workloads and business requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Protect your digital assets and strengthen your organization's security as your technology environment grows.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Develop technology solutions designed around specific business and operational requirements.",
  },
  {
    icon: Workflow,
    title: "Business Process Outsourcing",
    description:
      "Improve operational efficiency by allowing your teams to focus more on their core business activities.",
  },
  {
    icon: Rocket,
    title: "Software Development & Support",
    description:
      "From development to deployment and ongoing support, keep your software reliable and ready for change.",
  },
  {
    icon: Users,
    title: "Resource & Staffing",
    description:
      "Access skilled technology professionals and flexible workforce solutions based on your requirements.",
  },
];

export default function TechnologyCapabilities() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#6d0e42]
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
        xl:px-12
        xl:py-20
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= HEADER ================= */}
        <div
          className="
            mb-8
            w-full
            max-w-4xl
            sm:mb-10
            md:mb-12
          "
        >
          {/* LABEL */}
          <p
            className="
              mb-3
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-white/70
              sm:text-[10px]
              md:text-[11px]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Institutional Capability
          </p>

          {/* MAIN HEADING */}
          <h2
            className="
              w-full
              max-w-[370px]
              text-[22px]
              font-bold
              leading-[1.3]
              text-white
              sm:max-w-2xl
              sm:text-[26px]
              md:text-[30px]
              lg:max-w-3xl
              lg:text-[34px]
              xl:text-[36px]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            The Technology Behind Your Growth
          </h2>

          {/* SUBHEADING */}
          <p
            className="
              mt-5
              w-full
              max-w-4xl
              text-[13px]
              leading-[1.75]
              text-white/75
              sm:mt-6
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.8]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Sometimes you need a new system. Sometimes you need to improve
            the system you already have. And sometimes, you need someone who
            can help you understand what technology makes sense for your
            business.
          </p>

          {/* SUPPORTING TEXT */}
          <p
            className="
              mt-4
              w-full
              max-w-4xl
              text-[13px]
              font-medium
              leading-[1.75]
              text-white
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.8]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            TechTorch provides services across different stages of the
            technology journey.
          </p>
        </div>

        {/* ================= SERVICE CARDS ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            md:gap-6
            lg:grid-cols-4
            lg:gap-5
            xl:gap-6
          "
        >
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                group
                relative
                w-full
                min-w-0
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-white/[0.07]
                p-5
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:border-pink-200/40
                hover:bg-pink-50
                hover:shadow-2xl
                sm:p-6
                md:p-6
                lg:p-5
                xl:p-6
              "
            >
              {/* ================= TOP RIGHT PINK GLOW ================= */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-28
                  w-28
                  rounded-full
                  bg-pink-300/20
                  blur-2xl
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-[2]
                  group-hover:bg-pink-300/70
                "
              />

              {/* ================= CARD CONTENT ================= */}
              <div className="relative z-10">

                {/* ================= ICON ================= */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/10
                    text-white
                    transition-all
                    duration-500
                    ease-out
                    group-hover:scale-125
                    group-hover:bg-[#6d0e42]
                    group-hover:text-white
                    group-hover:shadow-lg
                    sm:h-11
                    sm:w-11
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={1.75}
                    className="
                      transition-all
                      duration-500
                      ease-out
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* ================= CARD TITLE ================= */}
                <h3
                  className="
                    mt-5
                    text-[15px]
                    font-semibold
                    leading-[1.4]
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#6d0e42]
                    sm:text-[16px]
                    md:text-[17px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {title}
                </h3>

                {/* ================= CARD DESCRIPTION ================= */}
                <p
                  className="
                    mt-2
                    text-[13px]
                    leading-[1.7]
                    text-white/65
                    transition-colors
                    duration-300
                    group-hover:text-slate-600
                    sm:text-[13.5px]
                    sm:leading-[1.75]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {description}
                </p>

                {/* ================= BOTTOM ANIMATION LINE ================= */}
                <div
                  className="
                    mt-5
                    h-[2px]
                    w-5
                    rounded-full
                    bg-white/20
                    transition-all
                    duration-500
                    ease-out
                    group-hover:w-12
                    group-hover:bg-[#6d0e42]
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}