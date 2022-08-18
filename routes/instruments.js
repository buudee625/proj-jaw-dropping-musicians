const express = require('express');
const router = express.Router();
const instrumentCtrl = require('../controllers/instruments');
const isLoggedIn = require('../config/auth');

router.get('/instruments', instrumentCtrl.index);
router.get('/instruments/:id', instrumentCtrl.show);
router.post('/instruments', isLoggedIn, instrumentCtrl.create);
module.exports = router;
