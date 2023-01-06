const express = require("express");
const { getCommune } = require("../controllers/getCommuneController");
const { authorizeAccess } = require("../middleware/authorizeAccess");
const router = express.Router();

router.get("/", authorizeAccess, getCommune);
module.exports = router;
