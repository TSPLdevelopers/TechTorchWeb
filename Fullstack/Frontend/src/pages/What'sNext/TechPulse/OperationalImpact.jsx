import React from "react";

export default function OperationalImpact() {
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
                <span className="impact-number">
                  {card.number}
                </span>

                <span className="impact-label">
                  {card.label}
                </span>
              </div>

              <h3>{card.title}</h3>

              <p className="impact-card-text">
                {card.text}
              </p>

              <div className="impact-card-bottom">
                {card.bottom}
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .operational-impact {
          width: 100%;
          margin: 0;
          padding: 42px 0 60px;
          background: #ffffff;
          font-family: "Inter", sans-serif;
          color: #11182b;
          overflow: hidden;
        }

        .impact-container {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 38px;
        }

        /* TOP CONTENT */

        .impact-top-content {
          width: 96%;
          margin: 0 auto;
          transform: translateX(2.08%);
        }

        /* BADGE */

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

        /* HEADING */

        .impact-heading {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          color: #11182b;
          font-size: 31px;
          line-height: 1.02;
          letter-spacing: -1.15px;
          font-weight: 700;
        }

        /* SUBTITLE */

        .impact-subtitle {
          margin: 7px 0 0;
          color: #65738a;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 500;
        }

        /* GRID */

        .impact-grid {
          width: 96%;
          margin: 36px auto 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 0;
          row-gap: 18px;
          align-items: start;
        }

        /* CARD */

        .impact-card {
          width: 90%;
          justify-self: center;
          min-width: 0;
          min-height: 228px;
          padding: 19px 19px 16px;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          border: 1px solid #e5eaf0;
          border-radius: 10px;
          box-shadow:
            0 3px 10px rgba(20, 30, 50, 0.025);
        }

        /* CARD TOP */

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
        }

        .impact-label {
          color: #9aa9bd;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.35px;
          text-align: right;
        }

        /* CARD TITLE */

        .impact-card h3 {
          margin: 0 0 9px;
          color: #11182b;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.3;
          font-weight: 800;
          letter-spacing: -0.25px;
        }

        /* CARD TEXT */

        .impact-card-text {
          margin: 0;
          color: #617087;
          font-size: 12px;
          line-height: 1.58;
          font-weight: 500;
        }

        /* CARD BOTTOM */

        .impact-card-bottom {
          margin-top: auto;
          padding-top: 11px;
          border-top: 1px solid #e2e7ed;
          color: #970052;
          font-size: 9px;
          line-height: 1.3;
          font-weight: 800;
        }

        /* LARGE DESKTOP */

        @media (min-width: 1600px) {
          .impact-container {
            max-width: 1600px;
            padding: 0 45px;
          }

          .impact-top-content {
            width: 96%;
            transform: translateX(2.08%);
          }

          .impact-heading {
            font-size: 34px;
          }

          .impact-grid {
            width: 96%;
            column-gap: 0;
            row-gap: 20px;
          }

          .impact-card {
            width: 90%;
            min-height: 235px;
            padding: 21px 21px 17px;
          }

          .impact-card h3 {
            font-size: 14px;
          }

          .impact-card-text {
            font-size: 9.5px;
          }
        }

        /* TABLET / SMALL DESKTOP */

        @media (max-width: 1000px) {
          .operational-impact {
            padding: 38px 0 50px;
          }

          .impact-container {
            padding: 0 25px;
          }

          .impact-top-content {
            width: 96%;
            transform: translateX(2.08%);
          }

          .impact-heading {
            font-size: 29px;
          }

          .impact-grid {
            width: 96%;
            column-gap: 0;
            row-gap: 18px;
          }

          .impact-card {
            width: 90%;
            min-height: 235px;
            padding: 18px 16px 15px;
          }

          .impact-card h3 {
            font-size: 12px;
          }

          .impact-card-text {
            font-size: 8.5px;
          }
        }

        /* TABLET */

        @media (max-width: 750px) {
          .impact-grid {
            width: 96%;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 0;
            row-gap: 14px;
          }

          .impact-card {
            width: 90%;
            min-height: 220px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .operational-impact {
            padding: 34px 0 42px;
          }

          .impact-container {
            padding: 0 17px;
          }

          .impact-top-content {
            width: 96%;
            margin: 0 auto;
            transform: translateX(2.08%);
          }

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
            width: 96%;
            margin-top: 28px;
            grid-template-columns: 1fr;
            column-gap: 0;
            row-gap: 12px;
          }

          .impact-card {
            width: 90%;
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
            font-size: 10px;
            line-height: 1.6;
          }

          .impact-card-bottom {
            margin-top: 20px;
            font-size: 8px;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 380px) {
          .impact-container {
            padding: 0 14px;
          }

          .impact-top-content {
            width: 96%;
            transform: translateX(2.08%);
          }

          .impact-heading {
            font-size: 23px;
          }

          .impact-subtitle {
            font-size: 9.5px;
          }

          .impact-grid {
            width: 96%;
            column-gap: 0;
            row-gap: 12px;
          }

          .impact-card {
            width: 90%;
            padding: 17px 15px 14px;
          }

          .impact-card h3 {
            font-size: 14px;
          }

          .impact-card-text {
            font-size: 9.5px;
          }
        }
      `}</style>
    </section>
  );
}