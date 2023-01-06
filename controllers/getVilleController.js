const { Ville } = require('../models/models');

const getVille = async (req, res) => {
  const ville = await Ville.findAll();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(ville);
};

exports.getVille = getVille;