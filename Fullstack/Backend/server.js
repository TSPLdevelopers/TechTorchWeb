require("dotenv").config();

const { connectDB } = require("./src/config/db");

const errorMiddleware = require("./src/middlewares/error.middleware");

const authRoutes = require("./src/routes/authRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const newsRoutes = require("./src/routes/newsRoutes");
const jobOpeningRoutes = require("./src/routes/jobOpeningRoutes");
const eventRoutes = require("./src/routes/eventRoutes");
const whitepaperRoutes = require("./src/routes/whitepaperRoutes");

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/job-openings", jobOpeningRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/whitepapers", whitepaperRoutes);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("TechTorch Backend is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("server is running on port 5000");
});