const { Ville } = require('../models/models');

const getVille = async (req, res) => {
  const {identreprises } = req.body
  const villes = await Ville.findAll({ where: { identreprises } });
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(villes);
};

exports.getVille = getVille;