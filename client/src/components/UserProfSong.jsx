import React from "react";

const UserProfSong = (props) => {
  const song = props.song;

  return(
    <div>
      <audio controls>
        <source src={song.media} />
      </audio>
    </div>
  )
};

export default UserProfSong