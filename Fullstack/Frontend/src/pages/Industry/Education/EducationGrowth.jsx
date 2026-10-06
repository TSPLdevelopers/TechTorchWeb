import React from "react";
import {
  ChevronRight,
  Cloud,
  Share2,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";

const WINE = "#7A1F3D";
const WINE_DARK = "#5F1830";
const CARD_BG = "rgba(255,255,255,0.06)";
const CARD_BORDER = "rgba(255,255,255,0.12)";

const features = [
  {
    icon: Cloud,
    title: "Scalable Architecture",
    body: "Elastic cloud infrastructure designed to support growing enrollment and new departments without re-engineering.",
  },
  {
    icon: Share2,
    title: "Multi-Campus Readiness",
    body: "Centralized governance with localized autonomy across branch campuses, satellite centers, and affiliated colleges.",
  },
  {
    icon: LayoutGrid,
    title: "Modular Program Expansion",
    body: "Effortlessly introduce new academic degrees, online micro-certifications, vocational tracks, and specialized curricula.",
  },
  {
    icon: ShieldCheck,
    title: "Future-Proof Technology",
    body: "Seamless integration with emerging AI learning models, advanced student analytics, and secure digital credentials.",
  },
];

export default function EvolveWithInstitutionSection() {
  return (
    <section
      style={{ background: WINE }}
      className="w-full overflow-hidden"
    >
      <div
        className="
          w-full
          max-w-[1600px]
          mx-auto

          px-4
          sm:px-6
          md:px-10
          lg:px-[100px]

          py-14
          sm:py-16
          md:py-20
          lg:py-24
        "
      >
        {/* Header */}
        <div
          className="
            w-full
            max-w-[850px]
            mx-auto
            text-center

            mb-10
            sm:mb-12
            md:mb-14
          "
        >
          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              justify-center
              gap-1.5

              px-3
              sm:px-3.5
              py-1.5

              mb-5
              sm:mb-6

              rounded-full

              text-[9px]
              sm:text-[10px]
              md:text-xs

              font-semibold
              tracking-wide
              font-['Inter']

              whitespace-nowrap
            "
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "#f3d9e2",
            }}
          >
            <ChevronRight
              size={12}
              className="sm:w-[13px] sm:h-[13px]"
              strokeWidth={3}
            />

            READY FOR THE NEXT STAGE OF GROWTH
          </span>

          {/* Heading */}
          <h2
            className="
              font-['Plus_Jakarta_Sans']
              text-white
              font-semibold
              tracking-tight
              leading-[1.15]

              text-2xl
              sm:text-3xl
              md:text-[2.2rem]
              lg:text-[2.4rem]

              mb-4
              sm:mb-5
            "
          >
            Technology that can evolve with your institution.
          </h2>

          {/* Description */}
          <p
            className="
              font-['Plus_Jakarta_Sans']

              text-[13px]
              sm:text-[14px]
              md:text-[15px]

              leading-[1.7]
              sm:leading-relaxed

              px-0
              sm:px-1
              md:px-2
            "
            style={{ color: "#e3c3cf" }}
          >
            Your institution today may not look the same a few years from
            now. More students, new programs, additional departments, new
            locations and changing expectations can all create new technology
            requirements. That is why we design with change in mind —
            strengthening your current foundation while creating room for
            future capabilities.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-4
            sm:gap-5
            lg:gap-5
            xl:gap-6
          "
        >
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="
                group
                w-full
                min-w-0

                rounded-xl
                sm:rounded-[14px]

                p-5
                sm:p-5
                md:p-6
                lg:p-6

                border

                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
              "
              style={{
                background: CARD_BG,
                borderColor: CARD_BORDER,
              }}
            >
              {/* Icon */}
              <span
                className="
                  flex
                  items-center
                  justify-center

                  w-10
                  h-10
                  sm:w-11
                  sm:h-11

                  rounded-lg
                  bg-white

                  mb-4
                  sm:mb-5

                  transition-transform
                  duration-300

                  group-hover:scale-105
                "
                style={{ color: WINE_DARK }}
              >
                <Icon
                  size={18}
                  className="sm:w-[19px] sm:h-[19px]"
                  strokeWidth={1.8}
                />
              </span>

              {/* Card Heading */}
              <h3
                className="
                  font-['Inter']
                  text-[14px]
                  sm:text-[15px]

                  font-semibold
                  text-white

                  mb-2
                  leading-snug
                "
              >
                {title}
              </h3>

              {/* Card Body */}
              <p
                className="
                  font-['Inter']

                  text-[13px]
                  sm:text-sm

                  leading-[1.65]
                  break-words
                "
                style={{ color: "#d9b7c4" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Small Mobile: 16px horizontal spacing */}
      <style>{`
        @media (max-width: 639px) {
          section > div {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        @media (max-width: 480px) {
          section > div {
            padding-left: 16px;
            padding-right: 16px;
          }
        }

        @media (min-width: 640px) and (max-width: 767px) {
          section > div {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          section > div {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (min-width: 1024px) {
          section > div {
            padding-left: 100px;
            padding-right: 100px;
          }
        }
      `}</style>
    </section>
  );
}