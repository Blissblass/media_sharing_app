import React from "react";
import Colours from './Colours';

const Song = (props) => {

  return(
    <div className="card container w-50" style={{backgroundColor: Colours.white}}>
      <h1>{props.song.title}</h1>
    </div>
  )
};

export default Song;