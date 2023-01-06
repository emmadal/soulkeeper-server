const jwt = require('jsonwebtoken')

const authorizeAccess = (req, res, next) => {
  const appToken = req.headers.authorization;
  if (appToken) {
    const value = appToken.split(' ')[1];
    jwt.verify(value, process.env.SECRET_KEY, (err, login) => {
      if (err) {
        res.status(401).send("Vous n'êtes pas autorisé!");
      } else {
        req.login = login;
        next();
      }
    });
  } else {
    res.status(403).send('Token non valide!');
  }
};

exports.authorizeAccess = authorizeAccess;

