const express = require("express");
const router = express.Router();
const musiciansCtrl = require("../controllers/musicians");

router.get("/", musiciansCtrl.index);

module.exports = router;
