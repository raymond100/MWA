const express = require('express');

const app = express();

const PORT = 5353;

app.set('port', PORT);

app.get('/', (req, res) => {
    res.status(200).send(`Server running on port ${app.get('port')}`);
});

const server = app.listen(app.get('port'), (err) => {
    if(err) throw err;
    console.log(`App listening on port ${server.address().port}`);

});