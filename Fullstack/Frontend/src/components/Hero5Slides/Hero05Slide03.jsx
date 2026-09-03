import React from "react";

const MAROON = "#7a1338";

export default function ConnectedExperienceSection() {
  return (
    <section className="connected-experience-section">
      {/* Left Image */}
      <div className="connected-image-wrapper">
        <img
          src="/Hero5Slide3.png"
          alt="Connected Experience"
          className="connected-image"
        />
      </div>

      {/* Right Content */}
      <div className="connected-content">
        <h1>
          Everything Your Teams Need.
          <br />
          One <span>Connected Experience.</span>
        </h1>

        <p>
          TorchX Suite brings Talent, Engage, Finance, Pay and Inventory
          together to help businesses manage their most important operations
          from one connected platform. From people and customer relationships
          to financial management, payroll and inventory, each solution is
          designed to work as part of a broader business ecosystem—giving your
          teams greater visibility, simpler workflows and a more consistent way
          to work.
        </p>

        <a href="#">Explore TorchX Suite →</a>
      </div>

      <style>{`
        .connected-experience-section {
          display: flex;
          width: 100%;
          min-height: 480px;
          background: #ffffff;
          font-family: 'Segoe UI', Arial, sans-serif;
        }

        .connected-image-wrapper {
          flex: 1 1 50%;
          min-height: 480px;
          overflow: hidden;
        }

        .connected-image {
          width: 100%;
          height: 100%;
          min-height: 480px;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .connected-content {
          flex: 1 1 50%;
          padding: 50px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
        }

        /* Heading same position */
        .connected-content h1 {
          font-size: 32px;
          line-height: 1.35;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 20px 0;
          transform: translateY(-80px);
        }

        .connected-content h1 span {
          color: ${MAROON};
        }

        /* Paragraph thoda upar */
        .connected-content p {
          font-size: 17px;
          line-height: 1.75;
          color: #3a3a3a;
          margin: -20px 0 28px 0;
          max-width: 520px;
        }

        .connected-content a {
          display: inline-flex;
          align-self: flex-start;
          align-items: center;
          background: ${MAROON};
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 24px;
          border-radius: 6px;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .connected-content a:hover {
          background: #5e0d2a;
        }

        @media (max-width: 768px) {
          .connected-experience-section {
            flex-direction: column;
          }

          .connected-image-wrapper {
            width: 100%;
            min-height: 380px;
          }

          .connected-image {
            min-height: 380px;
          }

          .connected-content {
            width: 100%;
            padding: 45px 25px;
          }

          .connected-content h1 {
            font-size: 27px;
            transform: translateY(-10px);
          }

          .connected-content p {
            font-size: 16px;
            margin: -5px 0 28px 0;
          }
        }

        @media (max-width: 480px) {
          .connected-image-wrapper {
            min-height: 300px;
          }

          .connected-image {
            min-height: 300px;
          }

          .connected-content {
            padding: 35px 20px;
          }

          .connected-content h1 {
            font-size: 24px;
            transform: translateY(-8px);
          }

          .connected-content p {
            font-size: 15px;
            line-height: 1.7;
            margin: -3px 0 25px 0;
          }
        }
      `}</style>
    </section>
  );
}