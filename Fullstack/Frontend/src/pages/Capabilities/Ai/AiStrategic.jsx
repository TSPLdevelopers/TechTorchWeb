import React from "react";
import { Radio, MapPin } from "lucide-react";

export default function StrategicPerspective() {
  return (
    <>
      <section className="strategic-perspective">
        <div className="strategic-container">

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="strategic-header">
            {/* Eyebrow */}

            <div className="strategic-eyebrow">
              <span className="strategic-eyebrow-line" />

              <span className="strategic-eyebrow-text">
                In-Depth Strategic Perspective
              </span>
            </div>

            {/* Main Heading */}

            <h1 className="strategic-title">
              Harness the Power of Artificial Intelligence Without the
              Complexity
            </h1>
          </div>

          {/* =====================================================
              TWO COLUMN LAYOUT
          ====================================================== */}

          <div className="strategic-layout">

            {/* =================================================
                LEFT COLUMN - ARTICLE
            ================================================== */}

            <div className="strategic-article">

              <p>
                Artificial Intelligence is becoming an important part of the
                modern technology landscape, creating new opportunities for
                businesses to improve the way they work and use technology.
              </p>

              <p>
                At TechTorch Solutions, our Artificial Intelligence as a
                Service offering is designed to help businesses access the
                power of AI without having to take on the complexity of
                building and maintaining their own infrastructure.
              </p>

              <p>
                Instead of requiring businesses to develop and manage an AI
                infrastructure independently, our service provides a more
                accessible way to bring Artificial Intelligence capabilities
                into their technology environment.
              </p>

              <p>
                This approach allows organizations to focus on their business
                and technology requirements while reducing the infrastructure
                complexity associated with adopting AI.
              </p>

              {/* ================= PULL QUOTE ================= */}

              <blockquote className="strategic-quote">
                "At TechTorch, we believe technology should help businesses
                move forward rather than create additional complexity. Our
                Artificial Intelligence service is therefore positioned as
                part of our broader technology offering, alongside IT
                Consultancy, Cloud Infrastructure, Cyber Security, Software
                Engineering, Business Process Outsourcing, Software
                Development & Support, and Resource & Staffing."
              </blockquote>

              <p>
                By bringing these capabilities together, TechTorch provides
                businesses with access to a wider technology ecosystem through
                one technology partner.
              </p>

              <p>
                Artificial Intelligence can be an important part of a
                business's technology journey, particularly as organizations
                look for modern ways to strengthen their technology
                capabilities. Our AI as a Service approach provides businesses
                with a practical way to explore and use AI while avoiding the
                need to build and maintain the complete infrastructure
                themselves.
              </p>

              <p>
                The focus is simple: make the power of Artificial Intelligence
                more accessible while keeping the technology environment
                practical and manageable.
              </p>

              <p>
                Whether an organization is beginning its journey with
                Artificial Intelligence or looking for a way to introduce AI
                capabilities without taking on the full infrastructure
                responsibility, TechTorch provides an AI service designed
                around this need.
              </p>

              <p>
                With Artificial Intelligence as part of our wider technology
                services, businesses can approach their technology
                requirements through a connected ecosystem that includes
                consulting, infrastructure, security, engineering, software
                development, operational support and staffing.
              </p>

              {/* ================= CALLOUT ================= */}

              <div className="strategic-callout">
                Our objective is to help businesses make use of modern
                Artificial Intelligence capabilities while keeping the
                technology journey focused, practical and aligned with their
                requirements.
              </div>
            </div>

            {/* =================================================
                RIGHT COLUMN
            ================================================== */}

            <div className="strategic-sidebar">

              {/* =================================================
                  IMAGE CARD
              ================================================== */}

              <div className="strategic-image-card">

                <img
                  src="/OpManagement.png"
                  alt="Business team working together"
                  className="strategic-image"
                />

                {/* Dark gradient */}

                <div className="strategic-image-gradient" />

                {/* Content over image */}

                <div className="strategic-image-content">

                  <span className="strategic-image-label">
                    TECHTORCH LABS
                  </span>

                  <h3 className="strategic-image-title">
                    Operational Neural Clusters
                  </h3>

                  <p className="strategic-image-description">
                    Continuous AI model serving with automated workload
                    tiering.
                  </p>
                </div>
              </div>

              {/* =================================================
                  STATUS CARD
              ================================================== */}

              <div className="strategic-status-card">

                {/* Left */}

                <div className="strategic-status-left">

                  <div className="strategic-status-icon">
                    <MapPin />
                  </div>

                  <div>
                    <div className="strategic-status-label">
                      DEPLOYMENT VELOCITY
                    </div>

                    <div className="strategic-status-title">
                      Immediate Access Model
                    </div>
                  </div>
                </div>

                {/* Status */}

                <span className="strategic-active-status">
                  <Radio />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>{`
        /* =====================================================
           BASE
        ====================================================== */

        .strategic-perspective {
          width: 100%;
          background: #ffffff;
          overflow: hidden;
        }

        .strategic-perspective,
        .strategic-perspective * {
          box-sizing: border-box;
        }

        /* =====================================================
           MAIN CONTAINER

           Desktop  : 100px
           Tablet   : 40px
           Mobile   : 24px
           Small    : 16px
        ====================================================== */

        .strategic-container {
          width: 100%;
          padding-left: 100px;
          padding-right: 100px;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* =====================================================
           HEADER
        ====================================================== */

        .strategic-header {
          width: 100%;
          max-width: 850px;
          margin-bottom: 52px;
        }

        /* =====================================================
           EYEBROW
        ====================================================== */

        .strategic-eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 16px;
        }

        .strategic-eyebrow-line {
          width: 32px;
          height: 1px;
          flex-shrink: 0;
          background: #730024;
        }

        .strategic-eyebrow-text {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.08em;
          color: #730024;
        }

        /* =====================================================
           TITLE
        ====================================================== */

        .strategic-title {
          margin: 0;
          max-width: 850px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        /* =====================================================
           TWO COLUMN LAYOUT
        ====================================================== */

        .strategic-layout {
          width: 100%;

          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(320px, 1fr);

          align-items: start;
          gap: 56px;
        }

        /* =====================================================
           ARTICLE
        ====================================================== */

        .strategic-article {
          width: 100%;

          display: flex;
          flex-direction: column;
          gap: 17px;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.75;

          color: #666666;
        }

        .strategic-article p {
          margin: 0;
        }

        /* =====================================================
           PULL QUOTE
        ====================================================== */

        .strategic-quote {
          margin: 3px 0;

          padding: 15px 18px;

          border-left: 3px solid #730024;

          background: #fdf2f7;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.75;

          color: #4f4f4f;
        }

        /* =====================================================
           CALLOUT
        ====================================================== */

        .strategic-callout {
          width: 100%;

          margin-top: 3px;
          padding: 16px 20px;

          border-radius: 9px;

          background: #fdf2f7;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.65;

          color: #730024;
        }

        /* =====================================================
           SIDEBAR
        ====================================================== */

        .strategic-sidebar {
          width: 100%;

          position: sticky;
          top: 32px;
        }

        /* =====================================================
           IMAGE CARD
        ====================================================== */

        .strategic-image-card {
          position: relative;

          width: 100%;
          min-height: 450px;

          overflow: hidden;

          border: 1px solid #e5e5e5;
          border-radius: 16px;

          background: #171717;

          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.04);
        }

        .strategic-image {
          display: block;

          width: 100%;
          height: 450px;

          object-fit: cover;
          object-position: center;
        }

        .strategic-image-gradient {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.88) 0%,
              rgba(0, 0, 0, 0.38) 45%,
              rgba(0, 0, 0, 0.05) 100%
            );
        }

        /* =====================================================
           IMAGE CONTENT
        ====================================================== */

        .strategic-image-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;

          padding: 24px;
        }

        .strategic-image-label {
          display: inline-flex;

          margin-bottom: 9px;
          padding: 5px 9px;

          border-radius: 5px;

          background: #730024;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.08em;

          color: #ffffff;
        }

        .strategic-image-title {
          margin: 0 0 5px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.3;

          color: #ffffff;
        }

        .strategic-image-description {
          width: 100%;
          max-width: 330px;

          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.5;

          color: rgba(255, 255, 255, 0.75);
        }

        /* =====================================================
           STATUS CARD
        ====================================================== */

        .strategic-status-card {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;

          margin-top: 16px;
          padding: 18px;

          border: 1px solid #e5e5e5;
          border-radius: 16px;

          background: #ffffff;

          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.035);
        }

        .strategic-status-left {
          min-width: 0;

          display: flex;
          align-items: center;
          gap: 12px;
        }

        .strategic-status-icon {
          width: 44px;
          height: 44px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #f4d5e1;
          border-radius: 11px;

          background: #fff7fa;
        }

        .strategic-status-icon svg {
          width: 18px;
          height: 18px;
          stroke-width: 1.8;
          color: #730024;
        }

        .strategic-status-label {
          margin-bottom: 3px;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.08em;

          color: #a3a3a3;
        }

        .strategic-status-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;

          color: #1c1c1c;
        }

        /* =====================================================
           ACTIVE STATUS
        ====================================================== */

        .strategic-active-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          flex-shrink: 0;

          padding: 7px 11px;

          border-radius: 999px;

          background: #ecfdf5;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;

          color: #059669;
        }

        .strategic-active-status svg {
          width: 12px;
          height: 12px;
          stroke-width: 2;
        }

        /* =====================================================
           LARGE TABLET
           Horizontal spacing: 40px
        ====================================================== */

        @media (max-width: 1200px) {
          .strategic-container {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .strategic-header {
            margin-bottom: 46px;
          }

          .strategic-title {
            font-size: 36px;
          }

          .strategic-layout {
            grid-template-columns: minmax(0, 1.5fr) minmax(290px, 1fr);
            gap: 42px;
          }

          .strategic-article {
            font-size: 13.5px;
          }

          .strategic-image-card,
          .strategic-image {
            height: 420px;
            min-height: 420px;
          }

          .strategic-image-content {
            padding: 22px;
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {
          .strategic-container {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .strategic-header {
            max-width: 760px;
            margin-bottom: 38px;
          }

          .strategic-title {
            font-size: 32px;
          }

          .strategic-layout {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .strategic-article {
            font-size: 13px;
            line-height: 1.72;
            gap: 16px;
          }

          .strategic-quote {
            font-size: 13px;
            padding: 14px 17px;
          }

          .strategic-callout {
            font-size: 12px;
          }

          .strategic-sidebar {
            position: relative;
            top: auto;
          }

          .strategic-image-card,
          .strategic-image {
            height: 420px;
            min-height: 420px;
          }

          .strategic-image-content {
            padding: 22px;
          }
        }

        /* =====================================================
           MOBILE
           Horizontal spacing: 24px
        ====================================================== */

        @media (max-width: 700px) {
          .strategic-container {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .strategic-header {
            margin-bottom: 30px;
          }

          .strategic-eyebrow {
            gap: 8px;
            margin-bottom: 13px;
          }

          .strategic-eyebrow-line {
            width: 26px;
          }

          .strategic-eyebrow-text {
            font-size: 9px;
          }

          .strategic-title {
            font-size: 27px;
            line-height: 1.2;
          }

          .strategic-layout {
            gap: 30px;
          }

          .strategic-article {
            gap: 14px;
            font-size: 12px;
            line-height: 1.72;
          }

          .strategic-quote {
            margin: 2px 0;

            padding: 13px 14px;

            font-size: 12px;
            line-height: 1.7;
          }

          .strategic-callout {
            padding: 14px 16px;
            font-size: 11.5px;
            line-height: 1.65;
          }

          .strategic-sidebar {
            width: 100%;
          }

          .strategic-image-card {
            min-height: 360px;
            border-radius: 14px;
          }

          .strategic-image {
            height: 360px;
            min-height: 360px;
          }

          .strategic-image-content {
            padding: 18px;
          }

          .strategic-image-label {
            margin-bottom: 7px;
            padding: 4px 8px;
            font-size: 8px;
          }

          .strategic-image-title {
            font-size: 17px;
          }

          .strategic-image-description {
            font-size: 11px;
          }

          .strategic-status-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 13px;

            margin-top: 12px;
            padding: 15px;
            border-radius: 14px;
          }

          .strategic-status-left {
            width: 100%;
          }

          .strategic-status-icon {
            width: 40px;
            height: 40px;
          }

          .strategic-status-icon svg {
            width: 16px;
            height: 16px;
          }

          .strategic-status-label {
            font-size: 8px;
          }

          .strategic-status-title {
            font-size: 13px;
          }

          .strategic-active-status {
            font-size: 9px;
            padding: 6px 10px;
          }
        }

        /* =====================================================
           SMALL MOBILE
           Horizontal spacing: 16px
        ====================================================== */

        @media (max-width: 480px) {
          .strategic-container {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 42px;
            padding-bottom: 42px;
          }

          .strategic-header {
            margin-bottom: 26px;
          }

          .strategic-eyebrow {
            margin-bottom: 11px;
          }

          .strategic-eyebrow-line {
            width: 23px;
          }

          .strategic-eyebrow-text {
            font-size: 8.5px;
          }

          .strategic-title {
            font-size: 24px;
            line-height: 1.22;
          }

          .strategic-layout {
            gap: 26px;
          }

          .strategic-article {
            gap: 13px;
            font-size: 11.5px;
            line-height: 1.72;
          }

          .strategic-quote {
            padding: 12px 13px;
            font-size: 11.5px;
          }

          .strategic-callout {
            padding: 13px 14px;
            font-size: 11px;
          }

          .strategic-image-card {
            min-height: 320px;
            border-radius: 12px;
          }

          .strategic-image {
            height: 320px;
            min-height: 320px;
          }

          .strategic-image-content {
            padding: 15px;
          }

          .strategic-image-title {
            font-size: 16px;
          }

          .strategic-image-description {
            font-size: 10.5px;
          }

          .strategic-status-card {
            padding: 13px;
          }

          .strategic-status-title {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}