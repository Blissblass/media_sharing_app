import React, { useContext } from "react";
import UserProfSong from "./UserProfSong";
import UserContext from "./UserContext";


const UserLikes = (props) => {
  const { user } = useContext(UserContext);

  return(
    <div className="card container mt-4 p-4 w-75">
      <h1>User likes!</h1>
      { props.likedSongs.map(song => <UserProfSong song={song} user={user}
         key={song.id} setLoading={props.setLoading} setPosts={props.setProfLikes} />) }
    </div>
  )
};

export default UserLikes;