const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();
const url = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/blog", (req, res) => {
  res.render("blog", { title: "Blog" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/services", (req, res) => {
  res.render("services", { title: "Services" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

app.listen(url, function () {
  console.log("Server started on port 3000");
});
