var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	twilio = require('twilio'),
	firebase = require('firebase'),
	firebaseRef = "https://scorching-inferno-3342.firebaseio.com/numbers";

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.listen(9001, function() {
	console.log("Listening on port: " + 9001);
});

