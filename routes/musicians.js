const express = require("express");
const router = express.Router();
const musiciansCtrl = require("../controllers/musicians");

router.get("/", musiciansCtrl.index);
router.get("/new", musiciansCtrl.newMusician);
router.post("/", musiciansCtrl.create);
router.get("/:id", musiciansCtrl.show);

module.exports = router;
