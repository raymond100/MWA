const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  getStudentCourses,
  getStudentCoursesById,
} = require("../controllers/student.controller");

router.route("/students").get(getAllStudents);

router.route("/students/:studentId").get(getStudentById);

router.route("/students/:studentId/courses").get(getStudentCourses);

router
  .route("/students/:studentId/courses/:courseId")
  .get(getStudentCoursesById);

module.exports = router;
