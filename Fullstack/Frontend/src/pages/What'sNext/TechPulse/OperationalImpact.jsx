import React from "react";

const cards = [
  {
    number: "01",
    label: "CORE PROCESSES",
    title: "OPERATIONS",
    text: "Understand how business processes are performing, identify inefficiencies and improve operational control. TechTorch's Operations Management solutions are focused on helping businesses streamline, monitor and optimize operational processes.",
    bottom: "Efficiency & Throughput",
  },
  {
    number: "02",
    label: "FISCAL HEALTH",
    title: "FINANCE",
    text: "Connect financial information with wider business activity to improve visibility, accuracy and decision-making. TechTorch's Financial Management solutions are designed to streamline financial operations, improve accuracy and support better business decisions.",
    bottom: "Cash Flow & Governance",
  },
  {
    number: "03",
    label: "VALUE CHAIN",
    title: "SUPPLY CHAIN",
    text: "Better data can provide greater visibility across inventory, orders, suppliers and logistics. TechTorch's Supply Chain Management solutions focus on end-to-end visibility, demand forecasting, supplier collaboration, logistics management and risk management.",
    bottom: "Logistics & Fulfillment",
  },
  {
    number: "04",
    label: "COMMERCIAL REACH",
    title: "CUSTOMER RELATIONSHIPS",
    text: "Customer data becomes more valuable when teams can see the wider relationship rather than isolated interactions. TechTorch's CRM solutions support lead and opportunity management, centralized customer information, sales automation, customer support and marketing automation.",
    bottom: "Lifecycle & Retention",
  },
  {
    number: "05",
    label: "HUMAN CAPITAL",
    title: "PEOPLE & RESOURCES",
    text: "Relevant workforce information can help organizations understand resource requirements, performance and operational needs, matching talent capacity with strategic priorities dynamically.",
    bottom: "Talent & Allocation",
  },
  {
    number: "06",
    label: "GOVERNANCE",
    title: "MANAGEMENT",
    text: "Leadership needs more than individual reports. It needs a clear view of the information that influences business performance. More numbers are not the answer. Better context is.",
    bottom: "Executive Foresight",
  },
];

export default function OperationalImpact() {
  return (
    <section className="operational-impact">
      <div className="impact-container">
        <div className="impact-top-content">
          <div className="impact-badge">
            <span className="impact-dot"></span>
            OPERATIONAL IMPACT
          </div>

          <h2 className="impact-heading">
            Better Visibility Across the Business
          </h2>

          <p className="impact-subtitle">
            Data becomes valuable when it helps improve something that matters.
          </p>
        </div>

        <div className="impact-grid">
          {cards.map((card) => (
            <div className="impact-card" key={card.number}>
              <div className="impact-card-top">
                <span className="impact-number">{card.number}</span>
                <span className="impact-label">{card.label}</span>
              </div>

              <h3>{card.title}</h3>

              <p className="impact-card-text">{card.text}</p>

              <div className="impact-card-bottom">{card.bottom}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ================= SECTION (padding same as other sections) ================= */

        .operational-impact {
          width: 100%;
          margin: 0;
          padding: 40px 16px;
          background: #ffffff;
          font-family: "Inter", sans-serif;
          color: #11182b;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .operational-impact {
            padding: 48px 24px;
          }
        }

        @media (min-width: 768px) {
          .operational-impact {
            padding: 56px 40px;
          }
        }

        @media (min-width: 1024px) {
          .operational-impact {
            padding: 64px 100px;
          }
        }

        @media (min-width: 1280px) {
          .operational-impact {
            padding: 80px 100px;
          }
        }

        .impact-container {
          width: 100%;
        }

        .impact-top-content {
          width: 100%;
        }

        .impact-badge {
          width: fit-content;
          height: 25px;
          padding: 0 12px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 1px solid #edc9da;
          border-radius: 20px;
          background: #fff9fc;
          color: #8c0750;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.65px;
          margin-bottom: 10px;
        }

        .impact-dot {
          width: 6px;
          height: 6px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #970052;
        }

        .impact-heading {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          color: #11182b;
          font-size: 31px;
          line-height: 1.02;
          letter-spacing: -1.15px;
          font-weight: 700;
        }

        .impact-subtitle {
          margin: 7px 0 0;
          color: #65738a;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 500;
        }

        .impact-grid {
          width: 100%;
          margin: 36px 0 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          align-items: start;
        }

        .impact-card {
          width: 100%;
          min-width: 0;
          min-height: 228px;
          padding: 19px 19px 16px;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          border: 1px solid #e5eaf0;
          border-radius: 10px;
          box-shadow: 0 3px 10px rgba(20, 30, 50, 0.025);
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .impact-card:hover {
          transform: translateY(-5px);
          border-color: #970052;
          box-shadow:
            0 0 8px rgba(151, 0, 82, 0.15),
            0 0 16px rgba(151, 0, 82, 0.08),
            0 10px 22px rgba(20, 30, 50, 0.08);
        }

        .impact-card:hover .impact-number {
          background: #970052;
          border-color: #970052;
          color: #ffffff;
        }

        .impact-card-top {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .impact-number {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #eccddd;
          border-radius: 6px;
          background: #fff8fb;
          color: #970052;
          font-size: 10px;
          font-weight: 800;
          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease;
        }

        .impact-label {
          color: #9aa9bd;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.35px;
          text-align: right;
          transition: color 0.4s ease;
        }

        .impact-card:hover .impact-label {
          color: #970052;
        }

        .impact-card h3 {
          margin: 0 0 9px;
          color: #11182b;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.3;
          font-weight: 750;
          letter-spacing: -0.25px;
        }

        .impact-card-text {
          margin: 0;
          color: #617087;
          font-size: 12px;
          line-height: 1.58;
          font-weight: 500;
        }

        .impact-card-bottom {
          margin-top: auto;
          padding-top: 11px;
          border-top: 1px solid #e2e7ed;
          color: #970052;
          font-size: 9.5px;
          line-height: 1.3;
          font-weight: 800;
        }

        /* LARGE DESKTOP */

        @media (min-width: 1600px) {
          .impact-heading {
            font-size: 34px;
          }

          .impact-grid {
            gap: 20px;
          }

          .impact-card {
            min-height: 235px;
            padding: 21px 21px 17px;
          }

          .impact-card h3 {
            font-size: 14px;
          }

          .impact-card-text {
            font-size: 12px;
          }
        }

        /* TABLET / SMALL DESKTOP */

        @media (max-width: 1000px) {
          .impact-heading {
            font-size: 29px;
          }

          .impact-card {
            min-height: 235px;
            padding: 18px 16px 15px;
          }

          .impact-card h3 {
            font-size: 12px;
          }

          .impact-card-text {
            font-size: 11px;
          }
        }

        /* TABLET */

        @media (max-width: 750px) {
          .impact-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .impact-card {
            min-height: 220px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .impact-badge {
            height: 24px;
            font-size: 8px;
            padding: 0 10px;
          }

          .impact-heading {
            font-size: 25px;
            line-height: 1.08;
            letter-spacing: -0.8px;
          }

          .impact-subtitle {
            font-size: 10px;
            margin-top: 8px;
          }

          .impact-grid {
            margin-top: 28px;
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .impact-card {
            min-height: 0;
            padding: 18px 17px 15px;
          }

          .impact-card-top {
            margin-bottom: 13px;
          }

          .impact-card h3 {
            font-size: 15px;
            margin-bottom: 9px;
          }

          .impact-card-text {
            font-size: 11px;
            line-height: 1.6;
          }

          .impact-card-bottom {
            margin-top: 20px;
            font-size: 8px;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 380px) {
          .impact-heading {
            font-size: 23px;
          }

          .impact-subtitle {
            font-size: 9.5px;
          }

          .impact-card {
            padding: 17px 15px 14px;
          }

          .impact-card h3 {
            font-size: 14px;
          }

          .impact-card-text {
            font-size: 10.5px;
          }
        }
      `}</style>
    </section>
  );
}