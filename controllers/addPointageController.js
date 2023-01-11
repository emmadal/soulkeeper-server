const { Pointage } = require("../models/models");

const addPointage = async (req, res, next) => {
  const search = await Pointage.findAndCountAll({
    where: {
      date: req.body.date,
      idculte: req.body.idculte,
      idmembres: req.body.idmembres,
    },
  });
  console.log(search)
  if (search.count === 0) {
    const pointage = {
      date: req.body.date,
      idculte: req.body.idculte,
      idmembres: req.body.idmembres,
      identreprises: req.body.identreprises,
    };
    await Pointage.create(pointage);
    res.status(200).json({ message: "Bravo, présence confirmée." });
    next();
  } else {
    res.status(404).json({
      status: false,
      message: "Votre présence a déja eté confirmé",
    });
  }
};

exports.addPointage = addPointage;
