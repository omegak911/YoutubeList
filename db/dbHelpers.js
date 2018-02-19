const db = require('./index');

const User = db.User;
const Video = db.Video;

let login = ({name, password}, callback) => {
  User.find({name: name, password: password}, (err, result) => {
    if (err) {console.log(err)} else {
      callback(result);
    }
  })
}

let createNewUser = ({name, password}) => {

  let user = new User({
    name: name,
    password: password,
    playList: []
  })

  user.save();
}

let savePlayList = (playList) => {
  console.log('playList: ', playList);
  User.findOneAndUpdate({name: 'Kin'}, {$set: {playList: playList}}, function(err, result) {
    if (err) { console.log(err)} else { console.log(result)};
  })
}

module.exports = {createNewUser, login, savePlayList}