const fs = require("fs");
const http = require("http");
// 我需要一盒yan
// 美团接单
// 骑手平台收到请求

http
  .createServer()
  .on("request", (req, res) => {
    const handleFileByUrl = (url, contentTypeV) => {
      fs.readFile(__dirname + url, "utf-8", (err, data) => {
        if (err) {
          console.log(err.message);
          return;
        }
        res.setHeader("Content-Type", contentTypeV);
        res.end(data);
      });
    };

    if (req.url === "/clock/clock.html") {
      handleFileByUrl("/assets/clock.html", "text/html; charset=utf-8;");
    }
    if (req.url === "/clock/clock.css") {
      handleFileByUrl("/assets/clock.css", "text/css");
    }
    if (req.url === "/clock/clock.js") {
      handleFileByUrl("/assets/clock.js", "text/javascript");
    }
    if (req.url === "/clock/a.jpg") {
      handleFileByUrl("/assets/a.jpg", "image/jpeg");
    }
    if (res.statusCode === 404) {
      res.statusMessage = "Not Found";
      res.end();
    }
  })
  .listen(3002, () => {
    console.log(`run it at localhost:3002`);
  });
