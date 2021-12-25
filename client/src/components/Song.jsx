import React, { useContext } from "react";
import Colours from './Colours';
import SongInfo from './SongInfo';
import { BiTrash } from 'react-icons/bi';
import UserContext from "./UserContext";


const Song = (props) => {
  const { user } = useContext(UserContext); 
  // const songLink = URL.createObjectURL();

  const handleDelete = () => {
    fetch(`https://sound-io-backend.herokuapp.com/songs/${props.song.id}`, {
      method: 'DELETE'
    })

    props.setPosts(oldPosts => oldPosts.filter(post => post.id !== props.song.id))
  };

  return(
    <div className="card container w-75 mt-4" style={{backgroundColor: Colours.white}}>
      <div className="p-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>      
        <div>
          <SongInfo song={props.song} title={props.song.title} user={props.song.user} currUser={user} likes={props.song.likes} 
            setLoading={props.setLoading} />
        </div>
        <audio controls style={{width: 650}} controlsList="nodownload"> 
          <source src={props.song.media} type="audio/mp3" /> 
        </audio>

        { user.id === props.song.user.id ? 
          <BiTrash style={{fontSize: 40, cursor: 'pointer'}} onClick={handleDelete} />
        :
          null
        }
      </div>
    </div>
  )
};

export default Song;