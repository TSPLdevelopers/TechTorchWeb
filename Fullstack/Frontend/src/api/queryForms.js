// Every public website form sends its data through this one helper.
// The admin dashboard "Queries" page then shows what was submitted.
import { request } from "../admin/api/client";

const FORM_ENDPOINTS = {
  general: "/api/general-enquiries",
  question: "/api/send-question",
  education: "/api/institution-consultations",
  insurance: "/api/insurance-intakes",
  finance: "/api/financial-consultations",
  healthcare: "/api/healthcare-consultations",
  transportation: "/api/transportation",
  fmcg: "/api/fmcg-consultations",
  information: "/api/information",
  energy: "/api/energy",
  telecom: "/api/telecommunications",
  ecommerce: "/api/ecommerce",
  ourstory: "/api/ourstory",
  secure: "/api/secure-business",
  digital: "/api/digital-solutions",
  // forms without their own collection are stored through the generic inquiry API
  inquiry: "/api/inquiries",
};

export async function submitQuery(kind, payload) {
  const path = FORM_ENDPOINTS[kind];
  if (!path) throw new Error(`Unknown form type: ${kind}`);
  return request(path, { method: "POST", body: payload });
}

// Backend returns readable messages; this keeps the UI text friendly.
export const submitErrorMessage = (err) =>
  err?.message || "Could not send your request. Please try again.";