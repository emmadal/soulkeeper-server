const { Pays } = require('../models/models');

const getPays = async (req, res) => {
  const pays = await Pays.findAll();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(pays);
};

exports.getPays = getPays;
