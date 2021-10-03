const express = require('express');
const router = express.Router();
const {
    getAllGames,
    getOneGame,
    addNewGame,
    updateGame,
    deleteGame } = require('../controllers/games.controller');

router.route('/games')
    .get(getAllGames)
    .post(addNewGame);

router.route('/games/:gameId')
    .get(getOneGame)
    .put(updateGame)
    .delete(deleteGame);

module.exports = router;