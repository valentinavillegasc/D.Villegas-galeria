// handlers/coleccionHandler.js
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadMiddleware = upload.single("image");

module.exports = uploadMiddleware;
