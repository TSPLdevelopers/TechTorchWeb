import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthShell, { authInput } from "./AuthShell";
import { Button } from "../components/ui";
import { useLogin, useProfile } from "../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useLogin();
  const { data: me } = useProfile();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  if (me) return <Navigate to="/admin-dashboard" replace />; // already logged in

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login.mutateAsync({ email: form.email.trim(), password: form.password });
      navigate(location.state?.from || "/admin-dashboard", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthShell
      title="Admin Login"
      subtitle="Sign in to manage TechTorch content"
      footer={<>New here? <Link to="/admin-signup" className="font-medium text-[#780042]">Create an admin account</Link></>}
    >
      <form onSubmit={submit} className="space-y-4">
        <input type="email" required placeholder="Email address" className={authInput} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" required placeholder="Password" className={authInput} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <div className="text-right text-sm"><Link to="/admin-forgot-password" className="text-[#780042]">Forgot password?</Link></div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" loading={login.isPending} className="w-full py-3">Sign in</Button>
      </form>
    </AuthShell>
  );
}
