const express = require("express");
const app = express();
const morgan = require("morgan");
const colibriRouter = require("./routes/colibriRouter");
const coleccionRouter = require("./routes/ColeccionRouter");

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/colibries", colibriRouter);
app.use("/colecciones", coleccionRouter);

module.exports = app;
