const cloudinary = require("cloudinary").v2;
const { Colibri, Coleccion } = require("../../db");

const fs = require("fs").promises;
const path = require("path");

const createColibri = async (name, image, fichaTecnica, ColeccionId) => {
  try {
    if (!name || !image || !fichaTecnica || !ColeccionId) {
      throw new Error("Falta información");
    }

    // Busca la colección específica por su ID
    const coleccion = await Coleccion.findByPk(ColeccionId);

    if (!ColeccionId) {
      throw new Error("Colección no encontrada");
    }

    const tempFilePath = path.join(__dirname, "tempFile.jpg");
    await fs.writeFile(tempFilePath, image);

    // Sube la imagen a Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(tempFilePath, {
      folder: "colibries", // Carpeta en Cloudinary donde se almacenarán las imágenes
    });

    // Crea un nuevo colibrí con la URL de la imagen en Cloudinary
    const newColibri = await Colibri.create({
      name,
      image: cloudinaryResponse.secure_url,
      fichaTecnica,
      ColeccionId,
    });

    // Asocia el nuevo colibrí a la colección
    await coleccion.addColibri(newColibri);

    return newColibri;
  } catch (error) {
    throw error;
  }
};

module.exports = createColibri;
