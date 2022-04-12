const express = require("express");
const router = express.Router();
const { getAll } = require("../controllers/controller");

router.route("/").get(getAll);

module.exports = router;
