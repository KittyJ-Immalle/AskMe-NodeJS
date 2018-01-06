const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const engines = require("consolidate");

const app = express();

// Translates URLs to JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Used for css, js and html
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "")));