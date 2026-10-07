import React, {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { Link, useLocation } from "react-router-dom";

import logo from "../assets/TechTorchLogo.png";

import {
  NavMenuProvider,
  useNavMenu,
} from "./NavbarItem/NavMenuContext";

import NavAboutUs from "./NavbarItem/NavAboutUs";
import NavCapabilities from "./NavbarItem/NavCapabilities";
import NavIndustries from "./NavbarItem/NavIndustries";
import NavInsights from "./NavbarItem/NavInsights";
import NavCareers from "./NavbarItem/NavCareers";


/* =========================================================
   MAIN NAV LINKS
========================================================= */

const navLinks = [
  "About Us",
  "Capabilities",
  "Industries",
  "Insights",
  "Careers",
  "Contact Us",
];


/* =========================================================
   BREADCRUMB ROUTES

   Har breadcrumb item:
   - label = jo screen par dikhega
   - path  = click karne par kaha jayega
========================================================= */

const breadcrumbRoutes = {

  /* =======================================================
     ABOUT US
  ======================================================= */

  "/about-us": [
    {
      label: "About Us",
      path: "/about-us",
    },
  ],


  /* =======================================================
     CAPABILITIES
  ======================================================= */

  "/capabilities": [
    {
      label: "Capabilities",
      path: "/capabilities",
    },
  ],

  "/platform": [
    {
      label: "Capabilities",
      path: "/capabilities",
    },
    {
      label: "Platform",
      path: "/platform",
    },
  ],

  "/digitalsolution": [
    {
      label: "Capabilities",
      path: "/capabilities",
    },
    {
      label: "Digital Solution",
      path: "/digitalsolution",
    },
  ],

  "/OurService": [
    {
      label: "Capabilities",
      path: "/capabilities",
    },
    {
      label: "Our Service",
      path: "/OurService",
    },
  ],

  "/business-process-outsourcing": [
    {
      label: "Capabilities",
      path: "/capabilities",
    },
    {
      label: "Business Process Outsourcing",
      path: "/business-process-outsourcing",
    },
  ],

  "/ItAugmentation": [
    {
      label: "Capabilities",
      path: "/capabilities",
    },
    {
      label: "IT Augmentation",
      path: "/ItAugmentation",
    },
  ],

  "/ArtificialIntelligent": [
    {
      label: "Capabilities",
      path: "/capabilities",
    },
    {
      label: "Artificial Intelligence",
      path: "/ArtificialIntelligent",
    },
  ],


  /* =======================================================
     IT AUGMENTATION - CHILD PAGES
  ======================================================= */

  "/ItAugmentation/bench-hiring": [
    {
      label: "Capabilities",
      path: "/capabilities",
    },
    {
      label: "IT Augmentation",
      path: "/ItAugmentation",
    },
    {
      label: "Bench Hiring",
      path: "/ItAugmentation/bench-hiring",
    },
  ],

  "/ItAugmentation/it-staffing": [
    {
      label: "Capabilities",
      path: "/capabilities",
    },
    {
      label: "IT Augmentation",
      path: "/ItAugmentation",
    },
    {
      label: "IT Staffing",
      path: "/ItAugmentation/it-staffing",
    },
  ],

  "/ItAugmentation/staff-augmentation": [
    {
      label: "Capabilities",
      path: "/capabilities",
    },
    {
      label: "IT Augmentation",
      path: "/ItAugmentation",
    },
    {
      label: "Staff Augmentation",
      path: "/ItAugmentation/staff-augmentation",
    },
  ],


  /* =======================================================
     INDUSTRIES
  ======================================================= */

  "/industries": [
    {
      label: "Industries",
      path: "/industries",
    },
  ],

  "/industries/healthcare": [
    {
      label: "Industries",
      path: "/industries",
    },
    {
      label: "Healthcare",
      path: "/industries/healthcare",
    },
  ],

  "/industries/education": [
    {
      label: "Industries",
      path: "/industries",
    },
    {
      label: "Education",
      path: "/industries/education",
    },
  ],

  "/industries/finance": [
    {
      label: "Industries",
      path: "/industries",
    },
    {
      label: "Finance",
      path: "/industries/finance",
    },
  ],

  "/industries/manufacturing": [
    {
      label: "Industries",
      path: "/industries",
    },
    {
      label: "Manufacturing",
      path: "/industries/manufacturing",
    },
  ],


  /* =======================================================
     INSIGHTS
  ======================================================= */

  "/insights": [
    {
      label: "Insights",
      path: "/insights",
    },
  ],

  "/insights/views": [
    {
      label: "Insights",
      path: "/insights",
    },
    {
      label: "Views",
      path: "/insights/views",
    },
  ],

  "/insights/articles": [
    {
      label: "Insights",
      path: "/insights",
    },
    {
      label: "Articles",
      path: "/insights/articles",
    },
  ],

  "/insights/blogs": [
    {
      label: "Insights",
      path: "/insights",
    },
    {
      label: "Blogs",
      path: "/insights/blogs",
    },
  ],


  /* =======================================================
     CAREERS
  ======================================================= */

  "/careers": [
    {
      label: "Careers",
      path: "/careers",
    },
  ],


  /* =======================================================
     CONTACT
  ======================================================= */

  "/contact-us": [
    {
      label: "Contact Us",
      path: "/contact-us",
    },
  ],
};


/* =========================================================
   SEARCH ICON
========================================================= */

function SearchIcon() {
  return (
    <svg
      width="20"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#222"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
      />

      <line
        x1="21"
        y1="21"
        x2="16.65"
        y2="16.65"
      />
    </svg>
  );
}


/* =========================================================
   MOBILE MENU ICON
========================================================= */

function MenuIcon({ open }) {
  if (open) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#222"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <line
          x1="18"
          y1="6"
          x2="6"
          y2="18"
        />

        <line
          x1="6"
          y1="6"
          x2="18"
          y2="18"
        />
      </svg>
    );
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#222"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
      />

      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
      />

      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
      />
    </svg>
  );
}


/* =========================================================
   CHEVRON
========================================================= */

function ChevronRightIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}


/* =========================================================
   BREADCRUMB COMPONENT
========================================================= */

function Breadcrumb({
  breadcrumbRef,
  navHeight,
}) {
  const location = useLocation();

  const pathname = location.pathname;

  /* Home page par secondary navbar nahi */
  if (pathname === "/") {
    return null;
  }

  /*
    Exact route ke according breadcrumb nikalega.
  */
  const breadcrumbs =
    breadcrumbRoutes[pathname] || [];


  /*
    Agar route map mein nahi hai,
    to basic breadcrumb generate hoga.
  */
  let finalBreadcrumbs =
    breadcrumbs;


  if (finalBreadcrumbs.length === 0) {
    const parts = pathname
      .split("/")
      .filter(Boolean);

    finalBreadcrumbs = parts.map(
      (part, index) => {
        const path =
          "/" +
          parts
            .slice(0, index + 1)
            .join("/");

        const label =
          part
            .replace(/-/g, " ")
            .replace(
              /\b\w/g,
              (char) =>
                char.toUpperCase()
            );

        return {
          label,
          path,
        };
      }
    );
  }


  return (
    <div
      ref={breadcrumbRef}
      style={{
        top: navHeight,
      }}
      className="
        fixed
        left-0

        w-full

        z-[990]

        bg-[#F5F1E8]

        border-b
        border-gray-200
      "
    >
      <div
        className="
          w-full

          px-4
          sm:px-6
          md:px-10
          lg:px-[100px]

          py-3.5
          sm:py-4
          md:py-[17px]
        "
      >
        <div
          className="
            flex
            items-center
            flex-wrap

            gap-x-2
            gap-y-1

            text-sm
            sm:text-[15px]
            md:text-base

            overflow-hidden
          "
        >

          {/* =================================================
              HOME
          ================================================= */}

          <Link
            to="/"
            className="
              font-semibold

              text-[#1B1B2A]

              no-underline

              whitespace-nowrap

              transition-colors
              duration-200

              hover:text-[#730042]
            "
          >
            Home
          </Link>


          {/* =================================================
              BREADCRUMB ITEMS
          ================================================= */}

          {finalBreadcrumbs.map(
            (item, index) => {

              const isLast =
                index ===
                finalBreadcrumbs.length - 1;

              return (
                <React.Fragment
                  key={`${item.path}-${index}`}
                >

                  {/* ARROW */}

                  <span
                    className="
                      flex
                      items-center

                      flex-shrink-0

                      text-gray-500
                    "
                  >
                    <ChevronRightIcon />
                  </span>


                  {/* CLICKABLE BREADCRUMB */}

                  <Link
                    to={item.path}
                    className={`
                      font-semibold

                      no-underline

                      whitespace-nowrap

                      transition-colors
                      duration-200

                      ${
                        isLast
                          ? "text-[#730042]"
                          : "text-[#1B1B2A] hover:text-[#730042]"
                      }
                    `}
                  >
                    {item.label}
                  </Link>

                </React.Fragment>
              );
            }
          )}

        </div>
      </div>
    </div>
  );
}


/* =========================================================
   NAVBAR INNER
========================================================= */

function NavbarInner() {
  const {
    setActiveMenu,
    navHeight,
    setNavHeight,
  } = useNavMenu();

  const navRef = useRef(null);

  const breadcrumbRef =
    useRef(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [breadcrumbHeight, setBreadcrumbHeight] =
    useState(0);

  const location = useLocation();


  /* =======================================================
     MAIN NAVBAR HEIGHT
  ======================================================= */

  useLayoutEffect(() => {
    const measureNavbar = () => {
      if (!navRef.current) {
        return;
      }

      const height =
        navRef.current.getBoundingClientRect()
          .height;

      setNavHeight(height);
    };

    measureNavbar();

    window.addEventListener(
      "resize",
      measureNavbar
    );

    return () => {
      window.removeEventListener(
        "resize",
        measureNavbar
      );
    };
  }, [setNavHeight]);


  /* =======================================================
     BREADCRUMB HEIGHT
  ======================================================= */

  useLayoutEffect(() => {
    const measureBreadcrumb = () => {
      if (!breadcrumbRef.current) {
        setBreadcrumbHeight(0);
        return;
      }

      const height =
        breadcrumbRef.current.getBoundingClientRect()
          .height;

      setBreadcrumbHeight(height);
    };

    measureBreadcrumb();

    window.addEventListener(
      "resize",
      measureBreadcrumb
    );

    return () => {
      window.removeEventListener(
        "resize",
        measureBreadcrumb
      );
    };
  }, [
    location.pathname,
    navHeight,
  ]);


  /* =======================================================
     ROUTE CHANGE
  ======================================================= */

  useLayoutEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);

    /*
      New page open hone par
      page ko top par le jayenge.
    */
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [
    location.pathname,
    setActiveMenu,
  ]);


  const isHomePage =
    location.pathname === "/";


  return (
    <>
      {/* ===================================================
          MAIN NAVBAR

          ALWAYS VISIBLE
      =================================================== */}

      <nav
        ref={navRef}
        style={{
          fontFamily:
            "Plus Jakarta Sans, 'Times New Roman', serif",
        }}
        className="
          fixed

          top-0
          left-0

          w-full

          z-[1000]

          flex
          items-center
          justify-between

          px-4
          sm:px-6
          md:px-10
          lg:px-[100px]

          py-2.5
          lg:py-3

          border-b
          border-gray-200

          bg-white
        "
      >

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          className="
            flex
            items-center

            gap-2.5

            cursor-pointer

            flex-shrink-0
          "
          aria-label="TechTorch Solutions Home"
        >
          <img
            src={logo}
            alt="TechTorch Solutions"
            className="
              h-12
              sm:h-13
              lg:h-13

              w-auto

              object-contain
            "
          />
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <ul
          onMouseLeave={() =>
            setActiveMenu(null)
          }
          className="
            hidden
            lg:flex

            items-center

            gap-8
            xl:gap-12

            list-none

            ml-auto

            mr-6
            xl:mr-10
          "
        >

          {navLinks.map(
            (label) => {

              /* ABOUT US */

              if (
                label === "About Us"
              ) {
                return (
                  <li key={label}>
                    <NavAboutUs />
                  </li>
                );
              }


              /* CAPABILITIES */

              if (
                label === "Capabilities"
              ) {
                return (
                  <li key={label}>
                    <NavCapabilities />
                  </li>
                );
              }


              /* INDUSTRIES */

              if (
                label === "Industries"
              ) {
                return (
                  <li key={label}>
                    <NavIndustries />
                  </li>
                );
              }


              /* INSIGHTS */

              if (
                label === "Insights"
              ) {
                return (
                  <li key={label}>
                    <NavInsights />
                  </li>
                );
              }


              /* CAREERS */

              if (
                label === "Careers"
              ) {
                return (
                  <li key={label}>
                    <NavCareers />
                  </li>
                );
              }


              /* CONTACT US */

              return (
                <li key={label}>
                  <Link
                    to="/contact-us"
                    className="
                      text-[17px]

                      text-gray-900

                      no-underline

                      transition-colors
                      duration-200

                      hover:text-[#8a1538]
                    "
                  >
                    {label}
                  </Link>
                </li>
              );
            }
          )}

        </ul>


        {/* =================================================
            SEARCH
        ================================================= */}

        <div
          className="
            hidden
            lg:flex

            items-center
          "
        >
          <button
            type="button"
            aria-label="Search"
            className="
              flex
              items-center
              justify-center

              bg-transparent

              border-none

              cursor-pointer

              p-0
            "
          >
            <SearchIcon />
          </button>
          <AccountButton />
        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          aria-label={
            mobileOpen
              ? "Close menu"
              : "Open menu"
          }
          onClick={() =>
            setMobileOpen(
              (value) => !value
            )
          }
          className="
            lg:hidden

            flex
            items-center
            justify-center

            bg-transparent

            border-none

            cursor-pointer

            p-1
          "
        >
          <MenuIcon
            open={mobileOpen}
          />
        </button>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        {mobileOpen && (
          <div
            style={{
              top: navHeight,
            }}
            className="
              lg:hidden

              absolute

              left-0
              right-0

              w-full

              bg-white

              shadow-2xl

              z-[999]

              max-h-[80vh]

              overflow-y-auto

              border-t
              border-gray-100
            "
          >
            <ul
              className="
                flex
                flex-col

                divide-y
                divide-gray-100
              "
            >

              {/* ABOUT US */}

              <li>
                <Link
                  to="/about-us"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="
                    block

                    px-6
                    py-4

                    text-[17px]

                    text-gray-900

                    hover:text-[#8a1538]
                    hover:bg-gray-50

                    transition-colors
                  "
                >
                  About Us
                </Link>
              </li>


              {/* CAPABILITIES */}

              <li>
                <Link
                  to="/capabilities"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="
                    block

                    px-6
                    py-4

                    text-[17px]

                    text-gray-900

                    hover:text-[#8a1538]
                    hover:bg-gray-50

                    transition-colors
                  "
                >
                  Capabilities
                </Link>
              </li>


              {/* INDUSTRIES */}

              <li>
                <Link
                  to="/industries"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="
                    block

                    px-6
                    py-4

                    text-[17px]

                    text-gray-900

                    hover:text-[#8a1538]
                    hover:bg-gray-50

                    transition-colors
                  "
                >
                  Industries
                </Link>
              </li>


              {/* INSIGHTS */}

              <li>
                <Link
                  to="/insights"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="
                    block

                    px-6
                    py-4

                    text-[17px]

                    text-gray-900

                    hover:text-[#8a1538]
                    hover:bg-gray-50

                    transition-colors
                  "
                >
                  Insights
                </Link>
              </li>


              {/* CAREERS */}

              <li>
                <Link
                  to="/careers"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="
                    block

                    px-6
                    py-4

                    text-[17px]

                    text-gray-900

                    hover:text-[#8a1538]
                    hover:bg-gray-50

                    transition-colors
                  "
                >
                  Careers
                </Link>
              </li>


              {/* CONTACT */}

              <li>
                <Link
                  to="/contact-us"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="
                    block

                    px-6
                    py-4

                    text-[17px]

                    text-gray-900

                    hover:text-[#8a1538]
                    hover:bg-gray-50

                    transition-colors
                  "
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>
        )}

      </nav>


      {/* ===================================================
          SECONDARY NAVBAR / BREADCRUMB

          ALWAYS VISIBLE
      =================================================== */}

      {!isHomePage && (
        <Breadcrumb
          breadcrumbRef={
            breadcrumbRef
          }
          navHeight={
            navHeight
          }
        />
      )}


      {/* ===================================================
          PAGE TOP SPACING

          Main navbar + breadcrumb ke liye space.
      =================================================== */}

      <div
        style={{
          height:
            navHeight +
            (!isHomePage
              ? breadcrumbHeight
              : 0),
        }}
      />
    </>
  );
}


/* =========================================================
   FINAL NAVBAR
========================================================= */

export default function Navbar() {
  return (
    <NavMenuProvider>
      <NavbarInner />
    </NavMenuProvider>
  );
}