const express = require('express');
const router = express.Router();
const videoCtrl = require('../controllers/videos');

router.post('/jdmusicians/:id/videos', videoCtrl.create);

module.exports = router;
