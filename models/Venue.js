const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Region extends Model {}

Region.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'region',
        key: 'id',
      },
    },
  },

  {
    sequelize,
    timestamp: false,
    freezeTableName: true,
    underscored: true,
    modelName: "region",
  }
);

module.exports = Region;