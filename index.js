const http = require("http");
const express = require("express");

const app = express();
require("./routes/todoRoute")(app);

http.createServer(app).listen(5000);
