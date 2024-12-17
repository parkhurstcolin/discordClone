var http = require("http");
const keys = require("./config/keys");
const { MongoClient } = require("mongodb");

const client = new MongoClient(keys.mongoURI);

http
	.createServer(function (req, res) {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("Hello World!");
	})
	.listen(5000);
