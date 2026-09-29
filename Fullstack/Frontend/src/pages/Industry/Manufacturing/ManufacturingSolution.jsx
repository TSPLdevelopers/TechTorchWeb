import React from "react";
import { Eye, TrendingUp, Share2, Truck, Shield } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    num: "01",
    icon: Eye,
    title: "End-to-End Visibility",
    body: "Access information across inventory, orders and supplier activities.",
  },
  {
    num: "02",
    icon: TrendingUp,
    title: "Demand Forecasting",
    body: "Support demand planning through forecasting and analytics.",
  },
  {
    num: "03",
    icon: Share2,
    title: "Supplier Collaboration",
    body: "Improve communication and coordination with suppliers.",
  },
  {
    num: "04",
    icon: Truck,
    title: "Logistics Management",
    body: "Support transportation, shipment tracking and logistics activities.",
  },
  {
    num: "05",
    icon: Shield,
    title: "Risk Management",
    body: "Identify supply chain risks and support planning around potential disruptions.",
  },
];

export default function SupplyChainManagementSection() {
  return (
    <div className="supply-chain-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        .supply-chain-section {
          width: 100%;
          background: #f2f2f5;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .supply-chain-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 40px;
        }

        .supply-chain-card {
          width: 100%;
          background: #ffffff;
          border-radius: 24px;
          padding: 42px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        /* Badge */
        .supply-chain-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 12px;
          margin-bottom: 18px;
          border-radius: 999px;
          background: #fbeef1;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1;
        }

        .supply-chain-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${WINE};
          flex-shrink: 0;
        }

        /* Heading - Plus Jakarta Sans */
        .supply-chain-heading {
          margin: 0 0 16px;
          max-width: 800px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 34px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        /* Subheading - Plus Jakarta Sans */
        .supply-chain-subheading {
          max-width: 820px;
          margin: 0 0 34px;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.8;
          font-weight: 500;
        }

        /* Cards */
        .supply-chain-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .supply-chain-item {
          min-width: 0;
          padding: 18px;
          border: 1px solid #ece9e4;
          border-radius: 16px;
          background: #ffffff;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .supply-chain-item:hover {
          transform: translateY(-4px);
          border-color: #e4d8dc;
          box-shadow: 0 10px 25px rgba(122, 31, 61, 0.08);
        }

        .supply-chain-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 24px;
        }

        .supply-chain-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 30px;
          height: 25px;
          padding: 0 8px;
          border-radius: 6px;
          background: #fbeef1;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 600;
        }

        .supply-chain-icon {
          color: #c9c4bc;
          flex-shrink: 0;
        }

        /* Card title - Plus Jakarta Sans */
        .supply-chain-item-title {
          margin: 0 0 8px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 700;
        }

        /* Card body - Inter */
        .supply-chain-item-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.65;
          font-weight: 400;
        }

        /* --------------------------------
           LARGE TABLET
        -------------------------------- */
        @media (max-width: 1100px) {
          .supply-chain-container {
            padding: 56px 32px;
          }

          .supply-chain-card {
            padding: 34px;
          }

          .supply-chain-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .supply-chain-heading {
            font-size: 32px;
          }
        }

        /* --------------------------------
           TABLET
        -------------------------------- */
        @media (max-width: 800px) {
          .supply-chain-container {
            padding: 48px 24px;
          }

          .supply-chain-card {
            padding: 30px;
            border-radius: 20px;
          }

          .supply-chain-heading {
            font-size: 29px;
          }

          .supply-chain-subheading {
            font-size: 13.5px;
            line-height: 1.75;
            margin-bottom: 28px;
          }

          .supply-chain-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .supply-chain-item {
            padding: 17px;
          }
        }

        /* --------------------------------
           MOBILE
        -------------------------------- */
        @media (max-width: 600px) {
          .supply-chain-container {
            padding: 38px 16px;
          }

          .supply-chain-card {
            padding: 24px 18px;
            border-radius: 18px;
          }

          .supply-chain-badge {
            font-size: 10px;
            padding: 7px 10px;
            margin-bottom: 15px;
          }

          .supply-chain-heading {
            font-size: 25px;
            line-height: 1.25;
            letter-spacing: -0.02em;
            margin-bottom: 13px;
          }

          .supply-chain-subheading {
            font-size: 13px;
            line-height: 1.7;
            margin-bottom: 24px;
          }

          .supply-chain-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .supply-chain-item {
            padding: 17px;
          }

          .supply-chain-item-top {
            margin-bottom: 20px;
          }

          .supply-chain-item-title {
            font-size: 14px;
          }

          .supply-chain-item-body {
            font-size: 12px;
            line-height: 1.6;
          }
        }

        /* --------------------------------
           SMALL MOBILE
        -------------------------------- */
        @media (max-width: 400px) {
          .supply-chain-container {
            padding: 30px 12px;
          }

          .supply-chain-card {
            padding: 21px 15px;
          }

          .supply-chain-heading {
            font-size: 22px;
          }

          .supply-chain-subheading {
            font-size: 12.5px;
          }

          .supply-chain-item {
            padding: 15px;
          }

          .supply-chain-item-title {
            font-size: 13.5px;
          }

          .supply-chain-item-body {
            font-size: 11.5px;
          }
        }

        /* --------------------------------
           VERY SMALL MOBILE
        -------------------------------- */
        @media (max-width: 340px) {
          .supply-chain-container {
            padding: 26px 10px;
          }

          .supply-chain-card {
            padding: 18px 13px;
          }

          .supply-chain-heading {
            font-size: 20px;
          }

          .supply-chain-subheading {
            font-size: 12px;
          }

          .supply-chain-badge {
            font-size: 9px;
          }
        }

        /* --------------------------------
           REDUCED MOTION
        -------------------------------- */
        @media (prefers-reduced-motion: reduce) {
          .supply-chain-item {
            transition: none;
          }

          .supply-chain-item:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="supply-chain-container">
        <div className="supply-chain-card">

          {/* Badge */}
          <span className="supply-chain-badge">
            <span className="supply-chain-badge-dot" />
            SUPPLY CHAIN MANAGEMENT
          </span>

          {/* Heading */}
          <h2 className="supply-chain-heading">
            From Procurement to Delivery
          </h2>

          {/* Subheading */}
          <p className="supply-chain-subheading">
            A connected supply chain depends on visibility across
            procurement, inventory, suppliers, orders and logistics.
            TechTorch Supply Chain Management solutions are designed to
            support supply chain activities from procurement through
            delivery, helping businesses manage important information
            across their supply chain environment.
          </p>

          {/* Cards */}
          <div className="supply-chain-grid">
            {cards.map(({ num, icon: Icon, title, body }) => (
              <div
                key={num}
                className="supply-chain-item"
              >
                <div className="supply-chain-item-top">
                  <span className="supply-chain-number">
                    {num}
                  </span>

                  <Icon
                    size={16}
                    strokeWidth={1.8}
                    className="supply-chain-icon"
                  />
                </div>

                <h3 className="supply-chain-item-title">
                  {title}
                </h3>

                <p className="supply-chain-item-body">
                  {body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}