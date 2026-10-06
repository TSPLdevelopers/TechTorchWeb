import React from "react";
import { ArrowRight, Download, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function EcommerceHeroSection() {
  const navigate = useNavigate();

  return (
    <section className="ecommerce-hero-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           SECTION
        ========================================= */

        .ecommerce-hero-section {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }

        /* =========================================
           MAIN WRAPPER
           Universal spacing:
           Desktop 100px
           Tablet 40px
           Mobile 24px
           Small mobile 16px
        ========================================= */

        .ecommerce-hero-wrapper {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 80px 100px;

          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 64px;
          align-items: center;
          box-sizing: border-box;
        }

        /* =========================================
           LEFT CONTENT
        ========================================= */

        .ecommerce-hero-content {
          width: 100%;
          min-width: 0;
        }

        /* =========================================
           BADGE
        ========================================= */

        .ecommerce-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin: 0 0 22px;
          padding: 7px 12px;

          border-radius: 999px;
          background: #fbeef1;
          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.06em;
        }

        .ecommerce-hero-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${WINE};
        }

        /* =========================================
           HEADING
        ========================================= */

        .ecommerce-hero-heading {
          max-width: 700px;
          margin: 0 0 20px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 46px;
          font-weight: 700;
          line-height: 1.14;
          letter-spacing: -0.035em;
        }

        /* =========================================
           DESCRIPTION
        ========================================= */

        .ecommerce-hero-description {
          max-width: 680px;
          margin: 0 0 30px;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.8;
        }

        /* =========================================
           BUTTONS
        ========================================= */

        .ecommerce-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
        }

        .ecommerce-hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          min-height: 46px;
          padding: 0 26px;

          border-radius: 7px;
          border: 1px solid transparent;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 1;

          cursor: pointer;
          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            background 300ms ease,
            border-color 300ms ease;
        }

        .ecommerce-primary-button {
          background: ${WINE};
          color: #ffffff;
        }

        .ecommerce-primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(122, 31, 61, 0.20);
        }

        .ecommerce-secondary-button {
          background: #ffffff;
          border-color: #d8d5d0;
          color: ${INK};
        }

        .ecommerce-secondary-button:hover {
          transform: translateY(-3px);
          border-color: ${WINE};
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.07);
        }

        .ecommerce-button-icon {
          transition: transform 300ms ease;
        }

        .ecommerce-primary-button:hover .ecommerce-button-icon {
          transform: translateX(4px);
        }

        .ecommerce-secondary-button:hover .ecommerce-button-icon {
          transform: translateY(2px);
        }

        /* =========================================
           RIGHT IMAGE AREA
        ========================================= */

        .ecommerce-hero-image-area {
          position: relative;
          width: 100%;
          min-width: 0;
          padding-bottom: 42px;
        }

        .ecommerce-hero-image-container {
          position: relative;
          width: 100%;
          height: 430px;
          overflow: hidden;
          border-radius: 18px;
          background: #eeeeee;
        }

        .ecommerce-hero-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;

          transition:
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ecommerce-hero-image-container:hover
          .ecommerce-hero-image {
          transform: scale(1.03);
        }

        .ecommerce-hero-image-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;

          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.12),
            transparent 55%
          );
        }

        /* =========================================
           FLOATING STATUS CARD
        ========================================= */

        .ecommerce-status-card {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 0;

          display: flex;
          align-items: center;
          gap: 12px;

          padding: 16px 18px;

          background: rgba(255, 255, 255, 0.98);
          border-radius: 12px;

          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.10);

          transition:
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .ecommerce-status-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 38px rgba(0, 0, 0, 0.12);
        }

        .ecommerce-status-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;
          background: #fbeef1;
          color: ${WINE};
        }

        .ecommerce-status-content {
          flex: 1;
          min-width: 0;
        }

        .ecommerce-status-title {
          margin: 0;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ecommerce-status-description {
          margin: 3px 0 0;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* =========================================
           ACTIVE STATUS
        ========================================= */

        .ecommerce-active-status {
          display: inline-flex;
          align-items: center;
          gap: 5px;

          flex-shrink: 0;

          padding: 5px 9px;
          border-radius: 999px;

          background: #e5f7ec;
          color: #1a9455;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.2;
        }

        .ecommerce-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #1a9455;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1200px) {
          .ecommerce-hero-wrapper {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 70px;
            padding-bottom: 70px;
            gap: 48px;
          }

          .ecommerce-hero-heading {
            font-size: 41px;
          }

          .ecommerce-hero-image-container {
            height: 400px;
          }
        }

        /* =========================================
           SMALL TABLET
        ========================================= */

        @media (max-width: 900px) {
          .ecommerce-hero-wrapper {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .ecommerce-hero-heading {
            max-width: 800px;
          }

          .ecommerce-hero-description {
            max-width: 800px;
          }

          .ecommerce-hero-image-area {
            padding-bottom: 40px;
          }

          .ecommerce-hero-image-container {
            height: 400px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {
          .ecommerce-hero-wrapper {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 56px;
            padding-bottom: 56px;
            gap: 34px;
          }

          .ecommerce-hero-badge {
            margin-bottom: 17px;
            font-size: 9px;
          }

          .ecommerce-hero-heading {
            margin-bottom: 16px;
            font-size: 32px;
            line-height: 1.18;
          }

          .ecommerce-hero-description {
            margin-bottom: 25px;
            font-size: 13px;
            line-height: 1.7;
          }

          .ecommerce-hero-actions {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .ecommerce-hero-button {
            width: 100%;
            min-height: 45px;
          }

          .ecommerce-hero-image-container {
            height: 320px;
            border-radius: 15px;
          }

          .ecommerce-status-card {
            left: 14px;
            right: 14px;
            padding: 14px 15px;
          }

          .ecommerce-status-icon {
            width: 37px;
            height: 37px;
          }

          .ecommerce-status-title {
            font-size: 12px;
          }

          .ecommerce-status-description {
            font-size: 10px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .ecommerce-hero-wrapper {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 48px;
            padding-bottom: 48px;
            gap: 28px;
          }

          .ecommerce-hero-heading {
            font-size: 27px;
            line-height: 1.2;
          }

          .ecommerce-hero-description {
            font-size: 12.5px;
            line-height: 1.65;
          }

          .ecommerce-hero-image-area {
            padding-bottom: 38px;
          }

          .ecommerce-hero-image-container {
            height: 270px;
            border-radius: 13px;
          }

          .ecommerce-status-card {
            left: 10px;
            right: 10px;
            gap: 9px;
            padding: 12px;
          }

          .ecommerce-status-icon {
            width: 34px;
            height: 34px;
            border-radius: 8px;
          }

          .ecommerce-status-title {
            font-size: 11px;
          }

          .ecommerce-status-description {
            font-size: 9px;
          }
        }

        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 360px) {
          .ecommerce-hero-heading {
            font-size: 24px;
          }

          .ecommerce-status-description {
            display: none;
          }
        }

        /* =========================================
           TOUCH DEVICES
        ========================================= */

        @media (hover: none) {
          .ecommerce-primary-button:hover,
          .ecommerce-secondary-button:hover {
            transform: none;
            box-shadow: none;
          }

          .ecommerce-status-card:hover {
            transform: none;
          }

          .ecommerce-hero-image-container:hover
            .ecommerce-hero-image {
            transform: none;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .ecommerce-hero-image,
          .ecommerce-hero-button,
          .ecommerce-button-icon,
          .ecommerce-status-card {
            transition: none !important;
          }
        }
      `}</style>

      <div className="ecommerce-hero-wrapper">
        {/* ================= LEFT CONTENT ================= */}
        <div className="ecommerce-hero-content">
          {/* Badge */}
          <span className="ecommerce-hero-badge">
            <span className="ecommerce-hero-badge-dot" />
            E-COMMERCE
          </span>

          {/* Heading */}
          <h1 className="ecommerce-hero-heading">
            E-Commerce Solutions for Modern Online Businesses
          </h1>

          {/* Description */}
          <p className="ecommerce-hero-description">
            Build a professional online presence with e-commerce
            technology designed around your products, customers and
            business requirements. TechTorch provides e-commerce
            solutions for online storefronts, product management,
            payments, customer relationships, analytics and ongoing
            business support.
          </p>

          {/* Buttons */}
          <div className="ecommerce-hero-actions">
            {/* Primary */}
            <button
              type="button"
              className="ecommerce-hero-button ecommerce-primary-button"
            >
              Talk to Our Experts

              <ArrowRight
                size={16}
                strokeWidth={1.8}
                className="ecommerce-button-icon"
              />
            </button>

            {/* Secondary */}
            <button
              type="button"
              onClick={() =>
                navigate("/ecommerce-get-in-touch")
              }
              className="ecommerce-hero-button ecommerce-secondary-button"
            >
              Get In Touch

              
            </button>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="ecommerce-hero-image-area">
          <div className="ecommerce-hero-image-container">
            <img
              src="/ecommerce1.png"
              alt="E-commerce team working together"
              className="ecommerce-hero-image"
            />

            <div className="ecommerce-hero-image-overlay" />
          </div>

          {/* ================= FLOATING STATUS CARD ================= */}
          <div className="ecommerce-status-card">
            {/* Icon */}
            <span className="ecommerce-status-icon">
              <ShoppingBag
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>

            {/* Text */}
            <div className="ecommerce-status-content">
              <p className="ecommerce-status-title">
                Integrated Commerce Studio
              </p>

              <p className="ecommerce-status-description">
                Storefront, catalog, and operations synchronized
              </p>
            </div>

            {/* Active */}
            <span className="ecommerce-active-status">
              <span className="ecommerce-active-dot" />
              Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}