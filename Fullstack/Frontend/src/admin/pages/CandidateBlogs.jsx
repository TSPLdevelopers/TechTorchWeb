import React, { useState } from "react";
import { Check, ExternalLink, Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge, Button, ConfirmDialog, ErrorBox, Modal, PageLoader, useToast } from "../components/ui";
import { formatDate } from "../utils/india";
import { useAdminBlogDelete, useAdminBlogUpdate, useAdminBlogs } from "../../account/useAccount";

const TONE = { pending: "amber", published: "green", rejected: "red" };
const FILTERS = ["all", "pending", "published", "rejected"];

export default function CandidateBlogs() {
  const toast = useToast();
  const { data, isLoading, error, refetch } = useAdminBlogs();
  const update = useAdminBlogUpdate();
  const remove = useAdminBlogDelete();
  const [filter, setFilter] = useState("pending");
  const [reading, setReading] = useState(null);
  const [rejecting, setRejecting] = useState(null);
  const [note, setNote] = useState("");
  const [deleting, setDeleting] = useState(null);

  if (isLoading) return <PageLoader />;
  if (error) return <div className="p-6"><ErrorBox error={error} onRetry={refetch} /></div>;

  const rows = data.filter((b) => filter === "all" || b.status === filter);
  const count = (s) => data.filter((b) => b.status === s).length;

  const setStatus = async (b, status, reviewNote) => {
    try {
      await update.mutateAsync({ id: b._id, data: { status, ...(reviewNote !== undefined ? { reviewNote } : {}) } });
      toast(status === "published" ? "Blog published" : status === "rejected" ? "Blog rejected" : "Moved back to pending");
      setReading(null);
    } catch (e) {
      toast(e.message, "error");
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-semibold text-stone-900">Candidate Blogs</h1>
      <p className="mt-1 text-sm text-stone-500">Review blogs written by candidates before they go live.</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium capitalize transition ${filter === f ? "bg-[#780042] text-white" : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-50"}`}
          >
            {f} {f !== "all" && <span className="opacity-70">({count(f)})</span>}
          </button>
        ))}
      </div>

      {rows.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-stone-300 p-10 text-center text-sm text-stone-500">Nothing here.</div>
      ) : (
        <div className="mt-5 overflow-x-auto rounded-xl border border-stone-200 bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-stone-50 text-xs uppercase text-stone-500">
              <tr><th className="px-4 py-3">Title</th><th className="px-4 py-3">Author</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Submitted</th><th className="px-4 py-3 text-right">Actions</th></tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {rows.map((b) => (
                <tr key={b._id}>
                  <td className="max-w-xs px-4 py-3"><button onClick={() => setReading(b)} className="truncate text-left font-medium text-stone-900 hover:text-[#780042]">{b.title}</button></td>
                  <td className="px-4 py-3 text-stone-600">{b.authorName}<div className="text-xs text-stone-400">{b.authorType}</div></td>
                  <td className="px-4 py-3"><Badge tone={TONE[b.status]}>{b.status}</Badge></td>
                  <td className="px-4 py-3 text-stone-500">{formatDate(b.createdAt)}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1.5">
                      {b.status !== "published" && <button title="Approve & publish" onClick={() => setStatus(b, "published", "")} className="rounded p-1.5 text-emerald-600 hover:bg-emerald-50"><Check size={17} /></button>}
                      {b.status !== "rejected" && <button title="Reject" onClick={() => { setRejecting(b); setNote(""); }} className="rounded p-1.5 text-amber-600 hover:bg-amber-50"><X size={17} /></button>}
                      {b.status === "published" && <Link title="View live" to={`/blogs/${b._id}`} className="rounded p-1.5 text-stone-500 hover:bg-stone-100"><ExternalLink size={17} /></Link>}
                      <button title="Delete" onClick={() => setDeleting(b)} className="rounded p-1.5 text-red-600 hover:bg-red-50"><Trash2 size={17} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {reading && (
        <Modal title={reading.title} onClose={() => setReading(null)} wide>
          <div className="space-y-3 p-5">
            <p className="text-xs text-stone-400">By {reading.authorName} · {formatDate(reading.createdAt)}</p>
            <div className="max-h-[50vh] overflow-y-auto whitespace-pre-wrap text-sm leading-7 text-stone-700">{reading.content}</div>
            <div className="flex justify-end gap-2 border-t border-stone-100 pt-4">
              {reading.status !== "rejected" && <Button variant="ghost" onClick={() => { setRejecting(reading); setNote(""); setReading(null); }}>Reject</Button>}
              {reading.status !== "published" && <Button loading={update.isPending} onClick={() => setStatus(reading, "published", "")}>Approve & publish</Button>}
            </div>
          </div>
        </Modal>
      )}

      {rejecting && (
        <Modal title="Reject blog" onClose={() => setRejecting(null)}>
          <div className="space-y-3 p-5">
            <p className="text-sm text-stone-600">Tell the author why, so they can fix it and resubmit.</p>
            <textarea rows={4} className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-[#780042]" placeholder="Reviewer note" value={note} onChange={(e) => setNote(e.target.value)} />
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setRejecting(null)}>Cancel</Button>
              <Button variant="danger" loading={update.isPending} onClick={async () => { await setStatus(rejecting, "rejected", note); setRejecting(null); }}>Reject</Button>
            </div>
          </div>
        </Modal>
      )}

      {deleting && (
        <ConfirmDialog
          title="Delete blog"
          message={`Permanently delete "${deleting.title}"?`}
          loading={remove.isPending}
          onCancel={() => setDeleting(null)}
          onConfirm={async () => {
            try { await remove.mutateAsync(deleting._id); toast("Blog deleted"); } catch (e) { toast(e.message, "error"); }
            setDeleting(null);
          }}
        />
      )}
    </div>
  );
}