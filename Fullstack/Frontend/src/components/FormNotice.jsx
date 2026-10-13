import React, { useEffect, useState } from "react";

// Floating success / error message for the website forms.
// It is position:fixed, so it looks the same no matter which form it sits in.
export default function FormNotice({
  error,
  success,
  successMessage = "Thank you! Your request has been submitted. Our team will contact you shortly.",
}) {
  const [visible, setVisible] = useState(true);

  // show again whenever a new result arrives, hide automatically after a while
  useEffect(() => {
    if (!error && !success) return undefined;
    setVisible(true);
    const t = setTimeout(() => setVisible(false), error ? 10000 : 6000);
    return () => clearTimeout(t);
  }, [error, success]);

  if (!visible || (!error && !success)) return null;
  const ok = !error;

  return (
    <div
      role={ok ? "status" : "alert"}
      style={{
        position: "fixed",
        left: "50%",
        bottom: 24,
        transform: "translateX(-50%)",
        zIndex: 100000,
        width: "min(92vw, 520px)",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "12px 14px",
        borderRadius: 12,
        fontSize: 14,
        lineHeight: 1.5,
        fontFamily: "Inter, Arial, sans-serif",
        boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
        border: `1px solid ${ok ? "#a7f3d0" : "#fecaca"}`,
        background: ok ? "#ecfdf5" : "#fef2f2",
        color: ok ? "#047857" : "#b91c1c",
        textAlign: "left",
      }}
    >
      <span style={{ flex: 1 }}>{error || successMessage}</span>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setVisible(false)}
        style={{
          border: "none",
          background: "transparent",
          color: "inherit",
          fontSize: 18,
          lineHeight: 1,
          cursor: "pointer",
          padding: 0,
        }}
      >
        ×
      </button>
    </div>
  );
}