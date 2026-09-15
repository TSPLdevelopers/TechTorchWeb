import React from "react";

export default function StrategicEngagementPathway() {
  const cards = [
    {
      number: "01",
      icon: "◎",
      title: "Perimeter & Exposure Discovery",
      description:
        "Automated asset discovery, surface credential scraping, public digital estate profiling, and real-time shadow infrastructure tracing.",
      timeframe: "Hours 0 – 24",
    },
    {
      number: "02",
      icon: "✣",
      title: "Architecture Diagnostic",
      description:
        "Deep-dive audit into multi-cloud workloads, Kubernetes configurations, zero-trust IAM privileges, and internal microservice interfaces.",
      timeframe: "Hours 24 – 48",
    },
    {
      number: "03",
      icon: "♧",
      title: "Roadmap & Squad Mobilization",
      description:
        "Delivery of the prioritized Board-ready remediation matrix, executive risk score, and immediate mobilization of dedicated TechTorch Vector Squads.",
      timeframe: "Immediate Handoff",
    },
  ];

  return (
    <section className="strategic-section">
      <div className="strategic-container">

        {/* HEADER */}
        <div className="strategic-header">
          <div className="strategic-heading-area">
            <span className="strategic-label">
              PROTOCOL & DELIVERY
            </span>

            <h2>The Strategic Engagement Pathway</h2>
          </div>

          <p className="strategic-intro">
            Structured for minimal engineering disruption while providing
            maximum executive visibility into institutional risk vectors.
          </p>
        </div>

        {/* CARDS */}
        <div className="strategic-cards">
          {cards.map((card) => (
            <div
              className="strategic-card"
              key={card.number}
            >
              <div className="strategic-card-top">
                <span className="strategic-number">
                  {card.number}
                </span>

                <div className="strategic-icon">
                  {card.icon}
                </div>
              </div>

              <div className="strategic-card-content">
                <h3>{card.title}</h3>

                <p>{card.description}</p>
              </div>

              <div className="strategic-timeframe">
                <span>Timeframe:</span>
                <strong>{card.timeframe}</strong>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        /* =========================================
           SECTION
        ========================================= */

        .strategic-section {
          width: 100%;
          background: linear-gradient(
            110deg,
            #72003d 0%,
            #870047 50%,
            #6e003b 100%
          );
          color: #ffffff;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        /* =========================================
           CONTAINER
        ========================================= */

        .strategic-container {
          width: 100%;
          max-width: 1460px;
          margin: 0 auto;
          padding: 55px 44px 50px;
        }

        /* =========================================
           HEADER
        ========================================= */

        .strategic-header {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
        }

        .strategic-heading-area {
          min-width: 0;
          margin-left: 5%;
        }

        .strategic-label {
          display: block;
          margin-bottom: 14px;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .strategic-heading-area h2 {
          margin: 0;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .strategic-intro {
          width: 500px;
          max-width: 500px;
          margin: 14px 30px 0 auto;
          color: #f5dce9;
          font-size: 15px;
          line-height: 1.5;
          font-weight: 400;

          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }

        /* =========================================
           CARDS
        ========================================= */

        .strategic-cards {
          width: 90%;
          margin: 40px auto 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .strategic-card {
          min-height: 255px;

          display: flex;
          flex-direction: column;

          padding: 20px 22px 20px;

          background: #ffffff;
          border-radius: 10px;

          box-shadow:
            0 8px 22px rgba(34, 0, 20, 0.15);

          color: #20232c;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .strategic-card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 14px 30px rgba(34, 0, 20, 0.22);
        }

        /* =========================================
           CARD TOP
        ========================================= */

        .strategic-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .strategic-number {
          color: #62002f;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 34px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .strategic-icon {
          width: 43px;
          height: 43px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: #f1e8ed;
          color: #650033;

          font-size: 23px;
          font-weight: 600;
        }

        /* =========================================
           CARD CONTENT
        ========================================= */

        .strategic-card-content {
          flex: 1;
          padding-top: 16px;
        }

        .strategic-card-content h3 {
          margin: 0;

          color: #252936;
          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 18px;
          line-height: 1.3;
          font-weight: 750;
          letter-spacing: -0.3px;

          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;

          min-height: 46px;
        }

        .strategic-card-content p {
          margin: 7px 0 0;

          color: #66748a;

          font-size: 13px;
          line-height: 1.5;
          font-weight: 500;
        }

        /* =========================================
           TIMEFRAME
        ========================================= */

        .strategic-timeframe {
          width: 100%;
          min-height: 38px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;
          margin-top: 13px;
          padding: 0 12px;

          border-radius: 7px;
          background: #eeeeef;
        }

        .strategic-timeframe span {
          color: #33363d;
          font-family: monospace;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
        }

        .strategic-timeframe strong {
          color: #806d78;
          font-family: monospace;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-align: right;
        }

        /* =========================================
           LARGE DESKTOP
        ========================================= */

        @media (min-width: 1600px) {
          .strategic-container {
            max-width: 1520px;
            padding-left: 50px;
            padding-right: 50px;
          }

          .strategic-heading-area {
            margin-left: 6%;
          }

          .strategic-heading-area h2 {
            font-size: 36px;
          }

          .strategic-cards {
            width: 88%;
            gap: 30px;
          }

          .strategic-card {
            min-height: 265px;
            padding: 22px 25px 21px;
          }
        }

        /* =========================================
           LAPTOP
        ========================================= */

        @media (max-width: 1200px) {
          .strategic-container {
            padding: 50px 35px 45px;
          }

          .strategic-heading-area {
            margin-left: 5%;
          }

          .strategic-heading-area h2 {
            font-size: 30px;
          }

          .strategic-intro {
            width: 430px;
            max-width: 430px;
            margin: 14px 20px 0 auto;
            font-size: 14px;
          }

          .strategic-cards {
            width: 91%;
            gap: 25px;
            margin-top: 35px;
          }

          .strategic-card {
            min-height: 245px;
            padding: 19px 20px 19px;
          }

          .strategic-number {
            font-size: 38px;
          }

          .strategic-icon {
            width: 41px;
            height: 41px;
            font-size: 22px;
          }

          .strategic-card-content {
            padding-top: 15px;
          }

          .strategic-card-content h3 {
            font-size: 16px;
            min-height: 42px;
          }

          .strategic-card-content p {
            font-size: 12px;
            line-height: 1.5;
          }

          .strategic-timeframe {
            min-height: 37px;
          }

          .strategic-timeframe span,
          .strategic-timeframe strong {
            font-size: 11px;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {
          .strategic-container {
            padding: 42px 25px 42px;
          }

          .strategic-header {
            flex-direction: column;
            gap: 10px;
          }

          .strategic-heading-area {
            margin-left: 0;
          }

          .strategic-heading-area h2 {
            font-size: 29px;
          }

          .strategic-intro {
            width: 100%;
            max-width: 650px;
            margin: 0;
          }

          .strategic-cards {
            width: 100%;
            grid-template-columns: 1fr;
            gap: 14px;
            margin-top: 26px;
          }

          .strategic-card {
            width: 100%;
            min-height: 220px;
            padding: 18px 19px 18px;
          }

          .strategic-card-content {
            padding-top: 14px;
          }

          .strategic-card-content h3 {
            font-size: 16px;
            min-height: 42px;
          }

          .strategic-card-content p {
            font-size: 12px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {
          .strategic-container {
            padding: 35px 18px 35px;
          }

          .strategic-heading-area {
            width: 100%;
            margin-left: 0;
          }

          .strategic-label {
            margin-bottom: 10px;
            font-size: 9px;
          }

          .strategic-heading-area h2 {
            font-size: 25px;
            line-height: 1.2;
          }

          .strategic-intro {
            width: 100%;
            max-width: 100%;
            font-size: 11.5px;
            line-height: 1.5;
          }

          .strategic-cards {
            width: 100%;
            gap: 12px;
            margin-top: 22px;
          }

          .strategic-card {
            width: 100%;
            min-height: 215px;
            padding: 17px 17px 17px;
            border-radius: 9px;
          }

          .strategic-number {
            font-size: 34px;
          }

          .strategic-icon {
            width: 38px;
            height: 38px;
            font-size: 20px;
          }

          .strategic-card-content {
            padding-top: 13px;
          }

          .strategic-card-content h3 {
            font-size: 15px;
            line-height: 1.3;
            min-height: 39px;
            -webkit-line-clamp: 2;
          }

          .strategic-card-content p {
            margin-top: 6px;
            font-size: 10.5px;
            line-height: 1.5;
          }

          .strategic-timeframe {
            min-height: 35px;
            margin-top: 11px;
            padding: 0 9px;
            gap: 8px;
          }

          .strategic-timeframe span,
          .strategic-timeframe strong {
            font-size: 7.5px;
            letter-spacing: 0.7px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 380px) {
          .strategic-container {
            padding: 32px 13px 32px;
          }

          .strategic-heading-area h2 {
            font-size: 22px;
          }

          .strategic-intro {
            font-size: 10.5px;
          }

          .strategic-cards {
            gap: 11px;
            margin-top: 20px;
          }

          .strategic-card {
            min-height: 205px;
            padding: 16px 15px 16px;
          }

          .strategic-number {
            font-size: 32px;
          }

          .strategic-icon {
            width: 36px;
            height: 36px;
            font-size: 19px;
          }

          .strategic-card-content {
            padding-top: 12px;
          }

          .strategic-card-content h3 {
            font-size: 14px;
            min-height: 36px;
          }

          .strategic-card-content p {
            font-size: 9.5px;
          }

          .strategic-timeframe {
            min-height: 34px;
            margin-top: 10px;
          }

          .strategic-timeframe span,
          .strategic-timeframe strong {
            font-size: 7px;
          }
        }

        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 320px) {
          .strategic-container {
            padding-left: 10px;
            padding-right: 10px;
          }

          .strategic-heading-area h2 {
            font-size: 20px;
          }

          .strategic-intro {
            font-size: 9.5px;
          }

          .strategic-card {
            min-height: 195px;
            padding: 15px 14px;
          }

          .strategic-number {
            font-size: 30px;
          }

          .strategic-icon {
            width: 34px;
            height: 34px;
            font-size: 18px;
          }

          .strategic-card-content h3 {
            font-size: 13px;
            min-height: 34px;
          }

          .strategic-card-content p {
            font-size: 9px;
          }

          .strategic-timeframe {
            min-height: 32px;
          }

          .strategic-timeframe span,
          .strategic-timeframe strong {
            font-size: 6.5px;
            letter-spacing: 0.5px;
          }
        }

        /* =========================================
           TOUCH DEVICES
        ========================================= */

        @media (hover: none) and (pointer: coarse) {
          .strategic-card:hover {
            transform: none;
          }
        }

      `}</style>
    </section>
  );
}