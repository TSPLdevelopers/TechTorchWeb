import React from "react";

const outcomes = [
  {
    number: "01",
    code: "EXPOSURE_CTRL",
    title: "Reduce Exposure",
    description:
      "Identify weaknesses and address potential security gaps before they become larger problems.",
    tagLeft: "RISK MINIMIZATION",
    tagRight: "PROACTIVE",
  },
  {
    number: "02",
    code: "DATA_SHIELD",
    title: "Protect Sensitive Information",
    description:
      "Apply appropriate controls around important business and customer data.",
    tagLeft: "DATA SAFEGUARD",
    tagRight: "PROTECTED",
  },
  {
    number: "03",
    code: "TELEMETRY",
    title: "Improve Visibility",
    description:
      "Gain a clearer understanding of activity across your digital environment.",
    tagLeft: "SIGNAL DETECT",
    tagRight: "COMPLETE",
  },
  {
    number: "04",
    code: "ALERT_ACC",
    title: "Strengthen Response",
    description:
      "Be better prepared to identify and respond to security incidents.",
    tagLeft: "CONTAINMENT",
    tagRight: "READY",
  },
  {
    number: "05",
    code: "UPTIME_OPS",
    title: "Support Business Continuity",
    description:
      "Reduce the operational impact of security-related disruptions.",
    tagLeft: "RESILIENCE",
    tagRight: "SUSTAINED",
  },
  {
    number: "06",
    code: "TRUST_INDEX",
    title: "Build Customer Confidence",
    description:
      "Demonstrate that security and responsible handling of information are taken seriously.",
    tagLeft: "REPUTATION",
    tagRight: "VALIDATED",
  },
];

export default function SecurityOutcomesSection() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#F4F4F7]
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
            flex
            flex-col
            gap-5
            sm:gap-6
            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        >
          {/* Left Content */}
          <div className="min-w-0">
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                text-[9px]
                font-semibold
                tracking-[0.15em]
                text-fuchsia-900
                sm:text-[10px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-900" />
              SECURITY OUTCOMES
            </span>

            {/* Main Heading */}
            <h1
              className="
                mt-3
                w-full
                max-w-[350px]
                text-[22px]
                font-bold
                leading-[1.3]
                text-slate-900
                sm:max-w-xl
                sm:text-[25px]
                md:max-w-2xl
                md:text-[28px]
                lg:max-w-2xl
                lg:text-[30px]
                xl:text-[32px]
              "
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              What Stronger Security Can Help You Achieve
            </h1>
          </div>

          {/* Subheading */}
          <p
            className="
              w-full
              max-w-[340px]
              text-left
              text-[13px]
              leading-[1.7]
              text-slate-500
              sm:max-w-md
              sm:text-[14px]
              sm:leading-[1.75]
              lg:max-w-md
              xl:max-w-lg
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Measurable operational resilience and strategic
            <br />
            confidence delivered across every tier of the enterprise.
          </p>
        </div>

        {/* ================= OUTCOME CARDS ================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:mt-10
            sm:grid-cols-2
            sm:gap-5
            lg:mt-12
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {outcomes.map((o) => (
            <div
              key={o.number}
              className="
                group
                relative
                flex
                w-full
                min-w-0
                flex-col
                justify-between
                overflow-hidden
                rounded-lg
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-rose-50
                hover:shadow-md
                sm:p-6
              "
            >
              {/* ================= LIGHT PINK TOP-RIGHT ACCENT ================= */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-24
                  w-24
                  rounded-bl-[80px]
                  bg-gradient-to-bl
                  from-rose-100
                  via-rose-50/70
                  to-transparent
                  opacity-80
                  transition-all
                  duration-500
                  group-hover:h-full
                  group-hover:w-full
                  group-hover:rounded-none
                  group-hover:from-rose-100
                  group-hover:via-rose-50
                  group-hover:to-rose-50/30
                  group-hover:opacity-100
                "
              />

              {/* ================= CARD CONTENT ================= */}
              <div className="relative z-10">

                {/* Number + Code */}
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="
                      inline-flex
                      shrink-0
                      items-center
                      rounded-full
                      bg-rose-50
                      px-2.5
                      py-1
                      text-[10px]
                      font-semibold
                      text-fuchsia-900
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {o.number}
                  </span>

                  <span
                    className="
                      min-w-0
                      truncate
                      text-[8px]
                      font-medium
                      tracking-[0.08em]
                      text-slate-400
                      sm:text-[9px]
                      md:text-[10px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {o.code}
                  </span>
                </div>

                {/* Card Heading */}
                <h3
                  className="
                    mt-4
                    text-[15px]
                    font-semibold
                    leading-[1.4]
                    text-slate-900
                    sm:text-[16px]
                    md:text-[17px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {o.title}
                </h3>

                {/* Card Description */}
                <p
                  className="
                    mt-2
                    text-[13px]
                    leading-[1.7]
                    text-slate-500
                    sm:text-[14px]
                    sm:leading-[1.75]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {o.description}
                </p>
              </div>

              {/* ================= CARD FOOTER ================= */}
              <div
                className="
                  relative
                  z-10
                  mt-6
                  flex
                  items-center
                  justify-between
                  gap-3
                  border-t
                  border-slate-100
                  pt-4
                "
              >
                <span
                  className="
                    min-w-0
                    truncate
                    text-[8px]
                    font-medium
                    tracking-[0.08em]
                    text-slate-400
                    sm:text-[9px]
                    md:text-[10px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {o.tagLeft}
                </span>

                <span
                  className="
                    shrink-0
                    text-[8px]
                    font-semibold
                    tracking-[0.08em]
                    text-fuchsia-900
                    sm:text-[9px]
                    md:text-[10px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {o.tagRight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}