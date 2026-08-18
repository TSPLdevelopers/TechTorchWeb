require("dotenv").config();
const companyEnvironmentRoutes = require("./src/routes/companyEnvironmentRoutes");
const latestUpdateRoutes = require("./src/routes/latestUpdateRoutes");
const featuredStoryRoutes = require("./src/routes/featuredStoryRoutes");
const opportunityRoutes = require("./src/routes/opportunityRoutes");
const upcomingEventRoutes = require("./src/routes/upcomingEventRoutes");
const {connectDB} = require("./src/config/db");
connectDB();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/company-environment", companyEnvironmentRoutes);
app.use("/api/latest-updates", latestUpdateRoutes);
app.use("/api/featured-stories", featuredStoryRoutes);
app.use("/api/opportunities", opportunityRoutes);
app.use("/api/upcoming-events", upcomingEventRoutes);

app.get("/",(req, res) => {
    res.send("TechTorch Backend is running");
});
const PORT = 5000;

app.listen(PORT,() => {
    console.log("server is running on port 5000");
});
