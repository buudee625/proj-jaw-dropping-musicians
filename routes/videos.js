const express = require('express');
const router = express.Router();
const videoCtrl = require('../controllers/videos');

router.post('/musicians/:id/videos', videoCtrl.create);

module.exports = router;
