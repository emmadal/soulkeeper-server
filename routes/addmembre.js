const express = require("express");
const { addMembre } = require("../controllers/addMembreController");
const { authorizeAccess } = require("../middleware/authorizeAccess");
const router = express.Router();

router.post("/newmembre", authorizeAccess, addMembre);

module.exports = router