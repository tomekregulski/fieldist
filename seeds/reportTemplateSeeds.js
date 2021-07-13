const { ReportTemplate } = require('../models');

const reportTemplateData = [
  {
    name: 'test',
    sales: 38,
    interactions: 80,
    overall: 4,
    comments: 'Everything was awesome',
    check_in: {
      location: '',
      timestamp: '',
    },
    check_out: 0,
    photos: {
      images: [],
    },
  },
];

const seedReportTemplates = () => ReportTemplate.bulkCreate(reportTemplateData);

module.exports = seedReportTemplates;
