const { Commune } = require('../models/models');

const getCommune = async (req, res) => {
  const commune = await Commune.findAll();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(commune);
};

exports.getCommune = getCommune;