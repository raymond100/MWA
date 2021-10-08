const { model } = require("mongoose");
const bcrypt = require("bcrypt");

const Job = model("Job");

const getAllJobs = (req, res) => {
  // validate request
  const checked = validateRequest(req);

  if (checked.error) {
    res.status(checked.error.status).json(checked.error);
    return;
  } else {
    //find docs
    Job.find()
      .skip(checked.offset)
      .sort({ _id: -1 })
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

const getOneJob = (req, res) => {
  Job.findById(req.params.jobId, (err, doc) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (!doc) {
      res.status(404).json({
        error: "404 - Not found",
        message: "We're sorry, but we don't have a Job for this ID.",
      });
      return;
    }
    res.status(200).json(doc);
  });
};

const addNewJob = (req, res) => {
  console.log("add new Job");
  const newJob = new Job(req.body);
  //newJob.salary = bcrypt.hashSync(req.body.salary.toString(), 10);
  newJob.save((err, Job) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(201).json(Job);
  });
};

const updateJob = (req, res) => {
  console.log("update Job");
  Job.findByIdAndUpdate(
    req.params.jobId,
    req.body,
    { new: true, useFindAndModify: false },
    (err, Job) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      if (!Job) {
        res.status(404).json({
          error: "404 - Not found",
          message: "We're sorry, but we don't have a Job for this ID.",
        });
        return;
      }
      res.status(200).json(Job);
    }
  );
};

const deleteJob = (req, res) => {
  console.log("delete Job");
  Job.findByIdAndDelete(req.params.jobId, (err, doc) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (!doc) {
      res.status(404).json({
        error: "404 - Not found",
        message: "We're sorry, but we don't have a Job for this ID.",
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
  getAllJobs,
  getOneJob,
  addNewJob,
  updateJob,
  deleteJob,
};
