const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Brand extends Model {}

Brand.init(
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
    // product_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'product',
    //     key: 'id',
    //   },
    // },
    // campaign_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'campaign',
    //     key: 'id',
    //   },
    // },
    // contact_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'brand_contact',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    timestamp: false,
    freezeTableName: true,
    underscored: true,
    modelName: "brand",
  }
);

module.exports = Brand;