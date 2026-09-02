import React from 'react';

// Apni background image yahan daalein (ya seedha URL string bhi de sakte ho)
import backgroundImage from '/hero5slide1.png';

const MAROON = '#7a1338';

export default function TorchXSuiteSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '650px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: "'Segoe UI', Arial, sans-serif",
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Left-side gradient overlay so the text stays readable over the photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 30%, rgba(255,255,255,0.15) 55%, rgba(255,255,255,0) 70%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '60px 80px',
          maxWidth: '620px',
        }}
      >
        <h1
          style={{
    fontSize: "34px",
    lineHeight: 1.3,
    fontWeight: 700,
    color: "#1a1a1a",
    margin: "0 0 22px 0",
    whiteSpace: "nowrap",
  }}
        >
          Everything Your Business Needs,
          <br />
          <span style={{ color: MAROON }}>Working Together</span>
        </h1>

        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.7,
            color: '#3a3a3a',
            margin: '0 0 20px 0',
          }}
        >
          TorchX Suite brings your essential business functions together in
          one connected platform, helping teams manage people, customers,
          finance, payroll and inventory with greater clarity and control.
        </p>

        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.7,
            color: '#3a3a3a',
            margin: '0 0 32px 0',
          }}
        >
          From everyday operations to business-wide decision-making, TorchX
          Suite gives your organization a more connected way to work,
          collaborate and grow.
        </p>

        <a
          href="#"
          style={{
            display: 'inline-block',
            background: MAROON,
            color: '#ffffff',
            fontSize: '15px',
            fontWeight: 600,
            padding: '13px 26px',
            borderRadius: '6px',
            textDecoration: 'none',
          }}
        >
          Explore TorchX Suite →
        </a>
      </div>
    </section>
  );
}