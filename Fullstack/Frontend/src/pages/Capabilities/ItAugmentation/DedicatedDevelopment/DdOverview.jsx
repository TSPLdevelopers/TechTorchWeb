import React from "react";
import { BookOpen, Zap } from "lucide-react";

export default function CapabilityOverview() {
  return (
    <section className="capability-overview-section">
      <div className="capability-overview-container">

        {/* =================================================
            MAIN CONTAINER
        ================================================= */}

        <div className="capability-overview-wrapper">

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="capability-overview-sidebar">

            {/* Executive Briefing */}
            <div className="capability-overview-briefing">

              <div className="capability-overview-eyebrow">
                <BookOpen />

                <span>
                  EXECUTIVE BRIEFING
                </span>
              </div>

              <h3>
                The Value of Flexible Engineering Support
              </h3>

              <p>
                Access the right technical expertise and additional
                engineering capacity to support your projects, strengthen
                existing teams, and respond to changing technology
                requirements.
              </p>

            </div>

            {/* Flexible & Scalable Support */}
            <div className="capability-overview-support">

              <div className="capability-overview-support-header">

                <Zap />

                <h3>
                  Flexible & Scalable Support
                </h3>

              </div>

              <p>
                TechTorch provides flexible technology resources that can
                complement your existing teams and adapt to your project
                requirements and business priorities.
              </p>

            </div>

          </aside>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <main className="capability-overview-content">

            {/* Eyebrow */}
            <div className="capability-overview-main-eyebrow">

              <span />

              <span>
                CAPABILITY OVERVIEW
              </span>

            </div>

            {/* Heading */}
            <h1>
              Build Stronger Technology Capabilities with IT Augmentation
            </h1>

            {/* =================================================
                INTRODUCTION
            ================================================= */}

            <div className="capability-overview-body">

              <p>
                Technology projects often require specialised skills,
                additional engineering capacity, or dedicated technical
                support. Building the right team at the right time can help
                businesses keep projects moving while responding to changing
                technology and business requirements.
              </p>

              <p>
                TechTorch IT Augmentation helps organisations access skilled
                technology professionals and flexible workforce solutions
                based on their specific needs. Our approach is designed to
                complement existing teams, strengthen technical capabilities,
                and provide the expertise required to support ongoing
                projects.
              </p>

            </div>

            {/* =================================================
                PULL QUOTE
            ================================================= */}

            <blockquote className="capability-overview-quote">

              <p>
                "The goal is simple: bring the right technical expertise to
                your team when you need it."
              </p>

            </blockquote>

            {/* =================================================
                CONTINUED CONTENT
            ================================================= */}

            <div className="capability-overview-body capability-overview-body-last">

              <p>
                From software engineering and application development to
                technical support and modern technology requirements, our
                professionals can work alongside your teams to contribute to
                project delivery and business objectives.
              </p>

              <p>
                TechTorch combines expertise in modern technologies and
                development methodologies with an agile approach to project
                delivery. Our software engineering capabilities cover custom
                software development, web and mobile applications, enterprise
                solutions, API development, system integration, quality
                assurance, modernization, and ongoing maintenance and
                support.
              </p>

              <p>
                With a flexible approach to resource and staffing,
                organisations can strengthen their teams while maintaining
                focus on their core business priorities.
              </p>

            </div>

          </main>

        </div>
      </div>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`

        /* =====================================================
           SECTION
        ===================================================== */

        .capability-overview-section {
          width: 100%;

          background: #ffffff;

          font-family: "Inter", sans-serif;

          overflow: hidden;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .capability-overview-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 60px;
          padding-bottom: 60px;
        }

        /* =====================================================
           MAIN WRAPPER
        ===================================================== */

        .capability-overview-wrapper {
          width: 100%;

          display: grid;

          grid-template-columns:
            minmax(270px, 340px)
            minmax(0, 1fr);

          gap: 65px;

          padding: 30px;

          border: 1px solid #e5e5e5;

          border-radius: 16px;

          background: #ffffff;

          box-sizing: border-box;
        }

        /* =====================================================
           SIDEBAR
        ===================================================== */

        .capability-overview-sidebar {
          width: 100%;

          display: flex;
          flex-direction: column;

          gap: 18px;

          align-self: start;
        }

        /* =====================================================
           EXECUTIVE BRIEFING
        ===================================================== */

        .capability-overview-briefing {
          width: 100%;

          padding: 21px;

          border: 1px solid #e4e4e4;

          border-radius: 12px;

          background: #ffffff;

          box-sizing: border-box;
        }

        .capability-overview-eyebrow {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 13px;
        }

        .capability-overview-eyebrow svg {
          width: 14px;
          height: 14px;

          flex-shrink: 0;

          color: #730024;
        }

        .capability-overview-eyebrow span {
          font-family: "Inter", sans-serif;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.06em;

          color: #730024;
        }

        .capability-overview-briefing h3 {
          margin: 0 0 9px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 16px;

          font-weight: 600;

          line-height: 1.4;

          color: #1c1c1c;
        }

        .capability-overview-briefing p {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 11.5px;

          line-height: 1.75;

          color: #737373;
        }

        /* =====================================================
           SUPPORT CARD
        ===================================================== */

        .capability-overview-support {
          width: 100%;

          padding: 20px 21px;

          border: 1px solid rgba(115, 0, 36, 0.1);

          border-radius: 12px;

          background: rgba(115, 0, 36, 0.05);

          box-sizing: border-box;
        }

        .capability-overview-support-header {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 10px;
        }

        .capability-overview-support-header svg {
          width: 14px;
          height: 14px;

          flex-shrink: 0;

          color: #730024;
        }

        .capability-overview-support-header h3 {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 11.5px;

          font-weight: 600;

          line-height: 1.4;

          color: #730024;
        }

        .capability-overview-support p {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 11.5px;

          line-height: 1.75;

          color: #606060;
        }

        /* =====================================================
           MAIN CONTENT
        ===================================================== */

        .capability-overview-content {
          width: 100%;

          min-width: 0;

          max-width: 920px;

          align-self: start;
        }

        /* =====================================================
           MAIN EYEBROW
        ===================================================== */

        .capability-overview-main-eyebrow {
          display: flex;
          align-items: center;

          gap: 9px;

          margin-bottom: 16px;
        }

        .capability-overview-main-eyebrow > span:first-child {
          width: 21px;
          height: 1px;

          flex-shrink: 0;

          background: #730024;
        }

        .capability-overview-main-eyebrow > span:last-child {
          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 9.5px;

          font-weight: 700;

          letter-spacing: 0.06em;

          color: #730024;
        }

        /* =====================================================
           MAIN HEADING
        ===================================================== */

        .capability-overview-content h1 {
          margin: 0 0 23px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: clamp(30px, 3vw, 43px);

          font-weight: 600;

          line-height: 1.2;

          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        /* =====================================================
           BODY
        ===================================================== */

        .capability-overview-body {
          display: flex;
          flex-direction: column;

          gap: 17px;

          margin-bottom: 26px;

          font-family: "Inter", sans-serif;

          font-size: 13.5px;

          font-weight: 400;

          line-height: 1.8;

          color: #656565;
        }

        .capability-overview-body p {
          margin: 0;
        }

        .capability-overview-body-last {
          margin-bottom: 0;
        }

        /* =====================================================
           PULL QUOTE
        ===================================================== */

        .capability-overview-quote {
          margin: 0 0 26px;

          padding: 21px 23px;

          border-left: 3px solid #730024;

          background: rgba(115, 0, 36, 0.05);
        }

        .capability-overview-quote p {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 17px;

          font-weight: 600;

          line-height: 1.5;

          color: #1c1c1c;
        }

        /* =====================================================
           LARGE TABLET
           1200px
        ===================================================== */

        @media (max-width: 1200px) {

          .capability-overview-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .capability-overview-wrapper {
            gap: 45px;

            padding: 25px;
          }

          .capability-overview-content h1 {
            font-size: 36px;
          }

        }

        /* =====================================================
           TABLET
           900px
        ===================================================== */

        @media (max-width: 900px) {

          .capability-overview-container {
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .capability-overview-wrapper {
            grid-template-columns: 1fr;

            gap: 32px;
          }

          .capability-overview-sidebar {
            display: grid;

            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 16px;
          }

          .capability-overview-content {
            max-width: 100%;
          }

          .capability-overview-content h1 {
            font-size: 34px;
          }

        }

        /* =====================================================
           MOBILE
           700px
        ===================================================== */

        @media (max-width: 700px) {

          .capability-overview-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 42px;
            padding-bottom: 42px;
          }

          .capability-overview-wrapper {
            padding: 20px;

            border-radius: 13px;

            gap: 28px;
          }

          .capability-overview-sidebar {
            display: flex;
            flex-direction: column;

            gap: 14px;
          }

          .capability-overview-briefing,
          .capability-overview-support {
            padding: 18px;
          }

          .capability-overview-content h1 {
            font-size: 30px;

            line-height: 1.22;

            margin-bottom: 20px;
          }

          .capability-overview-body {
            font-size: 12.5px;

            line-height: 1.75;

            gap: 15px;

            margin-bottom: 22px;
          }

          .capability-overview-quote {
            padding: 19px 19px;

            margin-bottom: 22px;
          }

          .capability-overview-quote p {
            font-size: 16px;
          }

        }

        /* =====================================================
           SMALL MOBILE
           480px
        ===================================================== */

        @media (max-width: 480px) {

          .capability-overview-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 35px;
            padding-bottom: 35px;
          }

          .capability-overview-wrapper {
            padding: 16px;

            border-radius: 11px;

            gap: 24px;
          }

          .capability-overview-eyebrow {
            gap: 6px;

            margin-bottom: 11px;
          }

          .capability-overview-eyebrow svg {
            width: 12px;
            height: 12px;
          }

          .capability-overview-eyebrow span {
            font-size: 8px;
          }

          .capability-overview-briefing h3 {
            font-size: 14px;
          }

          .capability-overview-briefing p,
          .capability-overview-support p {
            font-size: 10.5px;

            line-height: 1.7;
          }

          .capability-overview-support-header h3 {
            font-size: 10.5px;
          }

          .capability-overview-main-eyebrow {
            gap: 7px;

            margin-bottom: 13px;
          }

          .capability-overview-main-eyebrow > span:first-child {
            width: 16px;
          }

          .capability-overview-main-eyebrow > span:last-child {
            font-size: 8px;
          }

          .capability-overview-content h1 {
            font-size: 26px;

            line-height: 1.24;

            margin-bottom: 18px;
          }

          .capability-overview-body {
            font-size: 11px;

            line-height: 1.7;

            gap: 14px;
          }

          .capability-overview-quote {
            padding: 17px 16px;

            margin-bottom: 20px;
          }

          .capability-overview-quote p {
            font-size: 14px;

            line-height: 1.5;
          }

        }

        /* =====================================================
           EXTRA SMALL
           360px
        ===================================================== */

        @media (max-width: 360px) {

          .capability-overview-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .capability-overview-wrapper {
            padding: 14px;
          }

          .capability-overview-content h1 {
            font-size: 23px;
          }

          .capability-overview-body {
            font-size: 10.5px;
          }

          .capability-overview-quote p {
            font-size: 13px;
          }

        }

      `}</style>
    </section>
  );
}