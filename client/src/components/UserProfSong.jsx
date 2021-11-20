import React, { useContext } from "react";
import UserContext from "./UserContext";
import Colours from './Colours';
import SongInfo from './SongInfo';
import { BiTrash } from 'react-icons/bi';

const UserProfSong = (props) => {
  const { user } = useContext(UserContext); 

  const handleDelete = () => {
    fetch(`/songs/${props.song.id}`, {
      method: 'DELETE'
    })

    props.setPosts(oldPosts => oldPosts.filter(post => post.id !== props.song.id))
  };

  return(
    <div className="card container mt-4" style={{backgroundColor: Colours.white}}>
      <div className="p-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>      
        <div>
          <SongInfo song={props.song} title={props.song.title} user={props.song.user} currUser={user} likes={props.song.likes} 
            setLoading={props.setLoading} />
        </div>
        <audio controls style={{width: 650}}> 
          <source src={props.song.media} /> 
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

export default UserProfSong