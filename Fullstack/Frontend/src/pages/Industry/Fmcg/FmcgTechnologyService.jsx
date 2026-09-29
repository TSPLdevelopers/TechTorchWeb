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
    image:
      "https://images.unsplash.com/photo-1758518726324-62bef7c815b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "AI services designed to help businesses use AI capabilities without building and maintaining their own infrastructure.",
    image:
      "https://images.pexels.com/photos/12899191/pexels-photo-12899191.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Cloud infrastructure services for business technology environments.",
    image:
      "https://images.pexels.com/photos/17489153/pexels-photo-17489153/free-photo-of-light-on-computer.jpeg?auto=compress&cs=tinysrgb&w=800",
    dark: true,
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Cybersecurity services focused on protecting digital assets and technology environments.",
    image:
      "https://images.pexels.com/photos/5380607/pexels-photo-5380607.jpeg?auto=compress&cs=tinysrgb&w=800",
    dark: true,
  },
  {
    number: "05",
    icon: MonitorSmartphone,
    title: "Software Engineering",
    description:
      "Engineering services covering software, systems and product development.",
    image:
      "https://images.pexels.com/photos/12899153/pexels-photo-12899153.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    number: "06",
    icon: Briefcase,
    title: "Business Process Outsourcing",
    description: "BPO services designed to support business operations.",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "07",
    icon: Code2,
    title: "Software Development & Support",
    description:
      "Development and ongoing support for business software.",
    image:
      "https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    number: "08",
    icon: UserPlus,
    title: "Resource & Staffing",
    description:
      "Technology resources and flexible workforce solutions.",
    image:
      "https://images.pexels.com/photos/3184663/pexels-photo-3184663.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="tech-service-card">
      {/* Image */}
      <div className="tech-service-image-wrapper">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="tech-service-image"
        />
      </div>

      {/* Content */}
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

        {/* Card Heading */}
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

        * {
          box-sizing: border-box;
        }

        /* ================= SECTION ================= */

        .tech-services-section {
          width: 100%;
          background: #F7F5F0;
          font-family: "Inter", Arial, sans-serif;
          color: #171717;
          overflow: hidden;
        }

        .tech-services-container {
          width: min(1200px, 100%);
          margin: 0 auto;
          padding: 72px 40px;
        }

        /* ================= HEADER ================= */

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
          max-width: 700px;
          margin: 13px 0 0;

          color: #171717;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 40px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.9px;
        }

        .tech-services-subheading {
          max-width: 650px;
          margin: 17px 0 0;

          color: #737373;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 500;
        }

        /* ================= GRID ================= */

        .tech-services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          margin-top: 42px;
        }

        /* ================= CARD ================= */

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

        /* ================= IMAGE ================= */

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

        /* ================= CARD CONTENT ================= */

        .tech-service-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 12px;

          padding: 20px;
        }

        .tech-service-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .tech-service-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          color: #7A1F3D;
        }

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

        .tech-service-title {
          margin: 0;

          color: #171717;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: -0.2px;
        }

        .tech-service-description {
          margin: 0;

          color: #737373;

          font-family: "Inter", Arial, sans-serif;
          font-size: 12.5px;
          line-height: 1.65;
          font-weight: 400;
        }

        /* ================= 1100px ================= */

        @media (max-width: 1100px) {
          .tech-services-container {
            padding: 62px 32px;
          }

          .tech-services-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
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

        /* ================= 800px ================= */

        @media (max-width: 800px) {
          .tech-services-container {
            padding: 54px 24px;
          }

          .tech-services-heading {
            font-size: 33px;
          }

          .tech-services-subheading {
            font-size: 13.5px;
          }

          .tech-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
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

        /* ================= 600px ================= */

        @media (max-width: 600px) {
          .tech-services-container {
            padding: 46px 17px;
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

        /* ================= 400px ================= */

        @media (max-width: 400px) {
          .tech-services-container {
            padding: 40px 14px;
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

        /* ================= 340px ================= */

        @media (max-width: 340px) {
          .tech-services-container {
            padding: 34px 11px;
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

        /* ================= REDUCED MOTION ================= */

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

          {/* Section Header */}
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

          {/* Services Grid */}
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