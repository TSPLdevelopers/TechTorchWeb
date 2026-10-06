import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell, { authInput } from "./AuthShell";
import { Button, useToast } from "../components/ui";
import { authApi } from "../api/endpoints";

// One page, three steps: email -> OTP -> new password
export default function ForgotPassword() {
  const navigate = useNavigate();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [pw, setPw] = useState({ newPassword: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const run = (fn) => async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await fn();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const sendCode = run(async () => {
    await authApi.forgot(email.trim());
    toast("Code sent to your email");
    setStep(2);
  });

  const verify = run(async () => {
    const res = await authApi.verifyOtp(email.trim(), otp.trim());
    setResetToken(res.resetToken);
    setStep(3);
  });

  const reset = run(async () => {
    if (pw.newPassword.length < 6) throw new Error("Password must be at least 6 characters");
    if (pw.newPassword !== pw.confirm) throw new Error("Passwords do not match");
    await authApi.reset({ email: email.trim(), newPassword: pw.newPassword, resetToken });
    toast("Password reset — please sign in");
    navigate("/admin-login", { replace: true });
  });

  return (
    <AuthShell
      title="Reset Password"
      subtitle={["", "Enter your registered email", "Enter the 6-digit code we emailed you", "Choose a new password"][step]}
      footer={<Link to="/admin-login" className="font-medium text-[#780042]">Back to login</Link>}
    >
      {step === 1 && (
        <form onSubmit={sendCode} className="space-y-4">
          <input type="email" required placeholder="Email address" className={authInput} value={email} onChange={(e) => setEmail(e.target.value)} />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" loading={loading} className="w-full py-3">Send code</Button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={verify} className="space-y-4">
          <input required inputMode="numeric" maxLength={6} placeholder="6-digit code" className={`${authInput} text-center tracking-[0.4em]`} value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" loading={loading} className="w-full py-3">Verify code</Button>
          <button type="button" onClick={() => { setStep(1); setError(""); }} className="block w-full text-center text-sm text-stone-500">Use a different email / resend</button>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={reset} className="space-y-4">
          <input type="password" required placeholder="New password" className={authInput} value={pw.newPassword} onChange={(e) => setPw({ ...pw, newPassword: e.target.value })} />
          <input type="password" required placeholder="Confirm new password" className={authInput} value={pw.confirm} onChange={(e) => setPw({ ...pw, confirm: e.target.value })} />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" loading={loading} className="w-full py-3">Reset password</Button>
        </form>
      )}
    </AuthShell>
  );
}
