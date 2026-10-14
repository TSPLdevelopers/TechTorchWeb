// import React, { useState, useEffect, useRef } from "react";
// import {
//   Phone,
//   MessageCircle,
//   Mail,
//   ArrowUpRight,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// export default function ErpHero() {
//   const [showOptions, setShowOptions] = useState(false);
//   const contactRef = useRef(null);

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
//       href: "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20ERP%20solutions.",
//       external: true,
//     },
//     {
//       label: "Email Us",
//       Icon: Mail,
//       href: "mailto:contact@techtorch.solutions",
//     },
//   ];

//   return (
//     <section
//       className="
//         relative
//         w-full
//         overflow-hidden
//         bg-[#0c140c]
//         font-['Plus_Jakarta_Sans']
//         min-h-[500px]
//         sm:min-h-[520px]
//         md:min-h-[540px]
//         lg:min-h-[560px]
//         xl:min-h-[580px]
//       "
//     >
//       {/* ================= BACKGROUND IMAGE ================= */}

//       <div
//         className="
//           absolute
//           inset-0
//           bg-cover
//           bg-center
//           bg-no-repeat
//         "
//         style={{
//           backgroundImage: "url('/slide21.png')",
//         }}
//       />

//       {/* ================= DARK OVERLAY ================= */}

//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(6,10,6,0.55) 0%, rgba(6,10,6,0.38) 45%, rgba(6,10,6,0.65) 100%)",
//         }}
//       />

//       {/* ================= CONTENT ================= */}

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           flex
//           min-h-[500px]
//           sm:min-h-[520px]
//           md:min-h-[540px]
//           lg:min-h-[560px]
//           xl:min-h-[580px]
//           w-full
//           max-w-6xl
//           flex-col
//           items-center
//           justify-center
//           px-5
//           sm:px-8
//           md:px-10
//           lg:px-12
//           py-14
//           sm:py-16
//           md:py-20
//           lg:py-24
//           text-center
//         "
//       >
//         {/* ================= LABEL ================= */}

//         <p
//           className="
//             mb-3
//             sm:mb-4
//             md:mb-5
//             text-[10px]
//             sm:text-xs
//             md:text-sm
//             font-bold
//             tracking-[0.12em]
//             sm:tracking-[0.15em]
//             md:tracking-[0.18em]
//             leading-tight
//             text-white/90
//           "
//         >
//           ENTERPRISE RESOURCE PLANNING
//         </p>

//         {/* ================= HEADING ================= */}

//         <h1
//           className="
//             mb-4
//             sm:mb-5
//             md:mb-6
//             w-full
//             max-w-full
//             sm:max-w-[520px]
//             md:max-w-[700px]
//             lg:max-w-[850px]
//             text-[1.65rem]
//             sm:text-[2rem]
//             md:text-[2.5rem]
//             lg:text-[3rem]
//             xl:text-[3.25rem]
//             font-semibold
//             leading-[1.15]
//             sm:leading-[1.15]
//             md:leading-[1.12]
//             text-white
//           "
//         >
//           Connect Your Business. Work Better Together.
//         </h1>

//         {/* ================= DESCRIPTION ================= */}

//         <p
//           className="
//             mb-6
//             sm:mb-7
//             md:mb-8
//             lg:mb-9
//             w-full
//             max-w-full
//             sm:max-w-[540px]
//             md:max-w-[680px]
//             lg:max-w-[800px]
//             text-[13px]
//             sm:text-sm
//             md:text-base
//             lg:text-[17px]
//             leading-[1.6]
//             md:leading-[1.65]
//             text-white/90
//           "
//         >
//           Bring your finance, operations, people, inventory and customer
//           processes together in one place. With a connected ERP system, your
//           teams can spend less time managing information and more time getting
//           work done.
//         </p>

//         {/* ================= CENTERED BUTTON + CONTACT ICONS ================= */}

//         <div
//           ref={contactRef}
//           className="
//             relative
//             flex
//             w-full
//             items-center
//             justify-center
//           "
//           onMouseEnter={() => setShowOptions(true)}
//           onMouseLeave={() => setShowOptions(false)}
//         >
//           {/* TALK TO OUR EXPERTS BUTTON */}

//           <Link
//             to="/talk-to-expert"
//             className="
//               group
//               relative
//               z-10
//               inline-flex
//               shrink-0
//               items-center
//               justify-center
//               gap-3
//               border
//               border-white/70
//               bg-transparent
//               text-white
//               text-[11px]
//               sm:text-xs
//               md:text-sm
//               font-medium
//               tracking-wide
//               px-5
//               sm:px-6
//               md:px-7
//               py-2.5
//               sm:py-3
//               md:py-3.5
//               whitespace-nowrap
//               transition-colors
//               duration-300
//               ease-in-out
//               hover:bg-white
//               hover:text-[#0c140c]
//               hover:border-white
//               active:scale-95
//             "
//           >
//             Talk to Our Experts

//             <ArrowUpRight
//               size={16}
//               className="
//                 shrink-0
//                 transition-transform
//                 duration-300
//                 group-hover:translate-x-1
//                 group-hover:-translate-y-1
//               "
//             />
//           </Link>

//           {/* CONTACT ICONS — ABSOLUTE POSITION, BUTTON DOES NOT MOVE */}

//           <div
//             className={`
//               absolute
//               left-1/2
//               top-1/2
//               flex
//               -translate-y-1/2
//               items-center
//               gap-2
//               transition-all
//               duration-300
//               ${
//                 showOptions
//                   ? "visible opacity-100"
//                   : "invisible opacity-0 pointer-events-none"
//               }
//             `}
//             style={{
//               marginLeft: "120px",
//             }}
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
//                   rel={external ? "noopener noreferrer" : undefined}
//                   tabIndex={showOptions ? 0 : -1}
//                   onClick={() => setShowOptions(false)}
//                   className="
//                     flex
//                     h-10
//                     w-10
//                     sm:h-11
//                     sm:w-11
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-white/50
//                     bg-[#0c140c]/80
//                     text-white
//                     backdrop-blur-md
//                     transition-all
//                     duration-300
//                     hover:scale-110
//                     hover:border-[#730042]
//                     hover:bg-[#730042]
//                   "
//                 >
//                   <Icon size={18} />
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ================= ANIMATION ================= */}

//       <style>{`
//         @keyframes contactReveal {
//           from {
//             opacity: 0;
//             transform: translateX(-8px);
//           }

//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .animate-\\[contactReveal_250ms_ease-out\\] {
//             animation: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }