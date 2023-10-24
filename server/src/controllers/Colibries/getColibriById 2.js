const { Colibri, Coleccion } = require("../../db");

const getColibriById = async (id) => {
  const colibri = await Colibri.findByPk(id, { include: [Coleccion] });
  return colibri;
};

module.exports = getColibriById;
