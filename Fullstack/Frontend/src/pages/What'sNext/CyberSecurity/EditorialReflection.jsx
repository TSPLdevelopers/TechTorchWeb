import React from "react";

export default function CostOfWaitingSection() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-2xl">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-fuchsia-900">
          EDITORIAL REFLECTION
        </span>

        <h1 className="mt-3 text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
          The Cost of Waiting Can Be Greater Than the Cost of Preparing
        </h1>

        <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          Cybersecurity often receives attention after something has
          already gone wrong.
        </p>

        <div className="mt-6 border-l-4 border-fuchsia-900 bg-slate-50 px-4 py-3">
          <p className="text-sm font-medium text-slate-900 sm:text-[15px]">
            A suspicious login. A compromised account. An unavailable
            system. A data exposure.
          </p>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          By that point, the organization is responding under pressure.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          A proactive security approach changes the conversation.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          Instead of asking what to do after an incident, businesses can
          ask where they are exposed today, what information needs greater
          protection and how quickly they could respond if something
          unexpected happened.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          That shift—from reaction to preparation—is what makes
          cybersecurity part of good business management.
        </p>

        <p className="mt-8 text-sm font-semibold leading-relaxed text-slate-900 sm:text-[15px]">
          Security isn't about assuming nothing will go wrong. It's about
          being prepared when it does.
        </p>
      </div>
    </section>
  );
}