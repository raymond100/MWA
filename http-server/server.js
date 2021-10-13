const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const page = q.query.page;
    let filename = "index.html";
    switch (page) {
      case "1":
        filename = "pages/page1.html";
        break;
      case "2":
        filename = "pages/page2.html";
        break;
      case "3":
        filename = "pages/page3.html";
        break;
      default:
        filename = "index.html";
    }

    fs.readFile(path.join(__dirname, filename), function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
