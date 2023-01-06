const { Entreprise } = require("../models/models");
const { generateToken } = require("../utils/token");

const getLogin = async (req, res, next) => {
  const { login, password } = req.body;
  const result = await Entreprise.findOne({ where: { login, password } });
  if (result) {
    const token = generateToken(login);
    const { dataValues } = result;
    delete dataValues.password;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("www-authenticate", token);
    res.status(200).json(dataValues);
    next();
  } else {
    res.status(404).json({ message: "Mot de passe ou Login invalide!" });
  }
};

exports.getLogin = getLogin;
