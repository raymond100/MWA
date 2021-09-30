const gamesData = require('../data/games.json');

const getAllGames = (req, res) => {
    // default
    let count = 5;
    let offset = 0;
    // user request
    const userOffset = parseInt(req.query.offset);
    const userCount = parseInt(req.query.count);

    if (req.query && req.query.offset && isFinite(userOffset)) {
        offset = userOffset;
    }

    if (req.query && req.query.count && isFinite(userCount)) {
        count = userCount;
    }

    res.json(gamesData.slice(offset, offset + count));
}

module.exports = {
    getAllGames
}