const { Culte } = require('../models/models');

const getCulte = async (req, res) => {
  const { identreprises } = req.body
  const cultes = await Culte.findAll({ where: { identreprises } });
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(cultes);
};

exports.getCulte = getCulte;