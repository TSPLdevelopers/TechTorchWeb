import React from "react";

export default function SecurityPerspectiveSection() {
  return (
    <section className="w-full bg-[#FAF6F1] px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-2xl">
        <span className="inline-flex w-fit items-center rounded-full bg-fuchsia-900 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-white">
          STRATEGIC PERSPECTIVE
        </span>

        <h1 className="mt-4 text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
          Security Shouldn't Be an Afterthought
        </h1>

        <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          As businesses become more connected, the systems they depend on
          also become more exposed. Applications, cloud environments,
          employee devices, networks and business data all form part of the
          digital environment—and each connection can introduce new security
          considerations.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          Cybersecurity, therefore, cannot be treated as something that is
          added after a system has already been built.
        </p>

        <div className="mt-6 border-l-4 border-fuchsia-900 bg-white px-4 py-3">
          <p className="text-sm font-medium text-slate-900 sm:text-[15px]">
            It needs to be considered as part of how the business operates.
          </p>
        </div>

        <div className="mt-8 rounded-md border-l-4 border-fuchsia-900 bg-white px-6 py-6">
          <span className="text-[10px] font-semibold tracking-[0.15em] text-fuchsia-900">
            EXECUTIVE PERSPECTIVE
          </span>
          <p className="mt-3 text-sm italic leading-relaxed text-slate-700 sm:text-[15px]">
            "At TechTorch, we take a business-focused approach to
            cybersecurity. We look beyond individual security tools to
            understand the environment those tools are protecting. This
            includes understanding your applications, infrastructure, data,
            users and the way information moves through your organization."
          </p>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          The objective is not simply to create more layers of technology.
          It is to identify where your business is exposed, strengthen the
          areas that matter most and establish security practices that can
          continue to support the organization as it changes.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          A strong security approach also needs to account for what happens
          when something goes wrong. Prevention is important, but businesses
          also need the ability to identify unusual activity, respond
          appropriately and recover without unnecessary disruption.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          That is why effective cybersecurity is ultimately about more than
          protection.
        </p>

        <div className="mt-6 border-l-4 border-fuchsia-900 bg-white px-4 py-3">
          <p className="text-sm font-medium text-slate-900 sm:text-[15px]">
            It is about building confidence in the technology your business
            depends on.
          </p>
        </div>
      </div>
    </section>
  );
}