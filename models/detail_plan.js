'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  detail_plan.init({
    plant_id: DataTypes.INTEGER,
    feature_id: DataTypes.INTEGER,
    configuration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'detail_plan',
  });
  return detail_plan;
};