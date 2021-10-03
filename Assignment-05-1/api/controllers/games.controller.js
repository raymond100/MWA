
const { model } = require('mongoose');
const { gameSchema } = require('../data/models/games.model');

//Compiling the model 
const Game = model('Game', gameSchema, 'games');

const getAllGames = (req, res) => {
    // validate request
    const checked = validateRequest(req);

    if (checked.error) {
        res.status(checked.error.status).json({ error: checked.error });
        return;
    } else {
        //find docs
        Game.find().skip(checked.offset).limit(checked.count).exec((err, docs) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json(docs);
        });
    }

}

const getOneGame = (req, res) => {

    Game.findById(req.params.id, (err, doc) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (!doc) {
            res.status(404).send({ error: "404 - Not found", message: "We're sorry, but we don't have a game for this ID." });
            return;
        }
        res.status(200).json(doc);

    })
}

const validateRequest = req => {
    let count = 6;
    let offset = 0;
    const maxCount = 10;
    const error = {};


    // user input exist
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    // user input numbers
    if (isNaN(count) || isNaN(offset)) {
        error.status = 400;
        error.message = "QueryString Offset and Count should be numbers";
    }
    // limit check
    if (count > maxCount) {
        error.status = 400;
        error.message = `Cannot exceed count of ${maxCount}`;
    }

    if (error.status) {
        return { error };
    } else {
        return {
            count,
            offset
        }
    }
}

module.exports = {
    getAllGames,
    getOneGame
}