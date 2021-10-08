require("dotenv").config({ path: ".env" });
const express = require("express");
const path = require("path");
require("./api/data/db");
const routes = require("./api/routes");
const app = express();

const PORT = process.env.PORT || 8080;

app.set("port", PORT);

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

app.use("/api", routes);

const server = app.listen(app.get("port"), (err) => {
  console.log(`Server running on port ${server.address().port}`);
});
