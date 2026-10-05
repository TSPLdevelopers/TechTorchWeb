import React, { useEffect, useState } from "react";
import { useChangePassword, useProfile, useUpdateAccount } from "../hooks/useAuth";
import { Badge, Button, PageLoader, useToast } from "../components/ui";
import { formatDate } from "../utils/india";

const input = "w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-[#780042]";

export default function Account() {
  const toast = useToast();
  const { data: me, isLoading } = useProfile();
  const update = useUpdateAccount();
  const changePw = useChangePassword();

  const [profile, setProfile] = useState({ name: "", email: "" });
  const [pw, setPw] = useState({ oldPassword: "", newPassword: "", confirm: "" });

  useEffect(() => {
    if (me) setProfile({ name: me.name, email: me.email });
  }, [me]);

  if (isLoading || !me) return <PageLoader />;

  const saveProfile = async (e) => {
    e.preventDefault();
    try {
      await update.mutateAsync({ id: me._id, data: profile });
      toast("Profile updated");
    } catch (err) {
      toast(err.message, "error");
    }
  };

  const savePassword = async (e) => {
    e.preventDefault();
    if (pw.newPassword.length < 6) return toast("New password must be at least 6 characters", "error");
    if (pw.newPassword !== pw.confirm) return toast("Passwords do not match", "error");
    try {
      await changePw.mutateAsync({ id: me._id, data: { oldPassword: pw.oldPassword, newPassword: pw.newPassword } });
      setPw({ oldPassword: "", newPassword: "", confirm: "" });
      toast("Password changed");
    } catch (err) {
      toast(err.message, "error");
    }
  };

  return (
    <div className="max-w-2xl p-4 sm:p-8">
      <h1 className="text-2xl font-semibold text-stone-900">My Account</h1>
      <p className="mb-6 flex flex-wrap items-center gap-2 text-sm text-stone-500">
        <Badge tone={me.role === "superadmin" ? "blue" : "stone"}>{me.role}</Badge>
        Last login: {formatDate(me.lastLogin, true)}
      </p>

      <form onSubmit={saveProfile} className="mb-6 space-y-4 rounded-xl border border-stone-200 bg-white p-5">
        <h2 className="font-semibold text-stone-800">Profile</h2>
        <label className="block text-sm"><span className="mb-1 block font-medium text-stone-700">Name</span>
          <input className={input} value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} required /></label>
        <label className="block text-sm"><span className="mb-1 block font-medium text-stone-700">Email</span>
          <input type="email" className={input} value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} required /></label>
        <Button type="submit" loading={update.isPending}>Save profile</Button>
      </form>

      <form onSubmit={savePassword} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5">
        <h2 className="font-semibold text-stone-800">Change password</h2>
        <input type="password" placeholder="Current password" className={input} value={pw.oldPassword} onChange={(e) => setPw({ ...pw, oldPassword: e.target.value })} required />
        <input type="password" placeholder="New password (min 6 characters)" className={input} value={pw.newPassword} onChange={(e) => setPw({ ...pw, newPassword: e.target.value })} required />
        <input type="password" placeholder="Confirm new password" className={input} value={pw.confirm} onChange={(e) => setPw({ ...pw, confirm: e.target.value })} required />
        <Button type="submit" loading={changePw.isPending}>Update password</Button>
      </form>
    </div>
  );
}
