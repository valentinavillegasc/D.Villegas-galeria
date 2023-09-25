const express = require("express");
const app = express();
const morgan = require("morgan");
const colibriRouter = require("./colibriRouter");

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use("/colibries", colibriRouter);

module.exports = app;
