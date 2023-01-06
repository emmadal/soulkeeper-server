const express = require("express");
const { getCulte } = require("../controllers/getCulteController");
const { authorizeAccess } = require("../middleware/authorizeAccess");
const router = express.Router();

router.get("/", authorizeAccess, getCulte);
module.exports = router;
