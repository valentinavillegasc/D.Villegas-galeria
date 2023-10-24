const express = require("express");
const app = express();
const morgan = require("morgan");
const colibriRouter = require("./routes/colibriRouter");
const coleccionRouter = require("./routes/ColeccionRouter");

//Middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/colibries", colibriRouter);
app.use("/colecciones", coleccionRouter);

module.exports = app;
