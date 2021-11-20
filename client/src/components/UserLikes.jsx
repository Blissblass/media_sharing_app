import React, { useEffect } from "react";
import UserProfSong from "./UserProfSong";

const UserLikes = (props) => {

  useEffect(() => {
    console.log(props.likedSongs);
  }, [props.likedSongs]);

  return(
    <div className="card container mt-4 p-4 w-75">
      <h1>User likes!</h1>
      { props.likedSongs.map(song => <UserProfSong song={song} />) }
    </div>
  )
};

export default UserLikes;