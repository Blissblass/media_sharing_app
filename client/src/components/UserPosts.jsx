import React, { useContext } from "react";
import UserProfSong from "./UserProfSong";
import UserContext from "./UserContext";


const UserPosts = (props) => {
  const { user } = useContext(UserContext);

  return(
    <div className="card container mt-4 p-4 w-75">
      <h1>User posts!</h1>
      { props.createdSongs.map(song => <UserProfSong song={song} user={user}
        key={song.id} setLoading={props.setLoading} setPosts={props.setCreated} />) }
    </div>
  )
};

export default UserPosts;