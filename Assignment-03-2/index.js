const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = 3000;

app.set('port', PORT);

// parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/compute', routes);

app.get('/', (req, res) => {
    res.redirect(`/compute/${req.params.value || 0}?multiply=0`);
})

// server
const server = app.listen(app.get('port'), (err) => {
    if (err) throw err;
    console.log(`Server running on port ${server.address().port}`);
});