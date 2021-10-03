const { model } = require('mongoose');
require('../data/models/games.model');

const Game = model('Game');


module.exports.getGameReview = (req, res) => {
    Game.findById(req.params.gameId, { reviews: true }, (err, review) => {
        if (err) {
            res.status(500).json(err);
            return;
        }
        if (!review) {
            res.status(404).json({ error: "404 - Not found", message: "We're sorry, but we don't have a review for this ID." });
            return;
        }
        res.status(200).json(review);
    });
}

const addReview = (req, res, game) => {
    game.reviews = req.body;
    game.save((err, game) => {
        if (err) {
            res.status(500).json(err);
        }
        res.status(201).json(game);
    });
}

module.exports.reviewAdd = function (req, res) {
    const gameId = req.params.gameId;
    console.log("Get gameId ", gameId);
    Game.findById(gameId).select("reviews").exec(function (err, game) {
        const response = { status: 200, message: [] };
        if (err) {
            console.log("Error finding game");
            response.status = 500; response.message = err;
        } else if (!game) {
            console.log("Game id not found in database", id);
            response.status = 404; response.message = { "message": "Game ID not found" + gameId };
        }
        if (game) {
            addReview(req, res, game);
        } else {
            res.status(response.status).json(response.message);
        }
    });
}

deleteReview = (req, res, game) => {
    game.reviews.pull(req.params.reviewId)
    game.save((err, game) => {
        if (err) {
            res.status(500).json(err);
        }
        res.status(201).json(game);
    });
}

module.exports.reviewRemove = function (req, res) {
    const gameId = req.params.gameId;
    console.log("Get gameId ", gameId);
    Game.findById(gameId).select("reviews").exec(function (err, game) {
        const response = { status: 200, message: [] };
        if (err) {
            console.log("Error finding game");
            response.status = 500; response.message = err;
        } else if (!game) {
            console.log("Game id not found in database", id);
            response.status = 404; response.message = { "message": "Game ID not found" + gameId };
        }
        if (game) {
            deleteReview(req, res, game);
        } else {
            res.status(response.status).json(response.message);
        }
    });
}