import React, { useState } from "react";

export default function AdvisoryBooking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    vector: "",
    meetingFormat: "",
  });

  const [errors, setErrors] = useState({});

  const dates = [
    { day: "MON", date: "14 Oct", open: "2 Open" },
    { day: "TUE", date: "15 Oct", open: "3 Open" },
    { day: "WED", date: "16 Oct", open: "3 Open" },
    { day: "THU", date: "17 Oct", open: "1 Open" },
    { day: "FRI", date: "18 Oct", open: "4 Open" },
  ];

  const times = [
    "10:00 AM",
    "11:30 AM",
    "02:00 PM",
    "04:30 PM",
    "06:00 PM",
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleDateSelect = (index) => {
    setSelectedDate(index);

    setErrors((prev) => ({
      ...prev,
      date: "",
    }));
  };

  const handleTimeSelect = (index) => {
    setSelectedTime(index);

    setErrors((prev) => ({
      ...prev,
      time: "",
    }));
  };

  const handleConfirm = () => {
    const newErrors = {};

    if (selectedDate === null) {
      newErrors.date = "Please select a business day";
    }

    if (selectedTime === null) {
      newErrors.time = "Please select a 45-minute window";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your corporate work email";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name and executive title";
    }

    if (!formData.vector.trim()) {
      newErrors.vector = "Please enter your primary vector of focus";
    }

    if (!formData.meetingFormat.trim()) {
      newErrors.meetingFormat = "Please enter your meeting format";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Navigation ONLY when everything is complete
    window.location.href = "/advisory-confirmation";
  };

  return (
    <section className="advisory-booking-section">
      <div className="advisory-booking-container">

        {/* =========================
            LEFT COLUMN
        ========================= */}
        <div className="advisory-left-column">

          {/* LEADERSHIP ROSTER */}
          <div className="advisory-card leadership-card">

            <div className="card-top-row">
              <span className="small-heading">
                LEADERSHIP ROSTER
              </span>

              <span className="active-advisors">
                ACTIVE ADVISORS
              </span>
            </div>

            <div className="card-divider"></div>

            {/* ADVISOR 1 */}
            <div className="advisor-row">

              <div className="advisor-photo">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=100&q=80"
                  alt="Advisor"
                />
              </div>

              <div className="advisor-info">
                <div className="advisor-name">
                  Dr. Evelyn Vance
                  <span className="verified">✿</span>
                </div>

                <div className="advisor-role">
                  Principal Director & Chief Cyber Architect
                </div>

                <div className="advisor-detail">
                  CISSP · CISM · ex-DARPA Cyber Fellow
                </div>
              </div>

            </div>

            <div className="advisor-divider"></div>

            {/* ADVISOR 2 */}
            <div className="advisor-row">

              <div className="advisor-initials">
                MC
              </div>

              <div className="advisor-info">
                <div className="advisor-name">
                  Marcus Chen
                  <span className="verified">✿</span>
                </div>

                <div className="advisor-role">
                  VP, Autonomous Threat Defense & Zero-Trust
                </div>

                <div className="advisor-detail">
                  Cloud Security Alliance Fellow · Former Red
                  <br />
                  Team Lead
                </div>
              </div>

            </div>
          </div>


          {/* WHAT YOU WILL RECEIVE */}
          <div className="advisory-card receive-card">

            <h2 className="receive-title">
              <span className="receive-title-icon">▣</span>
              What You Will Receive
            </h2>

            <div className="receive-list">

              <div className="receive-item">
                <span className="receive-icon">◎</span>

                <div>
                  <div className="receive-item-title">
                    Custom Threat Perimeter Diagnostic
                  </div>

                  <div className="receive-item-text">
                    Real-time analysis of attack surface telemetry and exposed
                    <br />
                    endpoints.
                  </div>
                </div>
              </div>


              <div className="receive-item">
                <span className="receive-icon">✣</span>

                <div>
                  <div className="receive-item-title">
                    Vector Squad Mobilization Blueprint
                  </div>

                  <div className="receive-item-text">
                    Targeted technical allocation plan tailored to your
                    infrastructure
                    <br />
                    stack.
                  </div>
                </div>
              </div>


              <div className="receive-item">
                <span className="receive-icon">▣</span>

                <div>
                  <div className="receive-item-title">
                    Executive Board-Ready Summary Deck
                  </div>

                  <div className="receive-item-text">
                    High-impact executive-ready slides framing institutional
                    exposure
                    <br />
                    risk.
                  </div>
                </div>
              </div>


              <div className="receive-item">
                <span className="receive-icon">☑</span>

                <div>
                  <div className="receive-item-title">
                    Remediation Priority Index (30-60-90 Days)
                  </div>

                  <div className="receive-item-text">
                    Chronological priority matrix resolving foundational
                    vulnerabilities
                    <br />
                    first.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>


        {/* =========================
            RIGHT COLUMN
        ========================= */}
        <div className="advisory-card dispatch-card">

          {/* HEADER */}
          <div className="dispatch-header">

            <div>
              <div className="small-heading">
                LIVE DISPATCH CONSOLE
              </div>

              <h2 className="dispatch-title">
                Select Date & Transmission Details
              </h2>
            </div>

            <div className="calendar-icon">
              ▣
            </div>

          </div>

          <div className="card-divider"></div>


          {/* STEP 1 */}
          <div className="form-step">

            <div className="step-title">
              Step 1 · Confirm Regional Timezone
            </div>

            <div className="timezone-box">
              IST — India Standard Time (UTC+05:30)
            </div>

          </div>


          {/* STEP 2 */}
          <div className="form-step date-step">

            <div className="step-heading-row">

              <div className="step-title">
                Step 2 · Select Business Day
              </div>

              <span className="slots-available">
                3 slots available
              </span>

            </div>

            <div className="date-grid">

              {dates.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className={`date-box ${
                    selectedDate === index ? "selected" : ""
                  }`}
                  onClick={() => handleDateSelect(index)}
                >
                  <span className="date-day">
                    {item.day}
                  </span>

                  <span className="date-number">
                    {item.date}
                  </span>

                  <span className="date-open">
                    {selectedDate === index
                      ? "Selected"
                      : item.open}
                  </span>
                </button>
              ))}

            </div>

            {errors.date && (
              <div className="field-error">
                {errors.date}
              </div>
            )}

          </div>


          {/* STEP 3 */}
          <div className="form-step time-step">

            <div className="step-title">
              Step 3 · Select 45-Minute Window
            </div>

            <div className="time-grid">

              {times.map((time, index) => (
                <button
                  key={time}
                  type="button"
                  className={`time-box ${
                    selectedTime === index ? "selected" : ""
                  }`}
                  onClick={() => handleTimeSelect(index)}
                >
                  {time}
                </button>
              ))}

            </div>

            {errors.time && (
              <div className="field-error">
                {errors.time}
              </div>
            )}

          </div>


          {/* FORM */}
          <div className="dispatch-form">

            <div className="form-grid">

              {/* EMAIL */}
              <div className="field-group">

                <label>
                  Corporate Work Email *
                </label>

                <div className="input-with-icon">

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      handleChange("email", e.target.value)
                    }
                    placeholder="ciso@organization.com"
                    className={errors.email ? "input-error" : ""}
                  />

                  {formData.email && !errors.email && (
                    <span className="input-check">
                      ✓
                    </span>
                  )}

                </div>

                {errors.email && (
                  <div className="field-error">
                    {errors.email}
                  </div>
                )}

              </div>


              {/* NAME */}
              <div className="field-group">

                <label>
                  Full Name & Executive Title *
                </label>

                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    handleChange("name", e.target.value)
                  }
                  placeholder="e.g., Katherine Montgomery, CISO"
                  className={errors.name ? "input-error" : ""}
                />

                {errors.name && (
                  <div className="field-error">
                    {errors.name}
                  </div>
                )}

              </div>


              {/* VECTOR */}
              <div className="field-group">

                <label>
                  Primary Vector of Focus *
                </label>

                <input
                  type="text"
                  value={formData.vector}
                  onChange={(e) =>
                    handleChange("vector", e.target.value)
                  }
                  placeholder="Select your primary security focus..."
                  className={errors.vector ? "input-error" : ""}
                />

                {errors.vector && (
                  <div className="field-error">
                    {errors.vector}
                  </div>
                )}

              </div>


              {/* MEETING FORMAT */}
              <div className="field-group">

                <label>
                  Meeting Format *
                </label>

                <input
                  type="text"
                  value={formData.meetingFormat}
                  onChange={(e) =>
                    handleChange(
                      "meetingFormat",
                      e.target.value
                    )
                  }
                  placeholder="Select meeting format..."
                  className={
                    errors.meetingFormat
                      ? "input-error"
                      : ""
                  }
                />

                {errors.meetingFormat && (
                  <div className="field-error">
                    {errors.meetingFormat}
                  </div>
                )}

              </div>

            </div>


            {/* CONFIRM BUTTON */}
            <button
              type="button"
              className="confirm-button"
              onClick={handleConfirm}
            >
              CONFIRM & DISPATCH ADVISORY CALENDAR INVITE
              <span>→</span>
            </button>


            {/* SECURITY NOTE */}
            <div className="security-note">

              <span className="lock-icon">
                ♙
              </span>

              <span>
                Instant calendar invitation sent via 256-bit
                encrypted channel. Strictly non-sales technical
                advisory.
              </span>

            </div>

          </div>

        </div>

      </div>


      <style>{`

        * {
          box-sizing: border-box;
        }


        /* =========================================
           MAIN SECTION
        ========================================= */

        .advisory-booking-section {
          width: 100%;
          min-height: 720px;

          padding: 32px 20px 40px;

          background: #ffffff;

          font-family: "Inter", Arial, sans-serif;

          color: #273047;
        }


        .advisory-booking-container {
          width: 100%;
          max-width: 1080px;

          margin: 0 auto;

          display: grid;

          grid-template-columns: 1fr 1.72fr;

          gap: 22px;

          align-items: start;
        }


        /* =========================================
           COMMON CARD
        ========================================= */

        .advisory-card {
          background: #f8f9fb;

          border: 1px solid #e2e7ee;

          border-radius: 15px;

          box-shadow:
            0 5px 15px rgba(26, 36, 55, 0.06);

          overflow: hidden;
        }


        /* =========================================
           LEFT COLUMN
        ========================================= */

        .advisory-left-column {
          display: flex;

          flex-direction: column;

          gap: 20px;
        }


        .leadership-card {
          padding: 27px 29px 25px;
        }


        .card-top-row {
          display: flex;

          align-items: center;

          justify-content: space-between;
        }


        .small-heading {
          color: #731044;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 1.25px;
        }


        .active-advisors {
          display: inline-flex;

          align-items: center;

          height: 21px;

          padding: 0 10px;

          border-radius: 4px;

          background: #dce7df;

          color: #315c43;

          font-size: 9px;

          font-weight: 700;
        }


        .card-divider {
          width: 100%;

          height: 1px;

          margin: 14px 0;

          background: #e1e6ed;
        }


        /* =========================================
           ADVISORS
        ========================================= */

        .advisor-row {
          display: flex;

          align-items: flex-start;

          gap: 14px;
        }


        .advisor-photo {
          width: 50px;

          height: 50px;

          flex-shrink: 0;

          border-radius: 7px;

          overflow: hidden;

          background: #ddd;
        }


        .advisor-photo img {
          width: 100%;

          height: 100%;

          object-fit: cover;
        }


        .advisor-initials {
          width: 50px;

          height: 50px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 9px;

          background: #68003a;

          color: #ffffff;

          font-size: 16px;

          font-weight: 700;
        }


        .advisor-info {
          min-width: 0;

          padding-top: 1px;
        }


        .advisor-name {
          color: #263046;

          font-size: 15px;

          font-weight: 750;

          line-height: 1.2;
        }


        .verified {
          margin-left: 5px;

          color: #7c0b4d;

          font-size: 12px;
        }


        .advisor-role {
          margin-top: 4px;

          color: #657187;

          font-size: 10.5px;

          line-height: 1.3;

          font-weight: 500;
        }


        .advisor-detail {
          margin-top: 3px;

          color: #8090a4;

          font-size: 10px;

          line-height: 1.35;
        }


        .advisor-divider {
          width: 100%;

          height: 1px;

          margin: 13px 0;

          background: #e3e7ed;
        }


        /* =========================================
           RECEIVE CARD
        ========================================= */

        .receive-card {
          padding: 27px 29px 25px;
        }


        .receive-title {
          display: flex;

          align-items: center;

          gap: 9px;

          margin: 0 0 19px;

          color: #273047;

          font-size: 18px;

          line-height: 1.2;

          font-weight: 750;
        }


        .receive-title-icon {
          color: #7b0b4d;

          font-size: 19px;
        }


        .receive-list {
          display: flex;

          flex-direction: column;

          gap: 14px;
        }


        .receive-item {
          display: flex;

          align-items: flex-start;

          gap: 11px;
        }


        .receive-icon {
          width: 18px;

          flex-shrink: 0;

          color: #7e0a4d;

          font-size: 17px;

          line-height: 1.2;

          text-align: center;
        }


        .receive-item-title {
          color: #2f374b;

          font-size: 12px;

          font-weight: 750;

          line-height: 1.25;
        }


        .receive-item-text {
          margin-top: 2px;

          color: #738197;

          font-size: 10px;

          line-height: 1.3;
        }


        /* =========================================
           DISPATCH CARD
        ========================================= */

        .dispatch-card {
          padding: 34px 36px 29px;
        }


        .dispatch-header {
          display: flex;

          align-items: flex-start;

          justify-content: space-between;
        }


        .dispatch-title {
          margin: 4px 0 0;

          color: #263047;

          font-size: 20px;

          line-height: 1.2;

          font-weight: 750;
        }


        .calendar-icon {
          color: #790b4d;

          font-size: 21px;

          line-height: 1;

          margin-top: 8px;
        }


        .dispatch-card > .card-divider {
          margin: 17px 0 22px;
        }


        /* =========================================
           FORM STEPS
        ========================================= */

        .form-step {
          margin-bottom: 21px;
        }


        .step-title {
          margin-bottom: 8px;

          color: #30394d;

          font-size: 12px;

          font-weight: 750;
        }


        .step-heading-row {
          display: flex;

          align-items: center;

          justify-content: space-between;
        }


        .slots-available {
          color: #741044;

          font-size: 10px;

          font-weight: 750;
        }


        .timezone-box {
          width: 100%;

          height: 37px;

          display: flex;

          align-items: center;

          padding: 0 17px;

          background: #ffffff;

          border: 1px solid #d9e0e9;

          border-radius: 7px;

          color: #5e697c;

          font-size: 12px;

          font-weight: 600;
        }


        /* =========================================
           DATE SELECTOR
        ========================================= */

        .date-grid {
          display: grid;

          grid-template-columns:
            repeat(5, 1fr);

          gap: 8px;

          margin-top: 8px;
        }


        .date-box {
          height: 82px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          gap: 5px;

          border: 1px solid #e0e6ee;

          border-radius: 9px;

          background: #ffffff;

          cursor: pointer;

          font-family: inherit;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }


        .date-box:hover {
          border-color: #a8326d;
        }


        .date-box.selected {
          border: 2px solid #85034a;

          background: #fff9fc;

          box-shadow:
            0 0 0 1px rgba(133, 3, 74, 0.04);
        }


        .date-day {
          color: #657187;

          font-size: 10px;

          font-weight: 700;
        }


        .date-number {
          color: #2c3549;

          font-size: 14px;

          font-weight: 750;
        }


        .date-open {
          color: #8793a6;

          font-size: 9px;
        }


        .date-box.selected .date-day,
        .date-box.selected .date-number,
        .date-box.selected .date-open {
          color: #7d0848;
        }


        .date-box.selected .date-open {
          font-weight: 700;
        }


        /* =========================================
           TIME SELECTOR
        ========================================= */

        .time-step {
          margin-bottom: 17px;
        }


        .time-grid {
          display: grid;

          grid-template-columns:
            repeat(5, 1fr);

          gap: 8px;

          margin-top: 8px;
        }


        .time-box {
          height: 35px;

          border: 1px solid #dfe5ed;

          border-radius: 7px;

          background: #ffffff;

          color: #556176;

          font-family: inherit;

          font-size: 11px;

          font-weight: 650;

          cursor: pointer;

          transition: 0.2s ease;
        }


        .time-box:hover {
          border-color: #9d2762;
        }


        .time-box.selected {
          border-color: #85034a;

          background: #85034a;

          color: #ffffff;
        }


        /* =========================================
           FORM
        ========================================= */

        .dispatch-form {
          border-top: 1px solid #e1e6ed;

          padding-top: 9px;
        }


        .form-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 14px 15px;
        }


        .field-group {
          min-width: 0;
        }


        .field-group label {
          display: block;

          margin-bottom: 6px;

          color: #30394c;

          font-size: 10px;

          font-weight: 750;
        }


        .field-group input {
          width: 100%;

          height: 38px;

          padding: 0 13px;

          border: 1px solid #d7dfe9;

          border-radius: 7px;

          outline: none;

          background: #ffffff;

          color: #4e5b70;

          font-family: inherit;

          font-size: 11px;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }


        .field-group input:focus {
          border-color: #8b1757;
        }


        .field-group input::placeholder {
          color: #aab3c0;
        }


        .input-with-icon {
          position: relative;
        }


        .input-with-icon input {
          padding-right: 35px;
        }


        .input-check {
          position: absolute;

          right: 11px;

          top: 50%;

          transform: translateY(-50%);

          color: #54755d;

          font-size: 15px;

          font-weight: 700;
        }


        /* =========================================
           VALIDATION
        ========================================= */

        .input-error {
          border-color: #ff4b4b !important;

          box-shadow:
            0 0 0 1px rgba(255, 75, 75, 0.08);
        }


        .field-error {
          margin-top: 5px;

          color: #ff3b3b;

          font-size: 10px;

          line-height: 1.3;

          font-weight: 500;
        }


        /* =========================================
           CONFIRM BUTTON
        ========================================= */

        .confirm-button {
          width: 100%;

          height: 43px;

          margin-top: 14px;

          border: none;

          border-radius: 7px;

          background: #85004a;

          color: #ffffff;

          font-family: inherit;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 0.45px;

          cursor: pointer;

          box-shadow:
            0 4px 10px rgba(133, 0, 74, 0.14);

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }


        .confirm-button span {
          margin-left: 5px;

          font-size: 15px;
        }


        .confirm-button:hover {
          background: #6f003e;

          transform: translateY(-1px);
        }


        /* =========================================
           SECURITY NOTE
        ========================================= */

        .security-note {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 6px;

          margin-top: 16px;

          color: #98a5b7;

          font-size: 9.5px;

          line-height: 1.3;

          text-align: center;
        }


        .lock-icon {
          color: #8a2058;

          font-size: 11px;
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {

          .advisory-booking-container {
            grid-template-columns: 1fr;

            max-width: 680px;
          }

          .advisory-left-column {
            order: 2;
          }

          .dispatch-card {
            order: 1;
          }
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .advisory-booking-section {
            padding: 20px 12px 30px;
          }

          .advisory-booking-container {
            gap: 16px;
          }

          .leadership-card,
          .receive-card {
            padding: 22px 19px;
          }

          .dispatch-card {
            padding: 24px 18px 22px;
          }

          .dispatch-title {
            font-size: 17px;
          }

          .date-grid {
            gap: 5px;
          }

          .date-box {
            height: 75px;
          }

          .date-number {
            font-size: 12px;
          }

          .time-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .form-grid {
            grid-template-columns: 1fr;

            gap: 12px;
          }

          .confirm-button {
            height: 45px;

            font-size: 10px;
          }

          .security-note {
            font-size: 8px;
          }
        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 420px) {

          .small-heading {
            font-size: 9px;
          }

          .active-advisors {
            font-size: 7px;

            padding: 0 7px;
          }

          .advisor-name {
            font-size: 13px;
          }

          .advisor-role,
          .advisor-detail {
            font-size: 9px;
          }

          .receive-title {
            font-size: 16px;
          }

          .receive-item-title {
            font-size: 11px;
          }

          .receive-item-text {
            font-size: 9px;
          }

          .date-grid {
            grid-template-columns:
              repeat(5, minmax(0, 1fr));
          }

          .date-box {
            height: 70px;

            padding: 3px;
          }

          .date-day {
            font-size: 8px;
          }

          .date-number {
            font-size: 10px;
          }

          .date-open {
            font-size: 7px;
          }

          .dispatch-title {
            font-size: 16px;
          }
        }

      `}</style>
    </section>
  );
}