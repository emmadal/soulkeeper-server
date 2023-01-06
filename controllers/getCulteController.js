const { Culte } = require('../models/models');

const getCulte = async (req, res) => {
  const cultes = await Culte.findAll();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(cultes);
};

exports.getCulte = getCulte;