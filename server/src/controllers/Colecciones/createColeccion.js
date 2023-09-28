// controllers/coleccionController.js
const cloudinary = require("cloudinary").v2;
const { Coleccion } = require("../../db");

const createColeccion = async (name, imageBuffer, description) => {
  try {
    if (!name || !imageBuffer || !description) {
      throw new Error("Falta información");
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(imageBuffer, {
      folder: "colecciones",
    });
    console.log("Respuesta de Cloudinary:", cloudinaryResponse);
    const newColeccion = await Coleccion.create({
      name,
      image: cloudinaryResponse.secure_url,
      description,
    });

    return newColeccion;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createColeccion,
};
