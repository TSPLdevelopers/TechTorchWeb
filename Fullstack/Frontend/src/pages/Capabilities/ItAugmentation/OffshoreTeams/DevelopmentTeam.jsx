import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const BRAND = "#8B0046";

const requirements = [
  "New Software Development",
  "Web Application Development",
  "Mobile Application Development",
  "Existing Product Development",
  "Software Modernization",
  "Maintenance & Support",
  "Additional Development Resources",
  "Technical Expertise / Consultation",
  "Not Sure Yet",
];

const teamTypes = [
  {
    title: "Dedicated Team",
    description:
      "Focused professionals aligned with your development requirements.",
  },
  {
    title: "Extended Team",
    description:
      "Additional professionals working alongside your existing team.",
  },
  {
    title: "Project-Based Team",
    description:
      "Defined scope, milestones & deliverables.",
  },
  {
    title: "Specialized Resources",
    description:
      "Niche domain architects and specialists.",
  },
  {
    title: "I Need Guidance",
    description:
      "Collaborate with our advisory team.",
  },
];

const expertise = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "Mobile Development",
  "Cloud Development",
  "API & System Integration",
  "Quality Assurance",
  "DevOps / Infrastructure",
  "Software Maintenance & Support",
  "Other",
];

const teamSizes = [
  "1–2",
  "3–5",
  "6–10",
  "10+",
  "Not Sure",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "Within 1–3 months",
  "Exploring for future",
  "Not decided yet",
];

export default function DevelopmentConsultation() {
  const [requirement, setRequirement] = useState(
    "New Software Development"
  );

  const [teamType, setTeamType] = useState("Dedicated Team");

  const [selectedExpertise, setSelectedExpertise] = useState([
    "Frontend Development",
    "Backend Development",
    "Full-Stack Development",
  ]);

  const [teamSize, setTeamSize] = useState("3–5");

  const [timeline, setTimeline] = useState("As soon as possible");

  const [formData, setFormData] = useState({
    project: "",
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleExpertise = (item) => {
    setSelectedExpertise((prev) =>
      prev.includes(item)
        ? prev.filter((value) => value !== item)
        : [...prev, item]
    );
  };

  const scrollToForm = () => {
    document
      .getElementById("development-consultation-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      requirement,
      teamType,
      expertise: selectedExpertise,
      project: formData.project,
      teamSize,
      timeline,
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
    });
  };

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* =====================================================
          DEVELOPMENT TEAM HERO
      ===================================================== */}
      <section className="w-full bg-[#f8fafc] px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-10">
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
            shadow-[0_2px_8px_rgba(20,30,45,0.04)]
            lg:grid-cols-[1.05fr_0.75fr]
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}
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
              lg:py-[50px]
            "
          >

            {/* Badge */}
            <div
              className="
                mb-6
                inline-flex
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
                  font-['Inter']
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                "
                style={{ color: BRAND }}
              >
                DEVELOPMENT TEAM SOLUTIONS
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-[620px]
                font-['Plus_Jakarta_Sans']
                text-[32px]
                font-semibold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#15151A]
                sm:text-[38px]
                md:text-[42px]
                lg:text-[46px]
              "
            >
              Build Your Development
              <br />
              Team
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[620px]
                font-['Inter']
                text-[13px]
                leading-[1.7]
                text-[#6b6268]
                sm:text-[14px]
                md:text-[15px]
              "
            >
              The Right Technical Expertise for the Work Ahead. Whether you
              need additional developers, a dedicated engineering team, or
              specialized technical expertise, TechTorch helps you structure
              development capabilities around your project, technology
              requirements, and business objectives.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-7
                flex
                w-full
                flex-col
                gap-3
                sm:w-auto
                sm:flex-row
              "
            >
              <button
                type="button"
                onClick={scrollToForm}
                className="
                  inline-flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-[9px]
                  bg-[#8B0046]
                  px-6
                  font-['Inter']
                  text-[12px]
                  font-semibold
                  text-white
                  shadow-[0_8px_18px_rgba(139,0,70,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-[1px]
                  hover:bg-[#78003d]
                  sm:w-auto
                "
              >
                Build Your Team

                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={scrollToForm}
                className="
                  inline-flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  rounded-[9px]
                  border
                  border-[#e1e6eb]
                  bg-white
                  px-6
                  font-['Inter']
                  text-[12px]
                  font-semibold
                  text-[#30343b]
                  shadow-[0_2px_6px_rgba(20,30,45,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#d3a8bc]
                  hover:bg-[#fff8fb]
                  sm:w-auto
                "
              >
                Discuss Your Requirements
              </button>
            </div>

            {/* Bottom Benefits */}
            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
                border-t
                border-[#e7eaee]
                pt-5
              "
            >
              <div className="flex items-center gap-2">
                <Check
                  className="h-[15px] w-[15px]"
                  style={{ color: BRAND }}
                />

                <span
                  className="
                    font-['Inter']
                    text-[10px]
                    font-medium
                    text-[#71686d]
                    sm:text-[11px]
                  "
                >
                  Confidential Project Discussions
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Check
                  className="h-[15px] w-[15px]"
                  style={{ color: BRAND }}
                />

                <span
                  className="
                    font-['Inter']
                    text-[10px]
                    font-medium
                    text-[#71686d]
                    sm:text-[11px]
                  "
                >
                  Flexible Development Models
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}
          <div
            className="
              relative
              min-h-[300px]
              w-full
              sm:min-h-[380px]
              lg:min-h-full
            "
          >
            <img
              src="/DevelopmentTeam.png"
              alt="Development Team"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />
          </div>
        </div>
      </section>


      {/* =====================================================
          DEVELOPMENT CONSULTATION FORM
      ===================================================== */}
      <section
        id="development-consultation-form"
        className="
          w-full
          bg-white
          px-4
          py-10
          sm:px-6
          sm:py-14
          md:px-8
          lg:px-10
          lg:py-16
        "
      >
        <div className="mx-auto w-full max-w-[960px]">

          {/* =================================================
              HEADER
          ================================================= */}
          <div className="mb-8 sm:mb-10">

            <div
              className="
                mb-3
                inline-flex
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
                  font-['Inter']
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  sm:text-[9px]
                "
                style={{ color: BRAND }}
              >
                DEVELOPMENT CONSULTATION & SCOPING
              </span>
            </div>

            <h2
              className="
                font-['Plus_Jakarta_Sans']
                text-[25px]
                font-semibold
                leading-[1.15]
                tracking-[-0.035em]
                text-[#17191f]
                sm:text-[29px]
                md:text-[32px]
              "
            >
              Let's Build the Right Team for Your Project
            </h2>

            <p
              className="
                mt-2
                max-w-[720px]
                font-['Inter']
                text-[11px]
                leading-[1.6]
                text-[#6a6267]
                sm:text-[12px]
                md:text-[13px]
              "
            >
              Share a few details about your project and development
              requirements. We'll use them to understand the skills, team
              structure, and level of support that may be relevant to your
              needs.
            </p>
          </div>


          <form onSubmit={handleSubmit}>

            {/* =================================================
                01 — REQUIREMENT
            ================================================= */}
            <FormSection
              number="01"
              title="What do you need help with?"
              rightText="Select your requirement"
            >
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {requirements.map((item) => (
                  <SelectionButton
                    key={item}
                    selected={requirement === item}
                    onClick={() => setRequirement(item)}
                    text={item}
                  />
                ))}
              </div>
            </FormSection>


            {/* =================================================
                02 — TEAM TYPE
            ================================================= */}
            <FormSection
              number="02"
              title="What type of team are you looking for?"
              rightText="Choose the model that best describes your requirement"
            >
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
                {teamTypes.map((item) => (
                  <TeamCard
                    key={item.title}
                    {...item}
                    selected={teamType === item.title}
                    onClick={() => setTeamType(item.title)}
                  />
                ))}
              </div>
            </FormSection>


            {/* =================================================
                03 — EXPERTISE
            ================================================= */}
            <FormSection
              number="03"
              title="What technical expertise do you need?"
              rightText="Select one or more"
            >
              <div className="flex flex-wrap gap-2">
                {expertise.map((item) => {
                  const selected = selectedExpertise.includes(item);

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleExpertise(item)}
                      className={`
                        rounded-[7px]
                        border
                        px-3
                        py-2
                        font-['Inter']
                        text-[10px]
                        font-medium
                        transition-all
                        duration-200
                        sm:text-[11px]
                        ${
                          selected
                            ? "border-[#8B0046] bg-[#8B0046] text-white"
                            : "border-[#e4e8ed] bg-[#f4f6f8] text-[#39404a] hover:border-[#d3a8bc]"
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
                04 — PROJECT DETAILS
            ================================================= */}
            <FormSection
              number="04"
              title="Tell us about your project"
              rightText="Project Details"
            >
              <textarea
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                rows={4}
                placeholder="Briefly describe your project, current technology environment, or the type of development support you are looking for..."
                className="
                  w-full
                  resize-none
                  rounded-[8px]
                  border
                  border-[#e3e7eb]
                  bg-[#f5f6f8]
                  px-3
                  py-3
                  font-['Inter']
                  text-[11px]
                  text-[#303641]
                  outline-none
                  transition-all
                  placeholder:text-[#aeb6c1]
                  focus:border-[#c58ba7]
                  focus:bg-white
                  sm:text-[12px]
                "
              />
            </FormSection>


            {/* =================================================
                05 — TEAM SIZE
            ================================================= */}
            <FormSection
              number="05"
              title="How large is the team you are considering?"
              rightText="Estimated engineers"
            >
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                {teamSizes.map((item) => {
                  const selected = teamSize === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTeamSize(item)}
                      className={`
                        flex
                        min-h-[62px]
                        flex-col
                        items-center
                        justify-center
                        rounded-[9px]
                        border
                        px-3
                        py-3
                        font-['Inter']
                        transition-all
                        duration-200
                        ${
                          selected
                            ? "border-[#9d6281] bg-[#fbf7f9] text-[#702346]"
                            : "border-[#e4e8ed] bg-[#f4f6f8] text-[#343b45] hover:border-[#d3a8bc]"
                        }
                      `}
                    >
                      <span className="text-[12px] font-bold">
                        {item}
                      </span>

                      <span
                        className="
                          mt-1
                          text-[8px]
                          font-medium
                          tracking-[0.04em]
                          text-[#766b71]
                        "
                      >
                        {item === "Not Sure"
                          ? "Flexible sizing"
                          : "Professionals"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </FormSection>


            {/* =================================================
                06 — TIMELINE
            ================================================= */}
            <FormSection
              number="06"
              title="When do you need the team?"
              rightText="Target timeline"
            >
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
                {timelines.map((item) => {
                  const selected = timeline === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTimeline(item)}
                      className={`
                        min-h-[42px]
                        rounded-[8px]
                        border
                        px-3
                        py-2
                        font-['Inter']
                        text-[10px]
                        font-semibold
                        transition-all
                        duration-200
                        sm:text-[11px]
                        ${
                          selected
                            ? "border-[#9d6281] bg-[#fbf7f9] text-[#702346]"
                            : "border-[#e4e8ed] bg-[#f4f6f8] text-[#343b45] hover:border-[#d3a8bc]"
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
                CONTACT SECTION
            ================================================= */}
            <div
              className="
                mt-7
                border-t
                border-[#e5e8ec]
                pt-6
                sm:mt-8
                sm:pt-7
              "
            >

              <h2
                className="
                  font-['Plus_Jakarta_Sans']
                  text-[19px]
                  font-semibold
                  tracking-[-0.025em]
                  text-[#17191f]
                  sm:text-[21px]
                "
              >
                Let's Discuss Your Requirements
              </h2>

              <p
                className="
                  mt-1
                  max-w-[700px]
                  font-['Inter']
                  text-[10px]
                  leading-[1.6]
                  text-[#6a6267]
                  sm:text-[11px]
                  md:text-[12px]
                "
              >
                Provide your contact info so our technical leads can review
                your scoping specifications and respond with recommended team
                configurations.
              </p>


              {/* Contact Inputs */}
              <div
                className="
                  mt-5
                  grid
                  grid-cols-1
                  gap-x-4
                  gap-y-4
                  sm:grid-cols-2
                "
              >

                <InputField
                  label="Name *"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                />

                <InputField
                  label="Business Email *"
                  name="email"
                  type="email"
                  placeholder="Enter your business email"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <InputField
                  label="Company Name"
                  name="company"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={handleInputChange}
                />

                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />

              </div>


              {/* Submit */}
              <div className="mt-7 flex flex-col items-center">

                <button
                  type="submit"
                  className="
                    inline-flex
                    min-h-[44px]
                    w-full
                    max-w-[305px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[8px]
                    bg-[#8B0046]
                    px-5
                    py-3
                    font-['Inter']
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.02em]
                    text-white
                    shadow-[0_8px_18px_rgba(139,0,70,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-[1px]
                    hover:bg-[#78003d]
                    hover:shadow-[0_12px_24px_rgba(139,0,70,0.25)]
                    sm:text-[11px]
                  "
                >
                  Submit Development Requirements

                  <ArrowRight className="h-4 w-4" />
                </button>

                <p
                  className="
                    mt-2
                    max-w-[320px]
                    text-center
                    font-['Inter']
                    text-[8px]
                    leading-[1.5]
                    text-[#8a8086]
                    sm:text-[9px]
                  "
                >
                  Your information will be used to understand your
                  requirements and help our team respond appropriately.
                </p>

              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}


/* =============================================================
   FORM SECTION
============================================================= */

function FormSection({
  number,
  title,
  rightText,
  children,
}) {
  return (
    <div className="mb-6 sm:mb-7">

      <div
        className="
          mb-3
          flex
          flex-col
          gap-1
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:gap-4
        "
      >

        <h3
          className="
            font-['Inter']
            text-[12px]
            font-bold
            text-[#252930]
            sm:text-[13px]
          "
        >
          <span
            className="mr-2 font-bold"
            style={{ color: BRAND }}
          >
            {number} —
          </span>

          {title}
        </h3>

        <span
          className="
            font-['Inter']
            text-[8px]
            font-semibold
            tracking-[0.04em]
            text-[#8a8086]
            sm:text-[9px]
          "
        >
          {rightText}
        </span>
      </div>

      {children}
    </div>
  );
}


/* =============================================================
   REQUIREMENT BUTTON
============================================================= */

function SelectionButton({
  selected,
  onClick,
  text,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        min-h-[43px]
        items-center
        gap-2
        rounded-[8px]
        border
        px-3
        py-2.5
        text-left
        font-['Inter']
        text-[10px]
        font-medium
        transition-all
        duration-200
        sm:text-[11px]
        ${
          selected
            ? "border-[#9d6281] bg-[#fbf7f9] text-[#30272d]"
            : "border-[#e4e8ed] bg-[#f4f6f8] text-[#363c45] hover:border-[#d3a8bc]"
        }
      `}
    >

      <span
        className={`
          flex
          h-3
          w-3
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          ${
            selected
              ? "border-[#8B0046]"
              : "border-[#aeb5bd]"
          }
        `}
      >
        {selected && (
          <span className="h-[5px] w-[5px] rounded-full bg-[#8B0046]" />
        )}
      </span>

      <span>{text}</span>
    </button>
  );
}


/* =============================================================
   TEAM CARD
============================================================= */

function TeamCard({
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
        min-h-[92px]
        rounded-[9px]
        border
        p-3
        text-left
        transition-all
        duration-200
        ${
          selected
            ? "border-[#9d6281] bg-[#fbf7f9]"
            : "border-[#e4e8ed] bg-[#f4f6f8] hover:border-[#d3a8bc]"
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
          h-3
          w-3
          items-center
          justify-center
          rounded-full
          border
          ${
            selected
              ? "border-[#8B0046]"
              : "border-[#aeb5bd]"
          }
        `}
      >
        {selected && (
          <span className="h-[5px] w-[5px] rounded-full bg-[#8B0046]" />
        )}
      </span>

      <div className="pr-4">

        <h4
          className="
            font-['Inter']
            text-[10px]
            font-bold
            text-[#333840]
            sm:text-[11px]
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-2
            font-['Inter']
            text-[8px]
            leading-[1.45]
            text-[#71686d]
            sm:text-[9px]
          "
        >
          {description}
        </p>

      </div>
    </button>
  );
}


/* =============================================================
   INPUT
============================================================= */

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
          font-['Inter']
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
          border-[#e3e7eb]
          bg-[#f5f6f8]
          px-3
          font-['Inter']
          text-[10px]
          text-[#303641]
          outline-none
          transition-all
          placeholder:text-[#aeb6c1]
          focus:border-[#c58ba7]
          focus:bg-white
          sm:h-[42px]
          sm:text-[11px]
        "
      />
    </label>
  );
}