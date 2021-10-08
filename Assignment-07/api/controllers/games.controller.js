const { model } = require("mongoose");
require("../data/models/games.model");

const Game = model("Game");

const getAllGames = (req, res) => {
  // validate request
  const checked = validateRequest(req);

  if (checked.error) {
    res.status(checked.error.status).json(checked.error);
    return;
  } else {
    //find docs
    Game.find()
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

const getOneGame = (req, res) => {
  Game.findById(req.params.gameId, (err, doc) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (!doc) {
      res.status(404).json({
        error: "404 - Not found",
        message: "We're sorry, but we don't have a game for this ID.",
      });
      return;
    }
    res.status(200).json(doc);
  });
};

const addNewGame = (req, res) => {
  console.log("add new game");
  const newGame = new Game(req.body);
  newGame.save((err, game) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(201).json(game);
  });
};

const updateGame = (req, res) => {
  console.log("update game");
  Game.findByIdAndUpdate(
    req.params.gameId,
    req.body,
    { new: true, useFindAndModify: false },
    (err, game) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      if (!game) {
        res.status(404).json({
          error: "404 - Not found",
          message: "We're sorry, but we don't have a game for this ID.",
        });
        return;
      }
      res.status(200).json(game);
    }
  );
};

const deleteGame = (req, res) => {
  console.log("delete game");
  Game.findByIdAndDelete(req.params.gameId, (err, doc) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (!doc) {
      res.status(404).json({
        error: "404 - Not found",
        message: "We're sorry, but we don't have a game for this ID.",
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
  getAllGames,
  getOneGame,
  addNewGame,
  updateGame,
  deleteGame,
};
