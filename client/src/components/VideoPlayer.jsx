import React from 'react';

const VideoPlayer = ({addToInventory, currentVid}) => (
  <div className="container">
    Hello from VideoPlayer  
    <iframe src={`https://www.youtube.com/embed/${currentVid.id.videoId}`} frameborder="0"></iframe>
    <p>{currentVid.snippet.title}</p>
    <p>currentVid.snippet.description</p>
    <button type="button" onClick={addToInventory}>+</button>
  </div>
)

export default VideoPlayer;