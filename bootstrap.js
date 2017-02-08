var config     = require('config');
var Sequelize = require("sequelize");

var debug = require('debug')('bootstrap');

if (config.has('database.connectionString')) {
	var connectionString = config.get('database.connectionString');
    var db = new Sequelize(connectionString);
} else {
	var dbName = config.get('database.database');
	var dbUsername = config.get('database.username');
	var dbPassword = config.get('database.password');
	var dbHost = config.get('database.host');
    var dbDialect = config.get('database.dialect');
    var db = new Sequelize(dbName, dbUsername, dbPassword, {
        host:  dbHost,
        dialect: dbDialect
    });
}

module.exports.config = config;
module.exports.db = db;
