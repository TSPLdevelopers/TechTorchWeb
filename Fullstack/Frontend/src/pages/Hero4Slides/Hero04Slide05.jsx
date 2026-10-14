// import React, { useState, useEffect, useRef } from "react";
// import {
//   Phone,
//   MessageCircle,
//   Mail,
//   ArrowUpRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function LetsConnect() {
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

//   // Close icons on outside click or Escape
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
//     <section
//       className="
//         relative
//         w-full
//         overflow-hidden
//         bg-[#170b17]
//         h-[430px]
//         sm:h-[460px]
//         md:h-[500px]
//         lg:h-[540px]
//         xl:h-[570px]
//       "
//     >
//       {/* IMAGE */}
//       <img
//         src="/Slide4.3.png"
//         alt="Let's Connect"
//         className="
//           absolute
//           inset-0
//           h-full
//           w-full
//           object-fill
//         "
//       />

//       {/* CONTENT WRAPPER */}
//       <div
//         className="
//           absolute
//           inset-0
//           z-10
//           flex
//           items-center
//         "
//       >
//         <div
//           className="
//             w-[62%]
//             pl-4
//             pr-3
//             sm:w-[61%]
//             sm:pl-6
//             sm:pr-4
//             md:w-[60%]
//             md:pl-10
//             md:pr-5
//             lg:w-[59%]
//             lg:pl-[100px]
//             lg:pr-6
//             xl:w-[58%]
//             xl:pr-8
//           "
//         >
//           {/* SMALL HEADING */}
//           <p
//             className="
//               -translate-y-8
//               mb-5
//               text-[13px]
//               font-medium
//               uppercase
//               tracking-[0.01em]
//               text-white
//               sm:-translate-y-9
//               sm:mb-6
//               sm:text-[15px]
//               md:-translate-y-10
//               md:mb-7
//               md:text-[17px]
//               lg:-translate-y-11
//               lg:mb-8
//               lg:text-[18px]
//               xl:-translate-y-[60px]
//               xl:mb-9
//               xl:text-[19px]
//             "
//           >
//             LET’S CONNECT
//           </p>

//           {/* MAIN HEADING */}
//           <h1
//             className="
//               -translate-y-6
//               text-[25px]
//               font-semibold
//               font-['Plus_Jakarta_Sans']
//               leading-[1.08]
//               tracking-[-0.02em]
//               text-white
//               sm:-translate-y-7
//               sm:text-[32px]
//               md:-translate-y-8
//               md:text-[34px]
//               lg:-translate-y-9
//               lg:text-[36px]
//               xl:-translate-y-10
//               xl:text-[36px]
//             "
//           >
//             LET'S BUILD WHAT'S NEXT
//           </h1>

//           {/* QUESTION */}
//           <h2
//             className="
//               -translate-y-5
//               mt-4
//               whitespace-nowrap
//               text-[18px]
//               font-medium
//               font-['Inter']
//               leading-[1.2]
//               text-white
//               sm:-translate-y-6
//               sm:mt-5
//               sm:text-[20px]
//               md:-translate-y-7
//               md:mt-6
//               md:text-[24px]
//               lg:-translate-y-8
//               lg:mt-7
//               lg:text-[26px]
//               xl:-translate-y-9
//               xl:mt-8
//               xl:text-[26px]
//             "
//           >
//             Have a Technology Challenge?
//           </h2>

//           {/* DESCRIPTION */}
//           <p
//             className="
//               -translate-y-5
//               mt-2
//               max-w-[480px]
//               text-[13px]
//               font-['Inter']
//               font-normal
//               leading-[1.4]
//               text-white
//               sm:-translate-y-6
//               sm:mt-3
//               sm:text-[15px]
//               md:-translate-y-7
//               md:mt-3
//               md:text-[16px]
//               lg:-translate-y-8
//               lg:mt-4
//               lg:text-[17px]
//               xl:-translate-y-9
//               xl:mt-4
//               xl:text-[17px]
//             "
//           >
//             Let's understand your requirements and
//             <br className="hidden sm:block" />
//             find a practical way forward.
//           </p>

//           {/* BUTTON + CONTACT ICONS */}
//           <div
//             className="
//               mt-6
//               translate-y-5
//               sm:mt-7
//               sm:translate-y-6
//               md:mt-8
//               md:translate-y-7
//               lg:mt-9
//               lg:translate-y-8
//             "
//           >
//             <div
//               ref={contactRef}
//               className="relative inline-block"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               {/* TALK TO OUR EXPERTS BUTTON */}
//               <Link
//                 to="/talk-to-expert"
//                 className="
//                   group
//                   relative
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-[5px]
//                   border
//                   border-white
//                   bg-transparent
//                   !px-[10px]
//                   !py-[8px]
//                   text-[13px]
//                   font-medium
//                   leading-none
//                   text-white
//                   transition-all
//                   duration-300
//                   hover:bg-white
//                   hover:text-[#22091f]
//                   sm:text-[15px]
//                   md:text-[16px]
//                   lg:text-[17px]
//                 "
//               >
//                 <span>Talk to Our Experts</span>

//                 <ArrowUpRight
//                   size={18}
//                   strokeWidth={1.8}
//                   className="
//                     shrink-0
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                     group-hover:-translate-y-1
//                   "
//                 />
//               </Link>

//               {/* CONTACT ICONS — BUTTON POSITION DOES NOT CHANGE */}
//               <div
//                 className={`
//                   absolute
//                   left-full
//                   top-1/2
//                   ml-2
//                   flex
//                   -translate-y-1/2
//                   items-center
//                   gap-2
//                   transition-all
//                   duration-300
//                   ${
//                     showOptions
//                       ? "visible opacity-100"
//                       : "invisible opacity-0 pointer-events-none"
//                   }
//                 `}
//                 aria-hidden={!showOptions}
//               >
//                 {contactOptions.map(
//                   ({ label, Icon, href, external }) => (
//                     <a
//                       key={label}
//                       href={href}
//                       title={label}
//                       aria-label={label}
//                       target={external ? "_blank" : undefined}
//                       rel={
//                         external
//                           ? "noopener noreferrer"
//                           : undefined
//                       }
//                       tabIndex={showOptions ? 0 : -1}
//                       onClick={() => setShowOptions(false)}
//                       className="
//                         flex
//                         h-10
//                         w-10
//                         sm:h-11
//                         sm:w-11
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-full
//                         border
//                         border-white/50
//                         bg-[#170b17]/90
//                         text-white
//                         backdrop-blur-md
//                         transition-all
//                         duration-300
//                         hover:scale-110
//                         hover:border-[#730042]
//                         hover:bg-[#730042]
//                       "
//                     >
//                       <Icon size={18} />
//                     </a>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }