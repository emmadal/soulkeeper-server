const { Membres } = require("../models/models");

const addMembre = async (req, res, next) => {
  try {
    const { email, contact } = req.body;
    const search = await Membres.findOne({ where: { email, contact } });
    if (search) {
      res.status(400).json({ message: "Ce membre existe déja" });
      next();
    } else {
      res.setHeader("Content-Type", "application/json");
      await Membres.create(req.body);
      res.status(200).json({
        status: true,
        message: "« Bravo, inscription réussie ». Bienvenus chez vous !",
      });
    }
  } catch (error) {
      res.status(402).json({
        status: false,
        message: error.message,
      });
    console.log("ERROR Add member: ", error);
  }
};

exports.addMembre = addMembre;
