import mongoose from 'mongoose';
import '../data/models/framework';
import { validateRequest } from '../lib/helpers';

const Framework = mongoose.model('Framework');

exports.createFramework = (req, res) => {
  console.log('add new framework');
  const newFramework = new Framework(req.body);
  newFramework.save((err, data) => {
    if (err) {
      res.status(500).json(err);
      return;
    }

    res.status(201).json(data);
  });
};

exports.getAllFrameworks = (req, res) => {
  // validate request
  const checked = validateRequest(req);

  if (checked.error) {
    res.status(checked.error.status).json(checked.error);
    return;
  } else {
    if (req.query.search) {
      Framework.find({ app_name: { $regex: req.query.search, $options: 'i' } })
        .skip(checked.offset)
        .limit(checked.count)
        .exec((err, datas) => {
          if (err) {
            res.status(500).json(err);
            return;
          }
          res.status(200).json(datas);
        });
    } else {
      Framework.find()
        .skip(checked.offset)
        .limit(checked.count)
        .exec((err, datas) => {
          if (err) {
            res.status(500).json(err);
            return;
          }
          res.status(200).json(datas);
        });
    }
  }
};

exports.getFrameworkById = (req, res) => {
  Framework.findById(req.params.frameworkId, (err, data) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (!data) {
      res.status(404).json({
        error: '404 - Not found',
        message: "We're sorry, but we don't have a framework for this ID.",
      });
      return;
    }
    res.status(200).json(data);
  });
};

exports.updateFramework = (req, res) => {
  console.log('update new framework');
  Framework.findOneAndUpdate(
    { _id: req.params.frameworkId },
    req.body,
    { new: true, useFindAndModify: false },
    (err, data) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      if (!data) {
        res.status(404).json({
          error: '404 - Not found',
          message: "We're sorry, but we don't have a framework for this ID.",
        });
        return;
      }
      res.status(200).json(data);
    }
  );
};

exports.deleteFramework = (req, res) => {
  console.log('delete  Framework');
  Framework.findByIdAndDelete(req.params.frameworkId, (err, data) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (!data) {
      res.status(404).json({
        error: '404 - Not found',
        message: "We're sorry, but we don't have a framework for this ID.",
      });
      return;
    }
    res.status(200).json(data);
  });
};
