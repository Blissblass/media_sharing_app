import React from "react";
import Colours from './Colours';
import { FiThumbsUp } from 'react-icons/fi';

const Song = (props) => {

  return(
    <div className="card container w-50 mt-4" style={{backgroundColor: Colours.white}}>
      <div className="p-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>      
        <div className="px-2" style={{display: 'flex', alignItems: 'center'}}>
          <FiThumbsUp className="mb-1 me-5" style={{fontSize: 40, cursor: "pointer"}} />
          <h3>{props.song.title}</h3>
        </div>
        <audio controls> 
          <source src={props.song.media} /> 
        </audio>
      </div>
    </div>
  )
};

export default Song;