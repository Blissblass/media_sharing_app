import React from "react";
import Colours from './Colours';

const Song = (props) => {

  return(
    <div className="card container w-50 mt-4" style={{backgroundColor: Colours.white}}>
      <h3>{props.song.title}</h3>
      <audio controls style={{}}> 
        <source src={props.song.media} /> 
      </audio>
    </div>
  )
};

export default Song;