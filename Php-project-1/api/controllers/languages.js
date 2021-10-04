import { model } from 'mongoose';
import '../data/models/languages';
import { ObjectId } from 'mongodb';

const Framework = model('Framework');

exports.getframeworkLanguages = (req, res) => {
  Framework.findById(req.params.frameworkId, { languages: true }, (err, languages) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (!languages) {
      res.status(404).json({
        error: '404 - Not found',
        message: "We're sorry, but we don't have a languages for this ID.",
      });
      return;
    }
    res.status(200).json(languages);
  });
};

exports.getframeworkLanguageById = (req, res) => {
  const query = [
    {
      $match: {
        _id: ObjectId(req.params.frameworkId),
      },
    },
    {
      $unwind: '$languages',
    },
    {
      $match: {
        'languages._id': ObjectId(req.params.languageId),
      },
    },
    {
      $replaceRoot: {
        newRoot: '$languages',
      },
    },
  ];

  Framework.aggregate(query, (err, data) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (!data) {
      res.status(404).json({
        error: '404 - Not found',
        message: "We're sorry, but we don't have a language for this ID.",
      });
      return;
    }
    res.status(200).json(data);
  });
};

const addLanguages = (req, res, framework) => {
  framework.languages = req.body;
  framework.save((err, framework) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(201).json(framework);
  });
};

exports.languagesAdd = function (req, res) {
  const frameworkId = req.params.frameworkId;
  console.log('Get frameworkId ', frameworkId);
  Framework.findById(frameworkId)
    .select('languages')
    .exec(function (err, framework) {
      const response = { status: 200, message: [] };
      if (err) {
        console.log('Error finding framework');
        response.status = 500;
        response.message = err;
      } else if (!framework) {
        console.log('framework id not found in database', id);
        response.status = 404;
        response.message = { message: 'framework ID not found' + frameworkId };
      }
      if (framework) {
        addLanguages(req, res, framework);
      } else {
        res.status(response.status).json(response.message);
      }
    });
};

const deleteLanguages = (req, res, framework) => {
  framework.languages.pull(req.params.languageId);
  framework.save((err, framework) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(201).json(framework);
  });
};

module.exports.languagesRemove = function (req, res) {
  const frameworkId = req.params.frameworkId;
  console.log('Get frameworkId ', frameworkId);
  Framework.findById(frameworkId)
    .select('languages')
    .exec(function (err, framework) {
      const response = { status: 200, message: [] };
      if (err) {
        console.log('Error finding framework');
        response.status = 500;
        response.message = err;
      } else if (!framework) {
        console.log('framework id not found in database', id);
        response.status = 404;
        response.message = { message: 'framework ID not found' + frameworkId };
      }
      if (framework) {
        deleteLanguages(req, res, framework);
      } else {
        res.status(response.status).json(response.message);
      }
    });
};
