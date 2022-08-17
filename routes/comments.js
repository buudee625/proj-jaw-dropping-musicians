const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comments');

router.post('/jdmusicians/:id/comments', commentCtrl.create);

module.exports = router;
