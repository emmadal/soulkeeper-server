const express = require("express");
const { getHello } = require("../controllers/helloController");
const router = express.Router();

router.post("/", getHello);
module.exports = router;
