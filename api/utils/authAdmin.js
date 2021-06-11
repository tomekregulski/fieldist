const role = require('../_helpers/role');

const authAdmin = (req, res, next) => {
    console.log(`AuthAdmin ${req.session.role}`);
    // const authLevel = 'hello';
    if (req.session.role === role.admin) {
        next();
    } else if (req.session.role === role.rep) {
        res.redirect('/api/demos/reps/schedule');
    } else {
        res.redirect('/');
    }
  };
  
  module.exports = authAdmin;