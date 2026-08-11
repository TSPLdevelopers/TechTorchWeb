import React from "react";
import logo from "./TechTorch-version2/Frontend/src/assets/Tech Torch Logo.png"; // apna path adjust karo

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img src={logo} alt="TechTorch Solutions" style={{ height: 60 }} />
    </div>
  );
}

const NAV_LINKS = ["About Us", "Capabilities", "Industries", "Insights", "Careers", "Contact Us"];

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width="44" height="44" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="#8a1538" />
        <text
          x="50"
          y="66"
          fontFamily="Georgia, serif"
          fontSize="55"
          fontWeight="bold"
          fill="#fff"
          textAnchor="middle"
        >
          T
        </text>
      </svg>
      <div style={{ lineHeight: 1.05 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#8a1538", letterSpacing: 0.5 }}>
          TechTorch
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#8a1538", letterSpacing: 2 }}>
          SOLUTIONS
        </div>
        <div style={{ fontSize: 9, color: "#8a1538", letterSpacing: 1, fontStyle: "italic" }}>
          Lighting Future
        </div>
      </div>
    </div>
  );
}

export default function TechTorchNavbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 48px",
        background: "#fff",
        borderBottom: "1px solid #eee",
        fontFamily: "Arial, Helvetica, sans-serif",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Logo />
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: 36,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href="#"
              style={{ textDecoration: "none", color: "#222", fontSize: 15.5 }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#8a1538")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#222")}
            >
              {link}
            </a>
          </li>
        ))}
        <li style={{ fontSize: 18, color: "#222", cursor: "pointer" }}>&#128269;</li>
      </ul>
    </div>
  );
}