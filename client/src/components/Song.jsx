import React from "react";
import Colours from './Colours';

const Song = (props) => {

  return(
    <div className="card container" style={{backgroundColor: Colours.grey}}>
      <h1>{props.song.title}</h1>
    </div>
  )
};

export default Song;