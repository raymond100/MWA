const express = require("express");
const {
  getAllJobs,
  getOneJob,
  addNewJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs.controller");

const router = express.Router();

router.route("/jobs").get(getAllJobs).post(addNewJob);
router.route("/jobs/:jobId").get(getOneJob).put(updateJob).delete(deleteJob);

module.exports = router;
