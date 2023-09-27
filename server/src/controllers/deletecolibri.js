const { Colibri } = require("../db");

const deleteColibri = async (id) => {
  try {
    const colibri = await Colibri.destroy({ where: { id } });

    if (!colibri) {
      throw new Error("Colibri no existe");
    } else {
      return colibri;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = deleteColibri;
