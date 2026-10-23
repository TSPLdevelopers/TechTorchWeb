import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useMe, ME_KEY } from "../account/useAccount";
import { PROFILE_KEY } from "../admin/hooks/useAuth";
import { PageLoader } from "../admin/components/ui";

/**
 * One guard for every protected page.
 *
 *   <Route element={<PermissionGate allowedRoles={["admin"]} />}> ... </Route>
 *
 * allowedRoles: "candidate" | "admin" | "superadmin"
 *   - "admin" also lets superadmins in (superadmin is a stronger admin)
 *   - "superadmin" is superadmin only
 *
 * It reads the same cached session (useMe) as the rest of the app, so there is
 * a single /api/auth/me call instead of one per guard, and logging out or an
 * expired session (see client.js) kicks the user out immediately.
 */

const roleOf = (me) =>
  me.accountType === "candidate"
    ? "candidate"
    : me.role === "superadmin"
    ? "superadmin"
    : "admin";

const homeFor = (me) => (me.accountType === "candidate" ? "/candidate" : "/admin-dashboard");

export default function PermissionGate({ allowedRoles, redirectTo = "/signin" }) {
  const location = useLocation();
  const qc = useQueryClient();
  const { data: me, isLoading, isError, refetch } = useMe();

  // client.js fires this when any API call comes back 401 (session expired)
  useEffect(() => {
    const onExpired = () => {
      qc.setQueryData(ME_KEY, null);
      qc.removeQueries({ queryKey: PROFILE_KEY });
    };
    window.addEventListener("auth:expired", onExpired);
    return () => window.removeEventListener("auth:expired", onExpired);
  }, [qc]);

  if (isLoading) return <PageLoader />;

  // server unreachable / 500 -> do not log the user out, let them retry
  if (isError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <p className="text-stone-700">Could not verify your session. Please check your connection.</p>
        <button
          type="button"
          onClick={() => refetch()}
          className="rounded-lg bg-stone-900 px-4 py-2 text-sm text-white"
        >
          Try again
        </button>
      </div>
    );
  }

  // signed out -> sign-in page, and come back here afterwards
  if (!me) return <Navigate to={redirectTo} replace state={{ from: location }} />;

  const role = roleOf(me);
  const allowed =
    !allowedRoles ||
    allowedRoles.includes(role) ||
    (role === "superadmin" && allowedRoles.includes("admin"));

  // signed in but wrong area (e.g. candidate opening /admin-dashboard)
  if (!allowed) return <Navigate to={homeFor(me)} replace />;

  return <Outlet />;
}
