const express = require("express");
const { getUser } = require("../controllers/getUserController");
const { authorizeAccess } = require("../middleware/authorizeAccess");
const router = express.Router();

router.post("/user/:username", authorizeAccess, getUser);
module.exports = router;
