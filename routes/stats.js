const express = require("express");
const { getStats } = require("../controllers/getStatsController");
const { authorizeAccess } = require("../middleware/authorizeAccess");
const router = express.Router();

router.post("/stats", authorizeAccess, getStats);
module.exports = router;
