const Demo = require('./Demo');
const Admin = require('./Admin');
const BrandContact = require('./BrandContact');
const Campaign = require('./Campaign');
const Product = require('./Product');
const Region = require('./Region');
const Rep = require('./Rep');
const ReportTemplate = require('./ReportTemplate');
const Venue = require('./Venue');
const Brand = require('./Brand');

Product.belongsTo(Brand, {
  foreignKey: 'brand_id',
});

Brand.hasMany(Product, {
  foreignKey: 'brand_id',
});

Campaign.belongsTo(Brand, {
  foreignKey: 'brand_id',
});

Brand.hasMany(Campaign, {
  foreignKey: 'brand_id',
});

BrandContact.belongsTo(Brand, {
  foreignKey: 'brand_id',

});

Brand.hasOne(BrandContact, {
  foreignKey: 'brand_id',
});

Campaign.belongsTo(ReportTemplate, {
  foreignKey: 'report_template_id',
});

ReportTemplate.hasMany(Campaign, {
    foreignKey: 'report_template_id',
});

// Demo.belongsTo(Campaign, {
//   foreignKey: 'campaign_id',
//   constraints: false,
//   allowNull: true,
// });

Demo.belongsTo(Campaign, {
  as: 'demos'
});

Campaign.hasMany(Demo, {
  constraints: false,
});

// Campaign.hasMany(Demo, {
//   foreignKey: 'campaign_id',
//   constraints: false,
//   allowNull: true,
// });

// Demo.belongsTo(Campaign, {
//   foreignKey: {
//     name: 'campaign_id',
//     allowNull: true,
//   },
//   constraints: false,
// });

// Campaign.hasMany(Demo, {
//   foreignKey: {
//     name: 'campaign_id',
//     allowNull: true,
//   },
//   constraints: false,
// });

Demo.belongsTo(Venue, {
  foreignKey: 'venue_id',
});

Venue.hasMany(Demo, {
    foreignKey: 'venue_id',
});

Demo.belongsTo(Rep, {
  foreignKey: 'rep_id',
});

Rep.hasMany(Demo, {
    foreignKey: 'rep_id',
});

Venue.belongsTo(Region, {
  foreignKey: 'region_id',
});

Region.hasMany(Venue, {
    foreignKey: 'region_id',
});


module.exports = {
    Demo,
    BrandContact,
    Campaign,
    Product,
    Region,
    Rep,
    ReportTemplate,
    Venue,
    Brand,
    Admin,
};