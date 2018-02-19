const dbHelpers = require('../db/dbHelpers');
const apiHelpers = require('../api/apiHelpers');

module.exports = {
  get: { 
    login: function(req, res) {
      dbHelpers.login(req.query, (result) => {
        if (result.length > 0) {
          res.status(200).send(result[0].playList);
        } else {
          res.status(404).send('Not Found')
        }
      })
    },
    searchYouTube: function(req, res) {
    //uses youtube API
      // console.log(req.query);
      apiHelpers.searchYouTube(req.query, (results) => {
        res.status(200).send(results.body)
      })
     
    }
  },
  post: {
    signup: function(req, res) {
      //TODO: check if already existing
      dbHelpers.createNewUser(req.body);
      res.status(201).send('signup success');
    }
  },
  put: {
    savePlayList: function(req, res) {
      // console.log('PUT req: ', req.body)
      dbHelpers.savePlayList(req.body);
      res.status(201).send('playListSaved');
    }
  } 
}