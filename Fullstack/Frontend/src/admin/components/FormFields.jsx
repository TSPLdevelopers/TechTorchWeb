import React from "react";
import { ACCENT } from "./ui";

/* helpers for dotted paths like "hiringManager.name" */
export const getPath = (obj, path) =>
  path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);

export const setPath = (obj, path, value) => {
  const keys = path.split(".");
  const copy = { ...obj };
  let cur = copy;
  keys.forEach((k, i) => {
    if (i === keys.length - 1) cur[k] = value;
    else {
      cur[k] = { ...(cur[k] || {}) };
      cur = cur[k];
    }
  });
  return copy;
};

const base =
  "w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 outline-none focus:border-[#780042] focus:ring-1 focus:ring-[#780042]";

export function Field({ field, value, onChange }) {
  const { type = "text", label, required, options, placeholder, help, rows = 3, labels } = field;

  let input;

  if (type === "textarea" || type === "lines") {
    const shown = type === "lines" ? (Array.isArray(value) ? value.join("\n") : value || "") : value ?? "";
    input = (
      <textarea
        rows={rows}
        className={base}
        value={shown}
        placeholder={placeholder}
        onChange={(e) => onChange(type === "lines" ? e.target.value.split("\n") : e.target.value)}
      />
    );
  } else if (type === "select") {
    input = (
      <select className={base} value={value ?? ""} onChange={(e) => onChange(e.target.value)}>
        {!required && <option value="">— Select —</option>}
        {options.map((o) => {
          const v = typeof o === "string" ? o : o.value;
          const l = typeof o === "string" ? o : o.label;
          return (
            <option key={v} value={v}>
              {l}
            </option>
          );
        })}
      </select>
    );
  } else if (type === "checkbox") {
    return (
      <label className="flex items-center gap-2 text-sm text-stone-700 pt-6">
        <input
          type="checkbox"
          checked={!!value}
          onChange={(e) => onChange(e.target.checked)}
          style={{ accentColor: ACCENT }}
        />
        {label}
      </label>
    );
  } else if (type === "boolArray") {
    const arr = Array.isArray(value) ? value : labels.map(() => false);
    return (
      <div className="sm:col-span-2">
        <div className="mb-1.5 text-sm font-medium text-stone-700">{label}</div>
        <div className="space-y-2">
          {labels.map((l, i) => (
            <label key={l} className="flex items-center gap-2 text-sm text-stone-700">
              <input
                type="checkbox"
                checked={!!arr[i]}
                onChange={() => onChange(labels.map((_, j) => (j === i ? !arr[j] : !!arr[j])))}
                style={{ accentColor: ACCENT }}
              />
              {l}
            </label>
          ))}
        </div>
      </div>
    );
  } else if (type === "tags") {
    input = (
      <input
        className={base}
        value={Array.isArray(value) ? value.join(", ") : value || ""}
        placeholder={placeholder || "comma, separated, tags"}
        onChange={(e) => onChange(e.target.value.split(",").map((s) => s.trimStart()))}
      />
    );
  } else {
    input = (
      <input
        type={type}
        className={base}
        value={value ?? ""}
        placeholder={placeholder}
        min={type === "number" ? 0 : undefined}
        onChange={(e) => onChange(type === "number" ? (e.target.value === "" ? "" : Number(e.target.value)) : e.target.value)}
      />
    );
  }

  return (
    <label className={`block ${field.full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-sm font-medium text-stone-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {input}
      {help && <span className="mt-1 block text-xs text-stone-400">{help}</span>}
    </label>
  );
}
