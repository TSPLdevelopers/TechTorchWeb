import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MAROON = "#6e0f3d";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        "http://localhost:5000/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: email.trim(),
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Invalid email or password");
        return;
      }

      // Login successful
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#eef1f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 20px 50px rgba(20,20,30,0.08)",
          padding: "48px 44px 40px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#141414",
            margin: "0 0 10px 0",
          }}
        >
          Welcome back
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#6b7280",
            margin: "0 0 32px 0",
          }}
        >
          Sign in to your TorchX Suite Store
        </p>

        {/* Email */}
        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: 600,
            color: "#1f2430",
            marginBottom: "8px",
          }}
        >
          Email address
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          style={{
            width: "100%",
            padding: "13px 16px",
            fontSize: "15px",
            color: "#1f2430",
            background: "#f8f9fb",
            border: "1px solid #e2e5eb",
            borderRadius: "10px",
            outline: "none",
            marginBottom: "22px",
            boxSizing: "border-box",
          }}
        />

        {/* Password */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <label
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#1f2430",
            }}
          >
            Password
          </label>

          {/* Forgot Password Link */}
          <Link
            to="/admin-forgot-password"
            style={{
              fontSize: "14px",
              color: "#8a93a3",
              textDecoration: "none",
            }}
          >
            Forgot password?
          </Link>
        </div>

        <div style={{ position: "relative", marginBottom: "28px" }}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "13px 44px 13px 16px",
              fontSize: "15px",
              color: "#1f2430",
              background: "#f8f9fb",
              border: "1px solid #e2e5eb",
              borderRadius: "10px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            {showPassword ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={MAROON}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.7 19.7 0 0 1 5.06-6.06M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a19.7 19.7 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={MAROON}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>

        {/* Login Error Message */}
        {message && (
          <p
            style={{
              color: MAROON,
              fontSize: "14px",
              margin: "0 0 16px 0",
            }}
          >
            {message}
          </p>
        )}

        {/* Sign in button */}
        <button
          type="button"
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: "15px",
            background: MAROON,
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: 700,
            border: "none",
            borderRadius: "12px",
            cursor: loading ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "22px",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Signing in..." : "Sign in"}

          {!loading && (
            <span style={{ fontSize: "18px" }}>&rarr;</span>
          )}
        </button>

        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#8a93a3",
            margin: 0,
          }}
        >
          Don&apos;t have an account?{" "}
          <a
            href="#"
            style={{
              color: MAROON,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}