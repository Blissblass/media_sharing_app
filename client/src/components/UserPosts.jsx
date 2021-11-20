import React from "react";
import UserProfSong from "./UserProfSong";

const UserPosts = (props) => {

  return(
    <div className="card container mt-4 p-4 w-75">
      <h1>User posts!</h1>
      { props.createdSongs.map(song => <UserProfSong song={song} />) }
    </div>
  )
};

export default UserPosts;