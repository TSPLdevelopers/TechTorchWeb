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

    if (!form.fullName.trim()) {
      next.fullName = "Enter your full name";
    }

    if (!form.email.trim()) {
      next.email = "Enter your company email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }

    if (!form.industry) {
      next.industry = "Select an industry";
    }

    if (!form.message.trim()) {
      next.message = "Tell us about your objectives";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
    }
  };

  const inputBase =
    "w-full bg-transparent border-b pb-2 text-[15px] sm:text-[16px] lg:text-[17px] text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors font-inter";

  return (
    <section className="w-full bg-slate-950 font-inter">
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-[100px] lg:py-16 xl:py-20">
        <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl md:flex-row">
          {/* ================= LEFT PANEL ================= */}
          <div
            className="relative flex w-full flex-col justify-between gap-10 overflow-hidden p-7 font-inter sm:p-9 md:w-[42%] md:gap-16 md:p-10 lg:p-12"
            style={{
              background:
                "radial-gradient(120% 140% at 15% 15%, #6b1345 0%, #3d0d2c 45%, #1a0716 100%)",
            }}
          >
            <div>
              {/* Heading */}
              <h1
                className="text-[28px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[32px] md:text-[30px] lg:text-[34px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Start Your Transformation
              </h1>

              <p className="mt-4 max-w-[300px] text-[14px] leading-relaxed text-white/70 sm:mt-5 sm:text-[16px]">
                Connect with our engineering leadership to architect your next
                phase of growth.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:contact@techtorch.solutions"
              className="inline-flex w-fit items-center gap-3 break-all rounded-xl bg-white/10 px-4 py-3 text-[12px] text-white/90 transition-colors hover:bg-white/15 sm:text-[14px]"
            >
              <span className="flex h-7 w-7 min-w-7 items-center justify-center rounded-md bg-white/15">
                <Mail size={14} />
              </span>

              <span>contact@techtorch.solutions</span>
            </a>
          </div>

          {/* ================= RIGHT PANEL ================= */}
          <div className="w-full bg-white p-7 font-inter sm:p-9 md:w-[58%] md:p-10 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center gap-4 text-center sm:min-h-[420px]">
                <CheckCircle2 className="text-[#7a1750]" size={40} />

                <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                  Inquiry received
                </h2>

                <p className="max-w-[280px] text-[14px] text-slate-500 sm:text-[15px]">
                  Someone from our engineering leadership team will reach out
                  to {form.email} shortly.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      fullName: "",
                      email: "",
                      industry: "",
                      message: "",
                    });
                    setErrors({});
                  }}
                  className="mt-2 text-[14px] text-[#7a1750] hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-7">
                {/* ================= NAME + EMAIL ================= */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold tracking-wide text-slate-500">
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

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold tracking-wide text-slate-500">
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

                {/* ================= INDUSTRY ================= */}
                <div>
                  <label className="mb-2 block text-[12px] font-semibold tracking-wide text-slate-500">
                    Industry
                  </label>

                  <div className="relative">
                    <select
                      value={form.industry}
                      onChange={update("industry")}
                      className={`${inputBase} cursor-pointer appearance-none pr-8 ${
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

                {/* ================= MESSAGE ================= */}
                <div>
                  <label className="mb-2 block text-[12px] font-semibold tracking-wide text-slate-500">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Briefly describe your enterprise objectives..."
                    value={form.message}
                    onChange={update("message")}
                    className={`w-full resize-none rounded-lg border p-3 text-[14px] text-slate-800 placeholder:text-slate-400 transition-colors focus:outline-none sm:p-4 sm:text-[15px] ${
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

                {/* ================= SUBMIT ================= */}
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:brightness-110 active:scale-[0.99] sm:py-3.5 sm:text-[15px]"
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
    </section>
  );
}