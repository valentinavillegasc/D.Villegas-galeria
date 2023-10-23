const { Coleccion, Colibri } = require("../../db");

const getAllColecciones = async () => {
  try {
    // Busca todas las colecciones y carga los colibríes asociados a cada una
    const colecciones = await Coleccion.findAll({
      include: [Colibri],
    });

    return colecciones;
  } catch (error) {
    throw error;
  }
};

module.exports = getAllColecciones;
