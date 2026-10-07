import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Briefcase, LogIn, UserPlus } from "lucide-react";
import { useMe } from "./useAccount";

// Shown on the Contact Us page: sign in / sign up for candidates and admins.
export default function ContactAccountSection() {
  const { data: me, isLoading } = useMe();
  if (isLoading) return null;

  const dashboard = me?.accountType === "admin" ? "/admin-dashboard" : "/candidate";

  return (
    <section className="bg-[#f7f3f5] px-4 py-12 sm:py-16" id="account">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[#780042]/10 bg-white p-6 shadow-sm sm:p-10">
        {me ? (
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#780042]">Signed in</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">Welcome back, {me.name?.split(" ")[0]}</h2>
              <p className="mt-1 text-sm text-stone-600">
                {me.accountType === "admin" ? "Manage content, candidates and enquiries from your dashboard." : "Write blogs and track the roles you showed interest in."}
              </p>
            </div>
            <Link to={dashboard} className="rounded-lg bg-[#780042] px-5 py-3 text-sm font-medium text-white no-underline hover:opacity-90">
              Go to my dashboard
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#780042]">Candidates &amp; team</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900 sm:text-3xl">Join the TechTorch community</h2>
              <ul className="mt-4 space-y-3 text-sm text-stone-700">
                <li className="flex gap-3"><BookOpen size={18} className="mt-0.5 shrink-0 text-[#780042]" /> Write blogs and share your ideas with our readers.</li>
                <li className="flex gap-3"><Briefcase size={18} className="mt-0.5 shrink-0 text-[#780042]" /> Show interest in open roles and track your progress.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/signin" state={{ from: "/candidate" }} className="flex items-center justify-center gap-2 rounded-lg bg-[#780042] px-5 py-3 text-sm font-medium text-white no-underline hover:opacity-90">
                <LogIn size={17} /> Sign in
              </Link>
              <Link to="/signup" state={{ from: "/candidate" }} className="flex items-center justify-center gap-2 rounded-lg border border-[#780042] px-5 py-3 text-sm font-medium text-[#780042] no-underline hover:bg-[#780042]/5">
                <UserPlus size={17} /> Create a candidate account
              </Link>
              <p className="text-center text-xs text-stone-500">Admins use the same sign-in page.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}