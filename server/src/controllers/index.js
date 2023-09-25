let colibries = [];

const getAllColibries = () => colibries;

const getColibriByName = (name) => {
  const colibriFiltered = colibries.filter((colibri) => colibri.name === name);
  if (colibriFiltered.length) return colibriFiltered;
  return { error: `No hay colibries con nombre: ${name}` };
};

const createColibri = ({ id, name, image, fichaTecnica }) => {
  const newColibri = { id, name, image, fichaTecnica };
  colibries.push(newColibri);
  return newColibri;
};

const updateColibri = ({ id, name, image, fichaTecnica }) => {
  const colibri = colibries.find((colibri) => colibri.id === id);

  if (!colibri) return { error: "Colibri inexistente" };
  else {
    if (name) colibri.name = name;
    if (image) colibri.image = image;
    if (fichaTecnica) colibri.fichaTecnica = name;
    return colibri;
  }
};

const deleteColibri = (id) => {
  const colibri = colibries.find((colibri) => colibri.id === +id);

  if (!colibri) return { error: "Colibri no existe" };
  else {
    colibries = colibries.filter((colibri) => {
      colibri.id !== +id;
    });
    return colibries;
  }
};

module.exports = {
  getAllColibries,
  getColibriByName,
  createColibri,
  updateColibri,
  deleteColibri,
};
