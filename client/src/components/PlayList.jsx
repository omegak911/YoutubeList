import React from 'react';
import PlayListItem from './PlayListItem';

const PlayList = ({videos}) => {

  return (
    <div className="container">
      Hello from PlayList
      {videos.map( (video, index) => {
        console.log(video);
        return <PlayListItem key={index} index={index} video={video}/>
      })}
    </div>
  )
}

export default PlayList;