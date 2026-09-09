
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MAROON = "#6e0f3d";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSendOTP = async () => {
    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        "http://localhost:5000/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to send OTP");
        return;
      }

      // OTP successfully sent
      navigate("/admin-verify-otp", {
        state: {
          email: email.trim(),
        },
      });
    } catch (error) {
      console.error("Send OTP error:", error);
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
          padding: "48px 44px 44px",
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
          Reset password
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#6b7280",
            margin: "0 0 32px 0",
          }}
        >
          Enter your email to receive a one-time code
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
          placeholder="you@company.com"
          style={{
            width: "100%",
            padding: "13px 16px",
            fontSize: "15px",
            color: "#1f2430",
            background: "#f8f9fb",
            border: "1px solid #e2e5eb",
            borderRadius: "10px",
            outline: "none",
            marginBottom: "28px",
            boxSizing: "border-box",
          }}
        />

        {message && (
          <p
            style={{
              color: MAROON,
              fontSize: "14px",
              margin: "-14px 0 18px 0",
            }}
          >
            {message}
          </p>
        )}

        {/* Send OTP button */}
        <button
          type="button"
          onClick={handleSendOTP}
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
            marginBottom: "26px",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>

        <p
          style={{
            textAlign: "center",
            margin: 0,
          }}
        >
          <button
            type="button"
            onClick={() => navigate("/admin-login")}
            style={{
              color: MAROON,
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span aria-hidden="true">&larr;</span> Back to sign in
          </button>
        </p>
      </div>
    </div>
  );
}

