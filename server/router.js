const router = require('express').Router();
const mongoCtrl = require('./mongoCtrl');

router.get('/searchYouTube', mongoCtrl.get.searchYouTube);
router.post('/savePlayList', mongoCtrl.post.savePlayList);
router.post('/signup', mongoCtrl.post.signup);

module.exports = router;