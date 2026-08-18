const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const adminRoutes = require("./routes/admin.routes");
const jobRoutes = require("./routes/job.routes");
const candidateRoutes = require("./routes/candidate.routes");

const latestUpdateRoutes = require("./routes/latestUpdate.routes");
const upcomingEventRoutes = require("./routes/upcomingEvent.routes");
const featuredStoryRoutes = require("./routes/featuredStory.routes");
const companyEnvironmentRoutes = require("./routes/companyEnvironment.routes");
const opportunityRoutes = require("./routes/opportunity.routes");

app.use("/api/company-environments", companyEnvironmentRoutes);
app.use("/api/opportunities", opportunityRoutes);

app.use("/api/admin", adminRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/candidates", candidateRoutes);
app.use("/api/latest-updates", latestUpdateRoutes);
app.use("/api/upcoming-events", upcomingEventRoutes);
app.use("/api/featured-stories", featuredStoryRoutes);

app.get("/",(req,res) => {
    res.send("Backend is running");
});
module.exports = app;
