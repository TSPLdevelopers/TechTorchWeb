
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PermissionGate({ allowedRoles }) {
  const location = useLocation();
  const [status, setStatus] = useState("loading");
  const [user, setUser] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const checkAuth = async () => {
      try {
        const base = (
          import.meta.env.VITE_API_URL || "http://localhost:5000"
        )
          .replace(/\/api\/?$/, "")
          .replace(/\/$/, "");

        const response = await fetch(`${base}/api/auth/me`, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          if (!cancelled) setStatus("unauthenticated");
          return;
        }

        const result = await response.json();
        const accountType = result.accountType;
        const account = result.data;

        if (!account || !accountType) {
          if (!cancelled) setStatus("unauthenticated");
          return;
        }

        if (!cancelled) {
          setUser({
            ...account,
            accountType,
          });
          setStatus("authenticated");
        }
      } catch (error) {
        console.error("Permission check failed:", error);

        if (!cancelled) {
          setStatus("unauthenticated");
        }
      }
    };

    checkAuth();

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Checking access...
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <Navigate
        to="/signin"
        replace
        state={{ from: location }}
      />
    );
  }

  const role =
    user?.accountType === "candidate"
      ? "candidate"
      : user?.role;

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
