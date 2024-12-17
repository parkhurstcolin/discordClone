const http = require("http");
const express = require("express");
const keys = require("./config/keys");
const { MongoClient } = require("mongodb");

const client = new MongoClient(keys.mongoURI);
const app = express();
require("./routes/todoRoute")(app);

http.createServer(app).listen(5000);
