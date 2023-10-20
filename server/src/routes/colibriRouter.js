const colibriRouter = require("express").Router();
const getAllColibries = require("../controllers/Colibries/getAllColibries");
const getColibriByName = require("../controllers/Colibries/getColibriByName");
const createColibri = require("../controllers/Colibries/createColibri");
const updateColibri = require("../controllers/Colibries/updateColibri");
const deleteColibri = require("../controllers/Colibries/deletecolibri");
const getColibriById = require("../controllers/Colibries/getColibriById");
const uploadMiddleware = require("../handlers/coleccionHandler");
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

// Traer colibri por ID
colibriRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const colibri = await getColibriById(id);
    res.status(200).json(colibri);
  } catch (error) {
    res.status(404).send({ error: "Error al encontrar colibri" });
  }
});

//Agregar un colibri
colibriRouter.post("/", uploadMiddleware, async (req, res) => {
  try {
    const { ColeccionId, name, fichaTecnica } = req.body;
    const image = req.file.buffer;
    const newColibri = await createColibri(
      name,
      image,
      fichaTecnica,
      ColeccionId
    );
    res
      .status(200)
      .json({ message: "Colibrí creado exitosamente", data: newColibri });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Error al crear colibrí" });
  }
});

//Actualizar un colibri
colibriRouter.put("/:id", uploadMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, fichaTecnica } = req.body;
    if ((id && name) || image || fichaTecnica) {
      const colibriUpdate = await updateColibri(id, name, image, fichaTecnica);
      res.status(200).json(colibriUpdate);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Error al actualizar" });
  }
});

//Eliminar colibri
colibriRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    const colibrideleted = await deleteColibri(id);
    if (colibrideleted.error) return res.status(404).json(colibrideleted);
    else {
      return res.status(200).json({ message: "Eliminado correctamente" });
    }
  } else {
    return res.status(500).send(error.message);
  }
});

module.exports = colibriRouter;
