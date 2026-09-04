import { useState } from "react";
import { Mail, ChevronDown, ArrowRight, CheckCircle2 } from "lucide-react";

const INDUSTRIES = [
  "Technology & Software",
  "Financial Services",
  "Healthcare & Life Sciences",
  "Manufacturing",
  "Retail & E-commerce",
  "Energy & Utilities",
  "Other",
];

export default function TransformationForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    industry: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Enter your full name";
    if (!form.email.trim()) {
      next.email = "Enter your company email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }
    if (!form.industry) next.industry = "Select an industry";
    if (!form.message.trim()) next.message = "Tell us about your objectives";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const inputBase =
    "w-full bg-transparent border-b pb-2 text-[17px] text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 p-6">
      <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left panel */}
        <div
          className="relative w-full md:w-[42%] p-10 md:p-12 flex flex-col justify-between overflow-hidden"
          style={{
            background:
              "radial-gradient(120% 140% at 15% 15%, #6b1345 0%, #3d0d2c 45%, #1a0716 100%)",
          }}
        >
          <div>
            <h1 className="text-white font-semibold text-[34px] leading-[1.15] tracking-tight">
              Start Your Transformation
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-white/70 max-w-[270px]">
              Connect with our engineering leadership to architect your next
              phase of growth.
            </p>
          </div>

          <a
            href="contact@techtorch.solutions"
            className="inline-flex items-center gap-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors px-4 py-3 text-white/90 text-[14px] w-fit"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-md bg-white/15">
              <Mail size={14} />
            </span>
            contact@techtorch.solutions
          </a>
        </div>

        {/* Right panel: form */}
        <div className="w-full md:w-[58%] bg-white p-10 md:p-12">
          {submitted ? (
            <div className="h-full min-h-[420px] flex flex-col items-center justify-center text-center gap-4">
              <CheckCircle2 className="text-[#7a1750]" size={40} />
              <h2 className="text-xl font-semibold text-slate-900">
                Inquiry received
              </h2>
              <p className="text-slate-500 text-[15px] max-w-[280px]">
                Someone from our engineering leadership team will reach out to{" "}
                {form.email} shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ fullName: "", email: "", industry: "", message: "" });
                }}
                className="mt-2 text-[14px] text-[#7a1750] hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] font-semibold tracking-wide text-slate-500 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    value={form.fullName}
                    onChange={update("fullName")}
                    className={`${inputBase} ${
                      errors.fullName
                        ? "border-red-400"
                        : "border-slate-200 focus:border-[#7a1750]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[12px] font-semibold tracking-wide text-slate-500 mb-2">
                    Company Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={update("email")}
                    className={`${inputBase} ${
                      errors.email
                        ? "border-red-400"
                        : "border-slate-200 focus:border-[#7a1750]"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold tracking-wide text-slate-500 mb-2">
                  Industry
                </label>
                <div className="relative">
                  <select
                    value={form.industry}
                    onChange={update("industry")}
                    className={`${inputBase} appearance-none pr-8 cursor-pointer ${
                      form.industry ? "text-slate-800" : "text-slate-400"
                    } ${
                      errors.industry
                        ? "border-red-400"
                        : "border-slate-200 focus:border-[#7a1750]"
                    }`}
                  >
                    <option value="" disabled>
                      Select an industry...
                    </option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#7a1750]"
                  />
                </div>
                {errors.industry && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.industry}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[12px] font-semibold tracking-wide text-slate-500 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your enterprise objectives..."
                  value={form.message}
                  onChange={update("message")}
                  className={`w-full rounded-lg border p-4 text-[15px] text-slate-800 placeholder:text-slate-400 focus:outline-none resize-none transition-colors ${
                    errors.message
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#7a1750]"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg py-3.5 text-white text-[15px] font-medium transition-transform active:scale-[0.99]"
                style={{
                  background:
                    "linear-gradient(135deg, #8a1a5c 0%, #5c0f3d 100%)",
                }}
              >
                Submit Inquiry
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}