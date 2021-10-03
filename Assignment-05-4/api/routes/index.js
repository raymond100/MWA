const express = require('express');
const router = express.Router();
const {
    getAllGames,
    getOneGame,
    addNewGame,
    updateGame,
    deleteGame } = require('../controllers/games.controller');

const { getGamePublisher, publisherAdd, publisherRemove } = require('../controllers/publisher.controller');

router.route('/games')
    .get(getAllGames)
    .post(addNewGame);

router.route('/games/:gameId')
    .get(getOneGame)
    .put(updateGame)
    .delete(deleteGame);

router.route('/games/:gameId/publisher')
    .get(getGamePublisher)
    .post(publisherAdd);

router.route('/games/:gameId/publisher/:publisherId')
    .put(publisherAdd)
    .delete(publisherRemove);

module.exports = router;