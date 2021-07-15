"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class paket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  paket.init(
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      min_age: DataTypes.INTEGER,
      max_age: DataTypes.INTEGER,
      status_paket: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "paket",
      timestamps: false,
    }
  );
  return paket;
};
