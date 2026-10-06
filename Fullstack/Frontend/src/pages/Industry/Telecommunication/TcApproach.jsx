import React, { useEffect, useRef } from "react";
import {
  Search,
  Ruler,
  Rocket,
  Users,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Understand",
    body: "Understand your business and technology requirements.",
    footer: "DISCOVERY & SCOPING",
  },
  {
    num: "02",
    icon: Ruler,
    title: "Develop",
    body: "Design and develop the required solution.",
    footer: "AGILE ENGINEERING",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Test & Deploy",
    body: "Test and prepare the solution for implementation.",
    footer: "RELEASE VALIDATION",
  },
  {
    num: "04",
    icon: Users,
    title: "Support",
    body: "Provide ongoing maintenance and support.",
    footer: "CONTINUITY SLA",
  },
];

export default function ApproachAndBuildCtaSections() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const resetCards = () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        card.style.opacity = "0";
        card.style.transform = "translateY(45px)";
      });
    };

    const animateCards = () => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 180);
      });
    };

    resetCards();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            resetCards();

            setTimeout(() => {
              animateCards();
            }, 100);
          } else {
            resetCards();
          }
        });
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
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

          .approach-section {
            font-family: "Inter", sans-serif;
          }

          .approach-heading,
          .approach-subheading {
            font-family: "Plus Jakarta Sans", sans-serif;
          }

          .approach-card {
            opacity: 0;
            transform: translateY(45px);
            transition:
              opacity 0.7s ease,
              transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.3s ease;
            will-change: opacity, transform;
          }

          .approach-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 12px 30px rgba(27, 27, 42, 0.08);
          }

          .approach-card-icon {
            transition: transform 0.3s ease;
          }

          .approach-card:hover .approach-card-icon {
            transform: scale(1.12);
          }

          .cta-button {
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
          }

          @media (max-width: 900px) {
            .approach-container {
              padding-top: 55px !important;
              padding-bottom: 70px !important;
            }

            .approach-heading {
              font-size: 1.8rem !important;
            }

            .approach-cards {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }

            .approach-cta {
              padding: 42px 32px !important;
            }
          }

          @media (max-width: 640px) {
            .approach-container {
              padding: 45px 20px 65px !important;
            }

            .approach-heading {
              font-size: 1.65rem !important;
              line-height: 1.25 !important;
            }

            .approach-description {
              font-size: 13px !important;
              line-height: 1.7 !important;
              margin-bottom: 30px !important;
            }

            .approach-cards {
              grid-template-columns: 1fr !important;
              gap: 12px !important;
              margin-bottom: 45px !important;
            }

            .approach-card {
              padding: 18px !important;
            }

            .approach-card-body {
              margin-bottom: 22px !important;
            }

            .approach-cta {
              padding: 34px 22px !important;
              border-radius: 22px !important;
            }

            .approach-cta-heading {
              font-size: 1.55rem !important;
            }

            .approach-cta-description {
              font-size: 13px !important;
              line-height: 1.7 !important;
            }

            .approach-cta-actions {
              flex-direction: column;
              align-items: flex-start !important;
              gap: 18px !important;
            }
          }

          @media (max-width: 400px) {
            .approach-container {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }

            .approach-heading {
              font-size: 1.5rem !important;
            }

            .approach-cta {
              padding: 30px 18px !important;
            }

            .approach-cta-heading {
              font-size: 1.4rem !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .approach-card {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
            }

            .approach-card:hover {
              transform: none !important;
            }
          }
        `}
      </style>

      <section
        ref={sectionRef}
        className="approach-section w-full bg-white"
        style={{ color: INK }}
      >
        <div
          className="
            approach-container
            max-w-4xl
            mx-auto
            px-6
            py-16
          "
        >
          {/* =====================================
              SECTION 1 — OUR APPROACH
          ====================================== */}

          <p
            className="
              text-xs
              font-semibold
              tracking-wide
              mb-3
            "
            style={{ color: WINE }}
          >
            OUR APPROACH
          </p>

          <h2
            className="
              approach-heading
              text-2xl
              font-bold
              tracking-tight
              mb-2
            "
          >
            From Requirement to Support
          </h2>

          <p
            className="
              approach-description
              text-sm
              leading-relaxed
              mb-10
            "
            style={{ color: MUTED }}
          >
            A disciplined, progressive engineering lifecycle tailored for
            operational continuity.
          </p>

          {/* =====================================
              APPROACH CARDS
          ====================================== */}

          <div
            className="
              approach-cards
              grid
              sm:grid-cols-2
              md:grid-cols-4
              gap-4
              mb-14
            "
          >
            {steps.map(
              ({ num, icon: Icon, title, body, footer }, index) => (
                <div
                  key={num}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="
                    approach-card
                    rounded-xl
                    p-5
                    flex
                    flex-col
                  "
                  style={{
                    background: "#f6f7fa",
                  }}
                >
                  {/* Number + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="
                        text-xl
                        font-bold
                      "
                      style={{
                        color: WINE,
                      }}
                    >
                      {num}
                    </span>

                    <Icon
                      className="approach-card-icon"
                      size={18}
                      strokeWidth={1.8}
                      style={{
                        color: "#a9a6b0",
                      }}
                    />
                  </div>

                  {/* Card Heading */}
                  <h3
                    className="
                      approach-subheading
                      text-sm
                      font-semibold
                      mb-1.5
                    "
                  >
                    {title}
                  </h3>

                  {/* Card Body */}
                  <p
                    className="
                      approach-card-body
                      text-xs
                      leading-relaxed
                      mb-6
                    "
                    style={{
                      color: MUTED,
                    }}
                  >
                    {body}
                  </p>

                  {/* Footer */}
                  <p
                    className="
                      mt-auto
                      text-[9px]
                      font-semibold
                      tracking-wide
                    "
                    style={{
                      color: "#a9a6b0",
                    }}
                  >
                    {footer}
                  </p>
                </div>
              )
            )}
          </div>

          {/* =====================================
              SECTION 2 — BUILD CTA
          ====================================== */}

          <div
            className="
              approach-cta
              relative
              overflow-hidden
              rounded-3xl
              px-8
              py-12
            "
            style={{
              background:
                "linear-gradient(135deg, #3d0d28 0%, #5c1730 60%, #4a1230 100%)",
            }}
          >
            {/* Background Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0%, transparent 55%)",
              }}
            />

            {/* CTA Content */}
            <div className="relative max-w-md">
              {/* Badge */}
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-[10px]
                  font-semibold
                  tracking-wide
                  px-3
                  py-1.5
                  rounded-full
                  mb-6
                "
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "#f3d9e2",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                GET IN TOUCH
              </span>

              {/* CTA Heading */}
              <h2
                className="
                  approach-heading
                  approach-cta-heading
                  text-2xl
                  md:text-[1.75rem]
                  leading-[1.25]
                  font-bold
                  tracking-tight
                  text-white
                  mb-5
                "
              >
                Let's Build Technology
                <br />
                Around Your Business
              </h2>

              {/* CTA Description */}
              <p
                className="
                  approach-cta-description
                  text-sm
                  leading-relaxed
                  mb-8
                "
                style={{
                  color: "#e3c3cf",
                }}
              >
                Discuss your telecommunications technology requirements with
                the TechTorch team.
              </p>

              {/* CTA Actions */}
              <div
                className="
                  approach-cta-actions
                  flex
                  flex-wrap
                  items-center
                  gap-4
                "
              >
                {/* Button */}
                <button
                  type="button"
                  className="
                    cta-button
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-full
                    bg-white
                    text-sm
                    font-medium
                  "
                  style={{
                    color: WINE,
                  }}
                >
                  Get in Touch

                  <ArrowRight size={15} />
                </button>

                {/* Security Text */}
                <div className="flex items-center gap-1.5">
                  <ShieldCheck
                    size={13}
                    style={{
                      color: "#e3c3cf",
                    }}
                  />

                  <span
                    className="text-xs"
                    style={{
                      color: "#e3c3cf",
                    }}
                  >
                    Confidential Consultation &amp; Scoping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}