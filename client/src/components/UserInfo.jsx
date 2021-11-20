import React from "react";
import UserLikes from "./UserLikes";
import UserPosts from "./UserPosts";

const UserInfo = (props) => {

  return(
    <div>
      <UserLikes likedSongs={props.likedSongs} />
      <UserPosts createdSongs={props.createdSongs} />
    </div>
  )
};

export default UserInfo;