import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 text-stone-700">
      <h1 className="text-3xl font-semibold text-stone-900">Privacy Policy</h1>
      <p className="mt-4">
        TechTorch uses the details you share through our forms and accounts only to respond to your enquiry,
        manage your candidate account and review your job interests or blog submissions.
      </p>
      <p className="mt-4">
        We do not sell your personal information. You can ask us to correct or delete your data at any time by
        contacting our team through the <Link to="/start-conversation" className="text-[#780042] underline">Contact Us</Link> page.
      </p>
      <p className="mt-4 text-sm text-stone-500">Replace this placeholder with your company's final legal text.</p>
    </div>
  );
}