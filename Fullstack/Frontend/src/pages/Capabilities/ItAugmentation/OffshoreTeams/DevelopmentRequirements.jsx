import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const BRAND = "#8B0046";

/* =========================================================
   DATA
========================================================= */

const supportOptions = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile Application Development",
  "Enterprise Software",
  "API & System Integration",
  "Software Modernization",
  "Software Maintenance & Support",
  "Not Sure Yet",
];

const supportTypes = [
  {
    title: "Dedicated Development Team",
    description:
      "Professionals focused on your ongoing development requirements.",
  },
  {
    title: "Extended Development Team",
    description:
      "Additional technical professionals working alongside your existing team.",
  },
  {
    title: "Project-Based Development",
    description:
      "A development team structured around a defined project requirement.",
  },
  {
    title: "Specialized Technical Support",
    description:
      "Additional expertise for a specific technology or development need.",
  },
  {
    title: "Guidance & Consultation",
    description:
      "Discuss your requirement with our technology team.",
  },
];

const capabilities = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "Mobile Development",
  "API & Integration",
  "Cloud & DevOps",
  "Software Architecture",
  "Quality Assurance & Testing",
  "Software Maintenance & Support",
  "Other",
];

const projectStages = [
  "Idea / Planning",
  "Requirements & Design",
  "Development",
  "Existing Application",
  "Modernization",
  "Maintenance & Support",
  "Not Sure Yet",
];

const supportLevels = [
  "1–2 Professionals",
  "3–5 Professionals",
  "6–10 Professionals",
  "10+ Professionals",
  "Not Sure",
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DevelopmentConsultation() {
  const [support, setSupport] = useState("");

  const [supportType, setSupportType] = useState("");

  const [selectedCapabilities, setSelectedCapabilities] = useState([]);

  const [projectStage, setProjectStage] = useState("");

  const [supportLevel, setSupportLevel] = useState("");

  const [formData, setFormData] = useState({
    project: "",
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  /* =========================================================
     HANDLERS
  ========================================================= */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleCapability = (item) => {
    setSelectedCapabilities((prev) =>
      prev.includes(item)
        ? prev.filter((value) => value !== item)
        : [...prev, item]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      support,
      supportType,
      capabilities: selectedCapabilities,
      project: formData.project,
      projectStage,
      supportLevel,
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
    });
  };

  return (
    <main className="w-full overflow-hidden bg-[#f8f9fa]">

    {/* =====================================================
    FIRST SECTION — DEVELOPMENT CONSULTATION
===================================================== */}

<section className="w-full bg-[#f8f9fa] px-3 py-4 sm:px-5 sm:py-6 md:px-7 md:py-8 lg:px-10 lg:py-10">
  <div
    className="
      mx-auto
      grid
      w-full
      max-w-[1180px]
      overflow-hidden
      rounded-[16px]
      border
      border-[#e3e7eb]
      bg-white
      lg:grid-cols-[1.15fr_0.85fr]
    "
  >

    {/* ================= LEFT CONTENT ================= */}
    <div
      className="
        flex
        flex-col
        justify-center
        px-6
        py-8
        sm:px-8
        sm:py-10
        md:px-10
        md:py-12
        lg:px-[48px]
        lg:py-[42px]
      "
    >

      {/* Badge */}
      <div
        className="
          mb-5
          flex
          w-fit
          items-center
          gap-2
          rounded-full
          bg-[#f5f5f6]
          px-3.5
          py-1.5
        "
      >
        <span
          className="h-[7px] w-[7px] rounded-full"
          style={{ backgroundColor: BRAND }}
        />

        <span
          className="
            font-['Plus_Jakarta_Sans']
            text-[11px]
            font-bold
            uppercase
            tracking-[0.05em]
            text-[#343434]
          "
        >
          DEVELOPMENT CONSULTATION
        </span>
      </div>

      {/* Heading */}
      <h1
        className="
          max-w-[650px]
          font-['Plus_Jakarta_Sans']
          text-[30px]
          font-semibold
          leading-[1.08]
          tracking-[-0.04em]
          text-[#15151A]
          sm:text-[36px]
          md:text-[40px]
          lg:text-[42px]
        "
      >
        Discuss Your Development
        <br />
        Requirements
      </h1>

      {/* Description */}
      <p
        className="
          mt-5
          max-w-[620px]
          font-['Plus_Jakarta_Sans']
          text-[13px]
          leading-[1.7]
          text-[#6b6268]
          sm:text-[14px]
          md:text-[15px]
          lg:text-[15px]
        "
      >
        Tell us about your project, development goals, and the technical
        capabilities you are looking for. Share a few details so our team can
        better understand your requirements and discuss a suitable development
        approach with you.
      </p>

    </div>


    {/* ================= RIGHT IMAGE ================= */}
    <div
      className="
        relative
        flex
        min-h-[230px]
        items-center
        justify-center
        p-2
        sm:min-h-[280px]
        md:min-h-[320px]
        lg:min-h-[360px]
      "
    >

      {/* Image */}
      <div className="relative h-full w-full overflow-hidden rounded-[12px]">

        <img
          src="/DevelopmentTeam.png"
          alt="Development Consultation"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* ================= IMAGE TEXT OVERLAY ================= */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-3
            sm:p-4
          "
        >
          <div
            className="
              rounded-[10px]
              border
              border-white/15
              bg-black/65
              px-3
              py-2.5
              backdrop-blur-[3px]
              sm:px-4
              sm:py-3
            "
          >
            <p
              className="
                font-['Plus_Jakarta_Sans']
                text-[10px]
                font-medium
                leading-[1.35]
                text-white
                sm:text-[11px]
                md:text-[12px]
              "
            >
              TechTorch Solutions Architecture — Technical
              <br className="hidden sm:block" />
              Consultation & Requirement Discovery
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>


      {/* =====================================================
          FORM
      ===================================================== */}

      <section
        id="development-form"
        className="w-full px-3 pb-8 sm:px-5 sm:pb-10 md:px-7 md:pb-12 lg:px-10 lg:pb-16"
      >
        <div className="mx-auto w-full max-w-[1180px]">

          <form onSubmit={handleSubmit}>

            {/* =================================================
                MAIN FORM CARD
            ================================================= */}

            <div
              className="
                rounded-[14px]
                border
                border-[#e3e7eb]
                bg-white
                px-4
                py-6
                shadow-[0_2px_8px_rgba(20,30,45,0.025)]
                sm:rounded-[16px]
                sm:px-6
                sm:py-8
                md:px-8
                md:py-9
                lg:px-12
                lg:py-11
              "
            >

              {/* =================================================
                  01
              ================================================= */}

              <FormSection
                number="01"
                title="What do you need development support for?"
                subtitle="Select the area closest to your requirement."
              >

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:gap-3 lg:grid-cols-4">
                  {supportOptions.map((item) => (
                    <ChoiceButton
                      key={item}
                      text={item}
                      selected={support === item}
                      onClick={() => setSupport(item)}
                    />
                  ))}
                </div>

              </FormSection>


              {/* =================================================
                  02
              ================================================= */}

              <FormSection
                number="02"
                title="What type of support are you looking for?"
                subtitle="Choose the engagement structure best suited for your plans."
              >

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:gap-3 lg:grid-cols-3">
                  {supportTypes.map((item) => (
                    <SupportTypeCard
                      key={item.title}
                      {...item}
                      selected={supportType === item.title}
                      onClick={() => setSupportType(item.title)}
                    />
                  ))}
                </div>

              </FormSection>


              {/* =================================================
                  03
              ================================================= */}

              <FormSection
                number="03"
                title="Which technical capabilities are relevant?"
                subtitle="Select one or more"
              >

                <div className="flex flex-wrap gap-2">
                  {capabilities.map((item) => {
                    const selected =
                      selectedCapabilities.includes(item);

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleCapability(item)}
                        className={`
                          rounded-[7px]
                          border
                          px-3
                          py-2
                          font-['Plus_Jakarta_Sans']
                          text-[9px]
                          font-semibold
                          transition-all
                          duration-200
                          sm:text-[11px]
                          ${
                            selected
                              ? "border-[#8B0046] bg-[#8B0046] text-white"
                              : "border-[#e2e7ec] bg-white text-[#3c424a] hover:border-[#cfa6ba] hover:bg-[#fff9fb]"
                          }
                        `}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>

              </FormSection>


              {/* =================================================
                  04
              ================================================= */}

              <FormSection
                number="04"
                title="Tell Us About Your Project"
                subtitle="Project Details"
              >

                <p
                  className="
                    mb-3
                    font-['Plus_Jakarta_Sans']
                    text-[10px]
                    leading-[1.5]
                    text-[#71686d]
                    sm:text-[12px]
                  "
                >
                  Describe your project, current application, technology
                  environment, or the type of development assistance you
                  require.
                </p>

                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Briefly describe your project and the development support you are looking for..."
                  className="
                    min-h-[120px]
                    w-full
                    resize-none
                    rounded-[9px]
                    border
                    border-[#e1e6eb]
                    bg-[#fafbfc]
                    px-3
                    py-3
                    font-['Plus_Jakarta_Sans']
                    text-[10px]
                    text-[#333840]
                    outline-none
                    placeholder:text-[#aeb5be]
                    focus:border-[#c58ba7]
                    focus:bg-white
                    sm:text-[11px]
                  "
                />

              </FormSection>


              {/* =================================================
                  05
              ================================================= */}

              <FormSection
                number="05"
                title="What stage is your project in?"
                subtitle="Select the current state of progress."
              >

                <div className="flex flex-wrap gap-2">
                  {projectStages.map((item) => {
                    const selected = projectStage === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setProjectStage(item)}
                        className={`
                          rounded-[7px]
                          border
                          px-3
                          py-2
                          font-['Plus_Jakarta_Sans']
                          text-[9px]
                          font-semibold
                          transition-all
                          duration-200
                          sm:text-[11px]
                          ${
                            selected
                              ? "border-[#8B0046] bg-[#fff7fa] text-[#8B0046]"
                              : "border-[#e2e7ec] bg-white text-[#3c424a] hover:border-[#cfa6ba]"
                          }
                        `}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>

              </FormSection>


              {/* =================================================
                  06
              ================================================= */}

              <FormSection
                number="06"
                title="What level of support are you considering?"
                subtitle="Estimate team capacity or scale."
              >

                <div className="flex flex-wrap gap-2">
                  {supportLevels.map((item) => {
                    const selected = supportLevel === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSupportLevel(item)}
                        className={`
                          rounded-[7px]
                          border
                          px-4
                          py-2
                          font-['Plus_Jakarta_Sans']
                          text-[9px]
                          font-medium
                          transition-all
                          duration-200
                          sm:text-[11px]
                          ${
                            selected
                              ? "border-[#8B0046] bg-[#fff7fa] text-[#8B0046]"
                              : "border-[#e2e7ec] bg-white text-[#3c424a] hover:border-[#cfa6ba]"
                          }
                        `}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>

              </FormSection>

            </div>


            {/* =================================================
                CONTACT DETAILS
            ================================================= */}

            <div
              className="
                mt-5
                rounded-[14px]
                border
                border-[#e3e7eb]
                bg-white
                px-4
                py-6
                sm:mt-6
                sm:rounded-[16px]
                sm:px-6
                sm:py-8
                md:px-8
                md:py-9
                lg:px-12
                lg:py-10
              "
            >

              <span
                className="
                  font-['Plus_Jakarta_Sans']
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                "
                style={{ color: BRAND }}
              >
                YOUR CONTACT DETAILS
              </span>

              <h2
                className="
                  mt-2
                  font-['Plus_Jakarta_Sans']
                  text-[21px]
                  font-semibold
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#15151A]
                  sm:text-[24px]
                  md:text-[26px]
                  lg:text-[28px]
                "
              >
                Let’s Continue the Conversation
              </h2>

              <p
                className="
                  mt-1
                  max-w-[850px]
                  font-['Inter']
                  text-[10px]
                  leading-[1.6]
                  text-[#6d6469]
                  sm:text-[11px]
                  md:text-[12px]
                "
              >
                Share your contact information so our team can review your
                requirements and get in touch regarding your development
                enquiry.
              </p>


              {/* INPUTS */}

              <div
                className="
                  mt-6
                  grid
                  grid-cols-1
                  gap-x-5
                  gap-y-4
                  sm:grid-cols-2
                "
              >

                <InputField
                  label="Full Name *"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <InputField
                  label="Business Email *"
                  name="email"
                  type="email"
                  placeholder="Enter your business email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <InputField
                  label="Company Name"
                  name="company"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={handleChange}
                />

                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>


              {/* SUBMIT */}

              <div className="mt-7">

                <button
                  type="submit"
                  className="
                    inline-flex
                    w-full
                    min-h-[44px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[7px]
                    bg-[#780042]
                    px-6
                    font-['Plus_Jakarta_Sans']
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.02em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#8B0046]
                    sm:w-auto
                    sm:text-[11px]
                  "
                >
                  Submit Development Enquiry
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p
                  className="
                    mt-2
                    font-['Inter']
                    text-[8px]
                    text-[#766d72]
                    sm:text-[11px]
                  "
                >
                  The information you provide will be used to understand your
                  enquiry and communicate with you regarding your requirements.
                </p>

              </div>

            </div>

          </form>
        </div>
      </section>

    </main>
  );
}


/* =========================================================
   FORM SECTION
========================================================= */

function FormSection({
  number,
  title,
  subtitle,
  children,
}) {
  return (
    <div
      className="
        border-b
        border-[#edf0f3]
        pb-7
        mb-7
        sm:pb-8
        sm:mb-8
      "
    >

      <div className="mb-4">

        <div className="flex items-start gap-2.5 sm:gap-3">

          <span
            className="
              flex
              h-[22px]
              w-[22px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#8B0046]
              font-['Plus_Jakarta_Sans']
              text-[8px]
              font-bold
              text-white
            "
          >
            {number}
          </span>

          <div className="min-w-0">

            <h3
              className="
                font-['Plus_Jakarta_Sans']
                text-[13px]
                font-bold
                leading-[1.3]
                text-[#20242a]
                sm:text-[14px]
                md:text-[15px]
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-0.5
                font-['Plus_Jakarta_Sans']
                text-[9px]
                leading-[1.5]
                text-[#776d72]
                sm:text-[10px]
              "
            >
              {subtitle}
            </p>

          </div>
        </div>
      </div>

      {children}
    </div>
  );
}


/* =========================================================
   CHOICE BUTTON
========================================================= */

function ChoiceButton({
  text,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative
        flex
        min-h-[52px]
        w-full
        items-center
        justify-between
        gap-2
        rounded-[9px]
        border
        px-3
        py-2.5
        text-left
        font-['Plus_Jakarta_Sans']
        text-[10px]
        font-medium
        leading-[1.35]
        transition-all
        duration-200
        sm:min-h-[54px]
        sm:px-3.5
        sm:text-[11px]
        md:text-[12px]
        ${
          selected
            ? "border-[#d3a3b9] bg-[#fff9fb] text-[#29252a]"
            : "border-[#e2e7ec] bg-white text-[#363b42] hover:border-[#d4b1c1]"
        }
      `}
    >
      <span className="max-w-[90%] leading-[1.35]">
        {text}
      </span>

      <span
        className={`
          flex
          h-[15px]
          w-[15px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          ${
            selected
              ? "border-[#8B0046]"
              : "border-[#e2b8ca]"
          }
        `}
      >
        {selected && (
          <span className="h-[6px] w-[6px] rounded-full bg-[#8B0046]" />
        )}
      </span>
    </button>
  );
}


/* =========================================================
   SUPPORT TYPE CARD
========================================================= */

function SupportTypeCard({
  title,
  description,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative
        min-h-[112px]
        w-full
        rounded-[10px]
        border
        p-3.5
        text-left
        transition-all
        duration-200
        sm:min-h-[118px]
        sm:p-4
        md:min-h-[122px]
        ${
          selected
            ? "border-[#d3a3b9] bg-[#fff9fb]"
            : "border-[#e2e7ec] bg-white hover:border-[#d4b1c1]"
        }
      `}
    >

      {/* Radio */}
      <span
        className={`
          absolute
          right-3
          top-3
          flex
          h-[15px]
          w-[15px]
          items-center
          justify-center
          rounded-full
          border
          ${
            selected
              ? "border-[#8B0046]"
              : "border-[#e2b8ca]"
          }
        `}
      >
        {selected && (
          <span className="h-[6px] w-[6px] rounded-full bg-[#8B0046]" />
        )}
      </span>

      <h4
        className="
          max-w-[92%]
          pr-5
          font-['Plus_Jakarta_Sans']
          text-[12px]
          font-bold
          leading-[1.4]
          text-[#30343a]
          sm:text-[13px]
          md:text-[14px]
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-2.5
          max-w-[310px]
          pr-1
          font-['Inter']
          text-[10px]
          leading-[1.5]
          text-[#766d72]
          sm:text-[11px]
          md:text-[12px]
        "
      >
        {description}
      </p>

    </button>
  );
}


/* =========================================================
   INPUT
========================================================= */

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <label className="block">

      <span
        className="
          mb-1.5
          block
          font-['Plus_Jakarta_Sans']
          text-[11px]
          font-bold
          leading-[1.4]
          text-[#34383e]
          sm:text-[12px]
          md:text-[13px]
        "
      >
        {label}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          h-[42px]
          w-full
          rounded-[8px]
          border
          border-[#e1e6eb]
          bg-[#fafbfc]
          px-3
          font-['Plus_Jakarta_Sans']
          text-[11px]
          font-medium
          text-[#303641]
          outline-none
          transition-all
          placeholder:text-[#aeb5be]
          focus:border-[#c58ba7]
          focus:bg-white
          sm:h-[44px]
          sm:text-[12px]
          md:text-[13px]
        "
      />

    </label>
  );
}