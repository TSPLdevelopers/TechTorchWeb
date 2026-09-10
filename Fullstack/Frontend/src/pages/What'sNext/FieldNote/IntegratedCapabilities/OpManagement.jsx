import React from "react";

export default function OperationsManagement() {
  return (
    <div className="operations-page">

      {/* ================= HERO ================= */}
      <section className="operations-hero">
        <img
          className="operations-hero-image"
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=90"
          alt="Operations control room"
        />

        <div className="operations-hero-overlay"></div>

        <div className="operations-hero-content">

          <div className="operations-badge">
            <span className="operations-badge-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="3" />
                <circle cx="5" cy="7" r="1.5" />
                <circle cx="19" cy="7" r="1.5" />
                <circle cx="5" cy="17" r="1.5" />
                <circle cx="19" cy="17" r="1.5" />
                <path d="M9.5 10 6.2 8" />
                <path d="M14.5 10 17.8 8" />
                <path d="M9.5 14 6.2 16" />
                <path d="M14.5 14 17.8 16" />
              </svg>
            </span>

            OPERATIONS MANAGEMENT
          </div>

          <h1>
            Intelligent Operations
            <br />
            Management:
            <br />
            Orchestrating Excellence
          </h1>

          <div className="operations-hero-buttons">
            <button className="operations-primary-btn">
              Automate Workflows
            </button>

            <button className="operations-secondary-btn">
              View Analytics
            </button>
          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="operations-intro">

        <h2>
          Transforming Complexity into Clarity
        </h2>

        <p>
          TechTorch empowers enterprise teams by dismantling departmental silos
          and surfacing actionable insights. Through advanced predictive
          maintenance and resilient operational frameworks, we orchestrate
          excellence across every layer of your infrastructure, reducing
          friction and amplifying strategic outcomes.
        </p>

      </section>


      {/* ================= FEATURE CARDS ================= */}
      <section className="operations-features">

        {/* WORKFLOW AUTOMATION */}
        <div className="workflow-card">

          <div className="workflow-content">

            <div className="feature-icon workflow-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
                <path d="M10 7h4a2 2 0 0 1 2 2v5" />
                <path d="M14 17h-4a2 2 0 0 1-2-2v-5" />
              </svg>
            </div>

            <h3>
              Workflow Automation
            </h3>

            <p>
              Streamline complex processes with intelligent automation that
              adapts to real-time data inputs. Eliminate manual handoffs and
              ensure consistent execution across distributed teams.
            </p>

            <div className="workflow-stats">

              <div className="stat-box">
                <strong>40%</strong>
                <span>REDUCTION IN MANUAL TASKS</span>
              </div>

              <div className="stat-box">
                <strong>3x</strong>
                <span>FASTER RESOLUTION TIMES</span>
              </div>

            </div>

          </div>

        </div>


        {/* PREDICTIVE MAINTENANCE */}
        <div className="maintenance-card">

          <div className="feature-icon maintenance-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 17l5-5 4 3 7-8" />
              <path d="M17 7h3v3" />
              <circle cx="4" cy="17" r="1.2" />
              <circle cx="9" cy="12" r="1.2" />
              <circle cx="13" cy="15" r="1.2" />
              <circle cx="20" cy="7" r="1.2" />
            </svg>
          </div>

          <h3>
            Predictive
            <br />
            Maintenance
          </h3>

          <p>
            Anticipate system failures before they occur. TechTorch utilizes
            machine learning models to analyze operational telemetry,
            ensuring maximum uptime and reliability for critical
            infrastructure.
          </p>

          <div className="maintenance-chart">

            <div className="chart-bars">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
              <span className="bar bar-4"></span>
              <span className="bar bar-5"></span>
              <span className="bar bar-6"></span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= RESILIENCE ================= */}
      <section className="resilience-card">

        <div className="resilience-content">

          <div className="feature-icon resilience-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 3 19 6v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>

          <h2>
            Operational
            <br />
            Resilience
          </h2>

          <p>
            Build robust operational frameworks designed to withstand
            disruption. TechTorch provides dynamic resource allocation,
            automated failovers, and comprehensive audit trails to maintain
            continuity under pressure.
          </p>

          <div className="resilience-list">

            <div className="resilience-item">
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              Automated Incident Response
            </div>

            <div className="resilience-item">
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              Dynamic Load Balancing
            </div>

            <div className="resilience-item">
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              Compliance Auditing & Reporting
            </div>

          </div>

        </div>

        <div className="resilience-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=90"
            alt="Digital network operations"
            className="resilience-image"
          />
        </div>

      </section>


      {/* ================= CSS ================= */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .operations-page {
          width: 100%;
          min-height: 100vh;
          background: #f7f8fa;
          color: #171717;
          font-family: "Inter", sans-serif;
          padding: 28px 28px 60px;
        }


        /* ================= HERO ================= */

        .operations-hero {
          position: relative;
          width: 100%;
          max-width: 1100px;
          height: 520px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 0;
        }

        .operations-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .operations-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(9, 16, 19, 0.88) 0%,
              rgba(9, 16, 19, 0.67) 48%,
              rgba(9, 16, 19, 0.42) 100%
            );
        }

        .operations-hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 55px 70px;
        }

        .operations-badge {
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 7px 15px;
          border-radius: 7px;
          background: rgba(124, 19, 72, 0.55);
          border: 1px solid rgba(224, 166, 198, 0.45);
          color: #e9d8e2;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .operations-badge-icon {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .operations-badge-icon svg {
          width: 17px;
          height: 17px;
        }

        .operations-hero h1 {
          max-width: 760px;
          margin: 27px 0 28px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(42px, 5vw, 70px);
          line-height: 1.04;
          font-weight: 800;
          letter-spacing: -2.5px;
        }

        .operations-hero-buttons {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .operations-primary-btn,
        .operations-secondary-btn {
          min-height: 48px;
          padding: 0 28px;
          border-radius: 4px;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .operations-primary-btn {
          border: 1px solid #8b004b;
          background: #8b004b;
          color: #ffffff;
        }

        .operations-primary-btn:hover {
          background: #a00058;
        }

        .operations-secondary-btn {
          border: 1px solid rgba(255,255,255,0.65);
          background: transparent;
          color: #ffffff;
        }

        .operations-secondary-btn:hover {
          background: rgba(255,255,255,0.1);
        }


        /* ================= INTRO ================= */

        .operations-intro {
          width: 100%;
          max-width: 850px;
          margin: 48px auto 85px;
          text-align: center;
        }

        .operations-intro h2 {
          margin: 0 0 26px;
          color: #68103a;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(27px, 3vw, 37px);
          line-height: 1.2;
          font-weight: 750;
          letter-spacing: -1.2px;
        }

        .operations-intro p {
          margin: 0;
          color: #75676d;
          font-size: 20px;
          line-height: 1.55;
          font-weight: 400;
        }


        /* ================= FEATURES ================= */

        .operations-features {
          width: 100%;
          max-width: 900px;
          margin: 0 auto 38px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 270px;
          gap: 20px;
          align-items: stretch;
        }


        /* WORKFLOW */

        .workflow-card {
          min-height: 420px;
          background: #ffffff;
          border: 1px solid #eeeeee;
          border-radius: 15px;
          box-shadow: 0 8px 30px rgba(45, 25, 35, 0.025);
        }

        .workflow-content {
          height: 100%;
          padding: 42px 42px 35px;
          display: flex;
          flex-direction: column;
        }

        .feature-icon {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-icon svg {
          width: 25px;
          height: 25px;
        }

        .workflow-icon {
          color: #71003d;
        }

        .workflow-content h3 {
          margin: 24px 0 14px;
          color: #202020;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 25px;
          line-height: 1.2;
          font-weight: 750;
        }

        .workflow-content p {
          max-width: 580px;
          margin: 0;
          color: #75676d;
          font-size: 14px;
          line-height: 1.55;
        }

        .workflow-stats {
          margin-top: auto;
          padding-top: 35px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .stat-box {
          min-height: 105px;
          padding: 18px 20px;
          border: 1px solid #e5e8ed;
          border-radius: 7px;
          background: #fafbfc;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .stat-box strong {
          color: #6d1640;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 27px;
          line-height: 1;
          font-weight: 500;
        }

        .stat-box span {
          margin-top: 9px;
          max-width: 130px;
          color: #75676d;
          font-size: 8px;
          line-height: 1.3;
          font-weight: 700;
        }


        /* MAINTENANCE */

        .maintenance-card {
          min-height: 420px;
          padding: 38px 30px 28px;
          background: #fcf9fb;
          border: 1px solid #f1edf0;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
        }

        .maintenance-icon {
          color: #185b2d;
        }

        .maintenance-card h3 {
          margin: 22px 0 14px;
          color: #202020;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 23px;
          line-height: 1.18;
          font-weight: 750;
        }

        .maintenance-card p {
          margin: 0;
          color: #75676d;
          font-size: 13px;
          line-height: 1.55;
        }

        .maintenance-chart {
          width: 130px;
          height: 105px;
          margin-top: auto;
          border: 1px solid #e0e4e9;
          border-radius: 4px;
          background: #fbfcfd;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 16px 13px;
        }

        .chart-bars {
          width: 100%;
          height: 65px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 5px;
        }

        .bar {
          display: block;
          width: 15px;
          border-radius: 2px 2px 0 0;
          background: #d9c8d2;
        }

        .bar-1 {
          height: 20px;
        }

        .bar-2 {
          height: 31px;
          background: #c9b1c0;
        }

        .bar-3 {
          height: 43px;
          background: #aa899f;
        }

        .bar-4 {
          height: 34px;
          background: #93627e;
        }

        .bar-5 {
          height: 54px;
          background: #74244f;
        }

        .bar-6 {
          height: 28px;
          background: #719277;
        }


        /* ================= RESILIENCE ================= */

        .resilience-card {
          width: 100%;
          max-width: 900px;
          min-height: 450px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 15px;
          background: #ffffff;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid #eeeeee;
        }

        .resilience-content {
          padding: 43px 45px;
          background: #f8f8f9;
        }

        .resilience-icon {
          color: #71003d;
        }

        .resilience-content h2 {
          margin: 25px 0 20px;
          color: #1d1d1d;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 30px;
          line-height: 1.12;
          font-weight: 750;
          letter-spacing: -0.8px;
        }

        .resilience-content p {
          max-width: 380px;
          margin: 0;
          color: #75676d;
          font-size: 13px;
          line-height: 1.55;
        }

        .resilience-list {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .resilience-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #343034;
          font-size: 12px;
          font-weight: 500;
        }

        .resilience-item span {
          width: 15px;
          height: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8b3a68;
        }

        .resilience-item svg {
          width: 14px;
          height: 14px;
        }

        .resilience-image-wrapper {
          min-height: 450px;
          overflow: hidden;
        }

        .resilience-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .operations-page {
            padding: 22px 20px 45px;
          }

          .operations-hero {
            height: 470px;
          }

          .operations-hero-content {
            padding: 45px 48px;
          }

          .operations-hero h1 {
            font-size: clamp(38px, 6vw, 58px);
          }

          .operations-intro {
            margin: 42px auto 65px;
          }

          .operations-intro p {
            font-size: 17px;
          }

          .operations-features {
            max-width: 820px;
            grid-template-columns: minmax(0, 1fr) 245px;
          }

          .workflow-content {
            padding: 35px 32px;
          }

          .maintenance-card {
            padding: 32px 25px;
          }

          .resilience-card {
            max-width: 820px;
          }

          .resilience-content {
            padding: 38px 35px;
          }
        }


        /* ================= MOBILE ================= */

        @media (max-width: 650px) {

          .operations-page {
            padding: 15px 14px 35px;
          }

          .operations-hero {
            height: 500px;
          }

          .operations-hero-content {
            padding: 35px 25px;
            justify-content: center;
          }

          .operations-badge {
            padding: 6px 11px;
            font-size: 8px;
            letter-spacing: 0.7px;
          }

          .operations-badge-icon,
          .operations-badge-icon svg {
            width: 14px;
            height: 14px;
          }

          .operations-hero h1 {
            margin: 22px 0 25px;
            font-size: clamp(34px, 9vw, 48px);
            line-height: 1.05;
            letter-spacing: -1.5px;
          }

          .operations-hero-buttons {
            flex-wrap: wrap;
            gap: 10px;
          }

          .operations-primary-btn,
          .operations-secondary-btn {
            min-height: 43px;
            padding: 0 20px;
            font-size: 10px;
          }


          .operations-intro {
            margin: 40px auto 55px;
            padding: 0 10px;
          }

          .operations-intro h2 {
            margin-bottom: 18px;
            font-size: 25px;
          }

          .operations-intro p {
            font-size: 15px;
            line-height: 1.55;
          }


          .operations-features {
            display: flex;
            flex-direction: column;
            gap: 18px;
            margin-bottom: 25px;
          }

          .workflow-card {
            min-height: auto;
          }

          .workflow-content {
            padding: 30px 25px;
          }

          .workflow-content h3 {
            font-size: 22px;
            margin-top: 18px;
          }

          .workflow-content p {
            font-size: 13px;
          }

          .workflow-stats {
            margin-top: 25px;
            padding-top: 0;
            gap: 10px;
          }

          .stat-box {
            min-height: 90px;
            padding: 15px;
          }

          .stat-box strong {
            font-size: 24px;
          }


          .maintenance-card {
            min-height: 370px;
            padding: 30px 25px;
          }

          .maintenance-card h3 {
            font-size: 22px;
          }

          .maintenance-card p {
            font-size: 13px;
          }


          .resilience-card {
            display: flex;
            flex-direction: column;
            min-height: auto;
          }

          .resilience-content {
            padding: 32px 25px;
          }

          .resilience-content h2 {
            font-size: 27px;
            margin-top: 20px;
          }

          .resilience-content p {
            font-size: 13px;
          }

          .resilience-list {
            margin-top: 25px;
            gap: 13px;
          }

          .resilience-item {
            font-size: 11px;
          }

          .resilience-image-wrapper {
            height: 280px;
            min-height: 280px;
          }

        }


        /* ================= SMALL MOBILE ================= */

        @media (max-width: 420px) {

          .operations-page {
            padding-left: 10px;
            padding-right: 10px;
          }

          .operations-hero {
            height: 460px;
          }

          .operations-hero-content {
            padding: 30px 20px;
          }

          .operations-hero h1 {
            font-size: 31px;
            letter-spacing: -1px;
          }

          .operations-primary-btn,
          .operations-secondary-btn {
            padding: 0 15px;
            font-size: 9px;
          }

          .operations-intro h2 {
            font-size: 22px;
          }

          .operations-intro p {
            font-size: 14px;
          }

          .workflow-content,
          .maintenance-card,
          .resilience-content {
            padding-left: 20px;
            padding-right: 20px;
          }

          .workflow-stats {
            grid-template-columns: 1fr;
          }

          .stat-box {
            min-height: 80px;
          }

          .resilience-image-wrapper {
            height: 240px;
            min-height: 240px;
          }

        }

      `}</style>
    </div>
  );
}