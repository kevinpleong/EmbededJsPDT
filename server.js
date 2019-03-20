const express = require('express');
const app = express();
const server = require("http").createServer(app);
const PORT = process.env.PORT || 5000;
const ip = require("ip");
const colors = require("colors");

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(PORT, () => {
  console.log("===================================");
  console.log("The server is now online.".red)
  console.log(`Visit ` + `${ip.address()}:${PORT}`.underline.green + ` to see the website`);
  console.log("===================================");
});