const auth_header = (req, res, next) => {
    res.set(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  }

module.exports = auth_header;