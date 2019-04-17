const express = require('express');
const app = express();
const server = require("http").createServer(app);
const PORT = process.env.PORT || 5001;
const ip = require("ip");
const colors = require("colors");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/include"))

app.get('/', (req, res) => {
  console.log("rendering home page for " + req.ip);
  res.render("pages/index");
});



app.get("/pages/:page_title", (req, res) => {
  res.render(`pages/${req.params.page_title}`)
});

server.listen(PORT, () => {
  console.log("===================================");
  console.log("The server is now online.".red)
  console.log(`Visit ` + `${ip.address()}:${PORT}`.underline.green + ` to see the website`);
  console.log("===================================");
});