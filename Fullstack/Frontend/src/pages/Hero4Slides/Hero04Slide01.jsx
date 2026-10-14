// import React, { useState, useEffect, useRef } from "react";
// import {
//   Phone,
//   MessageCircle,
//   Mail,
//   ArrowUpRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function TechnologyMovesForward() {
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
//       href: "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20technology%20solutions.",
//       external: true,
//     },
//     {
//       label: "Email Us",
//       Icon: Mail,
//       href: "mailto:contact@techtorch.solutions",
//     },
//   ];

//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* HERO BACKGROUND */}
//       <div
//         className="
//           relative
//           h-[330px]
//           w-full
//           sm:h-[360px]
//           md:h-[390px]
//           lg:h-[450px]
//           xl:h-[480px]
//         "
//       >
//         <img
//           src="/Slide4.1.png"
//           alt="Technology moving business forward"
//           className="absolute inset-0 h-full w-full object-cover object-center"
//         />

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-black/10" />

//         {/* CONTENT */}
//         <div
//           className="
//             absolute inset-0 w-full
//             px-4 sm:px-6 md:px-10 lg:px-[100px]
//           "
//         >
//           <div
//             className="
//               flex h-full max-w-[590px]
//               flex-col justify-center
//               -translate-y-3
//               sm:-translate-y-4
//               md:-translate-y-5
//             "
//           >
//             {/* HEADING */}
//             <h1
//               className="
//                 font-['Plus_Jakarta_Sans']
//                 text-[22px] font-medium
//                 leading-[1.08] tracking-[-0.7px] text-white
//                 min-[400px]:text-[24px]
//                 sm:text-[27px]
//                 md:text-[30px]
//                 lg:text-[34px]
//                 xl:text-[35px]
//               "
//             >
//               Technology That Moves Your
//               <br className="hidden sm:block" />
//               Business Forward
//             </h1>

//             {/* DESCRIPTION */}
//             <p
//               className="
//                 mt-2 max-w-[560px]
//                 font-['Inter'] text-[11px]
//                 font-light leading-[1.4] text-white
//                 sm:mt-3 sm:text-[12px]
//                 md:text-[13px] lg:text-[14px]
//               "
//             >
//               We help businesses use technology to work smarter, solve
//               complex challenges and prepare for what comes next. From
//               software and cloud to AI and cybersecurity, our solutions are
//               built around your business needs.
//             </p>

//             {/* BUTTON + CONTACT ICONS */}
//             <div className="mt-5 sm:mt-6 md:mt-7 translate-y-2">
//               <div
//                 ref={contactRef}
//                 className="relative inline-block"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 {/* TALK TO OUR EXPERTS BUTTON */}
//                 <Link
//                   to="/talk-to-expert"
//                   className="
//                     group inline-flex items-center gap-2
//                     rounded-[5px] border border-white
//                     bg-transparent
//                     !px-[12px] !py-[8px]
//                     font-['Inter'] text-[12px]
//                     font-medium leading-none text-white
//                     transition-all duration-300
//                     hover:bg-white hover:text-[#22091f]
//                     sm:text-[13px]
//                     md:!px-[14px] md:!py-[9px] md:text-[14px]
//                   "
//                 >
//                   <span>Talk to Our Experts</span>

//                   <ArrowUpRight
//                     size={16}
//                     strokeWidth={1.8}
//                     className="
//                       shrink-0
//                       transition-transform duration-300
//                       group-hover:translate-x-1
//                       group-hover:-translate-y-1
//                     "
//                   />
//                 </Link>

//                 {/* CONTACT ICONS */}
//                 <div
//                   className={`
//                     absolute
//                     left-full
//                     top-1/2
//                     ml-2
//                     flex
//                     -translate-y-1/2
//                     items-center
//                     gap-2
//                     transition-all
//                     duration-300
//                     ${
//                       showOptions
//                         ? "visible opacity-100"
//                         : "invisible opacity-0 pointer-events-none"
//                     }
//                   `}
//                   aria-hidden={!showOptions}
//                 >
//                   {contactOptions.map(
//                     ({ label, Icon, href, external }) => (
//                       <a
//                         key={label}
//                         href={href}
//                         title={label}
//                         aria-label={label}
//                         target={external ? "_blank" : undefined}
//                         rel={
//                           external
//                             ? "noopener noreferrer"
//                             : undefined
//                         }
//                         tabIndex={showOptions ? 0 : -1}
//                         onClick={() => setShowOptions(false)}
//                         className="
//                           flex
//                           h-10 w-10
//                           sm:h-11 sm:w-11
//                           shrink-0
//                           items-center justify-center
//                           rounded-full
//                           border border-white/50
//                           bg-black/80
//                           text-white
//                           backdrop-blur-md
//                           transition-all duration-300
//                           hover:scale-110
//                           hover:border-[#730042]
//                           hover:bg-[#730042]
//                         "
//                       >
//                         <Icon size={18} />
//                       </a>
//                     )
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }