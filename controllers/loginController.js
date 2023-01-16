const { Entreprise } = require("../models/models");
const { generateToken } = require("../utils/token");

const getLogin = async (req, res) => {
  const { login } = req.body;
  try {
    const result = await Entreprise.findOne({ where: { login } });
    if (result) {
      const token = generateToken(login);
      const { dataValues } = result;
      delete dataValues.password;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("www-authenticate", token);
      res.status(200).json(dataValues);
    } else {
      res.status(404).json({ message: "Mot de passe ou Login invalide!" });
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.getLogin = getLogin;
