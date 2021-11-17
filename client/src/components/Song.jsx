import React from "react";
import Colours from './Colours';
import SongInfo from './SongInfo';
import { BiTrash } from 'react-icons/bi';


const Song = (props) => {

  const handleDelete = () => {
    fetch(`/songs/${props.song.id}`, {
      method: 'DELETE'
    })
  };

  return(
    <div className="card container w-75 mt-4" style={{backgroundColor: Colours.white}}>
      <div className="p-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>      
        <div>
          <SongInfo song={props.song} title={props.song.title} user={props.song.user} likes={props.song.likes} 
            setLoading={props.setLoading} />
        </div>
        <audio controls style={{width: 650}} className="border border-danger"> 
          <source src={props.song.media} /> 
        </audio>
        <BiTrash style={{fontSize: 40, cursor: 'pointer'}} onClick={handleDelete} />
      </div>
    </div>
  )
};

export default Song;