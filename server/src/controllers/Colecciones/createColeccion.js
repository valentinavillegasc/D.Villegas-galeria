// controllers/coleccionController.js
const cloudinary = require("../../Service/cloudinary");
const { Coleccion } = require("../../db");

const fs = require("fs").promises;
const path = require("path");

// ...

const createColeccion = async (name, imageBuffer, description) => {
  try {
    if (!name || !imageBuffer || !description)
      throw new Error("Falta información");

    // Crea un archivo temporal con el contenido del Buffer
    const tempFilePath = path.join(__dirname, "tempFile.jpg");
    await fs.writeFile(tempFilePath, imageBuffer);

    const cloudinaryResponse = await cloudinary.uploader.upload(tempFilePath, {
      folder: "colecciones",
    });

    // Borra el archivo temporal después de subirlo a Cloudinary
    await fs.unlink(tempFilePath);

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

module.exports = createColeccion;
