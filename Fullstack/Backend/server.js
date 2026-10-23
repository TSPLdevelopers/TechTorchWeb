require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./src/config/db");
const errorMiddleware = require("./src/middlewares/error.middleware.js");
const authRoutes = require("./src/routes/authRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const newsRoutes = require("./src/routes/newsRoutes");
const jobOpeningRoutes = require("./src/routes/jobOpeningRoutes");
const eventRoutes = require("./src/routes/eventRoutes");
const whitepaperRoutes = require("./src/routes/whitepaperRoutes");
const latestUpdateRoutes = require("./src/routes/latestUpdateRoutes");
const blogRoutes = require("./src/routes/blogRoutes");
const interestRoutes = require("./src/routes/interestRoutes");

const institutionConsultationRoutes = require(
  "./src/routes/institutionConsultationRoutes"
);

const insuranceIntakeRoutes = require(
  "./src/routes/insuranceIntakeRoutes"
);

const financialConsultationRoutes = require(
  "./src/routes/financialConsultationRoutes"
);

const healthcareConsultationRoutes = require(
  "./src/routes/healthcareConsultationRoutes"
);

const generalEnquiryRoutes = require(
  "./src/routes/generalEnquiryRoutes"
);

const transportationRoutes = require(
  "./src/routes/transportationRoutes"
);

const fmcgConsultationRoutes = require(
  "./src/routes/fmcgConsultationRoutes"
);

const informationRoutes = require(
  "./src/routes/informationRoutes"
);

const energyRoutes = require(
  "./src/routes/energyRoutes"
);

const telecommunicationRoutes = require(
  "./src/routes/telecommunicationRoutes"
);

const ecommerceRoutes = require(
  "./src/routes/ecommerceRoutes"
);

const dataDecisionRoutes = require(
  "./src/routes/dataDecisionRoutes"
);
const ourstoryRoutes = require("./src/routes/ourstoryRoutes");
const secureBusinessRoutes = require("./src/routes/secureBusinessRoutes");
const digitalSolutionRoutes = require(
  "./src/routes/digitalSolutionRoutes"
);
const sendQuestionRoutes = require(
  "./src/routes/sendQuestionRoutes"
);
const startConversationRoutes = require("./src/routes/startConversationRoutes");
const exploreQuestionRoutes = require("./src/routes/exploreQuestionRoutes");
const needsRoutes = require("./src/routes/needsRoutes");
const inquiryRoutes = require("./src/routes/inquiryRoutes");
const queryRoutes = require("./src/routes/queryRoutes");
const expertQueryRoutes = require("./src/routes/expertQueryRoutes");
const talkToExpertRoutes = require("./src/routes/talktoExpertRoutes");

const app = express();
app.set("trust proxy", 1);



// Allow one or more frontend origins (comma separated in CLIENT_URL)
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

app.use(cors({
  origin: (origin, cb) =>
    !origin || allowedOrigins.includes(origin)
      ? cb(null, true)
      : cb(new Error("Not allowed by CORS")),
  credentials: true,
}));

app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());
// Har request se pehle DB connected hona chahiye
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

app.get("/", (req, res) => {
  res.send("TechTorch Backend is running");
});

// Quick check that the latest backend code is deployed: open /api/health in the browser
app.get("/api/health", (req, res) => {
  res.json({ ok: true, version: "2026-10-23-expert-routes", expertQueries: true });
});

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/job-openings", jobOpeningRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/whitepapers", whitepaperRoutes);
app.use("/api/latest-updates", latestUpdateRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/interests", interestRoutes);

app.use(
  "/api/institution-consultations",
  institutionConsultationRoutes
);

app.use(
  "/api/insurance-intakes",
  insuranceIntakeRoutes
);

app.use(
  "/api/financial-consultations",
  financialConsultationRoutes
);

app.use(
  "/api/healthcare-consultations",
  healthcareConsultationRoutes
);

app.use(
  "/api/general-enquiries",
  generalEnquiryRoutes
);

app.use("/api/transportation", transportationRoutes);

app.use("/api/fmcg-consultations", fmcgConsultationRoutes);

app.use("/api/information", informationRoutes);

app.use("/api/energy", energyRoutes);

app.use("/api/telecommunications", telecommunicationRoutes);

app.use("/api/data-decisions", dataDecisionRoutes);

app.use(
  "/api/ecommerce",
  ecommerceRoutes
);

app.use("/api/ourstory", ourstoryRoutes);
app.use("/api/secure-business", secureBusinessRoutes);
app.use(
  "/api/digital-solutions",
  digitalSolutionRoutes
);

app.use("/api/send-question", sendQuestionRoutes);
app.use("/api/start-conversations", startConversationRoutes);
app.use("/api/explore-questions", exploreQuestionRoutes);
app.use("/api/needs", needsRoutes);
app.use("/api/inquiries", inquiryRoutes);

// Talk to Expert form (frontend posts to /api/expert-queries)
app.use("/api/expert-queries", expertQueryRoutes);
app.use("/api/talk-to-expert", talkToExpertRoutes);

// Admin dashboard -> Queries section
app.use("/api/queries", queryRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

// Local par server chalao, Vercel par nahi
if (process.env.VERCEL !== "1") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Vercel ke liye zaruri
module.exports = app;