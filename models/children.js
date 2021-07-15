'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class children extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      children.belongsTo(models.user, {
        as : "user",
        foreignKey : {
          name : "user_id"
        }
      })
    }
  };
  children.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    type_user: DataTypes.STRING,
    age: DataTypes.INTEGER,
    dob: DataTypes.DATEONLY,
    status_child: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'children',
  });
  return children;
};