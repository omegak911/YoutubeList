import React from 'react';

const VideoPlayer = ({currentVid}) => (
  <div className="container">
    Hello from VideoPlayer  
    <iframe src={`https://www.youtube.com/embed/${currentVid.id.videoId}`} frameborder="0"></iframe>
    <p>{currentVid.snippet.title}</p>
    <p>currentVid.snippet.description</p>
  </div>
)

export default VideoPlayer;