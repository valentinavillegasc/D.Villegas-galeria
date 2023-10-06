const { Coleccion } = require("../../db");

const getColeccionById = async (id) => {
  const coleccion = await Coleccion.findByPk(id);
  return coleccion;
};

module.exports = getColeccionById;
