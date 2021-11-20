import React, { useContext } from "react";
import UserProfSong from "./UserProfSong";
import Song from './Song';
import UserContext from "./UserContext";


const UserPosts = (props) => {
  const { user } = useContext(UserContext);

  return(
    <div className="card container mt-4 p-4 w-75">
      <h1>User posts!</h1>
      { props.createdSongs.map(song => <Song song={song} user={user} setLoading={props.setLoading} setPosts={props.setCreated} />) }
    </div>
  )
};

export default UserPosts;