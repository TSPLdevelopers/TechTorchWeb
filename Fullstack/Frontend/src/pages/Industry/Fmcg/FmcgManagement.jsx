import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    tag: "01 Procurement",
    body: "Support purchasing activities and supplier coordination.",
  },
  {
    tag: "02 Inventory",
    body: "Maintain visibility across inventory information and requirements.",
  },
  {
    tag: "03 Supplier Management",
    body: "Support communication and collaboration with suppliers.",
  },
  {
    tag: "04 Logistics",
    body: "Manage logistics-related activities including shipment, route and freight processes.",
  },
];

export default function SupplyChainConnectSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .supply-chain-connect,
        .supply-chain-connect * {
          box-sizing: border-box;
        }

        .supply-chain-connect {
          width: 100%;
          background: #f7f5f2;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        /* =========================
           MAIN CONTAINER
        ========================= */

        .supply-chain-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          /* HERO STANDARD SPACING */
          padding: 80px 100px;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 70px;
          align-items: center;
        }

        /* =========================
           IMAGE
        ========================= */

        .supply-chain-image-wrapper {
          position: relative;

          width: 100%;
          height: 450px;

          border-radius: 24px;
          overflow: hidden;

          background: #dfe3e6;

          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        .supply-chain-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;

          transition: transform 0.5s ease;
        }

        .supply-chain-image-wrapper:hover .supply-chain-image {
          transform: scale(1.04);
        }

        .supply-chain-image-overlay {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.05) 55%,
            transparent
          );

          pointer-events: none;
        }

        .supply-chain-image-label {
          position: absolute;

          left: 22px;
          bottom: 20px;

          color: #ffffff;

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .supply-chain-image-badge {
          position: absolute;

          top: 20px;
          left: 20px;

          padding: 8px 13px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.92);
          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;

          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        /* =========================
           CONTENT
        ========================= */

        .supply-chain-content {
          width: 100%;
          min-width: 0;
        }

        .supply-chain-eyebrow {
          margin: 0 0 14px;

          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        /* =========================
           HEADING
           PLUS JAKARTA SANS
        ========================= */

        .supply-chain-heading {
          margin: 0 0 22px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 42px;
          line-height: 1.18;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        /* =========================
           DESCRIPTION
           PLUS JAKARTA SANS
        ========================= */

        .supply-chain-description {
          display: flex;
          flex-direction: column;
          gap: 15px;

          margin-bottom: 32px;
        }

        .supply-chain-description p {
          margin: 0;

          color: ${MUTED};

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.8;
          font-weight: 500;
        }

        /* =========================
           CARDS
        ========================= */

        .supply-chain-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .supply-chain-card {
          min-height: 125px;

          padding: 20px;

          background: #ffffff;

          border-radius: 15px;
          border: 1px solid rgba(122, 31, 61, 0.05);

          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.045);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .supply-chain-card:hover {
          transform: translateY(-4px);

          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
        }

        .supply-chain-card-tag {
          margin: 0 0 9px;

          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .supply-chain-card-body {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.7;
          font-weight: 400;
        }

        /* =========================
           TABLET / LAPTOP
        ========================= */

        @media (max-width: 1200px) {
          .supply-chain-container {
            padding-left: 40px;
            padding-right: 40px;

            gap: 50px;
          }

          .supply-chain-heading {
            font-size: 38px;
          }

          .supply-chain-image-wrapper {
            height: 420px;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 850px) {
          .supply-chain-container {
            grid-template-columns: 1fr;

            gap: 45px;

            padding-top: 65px;
            padding-bottom: 65px;
          }

          .supply-chain-image-wrapper {
            width: 100%;
            max-width: 760px;

            height: 400px;

            margin: 0 auto;
          }

          .supply-chain-content {
            max-width: 760px;
            margin: 0 auto;
          }

          .supply-chain-heading {
            font-size: 35px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .supply-chain-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 50px;
            padding-bottom: 50px;

            gap: 34px;
          }

          .supply-chain-image-wrapper {
            height: 320px;
            border-radius: 18px;
          }

          .supply-chain-image-badge {
            top: 14px;
            left: 14px;

            padding: 7px 11px;

            font-size: 9px;
          }

          .supply-chain-image-label {
            left: 16px;
            bottom: 16px;

            font-size: 10px;
          }

          .supply-chain-eyebrow {
            font-size: 10px;
            margin-bottom: 10px;
          }

          .supply-chain-heading {
            font-size: 28px;
            line-height: 1.25;

            margin-bottom: 17px;
          }

          .supply-chain-description {
            gap: 12px;
            margin-bottom: 25px;
          }

          .supply-chain-description p {
            font-size: 13px;
            line-height: 1.7;
          }

          .supply-chain-cards {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .supply-chain-card {
            min-height: auto;
            padding: 17px;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 480px) {
          .supply-chain-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 42px;
            padding-bottom: 42px;

            gap: 28px;
          }

          .supply-chain-image-wrapper {
            height: 270px;
            border-radius: 15px;
          }

          .supply-chain-heading {
            font-size: 25px;
            letter-spacing: -0.025em;
          }

          .supply-chain-description p {
            font-size: 12px;
          }

          .supply-chain-card {
            padding: 15px;
            border-radius: 13px;
          }

          .supply-chain-card-tag {
            font-size: 10px;
          }

          .supply-chain-card-body {
            font-size: 11px;
          }
        }

        /* =========================
           VERY SMALL MOBILE
        ========================= */

        @media (max-width: 340px) {
          .supply-chain-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 35px;
            padding-bottom: 35px;
          }

          .supply-chain-image-wrapper {
            height: 235px;
          }

          .supply-chain-heading {
            font-size: 22px;
          }

          .supply-chain-description p {
            font-size: 11.5px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .supply-chain-image,
          .supply-chain-card {
            transition: none;
          }

          .supply-chain-image-wrapper:hover .supply-chain-image {
            transform: none;
          }

          .supply-chain-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="supply-chain-connect">
        <div className="supply-chain-container">

          {/* =========================
              LEFT: IMAGE
          ========================= */}

          <div className="supply-chain-image-wrapper">
            <img
              src="/fmcgconnected.png"
              alt="Warehouse team reviewing supply chain inventory"
              className="supply-chain-image"
            />

            <div className="supply-chain-image-overlay" />

            <div className="supply-chain-image-badge">
              SUPPLY CHAIN
            </div>

            <div className="supply-chain-image-label">
              Connected Procurement & Logistics
            </div>
          </div>

          {/* =========================
              RIGHT: CONTENT
          ========================= */}

          <div className="supply-chain-content">

            <p className="supply-chain-eyebrow">
              SUPPLY CHAIN MANAGEMENT
            </p>

            <h2 className="supply-chain-heading">
              Connect Procurement, Inventory and Logistics
            </h2>

            <div className="supply-chain-description">
              <p>
                Supply chain activities are an important part of FMCG
                operations. TechTorch's Supply Chain Management offering is
                designed to support processes from procurement to delivery.
              </p>

              <p>
                The published capabilities include inventory visibility, order
                status, supplier performance, demand forecasting, supplier
                collaboration and logistics management, including route
                planning, shipment tracking and freight management.
              </p>
            </div>

            {/* =========================
                CARDS
            ========================= */}

            <div className="supply-chain-cards">
              {cards.map(({ tag, body }) => (
                <div
                  key={tag}
                  className="supply-chain-card"
                >
                  <p className="supply-chain-card-tag">
                    {tag}
                  </p>

                  <p className="supply-chain-card-body">
                    {body}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}