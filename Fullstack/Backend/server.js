require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { connectDB } = require("./src/config/db");
const errorMiddleware = require("./src/middlewares/error.middleware");

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

const app = express();

connectDB();

// Allow one or more frontend origins (comma separated in CLIENT_URL)
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("TechTorch Backend is running");
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

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});