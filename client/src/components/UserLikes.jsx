import React, { useContext } from "react";
import UserProfSong from "./UserProfSong";
import Song from './Song';
import UserContext from "./UserContext";


const UserLikes = (props) => {
  const { user } = useContext(UserContext);

  return(
    <div className="card container mt-4 p-4 w-75">
      <h1>User likes!</h1>
      { props.likedSongs.map(song => <Song song={song} user={user} setLoading={props.setLoading} setPosts={props.setLiked} />) }
    </div>
  )
};

export default UserLikes;