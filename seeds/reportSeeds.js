const { ReportTemplate } = require('../models');

const reportData = [
        {
            "sales": 15,
            "interactions": 65,
            "overall": 4,
            "comments": "This was a great event"
        },
        {
            "sales": 14,
            "interactions": 68,
            "overall": 4,
            "comments": "This was a great event"
        },
        {
            "sales": 25,
            "interactions": 80,
            "overall": 5,
            "comments": "This was a great event"
        },
        {
            "sales": 23,
            "interactions": 46,
            "overall": 5,
            "comments": "This was a great event"
        },
        {
            "sales": 13,
            "interactions": 50,
            "overall": 3,
            "comments": "This was a great event"
        },
        {
            "sales": 18,
            "interactions": 40,
            "overall": 4,
            "comments": "This was a great event"
        },
    ];

const seedReports = () => ReportTemplate.bulkCreate(reportData);

module.exports = seedReports;