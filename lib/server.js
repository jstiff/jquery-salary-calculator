const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime");

let cache = {};

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello from node");
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
