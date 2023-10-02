const { Coleccion } = require("../../db");

const deleteColeccion = async (id) => {
  try {
    const coleccion = await Coleccion.destroy({ where: { id } });
    if (!coleccion) {
      throw new Error("Colección inexistente");
    } else {
      return coleccion;
    }
  } catch (error) {
    throw error;
  }
};
module.exports = deleteColeccion;
