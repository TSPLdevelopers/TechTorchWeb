import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function OtpVerification() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const handleVerify = async () => {
    if (!email) {
      setMessage("Email not found. Please request OTP again.");
      return;
    }

    if (!otp) {
      setMessage("Please enter OTP");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        "http://localhost:5000/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            otp: otp.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "OTP verification failed");
        return;
      }

      // OTP verified successfully
      setMessage("OTP verified successfully");

      // Abhi next reset-password page nahi banaya hai,
      // isliye filhaal login page par bhej rahe hain.
      setTimeout(() => {
        navigate("/admin-login");
      }, 1000);
    } catch (error) {
      console.error("Verify OTP error:", error);
      setMessage("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logo}>
          Torch<span style={styles.logoAccent}>X</span>
          <div style={styles.logoSub}>T A L E N T</div>
        </div>

        <h2 style={styles.heading}>Enter OTP</h2>

        {email && (
          <p style={styles.emailText}>
            OTP sent to {email}
          </p>
        )}

        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={styles.input}
        />

        {message && (
          <p style={styles.message}>
            {message}
          </p>
        )}

        <button
          type="button"
          onClick={handleVerify}
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <button
          type="button"
          style={styles.backLink}
          onClick={() => navigate("/admin-login")}
        >
          ← Back to login
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: "#eef1f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
  },

  card: {
    width: "100%",
    maxWidth: 420,
    padding: "32px 28px",
    borderRadius: 12,
    background: "#ffffff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    fontFamily: "Arial, sans-serif",
  },

  logo: {
    fontSize: 22,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 24,
  },

  logoAccent: {
    color: "#7c1e46",
  },

  logoSub: {
    fontSize: 9,
    letterSpacing: 3,
    color: "#6b7280",
    fontWeight: 400,
    marginTop: -2,
  },

  heading: {
    fontSize: 20,
    fontWeight: 700,
    color: "#7c1e46",
    marginBottom: 10,
  },

  emailText: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 20,
    wordBreak: "break-word",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    fontSize: 14,
    borderRadius: 8,
    border: "1px solid #e5e7eb",
    marginBottom: 12,
    outline: "none",
  },

  message: {
    fontSize: 13,
    color: "#7c1e46",
    margin: "0 0 12px 0",
  },

  button: {
    width: "100%",
    padding: "12px 14px",
    fontSize: 15,
    fontWeight: 600,
    color: "#ffffff",
    background: "#7c1e46",
    border: "none",
    borderRadius: 8,
    marginBottom: 16,
  },

  backLink: {
    display: "block",
    margin: "0 auto",
    padding: 0,
    background: "none",
    border: "none",
    fontSize: 13,
    color: "#374151",
    cursor: "pointer",
  },
};