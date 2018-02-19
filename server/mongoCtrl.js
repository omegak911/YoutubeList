const dbHelpers = require('../db/dbHelpers');
const apiHelpers = require('../api/apiHelpers');

module.exports = {
  get: {
    searchYouTube: function(req, res) {
    //uses youtube API
    }
  },
  post: {
    savePlayList: function(req, res) {
      dbHelpers.savePlayList(req.body);
      res.status(201).send('playListSaved');
    },
    signup: function(req, res) {
      //TODO: check if already existing
      dbHelpers.createNewUser(req.body);
      res.status(201).send('signup success');
    }
  } 
}