const express = require('express');
const router = express.Router();
const { getAllGames } = require('../controllers/games.controller');

router.get('/games', getAllGames);

module.exports = router;