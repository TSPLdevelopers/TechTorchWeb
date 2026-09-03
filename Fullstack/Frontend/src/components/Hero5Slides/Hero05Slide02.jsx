import React from "react";

const MAROON = "#7a1338";

export default function ConnectedPlatformSection() {
  return (
    <section className="connected-platform-section">
      <div className="connected-platform-content">
        <h1>
          One <span>Connected Platform</span> for a Better Way of Working
        </h1>

        <p>
          As businesses grow, managing different departments, teams and
          processes can become increasingly complex. HR works with employee
          information, sales teams manage customer relationships, finance
          handles accounts, payroll manages employee compensation, and
          operations keep track of inventory. When each function relies on
          separate systems, information can become scattered and everyday work
          becomes harder to coordinate.
        </p>

        <p className="highlight-text">
          TorchX Suite brings these essential business functions together in
          one connected ecosystem.
        </p>

        <p className="section-gap">
          Designed to simplify the way businesses operate, TorchX Suite helps
          teams work with the information they need while giving
          decision-makers a clearer view of the organization. Instead of
          switching between multiple disconnected tools, teams can manage their
          core activities through a unified business environment.
        </p>

        <h2>Built Around Your Business</h2>

        <p>
          Every organization has its own processes, people and priorities.
          TorchX Suite is designed to support these differences while keeping
          the most important parts of your business connected.
        </p>

        <p>
          From managing employees and customer relationships to handling
          finances, payroll and inventory, the platform helps reduce
          operational complexity and creates a smoother flow of information
          between teams.
        </p>

        <p className="section-gap">
          The result is a more organized way of working—where teams can spend
          less time managing systems and more time focusing on their
          responsibilities.
        </p>

        <h2>Helping Teams Work Smarter</h2>

        <p>
          Modern businesses need more than individual software tools. They need
          systems that work together.
        </p>

        <p>
          TorchX Suite connects important business activities so teams can
          collaborate more effectively, access relevant information and
          maintain better visibility across everyday operations. This connected
          approach can help reduce repetitive work, improve coordination and
          support more informed business decisions.
        </p>

        <p className="section-gap">
          Whether you're managing a growing team, building customer
          relationships, monitoring finances, processing payroll or keeping
          inventory under control, TorchX Suite provides a single environment
          to manage the work that keeps your business moving.
        </p>

        <h2>Designed for Growing Businesses</h2>

        <p>
          As your organization grows, your business requirements change. New
          employees join, operations expand, processes evolve and teams take on
          new responsibilities.
        </p>

        <p>Your business software should be ready for that growth.</p>

        <p className="last-paragraph">
          TorchX Suite provides a connected foundation that can support your
          evolving business needs, helping you manage essential functions
          without creating unnecessary complexity. With your core operations
          working together, it becomes easier to maintain consistency,
          visibility and control as your organization moves forward.
        </p>
      </div>

      <style>{`
        .connected-platform-section {
          width: 100%;
          padding: 70px 80px;
          background: #f7f4ef;
          font-family: "Inter", sans-serif;
          box-sizing: border-box;
        }

        .connected-platform-content {
          width: 100%;
          max-width: none;
          margin: 0;
        }

        .connected-platform-content h1 {
          font-size: 32px;
          line-height: 1.35;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 30px 0;
        }

        .connected-platform-content h1 span {
          color: ${MAROON};
        }

        .connected-platform-content p {
          width: 100%;
          max-width: none;
          font-size: 16px;
          line-height: 1.7;
          color: #3a3a3a;
          margin: 0 0 22px 0;
        }

        .connected-platform-content .highlight-text {
          font-weight: 700;
          color: #1a1a1a;
        }

        .connected-platform-content .section-gap {
          margin-bottom: 52px;
        }

        .connected-platform-content h2 {
          font-size: 24px;
          line-height: 1.4;
          font-weight: 700;
          color: ${MAROON};
          margin: 0 0 20px 0;
        }

        .connected-platform-content .last-paragraph {
          margin-bottom: 0;
        }

        @media (max-width: 900px) {
          .connected-platform-section {
            padding: 60px 50px;
          }

          .connected-platform-content h1 {
            font-size: 32px;
          }

          .connected-platform-content p {
            font-size: 19px;
            line-height: 1.7;
          }
        }

        @media (max-width: 768px) {
          .connected-platform-section {
            padding: 50px 25px;
          }

          .connected-platform-content {
            width: 100%;
          }

          .connected-platform-content h1 {
            font-size: 29px;
          }

          .connected-platform-content h2 {
            font-size: 22px;
          }

          .connected-platform-content p {
            font-size: 18px;
            line-height: 1.7;
          }

          .connected-platform-content .section-gap {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 480px) {
          .connected-platform-section {
            padding: 40px 20px;
          }

          .connected-platform-content h1 {
            font-size: 25px;
            line-height: 1.35;
            margin-bottom: 24px;
          }

          .connected-platform-content h2 {
            font-size: 20px;
          }

          .connected-platform-content p {
            font-size: 17px;
            line-height: 1.7;
            margin-bottom: 18px;
          }

          .connected-platform-content .section-gap {
            margin-bottom: 35px;
          }
        }
      `}</style>
    </section>
  );
}