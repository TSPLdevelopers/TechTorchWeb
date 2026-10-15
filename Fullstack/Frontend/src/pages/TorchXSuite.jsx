import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =====================================================================
   1) TORCHX SUITE SECTION
   (MAROON below is also used by section 2 — both files declared the
   identical value "#7a1338", so it is declared once here.)
===================================================================== */

const backgroundImage = "/hero5slide1.png";

const MAROON = "#7a1338";

export function TorchXSuiteSection() {
  return (
    <section className="torchx-suite-section">
      {/* ================= BACKGROUND OVERLAY ================= */}

      <div className="torchx-overlay" />

      {/* ================= CONTENT ================= */}

      <div className="torchx-content">
        {/* HEADING */}

        <h1>
          Everything Your Business Needs,
          <br />
          <span>Working Together</span>
        </h1>

        {/* FIRST PARAGRAPH */}

        <p className="torchx-paragraph paragraph-one">
          TorchX Suite brings your essential business functions together in
          one connected platform, helping teams manage people, customers,
          finance, payroll and inventory with greater clarity and control.
        </p>

        {/* SECOND PARAGRAPH */}

        <p className="torchx-paragraph paragraph-two">
          From everyday operations to business-wide decision-making, TorchX
          Suite gives your organization a more connected way to work,
          collaborate and grow.
        </p>

        {/* BUTTON */}

        <a href="https://torchxsuite.com/" className="torchx-button">
          Explore TorchX Suite →
        </a>
      </div>

      <style>{`
        /* ================= SECTION ================= */

        .torchx-suite-section {
          position: relative;
          width: 100%;
          min-height: 650px;

          background-image: url(${backgroundImage});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          font-family: "Plus Jakarta Sans", "Segoe UI", Arial, sans-serif;

          display: flex;
          align-items: center;

          overflow: hidden;
          box-sizing: border-box;
        }

        /* ================= OVERLAY ================= */

        .torchx-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(255,255,255,0.94) 0%,
              rgba(255,255,255,0.80) 28%,
              rgba(255,255,255,0.30) 52%,
              rgba(255,255,255,0) 72%
            );

          pointer-events: none;
        }

        /* ================= CONTENT ================= */

        .torchx-content {
          position: relative;
          z-index: 1;

          width: 100%;
          max-width: 620px;

          /* Vertical padding */
          padding-top: 60px;
          padding-bottom: 60px;

          /* Left/right padding same as Hero: 16 / 24 / 40 / 100 */
          padding-left: 16px;
          padding-right: 16px;

          box-sizing: border-box;
        }

        @media (min-width: 640px) {
          .torchx-content {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        @media (min-width: 768px) {
          .torchx-content {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (min-width: 1024px) {
          .torchx-content {
            padding-left: 100px;
            padding-right: 40px;
          }
        }

        /* ================= HEADING ================= */

        .torchx-content h1 {
          font-size: 34px;
          line-height: 1.3;
          font-weight: 700;

          color: #1a1a1a;

          margin: 0 0 22px;

          white-space: nowrap;

          transform: translateY(-70px);
        }

        .torchx-content h1 span {
          color: ${MAROON};
        }

        /* ================= PARAGRAPHS ================= */

        .torchx-paragraph {
          font-size: 15px;
          line-height: 1.7;

          color: #3a3a3a;

          margin-left: 0;
          margin-right: 0;
        }

        .paragraph-one {
          margin-top: 0;
          margin-bottom: 20px;

          transform: translateY(-35px);
        }

        .paragraph-two {
          margin-top: 0;
          margin-bottom: 32px;

          transform: translateY(-25px);
        }

        /* ================= BUTTON ================= */

        .torchx-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          background: ${MAROON};
          color: #ffffff;

          font-size: 15px;
          font-weight: 600;

          padding: 13px 26px;

          border-radius: 6px;

          text-decoration: none;

          margin-top: 40px;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .torchx-button:hover {
          background: #5e0d2a;
          transform: translateY(-2px);
        }

        /* ================= LARGE LAPTOP ================= */

        @media (max-width: 1200px) {
          .torchx-suite-section {
            min-height: 600px;
            background-position: 58% center;
          }

          .torchx-content {
            max-width: 590px;
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .torchx-content h1 {
            font-size: 32px;
          }
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .torchx-suite-section {
            min-height: 560px;
            background-position: 62% center;
          }

          .torchx-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(255,255,255,0.95) 0%,
                rgba(255,255,255,0.85) 42%,
                rgba(255,255,255,0.40) 65%,
                rgba(255,255,255,0.05) 100%
              );
          }

          .torchx-content {
            max-width: 560px;
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .torchx-content h1 {
            font-size: 30px;
            white-space: normal;

            transform: translateY(-45px);
          }

          .torchx-paragraph {
            font-size: 15px;
          }

          .paragraph-one {
            transform: translateY(-25px);
          }

          .paragraph-two {
            transform: translateY(-18px);
          }

          .torchx-button {
            margin-top: 28px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .torchx-suite-section {
            min-height: 620px;

            align-items: flex-start;

            background-position: 65% center;
          }

          .torchx-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(255,255,255,0.96) 0%,
                rgba(255,255,255,0.90) 55%,
                rgba(255,255,255,0.45) 100%
              );
          }

          .torchx-content {
            max-width: 100%;

            padding-top: 60px;
            padding-bottom: 45px;
          }

          .torchx-content h1 {
            font-size: 27px;
            line-height: 1.28;

            white-space: normal;

            margin-bottom: 18px;

            transform: translateY(0);
          }

          .torchx-paragraph {
            font-size: 14px;
            line-height: 1.65;
          }

          .paragraph-one {
            margin-bottom: 18px;
            transform: translateY(0);
          }

          .paragraph-two {
            margin-bottom: 25px;
            transform: translateY(0);
          }

          .torchx-button {
            margin-top: 20px;

            padding: 12px 22px;

            font-size: 14px;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 380px) {
          .torchx-suite-section {
            min-height: 600px;
          }

          .torchx-content {
            padding-top: 50px;
            padding-bottom: 40px;
          }

          .torchx-content h1 {
            font-size: 24px;
          }

          .torchx-paragraph {
            font-size: 13.5px;
          }

          .torchx-button {
            padding: 11px 20px;
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}


/* =====================================================================
   2) CONNECTED PLATFORM SECTION
   (Uses the shared MAROON declared above — identical value "#7a1338".)
===================================================================== */

export function ConnectedPlatformSection() {
  return (
    <section className="connected-platform-section">
      <div className="connected-platform-content">
        <h1>
          One <span>Connected Platform</span> for a Better Way of Working
        </h1>

        <p>
          As businesses grow, managing different departments, teams and
          processes can become increasingly complex. HR works with employee
          information, sales teams manage customer relationships, finance
          handles accounts, payroll manages employee compensation, and
          operations keep track of inventory. When each function relies on
          separate systems, information can become scattered and everyday work
          becomes harder to coordinate.
        </p>

        <p className="highlight-text">
          TorchX Suite brings these essential business functions together in
          one connected ecosystem.
        </p>

        <p className="section-gap">
          Designed to simplify the way businesses operate, TorchX Suite helps
          teams work with the information they need while giving
          decision-makers a clearer view of the organization. Instead of
          switching between multiple disconnected tools, teams can manage their
          core activities through a unified business environment.
        </p>

        <h2>Built Around Your Business</h2>

        <p>
          Every organization has its own processes, people and priorities.
          TorchX Suite is designed to support these differences while keeping
          the most important parts of your business connected.
        </p>

        <p>
          From managing employees and customer relationships to handling
          finances, payroll and inventory, the platform helps reduce
          operational complexity and creates a smoother flow of information
          between teams.
        </p>

        <p className="section-gap">
          The result is a more organized way of working—where teams can spend
          less time managing systems and more time focusing on their
          responsibilities.
        </p>

        <h2>Helping Teams Work Smarter</h2>

        <p>
          Modern businesses need more than individual software tools. They need
          systems that work together.
        </p>

        <p>
          TorchX Suite connects important business activities so teams can
          collaborate more effectively, access relevant information and
          maintain better visibility across everyday operations. This connected
          approach can help reduce repetitive work, improve coordination and
          support more informed business decisions.
        </p>

        <p className="section-gap">
          Whether you're managing a growing team, building customer
          relationships, monitoring finances, processing payroll or keeping
          inventory under control, TorchX Suite provides a single environment
          to manage the work that keeps your business moving.
        </p>

        <h2>Designed for Growing Businesses</h2>

        <p>
          As your organization grows, your business requirements change. New
          employees join, operations expand, processes evolve and teams take on
          new responsibilities.
        </p>

        <p>Your business software should be ready for that growth.</p>

        <p className="last-paragraph">
          TorchX Suite provides a connected foundation that can support your
          evolving business needs, helping you manage essential functions
          without creating unnecessary complexity. With your core operations
          working together, it becomes easier to maintain consistency,
          visibility and control as your organization moves forward.
        </p>
      </div>

      <style>{`
        /* ================= SECTION ================= */

        .connected-platform-section {
          width: 100%;
          background: #f7f4ef;
          font-family: "Inter", sans-serif;
          box-sizing: border-box;

          /* Vertical padding */
          padding-top: 70px;
          padding-bottom: 70px;

          /* Left/right padding same as Hero: 16 / 24 / 40 / 100 */
          padding-left: 16px;
          padding-right: 16px;
        }

        @media (min-width: 640px) {
          .connected-platform-section {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        @media (min-width: 768px) {
          .connected-platform-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (min-width: 1024px) {
          .connected-platform-section {
            padding-left: 100px;
            padding-right: 100px;
          }
        }

        /* ================= CONTENT ================= */

        .connected-platform-content {
          width: 100%;
        }

        /* ================= MAIN HEADING ================= */

        .connected-platform-content h1 {
          font-size: 36px;
          line-height: 1.3;
          font-weight: 600;
          color: #1a1a1a;

          margin: 0 0 30px 0;
        }

        .connected-platform-content h1 span {
          color: ${MAROON};
        }

        /* ================= PARAGRAPHS ================= */

        .connected-platform-content p {
          width: 100%;
          max-width: 1300px;

          font-size: 16px;
          line-height: 1.75;

          color: #3a3a3a;

          margin: 0 0 22px 0;
        }

        /* ================= HIGHLIGHT ================= */

        .connected-platform-content .highlight-text {
          font-weight: 700;
          color: #1a1a1a;
        }

        /* ================= SECTION GAP ================= */

        .connected-platform-content .section-gap {
          margin-bottom: 52px;
        }

        /* ================= SUB HEADINGS ================= */

        .connected-platform-content h2 {
          font-size: 25px;
          line-height: 1.4;
          font-weight: 700;

          color: ${MAROON};

          margin: 0 0 20px 0;
        }

        /* ================= LAST PARAGRAPH ================= */

        .connected-platform-content .last-paragraph {
          margin-bottom: 0;
        }

        /* =====================================================
           LARGE LAPTOP
        ====================================================== */

        @media (max-width: 1200px) {
          .connected-platform-section {
            padding-top: 65px;
            padding-bottom: 65px;
          }

          .connected-platform-content h1 {
            font-size: 34px;
          }

          .connected-platform-content p {
            font-size: 16px;
          }

          .connected-platform-content h2 {
            font-size: 24px;
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {
          .connected-platform-section {
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .connected-platform-content h1 {
            font-size: 31px;
            line-height: 1.32;

            margin-bottom: 26px;
          }

          .connected-platform-content p {
            font-size: 16px;
            line-height: 1.7;

            margin-bottom: 20px;
          }

          .connected-platform-content h2 {
            font-size: 23px;

            margin-bottom: 18px;
          }

          .connected-platform-content .section-gap {
            margin-bottom: 42px;
          }
        }

        /* =====================================================
           SMALL TABLET
        ====================================================== */

        @media (max-width: 768px) {
          .connected-platform-section {
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .connected-platform-content h1 {
            font-size: 29px;
            line-height: 1.35;

            margin-bottom: 24px;
          }

          .connected-platform-content p {
            font-size: 15.5px;
            line-height: 1.7;

            margin-bottom: 19px;
          }

          .connected-platform-content h2 {
            font-size: 22px;
            line-height: 1.4;

            margin-bottom: 17px;
          }

          .connected-platform-content .section-gap {
            margin-bottom: 38px;
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 600px) {
          .connected-platform-section {
            padding-top: 42px;
            padding-bottom: 42px;
          }

          .connected-platform-content h1 {
            font-size: 26px;
            line-height: 1.35;

            margin-bottom: 22px;
          }

          .connected-platform-content p {
            font-size: 15px;
            line-height: 1.7;

            margin-bottom: 18px;
          }

          .connected-platform-content h2 {
            font-size: 21px;
            line-height: 1.4;

            margin-bottom: 16px;
          }

          .connected-platform-content .section-gap {
            margin-bottom: 34px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 380px) {
          .connected-platform-section {
            padding-top: 38px;
            padding-bottom: 38px;
          }

          .connected-platform-content h1 {
            font-size: 23px;
            line-height: 1.35;

            margin-bottom: 20px;
          }

          .connected-platform-content p {
            font-size: 14px;
            line-height: 1.68;

            margin-bottom: 17px;
          }

          .connected-platform-content h2 {
            font-size: 19px;
          }

          .connected-platform-content .section-gap {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
}


/* =====================================================================
   3) CONNECTED EXPERIENCE SECTION
   (NOTE: this file's color was also named MAROON but with a DIFFERENT
   value ("#730042"), so it is renamed to CONNECTED_EXPERIENCE_MAROON —
   here and in its two usages below — so it does not clash with the
   "#7a1338" MAROON used by sections 1 and 2.)
===================================================================== */

const CONNECTED_EXPERIENCE_MAROON = "#730042";

export function ConnectedExperienceSection() {
  return (
    <section className="connected-experience-section">

      {/* ================= LEFT IMAGE ================= */}
      <div className="connected-image-wrapper">
        <img
          src="/Hero5Slide3.png"
          alt="Connected Experience"
          className="connected-image"
        />
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="connected-content">
        <h1>
          Everything Your Teams Need.
          <br />
          One <span>Connected Experience.</span>
        </h1>

        <p>
          TorchX Suite brings Talent, Engage, Finance, Pay and Inventory
          together to help businesses manage their most important operations
          from one connected platform. From people and customer relationships
          to financial management, payroll and inventory, each solution is
          designed to work as part of a broader business ecosystem—giving your
          teams greater visibility, simpler workflows and a more consistent way
          to work.
        </p>

        <a href="https://torchxsuite.com/">Explore TorchX Suite →</a>
      </div>

      <style>{`
        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .connected-experience-section {
          display: flex;
          width: 100%;
          min-height: 550px;
          height: auto;
          background: #ffffff;
          font-family: 'Segoe UI', Arial, sans-serif;
          overflow: hidden;
          box-sizing: border-box;
        }


        /* =====================================================
           IMAGE (full-bleed, no padding)
        ===================================================== */

        .connected-image-wrapper {
          flex: 0 0 50%;
          width: 50%;
          min-width: 0;
          height: 550px;

          display: flex;
          align-items: center;
          justify-content: flex-start;

          padding: 0;
          margin: 0;

          overflow: hidden;
          box-sizing: border-box;
        }

        .connected-image {
          display: block;

          width: 100%;
          height: 100%;

          margin: 0;
          padding: 0;

          object-fit: contain;
          object-position: left center;

          transform: scaleX(1.19);
          transform-origin: left center;
        }


        /* =====================================================
           CONTENT
           Desktop: left padding 100px (Hero), right 60px
        ===================================================== */

        .connected-content {
          flex: 0 0 50%;
          width: 50%;
          min-width: 0;

          padding: 45px 60px 45px 100px;

          display: flex;
          flex-direction: column;
          justify-content: center;

          box-sizing: border-box;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .connected-content h1 {
          font-size: 30px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          line-height: 1.35;
          font-weight: 600;

          color: #1a1a1a;

          margin: 0 0 20px 0;

          transform: translateY(-55px);

          overflow-wrap: break-word;
        }

        .connected-content h1 span {
          color: ${CONNECTED_EXPERIENCE_MAROON};
        }


        /* =====================================================
           PARAGRAPH
        ===================================================== */

        .connected-content p {
          font-size: 15px;
          font-family: 'Inter', sans-serif;
          line-height: 1.7;

          color: #3a3a3a;

          max-width: 520px;

          margin: -35px 0 28px 0;

          overflow-wrap: break-word;
        }


        /* =====================================================
           BUTTON
        ===================================================== */

        .connected-content a {
          display: inline-flex;
          align-self: flex-start;
          align-items: center;

          background: ${CONNECTED_EXPERIENCE_MAROON};
          color: #ffffff;

          font-size: 16px;
          font-weight: 500;

          padding: 10px 20px;

          border-radius: 6px;
          text-decoration: none;

          transition: 0.3s ease;

          margin-top: 60px;
        }

        .connected-content a:hover {
          background: #5e0d2a;
        }


        /* =====================================================
           MEDIUM / TABLET
           769px - 1100px
        ===================================================== */

        @media (max-width: 1100px) and (min-width: 769px) {

          .connected-experience-section {
            min-height: 520px;
            height: auto;
            align-items: stretch;
          }


          /* IMAGE STAYS ON LEFT */

          .connected-image-wrapper {
            flex: 0 0 50%;
            width: 50%;
            height: auto;
            min-height: 520px;

            align-self: stretch;

            justify-content: flex-start;
            align-items: center;

            overflow: hidden;
          }

          .connected-image {
            width: 100%;
            height: 100%;

            object-fit: contain;
            object-position: left center;

            transform: none;
          }


          /* CONTENT (left padding 40px = Hero md) */

          .connected-content {
            flex: 0 0 50%;
            width: 50%;

            padding: 40px 32px 40px 40px;

            justify-content: center;
          }

          .connected-content h1 {
            font-size: 27px;
            line-height: 1.3;

            transform: none;

            margin: 0 0 18px 0;
          }

          .connected-content p {
            font-size: 15px;
            line-height: 1.65;

            margin: 0 0 25px 0;

            max-width: 100%;
          }

          .connected-content a {
            font-size: 14px;
            padding: 11px 20px;

            margin-top: 15px;
          }
        }


        /* =====================================================
           TABLET
           769px - 1024px
        ===================================================== */

        @media (max-width: 1024px) and (min-width: 769px) {

          .connected-experience-section {
            min-height: 500px;
          }

          .connected-image-wrapper {
            min-height: 500px;
          }

          .connected-content {
            padding: 35px 32px 35px 40px;
          }

          .connected-content h1 {
            font-size: 25px;
          }

          .connected-content p {
            font-size: 14px;
            line-height: 1.65;
          }
        }


        /* =====================================================
           MOBILE
           (left padding 24px = Hero sm)
        ===================================================== */

        @media (max-width: 768px) {

          .connected-experience-section {
            display: flex;
            flex-direction: column;

            width: 100%;

            min-height: 0;
            height: auto;

            overflow: hidden;
          }


          /* IMAGE */

          .connected-image-wrapper {
            width: 100%;
            flex: none;

            height: auto;
            min-height: 0;

            display: flex;

            align-items: flex-start;
            justify-content: flex-start;

            padding: 0;
            margin: 0;

            overflow: hidden;
          }

          .connected-image {
            display: block;

            width: 100%;
            height: auto;

            max-width: none;

            margin: 0;
            padding: 0;

            object-fit: contain;
            object-position: left top;

            transform: none;
          }


          /* CONTENT */

          .connected-content {
            width: 100%;
            flex: none;

            padding: 40px 24px 45px;

            box-sizing: border-box;

            justify-content: flex-start;
          }


          /* HEADING */

          .connected-content h1 {
            font-size: 27px;
            line-height: 1.3;

            transform: none;

            margin: 0 0 18px 0;
          }


          /* PARAGRAPH */

          .connected-content p {
            font-size: 16px;
            line-height: 1.65;

            margin: 0 0 25px 0;

            max-width: 100%;
          }


          /* BUTTON */

          .connected-content a {
            font-size: 14px;

            padding: 12px 20px;

            margin-top: 0;
          }
        }


        /* =====================================================
           BELOW 640px (left padding 16px = Hero base)
        ===================================================== */

        @media (max-width: 639px) {

          .connected-content {
            padding-left: 16px;
            padding-right: 16px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .connected-image-wrapper {
            width: 100%;
            padding: 0;
            margin: 0;

            justify-content: flex-start;
            align-items: flex-start;
          }

          .connected-image {
            width: 100%;
            height: auto;

            margin: 0;
            padding: 0;

            transform: none;

            object-fit: contain;
            object-position: left top;
          }


          .connected-content {
            padding: 32px 16px 38px;
          }

          .connected-content h1 {
            font-size: 24px;
            line-height: 1.3;

            margin-bottom: 16px;
          }

          .connected-content p {
            font-size: 15px;
            line-height: 1.65;

            margin-bottom: 23px;
          }

          .connected-content a {
            font-size: 14px;
            padding: 11px 18px;

            margin-top: 0;
          }
        }


        /* =====================================================
           VERY SMALL DEVICES
        ===================================================== */

        @media (max-width: 360px) {

          .connected-image-wrapper {
            width: 100%;
            padding: 0;
            margin: 0;

            justify-content: flex-start;
            align-items: flex-start;
          }

          .connected-image {
            width: 100%;
            height: auto;

            margin: 0;
            padding: 0;

            transform: none;
          }

          .connected-content {
            padding: 28px 16px 35px;
          }

          .connected-content h1 {
            font-size: 22px;
            line-height: 1.3;
          }

          .connected-content p {
            font-size: 14px;
            line-height: 1.6;
          }

          .connected-content a {
            font-size: 13px;
            padding: 10px 16px;

            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
}


/* =====================================================================
   4) BRING BUSINESS TOGETHER
   (NOTE: this file's image constant was also named `backgroundImage`
   but with a different path, so it is renamed to
   `bringBusinessBackgroundImage` — here and in its one usage below —
   so it does not clash with section 1's `backgroundImage`.)
===================================================================== */

const bringBusinessBackgroundImage = "/Hero5slide4.png";

export function BringBusinessTogetherSection() {
  const [showOptions, setShowOptions] = useState(false);
  const contactRef = useRef(null);
  const hideTimeout = useRef(null);

  // Show icons and cancel pending hide
  const handleMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }

    setShowOptions(true);
  };

  // Hide icons after a short delay
  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowOptions(false);
    }, 400);
  };

  // Close options on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);

      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []);

  const contactOptions = [
    {
      label: "Call Us",
      Icon: Phone,
      href: "tel:+915813500381",
    },
    {
      label: "WhatsApp",
      Icon: MessageCircle,
      href: "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20TorchX%20Suite.",
      external: true,
    },
    {
      label: "Email Us",
      Icon: Mail,
      href: "mailto:contact@techtorch.solutions",
    },
  ];

  return (
    <section className="business-together-section">

      {/* BACKGROUND IMAGE */}
      <img
        src={bringBusinessBackgroundImage}
        alt=""
        className="business-bg-image"
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="business-overlay" />

      <div className="business-content">

        {/* TEXT CONTENT */}
        <div className="business-text">
          <h1>Bring Your Business Together</h1>

          <p>
            Your business shouldn't have to depend on disconnected systems to
            get work done.
          </p>

          <p>
            With TorchX Suite, your teams can manage essential business
            functions through one connected platform built to simplify
            operations, improve visibility and support sustainable growth.
          </p>

          <p className="business-highlight">
            Ready to see how TorchX Suite can work for your business?
          </p>
        </div>

        {/* BUTTON + CONTACT ICONS */}
        <div
          ref={contactRef}
          className="business-contact-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* TALK TO OUR EXPERTS BUTTON */}
          <Link
            to="/talk-to-expert"
            className="business-button"
          >
            <span>Talk to Our Experts</span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
              className="business-button-arrow"
            />
          </Link>

          {/* CONTACT ICONS */}
          <div
            className={`business-contact-options ${
              showOptions ? "show" : ""
            }`}
            aria-hidden={!showOptions}
          >
            {contactOptions.map(
              ({ label, Icon, href, external }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={
                    external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  tabIndex={showOptions ? 0 : -1}
                  onClick={() => setShowOptions(false)}
                  className="business-contact-icon"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <style>{`

        .business-together-section {
          position: relative;
          width: 100%;
          min-height: 520px;

          background: #0a0a0f;

          font-family: "Plus Jakarta Sans", sans-serif;

          display: flex;
          align-items: center;

          overflow: hidden;
          box-sizing: border-box;
        }

        /* ================= BACKGROUND IMAGE ================= */

        .business-bg-image {
          position: absolute;

          width: 100%;
          height: auto;
          max-width: none;

          left: 0;
          top: 50%;

          transform: translateY(-50%);

          object-fit: contain;

          z-index: 0;
        }

        /* ================= OVERLAY ================= */

        .business-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(5,5,10,0.85) 0%,
              rgba(5,5,10,0.6) 35%,
              rgba(5,5,10,0.15) 60%,
              rgba(5,5,10,0) 75%
            );

          z-index: 1;
        }

        /* ================= CONTENT ================= */

        .business-content {
          position: relative;
          z-index: 2;

          max-width: 560px;

          padding-top: 45px;
          padding-bottom: 45px;

          padding-left: 16px;
          padding-right: 16px;

          box-sizing: border-box;
        }

        @media (min-width: 640px) {
          .business-content {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        @media (min-width: 768px) {
          .business-content {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (min-width: 1024px) {
          .business-content {
            padding-left: 100px;
            padding-right: 40px;
          }
        }

        .business-text {
          transform: translateY(-25px);
        }

        .business-content h1 {
          font-size: 28px;
          line-height: 1.3;
          font-weight: 700;

          color: #ffffff;

          margin: 0 0 18px 0;
        }

        .business-content p {
          font-size: 14px;
          line-height: 1.7;

          color: #d5d5da;

          margin: 0 0 14px 0;
        }

        .business-content .business-highlight {
          color: #ffffff;
          font-weight: 700;

          margin-bottom: 30px;
        }

        /* ================= BUTTON WRAPPER ================= */

        .business-contact-wrapper {
          position: relative;
          display: inline-block;
        }

        /* ================= BUTTON ================= */

        .business-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;
          gap: 8px;

          background: transparent;
          color: #ffffff;

          font-size: 14px;
          font-weight: 600;

          padding: 12px 22px;

          border-radius: 6px;

          border: 1px solid rgba(255,255,255,0.6);

          text-decoration: none;

          white-space: nowrap;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .business-button:hover {
          background: #ffffff;
          color: #0a0a0f;
        }

        /* ================= ARROW ================= */

        .business-button-arrow {
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .business-button:hover .business-button-arrow {
          transform: translate(3px, -3px);
        }

        /* ================= CONTACT ICONS ================= */

        .business-contact-options {
          position: absolute;
          left: 100%;
          top: 50%;

          display: flex;
          align-items: center;
          gap: 8px;

          margin-left: 10px;

          transform: translateY(-50%);

          visibility: hidden;
          opacity: 0;
          pointer-events: none;

          transition:
            opacity 0.3s ease,
            visibility 0.3s ease;

          z-index: 5;
        }

        .business-contact-options.show {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
        }

        .business-contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;
          flex-shrink: 0;

          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 50%;

          background: rgba(10,10,15,0.9);
          color: #ffffff;

          text-decoration: none;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .business-contact-icon:hover {
          background: #730042;
          color: #ffffff;
          border-color: #730042;
          transform: scale(1.08);
        }

        /* ================= LAPTOP ================= */

        @media (max-width: 1200px) {

          .business-together-section {
            min-height: 480px;
          }

          .business-content {
            padding-top: 40px;
            padding-bottom: 40px;
          }

        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .business-together-section {
            min-height: 440px;
          }

          .business-bg-image {
            width: 100%;
          }

          .business-content {
            max-width: 520px;
            padding-top: 40px;
            padding-bottom: 40px;
          }

          .business-text {
            transform: translateY(-15px);
          }

          .business-contact-options {
            gap: 6px;
            margin-left: 8px;
          }

          .business-contact-icon {
            width: 38px;
            height: 38px;
          }

        }

        /* ================= MOBILE ================= */

        @media (max-width: 768px) {

          .business-together-section {
            min-height: 480px;
          }

          .business-bg-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .business-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(5,5,10,0.88) 0%,
                rgba(5,5,10,0.75) 55%,
                rgba(5,5,10,0.35) 100%
              );
          }

          .business-content {
            max-width: 100%;
            padding-top: 40px;
            padding-bottom: 40px;
          }

          .business-text {
            transform: translateY(0);
          }

          .business-content h1 {
            font-size: 25px;
          }

          .business-content p {
            font-size: 14px;
          }

          .business-contact-options {
            gap: 6px;
            margin-left: 7px;
          }

          .business-contact-icon {
            width: 34px;
            height: 34px;
          }

          .business-contact-icon svg {
            width: 16px;
            height: 16px;
          }

        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 480px) {

          .business-together-section {
            min-height: 500px;
          }

          .business-bg-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .business-content {
            padding-top: 35px;
            padding-bottom: 35px;
          }

          .business-content h1 {
            font-size: 23px;
            margin-bottom: 16px;
          }

          .business-content p {
            font-size: 13.5px;
            line-height: 1.65;
          }

          .business-button {
            padding: 11px 18px;
            font-size: 13px;
          }

          .business-contact-options {
            gap: 5px;
            margin-left: 6px;
          }

          .business-contact-icon {
            width: 31px;
            height: 31px;
          }

          .business-contact-icon svg {
            width: 15px;
            height: 15px;
          }

        }

      `}</style>
    </section>
  );
}


/* =====================================================================
   MERGED PAGE — renders all four sections one after another
===================================================================== */

export default function MergedTorchXSections() {
  return (
    <>
      <TorchXSuiteSection />
      <ConnectedPlatformSection />
      <ConnectedExperienceSection />
      <BringBusinessTogetherSection />
    </>
  );
}