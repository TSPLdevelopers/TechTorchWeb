import React from "react";

const cards = [
  {
    tags: ["UX FOCUS", "CYBERSECURITY"],
    title: "Security Shouldn't Be an Afterthought",
    description:
      "Security is most effective when it is considered from the beginning. Build protection into your applications, systems and everyday business processes.",
    link: "Explore Cybersecurity",
  },
  {
    tags: ["SECURITY", "THREAT PROTECTION"],
    title: "Stay Ahead of Emerging Threats",
    description:
      "The threat landscape keeps changing. A proactive approach can help organizations identify weakness, improve visibility and respond to risks with greater confidence.",
    link: "Explore Threat Protection",
  },
  {
    tags: ["DATA", "INFORMATION SECURITY"],
    title: "Protect What Your Business Depends On",
    description:
      "Your business data carries real value. The right security controls help protect sensitive information while keeping access practical for the people who need it.",
    link: "Protect Your Data",
  },
  {
    tags: ["RESILIENCE", "BUSINESS CONTINUITY"],
    title: "Keep Your Business Moving",
    description:
      "Security is also about resilience. Prepare your organization to respond to incidents, reduce disruption and recover with greater confidence.",
    link: "Build Cyber Resilience",
  },
];

export default function WhatsNextSection() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#FAF6F1]
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
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* ================= SECTION HEADER ================= */}

        <span
          className="
            text-[9px]
            font-semibold
            tracking-[0.15em]
            text-slate-500
            sm:text-[10px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          EXPLORE CAPABILITIES
        </span>

        <h1
          className="
            mt-2
            text-[22px]
            font-bold
            leading-[1.3]
            tracking-tight
            text-slate-900
            sm:text-[25px]
            md:text-[28px]
            lg:text-[30px]
            xl:text-[32px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          WHAT'S NEXT
        </h1>

        {/* ================= CARDS ================= */}

        <div
          className="
            mt-7
            grid
            grid-cols-1
            gap-4
            sm:mt-9
            sm:grid-cols-2
            sm:gap-5
            md:mt-10
            md:gap-6
            lg:grid-cols-4
            lg:gap-5
            xl:gap-6
          "
        >
          {cards.map((c) => (
            <div
              key={c.title}
              className="
                group
                flex
                w-full
                min-w-0
                flex-col
                justify-between
                rounded-lg
                border
                border-slate-200
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-fuchsia-900/30
                hover:shadow-md
                sm:p-6
                lg:p-5
                xl:p-6
              "
            >
              <div>
                {/* ================= TAGS ================= */}

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-x-1.5
                    gap-y-1
                    text-[8px]
                    font-semibold
                    tracking-[0.08em]
                    text-fuchsia-900
                    sm:text-[9px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {c.tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>

                      {i < c.tags.length - 1 && (
                        <span className="text-slate-300">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* ================= CARD TITLE ================= */}

                <h3
                  className="
                    mt-3
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
                  {c.title}
                </h3>

                {/* ================= DESCRIPTION ================= */}

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
                  {c.description}
                </p>
              </div>

              {/* ================= LINK ================= */}

              <a
                href="#"
                className="
                  mt-5
                  inline-flex
                  w-fit
                  items-center
                  gap-1
                  text-[12px]
                  font-semibold
                  text-fuchsia-900
                  transition-colors
                  duration-200
                  hover:text-fuchsia-700
                  sm:text-[13px]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {c.link}

                <span
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                >
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}