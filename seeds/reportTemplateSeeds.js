const { ReportTemplate } = require('../models');

const reportTemplateData = [
  {
    "name": "Standard Demo Report Template",
    "questions": "questionsArray"
  }
];

const seedReportTemplates = () => ReportTemplate.bulkCreate(reportTemplateData);

module.exports = seedReportTemplates;