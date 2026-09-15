import React from "react";

export default function CostOfWaitingSection() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
        xl:px-12
        xl:py-20
      "
    >
      {/* ================= CENTER CONTAINER ================= */}
      <div
        className="
          mx-auto
          w-full
          max-w-3xl
          sm:max-w-4xl
          lg:max-w-5xl
          xl:max-w-6xl
        "
      >
        {/* ================= LABEL ================= */}
        <span
          className="
            text-[9px]
            font-semibold
            tracking-[0.15em]
            text-fuchsia-900
            sm:text-[10px]
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          EDITORIAL REFLECTION
        </span>

        {/* ================= HEADING ================= */}
        <h1
          className="
            mt-3
            w-full
            text-[22px]
            font-bold
            leading-[1.3]
            text-slate-900
            sm:text-[26px]
            md:text-[30px]
            lg:text-[34px]
            xl:text-[36px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          The Cost of Waiting Can Be Greater Than the Cost of Preparing
        </h1>

        {/* ================= INTRO ================= */}
        <p
          className="
            mt-5
            w-full
            text-[13px]
            leading-[1.75]
            text-slate-600
            sm:mt-6
            sm:text-[14px]
            md:text-[15px]
            md:leading-[1.8]
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Cybersecurity often receives attention after something has
          already gone wrong.
        </p>

        {/* ================= HIGHLIGHT ================= */}
        <div
          className="
            mt-6
            w-full
            border-l-4
            border-fuchsia-900
            bg-slate-50
            px-4
            py-3
            sm:mt-7
            sm:px-5
            sm:py-4
            md:px-6
          "
        >
          <p
            className="
              text-[13px]
              font-medium
              leading-[1.6]
              text-slate-900
              sm:text-[14px]
              md:text-[15px]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            A suspicious login. A compromised account. An unavailable
            system. A data exposure.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-6 w-full sm:mt-7">
          <p
            className="
              text-[13px]
              leading-[1.75]
              text-slate-600
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.8]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            By that point, the organization is responding under pressure.
          </p>

          <p
            className="
              mt-4
              text-[13px]
              leading-[1.75]
              text-slate-600
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.8]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            A proactive security approach changes the conversation.
          </p>

          <p
            className="
              mt-4
              text-[13px]
              leading-[1.75]
              text-slate-600
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.8]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Instead of asking what to do after an incident, businesses can
            ask where they are exposed today, what information needs greater
            protection and how quickly they could respond if something
            unexpected happened.
          </p>

          <p
            className="
              mt-4
              text-[13px]
              leading-[1.75]
              text-slate-600
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.8]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            That shift—from reaction to preparation—is what makes
            cybersecurity part of good business management.
          </p>
        </div>

        {/* ================= FINAL STATEMENT ================= */}
        <p
          className="
            mt-7
            w-full
            text-[14px]
            font-semibold
            leading-[1.7]
            text-slate-900
            sm:mt-8
            sm:text-[15px]
            md:text-[16px]
            md:leading-[1.75]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Security isn't about assuming nothing will go wrong. It's about
          being prepared when it does.
        </p>
      </div>
    </section>
  );
}