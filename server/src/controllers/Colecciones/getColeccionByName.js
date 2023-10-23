const { Coleccion } = require("../../db");

const getColeccionByName = async (name) => {
  const colectionFiltered = await Coleccion.findAll({ where: { name } });
  if (colectionFiltered) return colectionFiltered;
  else return { error: `No hay colecciones con el nombre ${name}` };
};

module.exports = getColeccionByName;
