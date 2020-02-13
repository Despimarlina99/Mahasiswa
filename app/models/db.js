const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
var connection = mysql.createPoolCluster({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE
});
module.exports = connection;