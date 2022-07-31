const express = require('express');
const routes = require('./routes');
const mysql = require('mysql2')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306

});
// import sequelize connection
const sequelize = require("./config/connection.js");
const db = require("./config/connection.js");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

db.sync()
// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
