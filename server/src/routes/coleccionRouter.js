const coleccionRouter = require("express").Router();
const createColeccion = require("../controllers/Colecciones/createColeccion");
const deleteColeccion = require("../controllers/Colecciones/deleteColection");
const getAllColecciones = require("../controllers/Colecciones/getAllColecciones");
const getColeccionByName = require("../controllers/Colecciones/getColeccionByName");
const updateColeccion = require("../controllers/Colecciones/updateColeccion");
const getColeccionById = require("../controllers/Colecciones/getColeccionById");
const uploadMiddleware = require("../handlers/coleccionHandler");

//Traer coleccion por nombre o todas
coleccionRouter.get("/", async (req, res) => {
  const { name } = req.params;
  if (name) {
    const colecciones = await getColeccionByName(name);
    if (colecciones.error) return res.status(404).json(colecciones);
    else return res.status(200).json(colecciones);
  } else {
    const allColecciones = await getAllColecciones();
    return res.status(200).json(allColecciones);
  }
});

//Traer a la coleccion por ID
coleccionRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const coleccion = await getColeccionById(id);
    res.status(200).json(coleccion);
  } catch (error) {
    res.status(404).send({ error: "Error al encontrar la coleccion" });
  }
});
//Crear coleccion
coleccionRouter.post("/", uploadMiddleware, async (req, res) => {
  try {
    const { name, description } = req.body;
    const imageBuffer = req.file.buffer;
    const newColeccion = await createColeccion(name, imageBuffer, description);
    res
      .status(200)
      .json({ message: "Colección creada exitosamente", data: newColeccion });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear la colección" });
  }
});

//Actualizar coleccion
coleccionRouter.put("/:id", uploadMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, description } = req.body;
    console.log(name);
    console.log(image);
    console.log(description);
    const coleccion = await updateColeccion(id, name, image, description);
    res.status(200).json({ message: "Actualizada!", data: coleccion });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Error al actualizar" });
  }
});
//Eliminar coleccion
coleccionRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coleccionDeleted = await deleteColeccion(id);
    return res
      .status(200)
      .json({ message: "Eliminada!", data: coleccionDeleted });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

module.exports = coleccionRouter;
