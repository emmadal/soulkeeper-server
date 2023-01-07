const express = require("express");
const { getLogin } = require("../controllers/loginController");
const router = express.Router();

router.post("/login", getLogin);
module.exports = router
