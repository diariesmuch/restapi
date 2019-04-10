const mysql = require('mysql');

//database credentials
const config = {
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'api',
};

//Create MySQL pool to enable multiple connections
const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;