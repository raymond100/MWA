const express = require('express');
const router = express.Router();
const {
    getAllStudents,
    getStudentById,
    addNewStudent,
    updateStudent,
    modifyStudent,
    getStudentCourses,
    getStudentCoursesById,
    deleteStudent
} = require('../controllers/student.controller');

router.route('/students')
    .get(getAllStudents)
    .post(addNewStudent);


router.route('/students/:studentId')
    .get(getStudentById)
    .put(updateStudent)
    .patch(modifyStudent)
    .delete(deleteStudent);

router.route('/students/:studentId/courses')
    .get(getStudentCourses);

router.route('/students/:studentId/courses/:courseId')
    .get(getStudentCoursesById);


module.exports = router;