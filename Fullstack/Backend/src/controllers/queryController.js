const mongoose = require("mongoose");

// Har public query/enquiry form ka model yahan register hai.
// Naya form banaye to bas SOURCES me ek line add kar do.
const SOURCES = [
  { key: "general-enquiry",    label: "General Enquiry",          model: require("../models/GeneralEnquiry.model") },
  { key: "start-conversation", label: "Start a Conversation",     model: require("../models/StartConversation.model") },
  { key: "explore-question",   label: "Explore Questions",        model: require("../models/ExploreQuestion.model") },
  { key: "needs",              label: "Your Needs",               model: require("../models/Needs.model") },
  { key: "send-question",      label: "Send a Question",          model: require("../models/SendQuestion.model") },
  { key: "our-story",          label: "Our Story",                model: require("../models/ourstory.model") },
  { key: "technology-enquiry", label: "Technology Enquiry",       model: require("../models/information.model") },
  { key: "digital-solution",   label: "Digital Solutions",        model: require("../models/DigitalSolution.model") },
  { key: "data-decision",      label: "Data & Decisions",         model: require("../models/dataDecision.model") },
  { key: "secure-business",    label: "Secure Business",          model: require("../models/SecureBusiness.model") },
  { key: "institution",        label: "Institution Consultation", model: require("../models/InstitutionConsultation.model") },
  { key: "insurance",          label: "Insurance Intake",         model: require("../models/InsuranceIntake.model") },
  { key: "financial",          label: "Financial Consultation",   model: require("../models/FinancialConsultation.model") },
  { key: "healthcare",         label: "Healthcare Consultation",  model: require("../models/HealthcareConsultation.model") },
  { key: "fmcg",               label: "FMCG Consultation",        model: require("../models/FmcgConsultation.model") },
  { key: "energy",             label: "Energy",                   model: require("../models/energy.model") },
  { key: "telecommunication",  label: "Telecommunication",        model: require("../models/telecommunication.model") },
  { key: "ecommerce",          label: "E-Commerce",               model: require("../models/ecommerce.model") },
  { key: "transportation",     label: "Transportation",           model: require("../models/transportation.model") },
  { key: "inquiry",            label: "Manufacturing / MSP / Offshore", model: require("../models/Inquiry.model") },
  { key: "talk-to-expert", label: "Talk to Expert", model: require("../models/TalkToExpert.model") },
  { key: "expert-query",       label: "Talk to Expert",           model: require("../models/ExpertQuery.model") },
];

const BY_KEY = Object.fromEntries(SOURCES.map((s) => [s.key, s]));

// Alag-alag forms me field ke naam alag hain -> common shape
const NAME_KEYS  = ["fullName", "executiveFullName", "fullNameDesignation"];
const EMAIL_KEYS = ["email", "businessEmail", "workEmail", "corporateEmail", "corporateWorkEmail", "officialEmail", "companyEmail"];
const PHONE_KEYS = ["phoneNumber", "phone"];
const ORG_KEYS   = ["company", "companyOrganization", "companyOrganizationName", "organizationName", "enterpriseOrganization", "companyName", "institutionName"];
const SUBJECT_KEYS = [
  "topic", "areaOfInterest", "serviceArea", "service", "topicArea", "inquiryArea", "industry",
  "primarySolutionFocus", "primaryBusinessArea", "industryVertical", "institutionType", "facilityType",
  "technologyAreas", "serviceAreas", "practiceAreas", "focusAreas", "businessAreas",
  "healthcareRequirements", "insuranceCapabilities", "areasOfInterest",
];
const MESSAGE_KEYS = [
  "requirement", "requirementDetails", "message", "question", "questionBusinessChallenge",
  "additionalNotes", "technicalObjectives", "technicalScope", "challengeScope", "projectDetails",
  "architectureScope", "currentCriticalChallenge", "infrastructureNotes",
];
const SEARCH_KEYS = [
  ...NAME_KEYS, ...EMAIL_KEYS, ...PHONE_KEYS, ...ORG_KEYS, ...MESSAGE_KEYS,
  "areaOfInterest", "serviceArea", "service", "topicArea", "inquiryArea", "industry",
];

const asText = (v) => (Array.isArray(v) ? v.join(", ") : v == null ? "" : String(v));
const first = (doc, keys) => {
  for (const k of keys) {
    const t = asText(doc[k]).trim();
    if (t) return t;
  }
  return "";
};

const statusesOf = (src) => src.model.schema.path("status")?.enumValues || ["new"];

const normalize = (src, d) => ({
  _id: d._id,
  type: src.key,
  typeLabel: src.label,
  name: first(d, NAME_KEYS),
  email: first(d, EMAIL_KEYS),
  phone: first(d, PHONE_KEYS),
  organization: first(d, ORG_KEYS),
  subject: first(d, SUBJECT_KEYS),
  message: first(d, MESSAGE_KEYS),
  status: d.status || "new",
  createdAt: d.createdAt,
});

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const searchFilter = (src, q) => {
  if (!q) return {};
  const rx = new RegExp(escapeRegex(q), "i");
  const fields = SEARCH_KEYS.filter((k) => {
    const p = src.model.schema.path(k);
    return p && p.instance === "String";
  });
  return fields.length ? { $or: fields.map((f) => ({ [f]: rx })) } : {};
};

const getSource = (req, res) => {
  const src = BY_KEY[req.params.type];
  if (!src) {
    res.status(404).json({ success: false, message: "Unknown query type." });
    return null;
  }
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).json({ success: false, message: "Invalid ID." });
    return null;
  }
  return src;
};

// GET /api/queries?type=&status=&search=&page=&limit=
const listQueries = async (req, res) => {
  try {
    const { type, status, search } = req.query;
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 20, 1), 100);
    const q = String(search || "").trim();

    const sources = type ? SOURCES.filter((s) => s.key === type) : SOURCES;

    const perSource = await Promise.all(
      sources.map(async (src) => {
        const filter = { ...searchFilter(src, q) };
        if (status) filter.status = status;
        const [docs, count] = await Promise.all([
          src.model.find(filter).sort({ createdAt: -1 }).limit(page * limit).lean(),
          src.model.countDocuments(filter),
        ]);
        return { rows: docs.map((d) => normalize(src, d)), count };
      })
    );

    const total = perSource.reduce((n, s) => n + s.count, 0);
    const rows = perSource
      .flatMap((s) => s.rows)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice((page - 1) * limit, page * limit);

    res.json({
      success: true,
      data: rows,
      pagination: { page, limit, total, pages: Math.max(Math.ceil(total / limit), 1) },
    });
  } catch (error) {
    console.error("List Queries Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch queries." });
  }
};

// GET /api/queries/meta -> filter dropdowns ke liye types + statuses
const queryMeta = (req, res) => {
  const types = SOURCES.map((s) => ({ key: s.key, label: s.label, statuses: statusesOf(s) }));
  const statuses = [...new Set(types.flatMap((t) => t.statuses))];
  res.json({ success: true, data: { types, statuses } });
};

// GET /api/queries/stats -> total / new count
const queryStats = async (req, res) => {
  try {
    const counts = await Promise.all(
      SOURCES.map(async (src) => {
        const [total, fresh] = await Promise.all([
          src.model.countDocuments({}),
          src.model.countDocuments({ status: "new" }),
        ]);
        return { key: src.key, label: src.label, total, new: fresh };
      })
    );
    res.json({
      success: true,
      data: {
        total: counts.reduce((n, c) => n + c.total, 0),
        new: counts.reduce((n, c) => n + c.new, 0),
        byType: counts,
      },
    });
  } catch (error) {
    console.error("Query Stats Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch query stats." });
  }
};

// GET /api/queries/:type/:id -> poora form data
const getQuery = async (req, res) => {
  try {
    const src = getSource(req, res);
    if (!src) return;
    const doc = await src.model.findById(req.params.id).lean();
    if (!doc) return res.status(404).json({ success: false, message: "Query not found." });
    res.json({
      success: true,
      data: { ...doc, type: src.key, typeLabel: src.label, statuses: statusesOf(src) },
    });
  } catch (error) {
    console.error("Get Query Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch query." });
  }
};

// PATCH /api/queries/:type/:id/status
const updateQueryStatus = async (req, res) => {
  try {
    const src = getSource(req, res);
    if (!src) return;
    const { status } = req.body;
    if (!statusesOf(src).includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status." });
    }
    const doc = await src.model
      .findByIdAndUpdate(req.params.id, { status }, { new: true, runValidators: true })
      .lean();
    if (!doc) return res.status(404).json({ success: false, message: "Query not found." });
    res.json({ success: true, message: "Status updated.", data: normalize(src, doc) });
  } catch (error) {
    console.error("Update Query Status Error:", error);
    res.status(500).json({ success: false, message: "Failed to update status." });
  }
};

// DELETE /api/queries/:type/:id
const deleteQuery = async (req, res) => {
  try {
    const src = getSource(req, res);
    if (!src) return;
    const doc = await src.model.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ success: false, message: "Query not found." });
    res.json({ success: true, message: "Query deleted." });
  } catch (error) {
    console.error("Delete Query Error:", error);
    res.status(500).json({ success: false, message: "Failed to delete query." });
  }
};

module.exports = { listQueries, queryMeta, queryStats, getQuery, updateQueryStatus, deleteQuery };