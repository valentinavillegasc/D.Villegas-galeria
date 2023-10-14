const { Coleccion, Colibri } = require("../../db");

const getColeccionById = async (id) => {
  const coleccion = await Coleccion.findByPk(id, { include: [Colibri] });
  return coleccion;
};

module.exports = getColeccionById;
