// import React, { useState, useEffect, useRef } from "react";
// import {
//   Phone,
//   MessageCircle,
//   Mail,
//   ArrowUpRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const backgroundImage = "/Hero5slide4.png";

// export default function BringBusinessTogetherSection() {
//   const [showOptions, setShowOptions] = useState(false);
//   const contactRef = useRef(null);
//   const hideTimeout = useRef(null);

//   // Show icons and cancel pending hide
//   const handleMouseEnter = () => {
//     if (hideTimeout.current) {
//       clearTimeout(hideTimeout.current);
//     }

//     setShowOptions(true);
//   };

//   // Hide icons after a short delay
//   const handleMouseLeave = () => {
//     hideTimeout.current = setTimeout(() => {
//       setShowOptions(false);
//     }, 400);
//   };

//   // Close options on outside click or Escape
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         contactRef.current &&
//         !contactRef.current.contains(event.target)
//       ) {
//         setShowOptions(false);
//       }
//     };

//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         setShowOptions(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleEscape);

//       if (hideTimeout.current) {
//         clearTimeout(hideTimeout.current);
//       }
//     };
//   }, []);

//   const contactOptions = [
//     {
//       label: "Call Us",
//       Icon: Phone,
//       href: "tel:+915813500381",
//     },
//     {
//       label: "WhatsApp",
//       Icon: MessageCircle,
//       href: "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20TorchX%20Suite.",
//       external: true,
//     },
//     {
//       label: "Email Us",
//       Icon: Mail,
//       href: "mailto:contact@techtorch.solutions",
//     },
//   ];

//   return (
//     <section className="business-together-section">

//       {/* BACKGROUND IMAGE */}
//       <img
//         src={backgroundImage}
//         alt=""
//         className="business-bg-image"
//       />

//       {/* DARK GRADIENT OVERLAY */}
//       <div className="business-overlay" />

//       <div className="business-content">

//         {/* TEXT CONTENT */}
//         <div className="business-text">
//           <h1>Bring Your Business Together</h1>

//           <p>
//             Your business shouldn't have to depend on disconnected systems to
//             get work done.
//           </p>

//           <p>
//             With TorchX Suite, your teams can manage essential business
//             functions through one connected platform built to simplify
//             operations, improve visibility and support sustainable growth.
//           </p>

//           <p className="business-highlight">
//             Ready to see how TorchX Suite can work for your business?
//           </p>
//         </div>

//         {/* BUTTON + CONTACT ICONS */}
//         <div
//           ref={contactRef}
//           className="business-contact-wrapper"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {/* TALK TO OUR EXPERTS BUTTON */}
//           <Link
//             to="/talk-to-expert"
//             className="business-button"
//           >
//             <span>Talk to Our Experts</span>

//             <ArrowUpRight
//               size={18}
//               strokeWidth={1.8}
//               className="business-button-arrow"
//             />
//           </Link>

//           {/* CONTACT ICONS */}
//           <div
//             className={`business-contact-options ${
//               showOptions ? "show" : ""
//             }`}
//             aria-hidden={!showOptions}
//           >
//             {contactOptions.map(
//               ({ label, Icon, href, external }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   title={label}
//                   aria-label={label}
//                   target={external ? "_blank" : undefined}
//                   rel={
//                     external
//                       ? "noopener noreferrer"
//                       : undefined
//                   }
//                   tabIndex={showOptions ? 0 : -1}
//                   onClick={() => setShowOptions(false)}
//                   className="business-contact-icon"
//                 >
//                   <Icon size={18} />
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       </div>

//       <style>{`

//         .business-together-section {
//           position: relative;
//           width: 100%;
//           min-height: 520px;

//           background: #0a0a0f;

//           font-family: "Plus Jakarta Sans", sans-serif;

//           display: flex;
//           align-items: center;

//           overflow: hidden;
//           box-sizing: border-box;
//         }

//         /* ================= BACKGROUND IMAGE ================= */

//         .business-bg-image {
//           position: absolute;

//           width: 100%;
//           height: auto;
//           max-width: none;

//           left: 0;
//           top: 50%;

//           transform: translateY(-50%);

//           object-fit: contain;

//           z-index: 0;
//         }

//         /* ================= OVERLAY ================= */

//         .business-overlay {
//           position: absolute;
//           inset: 0;

//           background:
//             linear-gradient(
//               90deg,
//               rgba(5,5,10,0.85) 0%,
//               rgba(5,5,10,0.6) 35%,
//               rgba(5,5,10,0.15) 60%,
//               rgba(5,5,10,0) 75%
//             );

//           z-index: 1;
//         }

//         /* ================= CONTENT ================= */

//         .business-content {
//           position: relative;
//           z-index: 2;

//           max-width: 560px;

//           padding-top: 45px;
//           padding-bottom: 45px;

//           padding-left: 16px;
//           padding-right: 16px;

//           box-sizing: border-box;
//         }

//         @media (min-width: 640px) {
//           .business-content {
//             padding-left: 24px;
//             padding-right: 24px;
//           }
//         }

//         @media (min-width: 768px) {
//           .business-content {
//             padding-left: 40px;
//             padding-right: 40px;
//           }
//         }

//         @media (min-width: 1024px) {
//           .business-content {
//             padding-left: 100px;
//             padding-right: 40px;
//           }
//         }

//         .business-text {
//           transform: translateY(-25px);
//         }

//         .business-content h1 {
//           font-size: 28px;
//           line-height: 1.3;
//           font-weight: 700;

//           color: #ffffff;

//           margin: 0 0 18px 0;
//         }

//         .business-content p {
//           font-size: 14px;
//           line-height: 1.7;

//           color: #d5d5da;

//           margin: 0 0 14px 0;
//         }

//         .business-content .business-highlight {
//           color: #ffffff;
//           font-weight: 700;

//           margin-bottom: 30px;
//         }

//         /* ================= BUTTON WRAPPER ================= */

//         .business-contact-wrapper {
//           position: relative;
//           display: inline-block;
//         }

//         /* ================= BUTTON ================= */

//         .business-button {
//           display: inline-flex;

//           align-items: center;
//           justify-content: center;
//           gap: 8px;

//           background: transparent;
//           color: #ffffff;

//           font-size: 14px;
//           font-weight: 600;

//           padding: 12px 22px;

//           border-radius: 6px;

//           border: 1px solid rgba(255,255,255,0.6);

//           text-decoration: none;

//           white-space: nowrap;

//           transition:
//             background 0.3s ease,
//             color 0.3s ease,
//             transform 0.3s ease;
//         }

//         .business-button:hover {
//           background: #ffffff;
//           color: #0a0a0f;
//         }

//         /* ================= ARROW ================= */

//         .business-button-arrow {
//           flex-shrink: 0;
//           transition: transform 0.3s ease;
//         }

//         .business-button:hover .business-button-arrow {
//           transform: translate(3px, -3px);
//         }

//         /* ================= CONTACT ICONS ================= */

//         .business-contact-options {
//           position: absolute;
//           left: 100%;
//           top: 50%;

//           display: flex;
//           align-items: center;
//           gap: 8px;

//           margin-left: 10px;

//           transform: translateY(-50%);

//           visibility: hidden;
//           opacity: 0;
//           pointer-events: none;

//           transition:
//             opacity 0.3s ease,
//             visibility 0.3s ease;

//           z-index: 5;
//         }

//         .business-contact-options.show {
//           visibility: visible;
//           opacity: 1;
//           pointer-events: auto;
//         }

//         .business-contact-icon {
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           width: 42px;
//           height: 42px;
//           flex-shrink: 0;

//           border: 1px solid rgba(255,255,255,0.6);
//           border-radius: 50%;

//           background: rgba(10,10,15,0.9);
//           color: #ffffff;

//           text-decoration: none;

//           transition:
//             background 0.25s ease,
//             color 0.25s ease,
//             border-color 0.25s ease,
//             transform 0.25s ease;
//         }

//         .business-contact-icon:hover {
//           background: #730042;
//           color: #ffffff;
//           border-color: #730042;
//           transform: scale(1.08);
//         }

//         /* ================= LAPTOP ================= */

//         @media (max-width: 1200px) {

//           .business-together-section {
//             min-height: 480px;
//           }

//           .business-content {
//             padding-top: 40px;
//             padding-bottom: 40px;
//           }

//         }

//         /* ================= TABLET ================= */

//         @media (max-width: 900px) {

//           .business-together-section {
//             min-height: 440px;
//           }

//           .business-bg-image {
//             width: 100%;
//           }

//           .business-content {
//             max-width: 520px;
//             padding-top: 40px;
//             padding-bottom: 40px;
//           }

//           .business-text {
//             transform: translateY(-15px);
//           }

//           .business-contact-options {
//             gap: 6px;
//             margin-left: 8px;
//           }

//           .business-contact-icon {
//             width: 38px;
//             height: 38px;
//           }

//         }

//         /* ================= MOBILE ================= */

//         @media (max-width: 768px) {

//           .business-together-section {
//             min-height: 480px;
//           }

//           .business-bg-image {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             object-position: center;
//           }

//           .business-overlay {
//             background:
//               linear-gradient(
//                 90deg,
//                 rgba(5,5,10,0.88) 0%,
//                 rgba(5,5,10,0.75) 55%,
//                 rgba(5,5,10,0.35) 100%
//               );
//           }

//           .business-content {
//             max-width: 100%;
//             padding-top: 40px;
//             padding-bottom: 40px;
//           }

//           .business-text {
//             transform: translateY(0);
//           }

//           .business-content h1 {
//             font-size: 25px;
//           }

//           .business-content p {
//             font-size: 14px;
//           }

//           .business-contact-options {
//             gap: 6px;
//             margin-left: 7px;
//           }

//           .business-contact-icon {
//             width: 34px;
//             height: 34px;
//           }

//           .business-contact-icon svg {
//             width: 16px;
//             height: 16px;
//           }

//         }

//         /* ================= SMALL MOBILE ================= */

//         @media (max-width: 480px) {

//           .business-together-section {
//             min-height: 500px;
//           }

//           .business-bg-image {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             object-position: center;
//           }

//           .business-content {
//             padding-top: 35px;
//             padding-bottom: 35px;
//           }

//           .business-content h1 {
//             font-size: 23px;
//             margin-bottom: 16px;
//           }

//           .business-content p {
//             font-size: 13.5px;
//             line-height: 1.65;
//           }

//           .business-button {
//             padding: 11px 18px;
//             font-size: 13px;
//           }

//           .business-contact-options {
//             gap: 5px;
//             margin-left: 6px;
//           }

//           .business-contact-icon {
//             width: 31px;
//             height: 31px;
//           }

//           .business-contact-icon svg {
//             width: 15px;
//             height: 15px;
//           }

//         }

//       `}</style>
//     </section>
//   );
// }