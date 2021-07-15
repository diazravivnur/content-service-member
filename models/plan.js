"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      plan.belongsToMany(models.feature, {
        as: "plans",
        through: {
          model: "detail_plan",
        },
        foreignKey: "plant_id",
      });
    }
  }
  plan.init(
    {
      name: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      currency: DataTypes.STRING,
      description: DataTypes.STRING,
      status_plans: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "plan",
    }
  );
  return plan;
};
