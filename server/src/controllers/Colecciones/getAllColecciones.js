const { Coleccion } = require("../../db");

const getAllColecciones = async () => await Coleccion.findAll();

module.exports = getAllColecciones;
