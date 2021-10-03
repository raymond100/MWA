const express = require('express');
const router = express.Router();
const { getAllGames, getOneGame } = require('../controllers/games.controller');

router.get('/games', getAllGames);
router.get('/games/:id', getOneGame)

module.exports = router;