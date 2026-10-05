import React, { useMemo, useState } from "react";
import { Pencil, Plus, Search, Trash2 } from "lucide-react";
import { useList, useRemove, useSave } from "../hooks/useResource";
import { Button, ConfirmDialog, ErrorBox, Modal, PageLoader, StatusBadge, useToast } from "./ui";
import { Field, getPath, setPath } from "./FormFields";

const PAGE_SIZE = 10;

export default function ResourcePage({ config }) {
  const toast = useToast();
  const { data = [], isLoading, error, refetch } = useList(config.key);
  const save = useSave(config.key);
  const remove = useRemove(config.key);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState(null); // null | "new" | record
  const [deleting, setDeleting] = useState(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return data.filter((r) => {
      if (status !== "all" && r[config.statusKey] !== status) return false;
      if (!q) return true;
      return config.searchKeys.some((k) => String(r[k] ?? "").toLowerCase().includes(q));
    });
  }, [data, search, status, config]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const rows = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const onDelete = async () => {
    try {
      await remove.mutateAsync(deleting._id);
      toast(`${config.singular} deleted`);
      setDeleting(null);
    } catch (e) {
      toast(e.message, "error");
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-stone-900">{config.title}</h1>
          <p className="text-sm text-stone-500">{data.length} total</p>
        </div>
        <Button onClick={() => setEditing("new")}>
          <Plus size={16} /> New {config.singular}
        </Button>
      </div>

      <div className="mb-4 flex flex-wrap gap-3">
        <div className="relative min-w-[220px] flex-1">
          <Search size={16} className="absolute left-3 top-2.5 text-stone-400" />
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder={`Search ${config.title.toLowerCase()}…`}
            className="w-full rounded-lg border border-stone-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-[#780042]"
          />
        </div>
        <select
          value={status}
          onChange={(e) => { setStatus(e.target.value); setPage(1); }}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
        >
          <option value="all">All statuses</option>
          {config.statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {isLoading ? (
        <PageLoader />
      ) : error ? (
        <ErrorBox error={error} onRetry={refetch} />
      ) : (
        <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-50 text-xs uppercase tracking-wide text-stone-500">
              <tr>
                {config.columns.map((c) => <th key={c.label} className="px-4 py-3 font-medium">{c.label}</th>)}
                <th className="px-4 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {rows.length === 0 && (
                <tr><td colSpan={config.columns.length + 1} className="px-4 py-12 text-center text-stone-400">
                  {data.length ? "No results match your filters." : `No ${config.title.toLowerCase()} yet. Click “New ${config.singular}” to add one.`}
                </td></tr>
              )}
              {rows.map((r) => (
                <tr key={r._id} className="hover:bg-stone-50">
                  {config.columns.map((c) => (
                    <td key={c.label} className="px-4 py-3 align-top text-stone-600">
                      {c.render ? c.render(r) : c.status ? <StatusBadge value={r[c.status]} /> : r[c.key] || "—"}
                    </td>
                  ))}
                  <td className="px-4 py-3 text-right align-top whitespace-nowrap">
                    <button onClick={() => setEditing(r)} className="rounded p-1.5 text-stone-500 hover:bg-stone-100" aria-label="Edit"><Pencil size={16} /></button>
                    <button onClick={() => setDeleting(r)} className="rounded p-1.5 text-red-500 hover:bg-red-50" aria-label="Delete"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {pages > 1 && (
        <div className="mt-4 flex items-center justify-between text-sm text-stone-500">
          <span>Page {current} of {pages}</span>
          <div className="flex gap-2">
            <Button variant="ghost" disabled={current === 1} onClick={() => setPage(current - 1)}>Previous</Button>
            <Button variant="ghost" disabled={current === pages} onClick={() => setPage(current + 1)}>Next</Button>
          </div>
        </div>
      )}

      {editing && (
        <RecordForm
          config={config}
          record={editing === "new" ? null : editing}
          saving={save.isPending}
          onClose={() => setEditing(null)}
          onSubmit={async (payload) => {
            try {
              await save.mutateAsync({ id: editing === "new" ? null : editing._id, data: payload });
              toast(editing === "new" ? `${config.singular} created` : `${config.singular} updated`);
              setEditing(null);
            } catch (e) {
              toast(e.message, "error");
            }
          }}
        />
      )}

      {deleting && (
        <ConfirmDialog
          title={`Delete ${config.singular}?`}
          message={`“${deleting.title}” will be permanently removed. This cannot be undone.`}
          loading={remove.isPending}
          onConfirm={onDelete}
          onCancel={() => setDeleting(null)}
        />
      )}
    </div>
  );
}

function RecordForm({ config, record, saving, onClose, onSubmit }) {
  const [form, setForm] = useState(() =>
    record ? { ...config.defaults, ...config.toForm(record) } : config.defaults
  );
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const missing = config.fields.find((f) => f.required && !String(getPath(form, f.name) ?? "").trim());
    if (missing) return setError(`${missing.label} is required`);
    setError("");
    onSubmit(config.toPayload(form));
  };

  return (
    <Modal wide title={`${record ? "Edit" : "New"} ${config.singular}`} onClose={onClose}>
      <form onSubmit={submit}>
        <div className="grid max-h-[65vh] gap-4 overflow-y-auto p-5 sm:grid-cols-2">
          {config.fields.map((f) => (
            <Field
              key={f.name}
              field={f}
              value={getPath(form, f.name)}
              onChange={(v) => setForm((cur) => setPath(cur, f.name, v))}
            />
          ))}
        </div>
        {error && <p className="px-5 pb-2 text-sm text-red-600">{error}</p>}
        <div className="flex justify-end gap-2 border-t border-stone-200 px-5 py-4">
          <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
          <Button type="submit" loading={saving}>{record ? "Save changes" : "Create"}</Button>
        </div>
      </form>
    </Modal>
  );
}
