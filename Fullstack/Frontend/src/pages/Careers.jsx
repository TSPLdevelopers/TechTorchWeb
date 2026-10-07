import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Briefcase, MapPin } from "lucide-react";
import { Badge, Button, ErrorBox, Modal, PageLoader, useToast } from "../admin/components/ui";
import { formatLPA } from "../admin/utils/india";
import { useMe, useMyInterests, usePublicJobs, useShowInterest } from "../account/useAccount";

const field = "w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#780042]";

function InterestModal({ job, onClose }) {
  const toast = useToast();
  const show = useShowInterest();
  const [message, setMessage] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await show.mutateAsync({ jobId: job._id, message, resumeUrl });
      toast("Interest sent — our team will get in touch");
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Modal title={`Interested in ${job.title}`} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4 p-5">
        <textarea rows={4} maxLength={1000} placeholder="Tell us why you're a good fit (optional)" className={field} value={message} onChange={(e) => setMessage(e.target.value)} />
        <input type="url" placeholder="Link to your résumé / LinkedIn (optional)" className={field} value={resumeUrl} onChange={(e) => setResumeUrl(e.target.value)} />
        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
        <div className="flex justify-end gap-2">
          <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
          <Button type="submit" loading={show.isPending}>Send interest</Button>
        </div>
      </form>
    </Modal>
  );
}

export default function Careers() {
  const navigate = useNavigate();
  const { data: jobs, isLoading, error, refetch } = usePublicJobs();
  const { data: me } = useMe();
  const isCandidate = me?.accountType === "candidate";
  const { data: mine } = useMyInterests(isCandidate);
  const [selected, setSelected] = useState(null);

  const interestedIds = new Set((mine || []).map((i) => i.job));

  const onInterest = (job) => {
    if (!me) return navigate("/signin", { state: { from: "/careers" } });
    if (!isCandidate) return; // admins just browse
    setSelected(job);
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-semibold text-stone-900">Careers at TechTorch</h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        Find a role that fits and show your interest. {!me && <><Link to="/signin" state={{ from: "/careers" }} className="font-medium text-[#780042] underline">Sign in</Link> or create a free candidate account to apply.</>}
      </p>

      <div className="mt-8">
        {isLoading && <PageLoader />}
        {error && <ErrorBox error={error} onRetry={refetch} />}
        {jobs && jobs.filter((j) => j.status !== "Draft / Unlisted").length === 0 && (
          <div className="rounded-xl border border-dashed border-stone-300 p-10 text-center text-stone-500">
            No openings right now. Sign in and check back soon.
          </div>
        )}
        <ul className="space-y-4">
          {(jobs || []).filter((j) => j.status !== "Draft / Unlisted").map((j) => (
            <li key={j._id} className="rounded-xl border border-stone-200 bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-stone-900">{j.title}</h2>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-stone-500">
                    {j.department && <span className="inline-flex items-center gap-1"><Briefcase size={14} /> {j.department}</span>}
                    {j.location && <span className="inline-flex items-center gap-1"><MapPin size={14} /> {j.location}</span>}
                    {j.seniority && <span>{j.seniority}</span>}
                    <span>{formatLPA(j.compMin, j.compMax)}</span>
                  </div>
                </div>
                {j.status === "Closing Soon" && <Badge tone="amber">Closing soon</Badge>}
              </div>
              {j.pitch && <p className="mt-3 text-sm text-stone-600">{j.pitch}</p>}
              <div className="mt-4">
                {interestedIds.has(j._id) ? (
                  <Badge tone="green">Interest sent</Badge>
                ) : me && !isCandidate ? (
                  <span className="text-xs text-stone-400">Sign in as a candidate to show interest</span>
                ) : (
                  <Button onClick={() => onInterest(j)}>Show interest</Button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selected && <InterestModal job={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}