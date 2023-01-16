const { getPagination, getPagingData } = require("../utils/pagination");
const { Membres } = require('../models/models');

const getMembre = async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(Number(page), Number(size));
  const data = await Membres.findAndCountAll({ limit, offset });
  res.setHeader('Content-Type', 'application/json');
  const response = getPagingData(data, page, limit);
  res.status(200).json(response);
};

exports.getMembre = getMembre;