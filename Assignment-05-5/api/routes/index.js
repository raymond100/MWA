const express = require("express");
const router = express.Router();
const {
  getAllGames,
  getOneGame,
  addNewGame,
  updateGame,
  deleteGame,
} = require("../controllers/games.controller");

const {
  getGamePublisher,
  publisherAdd,
  publisherRemove,
} = require("../controllers/publisher.controller");
const {
  getGameReview,
  reviewAdd,
  reviewRemove,
} = require("../controllers/review.controller");

router.route("/games").get(getAllGames).post(addNewGame);

router
  .route("/games/:gameId")
  .get(getOneGame)
  .put(updateGame)
  .delete(deleteGame);

router
  .route("/games/:gameId/publisher")
  .get(getGamePublisher)
  .post(publisherAdd);

router
  .route("/games/:gameId/publisher/:publisherId")
  .put(publisherAdd)
  .delete(publisherRemove);

router.route("/games/:gameId/reviews").get(getGameReview).post(reviewAdd);

router
  .route("/games/:gameId/reviews/:reviewId")
  .put(reviewAdd)
  .delete(reviewRemove);

module.exports = router;
