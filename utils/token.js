const jwt = require("jsonwebtoken");

const generateToken = (login) => {
  try {
    const res = jwt.sign({ login }, process.env.SECRET_KEY, {
      expiresIn: '5m',
      algorithm: 'HS256'
    });
    return res;
  } catch (error) {
    console.log('Token error: ', error);
  }
};

exports.generateToken = generateToken;