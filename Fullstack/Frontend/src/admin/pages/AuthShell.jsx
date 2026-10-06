import React from "react";
import { ACCENT } from "../components/ui";

export const authInput =
  "w-full rounded-lg border border-stone-300 bg-stone-50 px-3.5 py-3 text-sm outline-none focus:border-[#780042] focus:bg-white";

export default function AuthShell({ title, subtitle, children, footer }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#eef1f5] p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold text-white" style={{ backgroundColor: ACCENT }}>T</div>
          <h1 className="text-xl font-semibold text-stone-900">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-stone-500">{subtitle}</p>}
        </div>
        {children}
        {footer && <div className="mt-6 text-center text-sm text-stone-500">{footer}</div>}
      </div>
    </div>
  );
}
