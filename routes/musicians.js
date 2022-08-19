const express = require('express');
const router = express.Router();
const musicianCtrl = require('../controllers/musicians');
const isLoggedIn = require('../config/auth');

router.get('/', musicianCtrl.index);
router.get('/new', isLoggedIn, musicianCtrl.newMusician);
router.post('/', isLoggedIn, musicianCtrl.create);
router.get('/:id', musicianCtrl.show);
router.delete('/:id', isLoggedIn, musicianCtrl.deleteMusician);
router.get('/:id/edit', musicianCtrl.edit);
router.put('/:id', musicianCtrl.update);

module.exports = router;
