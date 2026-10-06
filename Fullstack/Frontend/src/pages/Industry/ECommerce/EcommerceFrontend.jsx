import React, { useEffect, useRef, useState } from "react";
import {
  ShoppingBag,
  Package,
  IdCard,
  Smartphone,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const features = [
  {
    icon: ShoppingBag,
    title: "Easy Store Experience",
    body: "Provide a clear and responsive environment for browsing products.",
  },
  {
    icon: Package,
    title: "Organized Product Information",
    body: "Keep product listings, pricing and promotions organized.",
  },
  {
    icon: IdCard,
    title: "Connected Customer Information",
    body: "Bring customer preferences and purchase history into your business environment.",
  },
  {
    icon: Smartphone,
    title: "Responsive Access",
    body: "Support online access across different devices.",
  },
];

export default function ShoppingExperienceSection() {
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
      className="shopping-experience-section"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           SECTION
        ========================================= */

        .shopping-experience-section {
          width: 100%;
          overflow: hidden;
          background: #f5f6f8;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }

        /* =========================================
           MAIN WRAPPER
        ========================================= */

        .shopping-experience-wrapper {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 80px 100px;
          box-sizing: border-box;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 64px;
          align-items: start;
        }

        /* =========================================
           IMAGE AREA
        ========================================= */

        .shopping-image-wrapper {
          position: relative;
          width: 100%;
          min-width: 0;
        }

        .shopping-image-container {
          position: relative;
          width: 100%;
          height: 370px;
          overflow: hidden;
          border-radius: 18px;
          background: #e5e5e5;
        }

        .shopping-main-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;

          transition: transform 700ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .shopping-image-container:hover .shopping-main-image {
          transform: scale(1.03);
        }

        .shopping-image-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.18),
            transparent 50%
          );
        }

        /* =========================================
           FLOATING CAPTION
        ========================================= */

        .shopping-floating-caption {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 16px;
          padding: 15px 16px;
          box-sizing: border-box;

          background: rgba(255, 255, 255, 0.97);
          border-radius: 10px;

          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        }

        .shopping-caption-label {
          display: inline-block;
          margin: 0 0 7px;
          padding: 5px 8px;
          border-radius: 5px;

          background: #fbeef1;
          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.05em;
        }

        .shopping-caption-title {
          margin: 0;
          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.4;
        }

        /* =========================================
           RIGHT CONTENT
        ========================================= */

        .shopping-content {
          width: 100%;
          min-width: 0;
        }

        .shopping-section-label {
          margin: 0 0 14px;

          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.08em;
        }

        .shopping-heading {
          max-width: 650px;
          margin: 0 0 17px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.025em;
        }

        .shopping-description {
          max-width: 720px;
          margin: 0 0 28px;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.8;
        }

        /* =========================================
           FEATURE LIST
        ========================================= */

        .shopping-features {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        /* =========================================
           FEATURE CARD
        ========================================= */

        .shopping-feature-card {
          width: 100%;
          min-width: 0;
          box-sizing: border-box;

          display: flex;
          align-items: flex-start;
          gap: 14px;

          padding: 18px;

          background: #ffffff;
          border: 1px solid transparent;
          border-radius: 10px;

          opacity: 0;
          transform: translateY(28px);

          transition:
            opacity 600ms ease,
            transform 600ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        .shopping-feature-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .shopping-feature-card.visible:hover {
          transform: translateY(-6px);
          border-color: rgba(122, 31, 61, 0.15);
          box-shadow: 0 12px 28px rgba(122, 31, 61, 0.10);
        }

        /* =========================================
           FEATURE ICON
        ========================================= */

        .shopping-feature-icon {
          width: 38px;
          height: 38px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: #fbeef1;
          color: ${WINE};
        }

        /* =========================================
           FEATURE TEXT
        ========================================= */

        .shopping-feature-content {
          min-width: 0;
        }

        .shopping-feature-title {
          margin: 0 0 5px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        .shopping-feature-body {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.7;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1200px) {
          .shopping-experience-wrapper {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 70px;
            padding-bottom: 70px;
            gap: 48px;
          }

          .shopping-heading {
            font-size: 33px;
          }

          .shopping-image-container {
            height: 340px;
          }
        }

        /* =========================================
           SMALL TABLET
        ========================================= */

        @media (max-width: 900px) {
          .shopping-experience-wrapper {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .shopping-image-container {
            height: 360px;
          }

          .shopping-heading {
            max-width: 750px;
          }

          .shopping-description {
            max-width: 800px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {
          .shopping-experience-wrapper {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 56px;
            padding-bottom: 56px;
            gap: 30px;
          }

          .shopping-image-container {
            height: 300px;
            border-radius: 15px;
          }

          .shopping-floating-caption {
            left: 12px;
            right: 12px;
            bottom: 12px;
            padding: 13px 14px;
          }

          .shopping-caption-label {
            margin-bottom: 6px;
            font-size: 8.5px;
          }

          .shopping-caption-title {
            font-size: 12px;
          }

          .shopping-section-label {
            margin-bottom: 12px;
            font-size: 9px;
          }

          .shopping-heading {
            margin-bottom: 14px;
            font-size: 28px;
            line-height: 1.22;
          }

          .shopping-description {
            margin-bottom: 24px;
            font-size: 13px;
            line-height: 1.7;
          }

          .shopping-features {
            gap: 13px;
          }

          .shopping-feature-card {
            padding: 16px;
            gap: 12px;
            border-radius: 9px;
          }

          .shopping-feature-icon {
            width: 36px;
            height: 36px;
          }

          .shopping-feature-title {
            font-size: 14px;
          }

          .shopping-feature-body {
            font-size: 12px;
            line-height: 1.65;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .shopping-experience-wrapper {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 48px;
            padding-bottom: 48px;
            gap: 26px;
          }

          .shopping-image-container {
            height: 250px;
            border-radius: 13px;
          }

          .shopping-floating-caption {
            left: 10px;
            right: 10px;
            bottom: 10px;
            padding: 11px 12px;
          }

          .shopping-caption-title {
            font-size: 11px;
          }

          .shopping-heading {
            font-size: 24px;
          }

          .shopping-description {
            font-size: 12.5px;
            line-height: 1.65;
          }

          .shopping-feature-card {
            padding: 15px;
          }

          .shopping-feature-icon {
            width: 34px;
            height: 34px;
          }

          .shopping-feature-title {
            font-size: 13px;
          }

          .shopping-feature-body {
            font-size: 11.5px;
          }
        }

        /* =========================================
           TOUCH DEVICES
        ========================================= */

        @media (hover: none) {
          .shopping-image-container:hover .shopping-main-image {
            transform: none;
          }

          .shopping-feature-card.visible:hover {
            transform: translateY(0);
            border-color: transparent;
            box-shadow: none;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .shopping-main-image,
          .shopping-feature-card {
            transition: none !important;
          }

          .shopping-feature-card {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="shopping-experience-wrapper">
        {/* ================= LEFT IMAGE ================= */}
        <div className="shopping-image-wrapper">
          <div className="shopping-image-container">
            <img
              src="/ecommerce2.png"
              alt="Warehouse staff verifying dispatch inventory"
              className="shopping-main-image"
            />

            <div className="shopping-image-overlay" />
          </div>

          {/* Floating Caption */}
          <div className="shopping-floating-caption">
            <p className="shopping-caption-label">
              FULFILLMENT INTEGRATION
            </p>

            <p className="shopping-caption-title">
              Real-time inventory verification at dispatch
            </p>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="shopping-content">
          <p className="shopping-section-label">
            FRONT-END PRECISION
          </p>

          <h2 className="shopping-heading">
            Create a Better Online Shopping Experience
          </h2>

          <p className="shopping-description">
            A well-structured digital storefront helps customers find
            products, understand information and interact with your
            business across different devices.
          </p>

          {/* Feature Cards */}
          <div className="shopping-features">
            {features.map(({ icon: Icon, title, body }, index) => (
              <div
                key={title}
                className={`shopping-feature-card ${
                  isVisible ? "visible" : ""
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 160}ms`
                    : "0ms",
                }}
              >
                {/* Icon */}
                <span className="shopping-feature-icon">
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                {/* Text */}
                <div className="shopping-feature-content">
                  <h3 className="shopping-feature-title">
                    {title}
                  </h3>

                  <p className="shopping-feature-body">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}