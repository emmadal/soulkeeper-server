const express = require("express");
const { getMembre } = require("../controllers/getMembreController");
const { authorizeAccess } = require("../middleware/authorizeAccess");
const router = express.Router();

router.post("/membres", authorizeAccess, getMembre);
module.exports = router;
