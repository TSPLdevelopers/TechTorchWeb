import React from 'react';

export default function BusinessValueSection() {
  return (
    <section
      style={{
        padding: '90px 80px',
        background: '#f7f4ef',
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1250px',
          margin: '-20px auto',
        }}
      >
        <h1
          style={{
            fontSize: '32px',
            lineHeight: 1.25,
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '0 0 40px 0',
          }}
        >
          Technology That
          <br />
          Delivers <span style={{ color: '#7a1338' }}>Business Value</span>
        </h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '80px',
          }}
        >
          {/* Left column */}
          <div style={{ flex: '1 1 380px', maxWidth: '520px' }}>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#333333',
                margin: '0 0 28px 0',
              }}
            >
              Good software should do more than introduce new technology. It
              should make the business work better.
            </p>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#333333',
                margin: '0 0 28px 0',
              }}
            >
              At TechTorch, we focus on building solutions that improve
              everyday operations, connect information and make work easier
              for the people who use them. Whether the goal is to reduce
              repetitive tasks, bring disconnected systems together or give
              teams better access to information, we look at the business
              outcome behind the technology.
            </p>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#333333',
                margin: 0,
              }}
            >
              As businesses grow, their requirements change. Teams expand,
              processes evolve and new systems need to work alongside
              existing ones. That's why we consider scalability,
              maintainability and integration from the beginning. We build
              software that can adapt to changing requirements without
              adding unnecessary complexity.
            </p>
          </div>

          {/* Right column */}
          <div style={{ flex: '1 1 380px', maxWidth: '520px' }}>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#333333',
                margin: '0 0 28px 0',
              }}
            >
              The right technology should also be practical. Not every
              business needs a large or complex system, and custom software
              isn't always the answer. But when standard solutions cannot
              support an important process or provide the flexibility a
              business needs, a tailored solution can make a meaningful
              difference.
            </p>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#333333',
                margin: '0 0 28px 0',
              }}
            >
              Our approach is simple: understand the problem, choose the
              right technology and build a solution that creates lasting
              value.
            </p>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#333333',
                margin: '0 0 28px 0',
              }}
            >
              Software should simplify work, connect people and information,
              support better decisions and give businesses room to grow.
            </p>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#7a1338',
                fontWeight: 700,
                margin: 0,
              }}
            >
              The goal isn't to build more technology. It's to build the
              right technology for the business—and make sure it continues
              to deliver value over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}