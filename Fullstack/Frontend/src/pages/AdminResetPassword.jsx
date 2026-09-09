import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MAROON = "#6e0f3d";

export default function AdminResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    if (!email) {
      setMessage("Email not found. Please request OTP again.");
      return;
    }

    if (!newPassword || !confirmPassword) {
      setMessage("Please enter both password fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        "http://localhost:5000/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            newPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to reset password");
        return;
      }

      setMessage("Password reset successfully");

      setTimeout(() => {
        navigate("/admin-login");
      }, 1000);
    } catch (error) {
      console.error("Reset password error:", error);
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
        padding: "24px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "#fff",
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
            margin: "0 0 10px",
          }}
        >
          Create new password
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#6b7280",
            margin: "0 0 30px",
          }}
        >
          Enter your new password below
        </p>

        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: 600,
            color: "#1f2430",
            marginBottom: "8px",
          }}
        >
          New password
        </label>

        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          style={{
            width: "100%",
            padding: "13px 16px",
            fontSize: "15px",
            color: "#1f2430",
            background: "#f8f9fb",
            border: "1px solid #e2e5eb",
            borderRadius: "10px",
            outline: "none",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: 600,
            color: "#1f2430",
            marginBottom: "8px",
          }}
        >
          Confirm password
        </label>

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          style={{
            width: "100%",
            padding: "13px 16px",
            fontSize: "15px",
            color: "#1f2430",
            background: "#f8f9fb",
            border: "1px solid #e2e5eb",
            borderRadius: "10px",
            outline: "none",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        {message && (
          <p
            style={{
              color: MAROON,
              fontSize: "14px",
              margin: "0 0 16px",
            }}
          >
            {message}
          </p>
        )}

        <button
          type="button"
          onClick={handleResetPassword}
          disabled={loading}
          style={{
            width: "100%",
            padding: "15px",
            background: MAROON,
            color: "#fff",
            fontSize: "16px",
            fontWeight: 700,
            border: "none",
            borderRadius: "12px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Updating..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
}