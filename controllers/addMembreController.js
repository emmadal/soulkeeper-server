const {Membres} = require('../models/models')

const addMembre = async (req, res, next) => {
  try {
    const { email, nom, prenoms } = req.body;
    const search = await Membres.findOne({ where: { email, nom, prenoms } });
    if (search) {
      res.status(400).json({ status: false, message: 'Ce membre existe déja' });
      next();
    } else {
      res.setHeader('Content-Type', 'application/json');
      await Membres.create(req.body);
      res.status(200).json({status: true, message: 'Le membre a été ajouté' });
    }
  } catch (error) {
    console.log('ERROR: ', error);
  }
};

exports.addMembre = addMembre;
