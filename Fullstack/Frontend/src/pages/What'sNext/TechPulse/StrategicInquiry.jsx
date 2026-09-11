import React from "react";

export default function StrategicInquiryFramework() {
  const stages = [
    {
      number: "01",
      label: "STATUS",
      question: "What is happening?",
      description:
        "Clear, real-time view of current operational metrics and baseline activity across departments.",
      stage: "STAGE 1",
      action: "—",
      active: false,
    },
    {
      number: "02",
      label: "DIAGNOSIS",
      question: "Why is it happening?",
      description:
        "Uncover systemic patterns, hidden variances, and root causes behind the operational numbers.",
      stage: "STAGE 2",
      action: "—",
      active: false,
    },
    {
      number: "03",
      label: "PRIORITY",
      question: "What needs attention?",
      description:
        "Isolate high-impact inefficiencies, emerging risks, and urgent operational interventions.",
      stage: "STAGE 3",
      action: "—",
      active: false,
    },
    {
      number: "04",
      label: "FORECAST",
      question: "What could happen next?",
      description:
        "Leverage trend analysis and predictive modeling to anticipate shifting market conditions.",
      stage: "STAGE 4",
      action: "—",
      active: false,
    },
    {
      number: "05",
      label: "ACTION",
      question: "What should we do?",
      description:
        "Convert analytical intelligence into immediate, practical, and accountable business decisions.",
      stage: "STAGE 5",
      action: "",
      active: true,
    },
  ];

  return (
    <section className="strategic-framework">
      <div className="framework-container">

        {/* TOP BADGE */}
        <div className="framework-badge">
          <span className="badge-dot"></span>
          STRATEGIC INQUIRY FRAMEWORK
        </div>

        {/* HEADING */}
        <h2 className="framework-heading">
          The real question is not how much
          <br />
          data you have.
          <br />
          <span>It is what can your data help you</span>
          <br />
          <span>understand?</span>
        </h2>

        {/* SUBTEXT */}
        <p className="framework-description">
          A high-performing digital architecture guides leadership through five
          <br className="desktop-break" />
          progressive levels of cognitive clarity:
        </p>

        {/* CARDS */}
        <div className="framework-cards">
          {stages.map((item) => (
            <div
              className={`framework-card ${
                item.active ? "framework-card-active" : ""
              }`}
              key={item.number}
            >
              {/* CARD TOP */}
              <div className="framework-card-top">
                <span className="framework-number">{item.number}</span>

                <span className="framework-label">{item.label}</span>
              </div>

              {/* QUESTION */}
              <h3>{item.question}</h3>

              {/* DESCRIPTION */}
              <p>{item.description}</p>

              {/* CARD BOTTOM */}
              <div className="framework-card-bottom">
                <span>{item.stage}</span>
                {item.action && <span>{item.action}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="framework-bottom-message">
          <span className="bottom-dot"></span>
          <span>
            <span className="value-highlight">That is when data</span> starts
            creating real business value.
          </span>
        </div>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .strategic-framework {
          width: 100%;
          margin: 0;
          padding: 58px 0 60px;
          background: #faf9f4;
          font-family: "Inter", sans-serif;
          color: #10172b;
          overflow: hidden;
        }

        .framework-container {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 38px;

          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* BADGE */

        .framework-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          height: 26px;
          padding: 0 13px;

          border: 1px solid #e9c8d8;
          border-radius: 20px;

          background: #fffafd;
          color: #8c0750;

          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.55px;

          margin-bottom: 18px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #970052;
        }

        /* HEADING */

        .framework-heading {
          width: 100%;
          margin: 0;

          text-align: center;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          line-height: 1.16;
          letter-spacing: -1.25px;
          font-weight: 600;

          color: #10172b;
        }

        .framework-heading span {
          color: #8d0750;
        }

        /* DESCRIPTION */

        .framework-description {
          margin: 17px 0 0;

          text-align: center;

          color: #69768b;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.65;
          font-weight: 500;
        }

        /* CARDS */

        .framework-cards {
          width: 94%;
          margin-top: 54px;

          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;

          align-items: stretch;
        }

        .framework-card {
          width: 94%;
          justify-self: center;

          min-width: 0;
          min-height: 278px;

          padding: 23px 23px 18px;

          display: flex;
          flex-direction: column;

          background: #ffffff;

          border: 1px solid #e3e8ee;
          border-radius: 13px;

          box-shadow: 0 4px 12px rgba(20, 30, 50, 0.04);

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease;
        }

        /* HOVER - BEETROOT BORDER */

        .framework-card:hover {
          transform: translateY(-3px);

          border-color: #970052;

          box-shadow: 0 10px 25px rgba(20, 30, 50, 0.08);
        }

        /* HOVER - BEETROOT NUMBER, LABEL & STAGE */

        .framework-card:hover .framework-number {
          color: #970052;
        }

        .framework-card:hover .framework-label {
          color: #970052;
        }

        .framework-card:hover .framework-card-bottom {
          color: #970052;
        }

        /* ACTIVE CARD - NORMAL STATE */

        .framework-card-active {
          border: 1px solid #e3e8ee;
          background: #ffffff;

          box-shadow: 0 4px 12px rgba(20, 30, 50, 0.04);
        }

        /* CARD TOP */

        .framework-card-top {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 19px;
        }

        .framework-number {
          width: 31px;
          height: 23px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 6px;

          background: #f0f4f7;
          color: #52627a;

          font-size: 11px;
          font-weight: 800;

          transition: color 0.2s ease;
        }

        /* 5TH CARD NUMBER NORMAL */

        .framework-card-active .framework-number {
          background: #f0f4f7;
          color: #52627a;
        }

        .framework-label {
          color: #a0adbe;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 0.35px;

          transition: color 0.2s ease;
        }


        .framework-card-active .framework-label {
          color: #a0adbe;
        }

        /* QUESTION */

        .framework-card h3 {
          margin: 0 0 15px;

          font-family: "Plus Jakarta Sans", sans-serif;

          color: #11192c;

          font-size: 15px;
          line-height: 1.35;

          font-weight: 700;
          letter-spacing: -0.2px;
        }

        /* DESCRIPTION - DARKER */

        .framework-card p {
          margin: 0;

          color: #4f5b6d;
          font-family: "Plus Inter", sans-serif;

          font-size: 13px;
          line-height: 1.65;

          font-weight: 530;
        }

        /* CARD BOTTOM */

        .framework-card-bottom {
          width: 100%;

          margin-top: auto;
          padding-top: 15px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border-top: 1px solid #e7ebef;

          color: #a1adbd;

          font-size: 8.5px;
          font-weight: 700;

          letter-spacing: 0.25px;

          transition: color 0.2s ease;
        }

        /* 5TH CARD BOTTOM NORMAL */

        .framework-card-active .framework-card-bottom {
          color: #a1adbd;
          border-top-color: #e7ebef;
        }

        /* BOTTOM MESSAGE */

        .framework-bottom-message {
          min-height: 48px;

          margin-top: 49px;
          padding: 0 27px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          background: #ffffff;

          border: 1px solid #e1e7ed;
          border-radius: 30px;

          box-shadow: 0 4px 12px rgba(20, 30, 50, 0.035);

          color: #000000;

          font-size: 12px;
          font-weight: 700;
        }

        .value-highlight {
          color: #970052;
        }

        .bottom-dot {
          width: 7px;
          height: 7px;

          flex: 0 0 auto;

          border-radius: 50%;

          background: #970052;
        }

        /* LARGE DESKTOP */

        @media (min-width: 1600px) {

          .framework-container {
            max-width: 1600px;
            padding: 0 45px;
          }

          .framework-cards {
            width: 94%;
            gap: 18px;
          }

          .framework-card {
            width: 94%;
            min-height: 290px;
            padding: 25px 25px 19px;
          }

          .framework-card h3 {
            font-size: 16px;
          }

          .framework-card p {
            font-size: 11px;
          }
        }

        /* TABLET / SMALL DESKTOP */

        @media (max-width: 1100px) {

          .strategic-framework {
            padding: 50px 0 55px;
          }

          .framework-container {
            padding: 0 25px;
          }

          .framework-heading {
            font-size: 30px;
          }

          .framework-cards {
            width: 100%;
            gap: 11px;
          }

          .framework-card {
            width: 94%;
            min-height: 270px;
            padding: 20px 17px 17px;
          }

          .framework-card h3 {
            font-size: 14px;
          }

          .framework-card p {
            font-size: 9.5px;
          }
        }

        /* TABLET */

        @media (max-width: 850px) {

          .framework-heading {
            font-size: 28px;
          }

          .framework-description {
            font-size: 12px;
          }

          .framework-cards {
            width: 100%;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .framework-card {
            width: 100%;
            min-height: 245px;
          }

          .framework-card:last-child {
            grid-column: span 2;
            max-width: calc(50% - 7px);
            width: 100%;
            justify-self: center;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {

          .strategic-framework {
            padding: 42px 0 45px;
          }

          .framework-container {
            padding: 0 16px;
          }

          .framework-badge {
            height: 25px;
            font-size: 9px;
            padding: 0 11px;
          }

          .framework-heading {
            font-size: 25px;
            line-height: 1.18;
            letter-spacing: -0.8px;
          }

          .desktop-break {
            display: none;
          }

          .framework-description {
            max-width: 450px;
            margin-top: 15px;
            font-size: 11px;
          }

          .framework-cards {
            width: 100%;
            margin-top: 35px;

            display: flex;
            flex-direction: column;

            gap: 12px;
          }

          .framework-card {
            width: 100%;
            min-height: 0;

            padding: 20px 19px 17px;
          }

          .framework-card:last-child {
            width: 100%;
            max-width: none;
            grid-column: auto;
          }

          .framework-card-top {
            margin-bottom: 15px;
          }

          .framework-card h3 {
            font-size: 15px;
            margin-bottom: 11px;
          }

          .framework-card p {
            font-size: 10px;
            line-height: 1.6;
          }

          .framework-card-bottom {
            margin-top: 22px;
          }

          .framework-bottom-message {
            width: 100%;

            margin-top: 35px;
            padding: 10px 17px;

            text-align: center;

            font-size: 10px;
            line-height: 1.4;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 380px) {

          .framework-container {
            padding: 0 13px;
          }

          .framework-heading {
            font-size: 22px;
          }

          .framework-description {
            font-size: 10px;
          }

          .framework-card {
            width: 100%;
            padding: 18px 16px 16px;
          }

          .framework-card h3 {
            font-size: 14px;
          }

          .framework-card p {
            font-size: 9.5px;
          }
        }

      `}</style>
    </section>
  );
}