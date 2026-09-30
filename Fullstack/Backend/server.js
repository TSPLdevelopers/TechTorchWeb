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
app.use("/api/latest-updates", latestUpdateRoutes); // was never mounted before

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});