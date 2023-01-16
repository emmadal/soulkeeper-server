const express = require("express");
const { getCommune } = require("../controllers/getCommuneController");
const { authorizeAccess } = require("../middleware/authorizeAccess");
const router = express.Router();

router.post("/commune", authorizeAccess, getCommune);
module.exports = router;
