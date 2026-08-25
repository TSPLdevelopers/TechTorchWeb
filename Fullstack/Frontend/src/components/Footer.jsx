import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ================= TOP SECTION ================= */}
        <div className="footer-top">

          {/* LEFT - LOGO + SOCIAL */}
          <div className="footer-brand">
            <img
              src="/Footerlogo.png"
              alt="TechTorch Solutions"
              className="footer-logo"
            />

            <h3>Follow Us</h3>

            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="X / Twitter">
                <FaXTwitter />
              </a>
            </div>
          </div>


          {/* ================= INDUSTRIES ================= */}
          <div className="footer-column industries-column">
            <a href="#">Industries</a>
            <a href="#">Services</a>
            <a href="#">Products</a>
            <a href="#">Digital Solutions</a>
            <a href="#">Contact Us</a>
          </div>


          {/* ================= IMPORTANT LINKS ================= */}
          <div className="footer-column important-links">
            <h2>Important Links</h2>

            <a href="#">Case Studies</a>
            <a href="#">Career</a>
            <a href="#">Company Profile-IT Services</a>

            <a href="#">
              Company Profile-IT Staff
              <br />
              Augmentation
            </a>
          </div>

        </div>


        {/* ================= COPYRIGHT ================= */}
        <div className="footer-bottom">

          <p className="copyright">
            ©2024–2026 TechTorch Solutions Private Limited. All rights reserved.
          </p>

          <p className="disclaimer">
            This website is provided for general information and contact
            purposes only. References to technologies, industries, brands,
            products, or services are descriptive and do not imply ownership,
            endorsement, or affiliation unless stated. Nothing on this website
            constitutes a binding offer, commitment, or contractual obligation.
            Services are subject to applicable agreements.
          </p>


          {/* ================= BOTTOM LINKS ================= */}
          <div className="legal-links">
            <a href="#">Terms of use</a>
            <a href="#">Accessibility</a>
            <a href="#">Privacy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Cancellation Policy</a>
          </div>

        </div>

      </div>


      {/* ================= FOOTER CSS ================= */}
      <style>{`

        .footer {
          width: 100%;
          background: #730042;
          color: white;
          font-family: "Plus Jakarta Sans", sans-serif;
          overflow: hidden;
        }


        .footer-container {
          width: 100%;
          padding: 58px 5.8% 34px 8%;
          box-sizing: border-box;
        }


        /* ================= TOP ================= */

        .footer-top {
          display: grid;
          grid-template-columns: 1.15fr 0.5fr 1fr;
          column-gap: 18%;
          min-height: 200px;
        }


        /* ================= LOGO ================= */

        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-logo {
          width: 230px;
          height: auto;
          display: block;
          object-fit: contain;
          margin-bottom: 44px;
          margin-left: -8px;
        }

        .footer-brand h3 {
          margin: 0 0 15px;
          font-size: 18px;
          font-family: "Plus Jakarta Sans";
          line-height: 1;
          font-weight: 600;
        }


        /* ================= SOCIAL ================= */

        .social-icons {
          display: flex;
          align-items: center;
          gap: 26px;
          padding-left: 3px;
        }

        .social-icons a {
          width: 26px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .social-icons svg {
          width: 32px;
          height: 32px;
          display: block;
        }

        .social-icons a:hover {
          opacity: 0.75;
          transform: translateY(-2px);
        }


        /* ================= COLUMNS ================= */

        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }


        /* INDUSTRIES */

        .industries-column a {
          color: white;
          text-decoration: none;
          font-size: 18px;
          font-family: "Inter";
          line-height: 0.8;
          font-weight: 500;
          margin-bottom: 29px;
        }


        /* IMPORTANT LINKS */

        .footer-column h2 {
          margin: 0 0 29px;
          font-size: 20px;
          font-family:"Inter";
          line-height: 0.8;
          font-weight: 500;
          color: white;
        }

        .important-links h2 {
          margin-bottom: 22px;
        }

        .important-links a {
          color: white;
          text-decoration: none;
          font-size: 17px;
          font-family: "Inter", sans-serif;
          line-height: 1.25;
          font-weight: 500;
          margin-bottom: 20px;
        }


        /* ================= BOTTOM LINKS ================= */

        .legal-links {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
          margin-top: 96px;
          padding-right: 50px;
        }

        .legal-links a {
          color: white;
          text-decoration: none;
          font-size: 17px;
          font-weight: 500;
          white-space: nowrap;
        }


        /* ONLY BOTTOM LEGAL LINKS GET UNDERLINE */

        .legal-links a:hover {
          text-decoration: underline;
          text-underline-offset: 5px;
        }


        /* ================= BOTTOM ================= */

        .footer-bottom {
          width: 100%;
        }

        .copyright {
          margin: 0 0 32px;
          font-size: 16px;
          font-family: "Inter", sans-serif;
          line-height: 1.3;
          font-weight: 400;
          position: relative;
          transform: translateY(60px);
        }

        .disclaimer {
          margin: 0;
          max-width: 1240px;
          font-size: 16px;
          font-family: "Inter", sans-serif;
          line-height: 1.28;
          font-weight: 400;
          position: relative;
          transform: translateY(60px);
        }


        /* ================= TABLET / MEDIUM ================= */

        @media (max-width: 1024px) {

          .footer-container {
            padding: 42px 5%;
          }

          /*
            Brand occupies the first row.
            Industries + Important Links stay together
            in the second row.
          */
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 60px 50px;
            min-height: auto;
            margin-bottom: 80px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-logo {
            width: 210px;
          }

          /*
            Keep Industries and Important Links
            visually balanced on medium screens.
          */
          .industries-column a {
            font-size: 20px;
            margin-bottom: 29px;
          }

          .footer-column h2 {
            font-size: 20px;
            margin-bottom: 22px;
          }

          .important-links a {
            font-size: 20px;
            margin-bottom: 20px;
          }

          .copyright {
            font-size: 20px;
            transform: translateY(10px);
          }

          .disclaimer {
            font-size: 19px;
            transform: translateY(15px);
          }

          .legal-links {
            justify-content: flex-start;
            margin-top: 50px;
          }

          .legal-links a {
            font-size: 18px;
          }
        }


        /* ================= MOBILE ================= */

        @media (max-width: 640px) {

          .footer-container {
            padding: 36px 24px 28px;
          }

          .footer-top {
            display: flex;
            flex-direction: column;
            gap: 42px;
            margin-bottom: 45px;
          }

          .footer-brand {
            width: 100%;
          }

          .footer-logo {
            width: 190px;
            margin-bottom: 32px;
          }

          .footer-brand h3 {
            font-size: 23px;
            margin-bottom: 20px;
          }


          /* Slightly smaller social icons */

          .social-icons {
            gap: 22px;
            padding-left: 0;
          }

          .social-icons a {
            width: 30px;
            height: 30px;
          }

          .social-icons svg {
            width: 30px;
            height: 30px;
          }


          /*
            Industries and Important Links remain
            visually similar in size.
          */

          .industries-column a {
            font-size: 20px;
            margin-bottom: 22px;
          }

          .footer-column h2 {
            font-size: 20px;
            margin-bottom: 22px;
          }

          .important-links a {
            font-size: 20px;
            margin-bottom: 18px;
          }


          /* Bottom content */

          .copyright {
            font-size: 18px;
            line-height: 1.4;
            margin-bottom: 24px;
            transform: translateY(10px);
          }

          .disclaimer {
            font-size: 17px;
            line-height: 1.45;
            transform: translateY(15px);
          }


          /* Move final links upward */

          .legal-links {
            justify-content: flex-start;
            gap: 14px 20px;
            margin-top: 25px;
            padding-right: 0;
          }

          .legal-links a {
            font-size: 16px;
          }
        }


        /* ================= SMALL MOBILE ================= */

        @media (max-width: 400px) {

          .footer-container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .footer-logo {
            width: 175px;
          }

          .footer-brand h3 {
            font-size: 22px;
          }


          /* Smaller social icons */

          .social-icons {
            gap: 18px;
          }

          .social-icons a {
            width: 30px;
            height: 30px;
          }

          .social-icons svg {
            width: 27px;
            height: 27px;
          }


          /*
            Keep all footer sections balanced.
            No section becomes disproportionately large.
          */

          .industries-column a {
            font-size: 18px;
            margin-bottom: 20px;
          }

          .footer-column h2 {
            font-size: 18px;
            margin-bottom: 20px;
          }

          .important-links a {
            font-size: 18px;
            margin-bottom: 17px;
          }


          .copyright {
            font-size: 16px;
            transform: translateY(20px);
          }

          .disclaimer {
            font-size: 15px;
            transform: translateY(20px);
          }


          .legal-links {
            margin-top: 20px;
            gap: 12px 18px;
          }

          .legal-links a {
            font-size: 14px;
          }
        }

      `}</style>
    </footer>
  );
}