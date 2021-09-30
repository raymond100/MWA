const gamesData = require('../data/games.json');

const getAllGames = (req, res) => {
    let count = 5;
    let offset = 0;

    const userOffset = parseInt(req.query.offset);
    if (req.query && req.query.offset && isFinite(userOffset)) {
        offset = userOffset;
    }
    const userCount = parseInt(req.query.count);
    if (req.query && req.query.count && isFinite(userCount)) {
        count = userCount;
    }

    res.json(gamesData.slice(offset, offset + count));
}

module.exports = {
    getAllGames
}