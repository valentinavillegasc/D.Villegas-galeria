const cloudinary = require("cloudinary").v2;
const { Colibri, Coleccion } = require("../../db");

const createColibri = async (id, name, image, fichaTecnica, ColeccionId) => {
  try {
    if (!id || !name || !image || !fichaTecnica || !ColeccionId) {
      throw new Error("Falta información");
    }

    // Busca la colección específica por su ID
    const coleccion = await Coleccion.findByPk(ColeccionId);

    if (!ColeccionId) {
      throw new Error("Colección no encontrada");
    }

    // Sube la imagen a Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(image, {
      folder: "colibries", // Carpeta en Cloudinary donde se almacenarán las imágenes
    });

    // Crea un nuevo colibrí con la URL de la imagen en Cloudinary
    const newColibri = await Colibri.create({
      id,
      name,
      image: cloudinaryResponse.secure_url,
      fichaTecnica,
    });

    // Asocia el nuevo colibrí a la colección
    await coleccion.addColibri(newColibri);

    return newColibri;
  } catch (error) {
    throw error;
  }
};

module.exports = createColibri;
