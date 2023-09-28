const coleccionRouter = require("express").Router();
const createColeccion = require("../controllers/Colecciones/createColeccion");
const deleteColeccion = require("../controllers/Colecciones/deleteColection");
const getAllColecciones = require("../controllers/Colecciones/getAllColecciones");
const getColeccionByName = require("../controllers/Colecciones/getColeccionByName");
const updateColeccion = require("../controllers/Colecciones/updateColeccion");
const coleccionHandler = require("../handlers/coleccionHandler");
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
//Crear coleccion
coleccionRouter.post(
  "/",
  coleccionHandler.uploadMiddleware,
  async (req, res) => {
    try {
      const { name, description } = req.body;
      const imageBuffer = req.file.buffer;
      console.log(name);
      console.log(description);
      console.log(imageBuffer.length);
      const newColeccion = await coleccionController.createColeccion(
        name,
        imageBuffer,
        description
      );

      res.json({ message: "Imagen subida exitosamente", data: newColeccion });
    } catch (error) {
      res.status(500).json({ error: "Error al subir la imagen" });
    }
  }
);

//Actualizar coleccion
coleccionRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, image, description } = req.body;
  if ((id && name) || image || description) {
    const coleccion = await updateColeccion(id, name, image, description);
    if (coleccion.error) return res.status(404).json(coleccion);
    else return res.status(200).json(coleccion);
  }
});
//Eliminar coleccion
coleccionRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    const coleccionDeleted = await deleteColeccion(id);
    if (coleccionDeleted.error) return res.status(404).json(coleccionDeleted);
    else return res.status(200).json(coleccionDeleted);
  } else {
    return res.status(500).send(error.message);
  }
});

module.exports = coleccionRouter;
