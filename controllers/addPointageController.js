const { Pointage } = require("../models/models");

const addPointage = async (req, res, next) => {
  const { pointage } = req.body;
  const search = await Pointage.findOne({
    where: {
      date: pointage.date,
      idculte: pointage.idculte,
      idmembres: pointage.idmembres,
    },
  });
  if (!search) {
    await Pointage.create(pointage);
    res.status(200).json({ message: "Bravo, présence confirmée." });
    next();
  } else {
    res
      .status(404)
      .json({
        status: false,
        message: "Votre présence a déja eté confirmé",
      });
  }
};

exports.addPointage = addPointage;