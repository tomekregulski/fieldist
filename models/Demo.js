const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Demo extends Model { }

Demo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'demo',
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // end_time: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'venue',
        key: 'id',
      },
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'campaign',
        key: 'id',
      },
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'brand',
        key: 'id',
      },
    },
    // rep_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'rep',
    //     key: 'id',
    //   },
    // },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "demo",
  }
);

module.exports = Demo;