import React from 'react';

const PlayListItem = ({index, video}) => {

  return (
    <div className="container">
      Hello from PlayListItem
      <button type="button">+</button>
      <br/>
      <img src={video.snippet.thumbnails.default.url} alt=""/>
      <br/>
      <p>Title: {video.snippet.title}</p>
      <br/>
      <p>Description: {video.snippet.description}</p>
    </div>
  )
}

export default PlayListItem;