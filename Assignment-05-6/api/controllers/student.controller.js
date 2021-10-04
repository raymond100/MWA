const { model } = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const { studentSchema } = require("../data/models/student.model");

//Compiling the model
const Student = model("Student", studentSchema, "students");

const getAllStudents = (req, res) => {
  // validate request
  const checked = validateRequest(req);

  if (checked.error) {
    res.status(checked.error.status).json(checked.error);
    return;
  } else {
    //find docs
    Student.find()
      .skip(checked.offset)
      .limit(checked.count)
      .exec((err, docs) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json(docs);
      });
  }
};

const getStudentById = (req, res) => {
  Student.findById(req.params.studentId, (err, doc) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (!doc) {
      res
        .status(404)
        .json({
          error: "404 - Not found",
          message: "We're sorry, but we don't have a student for this ID.",
        });
      return;
    }
    res.status(200).json(doc);
  });
};

const addNewStudent = (req, res) => {
  console.log("add new student");
  const newStudent = new Student(req.body);
  newStudent.save((err, student) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(201).json(student);
    }
  });
};

const updateStudent = (req, res) => {
  console.log("update new student");
  Student.findOneAndUpdate(
    { _id: req.params.studentId },
    req.body,
    { new: true, useFindAndModify: false },
    (err, doc) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      if (!doc) {
        res
          .status(404)
          .json({
            error: "404 - Not found",
            message: "We're sorry, but we don't have a student for this ID.",
          });
        return;
      }
      res.status(200).json(doc);
    }
  );
};

const deleteStudent = (req, res) => {
  console.log("delete  student");
  Student.findByIdAndDelete({ _id: req.params.studentId }, (err, doc) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (!doc) {
      res
        .status(404)
        .json({
          error: "404 - Not found",
          message: "We're sorry, but we don't have a student for this ID.",
        });
      return;
    }
    res.status(200).json(doc);
  });
};

const modifyStudent = (req, res) => {
  console.log("modify new student");
};

const getStudentCourses = (req, res) => {
  console.log("Student courses");
  Student.findById(req.params.studentId, { courses: true }, (err, doc) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (!doc) {
      res
        .status(404)
        .json({
          error: "404 - Not found",
          message: "We're sorry, but we don't have a student for this ID.",
        });
      return;
    }
    res.status(200).json(doc);
  });
};

const getStudentCoursesById = (req, res) => {
  console.log("Student courses by id");
  const query = [
    {
      $match: {
        _id: ObjectId(req.params.studentId),
      },
    },
    {
      $unwind: "$courses",
    },
    {
      $match: {
        "courses._id": ObjectId(req.params.courseId),
      },
    },
    {
      $replaceRoot: {
        newRoot: "$courses",
      },
    },
  ];

  Student.aggregate(query, (err, doc) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (!doc) {
      res
        .status(404)
        .json({
          error: "404 - Not found",
          message: "We're sorry, but we don't have a student for this ID.",
        });
      return;
    }
    res.status(200).json(doc);
  });
};

const validateRequest = (req, count = 6, offset = 0, maxCount = 10) => {
  const error = { name: "Bad request", status: 400 };

  // user input exist
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  // user input numbers
  if (isNaN(count) || isNaN(offset)) {
    error.message = "QueryString Offset and Count should be numbers";
  }
  // limit check
  if (count > maxCount) {
    error.message = `Cannot exceed count of ${maxCount}`;
  }

  if (error.message) {
    return { error };
  } else {
    return {
      count,
      offset,
    };
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  addNewStudent,
  updateStudent,
  modifyStudent,
  deleteStudent,
  getStudentCourses,
  getStudentCoursesById,
};
