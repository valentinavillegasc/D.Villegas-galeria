const { Colibri } = require("../../db");

const getColibriById = async (id) => {
  const colibri = await Colibri.findByPk(id);
  return colibri;
};

module.exports = getColibriById;
