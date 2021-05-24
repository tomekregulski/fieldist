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
  as: 'products', 
});

Brand.hasMany(Product, {
  foreignKey: 'brand_id',
  as: 'products',
});

Campaign.belongsTo(Brand, {
  foreignKey: 'brand_id',
  as: 'brand',
});

Brand.hasMany(Campaign, {
  foreignKey: 'brand_id',
  as: 'campaigns',
});

BrandContact.belongsTo(Brand, {
  foreignKey: 'brand_id',
  as: 'brand',
  constraints: false,
});

Brand.hasOne(BrandContact, {
  foreignKey: 'brand_id',
  as: 'contact',
  constraints: false,
});

Campaign.hasOne(ReportTemplate, {
  foreignKey: 'report_template_id',
  as: 'report_template',
  constraints: false,
});

// ReportTemplate.belongsToMany(Campaign, {
//     through: 'report_template_id'
// });

Demo.belongsTo(Campaign, {
  foreignKey: 'campaign_id',
  as: 'campaign',
});

Campaign.hasMany(Demo, {
  foreignKey: 'campaign_id',
  as: 'demos',
});

Demo.hasOne(Venue, {
  foreignKey: 'venue_id',
  as: 'venue',
  constraints: false,
});

// Venue.belongsToMany(Demo, {
//     through: 'venue_id'
// });

Demo.hasOne(Rep, {
  foreignKey: 'rep_id',
  as: 'rep',
  constraints: false,
});

// Rep.belongsToMany(Demo, {
//     through: 'rep_id'
// });


Venue.hasOne(Region, {
  foreignKey: 'region_id',
  as: 'region',
  constraints: false,
});

// Region.belongsToMany(Venue, {
//     through: 'venue_id'
// });


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