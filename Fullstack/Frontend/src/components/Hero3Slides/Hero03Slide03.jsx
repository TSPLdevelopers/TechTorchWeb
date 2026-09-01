import React, { useState } from "react";
import {
  Component,
  Building2,
  Monitor,
  Smartphone,
  Box,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const MAROON = "#7a1338";

const cards = [
  {
    id: "custom",
    icon: Component,
    title: "Custom Business Applications",
    description:
      "Purpose-built applications designed around your processes, workflows and operational requirements.",
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise Applications",
    description:
      "Scalable solutions that bring together people, processes and information across your organization.",
  },
  {
    id: "web",
    icon: Monitor,
    title: "Web Applications",
    description:
      "Reliable and intuitive web applications for employees, customers and business users.",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Mobile experiences that give teams and customers convenient access to the services and information they need.",
  },
  {
    id: "modernization",
    icon: Box,
    title: "Application Modernization",
    description:
      "Modernize existing applications, improve performance and maintainability, and create a stronger foundation for the future.",
  },
  {
    id: "integration",
    icon: Share2,
    title: "API & System Integration",
    description:
      "Connect applications, platforms and data sources to create smoother workflows and a more connected technology environment.",
  },
];

/* ================= CARD SETTINGS ================= */

const VISIBLE_CARDS = 3;

// Card width
const CARD_WIDTH = 330;

// Cards ke beech gap
const CARD_GAP = 95;

export default function WhatWeBuildSection() {
  const [index, setIndex] = useState(0);

  const maxIndex = cards.length - VISIBLE_CARDS;

  const goPrev = () => {
    setIndex((i) => Math.max(0, i - 1));
  };

  const goNext = () => {
    setIndex((i) => Math.min(maxIndex, i + 1));
  };

  return (
    <section
      className="what-we-build-section"
      style={{
        position: "relative",
        padding: "60px 80px",
        background: MAROON,
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 90px)",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {/* ================= HEADING ================= */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "30px",
            marginBottom: "50px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
                color: "#f0c9d8",
                margin: "0 0 12px 0",
              }}
            >
              WHAT WE BUILD
            </p>

            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#ffffff",
                margin: 0,
                maxWidth: "420px",
              }}
            >
              Software Designed for Real Business Needs
            </h2>
          </div>

          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#e9d3dd",
              margin: 0,
              maxWidth: "400px",
            }}
          >
            We develop software across a range of business requirements,
            from focused applications to connected enterprise systems.
          </p>
        </div>

        {/* ================= CARD SLIDER ================= */}

        <div className="cards-viewport">
          <div
            className="cards-track"
            style={{
              display: "flex",
              gap: `${CARD_GAP}px`,
              transform: `translateX(-${
                index * (CARD_WIDTH + CARD_GAP)
              }px)`,
              transition: "transform 0.45s ease",
            }}
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  className="build-card"
                  style={{
                    flex: `0 0 ${CARD_WIDTH}px`,
                    background: "#ffffff",
                    borderRadius: "14px",

                    // Padding
                    padding: "36px 30px",

                    boxSizing: "border-box",

                    // ================= HEIGHT INCREASE =================
                    minHeight: "380px",

                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* ICON */}

                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "50%",
                      background: MAROON,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      flexShrink: 0,
                    }}
                  >
                    <Icon
                      size={24}
                      color="#ffffff"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* TITLE */}

                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      margin: "0 0 16px 0",
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "#555555",
                      margin: 0,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BUTTONS ================= */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          <button
            onClick={goPrev}
            disabled={index === 0}
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.5)",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: index === 0 ? "default" : "pointer",
              opacity: index === 0 ? 0.4 : 1,
              transition: "0.2s ease",
            }}
          >
            <ChevronLeft size={20} color="#ffffff" />
          </button>

          <button
            onClick={goNext}
            disabled={index === maxIndex}
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.5)",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: index === maxIndex ? "default" : "pointer",
              opacity: index === maxIndex ? 0.4 : 1,
              transition: "0.2s ease",
            }}
          >
            <ChevronRight size={20} color="#ffffff" />
          </button>
        </div>
      </div>

      {/* ================= RESPONSIVE ================= */}

      <style>{`
        .cards-viewport {
          overflow: hidden;
        }

        @media (max-width: 1100px) {
          .what-we-build-section {
            padding: 55px 50px !important;
          }
        }

        @media (max-width: 900px) {
          .what-we-build-section {
            padding: 55px 40px !important;
          }

          .build-card {
            min-height: 360px !important;
          }
        }

        @media (max-width: 768px) {
          .what-we-build-section {
            padding: 50px 25px !important;
          }

          .build-card {
            flex-basis: 280px !important;
            min-height: 350px !important;
            padding: 30px 25px !important;
          }
        }

        @media (max-width: 480px) {
          .what-we-build-section {
            padding: 45px 20px !important;
          }

          .build-card {
            flex-basis: 260px !important;
            min-height: 330px !important;
            padding: 28px 22px !important;
          }
        }
      `}</style>
    </section>
  );
}