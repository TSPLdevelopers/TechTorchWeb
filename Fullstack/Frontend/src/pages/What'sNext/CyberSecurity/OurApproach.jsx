import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Protect",
    description:
      "Establish appropriate security controls around systems, applications, users and data.",
  },
  {
    number: "02",
    title: "Detect",
    description:
      "Identify suspicious activity and potential security issues before they become larger business problems.",
  },
  {
    number: "03",
    title: "Respond",
    description:
      "Create clear processes for dealing with security incidents and limiting their potential impact.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Use lessons, assessments and changing threat patterns to continuously strengthen your security posture.",
  },
];

export default function ApproachSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        approach-section
        w-full
        overflow-hidden
        bg-white
        px-4 py-10
        sm:px-6 sm:py-12
        md:px-10 md:py-14
        lg:px-[100px] lg:py-16
        xl:py-20
      "
    >
      <div className="w-full text-center">
        {/* ================= LABEL ================= */}
        <span
          className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-[9px] font-semibold tracking-[0.15em] text-[#730042] sm:text-[10px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          OUR APPROACH
        </span>

        {/* ================= MAIN HEADING ================= */}
        <h1
          className="
            mx-auto
            mt-4
            w-full
            max-w-[340px]
            text-[22px]
            font-bold
            leading-[1.3]
            text-slate-900
            sm:max-w-xl
            sm:text-[25px]
            md:max-w-2xl
            md:text-[28px]
            lg:max-w-3xl
            lg:text-[30px]
            xl:text-[32px]
          "
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Protect. Detect. Respond. Improve.
        </h1>

        {/* ================= SUBHEADING ================= */}
        <p
          className="
            mx-auto
            mt-4
            w-full
            max-w-[320px]
            text-[13px]
            leading-[1.7]
            text-slate-500
            sm:max-w-lg
            sm:text-[14px]
            md:max-w-xl
            md:text-[15px]
            md:leading-[1.8]
          "
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          We believe cybersecurity should be an ongoing process rather than
          a one-time implementation.
        </p>

        {/* ================= STEPS ================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            text-left
            sm:mt-10
            sm:grid-cols-2
            sm:gap-5
            md:mt-12
            md:gap-6
            lg:grid-cols-4
            lg:gap-5
            xl:gap-6
          "
        >
          {steps.map((s, index) => (
            <div
              key={s.number}
              className={`
                approach-card
                group
                relative
                w-full
                min-w-0
                overflow-hidden
                rounded-lg
                bg-slate-50
                p-5
                sm:p-6
                md:p-6
                lg:p-5
                xl:p-6
                ${
                  isInView
                    ? "approach-card-show"
                    : "approach-card-hide"
                }
              `}
              style={{
                transitionDelay: isInView
                  ? `${index * 180}ms`
                  : "0ms",
              }}
            >
              {/* NUMBER */}
              <span
                className="
                  text-[22px]
                  font-bold
                  leading-none
                  text-slate-300
                  sm:text-[24px]
                  md:text-[26px]
                "
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.number}
              </span>

              {/* CARD TITLE */}
              <h3
                className="
                  mt-3
                  text-[15px]
                  font-semibold
                  leading-[1.4]
                  text-[#730042]
                  sm:text-[16px]
                  md:text-[17px]
                "
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.title}
              </h3>

              {/* CARD DESCRIPTION */}
              <p
                className="
                  mt-2
                  text-[13px]
                  leading-[1.7]
                  text-slate-500
                  sm:text-[14px]
                  sm:leading-[1.75]
                "
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.description}
              </p>

              {/* ================= BOTTOM LINE ================= */}
              <div
                className="
                  approach-line
                  mt-4
                  h-0.5
                  w-6
                  bg-[#730042]
                  transition-all
                  duration-500
                  ease-out
                  group-hover:w-full
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= ANIMATION CSS ================= */}
      <style>{`
        /*
          Initial state:
          Cards hidden + slightly down + small scale
        */
        .approach-card {
          opacity: 0;
          transform: translateY(45px) scale(0.92);
          filter: blur(4px);

          transition:
            opacity 0.7s ease,
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.7s ease,
            box-shadow 0.3s ease;
        }

        /*
          Visible state:
          Cards pop into their original position
        */
        .approach-card-show {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        /*
          Hover effect:
          Card moves slightly upward
        */
        .approach-card-show:hover {
          transform: translateY(-6px) scale(1);
          box-shadow: 0 12px 30px rgba(115, 0, 66, 0.08);
        }

        /*
          Bottom line:
          Normal = small line
          Hover = full card width
        */
        .approach-line {
          width: 24px;
        }

        .approach-card:hover .approach-line {
          width: 100%;
        }

        /*
          Mobile touch devices:
          Keep animation but avoid aggressive hover behavior
        */
        @media (hover: none) {
          .approach-card-show:hover {
            transform: translateY(0) scale(1);
            box-shadow: none;
          }
        }

        /*
          Accessibility:
          Users who prefer reduced motion
          won't get the pop-up animation.
        */
        @media (prefers-reduced-motion: reduce) {
          .approach-card {
            opacity: 1;
            transform: none;
            filter: none;
            transition: none !important;
          }

          .approach-line {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}