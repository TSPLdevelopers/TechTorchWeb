import React, { createContext, useCallback, useContext, useState } from "react";
import { AlertTriangle, CheckCircle2, Loader2, X, XCircle } from "lucide-react";

export const ACCENT = "#780042";

/* ---------------- Toasts ---------------- */
const ToastCtx = createContext(() => {});
export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }) {
  const [items, setItems] = useState([]);

  const push = useCallback((message, type = "success") => {
    const id = Date.now() + Math.random();
    setItems((l) => [...l, { id, message, type }]);
    setTimeout(() => setItems((l) => l.filter((t) => t.id !== id)), 4000);
  }, []);

  return (
    <ToastCtx.Provider value={push}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm">
        {items.map((t) => (
          <div
            key={t.id}
            className={`flex items-start gap-2 rounded-lg px-4 py-3 text-sm shadow-lg border bg-white ${
              t.type === "error" ? "border-red-200 text-red-700" : "border-emerald-200 text-emerald-700"
            }`}
          >
            {t.type === "error" ? <XCircle size={18} className="mt-0.5 shrink-0" /> : <CheckCircle2 size={18} className="mt-0.5 shrink-0" />}
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

/* ---------------- Basics ---------------- */
export const Spinner = ({ className = "" }) => (
  <Loader2 className={`animate-spin ${className}`} size={18} />
);

export const PageLoader = () => (
  <div className="flex items-center justify-center py-24 text-stone-400">
    <Spinner className="mr-2" /> Loading…
  </div>
);

export const ErrorBox = ({ error, onRetry }) => (
  <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 flex items-center justify-between gap-3">
    <span>{error?.message || "Something went wrong"}</span>
    {onRetry && (
      <button onClick={onRetry} className="font-medium underline">
        Retry
      </button>
    )}
  </div>
);

const TONES = {
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  stone: "bg-stone-100 text-stone-600",
  blue: "bg-blue-50 text-blue-700",
  red: "bg-red-50 text-red-700",
};
export const Badge = ({ tone = "stone", children }) => (
  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${TONES[tone]}`}>
    {children}
  </span>
);

const STATUS_TONE = {
  published: "green", Published: "green", active: "green", "Active / Open": "green", upcoming: "blue",
  draft: "stone", Draft: "stone", "Draft / Unlisted": "stone", inactive: "red",
  past: "stone", "Closing Soon": "amber",
};
export const StatusBadge = ({ value }) =>
  value ? <Badge tone={STATUS_TONE[value] || "stone"}>{value}</Badge> : <span className="text-stone-400">—</span>;

export const Button = ({ variant = "primary", loading, className = "", children, ...rest }) => {
  const styles =
    variant === "primary"
      ? "text-white hover:opacity-90"
      : variant === "danger"
      ? "bg-red-600 text-white hover:bg-red-700"
      : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-50";
  return (
    <button
      {...rest}
      disabled={loading || rest.disabled}
      style={variant === "primary" ? { backgroundColor: ACCENT } : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition disabled:opacity-60 ${styles} ${className}`}
    >
      {loading && <Spinner />} {children}
    </button>
  );
};

/* ---------------- Modal + Confirm ---------------- */
export function Modal({ title, onClose, children, wide }) {
  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-black/40 p-4">
      <div className={`my-8 w-full rounded-xl bg-white shadow-xl ${wide ? "max-w-3xl" : "max-w-md"}`}>
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
          <h2 className="text-base font-semibold text-stone-900">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="rounded p-1 text-stone-500 hover:bg-stone-100">
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function ConfirmDialog({ title, message, confirmLabel = "Delete", loading, onConfirm, onCancel }) {
  return (
    <Modal title={title} onClose={onCancel}>
      <div className="p-5">
        <div className="flex gap-3">
          <AlertTriangle className="shrink-0 text-red-500" />
          <p className="text-sm text-stone-600">{message}</p>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="ghost" onClick={onCancel}>Cancel</Button>
          <Button variant="danger" loading={loading} onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </Modal>
  );
}
