const { Pointage } = require('../models/models');

const addPointage = async (req, res, next) => {
  const { pointage } = req.body;
  try {
    for (let index = 0; index < pointage.length; index++) {
      const element = pointage[index];
      const search = await Pointage.findAll({
        where: {
          date: element.date,
          idculte: element.idculte,
          idmembres: element.idmembres
        }
      });
      if (search.length) {
        res.status(400).json({ status: false, message: 'Présence déja confirmée' });
        next();
      } else {
        await Pointage.create(element);
      }
    }
    res.status(200).json({ status: true, message: 'Bravo, présence confirmée' });
  } catch (error) {
    
  }
  
};

exports.addPointage = addPointage;