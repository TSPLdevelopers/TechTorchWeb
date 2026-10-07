import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { ConfirmDialog, ErrorBox, PageLoader, useToast } from "../components/ui";
import { formatDate } from "../utils/india";
import { useAdminInterestDelete, useAdminInterestStatus, useAdminInterests } from "../../account/useAccount";

const STATUSES = ["New", "Reviewing", "Shortlisted", "Contacted", "Rejected"];

export default function CandidateInterests() {
  const toast = useToast();
  const { data, isLoading, error, refetch } = useAdminInterests();
  const setStatus = useAdminInterestStatus();
  const remove = useAdminInterestDelete();
  const [deleting, setDeleting] = useState(null);
  const [q, setQ] = useState("");

  if (isLoading) return <PageLoader />;
  if (error) return <div className="p-6"><ErrorBox error={error} onRetry={refetch} /></div>;

  const rows = data.filter((i) => {
    const hay = `${i.candidate?.name} ${i.candidate?.email} ${i.jobTitle} ${i.area}`.toLowerCase();
    return hay.includes(q.toLowerCase());
  });

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-semibold text-stone-900">Candidate Interests</h1>
      <p className="mt-1 text-sm text-stone-500">Candidates who showed interest in your openings.</p>

      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, email or role…" className="mt-5 w-full max-w-sm rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#780042]" />

      {rows.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-stone-300 p-10 text-center text-sm text-stone-500">No interests yet.</div>
      ) : (
        <div className="mt-5 overflow-x-auto rounded-xl border border-stone-200 bg-white">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-stone-50 text-xs uppercase text-stone-500">
              <tr><th className="px-4 py-3">Candidate</th><th className="px-4 py-3">Interested in</th><th className="px-4 py-3">Message</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Date</th><th className="px-4 py-3" /></tr>
            </thead>
            <tbody className="divide-y divide-stone-100 align-top">
              {rows.map((i) => (
                <tr key={i._id}>
                  <td className="px-4 py-3">
                    <div className="font-medium text-stone-900">{i.candidate?.name || "Deleted candidate"}</div>
                    <div className="text-xs text-stone-500">{i.candidate?.email}</div>
                    <div className="text-xs text-stone-400">{[i.candidate?.phone, i.candidate?.city].filter(Boolean).join(" · ")}</div>
                  </td>
                  <td className="px-4 py-3 text-stone-700">{i.jobTitle || i.area || "General"}</td>
                  <td className="max-w-xs px-4 py-3 text-stone-600">
                    <p className="line-clamp-3">{i.message || "—"}</p>
                    {i.resumeUrl && <a href={i.resumeUrl} target="_blank" rel="noreferrer noopener" className="text-xs text-[#780042] underline">Résumé / profile</a>}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={i.status}
                      onChange={async (e) => {
                        try { await setStatus.mutateAsync({ id: i._id, status: e.target.value }); toast("Status updated"); } catch (err) { toast(err.message, "error"); }
                      }}
                      className="rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-sm"
                    >
                      {STATUSES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-4 py-3 text-stone-500">{formatDate(i.createdAt)}</td>
                  <td className="px-4 py-3"><button title="Delete" onClick={() => setDeleting(i)} className="rounded p-1.5 text-red-600 hover:bg-red-50"><Trash2 size={17} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {deleting && (
        <ConfirmDialog
          title="Delete interest"
          message="Remove this candidate's interest record?"
          loading={remove.isPending}
          onCancel={() => setDeleting(null)}
          onConfirm={async () => {
            try { await remove.mutateAsync(deleting._id); toast("Deleted"); } catch (e) { toast(e.message, "error"); }
            setDeleting(null);
          }}
        />
      )}
    </div>
  );
}