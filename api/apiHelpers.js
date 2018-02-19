const request = require('request');
const apiKey = require('./apiKey');


let searchYouTube = ({query}, callback) => {
  let options = `https://www.googleapis.com/youtube/v3/search?\
part=snippet\
&order=viewCount\
&q=${query}\
&type=video\
&maxResults=10\
&videoEmbeddable=true\
&key=${apiKey}`;

  request(options, (err, result) => {
      if (err) {console.log(err)} else {
        callback(result);
      }
    })
}

module.exports = {searchYouTube};