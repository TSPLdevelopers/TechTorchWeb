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

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      const invalidField = form.querySelector(":invalid");

      if (invalidField) {
        invalidField.focus();
        form.reportValidity();

        setTimeout(() => {
          invalidField.blur();
        }, 43000);
      }

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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');

        .discovery-page {
          min-height: 100vh;
          width: 100%;
          background: #F6F7F8;
          padding: 40px 100px;
          font-family: "Inter", sans-serif;
          overflow-x: hidden;
        }

        .discovery-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        /* ================================
           PAGE HEADER
        ================================= */

        .discovery-header {
          width: 100%;
          text-align: center;
          margin: 0 auto;
        }

        .discovery-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid #E4D4DC;
          background: #F8F1F4;
          padding: 6px 14px;
          border-radius: 999px;
          color: #730042;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          line-height: 1.4;
        }

        .discovery-eyebrow-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #730042;
        }

        /*
          MAIN HEADING
          Plus Jakarta Sans
        */
        .discovery-heading {
          margin: 16px auto 0;
          max-width: 800px;
          color: #171719;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.12;
          letter-spacing: -0.04em;
        }

        /*
          SUBHEADING
          Plus Jakarta Sans
        */
        .discovery-subheading {
          margin: 10px auto 0;
          max-width: 700px;
          color: #65595E;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.6;
        }

        /* ================================
           FORM
        ================================= */

        .discovery-form {
          width: 100%;
          margin-top: 28px;
          padding: 36px 40px;
          background: #ffffff;
          border: 1px solid #DDE2E6;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }

        /* ================================
           SECTION HEADER
        ================================= */

        .form-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-bottom: 10px;
          border-bottom: 1px solid #E2E5E7;
        }

        .form-section-left {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .form-section-number {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #FFDDE7;
          color: #730042;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
        }

        /*
          SECTION HEADING
          Plus Jakarta Sans
        */
        .form-section-title {
          margin: 0;
          color: #202022;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .form-section-right {
          flex-shrink: 0;
          color: #64575D;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-align: right;
        }

        /* ================================
           FIELD
        ================================= */

        .form-field {
          margin-top: 20px;
        }

        .form-label {
          display: block;
          color: #29292B;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
          text-transform: uppercase;
          letter-spacing: 0.01em;
        }

        .form-label span {
          color: #730042;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          border: 1px solid #E2E5E8;
          background: #ECEFF1;
          color: #29292B;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input {
          height: 40px;
          margin-top: 10px;
          padding: 0 14px;
          border-radius: 7px;
        }

        .form-textarea {
          height: 105px;
          margin-top: 10px;
          padding: 12px 16px;
          border-radius: 8px;
          resize: none;
          line-height: 1.7;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #A28F96;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #730042;
          box-shadow: 0 0 0 1px #E8D6DF;
        }

        /* ================================
           CHOICE GRID
        ================================= */

        .choice-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 8px;
          margin-top: 10px;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
          margin-top: 10px;
        }

        .choice-button {
          min-height: 48px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 10px;
          border-radius: 7px;
          border: 1px solid #E2E5E8;
          background: #ECEFF1;
          color: #29292B;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.5;
          text-align: center;
          cursor: pointer;
          transition:
            border-color 0.15s ease,
            background 0.15s ease,
            color 0.15s ease;
        }

        .choice-button:hover {
          border-color: #730042;
          background: #F5E5ED;
        }

        .choice-button.selected {
          border-color: #730042;
          background: #F5E5ED;
          color: #730042;
          box-shadow: inset 0 0 0 1px #730042;
        }

        /* ================================
           INTEREST SECTION
        ================================= */

        .interest-section {
          margin-top: 28px;
        }

        .interest-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
          margin-top: 12px;
        }

        .interest-card {
          width: 100%;
          min-height: 57px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 12px;
          border: 1px solid #E2E5E8;
          border-radius: 9px;
          background: #ECEFF1;
          color: #29292B;
          font-family: "Inter", sans-serif;
          text-align: left;
          cursor: pointer;
          transition:
            border-color 0.15s ease,
            background 0.15s ease;
        }

        .interest-card:hover {
          border-color: #D3D6D9;
          background: #E9EBED;
        }

        .interest-checkbox {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          background: #ffffff;
        }

        .interest-checkbox.selected {
          background: #730042;
        }

        .interest-content {
          min-width: 0;
        }

        .interest-title {
          display: block;
          color: #262527;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.4;
        }

        .interest-description {
          display: block;
          margin-top: 2px;
          color: #65595E;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 400;
          line-height: 1.5;
        }

        /* ================================
           CONTACT SECTION
        ================================= */

        .contact-section {
          margin-top: 28px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 16px;
        }

        /* ================================
           CONSENT
        ================================= */

        .consent-section {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid #E4E6E8;
        }

        .consent-label {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
        }

        .consent-checkbox {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          margin-top: 4px;
          accent-color: #730042;
        }

        .consent-text {
          color: #65595E;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.7;
        }

        /* ================================
           SUBMIT
        ================================= */

        .submit-button {
          width: 100%;
          height: 46px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 0 20px;
          border: none;
          border-radius: 9px;
          background: #730042;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 3px 8px rgba(115, 0, 66, 0.18);
          transition:
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .submit-button:hover {
          background: #620038;
          box-shadow: 0 5px 12px rgba(115, 0, 66, 0.22);
        }

        .submit-arrow {
          transition: transform 0.2s ease;
        }

        .submit-button:hover .submit-arrow {
          transform: translateX(4px);
        }

        /* ================================
           TRUST INDICATORS
        ================================= */

        .trust-indicators {
          margin-top: 16px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px 20px;
          color: #564D51;
          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 500;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .trust-icon {
          color: #22824D;
        }

        .trust-dot {
          color: #C8A5B7;
        }

        /* ================================
           LARGE TABLET
        ================================= */

        @media (max-width: 1100px) {
          .discovery-page {
            padding: 40px 60px;
          }

          .discovery-heading {
            font-size: 34px;
          }

          .discovery-form {
            padding: 32px;
          }
        }

        /* ================================
           TABLET
        ================================= */

        @media (max-width: 900px) {
          .discovery-page {
            padding: 36px 40px;
          }

          .discovery-heading {
            font-size: 32px;
          }

          .discovery-form {
            margin-top: 24px;
            padding: 30px;
          }

          .choice-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .interest-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 640px) {
          .discovery-page {
            padding: 28px 20px 40px;
          }

          .discovery-eyebrow {
            max-width: 100%;
            padding: 6px 11px;
            font-size: 9px;
            letter-spacing: 0.08em;
          }

          .discovery-heading {
            margin-top: 14px;
            font-size: 28px;
            line-height: 1.16;
          }

          .discovery-subheading {
            margin-top: 9px;
            font-size: 13px;
            line-height: 1.65;
          }

          .discovery-form {
            margin-top: 22px;
            padding: 24px 18px;
            border-radius: 9px;
          }

          .form-section-header {
            align-items: flex-start;
          }

          .form-section-title {
            font-size: 15px;
          }

          .form-section-right {
            font-size: 9px;
          }

          .form-field {
            margin-top: 18px;
          }

          .form-label {
            font-size: 11px;
          }

          .choice-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .choice-button {
            min-height: 46px;
            font-size: 10px;
            padding: 7px 8px;
          }

          .interest-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .timeline-grid {
            grid-template-columns: 1fr;
          }

          .consent-text {
            font-size: 11px;
            line-height: 1.65;
          }

          .trust-indicators {
            gap: 8px 14px;
            font-size: 8px;
          }
        }

        /* ================================
           SMALL MOBILE
        ================================= */

        @media (max-width: 400px) {
          .discovery-page {
            padding: 24px 14px 32px;
          }

          .discovery-eyebrow {
            font-size: 8px;
          }

          .discovery-heading {
            font-size: 24px;
            letter-spacing: -0.035em;
          }

          .discovery-subheading {
            font-size: 12px;
          }

          .discovery-form {
            padding: 20px 14px;
          }

          .form-section-left {
            gap: 8px;
          }

          .form-section-number {
            width: 26px;
            height: 26px;
            font-size: 10px;
          }

          .form-section-title {
            font-size: 14px;
          }

          .form-section-right {
            font-size: 8px;
          }

          .choice-button {
            min-height: 44px;
            font-size: 9px;
          }

          .interest-card {
            padding: 9px 10px;
          }

          .interest-title {
            font-size: 11px;
          }

          .interest-description {
            font-size: 9px;
          }

          .submit-button {
            height: 44px;
            font-size: 10px;
          }

          .trust-indicators {
            flex-direction: column;
            gap: 7px;
          }

          .trust-dot {
            display: none;
          }
        }

        /* ================================
           REDUCED MOTION
        ================================= */

        @media (prefers-reduced-motion: reduce) {
          .form-input,
          .form-textarea,
          .choice-button,
          .interest-card,
          .submit-button,
          .submit-arrow {
            transition: none;
          }
        }
      `}</style>

      <main className="discovery-page">
        {/* ============================
            PAGE HEADER
        ============================= */}

        <div className="discovery-wrapper">
          <div className="discovery-header">

            <div className="discovery-eyebrow">
              <span className="discovery-eyebrow-dot" />

              <span>
                TechTorch Education · Consultation Request
              </span>
            </div>

            {/* Plus Jakarta Sans */}
            <h1 className="discovery-heading">
              Schedule Education Discovery Session
            </h1>

            {/* Plus Jakarta Sans */}
            <p className="discovery-subheading">
              Connect with our education technology architects to evaluate
              your institution's digital ecosystem and roadmap.
            </p>
          </div>


          {/* ============================
              MAIN FORM
          ============================= */}

          <form
            onSubmit={handleSubmit}
            className="discovery-form"
          >

            {/* SECTION 01 */}
            <FormSectionHeader
              number="01"
              title="Institution Details"
              rightText="PROFILE & SCALE"
            />

            {/* Institution Name */}
            <div className="form-field">
              <label className="form-label">
                Institution Name <span>*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Cambridge Global University"
                required
                className="form-input"
              />
            </div>


            {/* Institution Type */}
            <div className="form-field">
              <label className="form-label">
                Institution Type <span>*</span>
              </label>

              <div className="choice-grid">
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
            <div className="form-field">
              <label className="form-label">
                Current Student Count / Scale <span>*</span>
              </label>

              <div className="choice-grid">
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


            {/* SECTION 02 */}
            <div className="interest-section">
              <FormSectionHeader
                number="02"
                title="Areas of Interest / Scope"
                rightText="SELECT PRIORITIES"
              />

              <div className="interest-grid">

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


            {/* SECTION 03 */}
            <div className="contact-section">
              <FormSectionHeader
                number="03"
                title="Contact Person Details"
                rightText="STAKEHOLDER PROFILE"
              />

              <div className="contact-grid">

                {/* Full Name */}
                <div>
                  <label className="form-label">
                    Full Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Dr. Sarah Jenkins"
                    required
                    className="form-input"
                  />
                </div>


                {/* Email */}
                <div>
                  <label className="form-label">
                    Official / Institutional Email <span>*</span>
                  </label>

                  <input
                    type="email"
                    placeholder="sjenkins@institution.edu"
                    required
                    className="form-input"
                  />
                </div>


                {/* Designation */}
                <div>
                  <label className="form-label">
                    Designation / Role <span>*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Provost, CIO, Registrar, Dean, Director of IT"
                    required
                    className="form-input"
                  />
                </div>


                {/* Phone */}
                <div>
                  <label className="form-label">
                    Phone / WhatsApp Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+1 (555) 382-9011"
                    className="form-input"
                  />
                </div>

              </div>


              {/* Expected Timeline */}
              <div className="form-field">
                <label className="form-label">
                  Expected Timeline <span>*</span>
                </label>

                <div className="timeline-grid">
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


              {/* Additional Notes */}
              <div className="form-field">
                <label className="form-label">
                  Additional Notes / Challenges (Optional)
                </label>

                <textarea
                  rows={3}
                  placeholder="Share any key friction points, current tech stack challenges, or specific deployment goals..."
                  className="form-textarea"
                />
              </div>
            </div>


            {/* CONSENT */}
            <div className="consent-section">
              <label className="consent-label">

                <input
                  type="checkbox"
                  required
                  className="consent-checkbox"
                />

                <span className="consent-text">
                  I confirm this request is made on behalf of an educational
                  institution. I agree to bilateral non-disclosure terms and
                  confidentiality assurance for all shared architecture data.
                </span>

              </label>
            </div>


            {/* SUBMIT */}
            <button
              type="submit"
              className="submit-button"
            >
              Submit Consultation Request

              <ArrowRight
                size={17}
                className="submit-arrow"
              />
            </button>


            {/* TRUST INDICATORS */}
            <div className="trust-indicators">

              <span className="trust-item">
                <ShieldCheck
                  size={12}
                  className="trust-icon"
                />
                Strict NDA Protected
              </span>

              <span className="trust-dot">•</span>

              <span className="trust-item">
                <Zap
                  size={12}
                  className="trust-icon"
                />
                24h Architect Response
              </span>

              <span className="trust-dot">•</span>

              <span className="trust-item">
                <CircleCheck
                  size={12}
                  className="trust-icon"
                />
                Zero Obligation Evaluation
              </span>

            </div>

          </form>
        </div>
      </main>
    </>
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
    <div className="form-section-header">

      <div className="form-section-left">

        <div className="form-section-number">
          {number}
        </div>

        {/* Plus Jakarta Sans */}
        <h2 className="form-section-title">
          {title}
        </h2>

      </div>

      {/* Inter */}
      <span className="form-section-right">
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
      className={`choice-button ${
        selected ? "selected" : ""
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
      className="interest-card"
    >

      <span
        className={`interest-checkbox ${
          selected ? "selected" : ""
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

      <span className="interest-content">

        {/* Inter */}
        <span className="interest-title">
          {title}
        </span>

        {/* Inter */}
        <span className="interest-description">
          {description}
        </span>

      </span>

    </button>
  );
}