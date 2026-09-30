import React, { useState } from "react";
import { Power, Trash2, ShieldCheck } from "lucide-react";
import { useAdmins, useDeleteAdmin, useProfile, useToggleAdmin } from "../hooks/useAuth";
import { Badge, ConfirmDialog, ErrorBox, PageLoader, StatusBadge, useToast } from "../components/ui";
import { formatDate } from "../utils/india";

export default function Admins() {
  const toast = useToast();
  const { data: me } = useProfile();
  const isSuper = me?.role === "superadmin";
  const { data = [], isLoading, error, refetch } = useAdmins(isSuper);
  const toggle = useToggleAdmin();
  const del = useDeleteAdmin();
  const [deleting, setDeleting] = useState(null);

  if (!isSuper) {
    return (
      <div className="p-8">
        <ErrorBox error={{ message: "Only a superadmin can manage admin accounts." }} />
      </div>
    );
  }

  const act = async (fn, arg, okMsg) => {
    try {
      await fn(arg);
      toast(okMsg);
    } catch (e) {
      toast(e.message, "error");
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl font-semibold text-stone-900">Admin Accounts</h1>
      <p className="mb-6 text-sm text-stone-500">New admins register from the signup page. Activate, deactivate or remove them here.</p>

      {isLoading ? <PageLoader /> : error ? <ErrorBox error={error} onRetry={refetch} /> : (
        <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-50 text-xs uppercase tracking-wide text-stone-500">
              <tr>
                {["Name", "Email", "Role", "Status", "Last login (IST)", "Joined", "Actions"].map((h) => <th key={h} className="px-4 py-3 font-medium">{h}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {data.map((a) => {
                const self = a._id === me._id;
                return (
                  <tr key={a._id}>
                    <td className="px-4 py-3 font-medium text-stone-900">{a.name} {self && <span className="text-xs text-stone-400">(you)</span>}</td>
                    <td className="px-4 py-3 text-stone-600">{a.email}</td>
                    <td className="px-4 py-3">{a.role === "superadmin" ? <Badge tone="blue"><ShieldCheck size={12} className="mr-1 inline" />superadmin</Badge> : <Badge>admin</Badge>}</td>
                    <td className="px-4 py-3"><StatusBadge value={a.status} /></td>
                    <td className="px-4 py-3 text-stone-500">{formatDate(a.lastLogin, true)}</td>
                    <td className="px-4 py-3 text-stone-500">{formatDate(a.createdAt)}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <button disabled={self} onClick={() => act(toggle.mutateAsync, a._id, a.status === "active" ? "Admin deactivated" : "Admin activated")}
                        className="rounded p-1.5 text-stone-500 hover:bg-stone-100 disabled:opacity-30" title={a.status === "active" ? "Deactivate" : "Activate"}><Power size={16} /></button>
                      <button disabled={self} onClick={() => setDeleting(a)} className="rounded p-1.5 text-red-500 hover:bg-red-50 disabled:opacity-30" title="Delete"><Trash2 size={16} /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {deleting && (
        <ConfirmDialog
          title="Delete admin?"
          message={`${deleting.name} (${deleting.email}) will lose access permanently.`}
          loading={del.isPending}
          onCancel={() => setDeleting(null)}
          onConfirm={async () => { await act(del.mutateAsync, deleting._id, "Admin deleted"); setDeleting(null); }}
        />
      )}
    </div>
  );
}
