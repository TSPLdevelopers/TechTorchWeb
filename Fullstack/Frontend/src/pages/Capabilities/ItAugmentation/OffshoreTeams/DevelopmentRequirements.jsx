import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

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
  const [support, setSupport] = useState("Custom Software Development");

  const [supportType, setSupportType] = useState(
    "Dedicated Development Team"
  );

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

  const scrollToForm = () => {
    document
      .getElementById("development-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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

<section className="w-full bg-[#f8f9fa] px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-10">
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

    {/* LEFT CONTENT */}
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
        lg:px-[52px]
        lg:py-[48px]
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
          border
          border-[#ead5df]
          bg-[#fff8fb]
          px-3
          py-1.5
        "
      >
        <span
          className="h-[6px] w-[6px] rounded-full"
          style={{ backgroundColor: BRAND }}
        />

        <span
          className="
            font-['Plus_Jakarta_Sans']
            text-[9px]
            font-bold
            uppercase
            tracking-[0.06em]
          "
          style={{ color: BRAND }}
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
          sm:text-[34px]
          md:text-[38px]
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
          mt-4
          max-w-[610px]
          font-['Plus_Jakarta_Sans']
          text-[12px]
          leading-[1.65]
          text-[#6b6268]
          sm:text-[13px]
          md:text-[14px]
        "
      >
        Tell us about your project, development goals, and the technical
        capabilities you are looking for. Share a few details so our team can
        better understand your requirements and discuss a suitable development
        approach with you.
      </p>

    </div>


    {/* RIGHT IMAGE */}
    <div
      className="
        relative
        flex
        min-h-[250px]
        items-center
        justify-center
        p-2
        sm:min-h-[300px]
        md:min-h-[350px]
        lg:min-h-[360px]
      "
    >
      <img
        src="/DevelopmentTeam.png"
        alt="Development Consultation"
        className="
          h-full
          w-full
          rounded-[12px]
          object-cover
          object-center
        "
      />
    </div>

  </div>
</section>


      {/* =====================================================
          FORM
      ===================================================== */}

      <section
        id="development-form"
        className="w-full px-4 pb-10 sm:px-6 sm:pb-14 md:px-8 lg:px-10 lg:pb-16"
      >
        <div className="mx-auto w-full max-w-[1180px]">

          <form onSubmit={handleSubmit}>

            {/* =================================================
                MAIN FORM CARD
            ================================================= */}

            <div
              className="
                rounded-[16px]
                border
                border-[#e3e7eb]
                bg-white
                px-6
                py-7
                shadow-[0_2px_8px_rgba(20,30,45,0.025)]
                sm:px-8
                sm:py-9
                md:px-10
                md:py-10
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

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
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

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
                          font-medium
                          transition-all
                          duration-200
                          sm:text-[10px]
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
                    sm:text-[11px]
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
                          font-medium
                          transition-all
                          duration-200
                          sm:text-[10px]
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
                          sm:text-[10px]
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
                mt-6
                rounded-[16px]
                border
                border-[#e3e7eb]
                bg-white
                px-6
                py-7
                sm:px-8
                sm:py-9
                md:px-10
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
                  text-[23px]
                  font-semibold
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#15151A]
                  sm:text-[26px]
                  md:text-[28px]
                "
              >
                Let’s Continue the Conversation
              </h2>

              <p
                className="
                  mt-1
                  max-w-[850px]
                  font-['Plus_Jakarta_Sans']
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
                    min-h-[44px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[7px]
                    bg-[#8B0046]
                    px-6
                    font-['Plus_Jakarta_Sans']
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.02em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#78003d]
                    sm:text-[11px]
                  "
                >
                  Submit Development Enquiry
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p
                  className="
                    mt-2
                    font-['Plus_Jakarta_Sans']
                    text-[8px]
                    text-[#766d72]
                    sm:text-[9px]
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

        <div className="flex items-start gap-3">

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

          <div>

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
        min-h-[50px]
        items-center
        justify-between
        rounded-[9px]
        border
        px-3
        py-3
        text-left
        font-['Plus_Jakarta_Sans']
        text-[9px]
        font-medium
        transition-all
        duration-200
        sm:min-h-[54px]
        sm:text-[10px]
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
          h-[12px]
          w-[12px]
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
          <span className="h-[5px] w-[5px] rounded-full bg-[#8B0046]" />
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
        min-h-[100px]
        rounded-[10px]
        border
        p-3
        text-left
        transition-all
        duration-200
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
          h-[12px]
          w-[12px]
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
          <span className="h-[5px] w-[5px] rounded-full bg-[#8B0046]" />
        )}
      </span>

      <h4
        className="
          pr-5
          font-['Plus_Jakarta_Sans']
          text-[10px]
          font-bold
          leading-[1.35]
          text-[#30343a]
          sm:text-[11px]
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-3
          max-w-[230px]
          font-['Plus_Jakarta_Sans']
          text-[8px]
          leading-[1.6]
          text-[#766d72]
          sm:text-[9px]
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
          text-[9px]
          font-bold
          text-[#34383e]
          sm:text-[10px]
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
          h-[40px]
          w-full
          rounded-[8px]
          border
          border-[#e1e6eb]
          bg-[#fafbfc]
          px-3
          font-['Plus_Jakarta_Sans']
          text-[10px]
          text-[#303641]
          outline-none
          transition-all
          placeholder:text-[#aeb5be]
          focus:border-[#c58ba7]
          focus:bg-white
          sm:h-[42px]
          sm:text-[11px]
        "
      />

    </label>
  );
}