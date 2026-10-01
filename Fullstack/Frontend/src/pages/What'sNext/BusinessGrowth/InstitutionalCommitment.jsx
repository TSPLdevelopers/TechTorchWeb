import React, { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  PenSquare,
  Link2,
  Users,
  LifeBuoy,
} from "lucide-react";

const cards = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Scalable",
    description: "Technology that can grow as your requirements grow.",
  },
  {
    number: "02",
    icon: PenSquare,
    title: "Customizable",
    description: "Solutions that can adapt to your business processes.",
  },
  {
    number: "03",
    icon: Link2,
    title: "Connected",
    description:
      "Technology that helps bring different business functions together.",
  },
  {
    number: "04",
    icon: Users,
    title: "Human-Centered",
    description:
      "Tools designed to be usable by the people who rely on them every day.",
  },
  {
    number: "05",
    icon: LifeBuoy,
    title: "Supported",
    description:
      "A technology relationship that continues beyond implementation.",
  },
];

export default function InstitutionalCommitmentSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
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
        w-full
        overflow-hidden
        bg-[#FAF6F1]
        px-4 py-10
        sm:px-6 sm:py-12
        md:px-10 md:py-14
        lg:px-[100px] lg:py-16
        xl:py-20
      "
    >
      <div className="w-full">
        {/* ================= LABEL ================= */}
        <span
          className="
            text-[9px]
            font-semibold
            tracking-[0.15em]
            text-[#6B1E3F]
            sm:text-[10px]
          "
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          INSTITUTIONAL COMMITMENT
        </span>

        {/* ================= MAIN HEADING ================= */}
        <h1
          className="
            mt-3
            max-w-xl
            text-[23px]
            font-semibold
            leading-[1.3]
            text-[#6B1E3F]
            sm:text-[26px]
            md:text-[30px]
            lg:text-3xl
          "
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Technology Should Be a Long-Term Advantage
        </h1>

        {/* ================= SUBHEADING ================= */}
        <p
          className="
            mt-4
            max-w-3xl
            text-[13px]
            leading-[1.75]
            text-slate-600
            sm:text-[14px]
            sm:leading-relaxed
            md:text-[15px]
          "
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Choosing technology isn't just about solving today's problem.
          It's about creating a foundation that can continue to support the
          business tomorrow. TechTorch focuses on creating solutions that
          are scalable, customizable, practical, and built around real
          business requirements. Its software development services also
          emphasize secure, scalable, cost-effective solutions and ongoing
          support.
        </p>

        {/* ================= CARDS ================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:mt-10
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {cards.map((c, index) => {
            const Icon = c.icon;

            return (
              <div
                key={c.number}
                className={`
                  commitment-card
                  group
                  relative
                  w-full
                  min-w-0
                  rounded-md
                  border
                  border-slate-200
                  bg-white
                  p-5
                  sm:p-6
                  ${
                    isVisible
                      ? "commitment-card-visible"
                      : "commitment-card-hidden"
                  }
                `}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 180}ms`
                    : "0ms",
                }}
              >
                {/* ================= NUMBER + ICON ================= */}
                <div className="flex items-center justify-between">
                  {/* NUMBER */}
                  <span
                    className="
                      card-number
                      text-2xl
                      font-bold
                      text-slate-300
                    "
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {c.number}
                  </span>

                  {/* ICON */}
                  <span
                    className="
                      card-icon
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-rose-100
                      text-[#6B1E3F]
                    "
                  >
                    <Icon size={15} strokeWidth={2} />
                  </span>
                </div>

                {/* ================= CARD TITLE ================= */}
                <h3
                  className="
                    mt-4
                    text-[14px]
                    font-semibold
                    leading-snug
                    text-slate-900
                    sm:text-[15px]
                    md:text-base
                  "
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {c.title}
                </h3>

                {/* ================= CARD DESCRIPTION ================= */}
                <p
                  className="
                    mt-2
                    text-[12.5px]
                    leading-[1.7]
                    text-slate-500
                    sm:text-[13px]
                    md:text-sm
                  "
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {c.description}
                </p>

                {/* ================= BOTTOM LINE ================= */}
                <div className="card-bottom-line" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* ==========================================
           SECTION ENTRY
        ========================================== */

        .commitment-card {
          opacity: 0;
          transform: translateY(45px) scale(0.88);
          filter: blur(5px);

          transition:
            opacity 0.7s ease,
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.7s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .commitment-card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        /* ==========================================
           CARD HOVER
           Only CARD moves
           ICON DOES NOT MOVE
        ========================================== */

        .commitment-card-visible:hover {
          transform: translateY(-8px) scale(1.025);

          border-color: rgba(107, 30, 63, 0.25);

          box-shadow:
            0 18px 35px rgba(107, 30, 63, 0.12),
            0 5px 12px rgba(0, 0, 0, 0.04);
        }

        /* ==========================================
           ICON
           No hover animation
        ========================================== */

        .card-icon {
          transform: none !important;
          transition: none !important;
        }

        .commitment-card:hover .card-icon {
          transform: none !important;
          box-shadow: none !important;
          background-color: #FCE7F3;
          color: #6B1E3F;
        }

        /* ==========================================
           NUMBER
        ========================================== */

        .card-number {
          transition: color 0.3s ease;
        }

        .commitment-card-visible:hover .card-number {
          color: rgba(107, 30, 63, 0.28);
        }

        /* ==========================================
           BOTTOM LINE
        ========================================== */

        .card-bottom-line {
          position: absolute;

          left: 0;
          bottom: 0;

          width: 100%;
          height: 3px;

          background: #6B1E3F;

          transform: scaleX(0);
          transform-origin: left;

          transition:
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .commitment-card-visible:hover .card-bottom-line {
          transform: scaleX(1);
        }

        /* ==========================================
           MOBILE
        ========================================== */

        @media (hover: none) {
          .commitment-card-visible:hover {
            transform: translateY(0) scale(1);
            box-shadow: none;
          }

          .commitment-card-visible:hover .card-number {
            color: #cbd5e1;
          }

          .commitment-card-visible:hover .card-bottom-line {
            transform: scaleX(0);
          }
        }

        /* ==========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {
          .commitment-card {
            opacity: 1;
            transform: none;
            filter: none;
            transition: none !important;
          }

          .card-icon,
          .card-number,
          .card-bottom-line {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}