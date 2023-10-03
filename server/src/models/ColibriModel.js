const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Colibri",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fichaTecnica: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      createdAt: false,
    }
  );
};
