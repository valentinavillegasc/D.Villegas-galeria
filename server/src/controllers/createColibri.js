const cloudinary = require("cloudinary").v2;
const { Colibri } = require("../db");

const createColibri = async (id, name, image, fichaTecnica) => {
  try {
    if (!id || !name || !image || !fichaTecnica) {
      throw new Error("Falta información");
    }

    // Subir la imagen a Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(image, {
      folder: "colibries", // Carpeta en Cloudinary donde se almacenarán las imágenes
    });

    // Crear un nuevo colibrí con la URL de la imagen en Cloudinary
    const newColibri = await Colibri.create({
      id,
      name,
      image: cloudinaryResponse.secure_url,
      fichaTecnica,
    });

    return newColibri;
  } catch (error) {
    throw error;
  }
};

module.exports = createColibri;
