const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
// const User = require('../models/User');

const user = {
  id: 1,
  first_name: "admin",
  last_name: "test",
  email: "admin@fieldist.com",
  roles: "ROLE_ADMIN",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI1MzQyOTQ3LCJleHAiOjE2MjU0MjkzNDd9.ezYWzeDNkDPpESA6045FTtJDdAaX6uuOR2uvv5R1zr4"
}

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  // let token = user.accessToken
  console.log(req.headers["x-access-token"]);

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    console.log(req.userId);
    next();
  });
};

// isAdmin = (req, res, next) => {
//   User.findByPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "admin") {
//           next();
//           return;
//         }
//       }

//       res.status(403).send({
//         message: "Require Admin Role!"
//       });
//       return;
//     });
//   });
// };

// isModerator = (req, res, next) => {
//   User.findByPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "moderator") {
//           next();
//           return;
//         }
//       }

//       res.status(403).send({
//         message: "Require Moderator Role!"
//       });
//     });
//   });
// };

// isModeratorOrAdmin = (req, res, next) => {
//   User.findByPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "moderator") {
//           next();
//           return;
//         }

//         if (roles[i].name === "admin") {
//           next();
//           return;
//         }
//       }

//       res.status(403).send({
//         message: "Require Moderator or Admin Role!"
//       });
//     });
//   });
// };


//   isAdmin: isAdmin,
//   isModerator: isModerator,
//   isModeratorOrAdmin: isModeratorOrAdmin
module.exports = verifyToken;


