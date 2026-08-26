import React from "react";

export default function ERPApproach() {
  return (
    <section className="w-full overflow-hidden bg-[#F8F7F0] text-[#191919]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1240px]
          px-5
          py-8
          sm:px-7
          sm:py-9
          md:px-9
          md:py-10
          lg:px-10
          lg:py-11
          xl:px-12
        "
      >
        {/* ================= TOP LABEL ================= */}
        <p
          className="
            font-['Plus_Jakarta_Sans']
            text-[12px]
            font-bold
            uppercase
            leading-none
            tracking-[0.01em]
            text-[#151515]
            sm:text-[13px]
          "
        >
          OUR ERP APPROACH
        </p>

        {/* ================= MAIN GRID ================= */}
        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-8

            sm:mt-7

            md:mt-7
            md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]
            md:gap-8

            lg:mt-8
            lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)]
            lg:gap-10

            xl:gap-12
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="min-w-0">

            {/* HEADING */}
            <h1
              className="
                font-['Plus_Jakarta_Sans']
                text-[32px]
                font-semibold
                leading-[1.06]
                tracking-[-0.045em]

                sm:text-[35px]
                md:text-[37px]
                lg:text-[40px]
                xl:text-[42px]
              "
            >
              A Business That
              <br />
              <span className="text-[#850052]">
                Works as One
              </span>
            </h1>

            {/* ================= PARAGRAPH 1 ================= */}
            <p
              className="
                mt-6
                max-w-[550px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.5]
                text-[#303030]

                sm:text-[16px]
                md:text-[16px]
                lg:text-[17px]
                lg:leading-[1.5]
              "
            >
              As businesses grow, their operations become more connected —
              finance, inventory, HRMS, Engage, Pay and everyday processes all
              depend on each other. When these functions work across separate
              systems, teams can spend more time managing information than
              using it.
            </p>

            {/* ================= PARAGRAPH 2 ================= */}
            <p
              className="
                mt-6
                max-w-[550px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.5]
                text-[#303030]

                sm:text-[16px]
                md:text-[16px]
                lg:text-[17px]
                lg:leading-[1.5]
              "
            >
              An ERP brings these essential business functions together in one
              connected environment. It gives teams better visibility, helps
              information move more efficiently across the organisation and
              creates a more consistent way of working.
            </p>

            {/* ================= PARAGRAPH 3 ================= */}
            <p
              className="
                mt-6
                max-w-[550px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.5]
                text-[#303030]

                sm:text-[16px]
                md:text-[16px]
                lg:text-[17px]
                lg:leading-[1.5]
              "
            >
              At TechTorch, we take a practical approach to ERP. We first
              understand how your business operates, where processes can be
              improved and what your teams need to work more effectively. From
              there, we help shape a solution around your business priorities.
            </p>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}
          <div
            className="
              relative
              min-w-0
              flex
              flex-col
              items-center
              md:items-center
            "
          >
            {/* ================= ERP DIAGRAM ================= */}
            <div
              className="
                relative
                h-[390px]
                w-full
                max-w-[500px]

                sm:h-[410px]
                md:h-[420px]
                lg:h-[440px]
                xl:h-[460px]
              "
            >
              {/* ================= CONNECTING LINES ================= */}

              {/* Finance line */}
              <div
                className="
                  absolute
                  left-[43%]
                  top-[25%]
                  h-[65px]
                  w-px
                  origin-bottom
                  -rotate-[42deg]
                  border-l
                  border-dotted
                  border-[#B96A99]
                "
              />

              {/* Payroll line */}
              <div
                className="
                  absolute
                  left-[57%]
                  top-[25%]
                  h-[65px]
                  w-px
                  origin-bottom
                  rotate-[42deg]
                  border-l
                  border-dotted
                  border-[#B96A99]
                "
              />

              {/* Inventory line */}
              <div
                className="
                  absolute
                  left-[39%]
                  top-[47%]
                  h-[65px]
                  w-px
                  origin-top
                  rotate-[68deg]
                  border-l
                  border-dotted
                  border-[#B96A99]
                "
              />

              {/* Engage line */}
              <div
                className="
                  absolute
                  left-[61%]
                  top-[47%]
                  h-[65px]
                  w-px
                  origin-top
                  -rotate-[68deg]
                  border-l
                  border-dotted
                  border-[#B96A99]
                "
              />

              {/* Talent line */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[59%]
                  h-[65px]
                  w-px
                  border-l
                  border-dotted
                  border-[#B96A99]
                "
              />

              {/* ================= FINANCE ================= */}
              <ERPItem
                title="Finance"
                subtitle="(Accounting)"
                icon={<RupeeIcon />}
                className="
                  left-[26%]
                  top-[4%]
                  -translate-x-1/2
                "
              />

              {/* ================= PAYROLL ================= */}
              <ERPItem
                title="Payroll"
                subtitle="(Payroll)"
                icon={<WalletIcon />}
                className="
                  left-[74%]
                  top-[7%]
                  -translate-x-1/2
                "
              />

              {/* ================= INVENTORY ================= */}
              <ERPItem
                title="Inventory"
                subtitle="(Stock)"
                icon={<InventoryIcon />}
                className="
                  left-[20%]
                  top-[37%]
                  -translate-x-1/2
                "
              />

              {/* ================= ENGAGE ================= */}
              <ERPItem
                title="Engage"
                subtitle="(CRM)"
                icon={<UsersIcon />}
                className="
                  left-[80%]
                  top-[42%]
                  -translate-x-1/2
                "
              />

              {/* ================= TALENT ================= */}
              <ERPItem
                title="Talent"
                subtitle="(HRMS)"
                icon={<TalentIcon />}
                className="
                  left-1/2
                  top-[61%]
                  -translate-x-1/2
                "
              />

              {/* ================= CENTER TX ================= */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[34%]
                  flex
                  h-[96px]
                  w-[96px]
                  -translate-x-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  shadow-sm

                  sm:h-[104px]
                  sm:w-[104px]

                  lg:h-[110px]
                  lg:w-[110px]
                "
              >
                <div
                  className="
                    font-['Arial']
                    text-[43px]
                    font-black
                    leading-none
                    tracking-[-0.12em]
                    text-white

                    sm:text-[47px]
                    lg:text-[50px]
                  "
                >
                  T<span className="text-[#850052]">X</span>
                </div>
              </div>
            </div>

            {/* =====================================================
                GOAL CARD
            ===================================================== */}
            <div
              className="
                -mt-2
                w-full
                max-w-[390px]
                rounded-[8px]
                bg-[#FCECF6]
                px-6
                py-5

                sm:px-7
                sm:py-6

                md:self-end

                lg:max-w-[400px]
              "
            >
              <p
                className="
                  font-['Inter']
                  text-[16px]
                  font-semibold
                  leading-[1.4]
                  text-[#151515]

                  sm:text-[17px]
                  lg:text-[18px]
                "
              >
                The goal is simple:
                <span className="font-normal">
                  {" "}
                  connect the business, simplify the way people work and
                  create a stronger foundation for growth.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   ERP ITEM
============================================================ */

function ERPItem({ title, subtitle, icon, className = "" }) {
  return (
    <div
      className={`
        absolute
        flex
        flex-col
        items-center
        text-center
        ${className}
      `}
    >
      <div className="mb-1 whitespace-nowrap">
        <p
          className="
            font-['Inter']
            text-[16px]
            font-bold
            leading-[1.15]
            text-[#151515]

            sm:text-[17px]
            lg:text-[18px]
          "
        >
          {title}
        </p>

        <p
          className="
            mt-0.5
            font-['Inter']
            text-[12px]
            font-medium
            leading-[1.1]
            text-[#151515]

            sm:text-[13px]
          "
        >
          {subtitle}
        </p>
      </div>

      <div
        className="
          flex
          h-[64px]
          w-[64px]
          items-center
          justify-center
          rounded-full
          bg-[#850052]
          text-white

          sm:h-[68px]
          sm:w-[68px]

          lg:h-[72px]
          lg:w-[72px]
        "
      >
        {icon}
      </div>
    </div>
  );
}


/* ============================================================
   ICONS
============================================================ */

function RupeeIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-[34px] w-[34px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 10h20" />
      <path d="M14 17h20" />
      <path d="M18 10c7 0 12 4 12 9s-5 9-12 9h-3" />
      <path d="M18 28l12 11" />
    </svg>
  );
}


function WalletIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-[34px] w-[34px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="7" y="12" width="34" height="26" rx="4" />
      <path d="M7 18h34" />
      <path d="M31 26h8" />
      <circle cx="31" cy="26" r="1.5" fill="currentColor" />
      <path d="M13 12v-3h21l4 3" />
    </svg>
  );
}


function InventoryIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-[34px] w-[34px]"
      fill="currentColor"
    >
      <path d="M7 38h34v3H7z" />
      <path d="M10 18h8v20h-8z" />
      <path d="M20 12h8v26h-8z" />
      <path d="M30 22h8v16h-8z" />
    </svg>
  );
}


function UsersIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-[35px] w-[35px]"
      fill="currentColor"
    >
      <circle cx="18" cy="16" r="7" />
      <circle cx="32" cy="18" r="6" />
      <path d="M6 37c0-7 5-11 12-11s12 4 12 11z" />
      <path d="M28 28c6 0 11 3 12 9H28z" />
    </svg>
  );
}


function TalentIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-[35px] w-[35px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="13" r="6" fill="currentColor" />
      <circle cx="12" cy="22" r="5" fill="currentColor" />
      <circle cx="36" cy="22" r="5" fill="currentColor" />
      <path d="M14 36c0-7 4-11 10-11s10 4 10 11" />
      <path d="M6 36c0-5 3-8 7-8" />
      <path d="M42 36c0-5-3-8-7-8" />
      <rect x="18" y="31" width="12" height="8" rx="2" />
    </svg>
  );
}