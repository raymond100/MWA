
const { model } = require('mongoose');
require('../data/models/games.model');

const Game = model('Game');



module.exports.getGamePublisher = (req, res) => {
    Game.findById(req.params.gameId, { publisher: true }, (err, publisher) => {
        if (err) {
            res.status(500).json(err);
            return;
        }
        if (!publisher) {
            res.status(404).json({ error: "404 - Not found", message: "We're sorry, but we don't have a publisher for this ID." });
            return;
        }
        res.status(200).json(publisher);
    });
}

const addPublisher = (req, res, game) => {
    game.publisher = req.body;
    game.save((err, game) => {
        if (err) {
            res.status(500).json(err);
        }
        res.status(201).json(game);
    });
}

module.exports.publisherAdd = function (req, res) {
    const gameId = req.params.gameId;
    console.log("Get gameId ", gameId);
    Game.findById(gameId).select("publisher").exec(function (err, game) {
        const response = { status: 200, message: [] };
        if (err) {
            console.log("Error finding game");
            response.status = 500; response.message = err;
        } else if (!game) {
            console.log("Game id not found in database", id);
            response.status = 404; response.message = { "message": "Game ID not found" + gameId };
        }
        if (game) {
            addPublisher(req, res, game);
        } else {
            res.status(response.status).json(response.message);
        }
    });
}

deletePublisher = (req, res, game) => {
    game.publisher.remove();
    game.save((err, game) => {
        if (err) {
            res.status(500).json(err);
        }
        res.status(201).json(game);
    });
}

module.exports.publisherRemove = function (req, res) {
    const gameId = req.params.gameId;
    console.log("Get gameId ", gameId);
    Game.findById(gameId).select("publisher").exec(function (err, game) {
        const response = { status: 200, message: [] };
        if (err) {
            console.log("Error finding game");
            response.status = 500; response.message = err;
        } else if (!game) {
            console.log("Game id not found in database", id);
            response.status = 404; response.message = { "message": "Game ID not found" + gameId };
        }
        if (game) {
            deletePublisher(req, res, game);
        } else {
            res.status(response.status).json(response.message);
        }
    });
}