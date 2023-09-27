const { Colibri } = require("../db");

const getColibriByName = async (name) => {
  const colibriFiltered = await Colibri.findAll({ where: { name } });
  if (colibriFiltered) return colibriFiltered;
  return { error: `No hay colibries con nombre: ${name}` };
};

module.exports = getColibriByName;
