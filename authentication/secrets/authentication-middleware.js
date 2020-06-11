const jwt = require("jsonwebtoken");

const { jwtSecret } = require("./secrets/secret.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "you don't have access to this"});
      } else {
        req.user = { user: decodedToken.user };

        next();
      }
    });
  } else {
    res.status(401).json({ message: "you don't have access to this"});
  }
}