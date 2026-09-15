import { useState } from "react";
import {
  Mail,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

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
    setForm((f) => ({
      ...f,
      [field]: e.target.value,
    }));

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
      <div
        className="
          min-h-screen
          w-full
          flex
          items-center
          justify-center
          px-4
          py-8
          sm:px-6
          sm:py-10
          lg:px-8
          lg:py-14
        "
      >
        <div
          className="
            w-full
            max-w-4xl
            rounded-2xl
            sm:rounded-3xl
            overflow-hidden
            shadow-2xl
            flex
            flex-col
            md:flex-row
          "
        >
          {/* ================= LEFT PANEL ================= */}
          <div
            className="
              relative
              w-full
              md:w-[42%]
              p-7
              sm:p-9
              md:p-10
              lg:p-12
              flex
              flex-col
              justify-between
              gap-10
              md:gap-16
              overflow-hidden
              font-inter
            "
            style={{
              background:
                "radial-gradient(120% 140% at 15% 15%, #6b1345 0%, #3d0d2c 45%, #1a0716 100%)",
            }}
          >
            <div>
              {/* Heading */}
              <h1
                className="
                  text-white
                  font-semibold
                  text-[28px]
                  sm:text-[32px]
                  md:text-[30px]
                  lg:text-[34px]
                  leading-[1.15]
                  tracking-tight
                  font-plus-jakarta
                "
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Start Your Transformation
              </h1>

              <p
                className="
                  mt-4
                  sm:mt-5
                  text-[14px]
                  sm:text-[16px]
                  leading-relaxed
                  text-white/70
                  max-w-[300px]
                  font-inter
                "
              >
                Connect with our engineering leadership to architect your next
                phase of growth.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:contact@techtorch.solutions"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-white/10
                hover:bg-white/15
                transition-colors
                px-4
                py-3
                text-white/90
                text-[12px]
                sm:text-[14px]
                w-fit
                font-inter
                break-all
              "
            >
              <span
                className="
                  flex
                  items-center
                  justify-center
                  min-w-7
                  w-7
                  h-7
                  rounded-md
                  bg-white/15
                "
              >
                <Mail size={14} />
              </span>

              <span>contact@techtorch.solutions</span>
            </a>
          </div>

          {/* ================= RIGHT PANEL ================= */}
          <div
            className="
              w-full
              md:w-[58%]
              bg-white
              p-7
              sm:p-9
              md:p-10
              lg:p-12
              font-inter
            "
          >
            {submitted ? (
              <div
                className="
                  min-h-[380px]
                  sm:min-h-[420px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  gap-4
                  font-inter
                "
              >
                <CheckCircle2
                  className="text-[#7a1750]"
                  size={40}
                />

                <h2
                  className="
                    text-lg
                    sm:text-xl
                    font-semibold
                    text-slate-900
                    font-inter
                  "
                >
                  Inquiry received
                </h2>

                <p
                  className="
                    text-slate-500
                    text-[14px]
                    sm:text-[15px]
                    max-w-[280px]
                    font-inter
                  "
                >
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
                  className="
                    mt-2
                    text-[14px]
                    text-[#7a1750]
                    hover:underline
                    font-inter
                  "
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="
                  flex
                  flex-col
                  gap-6
                  sm:gap-7
                  font-inter
                "
              >
                {/* ================= NAME + EMAIL ================= */}
                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-6
                  "
                >
                  {/* Full Name */}
                  <div>
                    <label
                      className="
                        block
                        text-[12px]
                        font-semibold
                        tracking-wide
                        text-slate-500
                        mb-2
                        font-inter
                      "
                    >
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
                      <p className="mt-1 text-[12px] text-red-500 font-inter">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="
                        block
                        text-[12px]
                        font-semibold
                        tracking-wide
                        text-slate-500
                        mb-2
                        font-inter
                      "
                    >
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
                      <p className="mt-1 text-[12px] text-red-500 font-inter">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* ================= INDUSTRY ================= */}
                <div>
                  <label
                    className="
                      block
                      text-[12px]
                      font-semibold
                      tracking-wide
                      text-slate-500
                      mb-2
                      font-inter
                    "
                  >
                    Industry
                  </label>

                  <div className="relative">
                    <select
                      value={form.industry}
                      onChange={update("industry")}
                      className={`${inputBase} appearance-none pr-8 cursor-pointer ${
                        form.industry
                          ? "text-slate-800"
                          : "text-slate-400"
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
                      className="
                        pointer-events-none
                        absolute
                        right-1
                        top-1/2
                        -translate-y-1/2
                        text-[#7a1750]
                      "
                    />
                  </div>

                  {errors.industry && (
                    <p className="mt-1 text-[12px] text-red-500 font-inter">
                      {errors.industry}
                    </p>
                  )}
                </div>

                {/* ================= MESSAGE ================= */}
                <div>
                  <label
                    className="
                      block
                      text-[12px]
                      font-semibold
                      tracking-wide
                      text-slate-500
                      mb-2
                      font-inter
                    "
                  >
                    Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Briefly describe your enterprise objectives..."
                    value={form.message}
                    onChange={update("message")}
                    className={`
                      w-full
                      rounded-lg
                      border
                      p-3
                      sm:p-4
                      text-[14px]
                      sm:text-[15px]
                      text-slate-800
                      placeholder:text-slate-400
                      focus:outline-none
                      resize-none
                      transition-colors
                      font-inter
                      ${
                        errors.message
                          ? "border-red-400"
                          : "border-slate-200 focus:border-[#7a1750]"
                      }
                    `}
                  />

                  {errors.message && (
                    <p className="mt-1 text-[12px] text-red-500 font-inter">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* ================= SUBMIT ================= */}
                <button
                  type="submit"
                  className="
                    mt-1
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    py-3
                    sm:py-3.5
                    px-5
                    text-white
                    text-[14px]
                    sm:text-[15px]
                    font-medium
                    transition-all
                    duration-300
                    hover:brightness-110
                    active:scale-[0.99]
                    font-inter
                  "
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