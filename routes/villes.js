const express = require("express");
const { getVille } = require("../controllers/getVilleController");
const { authorizeAccess } = require("../middleware/authorizeAccess");
const router = express.Router();

router.post("/villes", authorizeAccess, getVille);
module.exports = router;
