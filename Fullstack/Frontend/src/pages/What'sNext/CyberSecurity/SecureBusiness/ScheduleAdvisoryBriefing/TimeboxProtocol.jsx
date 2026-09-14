import React from "react";

export default function StructuredAgenda() {
  const agenda = [
    {
      number: "01",
      time: "Minutes 00 – 15",
      title: "Perimeter Telemetry Scan",
      description:
        "Review external attack surfaces, certificate exposures, unmonitored shadow APIs, and threat intelligence calibrated to your vertical.",
    },
    {
      number: "02",
      time: "Minutes 15 – 35",
      title: "Defense Gap Diagnostics",
      description:
        "Deep-dive into multi-cloud configuration, IAM privilege sprawl, pipeline vulnerabilities, and agentic AI prompt injection risks.",
    },
    {
      number: "03",
      time: "Minutes 35 – 45",
      title: "Vector Squad Mobilization & Playbook",
      description:
        "Agreement on immediate 30-60-90 day remediation objectives and handoff of your Board-ready security impact deck.",
    },
  ];

  return (
    <section className="structured-agenda">

      {/* =========================
          WHITE AGENDA SECTION
      ========================= */}

      <div className="agenda-white-section">

        <div className="agenda-heading">

          <div className="agenda-eyebrow">
            STRICT TIMEBOX PROTOCOL
          </div>

          <h2>
            The 45-Minute Structured Agenda
          </h2>

          <p>
            Every minute is architected for maximum executive value and
            actionable clarity.
          </p>

        </div>


        {/* AGENDA CARDS */}
        <div className="agenda-cards">

          {agenda.map((item) => (
            <div
              className="agenda-card"
              key={item.number}
            >

              <div className="agenda-card-top">

                <div className="agenda-number">
                  {item.number}
                </div>

                <div className="agenda-time">
                  {item.time}
                </div>

              </div>


              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>


      {/* =========================
          PURPLE INCIDENT SECTION
      ========================= */}

      <div className="incident-section">

        <div className="incident-inner">

          {/* ICON */}
          <div className="incident-icon">
            <span>✱</span>
          </div>


          {/* CONTENT */}
          <div className="incident-content">

            <div className="incident-label">
              ACTIVE INCIDENT ESCALATION
              <span className="incident-dot"></span>
            </div>

            <h3>
              Facing an Active Breach or Zero-Day Vector?
            </h3>

            <p>
              Bypass booking queue for priority triage directly with our Rapid
              Response Cyber Desk.
            </p>

          </div>


          {/* CONTACT DETAILS */}
          <div className="incident-contacts">

            <div className="incident-contact">

              <div className="contact-icon">
                ☎
              </div>

              <div>
                <span className="contact-label">
                  Direct C-Suite Dispatch Line:
                </span>

                <strong>
                  +91 581 350 0381
                </strong>
              </div>

            </div>


            <div className="incident-contact">

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <span className="contact-label">
                  Direct Advisory Desk:
                </span>

                <strong>
                  advisory@techtorch.solutions
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>


      <style>{`

        * {
          box-sizing: border-box;
        }


        /* =========================================
           MAIN WRAPPER
        ========================================= */

        .structured-agenda {
          width: 100%;
          font-family: "Inter", Arial, sans-serif;
        }


        /* =========================================
           WHITE SECTION
        ========================================= */

        .agenda-white-section {
          width: 100%;

          /* REDUCED HEIGHT */
          min-height: auto;

          padding: 52px 42px 58px;

          background: #f1f2f4;
        }


        /* =========================================
           HEADING
        ========================================= */

        .agenda-heading {
          width: 100%;

          text-align: center;

          margin: 0 auto 48px;
        }


        .agenda-eyebrow {
          margin-bottom: 11px;

          color: #7b164c;

          font-size: 13px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }


        .agenda-heading h2 {
          margin: 0;

          color: #172036;

          font-family:
            "Plus Jakarta Sans",
            "Inter",
            Arial,
            sans-serif;

          font-size: 40px;

          line-height: 1.15;

          font-weight: 700;

          letter-spacing: -1px;
        }


        .agenda-heading p {
          margin: 13px 0 0;

          color: #647188;

          font-size: 18px;

          line-height: 1.4;

          font-weight: 400;
        }


        /* =========================================
           CARDS
        ========================================= */

        .agenda-cards {
          width: 100%;

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 30px;

          margin: 0 auto;

          max-width: 1600px;
        }


        .agenda-card {
          /* REDUCED CARD HEIGHT */
          min-height: 245px;

          padding: 30px 31px 28px;

          background: #ffffff;

          border: 1px solid #e0e5eb;

          border-radius: 15px;

          box-shadow:
            0 3px 8px rgba(20, 31, 50, 0.04);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .agenda-card:hover {
          transform: translateY(-3px);

          box-shadow:
            0 10px 25px rgba(20, 31, 50, 0.08);
        }


        .agenda-card-top {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 24px;
        }


        .agenda-number {
          color: #85004b;

          font-size: 36px;

          line-height: 1;

          font-weight: 800;

          letter-spacing: -1px;
        }


        .agenda-time {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          min-height: 32px;

          padding: 0 13px;

          border-radius: 5px;

          background: #f0f3f7;

          color: #526075;

          font-size: 12px;

          font-weight: 650;

          white-space: nowrap;
        }


        .agenda-card h3 {
          margin: 0 0 13px;

          color: #1c263b;

          font-family:
            "Plus Jakarta Sans",
            "Inter",
            Arial,
            sans-serif;

          font-size: 21px;

          line-height: 1.25;

          font-weight: 750;

          letter-spacing: -0.3px;
        }


        .agenda-card p {
          margin: 0;

          max-width: 510px;

          color: #647188;

          font-size: 15px;

          line-height: 1.5;

          font-weight: 400;
        }


        /* =========================================
           PURPLE INCIDENT SECTION
        ========================================= */

        .incident-section {
          width: 100%;

          /* REDUCED PURPLE SECTION HEIGHT */
          padding: 30px 42px 30px;

          background:
            linear-gradient(
              135deg,
              #810046 0%,
              #8b0750 45%,
              #79003f 100%
            );
        }


        .incident-inner {
          width: 100%;

          max-width: 1600px;

          /* REDUCED CARD HEIGHT */
          min-height: 108px;

          margin: 0 auto;

          padding: 18px 24px;

          display: flex;

          align-items: center;

          gap: 20px;

          border: 1px solid rgba(255, 255, 255, 0.13);

          border-radius: 14px;

          background:
            rgba(255, 255, 255, 0.045);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.07);
        }


        /* =========================================
           INCIDENT ICON
        ========================================= */

        .incident-icon {
          width: 62px;

          height: 62px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 9px;

          background: #ffe6e6;
        }


        .incident-icon span {
          color: #c73535;

          font-size: 32px;

          line-height: 1;

          font-weight: 800;
        }


        /* =========================================
           INCIDENT CONTENT
        ========================================= */

        .incident-content {
          flex: 1;

          min-width: 0;
        }


        .incident-label {
          display: flex;

          align-items: center;

          gap: 9px;

          margin-bottom: 6px;

          color: #f3c6dc;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }


        .incident-dot {
          width: 10px;

          height: 10px;

          display: inline-block;

          border-radius: 50%;

          background: #ff684d;

          box-shadow:
            0 0 10px rgba(255, 104, 77, 0.5);
        }


        .incident-content h3 {
          margin: 0;

          color: #ffffff;

          font-family:
            "Plus Jakarta Sans",
            "Inter",
            Arial,
            sans-serif;

          font-size: 20px;

          line-height: 1.25;

          font-weight: 750;
        }


        .incident-content p {
          margin: 5px 0 0;

          color: #dca9c5;

          font-size: 13px;

          line-height: 1.4;
        }


        /* =========================================
           CONTACTS
        ========================================= */

        .incident-contacts {
          display: flex;

          align-items: center;

          gap: 35px;

          flex-shrink: 0;

          padding-right: 5px;
        }


        .incident-contact {
          display: flex;

          align-items: center;

          gap: 10px;
        }


        .contact-icon {
          color: #f4cade;

          font-size: 24px;

          line-height: 1;
        }


        .incident-contact > div:last-child {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }


        .contact-label {
          color: #f0bfd6;

          font-size: 11px;

          line-height: 1.2;

          white-space: nowrap;
        }


        .incident-contact strong {
          color: #ffffff;

          font-size: 15px;

          line-height: 1.2;

          font-weight: 700;

          white-space: nowrap;
        }


        /* =========================================
           LARGE TABLET
        ========================================= */

        @media (max-width: 1200px) {

          .agenda-white-section {
            padding-left: 28px;
            padding-right: 28px;
          }


          .agenda-cards {
            gap: 20px;
          }


          .agenda-card {
            min-height: 230px;
            padding: 27px 25px;
          }


          .agenda-card h3 {
            font-size: 19px;
          }


          .agenda-card p {
            font-size: 14px;
          }


          .incident-section {
            padding-left: 28px;
            padding-right: 28px;
          }


          .incident-inner {
            padding: 18px;
          }


          .incident-contacts {
            gap: 20px;
          }


          .contact-label {
            font-size: 10px;
          }


          .incident-contact strong {
            font-size: 13px;
          }
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 950px) {

          .agenda-white-section {
            padding-top: 45px;
            padding-bottom: 50px;
          }


          .agenda-heading {
            margin-bottom: 38px;
          }


          .agenda-heading h2 {
            font-size: 34px;
          }


          .agenda-heading p {
            font-size: 16px;
          }


          .agenda-cards {
            grid-template-columns: 1fr;

            max-width: 650px;

            gap: 16px;
          }


          .agenda-card {
            min-height: auto;
          }


          .incident-inner {
            flex-wrap: wrap;
          }


          .incident-content {
            flex-basis: calc(100% - 95px);
          }


          .incident-contacts {
            width: 100%;

            justify-content: space-between;

            padding-left: 85px;
          }
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .agenda-white-section {
            padding: 40px 18px 45px;
          }


          .agenda-eyebrow {
            font-size: 10px;

            letter-spacing: 1.1px;
          }


          .agenda-heading {
            margin-bottom: 32px;
          }


          .agenda-heading h2 {
            font-size: 28px;

            letter-spacing: -0.5px;
          }


          .agenda-heading p {
            margin-top: 11px;

            font-size: 14px;
          }


          .agenda-cards {
            gap: 14px;
          }


          .agenda-card {
            padding: 25px 21px;

            border-radius: 13px;
          }


          .agenda-card-top {
            margin-bottom: 21px;
          }


          .agenda-number {
            font-size: 32px;
          }


          .agenda-time {
            min-height: 30px;

            padding: 0 10px;

            font-size: 10px;
          }


          .agenda-card h3 {
            font-size: 18px;

            margin-bottom: 11px;
          }


          .agenda-card p {
            font-size: 13px;

            line-height: 1.5;
          }


          /* =====================================
             PURPLE MOBILE
          ===================================== */

          .incident-section {
            padding: 22px 18px 24px;
          }


          .incident-inner {
            padding: 18px 16px;

            gap: 14px;

            align-items: flex-start;
          }


          .incident-icon {
            width: 50px;

            height: 50px;
          }


          .incident-icon span {
            font-size: 27px;
          }


          .incident-content {
            flex-basis: calc(100% - 64px);
          }


          .incident-label {
            font-size: 8px;

            letter-spacing: 0.9px;
          }


          .incident-dot {
            width: 7px;

            height: 7px;
          }


          .incident-content h3 {
            font-size: 16px;
          }


          .incident-content p {
            font-size: 11px;

            line-height: 1.45;
          }


          .incident-contacts {
            width: 100%;

            padding: 8px 0 0;

            flex-direction: column;

            align-items: flex-start;

            gap: 15px;
          }


          .contact-icon {
            font-size: 20px;
          }


          .contact-label {
            font-size: 9px;
          }


          .incident-contact strong {
            font-size: 12px;
          }
        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 420px) {

          .agenda-white-section {
            padding: 35px 15px 40px;
          }


          .agenda-heading h2 {
            font-size: 25px;
          }


          .agenda-heading p {
            font-size: 13px;
          }


          .agenda-card {
            padding: 22px 18px;
          }


          .agenda-card-top {
            align-items: flex-start;
          }


          .agenda-number {
            font-size: 29px;
          }


          .agenda-time {
            font-size: 8px;
          }


          .agenda-card h3 {
            font-size: 16px;
          }


          .agenda-card p {
            font-size: 12px;
          }


          .incident-content h3 {
            font-size: 14px;
          }


          .incident-content p {
            font-size: 10px;
          }
        }

      `}</style>
    </section>
  );
}