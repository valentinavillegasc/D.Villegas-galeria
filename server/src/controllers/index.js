const { Colibri } = require("../db");

const getAllColibries = async () => await Colibri.findAll();

const getColibriByName = async (name) => {
  const colibriFiltered = await Colibri.findAll({ where: { name } });
  if (colibriFiltered) return colibriFiltered;
  return { error: `No hay colibries con nombre: ${name}` };
};

const createColibri = async (id, name, image, fichaTecnica) => {
  const newColibri = await Colibri.create({ id, name, image, fichaTecnica });

  return newColibri;
};

const updateColibri = async (id, name, image, fichaTecnica) => {
  const colibri = await Colibri.findOne(id);

  if (!colibri) return { error: "Colibri inexistente" };
  else {
    await Colibri.update({ name, image, fichaTecnica });
    return colibri;
  }
};

const deleteColibri = async (id) => {
  const colibri = await Colibri.destroy({ where: { id } });

  if (!colibri) return { error: "Colibri no existe" };
  else {
    return colibri;
  }
};

module.exports = {
  getAllColibries,
  getColibriByName,
  createColibri,
  updateColibri,
  deleteColibri,
};
