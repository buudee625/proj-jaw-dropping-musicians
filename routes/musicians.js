const express = require("express");
const router = express.Router();
const musiciansCtrl = require("../controllers/musicians");

router.get("/", musiciansCtrl.index);
router.get("/new", musiciansCtrl.newMusician);

module.exports = router;
