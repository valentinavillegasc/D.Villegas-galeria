const cloudinary = require("../../Service/cloudinary");
const { Colibri } = require("../../db");

const updateColibri = async (id, name, image, fichaTecnica) => {
  try {
    const colibri = await Colibri.findOne({ where: { id } });

    if (!colibri) {
      throw new Error("Colibri inexistente");
    } else {
      // Actualizar la imagen en Cloudinary si se proporciona una nueva imagen
      if (image) {
        const cloudinaryResponse = await cloudinary.uploader.upload(image, {
          folder: "colibries", // Carpeta en Cloudinary donde se almacenarán las imágenes
        });

        colibri.image = cloudinaryResponse.secure_url;
      }

      // Actualizar otros campos del colibrí
      colibri.name = name || colibri.name;
      colibri.fichaTecnica = fichaTecnica || colibri.fichaTecnica;

      // Guardar los cambios en la base de datos
      await colibri.save();

      return colibri;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = updateColibri;
