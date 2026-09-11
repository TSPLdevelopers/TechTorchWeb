import React from "react";

import initiativeImage from "/Initiative.png";

export default function Initiative() {
  return (
    <section className="initiative-section">
      <div className="initiative-container">

        {/* TOP BAR */}
        <div className="initiative-topbar">
          <div className="initiative-label">
            <span className="initiative-label-dot"></span>
            TECHTORCH ENTERPRISE SECURITY INITIATIVE · ADVISORY & CONSULTING
          </div>

          <div className="initiative-badges">
            <div className="initiative-small-badge">
              <span className="badge-icon">◉</span>
              Zero-Data Retention During Discovery
            </div>

            <div className="initiative-small-badge">
              <span className="badge-icon">◆</span>
              Bilateral MNDA Safeguarded
            </div>
          </div>
        </div>

        <div className="initiative-divider"></div>

        {/* MAIN CONTENT */}
        <div className="initiative-main">

          {/* LEFT CONTENT */}
          <div className="initiative-content">

            <h1>
              Initiate Your Enterprise
              <br />
              <span>Security Posture Assessment</span>
            </h1>

            <p className="initiative-description">
              Connect with TechTorch principal security architects and cybersecurity advisory
              <br className="desktop-break" />
              directors to thoroughly evaluate your digital estate, harden cloud and application
              <br className="desktop-break" />
              perimeters, and engineer resilient operational foundations.
            </p>

            {/* FEATURE CARDS */}
            <div className="initiative-features">

              <div className="initiative-feature-card">
                <div className="feature-icon">◉</div>

                <div>
                  <h3>48-Hour SLA</h3>
                  <p>
                    Rapid
                    <br />
                    Assessment
                    <br />
                    Dispatch
                  </p>
                </div>
              </div>

              <div className="initiative-feature-card">
                <div className="feature-icon">◉</div>

                <div>
                  <h3>ISO & SOC2 Type II</h3>
                  <p>
                    Zero-Trust
                    <br />
                    Frameworks
                  </p>
                </div>
              </div>

              <div className="initiative-feature-card">
                <div className="feature-icon">♙</div>

                <div>
                  <h3>Tier-IV NDA</h3>
                  <p>
                    Institutional
                    <br />
                    Privilege
                  </p>
                </div>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="initiative-buttons">

              <button className="initiative-primary">
                SCHEDULE ADVISORY BRIEFING
                <span>→</span>
              </button>

              <button className="initiative-secondary">
                View Engagement Protocol
                <span>⌄</span>
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="initiative-image-wrapper">
            <img
              src={initiativeImage}
              alt="Enterprise Security Assessment"
              className="initiative-image"
            />

            <div className="initiative-image-overlay">
              <div className="overlay-top">
                <span>ACTIVE INTELLIGENCE SESSION</span>

                <strong>
                  LIVE TELEMETRY
                </strong>
              </div>

              <p>
                Autonomous threat vectors catalogued across 1,420+
                <br />
                global nodes
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* NEXT SECTION PREVIEW */}
      <div className="initiative-next-section">
        <div className="initiative-next-inner">
          <span>PROTOCOL & DELIVERY</span>

          <h2>
            The Strategic Engagement Pathway
          </h2>

          <p>
            Structured for minimal engineering disruption while providing
          </p>
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .initiative-section {
          width: 100%;
          background: #ffffff;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .initiative-container {
          width: 100%;
          max-width: 1460px;
          margin: 0 auto;
          padding: 32px 44px 68px;
        }

        /* TOP BAR */

        .initiative-topbar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .initiative-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 34px;
          padding: 0 17px;
          border: 1px solid #e9c8d9;
          border-radius: 20px;
          background: #fffafd;
          color: #64113e;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.9px;
          white-space: nowrap;
        }

        .initiative-label-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #850044;
          flex-shrink: 0;
        }

        .initiative-badges {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .initiative-small-badge {
          min-height: 31px;
          padding: 0 13px;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #e2e8ee;
          border-radius: 8px;
          background: #f7f9fb;
          color: #3d4654;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .badge-icon {
          color: #52715c;
          font-size: 13px;
        }

        .initiative-divider {
          width: 100%;
          height: 1px;
          margin-top: 35px;
          background: #eee4e9;
        }

        /* MAIN */

        .initiative-main {
          display: grid;
          grid-template-columns: minmax(0, 1.42fr) minmax(420px, 0.98fr);
          gap: 35px;
          align-items: center;
          padding-top: 32px;
        }

        .initiative-content {
          min-width: 0;
        }

        .initiative-content h1 {
          margin: 0;
          color: #171e2d;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 47px;
          line-height: 1.18;
          letter-spacing: -2px;
          font-weight: 500;
        }

        .initiative-content h1 span {
          color: #680035;
          font-weight: 600;
        }

        .initiative-description {
          margin: 28px 0 0;
          color: #657389;
          font-size: 17px;
          line-height: 1.95;
          font-weight: 400;
        }

        /* FEATURE CARDS */

        .initiative-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 13px;
          margin-top: 31px;
        }

        .initiative-feature-card {
          min-height: 112px;
          padding: 19px 14px;
          display: flex;
          align-items: center;
          gap: 14px;
          border: 1px solid #dfe6ed;
          border-radius: 9px;
          background: #f7f9fb;
        }

        .feature-icon {
          width: 28px;
          flex: 0 0 28px;
          color: #680035;
          font-size: 22px;
          text-align: center;
        }

        .initiative-feature-card h3 {
          margin: 0 0 4px;
          color: #293243;
          font-size: 15px;
          line-height: 1.25;
          font-weight: 750;
        }

        .initiative-feature-card p {
          margin: 0;
          color: #718097;
          font-size: 13px;
          line-height: 1.35;
          font-weight: 400;
        }

        /* BUTTONS */

        .initiative-buttons {
          display: flex;
          align-items: center;
          gap: 17px;
          margin-top: 34px;
        }

        .initiative-primary,
        .initiative-secondary {
          height: 51px;
          padding: 0 25px;
          border-radius: 8px;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.2px;
          cursor: pointer;
          white-space: nowrap;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .initiative-primary {
          border: 1px solid #79003f;
          background: #79003f;
          color: #ffffff;
          box-shadow: 0 5px 12px rgba(121, 0, 63, 0.16);
        }

        .initiative-primary span {
          margin-left: 8px;
          font-size: 18px;
        }

        .initiative-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 17px rgba(121, 0, 63, 0.22);
        }

        .initiative-secondary {
          border: 1px solid #e0e5ea;
          background: #f5f6f7;
          color: #29313d;
        }

        .initiative-secondary span {
          margin-left: 8px;
          font-size: 16px;
        }

        .initiative-secondary:hover {
          transform: translateY(-2px);
          background: #eef0f2;
        }

        /* IMAGE */

        .initiative-image-wrapper {
          position: relative;
          width: 100%;
          height: 470px;
          border-radius: 15px;
          overflow: hidden;
          background: #151b29;
          box-shadow: 0 12px 28px rgba(25, 32, 46, 0.14);
        }

        .initiative-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .initiative-image-overlay {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          padding: 17px 18px;
          border-radius: 9px;
          background: rgba(47, 28, 42, 0.92);
          color: #ffffff;
        }

        .overlay-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .overlay-top span {
          color: #e99bbd;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.6px;
        }

        .overlay-top strong {
          padding: 4px 10px;
          border-radius: 3px;
          background: #063d0e;
          color: #83e28e;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .initiative-image-overlay p {
          margin: 8px 0 0;
          color: #f4eef2;
          font-size: 14px;
          line-height: 1.35;
          font-weight: 500;
        }

        /* NEXT SECTION */

        .initiative-next-section {
          width: 100%;
          min-height: 260px;
          background: linear-gradient(
            110deg,
            #72003d 0%,
            #870047 50%,
            #6e003b 100%
          );
          color: #ffffff;
        }

        .initiative-next-inner {
          max-width: 1460px;
          margin: 0 auto;
          padding: 65px 44px;
        }

        .initiative-next-inner > span {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .initiative-next-inner h2 {
          margin: 20px 0 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 36px;
          line-height: 1.2;
        }

        .initiative-next-inner p {
          margin: -35px 0 0;
          text-align: right;
          font-size: 16px;
        }

        /* LARGE DESKTOP */

        @media (min-width: 1600px) {
          .initiative-container {
            max-width: 1520px;
            padding-left: 50px;
            padding-right: 50px;
          }

          .initiative-main {
            grid-template-columns: minmax(0, 1.45fr) minmax(470px, 0.95fr);
            gap: 45px;
          }

          .initiative-content h1 {
            font-size: 50px;
          }

          .initiative-image-wrapper {
            height: 485px;
          }
        }

        /* LAPTOP */

        @media (max-width: 1200px) {
          .initiative-container {
            padding: 28px 35px 55px;
          }

          .initiative-main {
            grid-template-columns: minmax(0, 1.3fr) minmax(360px, 0.9fr);
            gap: 28px;
          }

          .initiative-content h1 {
            font-size: 39px;
            letter-spacing: -1.5px;
          }

          .initiative-description {
            font-size: 15px;
            line-height: 1.75;
          }

          .initiative-feature-card {
            padding: 16px 10px;
            gap: 10px;
          }

          .initiative-feature-card h3 {
            font-size: 13px;
          }

          .initiative-feature-card p {
            font-size: 11px;
          }

          .initiative-image-wrapper {
            height: 420px;
          }

          .initiative-primary,
          .initiative-secondary {
            padding: 0 19px;
            font-size: 12px;
          }
        }

        /* TABLET */

        @media (max-width: 900px) {
          .initiative-topbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .initiative-badges {
            width: 100%;
            flex-wrap: wrap;
          }

          .initiative-main {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .initiative-content h1 {
            font-size: 38px;
          }

          .initiative-image-wrapper {
            height: 420px;
            max-width: 700px;
          }

          .initiative-next-inner p {
            margin: 20px 0 0;
            text-align: left;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .initiative-container {
            padding: 22px 18px 40px;
          }

          .initiative-label {
            width: 100%;
            padding: 0 11px;
            font-size: 8px;
            letter-spacing: 0.5px;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .initiative-label-dot {
            width: 6px;
            height: 6px;
          }

          .initiative-badges {
            gap: 8px;
          }

          .initiative-small-badge {
            min-height: 29px;
            padding: 0 9px;
            font-size: 9px;
          }

          .initiative-divider {
            margin-top: 25px;
          }

          .initiative-main {
            padding-top: 25px;
            gap: 28px;
          }

          .initiative-content h1 {
            font-size: 29px;
            line-height: 1.18;
            letter-spacing: -1px;
          }

          .initiative-description {
            margin-top: 20px;
            font-size: 12px;
            line-height: 1.65;
          }

          .desktop-break {
            display: none;
          }

          .initiative-features {
            grid-template-columns: 1fr;
            gap: 9px;
            margin-top: 22px;
          }

          .initiative-feature-card {
            min-height: 82px;
            padding: 13px 14px;
          }

          .initiative-feature-card h3 {
            font-size: 13px;
          }

          .initiative-feature-card p {
            font-size: 11px;
          }

          .feature-icon {
            width: 25px;
            flex-basis: 25px;
            font-size: 19px;
          }

          .initiative-buttons {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 9px;
            margin-top: 23px;
          }

          .initiative-primary,
          .initiative-secondary {
            width: 100%;
            height: 45px;
            padding: 0 12px;
            font-size: 11px;
          }

          .initiative-image-wrapper {
            height: 300px;
            border-radius: 13px;
          }

          .initiative-image-overlay {
            left: 10px;
            right: 10px;
            bottom: 10px;
            padding: 12px;
          }

          .overlay-top span {
            font-size: 9px;
          }

          .overlay-top strong {
            padding: 3px 6px;
            font-size: 7px;
            letter-spacing: 1px;
          }

          .initiative-image-overlay p {
            font-size: 10px;
          }

          .initiative-next-section {
            min-height: 220px;
          }

          .initiative-next-inner {
            padding: 40px 20px;
          }

          .initiative-next-inner h2 {
            font-size: 27px;
          }

          .initiative-next-inner p {
            font-size: 12px;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 380px) {
          .initiative-container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .initiative-content h1 {
            font-size: 25px;
          }

          .initiative-description {
            font-size: 11px;
          }

          .initiative-feature-card {
            min-height: 76px;
          }

          .initiative-feature-card h3 {
            font-size: 12px;
          }

          .initiative-feature-card p {
            font-size: 10px;
          }

          .initiative-image-wrapper {
            height: 260px;
          }

          .initiative-next-inner h2 {
            font-size: 23px;
          }
        }
      `}</style>
    </section>
  );
}