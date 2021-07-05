const role = require('../_helpers/role');

const authAdmin = (req, res, next) => {
  console.log(req.headers.roles);
  if (req.headers.roles === role.admin) {
    console.log('hello admin');
    next();
  } else if (req.session.role === role.rep) {
    console.log('rep schedule redirect');
    res.redirect('/api/demos/reps/schedule');
  } else if (req.session.role === role.contact) {
    res.redirect('/api/demos/brands/schedule');
  } else {
    // res.redirect('/');
  }
};

module.exports = authAdmin;
