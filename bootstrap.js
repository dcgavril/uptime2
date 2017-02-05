var config     = require('config');
var Sequelize = require("sequelize");

var debug = require('debug')('bootstrap');



var sequelize = null;

if (config.has('database.connectionString')) {
	var connectionString = config.get('database.connectionString');
    sequelize = new Sequelize(connectionString);
} else {
	var dbName = config.get('database.dbname');
	var dbUsername = config.get('database.dbusername');
	var dbPassword = config.get('database.dbpassword');
	var dbHost = config.get('database.dbhost');
	
    sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
        host:  dbHost,
		// mysql now
        dialect: 'mysql'
    });
}

module.exports.config = config;
module.exports.db = sequelize;


