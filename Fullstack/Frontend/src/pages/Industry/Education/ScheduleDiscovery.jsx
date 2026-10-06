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
        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


        /* =====================================================
           PAGE
           DESKTOP = 100px LEFT / RIGHT
        ===================================================== */

        .discovery-page {
          min-height: 100vh;
          width: 100%;

          background: #F6F7F8;

          padding-top: 48px;
          padding-right: 100px;
          padding-bottom: 64px;
          padding-left: 100px;

          box-sizing: border-box;

          font-family: "Inter", sans-serif;

          overflow-x: hidden;
        }


        .discovery-wrapper {
          width: 100%;
          max-width: 1100px;

          margin: 0 auto;
        }


        /* =====================================================
           PAGE HEADER
        ===================================================== */

        .discovery-header {
          width: 100%;

          margin: 0 auto;

          text-align: center;
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


        /* =====================================================
           MAIN HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .discovery-heading {
          margin: 18px auto 0;

          max-width: 850px;

          color: #171719;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 40px;

          font-weight: 700;

          line-height: 1.12;

          letter-spacing: -0.045em;
        }


        /* =====================================================
           SUBHEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .discovery-subheading {
          margin: 12px auto 0;

          max-width: 760px;

          color: #65595E;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 15px;

          font-weight: 500;

          line-height: 1.65;
        }


        /* =====================================================
           FORM
        ===================================================== */

        .discovery-form {
          width: 100%;

          margin-top: 32px;

          padding: 40px;

          box-sizing: border-box;

          background: #ffffff;

          border: 1px solid #DDE2E6;

          border-radius: 12px;

          box-shadow:
            0 2px 8px rgba(0, 0, 0, 0.03);
        }


        /* =====================================================
           SECTION HEADER
        ===================================================== */

        .form-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 12px;

          padding-bottom: 11px;

          border-bottom: 1px solid #E2E5E7;
        }


        .form-section-left {
          display: flex;
          align-items: center;

          gap: 10px;

          min-width: 0;
        }


        .form-section-number {
          width: 29px;
          height: 29px;

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


        /* =====================================================
           SECTION TITLE
           PLUS JAKARTA SANS
        ===================================================== */

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


        /* =====================================================
           FIELD
        ===================================================== */

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


        /* =====================================================
           INPUTS
        ===================================================== */

        .form-input,
        .form-textarea {
          width: 100%;

          box-sizing: border-box;

          border: 1px solid #E2E5E8;

          background: #ECEFF1;

          color: #29292B;

          font-family: "Inter", sans-serif;

          font-size: 12px;

          outline: none;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
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

          background: #F4F5F6;

          box-shadow:
            0 0 0 3px rgba(115, 0, 66, 0.08);
        }


        /* =====================================================
           CHOICE GRID
        ===================================================== */

        .choice-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 8px;

          margin-top: 10px;
        }


        .timeline-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

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
            color 0.15s ease,
            transform 0.15s ease;
        }


        .choice-button:hover {
          border-color: #730042;

          background: #F5E5ED;

          color: #730042;
        }


        .choice-button:active {
          transform: scale(0.99);
        }


        .choice-button.selected {
          border-color: #730042;

          background: #F5E5ED;

          color: #730042;

          box-shadow:
            inset 0 0 0 1px #730042;
        }


        /* =====================================================
           INTEREST SECTION
        ===================================================== */

        .interest-section {
          margin-top: 30px;
        }


        .interest-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 9px;

          margin-top: 12px;
        }


        .interest-card {
          width: 100%;

          min-height: 59px;

          display: flex;
          align-items: flex-start;

          gap: 12px;

          padding: 11px 12px;

          box-sizing: border-box;

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

          border: 1px solid #D9DDE0;

          box-sizing: border-box;
        }


        .interest-checkbox.selected {
          background: #730042;

          border-color: #730042;
        }


        .interest-checkbox svg {
          width: 10px;
          height: 10px;

          color: #ffffff;
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


        /* =====================================================
           CONTACT SECTION
        ===================================================== */

        .contact-section {
          margin-top: 30px;
        }


        .contact-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 16px;

          margin-top: 16px;
        }


        /* =====================================================
           CONSENT
        ===================================================== */

        .consent-section {
          margin-top: 22px;

          padding-top: 17px;

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


        /* =====================================================
           SUBMIT
        ===================================================== */

        .submit-button {
          width: 100%;

          height: 48px;

          margin-top: 21px;

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

          box-shadow:
            0 3px 8px rgba(115, 0, 66, 0.18);

          transition:
            background 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.2s ease;
        }


        .submit-button:hover {
          background: #620038;

          box-shadow:
            0 6px 14px rgba(115, 0, 66, 0.22);

          transform: translateY(-1px);
        }


        .submit-arrow {
          transition: transform 0.2s ease;
        }


        .submit-button:hover .submit-arrow {
          transform: translateX(4px);
        }


        /* =====================================================
           TRUST INDICATORS
        ===================================================== */

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


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1400px) {

          .discovery-page {
            padding-top: 56px;
            padding-bottom: 72px;
          }

          .discovery-wrapper {
            max-width: 1150px;
          }

          .discovery-heading {
            font-size: 42px;
          }

          .discovery-subheading {
            font-size: 16px;
          }

          .discovery-form {
            padding: 44px;
          }

        }


        /* =====================================================
           TABLET / LAPTOP
           40px LEFT / RIGHT
        ===================================================== */

        @media (min-width: 768px) and (max-width: 1199px) {

          .discovery-page {
            padding-top: 42px;
            padding-right: 40px;
            padding-bottom: 60px;
            padding-left: 40px;
          }

          .discovery-wrapper {
            max-width: 1000px;
          }

          .discovery-heading {
            font-size: 36px;
          }

          .discovery-form {
            padding: 34px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) and (min-width: 768px) {

          .discovery-heading {
            font-size: 33px;
          }

          .discovery-subheading {
            font-size: 14px;
          }

          .discovery-form {
            margin-top: 26px;
          }

          .choice-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .interest-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

        }


        /* =====================================================
           MOBILE
           24px LEFT / RIGHT
        ===================================================== */

        @media (max-width: 767px) {

          .discovery-page {
            padding-top: 30px;
            padding-right: 24px;
            padding-bottom: 44px;
            padding-left: 24px;
          }

          .discovery-eyebrow {
            max-width: 100%;

            padding: 6px 11px;

            font-size: 9px;

            letter-spacing: 0.08em;
          }

          .discovery-heading {
            margin-top: 15px;

            font-size: 29px;

            line-height: 1.17;
          }

          .discovery-subheading {
            margin-top: 9px;

            font-size: 13px;

            line-height: 1.65;
          }

          .discovery-form {
            margin-top: 23px;

            padding: 26px 20px;

            border-radius: 10px;
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
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
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


        /* =====================================================
           SMALL MOBILE
           16px LEFT / RIGHT
        ===================================================== */

        @media (max-width: 480px) {

          .discovery-page {
            padding-top: 25px;
            padding-right: 16px;
            padding-bottom: 36px;
            padding-left: 16px;
          }

          .discovery-eyebrow {
            font-size: 8px;

            letter-spacing: 0.07em;
          }

          .discovery-heading {
            font-size: 25px;

            line-height: 1.2;

            letter-spacing: -0.035em;
          }

          .discovery-subheading {
            font-size: 12px;
          }

          .discovery-form {
            margin-top: 20px;

            padding: 21px 15px;

            border-radius: 9px;
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
            min-height: 55px;

            padding: 9px 10px;
          }

          .interest-title {
            font-size: 11px;
          }

          .interest-description {
            font-size: 9px;
          }

          .submit-button {
            height: 45px;

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


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {

          .discovery-page {
            padding-right: 16px;
            padding-left: 16px;
          }

          .discovery-heading {
            font-size: 23px;
          }

          .discovery-subheading {
            font-size: 11.5px;
          }

          .discovery-form {
            padding: 19px 13px;
          }

          .form-section-title {
            font-size: 13px;
          }

          .choice-button {
            font-size: 8.5px;
          }

          .interest-title {
            font-size: 10.5px;
          }

          .interest-description {
            font-size: 8.5px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .form-input,
          .form-textarea,
          .choice-button,
          .interest-card,
          .submit-button,
          .submit-arrow {
            transition: none;
          }

          .submit-button:hover {
            transform: none;
          }

        }

      `}</style>


      {/* =====================================================
          PAGE
      ===================================================== */}

      <main className="discovery-page">

        <div className="discovery-wrapper">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="discovery-header">

            <div className="discovery-eyebrow">
              <span className="discovery-eyebrow-dot" />

              <span>
                TechTorch Education · Consultation Request
              </span>
            </div>


            {/* PLUS JAKARTA SANS */}

            <h1 className="discovery-heading">
              Schedule Education Discovery Session
            </h1>


            {/* PLUS JAKARTA SANS */}

            <p className="discovery-subheading">
              Connect with our education technology architects to evaluate
              your institution's digital ecosystem and roadmap.
            </p>

          </div>


          {/* =================================================
              FORM
          ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="discovery-form"
          >

            {/* =================================================
                SECTION 01
            ================================================= */}

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


            {/* =================================================
                SECTION 02
            ================================================= */}

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


            {/* =================================================
                SECTION 03
            ================================================= */}

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


            {/* =================================================
                CONSENT
            ================================================= */}

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


            {/* =================================================
                SUBMIT
            ================================================= */}

            <button
              type="submit"
              className="submit-button"
            >
              <span>
                Submit Consultation Request
              </span>

              <ArrowRight
                size={17}
                className="submit-arrow"
              />
            </button>


            {/* =================================================
                TRUST INDICATORS
            ================================================= */}

            <div className="trust-indicators">

              <span className="trust-item">

                <ShieldCheck
                  size={12}
                  className="trust-icon"
                />

                Strict NDA Protected

              </span>


              <span className="trust-dot">
                •
              </span>


              <span className="trust-item">

                <Zap
                  size={12}
                  className="trust-icon"
                />

                24h Architect Response

              </span>


              <span className="trust-dot">
                •
              </span>


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

        {/* PLUS JAKARTA SANS */}

        <h2 className="form-section-title">
          {title}
        </h2>

      </div>


      {/* INTER */}

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
      aria-pressed={selected}
    >

      <span
        className={`interest-checkbox ${
          selected ? "selected" : ""
        }`}
      >

        {selected && (
          <svg
            viewBox="0 0 20 20"
            width="10"
            height="10"
            fill="currentColor"
            aria-hidden="true"
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

        {/* INTER */}

        <span className="interest-title">
          {title}
        </span>


        {/* INTER */}

        <span className="interest-description">
          {description}
        </span>

      </span>

    </button>
  );
}