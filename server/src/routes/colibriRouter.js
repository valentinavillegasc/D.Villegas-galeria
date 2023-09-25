const colibriRouter = require("express").Router();
const {
  getAllColibries,
  getColibriByName,
  createColibri,
  updateColibri,
  deleteColibri,
} = require("../controllers/index");

//Traer todos los colibries
colibriRouter.get("/", (req, res) => {
  const { name } = req.query;
  if (name) {
    const colibries = getColibriByName(name);
    if (colibries.error) return res.status(404).json(colibries);
    return res.status(200).json(colibries);
  } else {
    const allColibries = getAllColibries();
    return res.status(200).json(allColibries);
  }
});

//Agregar un colibri
colibriRouter.post("/", (req, res) => {
  const { id, name, image, fichaTecnica } = req.body;
  try {
    if (!id || !name || !image || !fichaTecnica)
      throw Error("Falta información");
    else {
      const newColibri = createColibri(id, name, image, fichaTecnica);
      return res.status(200).json(newColibri);
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

//Actualizar un colibri
colibriRouter.put("/", (req, res) => {
  const { id, name, image, fichaTecnica } = req.body;
  if ((id && name) || image || fichaTecnica) {
    const colibriUpdate = updateColibri({ id, name, image, fichaTecnica });

    if (colibriUpdate.error) return res.status(404).json(colibriUpdate);
    else {
      return res.status(200).json(colibriUpdate);
    }
  }
});

//Eliminar colibri
colibriRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    const colibrideleted = deleteColibri(id);
    if (colibrideleted.error) return res.status(404).json(colibrideleted);
    else {
      return res.status(200).json(colibrideleted);
    }
  } else {
    return res.status(500).send(error.message);
  }
});

module.exports = colibriRouter;
