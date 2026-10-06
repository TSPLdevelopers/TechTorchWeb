import React from "react";
import { LayoutGrid, GraduationCap, ArrowRight } from "lucide-react";

export default function OurPlatformsSection() {
  return (
    <>
      <section className="our-platforms-section">
        <div className="our-platforms-container">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="our-platforms-header">
            {/* Label */}

            <div className="our-platforms-label">
              <span>Our Platforms</span>

              <span className="our-platforms-label-line" />
            </div>

            {/* Heading */}

            <h2 className="our-platforms-heading">
              Built for the Way You Work
            </h2>

            {/* Sub Heading */}

            <p className="our-platforms-description">
              Our platforms bring together the tools businesses need to
              manage their operations, people and growth from a more
              connected environment.
            </p>
          </div>

          {/* =====================================================
              PLATFORM CARDS
          ===================================================== */}

          <div className="our-platforms-grid">
            {/* ===================================================
                TORCHX SUITE
            =================================================== */}

            <div className="platform-card">
              {/* Card Header */}

              <div className="platform-card-header">
                <div className="platform-icon">
                  <LayoutGrid size={18} strokeWidth={2} />
                </div>

                <h3 className="platform-card-title">
                  TorchX{" "}
                  <span className="platform-card-title-accent">
                    Suite
                  </span>
                </h3>
              </div>

              {/* Card Heading */}

              <h4 className="platform-card-heading">
                Everything Your Business Needs, Connected.
              </h4>

              {/* Description */}

              <p className="platform-card-description">
                TorchX is a smart business platform designed for small and
                medium-sized businesses, bringing HRM, CRM and Accounts
                together in one place.
              </p>

              <p className="platform-card-description platform-card-description-last">
                Manage your people, customer relationships, and financial
                operations through a connected system — built to reduce
                complexity and support business growth.
              </p>

              {/* =================================================
                  SUITE IMAGE
              ================================================= */}

              <div className="platform-image-area platform-suite-area">
                <div className="platform-suite-image-wrap">
                  {/* Main Image */}

                  <div className="platform-main-image">
                    <img
                      src="/desktop.png"
                      alt="TorchX Suite dashboard on a laptop"
                    />
                  </div>

                  {/* Phone */}

                  <div className="platform-phone">
                    <img
                      src="/phone.png"
                      alt="TorchX Suite mobile app"
                    />
                  </div>
                </div>
              </div>

              {/* Explore */}

              <a href="#" className="platform-explore-link">
                <span>Explore TorchX Suite</span>

                <ArrowRight size={14} strokeWidth={2} />
              </a>
            </div>

            {/* ===================================================
                TORCHX ACADEMY
            =================================================== */}

            <div className="platform-card">
              {/* Card Header */}

              <div className="platform-card-header">
                <div className="platform-icon">
                  <GraduationCap size={18} strokeWidth={2} />
                </div>

                <h3 className="platform-card-title">
                  TorchX{" "}
                  <span className="platform-card-title-accent">
                    Academy
                  </span>
                </h3>
              </div>

              {/* Card Heading */}

              <h4 className="platform-card-heading">
                Learn. Develop. Move Forward.
              </h4>

              {/* Description */}

              <p className="platform-card-description platform-card-description-last">
                TorchX Academy is a dedicated platform from TechTorch
                focused on building skills, enabling learning, and
                supporting continuous growth.
              </p>

              {/* =================================================
                  ACADEMY IMAGE
              ================================================= */}

              <div className="platform-image-area platform-academy-area">
                <div className="platform-academy-image-wrap">
                  <img
                    src="/desktop2.png"
                    alt="TorchX Academy dashboard on a desktop monitor"
                  />
                </div>
              </div>

              {/* Explore */}

              <a href="#" className="platform-explore-link">
                <span>Explore TorchX Academy</span>

                <ArrowRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           OUR PLATFORMS SECTION
        ===================================================== */

        .our-platforms-section {
          width: 100%;
          overflow: hidden;

          padding-left: 100px;
          padding-right: 100px;
          padding-top: 75px;
          padding-bottom: 75px;

          background: #ffffff;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .our-platforms-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .our-platforms-header {
          width: 100%;
          max-width: 700px;

          margin-bottom: 38px;
        }

        /* =====================================================
           LABEL
        ===================================================== */

        .our-platforms-label {
          display: flex;
          align-items: center;
          gap: 11px;

          margin-bottom: 13px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.3;

          color: #730024;
        }

        .our-platforms-label-line {
          width: 34px;
          height: 1px;

          background: #730024;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .our-platforms-heading {
          margin: 0 0 12px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 34px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;

          color: #0f172a;
        }

        /* =====================================================
           HEADER DESCRIPTION
        ===================================================== */

        .our-platforms-description {
          max-width: 650px;

          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.7;

          color: #64748b;
        }

        /* =====================================================
           PLATFORM GRID
        ===================================================== */

        .our-platforms-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 28px;

          width: 100%;
        }

        /* =====================================================
           PLATFORM CARD
        ===================================================== */

        .platform-card {
          display: flex;
          flex-direction: column;

          width: 100%;
          min-height: 520px;

          padding: 28px;

          border: 1px solid #f1e9ee;
          border-radius: 20px;

          background: #fbf6f9;

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .platform-card:hover {
          transform: translateY(-4px);

          border-color: rgba(115, 0, 36, 0.12);

          box-shadow:
            0 18px 45px rgba(80, 15, 45, 0.08);
        }

        /* =====================================================
           CARD HEADER
        ===================================================== */

        .platform-card-header {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-bottom: 19px;
        }

        /* =====================================================
           ICON
        ===================================================== */

        .platform-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;
          flex-shrink: 0;

          border-radius: 50%;

          background: #7a0e4a;
          color: #ffffff;
        }

        /* =====================================================
           CARD TITLE
        ===================================================== */

        .platform-card-title {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.3;

          color: #0f172a;
        }

        .platform-card-title-accent {
          color: #730024;
        }

        /* =====================================================
           CARD HEADING
        ===================================================== */

        .platform-card-heading {
          margin: 0 0 11px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.4;

          color: #0f172a;
        }

        /* =====================================================
           CARD DESCRIPTION
        ===================================================== */

        .platform-card-description {
          margin: 0 0 12px 0;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.65;

          color: #64748b;
        }

        .platform-card-description-last {
          margin-bottom: 0;
        }

        /* =====================================================
           IMAGE AREA
        ===================================================== */

        .platform-image-area {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 100%;

          margin-top: auto;
          margin-bottom: 24px;
          padding-top: 26px;
        }

        /* =====================================================
           TORCHX SUITE IMAGE
        ===================================================== */

        .platform-suite-area {
          min-height: 195px;
        }

        .platform-suite-image-wrap {
          position: relative;

          width: 76%;
          max-width: 440px;
        }

        .platform-main-image {
          width: 100%;
          overflow: hidden;

          border-radius: 9px;

          background: #ffffff;

          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .platform-main-image img {
          display: block;

          width: 100%;
          height: 175px;

          object-fit: cover;
          object-position: center;
        }

        /* =====================================================
           PHONE
        ===================================================== */

        .platform-phone {
          position: absolute;

          z-index: 3;

          right: -25px;
          bottom: -12px;

          width: 62px;
          overflow: hidden;

          border: 2px solid #ffffff;
          border-radius: 9px;

          background: #ffffff;

          box-shadow:
            0 12px 25px rgba(0, 0, 0, 0.2);
        }

        .platform-phone img {
          display: block;

          width: 100%;
          height: auto;
        }

        /* =====================================================
           ACADEMY IMAGE
        ===================================================== */

        .platform-academy-area {
          min-height: 195px;
        }

        .platform-academy-image-wrap {
          width: 76%;
          max-width: 440px;

          overflow: hidden;

          border-radius: 9px;

          background: #ffffff;

          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .platform-academy-image-wrap img {
          display: block;

          width: 100%;
          height: 175px;

          object-fit: cover;
          object-position: center;
        }

        /* =====================================================
           EXPLORE LINK
        ===================================================== */

        .platform-explore-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          width: fit-content;

          margin-top: auto;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;

          text-decoration: none;

          color: #730024;

          transition:
            gap 0.3s ease,
            opacity 0.3s ease;
        }

        .platform-explore-link:hover {
          gap: 10px;
          opacity: 0.82;
        }

        /* =====================================================
           TABLET — 1200px
           Universal spacing: 40px
        ===================================================== */

        @media (max-width: 1200px) {
          .our-platforms-section {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 65px;
            padding-bottom: 65px;
          }

          .our-platforms-grid {
            gap: 22px;
          }

          .platform-card {
            padding: 24px;
          }

          .platform-suite-image-wrap,
          .platform-academy-image-wrap {
            width: 80%;
          }

          .platform-main-image img,
          .platform-academy-image-wrap img {
            height: 160px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .our-platforms-section {
            padding-top: 58px;
            padding-bottom: 58px;
          }

          .our-platforms-header {
            margin-bottom: 32px;
          }

          .our-platforms-heading {
            font-size: 31px;
          }

          .our-platforms-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .platform-card {
            min-height: 500px;
            padding: 22px;
          }

          .platform-suite-image-wrap,
          .platform-academy-image-wrap {
            width: 88%;
          }

          .platform-main-image img,
          .platform-academy-image-wrap img {
            height: 145px;
          }

          .platform-phone {
            right: -18px;
            width: 55px;
          }
        }

        /* =====================================================
           MOBILE — 700px
           Universal spacing: 24px
        ===================================================== */

        @media (max-width: 700px) {
          .our-platforms-section {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .our-platforms-header {
            margin-bottom: 28px;
          }

          .our-platforms-label {
            margin-bottom: 11px;
            font-size: 11px;
          }

          .our-platforms-heading {
            margin-bottom: 10px;
            font-size: 28px;
          }

          .our-platforms-description {
            font-size: 13px;
            line-height: 1.65;
          }

          .our-platforms-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .platform-card {
            min-height: auto;
            padding: 22px;

            border-radius: 17px;
          }

          .platform-card-header {
            margin-bottom: 16px;
          }

          .platform-icon {
            width: 40px;
            height: 40px;
          }

          .platform-card-title {
            font-size: 18px;
          }

          .platform-card-heading {
            font-size: 16px;
          }

          .platform-card-description {
            font-size: 12.5px;
            line-height: 1.65;
          }

          .platform-image-area {
            padding-top: 24px;
            margin-bottom: 22px;
          }

          .platform-suite-area,
          .platform-academy-area {
            min-height: 170px;
          }

          .platform-suite-image-wrap,
          .platform-academy-image-wrap {
            width: 78%;
          }

          .platform-main-image img,
          .platform-academy-image-wrap img {
            height: 145px;
          }

          .platform-phone {
            right: -17px;
            bottom: -9px;
            width: 53px;
          }

          .platform-explore-link {
            font-size: 11.5px;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
           Universal spacing: 16px
        ===================================================== */

        @media (max-width: 480px) {
          .our-platforms-section {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 44px;
            padding-bottom: 44px;
          }

          .our-platforms-header {
            margin-bottom: 24px;
          }

          .our-platforms-label {
            gap: 9px;
            margin-bottom: 10px;

            font-size: 9.5px;
          }

          .our-platforms-label-line {
            width: 28px;
          }

          .our-platforms-heading {
            margin-bottom: 9px;
            font-size: 25px;
          }

          .our-platforms-description {
            font-size: 12px;
            line-height: 1.65;
          }

          .our-platforms-grid {
            gap: 15px;
          }

          .platform-card {
            padding: 18px;

            border-radius: 15px;
          }

          .platform-card-header {
            gap: 10px;
            margin-bottom: 14px;
          }

          .platform-icon {
            width: 36px;
            height: 36px;
          }

          .platform-icon svg {
            width: 16px;
            height: 16px;
          }

          .platform-card-title {
            font-size: 16px;
          }

          .platform-card-heading {
            margin-bottom: 9px;
            font-size: 14px;
          }

          .platform-card-description {
            margin-bottom: 10px;

            font-size: 11.5px;
            line-height: 1.65;
          }

          .platform-image-area {
            padding-top: 20px;
            margin-bottom: 19px;
          }

          .platform-suite-area,
          .platform-academy-area {
            min-height: 145px;
          }

          .platform-suite-image-wrap,
          .platform-academy-image-wrap {
            width: 82%;
          }

          .platform-main-image img,
          .platform-academy-image-wrap img {
            height: 120px;
          }

          .platform-phone {
            right: -14px;
            bottom: -8px;
            width: 45px;

            border-radius: 7px;
          }

          .platform-explore-link {
            gap: 5px;
            font-size: 10.5px;
          }

          .platform-explore-link:hover {
            gap: 8px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .our-platforms-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .our-platforms-heading {
            font-size: 23px;
          }

          .our-platforms-description {
            font-size: 11.5px;
          }

          .platform-card {
            padding: 16px;
          }

          .platform-card-title {
            font-size: 15px;
          }

          .platform-card-heading {
            font-size: 13.5px;
          }

          .platform-card-description {
            font-size: 11px;
          }

          .platform-suite-image-wrap,
          .platform-academy-image-wrap {
            width: 85%;
          }

          .platform-main-image img,
          .platform-academy-image-wrap img {
            height: 110px;
          }

          .platform-phone {
            right: -11px;
            width: 40px;
          }
        }
      `}</style>
    </>
  );
}