import React from "react";

// Public folder image ko directly path se use karo
const apartmentImage = "/Apartment2.png";

export default function SoftwareGrowthSection() {
  return (
    <section
      style={{
        padding: "0 80px",
        background: "#ffffff",
        fontFamily: "Plus jakart sans, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1300px",
          margin: "0 auto",
          gap: "60px",
        }}
      >
        {/* ================= TEXT ================= */}
        <div
          style={{
            maxWidth: "500px",
            flex: "1 1 380px",
            padding: "60px 0",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              lineHeight: 1.25,
              fontWeight: 700,
              color: "#1a1a1a",
              margin: "0 0 32px 0",
            }}
          >
            Software That Can Grow
            <br />
            With <span style={{ color: "#7a1338" }}>Your Business</span>
          </h1>

          {/* Paragraph 1 */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#4a4a4a",
              margin: "0 0 28px 0",
            }}
          >
            Business requirements don't stay the same.
          </p>

          {/* Paragraph 2 */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#4a4a4a",
              margin: "0 0 28px 0",
            }}
          >
            Teams change. Customers grow. Processes evolve. New systems are
            introduced and existing ones need to connect.
          </p>

          {/* Paragraph 3 */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#4a4a4a",
              margin: "0 0 28px 0",
            }}
          >
            That's why we consider the future from the beginning.
          </p>

          {/* Paragraph 4 */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#4a4a4a",
              margin: "0 0 28px 0",
            }}
          >
            We build with scalability, maintainability, integration and
            long-term requirements in mind, so your software can continue to
            support the business as it evolves.
          </p>

          {/* Paragraph 5 */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#4a4a4a",
              margin: "0 0 28px 0",
            }}
          >
            We don't believe good software needs to be unnecessarily
            complicated.
          </p>

          {/* Highlight Text */}
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.6,
              color: "#7a1338",
              fontWeight: 700,
              margin: 0,
            }}
          >
            It needs to be right for the business today—and ready for
            tomorrow.
          </p>
        </div>

        {/* ================= IMAGE ================= */}
<div
  className="apartment-image-wrapper"
  style={{
    flex: "1 1 340px",
    maxWidth: "600px",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",

    // Image ko right side shift
    transform: "translateX(80px)",
   
  }}
>
  <img
    src={apartmentImage}
    alt="Residential apartment towers"
    style={{
      width: "100%",

      // Height kam
      height: "660px",

      display: "block",

      // Image crop nahi hogi
      objectFit: "contain",

      margin: 0,
      padding: 0,
    }}
  />
</div>
      </div>

      {/* ================= RESPONSIVE ================= */}
      <style>{`
        @media (max-width: 900px) {
          section {
            padding: 0 40px !important;
          }

          .apartment-image-wrapper {
            transform: translateX(20px) !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 0 !important;
          }

          section > div {
            gap: 0 !important;
          }

          section > div > div:first-child {
            padding: 50px 25px !important;
          }

          .apartment-image-wrapper {
            width: 100% !important;
            max-width: none !important;
            transform: translateX(0) !important;
          }

          .apartment-image-wrapper img {
            width: 100% !important;
            height: auto !important;
          }
        }

        @media (max-width: 480px) {
          section > div > div:first-child {
            padding: 40px 20px !important;
          }

          section h1 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}