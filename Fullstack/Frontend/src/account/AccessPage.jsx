import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ShieldCheck, UserRound } from "lucide-react";
import { ACCENT, Button, useToast } from "../admin/components/ui";
import { authApi } from "../admin/api/endpoints";
import { useCandidateSignUp, useMe, useSignIn } from "./useAccount";

const input =
  "w-full rounded-lg border border-stone-300 bg-stone-50 px-3.5 py-3 text-sm outline-none focus:border-[#780042] focus:bg-white";

const homeFor = (user) => (user?.accountType === "admin" ? "/admin-dashboard" : "/candidate");

// Go back to the page that sent the visitor here – but only if that kind of account may open it
// (otherwise a candidate bounced from an admin page would loop forever).
const destinationFor = (user, from) => {
  if (!from) return homeFor(user);
  const adminOnly = ["/admin-dashboard", "/news-insights", "/job-openings", "/events", "/whitepapers", "/latest-updates", "/account", "/admin-accounts", "/candidate-blogs", "/candidate-interests"];
  const isAdminPage = adminOnly.some((p) => from === p || from.startsWith(p + "/"));
  const isCandidatePage = from === "/candidate" || from.startsWith("/candidate/");
  if (user.accountType === "admin") return isCandidatePage ? homeFor(user) : from;
  return isAdminPage ? homeFor(user) : from;
};

function Password({ value, onChange, placeholder, autoComplete }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        required
        minLength={6}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={`${input} pr-11`}
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={() => setShow((v) => !v)}
        aria-label={show ? "Hide password" : "Show password"}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
}

/**
 * One page for everyone.
 *  - Sign in: admins and candidates use the same form; the server tells us who it was
 *    and we send them to the right place.
 *  - Create account: candidates sign up instantly; admins are created pending approval
 *    (the first admin ever becomes the superadmin).
 */
export default function AccessPage({ initialTab = "signin" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const { data: me, isLoading } = useMe();
  const signIn = useSignIn();
  const candidateSignUp = useCandidateSignUp();

  const [tab, setTab] = useState(initialTab);
  const [type, setType] = useState("candidate"); // sign-up account type
  const [error, setError] = useState("");
  const [login, setLogin] = useState({ email: "", password: "" });
  const [f, setF] = useState({ name: "", email: "", password: "", confirm: "", phone: "", city: "", headline: "" });
  const [adminPending, setAdminPending] = useState(false);
  const [busy, setBusy] = useState(false);

  const from = location.state?.from;

  if (!isLoading && me) return <Navigate to={destinationFor(me, from)} replace />;

  const switchTab = (t) => {
    setTab(t);
    setError("");
    setAdminPending(false);
  };

  const doSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const user = await signIn.mutateAsync({ email: login.email.trim(), password: login.password });
      navigate(destinationFor(user, from), { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  const doSignUp = async (e) => {
    e.preventDefault();
    setError("");
    if (f.password.length < 6) return setError("Password must be at least 6 characters");
    if (f.password !== f.confirm) return setError("Passwords do not match");

    try {
      if (type === "candidate") {
        await candidateSignUp.mutateAsync({
          name: f.name.trim(),
          email: f.email.trim(),
          password: f.password,
          phone: f.phone.trim(),
          city: f.city.trim(),
          headline: f.headline.trim(),
        });
        toast("Welcome! Your account is ready");
        navigate(destinationFor({ accountType: "candidate" }, from), { replace: true });
      } else {
        setBusy(true);
        const r = await authApi.register({ name: f.name.trim(), email: f.email.trim(), password: f.password });
        if (r.pendingApproval) {
          setAdminPending(true);
        } else {
          toast("Superadmin account created — please sign in");
          setLogin({ email: f.email.trim(), password: "" });
          switchTab("signin");
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-[#eef1f5] px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        <div className="mb-5 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold text-white" style={{ backgroundColor: ACCENT }}>T</div>
          <h1 className="text-xl font-semibold text-stone-900">
            {tab === "signin" ? "Sign in to TechTorch" : "Create your account"}
          </h1>
          <p className="mt-1 text-sm text-stone-500">
            {tab === "signin" ? "Candidates and admins sign in here" : "Join as a candidate, or request admin access"}
          </p>
        </div>

        <div className="mb-5 grid grid-cols-2 rounded-lg bg-stone-100 p-1 text-sm font-medium">
          {[["signin", "Sign in"], ["signup", "Sign up"]].map(([k, label]) => (
            <button
              key={k}
              type="button"
              onClick={() => switchTab(k)}
              className={`rounded-md py-2 transition ${tab === k ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"}`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "signin" && (
          <form onSubmit={doSignIn} className="space-y-4">
            <input type="email" required autoComplete="email" placeholder="Email address" className={input} value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} />
            <Password autoComplete="current-password" placeholder="Password" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} />
            <div className="text-right text-sm">
              <Link to="/admin-forgot-password" className="text-[#780042]">Forgot password?</Link>
            </div>
            {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
            <Button type="submit" loading={signIn.isPending} className="w-full py-3">Sign in</Button>
          </form>
        )}

        {tab === "signup" && !adminPending && (
          <form onSubmit={doSignUp} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {[["candidate", "Candidate", UserRound], ["admin", "Admin", ShieldCheck]].map(([k, label, Icon]) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setType(k)}
                  className={`flex items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition ${
                    type === k ? "border-[#780042] bg-[#780042]/5 text-[#780042]" : "border-stone-300 text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  <Icon size={16} /> {label}
                </button>
              ))}
            </div>

            <input required autoComplete="name" placeholder="Full name" className={input} value={f.name} onChange={set("name")} />
            <input type="email" required autoComplete="email" placeholder="Email address" className={input} value={f.email} onChange={set("email")} />

            {type === "candidate" && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <input type="tel" autoComplete="tel" placeholder="Phone (optional)" className={input} value={f.phone} onChange={set("phone")} />
                  <input placeholder="City (optional)" className={input} value={f.city} onChange={set("city")} />
                </div>
                <input placeholder="Headline, e.g. React developer · 3 yrs (optional)" className={input} value={f.headline} onChange={set("headline")} />
              </>
            )}

            <Password autoComplete="new-password" placeholder="Password (min 6 characters)" value={f.password} onChange={set("password")} />
            <Password autoComplete="new-password" placeholder="Confirm password" value={f.confirm} onChange={set("confirm")} />

            {type === "admin" && (
              <p className="rounded-lg bg-amber-50 p-3 text-xs text-amber-800">
                New admin accounts must be approved by the superadmin before they can sign in. The very first account becomes the superadmin.
              </p>
            )}
            {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
            <Button type="submit" loading={candidateSignUp.isPending || busy} className="w-full py-3">
              {type === "candidate" ? "Create candidate account" : "Request admin account"}
            </Button>
          </form>
        )}

        {tab === "signup" && adminPending && (
          <div className="rounded-lg bg-emerald-50 p-4 text-center text-sm text-emerald-800">
            <p className="font-medium">Request sent</p>
            <p className="mt-1">Your admin account is waiting for superadmin approval. You can sign in once it is approved.</p>
            <button className="mt-3 font-medium text-[#780042] underline" onClick={() => switchTab("signin")}>Back to sign in</button>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-stone-400">
          <Link to="/" className="hover:text-stone-600">← Back to website</Link>
        </p>
      </div>
    </div>
  );
}