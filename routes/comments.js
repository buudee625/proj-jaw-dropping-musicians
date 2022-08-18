const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');

router.post('/jdmusicians/:id/comments', isLoggedIn, commentCtrl.create);
router.delete('/comments/:id', isLoggedIn, commentCtrl.deleteComm);

module.exports = router;
