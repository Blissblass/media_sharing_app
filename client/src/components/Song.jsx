import React from "react";
import Colours from './Colours';
import { Link } from 'react-router-dom';
import { FiThumbsUp } from 'react-icons/fi';

const Song = (props) => {

  return(
    <div className="card container w-50 mt-4" style={{backgroundColor: Colours.white}}>
      <div className="p-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>      
        <div className="px-2" style={{display: 'flex', alignItems: 'center'}}>
          <FiThumbsUp className="mb-2 me-5" style={{fontSize: 40, cursor: "pointer"}} />
          <div>
            <h2>{props.song.title}</h2>
            <h4><Link to={`/user/${props.song.user.id}`}>{props.song.user.username}</Link></h4>
          </div>
        </div>
        <audio controls> 
          <source src={props.song.media} /> 
        </audio>
      </div>
    </div>
  )
};

export default Song;