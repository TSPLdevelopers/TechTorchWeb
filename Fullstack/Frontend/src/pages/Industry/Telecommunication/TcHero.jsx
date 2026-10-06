import React from "react";
import { ArrowRight, Headphones, Sparkle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function TelecomHeroSection() {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

          .telecom-hero {
            font-family: "Inter", sans-serif;
          }

          .telecom-heading,
          .telecom-subheading {
            font-family: "Plus Jakarta Sans", sans-serif;
          }

          .telecom-image {
            transition: transform 0.5s ease;
          }

          .telecom-image:hover {
            transform: scale(1.02);
          }

          .telecom-primary-btn,
          .telecom-secondary-btn {
            transition:
              transform 0.3s ease,
              opacity 0.3s ease,
              background-color 0.3s ease;
          }

          .telecom-primary-btn:hover,
          .telecom-secondary-btn:hover {
            transform: translateY(-2px);
          }

          .telecom-primary-btn:hover {
            opacity: 0.92;
          }

          .telecom-secondary-btn:hover {
            background: #fbeef1;
          }

          @media (max-width: 1100px) {
            .telecom-container {
              gap: 40px;
            }

            .telecom-heading {
              font-size: 2.2rem !important;
            }

            .telecom-image {
              height: 350px !important;
            }
          }

          @media (max-width: 900px) {
            .telecom-container {
              grid-template-columns: 1fr;
              padding-top: 55px;
              padding-bottom: 80px;
              gap: 60px;
            }

            .telecom-content {
              max-width: 750px;
            }

            .telecom-image-wrapper {
              max-width: 750px;
              width: 100%;
              margin: 0 auto;
            }

            .telecom-image {
              height: 400px !important;
            }
          }

          @media (max-width: 640px) {
            .telecom-container {
              padding: 42px 20px 75px;
              gap: 52px;
            }

            .telecom-heading {
              font-size: 1.85rem !important;
              line-height: 1.22 !important;
              margin-bottom: 18px !important;
            }

            .telecom-description {
              font-size: 14px !important;
              line-height: 1.7 !important;
            }

            .telecom-buttons {
              flex-direction: column;
              align-items: stretch;
              width: 100%;
            }

            .telecom-primary-btn,
            .telecom-secondary-btn {
              width: 100%;
              justify-content: center;
            }

            .telecom-image {
              height: 310px !important;
              border-radius: 18px !important;
            }

            .telecom-card {
              left: 12px !important;
              right: 12px !important;
              bottom: -38px !important;
              padding: 14px !important;
              border-radius: 14px !important;
            }

            .telecom-card-text {
              font-size: 12px !important;
            }
          }

          @media (max-width: 480px) {
            .telecom-container {
              padding-left: 16px;
              padding-right: 16px;
            }

            .telecom-heading {
              font-size: 1.65rem !important;
            }

            .telecom-badge {
              font-size: 10px !important;
              padding: 6px 11px !important;
            }

            .telecom-image {
              height: 250px !important;
              border-radius: 16px !important;
            }

            .telecom-card {
              left: 7px !important;
              right: 7px !important;
              bottom: -42px !important;
              gap: 10px !important;
            }

            .telecom-card-icon {
              width: 34px !important;
              height: 34px !important;
            }

            .telecom-card-title {
              font-size: 8px !important;
            }

            .telecom-card-text {
              font-size: 11px !important;
              line-height: 1.4 !important;
            }
          }
        `}
      </style>

      <section
        className="telecom-hero w-full bg-white"
        style={{ color: INK }}
      >
        <div
          className="
            telecom-container
            max-w-6xl
            mx-auto
            px-6
            py-16
            grid
            md:grid-cols-2
            gap-14
            items-center
          "
        >
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="telecom-content">
            {/* Badge */}
            <span
              className="
                telecom-badge
                inline-flex
                items-center
                gap-1.5
                text-[11px]
                font-semibold
                tracking-wide
                px-3
                py-1.5
                rounded-full
                mb-6
              "
              style={{
                background: "#fbeef1",
                color: WINE,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: WINE,
                }}
              />

              TELECOMMUNICATIONS
            </span>

            {/* Heading */}
            <h1
              className="
                telecom-heading
                text-4xl
                md:text-[2.5rem]
                leading-[1.15]
                font-bold
                tracking-tight
                mb-6
              "
            >
              Technology Solutions for a More Connected Telecommunications
              Business
            </h1>

            {/* Paragraph */}
            <p
              className="
                telecom-description
                text-[15px]
                leading-relaxed
                mb-4
              "
              style={{
                color: MUTED,
              }}
            >
              Telecommunications businesses depend on technology across
              business operations, customer management, finance, software and
              digital processes. As these functions grow, organizations need
              technology that can support their business requirements and
              connect important areas of their operations.
            </p>

            {/* Paragraph */}
            <p
              className="
                telecom-description
                text-[15px]
                leading-relaxed
                mb-8
              "
              style={{
                color: MUTED,
              }}
            >
              TechTorch Solutions provides technology services and digital
              solutions designed around business requirements, helping
              organizations develop, manage and improve the technology that
              supports their day-to-day operations.
            </p>

            {/* Buttons */}
            <div
              className="
                telecom-buttons
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {/* Get in Touch */}
              <button
                type="button"
                className="
                  telecom-primary-btn
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  text-white
                  text-sm
                  font-medium
                "
                style={{
                  background: WINE,
                }}
                onClick={() =>
                  navigate("/telecommunication-get-in-touch")
                }
              >
                Get in Touch
                <ArrowRight size={16} />
              </button>

              {/* Talk to Experts */}
              <button
                type="button"
                className="
                  telecom-secondary-btn
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  text-sm
                  font-medium
                  border
                "
                style={{
                  borderColor: "#d8d5d0",
                  color: INK,
                }}
              >
                Talk to Our Experts
                <Headphones size={16} />
              </button>
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================== */}
          <div className="telecom-image-wrapper relative">
            <div
              className="
                telecom-image
                w-full
                h-[390px]
                rounded-2xl
                overflow-hidden
                bg-[#e9e8ec]
              "
            >
              <img
                src="/Telecommunication.png"
                alt="Telecommunications technology solutions"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />
            </div>

            {/* =========================
                FLOATING CARD
            ========================== */}
            <div
              className="
                telecom-card
                absolute
                -bottom-8
                left-6
                right-6
                bg-white
                rounded-xl
                shadow-lg
                px-4
                py-4
                flex
                items-start
                gap-3
              "
            >
              {/* Icon */}
              <span
                className="
                  telecom-card-icon
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  shrink-0
                "
                style={{
                  background: "#fbeef1",
                  color: WINE,
                }}
              >
                <Sparkle size={16} />
              </span>

              {/* Card Content */}
              <div>
                <p
                  className="
                    telecom-card-title
                    text-[10px]
                    font-semibold
                    tracking-wide
                    mb-1
                  "
                  style={{
                    color: WINE,
                  }}
                >
                  INSTITUTIONAL STANDARD
                </p>

                <p
                  className="
                    telecom-card-text
                    text-sm
                    font-semibold
                    leading-snug
                  "
                >
                  Telecommunications Technology — Connecting Technology With
                  Business Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}