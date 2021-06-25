const role = require('../_helpers/role');

const dataAuth = (req, res, next) => {
    console.log(`AuthAdmin ${req.session.role}`);
    // const authLevel = 'hello';
    if (req.session.role === role.admin) {
        next();
    } else if (req.session.role === role.contact) {
        res.redirect('/api/data/brands');
    } else {
        // res.redirect('/');
    }
};

module.exports = dataAuth;