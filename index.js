

// Require packages

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const port = 3002;

//Use the body parsing middleware
app.use(bodyParser.json());  //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({  //to support URL-encoded bodies
	extended: true,
}));


routes(app);

// Start the server with the listen() method
const server = app.listen(port, (error) => {
	if(error) return console.log('Error: ${error}');

	console.log('Server is listening on port: ' + port);
});