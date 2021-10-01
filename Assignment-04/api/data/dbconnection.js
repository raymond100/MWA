const MongoClient = require('mongodb').MongoClient;
const dbName = 'meanGamesDb';
const uri = `mongodb://localhost:27017/${dbName}`;

let connection = null;

const open = () => {
    if (connection == undefined || connection == null) {
        MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
            if (err) {
                console.log("DB connection failed");
                return;
            }
            connection = client.db(dbName);
            console.log("DB connection open");
        });
    }
};

const get = () => connection;

module.exports = {
    open,
    get
};