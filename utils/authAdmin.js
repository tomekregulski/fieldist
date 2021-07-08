const role = require('../_helpers/role');

const authAdmin = (req, res, next) => {
  console.log(`authAdmin ${req.headers.roles}`);
  console.log(req.headers);  
  if (req.headers.roles === role.admin) {
    console.log('hello admin');
    next();
  } else if (req.headers.roles === role.rep) {
    console.log('rep schedule redirect');
    res.redirect('http://localhost:8081/api/demos/reps/schedule');
    next();
  } else if (req.headers.roles === role.contact) {
    console.log('contact schedule redirect');
    res.redirect('http://localhost:8081/api/demos/brands/schedule');
    next();
  } else {
    // res.redirect('/');
  }
};

module.exports = authAdmin;
