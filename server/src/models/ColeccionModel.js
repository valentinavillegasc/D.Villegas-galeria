const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Coleccion",
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
      description: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
    },
    {
      timestamps: false,
      createdAt: false,
    }
  );
};
