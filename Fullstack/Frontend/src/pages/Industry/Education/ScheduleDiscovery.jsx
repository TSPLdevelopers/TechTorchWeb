import React, { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CircleCheck,
} from "lucide-react";

export default function ScheduleDiscovery() {
  const [institutionType, setInstitutionType] = useState("");
  const [studentScale, setStudentScale] = useState("");
  const [timeline, setTimeline] = useState("");

  // No option selected by default
  const [areas, setAreas] = useState({
    sis: false,
    admissions: false,
    academic: false,
    campus: false,
    tuition: false,
    analytics: false,
  });

  const toggleArea = (key) => {
    setAreas((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!institutionType) {
      alert("Please select Institution Type.");
      return;
    }

    if (!studentScale) {
      alert("Please select Current Student Count / Scale.");
      return;
    }

    if (!timeline) {
      alert("Please select Expected Timeline.");
      return;
    }

    console.log({
      institutionType,
      studentScale,
      timeline,
      areas,
    });

    alert("Consultation request submitted.");
  };

  return (
    <main className="min-h-screen bg-[#F6F7F8] px-4 py-10 font-['Inter'] sm:px-6 lg:px-8">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div className="mx-auto max-w-[900px] text-center">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E4D4DC] bg-[#F8F1F4] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#730042]">
          <span className="h-[7px] w-[7px] rounded-full bg-[#730042]" />

          <span>
            TechTorch Education · Consultation Request
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-4 font-['Plus_Jakarta_Sans'] text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#171719] sm:text-[40px] lg:text-[42px]">
          Schedule Education Discovery Session
        </h1>

        {/* Description */}
        <p className="mx-auto mt-2 max-w-[700px] text-[14px] leading-5 text-[#65595E] sm:text-[15px]">
          Connect with our education technology architects to evaluate your
          institution's digital ecosystem and roadmap.
        </p>
      </div>


      {/* =====================================================
          MAIN FORM
      ===================================================== */}

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-7 max-w-[900px] rounded-[10px] border border-[#DDE2E6] bg-white px-6 py-8 shadow-[0_2px_8px_rgba(0,0,0,0.03)] sm:px-8 sm:py-9 lg:px-10"
      >

        {/* ===================================================
            SECTION 01 — INSTITUTION DETAILS
        =================================================== */}

        <FormSectionHeader
          number="01"
          title="Institution Details"
          rightText="PROFILE & SCALE"
        />

        {/* Institution Name */}
        <div className="mt-6">
          <label className="block text-[12px] font-semibold uppercase tracking-[0.01em] text-[#29292B]">
            Institution Name <span>*</span>
          </label>

          <input
            type="text"
            placeholder="e.g. Cambridge Global University"
            required
            className="mt-2.5 block h-[40px] w-full rounded-[7px] border border-[#E2E5E8] bg-[#ECEFF1] px-3.5 text-[12px] text-[#29292B] outline-none placeholder:text-[#A28F96] focus:border-[#730042] focus:ring-1 focus:ring-[#E8D6DF]"
          />
        </div>


        {/* Institution Type */}
        <div className="mt-5">
          <label className="block text-[12px] font-semibold uppercase tracking-[0.01em] text-[#29292B]">
            Institution Type <span>*</span>
          </label>

          <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              "Higher Ed / University",
              "College / Institute",
              "Multi-Campus Network",
              "K-12 Academy",
            ].map((item) => (
              <ChoiceButton
                key={item}
                selected={institutionType === item}
                onClick={() => setInstitutionType(item)}
              >
                {item}
              </ChoiceButton>
            ))}
          </div>
        </div>


        {/* Student Count */}
        <div className="mt-5">
          <label className="block text-[12px] font-semibold uppercase tracking-[0.01em] text-[#29292B]">
            Current Student Count / Scale <span>*</span>
          </label>

          <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              "Under 2,000",
              "2,000 - 10,000",
              "10,000 - 25,000",
              "25,000+",
            ].map((item) => (
              <ChoiceButton
                key={item}
                selected={studentScale === item}
                onClick={() => setStudentScale(item)}
              >
                {item}
              </ChoiceButton>
            ))}
          </div>
        </div>


        {/* ===================================================
            SECTION 02 — AREAS OF INTEREST
        =================================================== */}

        <div className="mt-7">

          <FormSectionHeader
            number="02"
            title="Areas of Interest / Scope"
            rightText="SELECT PRIORITIES"
          />

          <div className="mt-3 grid gap-2 sm:grid-cols-2">

            <InterestCard
              selected={areas.sis}
              onClick={() => toggleArea("sis")}
              title="Student Information System (SIS)"
              description="Centralized records, enrollment logs, student portals"
            />

            <InterestCard
              selected={areas.admissions}
              onClick={() => toggleArea("admissions")}
              title="Admissions & Enrollment Automation"
              description="Applicant intake pipelines, fee collection, verification"
            />

            <InterestCard
              selected={areas.academic}
              onClick={() => toggleArea("academic")}
              title="Academic Management & Grading"
              description="Course scheduling, grading matrices, LMS integration"
            />

            <InterestCard
              selected={areas.campus}
              onClick={() => toggleArea("campus")}
              title="Campus Operations & Attendance"
              description="Smart attendance tracking, biometric & card IoT check-ins"
            />

            <InterestCard
              selected={areas.tuition}
              onClick={() => toggleArea("tuition")}
              title="Tuition & Financial Operations"
              description="Tuition billing, financial aid reconciliation, ERP connections"
            />

            <InterestCard
              selected={areas.analytics}
              onClick={() => toggleArea("analytics")}
              title="Analytics & Institutional Reporting"
              description="Retention alerts, health dashboards, audit trails"
            />

          </div>
        </div>


        {/* ===================================================
            SECTION 03 — CONTACT PERSON
        =================================================== */}

        <div className="mt-7">

          <FormSectionHeader
            number="03"
            title="Contact Person Details"
            rightText="STAKEHOLDER PROFILE"
          />

          <div className="mt-4 grid gap-4 sm:grid-cols-2">

            {/* Full Name */}
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.01em] text-[#29292B]">
                Full Name <span>*</span>
              </label>

              <input
                type="text"
                placeholder="Dr. Sarah Jenkins"
                required
                className="mt-2.5 block h-[40px] w-full rounded-[7px] border border-[#E2E5E8] bg-[#ECEFF1] px-3.5 text-[12px] text-[#29292B] outline-none placeholder:text-[#A28F96] focus:border-[#730042] focus:ring-1 focus:ring-[#E8D6DF]"
              />
            </div>


            {/* Email */}
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.01em] text-[#29292B]">
                Official / Institutional Email <span>*</span>
              </label>

              <input
                type="email"
                placeholder="sjenkins@institution.edu"
                required
                className="mt-2.5 block h-[40px] w-full rounded-[7px] border border-[#E2E5E8] bg-[#ECEFF1] px-3.5 text-[12px] text-[#29292B] outline-none placeholder:text-[#A28F96] focus:border-[#730042] focus:ring-1 focus:ring-[#E8D6DF]"
              />
            </div>


            {/* Designation */}
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.01em] text-[#29292B]">
                Designation / Role <span>*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Provost, CIO, Registrar, Dean, Director of IT"
                required
                className="mt-2.5 block h-[40px] w-full rounded-[7px] border border-[#E2E5E8] bg-[#ECEFF1] px-3.5 text-[12px] text-[#29292B] outline-none placeholder:text-[#A28F96] focus:border-[#730042] focus:ring-1 focus:ring-[#E8D6DF]"
              />
            </div>


            {/* Phone */}
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.01em] text-[#29292B]">
                Phone / WhatsApp Number
              </label>

              <input
                type="tel"
                placeholder="+1 (555) 382-9011"
                className="mt-2.5 block h-[40px] w-full rounded-[7px] border border-[#E2E5E8] bg-[#ECEFF1] px-3.5 text-[12px] text-[#29292B] outline-none placeholder:text-[#A28F96] focus:border-[#730042] focus:ring-1 focus:ring-[#E8D6DF]"
              />
            </div>

          </div>


          {/* Expected Timeline */}
          <div className="mt-5">

            <label className="block text-[12px] font-semibold uppercase tracking-[0.01em] text-[#29292B]">
              Expected Timeline <span>*</span>
            </label>

            <div className="mt-2.5 grid gap-2 sm:grid-cols-3">

              {[
                "Immediate / Within 1 Month",
                "1 - 3 Months",
                "Exploratory / Budget Planning",
              ].map((item) => (
                <ChoiceButton
                  key={item}
                  selected={timeline === item}
                  onClick={() => setTimeline(item)}
                >
                  {item}
                </ChoiceButton>
              ))}

            </div>
          </div>


          {/* =================================================
              ADDITIONAL NOTES
          ================================================= */}

          <div className="mt-5">

            <label className="block text-[12px] font-semibold uppercase tracking-[0.01em] text-[#29292B]">
              Additional Notes / Challenges (Optional)
            </label>

            <textarea
              rows={3}
              placeholder="Share any key friction points, current tech stack challenges, or specific deployment goals..."
              className="mt-2.5 block h-[105px] w-full resize-none rounded-[8px] border border-[#E2E5E8] bg-[#ECEFF1] px-4 py-3 text-[12px] leading-5 text-[#29292B] outline-none placeholder:text-[#A28F96] focus:border-[#730042] focus:ring-1 focus:ring-[#E8D6DF]"
            />

          </div>

        </div>


        {/* ===================================================
            CONSENT
        =================================================== */}

        <div className="mt-5 border-t border-[#E4E6E8] pt-4">

          <label className="flex cursor-pointer items-start gap-3">

            <input
              type="checkbox"
              required
              className="mt-1 h-3.5 w-3.5 shrink-0 accent-[#730042]"
            />

            <span className="text-[12px] leading-5 text-[#65595E]">
              I confirm this request is made on behalf of an educational
              institution. I agree to bilateral non-disclosure terms and
              confidentiality assurance for all shared architecture data.
            </span>

          </label>

        </div>


        {/* ===================================================
            SUBMIT BUTTON
        =================================================== */}

        <button
          type="submit"
          className="group mt-5 flex h-[46px] w-full items-center justify-center gap-3 rounded-[9px] bg-[#730042] px-5 text-[12px] font-semibold uppercase tracking-[0.01em] text-white shadow-[0_3px_8px_rgba(115,0,66,0.18)] transition-all duration-200 hover:bg-[#730042] hover:shadow-[0_5px_12px_rgba(115,0,66,0.22)]"
        >
          Submit Consultation Request

          <ArrowRight
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>


        {/* ===================================================
            TRUST INDICATORS
        =================================================== */}

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] font-medium text-[#564D51]">

          <span className="flex items-center gap-1.5">
            <ShieldCheck
              size={12}
              className="text-[#22824D]"
            />
            Strict NDA Protected
          </span>

          <span className="text-[#C8A5B7]">
            •
          </span>

          <span className="flex items-center gap-1.5">
            <Zap
              size={12}
              className="text-[#22824D]"
            />
            24h Architect Response
          </span>

          <span className="text-[#C8A5B7]">
            •
          </span>

          <span className="flex items-center gap-1.5">
            <CircleCheck
              size={12}
              className="text-[#22824D]"
            />
            Zero Obligation Evaluation
          </span>

        </div>

      </form>
    </main>
  );
}


/* =========================================================
   FORM SECTION HEADER
========================================================= */

function FormSectionHeader({
  number,
  title,
  rightText,
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#E2E5E7] pb-2.5">

      <div className="flex items-center gap-2.5">

        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFDDE7] text-[11px] font-bold text-[#730042]">
          {number}
        </div>

        <h2 className="font-['Plus_Jakarta_Sans'] text-[16px] font-semibold text-[#202022]">
          {title}
        </h2>

      </div>

      <span className="text-right text-[11px] font-semibold text-[#64575D]">
        {rightText}
      </span>

    </div>
  );
}


/* =========================================================
   CHOICE BUTTON
========================================================= */

function ChoiceButton({
  children,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-[48px] items-center justify-center rounded-[7px] border px-3 py-2 text-center text-[12px] font-semibold leading-5 transition-all duration-150 ${
        selected
          ? "border-[#730042] bg-[#F5E5ED] text-[#730042] shadow-[inset_0_0_0_1px_#730042]"
          : "border-[#E2E5E8] bg-[#ECEFF1] text-[#29292B] hover:border-[#730042] hover:bg-[#F5E5ED]"
      }`}
    >
      {children}
    </button>
  );
}


/* =========================================================
   INTEREST CARD
========================================================= */

function InterestCard({
  selected,
  onClick,
  title,
  description,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-[57px] items-start gap-3 rounded-[9px] border px-3 py-2.5 text-left transition-all duration-150 ${
        selected
          ? "border-[#730042] bg-[#F5E5ED]"
          : "border-[#E2E5E8] bg-[#ECEFF1] hover:border-[#730042] hover:bg-[#F3F4F5]"
      }`}
    >

      {/* Checkbox */}
      <span
        className={`mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[2px] border ${
          selected
            ? "border-[#730042] bg-[#730042]"
            : "border-[#85888A] bg-white"
        }`}
      >
        {selected && (
          <svg
            viewBox="0 0 20 20"
            className="h-2.5 w-2.5 text-white"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.704 5.296a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8.5 12.086l6.793-6.79a1 1 0 011.411 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>


      {/* Content */}
      <span className="min-w-0">

        {/* 1px bigger: 11px -> 12px */}
        <span className="block text-[12px] font-bold leading-4 text-[#262527]">
          {title}
        </span>

        {/* 1px bigger: 9px -> 10px */}
        <span className="mt-0.5 block text-[10px] leading-4 text-[#65595E]">
          {description}
        </span>

      </span>

    </button>
  );
}