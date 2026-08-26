import React, { useState } from "react";
import "./AdminForgotPassword.css";
import logo from "../assets/TechTorchLogo.png";
import { Link } from "react-router-dom";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    // Backend API baad mein yahan connect karenge
    console.log("Reset code requested for:", email);
  };

  return (
    <div className="admin-login-page">

      {/* HEADER */}
      <header className="admin-header">
        <img
          src={logo}
          alt="TechTorch Solutions"
          className="admin-logo"
        />

      <Link to="/" className="back-home-btn">
  <i className="fa-solid fa-arrow-left"></i>
  Back To Home
</Link>
      </header>

      {/* MAIN */}
      <main className="admin-main">

        {/* LEFT / FRONT OFFICE SECTION */}
        <section className="admin-left">

          <div className="front-office-badge">
            TechTorch Front Office
          </div>

          <h1>Admin Access Portal</h1>

          <p className="admin-description">
            Manage walk-ins, monitor daily entries, export reports, and
            access secure walk-in history from one dashboard.
          </p>

          <div className="feature-grid">

            <div className="feature-box">
              <span>✓</span>
              Database admin login
            </div>

            <div className="feature-box">
              <span>✓</span>
              All walk-ins data CSV export
            </div>

            <div className="feature-box">
              <span>✓</span>
              Secure walk-ins records
            </div>

            <div className="feature-box">
              <span>✓</span>
              Search and other filters
            </div>

          </div>

        </section>

        {/* RIGHT / FORGOT PASSWORD CARD */}
        <section className="admin-login-card">

          <div className="shield-icon">
            <i className="fa-solid fa-shield-halved"></i>
          </div>

          <h2>Forgot Password</h2>

          <p className="login-subtitle">
            Enter your registered email address to receive a secure
            password reset code.
          </p>

          <form onSubmit={handleForgotPassword}>

            {/* EMAIL */}
            <div className="input-group">

              <label>Email Address</label>

              <div className="input-container">

                <i className="fa-solid fa-envelope field-icon"></i>

                <input
                  type="email"
                  placeholder="admin@techtorch.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

            </div>

            {/* SEND RESET CODE */}
            <button
              className="secure-login-btn"
              type="submit"
            >
              Send Reset Code
            </button>

          </form>

          {/* BACK TO LOGIN */}
          <div className="forgot-password">
            <Link to="/admin-login">
              Back To Login
            </Link>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="admin-footer">

        <span>
          © 2024 - 2026 TechTorch Solutions Private Limited
        </span>

        <div>
          <a href="#">Privacy Policy</a>
          <span>Version 0.1</span>
        </div>

      </footer>

    </div>
  );
};

export default AdminForgotPassword;