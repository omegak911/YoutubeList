const router = require('express').Router();
const mongoCtrl = require('./mongoCtrl');

router.get('/searchYouTube', mongoCtrl.get.searchYouTube);
router.get('/login', mongoCtrl.get.login);
router.put('/savePlayList', mongoCtrl.put.savePlayList);
router.post('/signup', mongoCtrl.post.signup);

module.exports = router;