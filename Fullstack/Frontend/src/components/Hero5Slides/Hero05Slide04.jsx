import React from 'react';

// Apni background image yahan daalein (ya seedha URL string bhi de sakte ho)
import backgroundImage from '/hero5slide4.png';

export default function BringBusinessTogetherSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '420px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0a0a0f',
        fontFamily: "'Segoe UI', Arial, sans-serif",
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Left-side dark gradient overlay so the text stays readable over the photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(5,5,10,0.85) 0%, rgba(5,5,10,0.6) 35%, rgba(5,5,10,0.15) 60%, rgba(5,5,10,0) 75%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '56px 70px',
          maxWidth: '560px',
        }}
      >
        <h1
          style={{
            fontSize: '28px',
            lineHeight: 1.3,
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 20px 0',
          }}
        >
          Bring Your Business Together
        </h1>

        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.7,
            color: '#d5d5da',
            margin: '0 0 16px 0',
          }}
        >
          Your business shouldn't have to depend on disconnected systems to
          get work done.
        </p>

        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.7,
            color: '#d5d5da',
            margin: '0 0 24px 0',
          }}
        >
          With TorchX Suite, your teams can manage essential business
          functions through one connected platform built to simplify
          operations, improve visibility and support sustainable growth.
        </p>

        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.7,
            color: '#ffffff',
            fontWeight: 700,
            margin: '0 0 28px 0',
          }}
        >
          Ready to see how TorchX Suite can work for your business?
        </p>

        <a
          href="#"
          style={{
            display: 'inline-block',
            background: 'transparent',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 600,
            padding: '12px 22px',
            borderRadius: '6px',
            border: '1px solid rgba(255,255,255,0.6)',
            textDecoration: 'none',
          }}
        >
          Talk to Our Experts →
        </a>
      </div>
    </section>
  );
}