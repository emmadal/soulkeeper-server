const { Commune } = require("../models/models");

const getCommune = async (req, res) => {
  const { identreprises } = req.body;
  const commune = await Commune.findAll({ where: { identreprises } });
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(commune);
};

exports.getCommune = getCommune;
