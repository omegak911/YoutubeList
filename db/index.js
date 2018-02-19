const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/youtubeList');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('youtubeList DB is connected!')});

const videoSchema = mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String,
  videoUrl: String,
})

const Video = mongoose.model('Video', videoSchema);

const userSchema = mongoose.Schema({
  name: {type: String, unique: true},
  password: String,
  playList: Object
})

const User = mongoose.model('User', userSchema);

module.exports = {User, Video}

// let test = new Video({
//   title: 'test',
//   description: 'test',
//   thumbnail: 'test',
//   videoUrl: 'test',
// })

// test.save();