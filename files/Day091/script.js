const fs = require("fs");
const http = require("http");

/////////////////////////////
// FILES

/////////////////////////////
// SERVER
http.createServer((req, res) => {
  res.end("Hello from the server!");
});
