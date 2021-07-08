const { ReportTemplate } = require('../models');

const reportTemplateData = [
  {
    "sales": 38,
    "interactions": 80,
    "overall": 4,
    "comments": "Evenrything was awesome"
  }
];

const seedReportTemplates = () => ReportTemplate.bulkCreate(reportTemplateData);

module.exports = seedReportTemplates;