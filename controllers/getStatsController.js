const { Pointage, Membres } = require("../models/models");

const getStats = async (req, res, next) => {
  const { date, idculte, identreprises } = req.body;
  if (date && idculte && identreprises) {
    const membersRes = await Membres.findAndCountAll({
      where: { identreprises },
    });
    const pointage = await Pointage.findAndCountAll({
      where: {
        date,
        idculte,
      },
    });
    const absents = membersRes.count - pointage.count;
    const abs = absents === membersRes.count ? 0 : absents;
    res.setHeader("Content-Type", "application/json");
    res
      .status(200)
      .json({ present: pointage.count, total: membersRes.count, absents: abs });
  }
};

exports.getStats = getStats;
