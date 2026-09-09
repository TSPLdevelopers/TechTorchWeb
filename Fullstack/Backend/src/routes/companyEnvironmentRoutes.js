const express = require("express");
const router = express.Router();
const {
  getAllCompanyEnvironments,
  getCompanyEnvironmentById,
  createCompanyEnvironment,
  updateCompanyEnvironment,
  deleteCompanyEnvironment,
} = require("../controllers/companyEnvironmentController");

router.get("/", getAllCompanyEnvironments);
router.get("/:id", getCompanyEnvironmentById);
router.post("/", createCompanyEnvironment);
router.put("/:id", updateCompanyEnvironment);
router.delete("/:id", deleteCompanyEnvironment);

module.exports = router;