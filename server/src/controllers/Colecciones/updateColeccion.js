const cloudinary = require("../../Service/cloudinary");
const { Coleccion } = require("../../db");

const updateColeccion = async (id, name, image, description) => {
  try {
    const coleccion = await Coleccion.findOne({ where: { id } });
    if (!coleccion) {
      throw new Error("Coleccion inexistente");
    } else {
      if (image) {
        const cloudinaryResponse = await cloudinary.uploader.upload(image, {
          folder: "colecciones",
        });

        coleccion.image = cloudinaryResponse.secure_url;
      }

      coleccion.name = name || coleccion.name;
      coleccion.description = description || coleccion.description;

      await coleccion.save();

      return coleccion;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = updateColeccion;
