const express = require('express');
const router = express.Router();
const musiciansCtrl = require('../controllers/musicians');
const isLoggedIn = require('../config/auth');

router.get('/', musiciansCtrl.index);
router.get('/new', isLoggedIn, musiciansCtrl.newMusician);
router.post('/', isLoggedIn, musiciansCtrl.create);
router.get('/:id', musiciansCtrl.show);

module.exports = router;
