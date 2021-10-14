const express = require("express");
const path = require("path");
require("./api/data/db.js");
const routes = require("./api/routes");

const app = express();

const PORT = 8000;

// set port
app.set("port", PORT);

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

// static assets
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});
// routes middleware
app.use("/api", routes);

const server = app.listen(app.get("port"), (err) => {
  if (err) throw err;
  console.log(`Server running on port ${server.address().port}`);
});
