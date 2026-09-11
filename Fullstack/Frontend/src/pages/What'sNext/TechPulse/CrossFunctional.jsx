import React from "react";

export default function CrossFunctionalContext() {
  const connections = [
    "A financial decision may depend on operational performance.",
    "An operational decision may depend on inventory.",
    "Inventory may depend on demand.",
    "Demand may depend on customer behaviour.",
    "Customer behaviour may influence sales and planning.",
  ];

  const solutions = [
    "ERP",
    "Operations Management",
    "Supply Chain Management",
    "Aviation Management",
    "People Resources",
    "Web Portals",
    "Financial Management",
    "Payment Management",
    "Healthcare & Hospital Management",
    "CRM",
    "E-Commerce",
    "Project Management",
  ];

  return (
    <section className="cross-functional-context">
      <div className="cross-functional-container">

        {/* BADGE */}
        <div className="cross-functional-badge">
          <span className="cross-functional-dot"></span>
          CROSS-FUNCTIONAL CONTEXT
        </div>

        {/* HEADING */}
        <h2 className="cross-functional-heading">
          Business Decisions Don’t Happen
          <br />
          in Silos
        </h2>

        {/* SUBHEADING */}
        <p className="cross-functional-subheading">
          Every departmental choice triggers an operational ripple throughout
          the enterprise.
        </p>

        {/* CONNECTION FLOW */}
        <div className="connection-wrapper">
          <div className="connection-list">

            {connections.map((item, index) => (
              <React.Fragment key={index}>

                <div className="connection-item">
                  <span className="connection-item-dot"></span>

                  <span className="connection-item-text">
                    {item}
                  </span>
                </div>

                {index < connections.length - 1 && (
                  <div className="connection-arrow">
                    ↓
                  </div>
                )}

              </React.Fragment>
            ))}

          </div>

          {/* EVERYTHING CONNECTED */}
          <div className="everything-connected">
            <span className="everything-dot"></span>
            EVERYTHING IS CONNECTED.
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="cross-functional-description">

          <p>
            That is why digital transformation should not simply mean adding
            more software.
          </p>

          <p>
            It should mean creating a more connected business environment
            where information can move effectively between functions and
            support the people responsible for making decisions.
          </p>

        </div>

        {/* SOLUTIONS TITLE */}
        <div className="solutions-title">
          TECHTORCH'S DIGITAL SOLUTIONS PORTFOLIO SPANS
        </div>

        {/* SOLUTION PILLS */}
        <div className="solutions-list">
          {solutions.map((solution) => (
            <span className="solution-pill" key={solution}>
              {solution}
            </span>
          ))}
        </div>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        /* =====================================
           MAIN SECTION
        ====================================== */

        .cross-functional-context {
          width: 100%;
          margin: 0;
          padding: 45px 0 55px;

          background: #f8fafc;

          color: #11172b;

          font-family: "Inter", sans-serif;

          overflow: hidden;
        }

        .cross-functional-container {
          width: 100%;
          max-width: 1500px;

          margin: 0 auto;

          padding: 0 38px;

          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* =====================================
           BADGE
        ====================================== */

        .cross-functional-badge {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          height: 26px;

          padding: 0 13px;

          border: 1px solid #e6c9d8;

          border-radius: 20px;

          background: #fffafd;

          color: #8c0750;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.65px;

          margin-bottom: 14px;
        }

        .cross-functional-dot {
          width: 6px;
          height: 6px;

          flex: 0 0 auto;

          border-radius: 50%;

          background: #970052;
        }

        /* =====================================
           HEADING
           SAME SIZE
        ====================================== */

        .cross-functional-heading {
          width: 100%;

          margin: 0;

          text-align: center;

          color: #11172b;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 31px;

          line-height: 1.08;

          letter-spacing: -1px;

          font-weight: 700;
        }

        /* =====================================
           SUBHEADING
        ====================================== */

        .cross-functional-subheading {
          width: 100%;

          margin: 13px 0 0;

          text-align: center;

          color: #65738a;

          font-size: 13px;

          line-height: 1.6;

          font-weight: 500;
        }

        /* =====================================
           CONNECTION BOX
        ====================================== */

        .connection-wrapper {
          width: 100%;

          max-width: 1050px;

          margin-top: 31px;

          padding: 32px 42px 27px;

          background: #ffffff;

          border: 1px solid #e5eaf0;

          border-radius: 14px;

          box-shadow:
            0 4px 14px rgba(20, 30, 50, 0.025);

          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .connection-list {
          width: 100%;

          max-width: 690px;

          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* =====================================
           CONNECTION ITEM
        ====================================== */

        .connection-item {
          width: 100%;

          min-height: 42px;

          padding: 0 14px;

          display: flex;

          align-items: center;

          gap: 10px;

          background: #f7f9fb;

          border: 1px solid #e4eaf0;

          border-radius: 7px;
        }

        .connection-item-dot {
          width: 7px;
          height: 7px;

          flex: 0 0 auto;

          border-radius: 50%;

          background: #970052;
        }

        .connection-item-text {
          color: #293448;

          font-size: 11px;

          line-height: 1.45;

          font-weight: 600;
        }

        /* =====================================
           ARROWS
        ====================================== */

        .connection-arrow {
          height: 24px;

          display: flex;

          align-items: center;
          justify-content: center;

          color: #bd6b91;

          font-size: 16px;

          line-height: 1;

          font-weight: 700;
        }

        /* =====================================
           EVERYTHING CONNECTED
        ====================================== */

        .everything-connected {
          min-height: 34px;

          margin-top: 20px;

          padding: 0 17px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          border: 1px solid #e2bdd0;

          border-radius: 20px;

          background: #fffafd;

          color: #8d0750;

          font-size: 9.5px;

          font-weight: 800;

          letter-spacing: 0.4px;
        }

        .everything-dot {
          width: 7px;
          height: 7px;

          flex: 0 0 auto;

          border-radius: 50%;

          background: #970052;
        }

        /* =====================================
           DESCRIPTION
        ====================================== */

        .cross-functional-description {
          width: 100%;

          max-width: 920px;

          margin-top: 28px;

          padding: 0 10px;

          color: #52627a;

          font-size: 11.5px;

          line-height: 1.7;

          font-weight: 500;
        }

        .cross-functional-description p {
          margin: 0;
        }

        .cross-functional-description p + p {
          margin-top: 14px;
        }

        /* =====================================
           SOLUTIONS TITLE
        ====================================== */

        .solutions-title {
          margin-top: 24px;

          text-align: center;

          color: #9aa8ba;

          font-size: 8px;

          line-height: 1.4;

          font-weight: 800;

          letter-spacing: 0.45px;
        }

        /* =====================================
           SOLUTION PILLS
           INCREASED SIZE
        ====================================== */

        .solutions-list {
          width: 100%;

          max-width: 900px;

          margin-top: 10px;

          display: flex;

          flex-wrap: wrap;

          align-items: center;

          justify-content: center;

          gap: 8px;
        }

        .solution-pill {
          min-height: 28px;

          padding: 0 12px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          background: #ffffff;

          border: 1px solid #e0e6ec;

          border-radius: 14px;

          color: #536178;

          font-size: 9.5px;

          line-height: 1.3;

          font-weight: 600;

          white-space: nowrap;
        }

        /* =====================================
           LARGE DESKTOP
        ====================================== */

        @media (min-width: 1600px) {

          .cross-functional-container {
            max-width: 1600px;

            padding: 0 45px;
          }

          .cross-functional-heading {
            font-size: 34px;
          }

          .cross-functional-subheading {
            font-size: 14px;
          }

          .connection-wrapper {
            max-width: 1100px;

            padding:
              34px 48px 29px;
          }

          .connection-list {
            max-width: 720px;
          }

          .connection-item {
            min-height: 44px;
          }

          .connection-item-text {
            font-size: 11.5px;
          }

          .connection-arrow {
            font-size: 17px;
          }

          .cross-functional-description {
            max-width: 950px;

            font-size: 12px;
          }

          .solution-pill {
            min-height: 29px;

            padding: 0 13px;

            font-size: 10px;
          }
        }

        /* =====================================
           TABLET / SMALL DESKTOP
        ====================================== */

        @media (max-width: 1100px) {

          .cross-functional-context {
            padding: 42px 0 50px;
          }

          .cross-functional-container {
            padding: 0 25px;
          }

          .cross-functional-heading {
            font-size: 29px;
          }

          .cross-functional-subheading {
            font-size: 12px;
          }

          .connection-wrapper {
            max-width: 900px;

            padding:
              28px 35px 25px;
          }

          .connection-list {
            max-width: 650px;
          }

          .connection-item {
            min-height: 41px;
          }

          .connection-item-text {
            font-size: 10.5px;
          }

          .cross-functional-description {
            max-width: 820px;

            font-size: 11px;
          }

          .solution-pill {
            min-height: 28px;

            font-size: 9px;
          }
        }

        /* =====================================
           TABLET
        ====================================== */

        @media (max-width: 800px) {

          .cross-functional-heading {
            font-size: 27px;
          }

          .cross-functional-subheading {
            font-size: 11px;
          }

          .connection-wrapper {
            max-width: 700px;

            padding:
              25px 25px 23px;
          }

          .connection-list {
            max-width: 100%;
          }

          .connection-item {
            min-height: 41px;
          }

          .connection-item-text {
            font-size: 10px;
          }

          .cross-functional-description {
            max-width: 650px;

            font-size: 10.5px;
          }

          .solution-pill {
            min-height: 27px;

            padding: 0 11px;

            font-size: 8.5px;
          }
        }

        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 600px) {

          .cross-functional-context {
            padding: 35px 0 42px;
          }

          .cross-functional-container {
            padding: 0 17px;
          }

          .cross-functional-badge {
            height: 24px;

            padding: 0 10px;

            font-size: 8px;
          }

          /* HEADING SAME */

          .cross-functional-heading {
            font-size: 24px;

            line-height: 1.12;

            letter-spacing: -0.7px;
          }

          .cross-functional-subheading {
            margin-top: 12px;

            font-size: 10.5px;

            line-height: 1.65;
          }

          .desktop-break {
            display: none;
          }

          .connection-wrapper {
            width: 100%;

            margin-top: 26px;

            padding:
              22px 15px 21px;

            border-radius: 12px;
          }

          .connection-item {
            min-height: 43px;

            padding: 0 10px;

            gap: 8px;
          }

          .connection-item-dot {
            width: 6px;
            height: 6px;
          }

          .connection-item-text {
            font-size: 9.5px;

            line-height: 1.45;
          }

          .connection-arrow {
            height: 21px;

            font-size: 14px;
          }

          .everything-connected {
            min-height: 31px;

            margin-top: 18px;

            padding: 0 13px;

            font-size: 8.5px;
          }

          .everything-dot {
            width: 6px;
            height: 6px;
          }

          .cross-functional-description {
            margin-top: 24px;

            padding: 0;

            font-size: 10px;

            line-height: 1.7;
          }

          .cross-functional-description p + p {
            margin-top: 13px;
          }

          .solutions-title {
            margin-top: 22px;

            font-size: 7px;
          }

          .solutions-list {
            max-width: 100%;

            gap: 7px;

            margin-top: 9px;
          }

          .solution-pill {
            min-height: 27px;

            padding: 0 10px;

            font-size: 8.5px;
          }
        }

        /* =====================================
           SMALL MOBILE
        ====================================== */

        @media (max-width: 380px) {

          .cross-functional-container {
            padding: 0 14px;
          }

          .cross-functional-heading {
            font-size: 22px;
          }

          .cross-functional-subheading {
            font-size: 10px;
          }

          .connection-wrapper {
            padding:
              19px 11px 19px;
          }

          .connection-item {
            min-height: 41px;

            padding: 0 8px;
          }

          .connection-item-text {
            font-size: 9px;
          }

          .cross-functional-description {
            font-size: 9.5px;
          }

          .solution-pill {
            min-height: 26px;

            padding: 0 9px;

            font-size: 8px;
          }
        }
      `}</style>
    </section>
  );
}