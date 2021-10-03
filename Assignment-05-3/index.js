const express = require('express');
const path = require('path');
require("./api/data/db.js")
const routes = require('./api/routes');

const app = express();

const PORT = 8000;

// set port
app.set('port', PORT);

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

// static assets
//app.use(express.static(path.join(__dirname, 'public')));

// routes middleware
app.use('/api', routes);

app.get('/', (req, res) => {
    res.redirect('/api/games');
})


const server = app.listen(app.get('port'), (err) => {
    if (err) throw err;
    console.log(`Server running on port ${server.address().port}`);
});


