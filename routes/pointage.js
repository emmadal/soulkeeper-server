const express = require("express");
const { addPointage } = require("../controllers/addPointageController");
const { authorizeAccess } = require("../middleware/authorizeAccess");
const router = express.Router();

router.post("/add-pointage", authorizeAccess, addPointage);
module.exports = router;
