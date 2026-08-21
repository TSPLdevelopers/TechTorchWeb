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

              {/* Instagram */}
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

              {/* Facebook */}
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              {/* X / Twitter */}
<a href="#" aria-label="X / Twitter">
  <FaXTwitter />
</a>

            </div>
          </div>


          {/* MIDDLE - INDUSTRIES */}
          <div className="footer-column">
            <h2>Industries</h2>
            <h2>Services</h2>
            <h2>Products</h2>
            <h2>Digital Solutions</h2>
            <h2>Contact Us</h2>
          </div>


          {/* RIGHT - IMPORTANT LINKS */}
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


          {/* BOTTOM LINKS */}
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
          font-family: Arial, Helvetica, sans-serif;
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
          grid-template-columns: 1.15fr 1fr 1fr;
          column-gap: 7%;
          min-height: 280px;
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
        }

        .footer-brand h3 {
          margin: 0 0 15px;
          font-size: 19px;
          font-family: "Plus Jakarta Sans", sans-serif;
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

        .footer-column h2 {
          margin: 0 0 29px;
          font-size: 20px;
          font-family: "Inter", sans-serif;
          line-height: 0.8;
          font-weight: 500;
          color: white;
        }

        .important-links h2 {
          margin-bottom: 22px;
        }

        .footer-column a {
          color: white;
          text-decoration: none;
          font-size: 17px;
          font-family: "Inter", sans-serif;
          line-height: 1.25;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .footer-column a:hover,
        .legal-links a:hover {
          opacity: 0.75;
        }


        /* ================= BOTTOM ================= */

        .footer-bottom {
          width: 100%;
        }

        .copyright {
  margin: 0 0 32px;
  font-size: 17px;
  font-family: "Inter", sans-serif;
  line-height: 1.3;
  font-weight: 400;
  position: relative;
  transform: translateY(40px);
}

       .disclaimer {
  margin: 0;
  max-width: 1240px;
  font-size: 17px;
  font-family: "Inter", sans-serif;
  line-height: 1.28;
  font-weight: 400;
  position: relative;
  transform: translateY(40px);
}

        /* ================= LEGAL LINKS ================= */

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


        /* ================= TABLET ================= */

        @media (max-width: 1024px) {

          .footer-container {
            padding: 42px 5%;
          }

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
            width: 270px;
          }

          .footer-column h2 {
            font-size: 28px;
          }

          .footer-column a {
            font-size: 22px;
          }

          .copyright {
            font-size: 22px;
          }

          .disclaimer {
            font-size: 20px;
          }

          .legal-links {
            justify-content: flex-start;
            margin-top: 65px;
          }

          .legal-links a {
            font-size: 19px;
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
            gap: 48px;
            margin-bottom: 55px;
          }

          .footer-brand {
            width: 100%;
          }

          .footer-logo {
            width: min(280px, 90%);
            margin-bottom: 32px;
          }

          .footer-brand h3 {
            font-size: 25px;
            margin-bottom: 22px;
          }

          .social-icons {
            gap: 24px;
            padding-left: 0;
          }

          .social-icons a {
            width: 38px;
            height: 38px;
          }

          .social-icons svg {
            width: 35px;
            height: 35px;
          }

          .footer-column h2 {
            font-size: 25px;
            margin-bottom: 22px;
          }

          .footer-column a {
            font-size: 20px;
            margin-bottom: 17px;
          }

          .copyright {
            font-size: 18px;
            line-height: 1.4;
            margin-bottom: 26px;
          }

          .disclaimer {
            font-size: 17px;
            line-height: 1.45;
          }

          .legal-links {
            justify-content: flex-start;
            gap: 15px 22px;
            margin-top: 48px;
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
            width: 250px;
          }

          .footer-brand h3 {
            font-size: 23px;
          }

          .footer-column h2 {
            font-size: 23px;
          }

          .footer-column a {
            font-size: 18px;
          }

          .copyright {
            font-size: 16px;
          }

          .disclaimer {
            font-size: 15px;
          }

          .legal-links a {
            font-size: 14px;
          }

          .social-icons {
            gap: 20px;
          }

          .social-icons a {
            width: 34px;
            height: 34px;
          }

          .social-icons svg {
            width: 31px;
            height: 31px;
          }
        }

      `}</style>
    </footer>
  );
}