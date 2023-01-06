const express = require("express");
const { getPays } = require("../controllers/getPaysController");
const { authorizeAccess } = require("../middleware/authorizeAccess");
const router = express.Router();

router.get("/", authorizeAccess, getPays);
module.exports = router;
