const colibriRouter = require("express").Router();
const {
  getAllColibries,
  getColibriByName,
  createColibri,
  updateColibri,
  deleteColibri,
} = require("../controllers/index");

//Traer todos los colibries
colibriRouter.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const colibries = await getColibriByName(name);
    if (colibries.error) return res.status(404).json(colibries);
    return res.status(200).json(colibries);
  } else {
    const allColibries = await getAllColibries();
    return res.status(200).json(allColibries);
  }
});

//Agregar un colibri
colibriRouter.post("/", async (req, res) => {
  const { id, name, image, fichaTecnica } = req.body;
  try {
    if (!id || !name || !image || !fichaTecnica)
      throw Error("Falta información");
    else {
      const newColibri = await createColibri(id, name, image, fichaTecnica);
      return res.status(200).json(newColibri);
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

//Actualizar un colibri
colibriRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, image, fichaTecnica } = req.body;
  if ((id && name) || image || fichaTecnica) {
    const colibriUpdate = await updateColibri(id, name, image, fichaTecnica);

    if (colibriUpdate.error) return res.status(404).json(colibriUpdate);
    else {
      return res.status(200).json(colibriUpdate);
    }
  }
});

//Eliminar colibri
colibriRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    const colibrideleted = await deleteColibri(id);
    if (colibrideleted.error) return res.status(404).json(colibrideleted);
    else {
      return res.status(200).json(colibrideleted);
    }
  } else {
    return res.status(500).send(error.message);
  }
});

module.exports = colibriRouter;
