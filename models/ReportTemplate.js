const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ReportTemplate extends Model {}

ReportTemplate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sales: {
      type: DataTypes.INTEGER,
    },
    interactions: {
      type: DataTypes.INTEGER,
    },
    overall: {
      type: DataTypes.INTEGER,
    },
    comments: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "report_template",
  }
);

module.exports = ReportTemplate;