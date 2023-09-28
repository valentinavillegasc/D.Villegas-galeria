require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const ColibriModel = require("./models/ColibriModel");
const ColeccionModel = require("./models/ColeccionModel");
const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false }
);
ColeccionModel(database);
ColibriModel(database);

const { Coleccion, Colibri } = database.models;
Coleccion.belongsToMany(Colibri, {
  through: "colibrisColeccion",
  timestamps: false,
});
Colibri.belongsToMany(Coleccion, {
  through: "colibrisColeccion",
  timestamps: false,
});

module.exports = { database, ...database.models };
