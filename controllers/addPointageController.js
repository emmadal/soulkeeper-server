const { Pointage } = require("../models/models");

const addPointage = async (req, res, next) => {
  try {
    const search = await Pointage.findOne({
      where: {
        [Op.and]: [
          { date: req.body.date },
          { idmembres: req.body.idmembres },
          { idculte: req.body.idculte },
        ],
      },
    });
    if (search) {
      res.status(404).json({
        status: false,
        message: "Votre présence a déja eté confirmé",
      });
      next();
    } else {
      res.setHeader("Content-Type", "application/json");
      const pointage = {
        date: req.body.date,
        idculte: req.body.idculte,
        idmembres: req.body.idmembres,
        identreprises: req.body.identreprises,
      };
      await Pointage.create(pointage);
      res
        .status(200)
        .json({ status: true, message: "Bravo, présence confirmée." });
    }
  } catch (error) {
    console.log("ERROR Add pointage: ", error);
  }
};

exports.addPointage = addPointage;
