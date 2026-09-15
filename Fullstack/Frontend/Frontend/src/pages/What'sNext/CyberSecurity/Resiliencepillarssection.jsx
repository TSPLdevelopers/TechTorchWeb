import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const considerations = [
  "Who can access the information?",
  "What are they allowed to do with it?",
  "Where is the information stored?",
  "How is it transformed?",
  "What happens if access is compromised?",
];

export default function ResiliencePillarsSection() {
  const sectionRef = useRef(null);
  const stackRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin + crossfade only kicks in on larger screens — on mobile the
      // scroll-jack UX is awkward, so both rows just stack normally there.
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.set(row2Ref.current, { opacity: 0, y: 24, pointerEvents: "none" });
        gsap.set(row1Ref.current, { opacity: 1, y: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=90%",
            pin: true,
            pinSpacing: true,
            scrub: 0.6,
          },
        });

        tl.to(row1Ref.current, { opacity: 0, y: -24, duration: 0.4, ease: "power1.inOut" })
          .set(row1Ref.current, { pointerEvents: "none" })
          .set(row2Ref.current, { pointerEvents: "auto" })
          .to(row2Ref.current, { opacity: 1, y: 0, duration: 0.4, ease: "power1.inOut" }, "<0.1");

        return () => tl.scrollTrigger && tl.scrollTrigger.kill();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0B0A12] px-6 py-16 sm:px-10 lg:px-16 lg:py-10">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-[#730042] px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-rose-100">
            CORE RESILIENCE PILLARS
          </span>

          <h1 className="mx-auto mt-4 max-w-xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
            Data Protection &amp; Business Continuity
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-[15px]">
            Protecting mission-critical assets while ensuring operational
            endurance under any threat condition.
          </p>
        </div>

        {/* Stack: row 1 stays in normal flow (so this section has real,
            correct height) and row 2 sits absolutely on top of it — same
            size, so they can crossfade in place without changing height. */}
        <div ref={stackRef} className="relative mt-12 lg:mt-8">
          {/* Row 1 — Data & Access / Business Continuity */}
          <div ref={row1Ref} className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 sm:p-7 lg:max-h-[62vh] lg:overflow-y-auto">
              <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-300">
                DATA &amp; ACCESS
              </span>

              <h2 className="mt-4 text-lg sm:text-xl font-semibold leading-snug text-white">
                Protecting the Information That Matters
              </h2>

              <p className="mt-4 text-sm font-medium leading-relaxed text-slate-200">
                Not all information carries the same level of risk.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Customer records, financial information, employee data,
                intellectual property and operational information may
                require different levels of protection and access.
              </p>

              <div className="mt-6 rounded-md bg-black/30 p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-wide text-slate-200">
                  A WELL-DESIGNED SECURITY APPROACH CONSIDERS:
                </p>

                <ul className="mt-3 flex flex-col gap-2">
                  {considerations.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-400">
                By looking at security through these questions, organizations
                can create more controlled and accountable access to critical
                information.
              </p>
            </div>

            <div className="rounded-lg border border-fuchsia-900/40 bg-gradient-to-b from-fuchsia-950 to-[#2a0a1c] p-6 sm:p-7 lg:max-h-[62vh] lg:overflow-y-auto">
              <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-rose-100">
                BUSINESS CONTINUITY
              </span>

              <h2 className="mt-4 text-lg sm:text-xl font-semibold leading-snug text-white">
                Security Is Also About Keeping Business Moving
              </h2>

              <p className="mt-4 text-sm font-medium leading-relaxed text-rose-50">
                A security incident can become a business problem very
                quickly.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-rose-100/80">
                Systems may become unavailable. Teams may lose access to
                information. Customers may be affected. Operations may slow
                down while the organization works to understand and contain
                the issue.
              </p>

              <p className="mt-4 text-sm font-medium leading-relaxed text-rose-50">
                That's why cybersecurity should work alongside business
                continuity.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-rose-100/80">
                The goal is not only to reduce the likelihood of an incident,
                but also to prepare the organization to respond and recover
                when unexpected situations occur.
              </p>

              <div className="mt-6 rounded-md bg-black/25 p-4 sm:p-5">
                <p className="text-sm font-semibold leading-relaxed text-white">
                  Resilience gives your business a path forward when
                  technology doesn't go according to plan.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 — People & Security / Security for Modern Business */}
          <div
            ref={row2Ref}
            className="mt-5 grid grid-cols-1 gap-5 lg:mt-0 lg:grid-cols-2 lg:absolute lg:inset-0"
          >
            <div className="h-full rounded-2xl bg-[#f7f3ee] p-6 sm:p-8 lg:max-h-[62vh] lg:overflow-y-auto">
              <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-[10px] font-bold tracking-wide text-[#9d174d]">
                PEOPLE &amp; SECURITY
              </span>

              <h2 className="mt-4 text-xl sm:text-2xl font-bold leading-snug text-slate-900">
                Your People Are Part of the Security Strategy
              </h2>

              <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                Technology alone cannot create a secure organization.
              </p>

              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                Employees interact with systems, applications, email, data
                and external services every day. Their decisions can have a
                direct impact on the security of the business.
              </p>

              <p className="mt-3 text-sm sm:text-[15px] font-semibold leading-relaxed text-slate-900">
                That's why security awareness matters.
              </p>

              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                Clear policies, appropriate access controls and practical
                security guidance can help employees recognize risks and
                make better decisions when handling business information.
              </p>

              <div className="mt-6 border-t border-slate-300/60 pt-5">
                <p className="text-sm sm:text-[15px] font-bold leading-relaxed text-[#9d174d]">
                  A strong security culture combines technology, processes
                  and people.
                </p>
              </div>
            </div>

            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:max-h-[62vh] lg:overflow-y-auto">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold tracking-wide text-slate-600">
                SECURITY FOR MODERN BUSINESS
              </span>

              <h2 className="mt-4 text-xl sm:text-2xl font-bold leading-snug text-slate-900">
                Security That Fits the Way You Operate
              </h2>

              <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                Every organization has a different technology environment.
              </p>

              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                A growing company may need to establish security
                foundations as its systems expand. An established
                enterprise may need to manage multiple applications, users,
                integrations and legacy environments.
              </p>

              <p className="mt-3 text-sm sm:text-[15px] font-semibold leading-relaxed text-slate-900">
                There is no single security model that fits everyone.
              </p>

              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                TechTorch focuses on understanding the environment first and
                then identifying the security measures that make sense for
                the business.
              </p>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <div className="border-l-2 border-[#9d174d] pl-4">
                  <p className="text-sm sm:text-[15px] font-semibold leading-relaxed text-slate-900">
                    This allows security to become part of the
                    organization's technology strategy rather than an
                    isolated technical function.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}