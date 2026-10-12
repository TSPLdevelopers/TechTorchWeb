
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FormAuthGuard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    if (
      path.startsWith("/admin") ||
      path === "/signin" ||
      path === "/signup" ||
      path === "/login" ||
      path === "/candidate"
    ) {
      setShowPrompt(false);
      return;
    }

    const checkAuth = async () => {
      try {
        const base = (
          import.meta.env.VITE_API_URL || "http://localhost:5000"
        ).replace(/\/api\/?$/, "").replace(/\/$/, "");

        const response = await fetch(`${base}/api/auth/me`, {
          credentials: "include",
        });

        if (!response.ok) return false;

        const data = await response.json();
        return data.accountType === "candidate";
      } catch (error) {
        console.error("Auth check failed:", error);
        return false;
      }
    };

    const handleFieldClick = async (event) => {
      const field = event.target.closest(
        "input:not([type=button]):not([type=submit]), textarea, select, [contenteditable=true]"
      );

      if (!field || !document.contains(field)) return;

      const loggedIn = await checkAuth();

      if (!loggedIn) {
        event.preventDefault();
        field.blur();
        setShowPrompt(true);
      }
    };

    document.addEventListener("focusin", handleFieldClick, true);

    return () => {
      document.removeEventListener("focusin", handleFieldClick, true);
    };
  }, [location.pathname]);

  if (!showPrompt) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        style={{
          background: "#fff",
          color: "#111",
          padding: 28,
          borderRadius: 14,
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
        }}
      >
        <h2>Sign in to continue</h2>
        <p>Please sign in or create an account before submitting a query.</p>

        <button onClick={() => navigate("/signin")} style={{ margin: 8 }}>
          Sign In
        </button>

        <button onClick={() => navigate("/signup")} style={{ margin: 8 }}>
          Create Account
        </button>

        <button onClick={() => setShowPrompt(false)} style={{ margin: 8 }}>
          Cancel
        </button>
      </div>
    </div>
  );
}