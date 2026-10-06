import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  LayoutGrid,
  Smartphone,
  Share2,
  Settings,
  Headphones,
} from "lucide-react";

const WINE = "#7A1F3D";

const cards = [
  {
    icon: Code2,
    title: "Custom Software",
    body: "Build applications around specific business requirements.",
  },
  {
    icon: LayoutGrid,
    title: "Web Applications",
    body: "Develop responsive web applications for business and customer needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    body: "Create mobile applications for different digital requirements.",
  },
  {
    icon: Share2,
    title: "API & System Integration",
    body: "Connect applications and enable data exchange between systems.",
  },
  {
    icon: Settings,
    title: "Software Testing",
    body: "Test applications for functionality, performance, security and usability.",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    body: "Continue supporting applications through updates and technical assistance.",
  },
];

export default function CustomArchitectureGridSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden"
      style={{
        background: WINE,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* MAIN CONTAINER */}
      <div
        className="
          w-full
          max-w-[1400px]
          mx-auto
          px-4
          sm:px-6
          md:px-10
          lg:px-[100px]
          py-12
          sm:py-14
          md:py-16
          lg:py-20
        "
      >
        {/* LABEL */}
        <p
          className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] mb-3"
          style={{
            color: "#f3d9e2",
            fontFamily: "Inter, sans-serif",
          }}
        >
          CUSTOM ARCHITECTURE
        </p>

        {/* HEADING */}
        <h2
          className="
            text-2xl
            sm:text-3xl
            md:text-[2rem]
            lg:text-[2.25rem]
            leading-tight
            font-bold
            tracking-tight
            text-white
            mb-4
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Extend Your E-Commerce Technology
        </h2>

        {/* SUBHEADING */}
        <p
          className="
            text-xs
            sm:text-sm
            md:text-[15px]
            leading-relaxed
            max-w-2xl
            mb-8
            sm:mb-10
            md:mb-12
          "
          style={{
            color: "#e3c3cf",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          When a business requires a custom application or integration,
          TechTorch provides software engineering capabilities across web
          applications, mobile applications, APIs, system integration and
          software development.
        </p>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            sm:gap-6
            lg:gap-7
          "
        >
          {cards.map(({ icon: Icon, title, body }, index) => (
            <div
              key={title}
              className={`
                custom-card
                group
                relative
                w-full
                min-w-0
                rounded-xl
                p-5
                sm:p-6
                ${isVisible ? "custom-card-visible" : "custom-card-hidden"}
              `}
              style={{
                transitionDelay: isVisible ? `${index * 160}ms` : "0ms",
              }}
            >
              {/* ICON */}
              <span className="card-icon">
                <Icon size={17} strokeWidth={1.8} />
              </span>

              {/* TITLE */}
              <h3
                className="
                  mt-4
                  text-sm
                  sm:text-[15px]
                  font-semibold
                  leading-snug
                "
                style={{
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-2
                  text-xs
                  sm:text-[13px]
                  leading-[1.7]
                "
                style={{
                  color: "#d9b7c4",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {body}
              </p>

              {/* BOTTOM LINE */}
              <div className="card-bottom-line" />
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOM CSS */}
      <style>{`
        /* CARD ENTRY ANIMATION */
        .custom-card {
          opacity: 0;
          transform: translateY(45px) scale(0.88);
          filter: blur(5px);

          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);

          transition:
            opacity 0.7s ease,
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.7s ease,
            background 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .custom-card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        /* CARD HOVER */
        .custom-card-visible:hover {
          transform: translateY(-8px) scale(1.025);
          background: #fbeef1;
          border-color: rgba(122, 31, 61, 0.25);

          box-shadow:
            0 18px 35px rgba(122, 31, 61, 0.18),
            0 5px 12px rgba(0, 0, 0, 0.05);
        }

        /* ICON - DOES NOT MOVE */
        .card-icon {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 8px;

          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;

          transform: none !important;

          transition:
            background 0.3s ease,
            color 0.3s ease;
        }

        .custom-card:hover .card-icon {
          transform: none !important;
          background: #ffffff;
          color: #7a1f3d;
          box-shadow: none;
        }

        /* TITLE */
        .custom-card h3 {
          transition: color 0.3s ease;
        }

        .custom-card:hover h3 {
          color: #7a1f3d !important;
        }

        /* DESCRIPTION */
        .custom-card p {
          transition: color 0.3s ease;
        }

        .custom-card:hover p {
          color: #5b5a63 !important;
        }

        /* BOTTOM WINE LINE */
        .card-bottom-line {
          position: absolute;
          left: 0;
          bottom: 0;

          width: 100%;
          height: 3px;

          background: #7a1f3d;

          transform: scaleX(0);
          transform-origin: left;

          transition:
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .custom-card-visible:hover .card-bottom-line {
          transform: scaleX(1);
        }

        /* MOBILE / TOUCH DEVICES */
        @media (hover: none) {
          .custom-card-visible:hover {
            transform: translateY(0) scale(1);
            background: rgba(255, 255, 255, 0.08);
            box-shadow: none;
          }

          .custom-card-visible:hover .card-bottom-line {
            transform: scaleX(0);
          }

          .custom-card:hover h3 {
            color: #ffffff !important;
          }

          .custom-card:hover p {
            color: #d9b7c4 !important;
          }

          .custom-card:hover .card-icon {
            background: rgba(255, 255, 255, 0.14);
            color: #ffffff;
          }
        }

        /* REDUCED MOTION */
        @media (prefers-reduced-motion: reduce) {
          .custom-card {
            opacity: 1;
            transform: none;
            filter: none;
            transition: none !important;
          }

          .card-icon,
          .card-bottom-line,
          .custom-card h3,
          .custom-card p {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}