const express = require("express");
// const { readFile } = require("fs");
const app = express();

const { readFile } = require("fs").promises;

// callback
// app.get("/", (req, res) => {
//   readFile("./home.html", "utf-8", (err, html) => {
//     if (err) {
//       req.status(500).send("Sorry, out of order");
//     }
//     res.send(html);
//   });
// });

// promise
app.get("/", async (request, response) => {
  response.send(await readFile("./home.html", "utf-8"));
});

app.listen(process.env.PORT || 3000),
  () => console.log(`App available on local host 3000`);
