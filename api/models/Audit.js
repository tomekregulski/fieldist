const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Audit extends Model {}

Audit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
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
      allowNull: false,
      references: {
        model: 'brand',
        key: 'id',
      },
    },
    // rep_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
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
    modelName: "audit",
  }
);

module.exports = Audit;