import React from 'react';

const PlayListItem = ({addToInventory, index, video}) => {

  return (
    <div className="container">
      Hello from PlayListItem
      <button onClick={() => addToInventory(video)} type="button">+</button>
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