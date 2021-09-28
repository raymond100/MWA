const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

app.set('port', PORT);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).sendFile('index.html');
});

const server = app.listen(app.get('port'), (err) => {
    if (err) throw err;
    console.log(`App listening on port ${server.address().port}`);
});