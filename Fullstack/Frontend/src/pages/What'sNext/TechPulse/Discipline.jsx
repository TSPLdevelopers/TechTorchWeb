import React from "react";

export default function TechnologyCapabilities() {
  const capabilities = [
    {
      number: "01",
      title: "IT CONSULTANCY",
      description:
        "Technology guidance aligned with business objectives and digital transformation requirements.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "02",
      title: "ARTIFICIAL INTELLIGENCE",
      description:
        "AI capabilities that allow organizations to explore intelligent solutions without internal maintenance overhead.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "03",
      title: "CLOUD INFRASTRUCTURE",
      description:
        "Scalable infrastructure designed to support evolving enterprise IT requirements and high availability.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "04",
      title: "CYBER SECURITY",
      description:
        "Technology and security services focused on protecting digital assets and sensitive business information.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "05",
      title: "SOFTWARE ENGINEERING",
      description:
        "Engineering expertise focused on mission-critical technical and operational requirements.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "06",
      title: "SOFTWARE DEV & SUPPORT",
      description:
        "End-to-end development, integration, modernization and ongoing technical support services.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "07",
      title: "BPO SERVICES",
      description:
        "Technology-enabled operational support designed to improve efficiency and focus on core priorities.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "08",
      title: "RESOURCE & STAFFING",
      description:
        "Skilled technology professionals and flexible workforce solutions tailored to project demands.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <section className="technology-capabilities">
      <div className="technology-container">

        {/* Header */}
        <div className="technology-header">
          <div className="technology-badge">
            <span className="badge-dot"></span>
            ENGINEERING DISCIPLINE
          </div>

          <h2>
            Technology Should Create Clarity,
            <br />
            Not Complexity
          </h2>

          <p>
            TechTorch's broader technology capabilities allow businesses to
            approach digital
            <br className="desktop-break" />
            transformation from multiple directions.
          </p>
        </div>

        {/* Cards */}
        <div className="technology-grid">
          {capabilities.map((item) => (
            <article className="technology-card" key={item.number}>
              <div className="technology-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="technology-image"
                />

                <div className="capability-label">
                  CAPABILITY&nbsp;&nbsp;{item.number}
                </div>
              </div>

              <div className="technology-card-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="technology-footer">
          THESE CAPABILITIES ARE PART OF TECHTORCH'S CURRENT ENTERPRISE
          SERVICES PORTFOLIO.
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .technology-capabilities {
          width: 100%;
          background: #faf9f4;
          padding: 34px 0 42px;
          overflow: hidden;
          font-family: "Inter", sans-serif;
          color: #11172b;
        }

        .technology-container {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ================= HEADER ================= */

        .technology-header {
          width: 100%;
        }

        .technology-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          height: 22px;
          padding: 0 10px;
          border: 1px solid #e4bfd1;
          border-radius: 14px;
          background: #fff9fc;
          color: #850047;
          font-size: 8px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.75px;
        }

        .badge-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #a30058;
          flex-shrink: 0;
        }

        .technology-header h2 {
          margin: 12px 0 8px;
          max-width: 650px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 31px;
          line-height: 1.08;
          letter-spacing: -1.25px;
          font-weight: 500;
          color: #0f1528;
        }

        .technology-header p {
          margin: 0;
          max-width: 700px;
          color: #627089;
          font-size: 11px;
          line-height: 1.5;
          font-weight: 400;
        }

        /* ================= GRID ================= */

        .technology-grid {
          width: 100%;
          margin-top: 43px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        /* ================= CARD ================= */

        .technology-card {
          width: 100%;
          min-width: 0;
          height: 252px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e3e7ec;
          border-radius: 10px;
          box-shadow: 0 2px 7px rgba(18, 27, 43, 0.04);
        }

        .technology-image-wrapper {
          position: relative;
          width: 100%;
          height: 110px;
          overflow: hidden;
          background: #202633;
        }

        .technology-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.74) saturate(0.85);
        }

        .capability-label {
          position: absolute;
          top: 10px;
          left: 9px;
          z-index: 2;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-height: 17px;
          padding: 0 6px;

          background: #fffafc;
          border: 1px solid #e2c0d1;
          border-radius: 2px;

          color: #830047;
          font-family: "Inter", sans-serif;
          font-size: 6.5px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.65px;
        }

        .technology-card-content {
          padding: 17px 14px 14px;
        }

        .technology-card-content h3 {
          margin: 0 0 7px;

          color: #171c2b;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12px;
          line-height: 1.25;
          font-weight: 800;
          letter-spacing: -0.25px;
        }

        .technology-card-content p {
          margin: 0;
          color: #637087;
          font-size: 9px;
          line-height: 1.58;
          font-weight: 400;
        }

        /* ================= FOOTER ================= */

        .technology-footer {
          margin-top: 34px;
          text-align: center;

          color: #9aa7b8;
          font-size: 7px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.35px;
        }

        /* ================= LARGE DESKTOP ================= */

        @media (min-width: 1500px) {
          .technology-container {
            max-width: 1250px;
            padding: 0 30px;
          }

          .technology-capabilities {
            padding-top: 42px;
            padding-bottom: 50px;
          }

          .technology-header h2 {
            font-size: 34px;
          }

          .technology-header p {
            font-size: 12px;
          }

          .technology-grid {
            margin-top: 47px;
            gap: 18px;
          }

          .technology-card {
            height: 270px;
          }

          .technology-image-wrapper {
            height: 120px;
          }

          .technology-card-content {
            padding: 19px 16px 16px;
          }

          .technology-card-content h3 {
            font-size: 13px;
          }

          .technology-card-content p {
            font-size: 9.5px;
          }
        }

        /* ================= TABLET ================= */

        @media (max-width: 1000px) {
          .technology-container {
            max-width: 900px;
          }

          .technology-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .technology-card {
            height: 270px;
          }

          .technology-image-wrapper {
            height: 125px;
          }
        }

        /* ================= SMALL TABLET ================= */

        @media (max-width: 700px) {
          .technology-capabilities {
            padding: 30px 0 38px;
          }

          .technology-container {
            padding: 0 20px;
          }

          .technology-header h2 {
            font-size: 27px;
            letter-spacing: -0.9px;
          }

          .technology-header p {
            font-size: 10.5px;
          }

          .desktop-break {
            display: none;
          }

          .technology-grid {
            margin-top: 32px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .technology-card {
            height: 260px;
          }

          .technology-image-wrapper {
            height: 115px;
          }

          .technology-card-content {
            padding: 15px 13px 13px;
          }

          .technology-card-content h3 {
            font-size: 11px;
          }

          .technology-card-content p {
            font-size: 8.5px;
            line-height: 1.55;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 520px) {
          .technology-capabilities {
            padding: 26px 0 34px;
          }

          .technology-container {
            padding: 0 16px;
          }

          .technology-badge {
            height: 21px;
            padding: 0 9px;
            font-size: 7px;
          }

          .technology-header h2 {
            margin-top: 11px;
            font-size: 24px;
            line-height: 1.1;
            letter-spacing: -0.7px;
          }

          .technology-header p {
            font-size: 10px;
            line-height: 1.5;
          }

          .technology-grid {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-top: 28px;
          }

          .technology-card {
            height: auto;
            min-height: 270px;
          }

          .technology-image-wrapper {
            height: 135px;
          }

          .technology-card-content {
            padding: 17px 15px 17px;
          }

          .technology-card-content h3 {
            font-size: 12px;
            margin-bottom: 7px;
          }

          .technology-card-content p {
            font-size: 9px;
            line-height: 1.6;
          }

          .capability-label {
            top: 9px;
            left: 9px;
            font-size: 6.5px;
          }

          .technology-footer {
            margin-top: 28px;
            font-size: 6.5px;
          }
        }

        /* ================= VERY SMALL MOBILE ================= */

        @media (max-width: 380px) {
          .technology-container {
            padding: 0 13px;
          }

          .technology-header h2 {
            font-size: 22px;
          }

          .technology-header p {
            font-size: 9.5px;
          }

          .technology-image-wrapper {
            height: 125px;
          }

          .technology-card {
            min-height: 255px;
          }

          .technology-card-content {
            padding: 15px 13px;
          }

          .technology-card-content h3 {
            font-size: 11px;
          }

          .technology-card-content p {
            font-size: 8.5px;
          }
        }
      `}</style>
    </section>
  );
}