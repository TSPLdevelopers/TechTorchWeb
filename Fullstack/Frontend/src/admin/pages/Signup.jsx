import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell, { authInput } from "./AuthShell";
import { Button, useToast } from "../components/ui";
import { useRegister } from "../hooks/useAuth";

export default function Signup() {
  const navigate = useNavigate();
  const toast = useToast();
  const register = useRegister();
  const [f, setF] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (f.password.length < 6) return setError("Password must be at least 6 characters");
    if (f.password !== f.confirm) return setError("Passwords do not match");
    try {
      await register.mutateAsync({ name: f.name.trim(), email: f.email.trim(), password: f.password });
      toast("Account created — please sign in");
      navigate("/admin-login", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthShell
      title="Create Admin Account"
      subtitle="The first account becomes the superadmin"
      footer={<>Already have an account? <Link to="/admin-login" className="font-medium text-[#780042]">Sign in</Link></>}
    >
      <form onSubmit={submit} className="space-y-4">
        <input required placeholder="Full name" className={authInput} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
        <input type="email" required placeholder="Email address" className={authInput} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
        <input type="password" required placeholder="Password (min 6 characters)" className={authInput} value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} />
        <input type="password" required placeholder="Confirm password" className={authInput} value={f.confirm} onChange={(e) => setF({ ...f, confirm: e.target.value })} />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" loading={register.isPending} className="w-full py-3">Create account</Button>
      </form>
    </AuthShell>
  );
}
