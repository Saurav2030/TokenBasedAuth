const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const hbs = require("hbs");
const static_path = path.join(__dirname, "./public");
const template_path = path.join(__dirname, "./templates/views");
const partial_path = path.join(__dirname, "./templates/partials");
const { register, login } = require("./controllers/auth");
const app = express();
app.use(express.static(static_path));

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.set("views", template_path);
require("dotenv").config();
app.use(morgan("common"));
app.use(express.json());

app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", login);
app.post("/register", register);

module.exports = app;
