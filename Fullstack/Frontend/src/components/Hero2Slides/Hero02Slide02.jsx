import React from "react";

export default function ERPApproach() {
  return (
    <section
      className="
        w-full
        min-h-[480px]
        sm:min-h-[460px]
        md:min-h-[500px]
        lg:min-h-[520px]
        overflow-hidden
        bg-[#F8F7F0]
        text-[#191919]
      "
      style={{ backgroundColor: "#F8F7F0" }}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-4
          py-6

          sm:px-5
          sm:py-5

          md:px-7
          md:py-6

          lg:px-10
          lg:py-8

          xl:px-12
        "
      >
        {/* ================= TOP LABEL ================= */}
        <p
          className="
          md:-translate-x-2 lg:-translate-x-10 xl:-translate-x-16
            font-['Plus_Jakarta_Sans']
            font-bold
            uppercase
            leading-none
            tracking-[0.01em]
            text-[#151515]
            text-[13px]
            sm:text-[15px]
            md:text-[16px]
            lg:text-[17px]
          "
        >
          OUR ERP APPROACH
        </p>

        {/* ================= MAIN CONTENT ================= */}
        {/* Mobile-first: single column, stacked. From md up: two columns side by side. */}
        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-6

            sm:mt-6
            sm:gap-7

            md:mt-6
            md:grid-cols-2
            md:gap-7

            lg:mt-7
            lg:gap-8

            xl:gap-10
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="min-w-0 order-1 md:order-1 md:-translate-x-2 lg:-translate-x-10 xl:-translate-x-16">
            <h1
              className="
                font-['Plus_Jakarta_Sans']
                text-[26px]
                font-semibold
                leading-[1.1]
                tracking-[-0.03em]

                xs:text-[24px]
                sm:text-[28px]
                md:text-[36px]
                lg:text-[40px]
                xl:text-[32px]
              "
            >
              A Business That
              <br />
              <span className="text-[#850052]">Works as One</span>
            </h1>

            <p
              className="
                mt-4
                max-w-[550px]
                font-['Inter']
                text-[13px]
                font-normal
                leading-[1.55]
                text-[#303030]

                sm:mt-5
                sm:text-[13px]

                md:mt-5
                md:text-[15px]

                lg:text-[16px]
              "
            >
              As businesses grow, their operations become more connected —
              finance, inventory, HRMS, Engage, Pay and everyday processes all
              depend on each other. When these functions work across separate
              systems, teams can spend more time managing information than
              using it.
            </p>

            <p
              className="
                mt-4
                max-w-[550px]
                font-['Inter']
                text-[13px]
                font-normal
                leading-[1.55]
                text-[#303030]

                sm:mt-5
                sm:text-[13px]

                md:mt-5
                md:text-[15px]

                lg:text-[16px]
              "
            >
              An ERP brings these essential business functions together in one
              connected environment. It gives teams better visibility, helps
              information move more efficiently across the organisation and
              creates a more consistent way of working.
            </p>

            <p
              className="
                mt-4
                max-w-[550px]
                font-['Inter']
                text-[13px]
                font-normal
                leading-[1.55]
                text-[#303030]

                sm:mt-5
                sm:text-[13px]

                md:mt-5
                md:text-[15px]

                lg:text-[16px]
              "
            >
              At TechTorch, we take a practical approach to ERP. We first
              understand how your business operates, where processes can be
              improved and what your teams need to work more effectively. From
              there, we help shape a solution around your business priorities.
            </p>
          </div>

          {/* ================= RIGHT DIAGRAM ================= */}
          <div
            className="
              relative
              min-w-0
              w-full
              flex
              flex-col
              items-center
              order-2 md:order-2

              md:items-center
              md:translate-x-2

              lg:translate-x-14
              xl:translate-x-32

              lg:-translate-y-5
              xl:-translate-y-6
            "
          >
            <div
              className="
                relative
                w-full
                mx-auto
                aspect-[4/3]
                max-w-[280px]

                xs:max-w-[300px]
                sm:h-[300px]
                sm:max-w-[350px]
                sm:aspect-auto

                md:h-[370px]
                md:max-w-[450px]

                lg:h-[350px]
                lg:max-w-[425px]

                xl:h-[370px]
                xl:max-w-[445px]
              "
            >
              {/* ================= CONNECTING LINES ================= */}

              {/* Finance → TX */}
              <div
                className="
                  absolute
                  left-[44%]
                  top-[27%]
                  h-[40px]
                  w-px
                  origin-bottom
                  -rotate-[42deg]
                  border-l
                  border-dotted
                  border-[#B96A99]
                "
              />

              {/* Payroll → TX */}
              <div
                className="
                  absolute
                  left-[56%]
                  top-[27%]
                  h-[40px]
                  w-px
                  origin-bottom
                  rotate-[42deg]
                  border-l
                  border-dotted
                  border-[#B96A99]
                "
              />

              {/* Inventory → TX */}
              <div
                className="
                  absolute
                  left-[40%]
                  top-[45%]
                  h-[40px]
                  w-px
                  origin-top
                  rotate-[68deg]
                  border-l
                  border-dotted
                  border-[#B96A99]
                "
              />

              {/* Engage → TX */}
              <div
                className="
                  absolute
                  left-[60%]
                  top-[45%]
                  h-[40px]
                  w-px
                  origin-top
                  -rotate-[68deg]
                  border-l
                  border-dotted
                  border-[#B96A99]
                "
              />

              {/* Talent → TX */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[56%]
                  h-[40px]
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
                icon={<FinanceIcon />}
                className="
                  left-[30%]
                  top-[5%]
                  -translate-x-1/2
                "
              />

              {/* ================= PAYROLL ================= */}
              <ERPItem
                title="Payroll"
                subtitle="(Payroll)"
                icon={<WalletIcon />}
                className="
                  left-[70%]
                  top-[8%]
                  -translate-x-1/2
                "
              />

              {/* ================= INVENTORY ================= */}
              <ERPItem
                title="Inventory"
                subtitle="(Stock)"
                icon={<InventoryIcon />}
                className="
                  left-[25%]
                  top-[39%]
                  -translate-x-1/2
                "
              />

              {/* ================= ENGAGE ================= */}
              <ERPItem
                title="Engage"
                subtitle="(CRM)"
                icon={<UsersIcon />}
                className="
                  left-[75%]
                  top-[43%]
                  -translate-x-1/2
                "
              />

              {/* ================= TALENT ================= */}
              <ERPItem
                title="Talent"
                subtitle="(HRMS)"
                icon={<TalentIcon />}
                textBelow
                className="
                  left-1/2
                  top-[59%]
                  -translate-x-1/2
                "
              />

              {/* ================= CENTER TORCHX LOGO ================= */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[34%]
                  z-[3]
                  flex
                  h-[46px]
                  w-[46px]
                  -translate-x-1/2
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-white

                  xs:h-[52px]
                  xs:w-[52px]

                  sm:h-[66px]
                  sm:w-[66px]

                  md:h-[80px]
                  md:w-[80px]

                  lg:h-[80px]
                  lg:w-[80px]

                  xl:h-[84px]
                  xl:w-[84px]
                "
              >
                <img
                  src="/TorchX Favicon.png"
                  alt="TorchX"
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>
            </div>

            {/* ================= GOAL CARD ================= */}
            <div
              className="
                mt-4
                w-full
                max-w-[320px]
                rounded-[8px]
                bg-[#FCECF6]
                px-3
                py-2.5

                sm:mt-4
                sm:max-w-[300px]
                sm:px-4
                sm:py-3

                md:-mt-4
                md:max-w-[390px]
                md:px-5
                md:py-4

                lg:-mt-1
                lg:max-w-[400px]
                lg:translate-x-6

                xl:translate-x-4
              "
            >
              <p
                className="
                  font-['Inter']
                  text-[11px]
                  font-semibold
                  leading-[1.4]
                  text-[#151515]

                  sm:text-[11px]
                  md:text-[16px]
                  lg:text-[16px]
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

function ERPItem({
  title,
  subtitle,
  icon,
  className = "",
  textBelow = false,
}) {
  return (
    <div
      className={`
        absolute
        z-[2]
        flex
        flex-col
        items-center
        text-center
        ${className}
      `}
    >
      {!textBelow && (
        <div className="mb-1 whitespace-nowrap">
          <p
            className="
              font-['Inter']
              text-[9px]
              font-bold
              leading-[1.15]
              text-[#151515]

              xs:text-[10px]
              sm:text-[12px]
              md:text-[16px]
              lg:text-[17px]
            "
          >
            {title}
          </p>

          <p
            className="
              mt-0.5
              font-['Inter']
              text-[7px]
              font-medium
              leading-[1.1]
              text-[#151515]

              xs:text-[8px]
              sm:text-[9px]
              md:text-[12px]
              lg:text-[13px]
            "
          >
            {subtitle}
          </p>
        </div>
      )}

      {/* ICON CIRCLE */}
      <div
        className="
          flex
          h-[32px]
          w-[32px]
          items-center
          justify-center
          rounded-full
          bg-[#850052]
          text-white

          xs:h-[38px]
          xs:w-[38px]

          sm:h-[45px]
          sm:w-[45px]

          md:h-[58px]
          md:w-[58px]

          lg:h-[62px]
          lg:w-[62px]
        "
      >
        {icon}
      </div>

      {textBelow && (
        <div className="mt-1 whitespace-nowrap">
          <p
            className="
              font-['Inter']
              text-[9px]
              font-bold
              leading-[1.15]
              text-[#151515]

              xs:text-[10px]
              sm:text-[12px]
              md:text-[16px]
              lg:text-[17px]
            "
          >
            {title}
          </p>

          <p
            className="
              mt-0.5
              font-['Inter']
              text-[7px]
              font-medium
              leading-[1.1]
              text-[#151515]

              xs:text-[8px]
              sm:text-[9px]
              md:text-[12px]
              lg:text-[13px]
            "
          >
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   FINANCE ICON
============================================================ */

function FinanceIcon() {
  return (
    <div
      className="
        flex
        h-[21px]
        w-[21px]
        items-center
        justify-center
        rounded-full
        bg-white

        xs:h-[24px]
        xs:w-[24px]

        sm:h-[28px]
        sm:w-[28px]

        md:h-[34px]
        md:w-[34px]

        lg:h-[38px]
        lg:w-[38px]
      "
    >
      <span
        className="
          font-['Arial']
          text-[15px]
          font-bold
          leading-none
          text-[#850052]

          xs:text-[17px]
          sm:text-[20px]
          md:text-[25px]
          lg:text-[28px]
        "
      >
        ₹
      </span>
    </div>
  );
}

/* ============================================================
   PAYROLL ICON
============================================================ */

function WalletIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="
        h-[19px]
        w-[19px]

        xs:h-[22px]
        xs:w-[22px]

        sm:h-[26px]
        sm:w-[26px]

        md:h-[31px]
        md:w-[31px]

        lg:h-[34px]
        lg:w-[34px]
      "
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 15.5C8 13.6 9.6 12 11.5 12H35C37.2 12 39 13.8 39 16V36C39 38.2 37.2 40 35 40H12C9.8 40 8 38.2 8 36V15.5Z"
        fill="currentColor"
      />

      <path
        d="M8 18H34.5C37.5 18 40 20 40 22.5V32H30C26.7 32 24 29.3 24 26C24 22.7 26.7 20 30 20H40"
        fill="currentColor"
      />

      <path
        d="M30 23H39V29H30C28.3 29 27 27.7 27 26C27 24.3 28.3 23 30 23Z"
        fill="#850052"
      />

      <circle cx="32" cy="26" r="1.8" fill="white" />

      <path
        d="M12 12V9C12 7.9 12.9 7 14 7H33L38 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================================================
   INVENTORY ICON
============================================================ */

function InventoryIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="
        h-[20px]
        w-[20px]

        xs:h-[23px]
        xs:w-[23px]

        sm:h-[27px]
        sm:w-[27px]

        md:h-[32px]
        md:w-[32px]

        lg:h-[35px]
        lg:w-[35px]
      "
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 20.5L24 11L41 20.5V37.5C41 39.2 39.7 40.5 38 40.5H10C8.3 40.5 7 39.2 7 37.5V20.5Z"
        fill="white"
      />

      <path
        d="M10 21H38V38.5H10V21Z"
        fill="white"
      />

      <rect
        x="16"
        y="31"
        width="6"
        height="6"
        rx="0.8"
        fill="#850052"
      />

      <rect
        x="23"
        y="26"
        width="6"
        height="6"
        rx="0.8"
        fill="#850052"
      />

      <rect
        x="23"
        y="33"
        width="6"
        height="6"
        rx="0.8"
        fill="#850052"
      />
    </svg>
  );
}

/* ============================================================
   ENGAGE ICON
============================================================ */

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="
        h-[20px]
        w-[20px]

        xs:h-[23px]
        xs:w-[23px]

        sm:h-[27px]
        sm:w-[27px]

        md:h-[32px]
        md:w-[32px]

        lg:h-[35px]
        lg:w-[35px]
      "
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17" cy="16" r="7" />

      <path d="M6 37C6 30.4 10.8 26 17 26C23.2 26 28 30.4 28 37H6Z" />

      <circle cx="31" cy="17" r="6" />

      <path d="M25 28C26.8 26.7 29 26 31 26C36.8 26 41 30.2 42 36H27" />
    </svg>
  );
}

/* ============================================================
   TALENT ICON
============================================================ */

function TalentIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="
        h-[20px]
        w-[20px]

        xs:h-[23px]
        xs:w-[23px]

        sm:h-[27px]
        sm:w-[27px]

        md:h-[32px]
        md:w-[32px]

        lg:h-[35px]
        lg:w-[35px]
      "
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="17" r="5" />

      <path d="M5 35C5 29.5 8.2 26 13 26C16 26 18.5 27.3 20 29.5V35H5Z" />

      <circle cx="35" cy="17" r="5" />

      <path d="M28 29.5C29.5 27.3 32 26 35 26C39.8 26 43 29.5 43 35H28V29.5Z" />

      <circle cx="24" cy="13" r="6" />

      <path d="M13 36C13 29.3 17.6 25 24 25C30.4 25 35 29.3 35 36H13Z" />

      <rect
        x="18"
        y="31"
        width="12"
        height="8"
        rx="1.5"
        fill="#850052"
      />

      <path
        d="M21 31V29.5C21 28.7 21.7 28 22.5 28H25.5C26.3 28 27 28.7 27 29.5V31"
        stroke="#850052"
        strokeWidth="2"
      />

      <path
        d="M18 34H30"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
}