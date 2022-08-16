const express = require('express');
const router = express.Router();
const instrumentCtrl = require('../controllers/instruments');

router.get('/instruments', instrumentCtrl.index);
router.get('/instruments/:id', instrumentCtrl.show);
router.post('/instruments', instrumentCtrl.create);
module.exports = router;
