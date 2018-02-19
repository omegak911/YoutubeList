const db = require('./index');

const User = db.User;
const Video = db.Video;

let createNewUser = ({name, password}) => {

  let user = new User({
    name: name,
    password: password,
    playList: []
  })

  user.save();
}

let savePlayList = ({name, playList}) => {
  User.findOneAndUpdate({name: name}, {$set: {playList: playList}}, function(err, result) {
    if (err) { console.log(err)} else { console.log(result)};
  })
}

module.exports = {createNewUser, savePlayList}