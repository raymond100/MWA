const dbConnection = require("../data/dbconnection.js");

const getAllGames = (req, res) => {
    // db connection
    const db = dbConnection.get();
    // get games collection
    const collection = db.collection("games");
    // default count
    let count = 6;
    let offset = 0;
    // user request
    const userOffset = parseInt(req.query.offset);
    const userCount = parseInt(req.query.count);
    // user offset
    if (req.query && req.query.offset && isFinite(userOffset)) {
        offset = userOffset;
    }
    // user limit
    if (req.query && req.query.count && isFinite(userCount)) {
        if (userCount <= 9) {
            count = userCount;
        } else {
            res.status(400).json({ 'error': "The maximum number of documents is limited to nine." });
            return;
        }
    }
    // find docs
    collection.find().skip(offset).limit(count).toArray((err, docs) => {
        res.status(200).json(docs);
    });

}

module.exports = {
    getAllGames
}