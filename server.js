const express = require('express');
const app = express();
const server = require("http").createServer(app);
const PORT = process.env.PORT || 5000;
const ip = require("ip");
const colors = require("colors");

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("pages/index", {
    random_number: Math.floor(Math.random() * 101)
  });
});

server.listen(PORT, () => {
  console.log("===================================");
  console.log("The server is now online.".red)
  console.log(`Visit ` + `${ip.address()}:${PORT}`.underline.green + ` to see the website`);
  console.log("===================================");
});