
const getHello = async (req, res) => {
  res.status(200).json("Welcome to the Soulkeeper API");
};

exports.getHello = getHello;
