const { Entreprise } = require('../models/models');

const getUser= async (req, res, next) => {
    console.log(req.path);
  const result = await Entreprise.findOne({
    where: { login: req.params.username }
  });
  if (result) {
    res.setHeader('Content-Type', 'application/json');
    delete result.dataValues.password
    res.status(200).json(result.dataValues);
    next();
  } else {
    res.status(404).send('Utilisateur non trouvé!');
  }
};

exports.getUser = getUser;
