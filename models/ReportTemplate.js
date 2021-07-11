const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
    check_in: {
      type: DataTypes.JSON,
      // location, timestamp
    },
    check_out: {
      type: DataTypes.DATE,
    },
    photos: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'report_template',
  }
);

module.exports = ReportTemplate;
