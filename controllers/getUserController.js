const { Entreprise } = require('../models/models');

const getUser= async (req, res) => {
  const result = await Entreprise.findOne({
    where: { login: req.params.username }
  });
  if (result) {
    res.setHeader('Content-Type', 'application/json');
    delete result.dataValues.password
    res.status(200).json(result.dataValues);
  } else {
    res.status(404).send('Utilisateur non trouvé!');
  }
};

exports.getUser = getUser;
