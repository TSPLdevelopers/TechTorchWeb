import React, { useState } from "react";
import "./AdminLogin.css";
import logo from "../assets/TechTorchLogo.png";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="admin-login-page">
      <header className="admin-header">
        <img
          src={logo}
          alt="TechTorch Solutions"
          className="admin-logo"
        />

        <button className="back-home-btn" type="button">
          <span>←</span>
          Back To Home
        </button>
      </header>

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

        {/* RIGHT / ADMIN LOGIN CARD */}
        <section className="admin-login-card">

          <div className="shield-icon">
            <i className="fa-solid fa-shield-halved"></i>
          </div>

          <h2>Admin Login</h2>

          <p className="login-subtitle">
            Authorized access only for administrators.
          </p>

          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="input-group">
              <label>Email Address</label>

              <div className="input-container">
                <i className="fa-solid fa-envelope field-icon"></i>

                <input
                  type="email"
                  placeholder="admin@techtorch.com"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="input-group">
              <label>Password</label>

              <div className="input-container">
                <i className="fa-solid fa-lock field-icon"></i>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={
                      showPassword
                        ? "fa-solid fa-eye-slash"
                        : "fa-solid fa-eye"
                    }
                  ></i>
                </button>
              </div>
            </div>

        {/* FORGOT PASSWORD */}
<div className="login-forgot-password">
  <Link to="/admin-forgot-password">
    Forgot Password?
  </Link>
</div>
            {/* LOGIN BUTTON */}
            <button
              className="secure-login-btn"
              type="submit"
            >
              Sign In Securely
            </button>

          </form>
        </section>

      </main>

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

export default AdminLogin;