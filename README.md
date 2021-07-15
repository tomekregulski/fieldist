## Fieldist – Field Marketing Management Made Simple

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

- [Description ](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

# Description

Fieldist is a platform built using Node.js, React, MySQL, and Express; and designed for agencies to manage their field marketing business. At the core of the app is a multi-role authentication program that conditionally renders the app based on the role of the user (admin, brand contact, and field rep).

A field rep can view their specific work schedule, check in and out at a location, and submit a report. They can edit that report until it is approved by an admin.

A brand contact is able to view the schedules and data (raw data table and metric charts) for events assigned to their brand, as well as completed reports once they have been approved by an admin.

Admins have the most access in the app. In regard to event reports – they can approve or deny a report, add comments to support their decision, and ultimately give a rating to the report, which can be used for internal revue purposes. Additionally, they can view the full schedule of events (past, present, and future) and full spread of report data (raw data tables and metric charts). Finally, admins have full CRUD capabilities for all models in the database.

This app is a prototype with plans for future development. It is deployed and kept up to date <a href="https://secret-wave-01417.herokuapp.com/">here</a>.

# Installation

To install and run this app locally, you must first ensure that you have current versions of Node.js and MySQL Workbench installed on your machine.

Then, clone the repository and open it in the code editor of your choice. From the root directory, run

```
npm i
```

in your terminal to install all necessary front- and back-end dependencies.

Once this is done, you need to set up a .env file in the root directory. This does a Cloudinary account, so please set up a free one if you do not have one already. Please follow the format below to ensure your .env file is set up correctly:

```
DB_NAME=
DB_USER=
DB_PW=
SERVER_PORT=
SECRET=
```

Additionally, go into client/package.json and update the ‘Proxy” to match your server port.

Once this is all complete, you can start the app by running

```
npm start
```

# Usage

When you first load up the app, you will be brought to a Login page. No other page is accessible to the public. You can use the credentials below to log in as any of the user types.

# Contributing

You are welcome to fork the repo and make pull requests for any features that you think would support and expect
