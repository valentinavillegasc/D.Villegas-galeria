const { Colibri } = require("../db");

const getAllColibries = async () => await Colibri.findAll();

module.exports = getAllColibries;
