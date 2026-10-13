
import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Inbox,
  Mail,
  Phone,
  Search,
  Trash2,
} from "lucide-react";

import {
  Button,
  ConfirmDialog,
  ErrorBox,
  Modal,
  PageLoader,
  Spinner,
  useToast,
} from "../components/ui.jsx";

import { formatDate } from "../utils/india.js";

import {
  useQueryDelete,
  useQueryList,
  useQueryMeta,
  useQueryOne,
  useQueryStats,
  useQueryStatus,
} from "../hooks/useQueries.js";

const PAGE_SIZE = 20;

const STATUS_STYLE = {
  new: "bg-[#730042]/10 text-[#730042] border-[#730042]/20",
  contacted: "bg-blue-50 text-blue-700 border-blue-200",
  reviewed: "bg-blue-50 text-blue-700 border-blue-200",
  "in-progress": "bg-indigo-50 text-indigo-700 border-indigo-200",
  responded: "bg-emerald-50 text-emerald-700 border-emerald-200",
  completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  closed: "bg-stone-100 text-stone-600 border-stone-200",
  rejected: "bg-red-50 text-red-700 border-red-200",
};

const statusClass = (s) =>
  STATUS_STYLE[s] || "bg-stone-100 text-stone-600 border-stone-200";

const prettyStatus = (s) =>
  String(s)
    .replace(/-/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());

function StatusSelect({ value, statuses, onChange, disabled }) {
  return (
    <select
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      className={`rounded-full border px-2.5 py-1 text-xs font-medium outline-none disabled:opacity-60 ${statusClass(value)}`}
    >
      {statuses.map((s) => (
        <option key={s} value={s}>
          {prettyStatus(s)}
        </option>
      ))}
    </select>
  );
}

/* ---------------- Detail popup ---------------- */

const HIDDEN_KEYS = [
  "_id",
  "__v",
  "type",
  "typeLabel",
  "statuses",
  "status",
  "updatedAt",
  "createdAt",
];

const humanize = (k) =>
  k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

const showValue = (v) => {
  if (Array.isArray(v)) return v.length ? v.join(", ") : "—";
  if (typeof v === "boolean") return v ? "Yes" : "No";
  if (v === "" || v == null) return "—";
  return String(v);
};

function QueryDetail({ item, onClose, onStatus, statusBusy }) {
  const { data, isLoading, error, refetch } = useQueryOne(
    item.type,
    item._id
  );

  const fields = data
    ? Object.entries(data).filter(([k]) => !HIDDEN_KEYS.includes(k))
    : [];

  const status = data?.status || item.status;

  return (
    <Modal title={`${item.typeLabel} query`} onClose={onClose} wide>
      <div className="p-5">
        {isLoading ? (
          <div className="flex justify-center py-10 text-stone-400">
            <Spinner className="mr-2" /> Loading…
          </div>
        ) : error ? (
          <ErrorBox error={error} onRetry={refetch} />
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-stone-500">
                Received {formatDate(data.createdAt, true)}
              </div>

              <StatusSelect
                value={status}
                statuses={data.statuses}
                disabled={statusBusy}
                onChange={(s) => onStatus(item, s)}
              />
            </div>

            <dl className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {fields.map(([k, v]) => (
                <div
                  key={k}
                  className={String(v).length > 70 ? "sm:col-span-2" : ""}
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                    {humanize(k)}
                  </dt>

                  <dd className="mt-0.5 whitespace-pre-wrap break-words text-sm text-stone-800">
                    {showValue(v)}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap justify-end gap-2 border-t border-stone-100 pt-4">
              {item.email && (
                <a href={`mailto:${item.email}`}>
                  <Button variant="ghost" type="button">
                    <Mail size={16} /> Reply by email
                  </Button>
                </a>
              )}

              <Button type="button" onClick={onClose}>
                Close
              </Button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

/* ---------------- Page ---------------- */

export default function Queries() {
  const toast = useToast();

  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [page, setPage] = useState(1);
  const [viewing, setViewing] = useState(null);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search.trim()), 400);
    return () => clearTimeout(t);
  }, [search]);

  // Filter badalne par page 1 par wapas
  useEffect(() => setPage(1), [type, status, debounced]);

  const { data: meta } = useQueryMeta();
  const { data: stats } = useQueryStats();

  const {
    data,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useQueryList({
    type,
    status,
    search: debounced,
    page,
    limit: PAGE_SIZE,
  });

  const setRowStatus = useQueryStatus();
  const remove = useQueryDelete();

  const statusesFor = (t) =>
    meta?.types.find((x) => x.key === t)?.statuses || ["new"];

  const statusOptions = type
    ? statusesFor(type)
    : meta?.statuses || [];

  const changeStatus = async (row, s) => {
    try {
      await setRowStatus.mutateAsync({
        type: row.type,
        id: row._id,
        status: s,
      });

      toast("Status updated");
    } catch (e) {
      toast(e.message, "error");
    }
  };

  if (isLoading && !data) return <PageLoader />;

  if (error && !data) {
    return (
      <div className="p-6">
        <ErrorBox error={error} onRetry={refetch} />
      </div>
    );
  }

  const rows = data?.data || [];
  const pg = data?.pagination || { page: 1, pages: 1, total: 0 };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-semibold text-stone-900">
        Queries
      </h1>

      <p className="mt-1 text-sm text-stone-500">
        Manage all TechTorch enquiries and consultation requests in one place.
      </p>

      {/* Summary cards */}
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-stone-200 bg-white p-4">
          <div className="text-xs uppercase tracking-wide text-stone-400">
            Total queries
          </div>

          <div className="mt-1 text-2xl font-semibold text-stone-900">
            {stats?.total ?? "—"}
          </div>
        </div>

        <button
          onClick={() => {
            setType("");
            setStatus("new");
          }}
          className="rounded-xl border border-[#730042]/20 bg-[#730042]/5 p-4 text-left transition hover:bg-[#730042]/10"
        >
          <div className="text-xs uppercase tracking-wide text-[#730042]">
            New (unattended)
          </div>

          <div className="mt-1 text-2xl font-semibold text-[#730042]">
            {stats?.new ?? "—"}
          </div>
        </button>

        <div className="rounded-xl border border-stone-200 bg-white p-4">
          <div className="text-xs uppercase tracking-wide text-stone-400">
            Forms with submissions
          </div>

          <div className="mt-1 text-2xl font-semibold text-stone-900">
            {stats
              ? stats.byType.filter((t) => t.total > 0).length
              : "—"}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-5 flex flex-wrap gap-3">
        <div className="relative w-full max-w-xs">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, email, company, message…"
            className="w-full rounded-lg border border-stone-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-[#730042]"
          />
        </div>

        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setStatus("");
          }}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
        >
          <option value="">All forms</option>

          {meta?.types.map((t) => {
            const c = stats?.byType.find((x) => x.key === t.key);

            return (
              <option key={t.key} value={t.key}>
                {t.label}
                {c ? ` (${c.total})` : ""}
              </option>
            );
          })}
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
        >
          <option value="">All statuses</option>

          {statusOptions.map((s) => (
            <option key={s} value={s}>
              {prettyStatus(s)}
            </option>
          ))}
        </select>

        {isFetching && (
          <Spinner className="self-center text-stone-400" />
        )}
      </div>

      {/* Query table */}
      {rows.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-stone-300 p-10 text-center text-sm text-stone-500">
          <Inbox className="mx-auto mb-2 text-stone-300" />
          No queries found.
        </div>
      ) : (
        <div className="mt-5 overflow-x-auto rounded-xl border border-stone-200 bg-white">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-stone-50 text-xs uppercase text-stone-500">
              <tr>
                <th className="px-4 py-3">From</th>
                <th className="px-4 py-3">Form</th>
                <th className="px-4 py-3">Interested in</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>

            <tbody className="divide-y divide-stone-100 align-top">
              {rows.map((r) => (
                <tr
                  key={`${r.type}-${r._id}`}
                  onClick={() => setViewing(r)}
                  className="cursor-pointer hover:bg-stone-50"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 font-medium text-stone-900">
                      {r.status === "new" && (
                        <span
                          className="h-2 w-2 shrink-0 rounded-full bg-[#730042]"
                          title="New"
                        />
                      )}

                      {r.name || "—"}
                    </div>

                    <div className="text-xs text-stone-500">
                      {r.email}
                    </div>

                    {r.phone && (
                      <div className="flex items-center gap-1 text-xs text-stone-400">
                        <Phone size={11} /> {r.phone}
                      </div>
                    )}

                    {r.organization && (
                      <div className="text-xs text-stone-400">
                        {r.organization}
                      </div>
                    )}
                  </td>

                  <td className="px-4 py-3">
                    <span className="inline-block rounded-md bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-700">
                      {r.typeLabel}
                    </span>
                  </td>

                  <td className="max-w-[200px] px-4 py-3 text-stone-700">
                    <p className="line-clamp-2">{r.subject || "—"}</p>
                  </td>

                  <td className="max-w-xs px-4 py-3 text-stone-600">
                    <p className="line-clamp-2">{r.message || "—"}</p>
                  </td>

                  <td className="px-4 py-3">
                    <StatusSelect
                      value={r.status}
                      statuses={statusesFor(r.type)}
                      disabled={setRowStatus.isPending}
                      onChange={(s) => changeStatus(r, s)}
                    />
                  </td>

                  <td className="whitespace-nowrap px-4 py-3 text-stone-500">
                    {formatDate(r.createdAt, true)}
                  </td>

                  <td className="whitespace-nowrap px-4 py-3">
                    <button
                      title="View"
                      onClick={(e) => {
                        e.stopPropagation();
                        setViewing(r);
                      }}
                      className="rounded p-1.5 text-stone-600 hover:bg-stone-100"
                    >
                      <Eye size={17} />
                    </button>

                    <button
                      title="Delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleting(r);
                      }}
                      className="rounded p-1.5 text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={17} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {pg.total > 0 && (
        <div className="mt-4 flex items-center justify-between text-sm text-stone-500">
          <span>
            {pg.total} {pg.total === 1 ? "query" : "queries"} · page{" "}
            {pg.page} of {pg.pages}
          </span>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
            >
              <ChevronLeft size={16} /> Prev
            </Button>

            <Button
              variant="ghost"
              disabled={page >= pg.pages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      )}

      {/* Query details */}
      {viewing && (
        <QueryDetail
          item={viewing}
          onClose={() => setViewing(null)}
          onStatus={changeStatus}
          statusBusy={setRowStatus.isPending}
        />
      )}

      {/* Delete confirmation */}
      {deleting && (
        <ConfirmDialog
          title="Delete query"
          message={`Delete this ${deleting.typeLabel} query from ${deleting.name || deleting.email || "this visitor"}? This cannot be undone.`}
          loading={remove.isPending}
          onCancel={() => setDeleting(null)}
          onConfirm={async () => {
            try {
              await remove.mutateAsync({
                type: deleting.type,
                id: deleting._id,
              });

              toast("Query deleted");

              if (viewing?._id === deleting._id) {
                setViewing(null);
              }
            } catch (e) {
              toast(e.message, "error");
            }

            setDeleting(null);
          }}
        />
      )}
    </div>
  );
}
