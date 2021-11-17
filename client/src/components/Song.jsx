import React from "react";
import Colours from './Colours';
import SongInfo from './SongInfo';

const Song = (props) => {

  return(
    <div className="card container w-50 mt-4" style={{backgroundColor: Colours.white}}>
      <div className="p-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>      
        <div>
          <SongInfo song={props.song} title={props.song.title} user={props.song.user} likes={props.song.likes} 
            setLoading={props.setLoading} />
        </div>
        <audio controls> 
          <source src={props.song.media} /> 
        </audio>
      </div>
    </div>
  )
};

export default Song;