const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Campaign extends Model {}

Campaign.init(
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
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'brand',
        key: 'id',
      },
    },
    report_template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'report_template',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamp: false,
    freezeTableName: true,
    underscored: true,
    modelName: "campaign",
  }
);

module.exports = Campaign;