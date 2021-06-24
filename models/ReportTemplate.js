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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    questions: {
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