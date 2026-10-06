import React from "react";
import {
  ClipboardList,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  MonitorSmartphone,
  Briefcase,
  Code2,
  UserPlus,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: ClipboardList,
    title: "IT Consultancy",
    description: "Technology guidance based on business requirements.",
    image: "/fmcgtech1.png",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "AI services designed to help businesses use AI capabilities without building and maintaining their own infrastructure.",
    image: "/fmcgtech2.png",
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Cloud infrastructure services for business technology environments.",
    image: "/fmcgtech3.png",
    dark: true,
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Cybersecurity services focused on protecting digital assets and technology environments.",
    image: "/Diversemodern engineeringteam.png",
    dark: true,
  },
  {
    number: "05",
    icon: MonitorSmartphone,
    title: "Software Engineering",
    description:
      "Engineering services covering software, systems and product development.",
    image: "/benchhiring.png",
  },
  {
    number: "06",
    icon: Briefcase,
    title: "Business Process Outsourcing",
    description: "BPO services designed to support business operations.",
    image: "/DeploymentMethodology.png",
  },
  {
    number: "07",
    icon: Code2,
    title: "Software Development & Support",
    description:
      "Development and ongoing support for business software.",
    image: "/fmcgtech7.png",
  },
  {
    number: "08",
    icon: UserPlus,
    title: "Resource & Staffing",
    description:
      "Technology resources and flexible workforce solutions.",
    image: "/fmcgtech8.png",
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="tech-service-card">

      {/* ================= IMAGE ================= */}

      <div className="tech-service-image-wrapper">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="tech-service-image"
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="tech-service-content">

        {/* Icon + Number */}

        <div className="tech-service-top">
          <Icon
            className="tech-service-icon"
            strokeWidth={1.75}
          />

          <span className="tech-service-number">
            {service.number}
          </span>
        </div>

        {/* Heading */}

        <h3 className="tech-service-title">
          {service.number.replace(/^0/, "")}. {service.title}
        </h3>

        {/* Description */}

        <p className="tech-service-description">
          {service.description}
        </p>

      </div>
    </article>
  );
}

export default function TechServicesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================
           SCOPED BOX SIZING
        ========================= */

        .tech-services-section,
        .tech-services-section * {
          box-sizing: border-box;
        }

        /* =========================
           SECTION
        ========================= */

        .tech-services-section {
          width: 100%;
          background: #F7F5F0;
          color: #171717;
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        /* =========================
           CONTAINER
           HERO SPACING SYSTEM
        ========================= */

        .tech-services-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          /* Desktop */
          padding: 78px 100px;
        }

        /* =========================
           HEADER
        ========================= */

        .tech-services-eyebrow {
          margin: 0;

          color: #7A1F3D;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.9px;
          text-transform: uppercase;
        }

        .tech-services-heading {
          max-width: 850px;

          margin: 13px 0 0;

          color: #171717;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 40px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.9px;
        }

        .tech-services-subheading {
          max-width: 760px;

          margin: 17px 0 0;

          color: #737373;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 500;
        }

        /* =========================
           GRID
        ========================= */

        .tech-services-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;

          margin-top: 42px;
        }

        /* =========================
           CARD
        ========================= */

        .tech-service-card {
          display: flex;
          flex-direction: column;

          min-width: 0;
          overflow: hidden;

          background: #ffffff;

          border-radius: 16px;

          box-shadow:
            0 0 0 1px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.28s ease,
            box-shadow 0.28s ease;
        }

        .tech-service-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 14px 35px rgba(0, 0, 0, 0.08);
        }

        /* =========================
           IMAGE
        ========================= */

        .tech-service-image-wrapper {
          position: relative;

          width: 100%;
          height: 155px;

          overflow: hidden;

          background: #eeeeee;
        }

        .tech-service-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition: transform 0.35s ease;
        }

        .tech-service-card:hover .tech-service-image {
          transform: scale(1.05);
        }

        /* =========================
           CARD CONTENT
        ========================= */

        .tech-service-content {
          display: flex;
          flex: 1;
          flex-direction: column;

          gap: 12px;

          padding: 20px;
        }

        /* =========================
           TOP ROW
        ========================= */

        .tech-service-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;
        }

        /* =========================
           ICON
        ========================= */

        .tech-service-icon {
          width: 20px;
          height: 20px;

          flex-shrink: 0;

          color: #7A1F3D;
        }

        /* =========================
           NUMBER
        ========================= */

        .tech-service-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-width: 31px;
          height: 23px;

          padding: 0 8px;

          border-radius: 999px;

          background: #fff1f4;
          color: #7A1F3D;

          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.2px;
        }

        /* =========================
           CARD TITLE
        ========================= */

        .tech-service-title {
          margin: 0;

          color: #171717;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: -0.2px;
        }

        /* =========================
           DESCRIPTION
        ========================= */

        .tech-service-description {
          margin: 0;

          color: #737373;

          font-family: "Inter", Arial, sans-serif;
          font-size: 12.5px;
          line-height: 1.65;
          font-weight: 400;
        }

        /* =========================
           LAPTOP / TABLET
           100px → 40px
        ========================= */

        @media (max-width: 1200px) {
          .tech-services-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .tech-services-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            gap: 17px;

            margin-top: 36px;
          }

          .tech-services-heading {
            font-size: 36px;
          }

          .tech-service-image-wrapper {
            height: 150px;
          }

          .tech-service-content {
            padding: 18px;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 800px) {
          .tech-services-container {
            padding-top: 54px;
            padding-bottom: 54px;
          }

          .tech-services-heading {
            font-size: 33px;
          }

          .tech-services-subheading {
            font-size: 13.5px;
          }

          .tech-services-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 15px;

            margin-top: 32px;
          }

          .tech-service-image-wrapper {
            height: 165px;
          }

          .tech-service-content {
            padding: 18px;
          }

          .tech-service-title {
            font-size: 15px;
          }

          .tech-service-description {
            font-size: 12px;
          }
        }

        /* =========================
           MOBILE
           24px SIDE SPACING
        ========================= */

        @media (max-width: 600px) {
          .tech-services-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 46px;
            padding-bottom: 46px;
          }

          .tech-services-eyebrow {
            font-size: 10px;
            letter-spacing: 0.7px;
          }

          .tech-services-heading {
            margin-top: 10px;

            font-size: 29px;
            line-height: 1.25;
            letter-spacing: -0.6px;
          }

          .tech-services-subheading {
            margin-top: 14px;

            font-size: 12.5px;
            line-height: 1.7;
          }

          .tech-services-grid {
            grid-template-columns: 1fr;

            gap: 13px;

            margin-top: 27px;
          }

          .tech-service-image-wrapper {
            height: 190px;
          }

          .tech-service-content {
            padding: 18px;
            gap: 10px;
          }

          .tech-service-title {
            font-size: 15px;
          }

          .tech-service-description {
            font-size: 12px;
            line-height: 1.65;
          }
        }

        /* =========================
           SMALL MOBILE
           16px SIDE SPACING
        ========================= */

        @media (max-width: 480px) {
          .tech-services-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 40px;
            padding-bottom: 40px;
          }

          .tech-services-heading {
            font-size: 26px;
            letter-spacing: -0.45px;
          }

          .tech-services-subheading {
            font-size: 11.5px;
          }

          .tech-services-grid {
            margin-top: 24px;
            gap: 11px;
          }

          .tech-service-image-wrapper {
            height: 170px;
          }

          .tech-service-content {
            padding: 16px;
          }

          .tech-service-title {
            font-size: 14px;
          }

          .tech-service-description {
            font-size: 11.5px;
          }

          .tech-service-icon {
            width: 18px;
            height: 18px;
          }

          .tech-service-number {
            min-width: 29px;
            height: 21px;
            font-size: 8.5px;
          }
        }

        /* =========================
           VERY SMALL MOBILE
        ========================= */

        @media (max-width: 340px) {
          .tech-services-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 34px;
            padding-bottom: 34px;
          }

          .tech-services-heading {
            font-size: 24px;
          }

          .tech-services-subheading {
            font-size: 11px;
          }

          .tech-service-image-wrapper {
            height: 150px;
          }

          .tech-service-content {
            padding: 14px;
          }

          .tech-service-title {
            font-size: 13.5px;
          }

          .tech-service-description {
            font-size: 11px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .tech-service-card,
          .tech-service-image {
            transition: none;
          }

          .tech-service-card:hover {
            transform: none;
          }

          .tech-service-card:hover .tech-service-image {
            transform: none;
          }
        }
      `}</style>

      <section className="tech-services-section">
        <div className="tech-services-container">

          {/* =========================
              SECTION HEADER
          ========================= */}

          <div>
            <p className="tech-services-eyebrow">
              Technology Services
            </p>

            <h2 className="tech-services-heading">
              Support across your technology journey
            </h2>

            <p className="tech-services-subheading">
              TechTorch provides technology services that can support
              businesses across different stages of their technology
              requirements.
            </p>
          </div>

          {/* =========================
              SERVICES GRID
          ========================= */}

          <div className="tech-services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                service={service}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}