var http = require("http");
const { MongoClient } = require("mongodb");

const keys = require("./config/keys");
const client = new MongoClient(keys.mongoURI);

http
	.createServer(function (req, res) {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("Hello World!");
	})
	.listen(5000);
