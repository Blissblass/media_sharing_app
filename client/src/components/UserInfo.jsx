import React from "react";
import UserLikes from "./UserLikes";
import UserPosts from "./UserPosts";

const UserInfo = (props) => {

  return(
    <div>
      <UserPosts createdSongs={props.createdSongs} setCreated={props.setProfSongs} setLoading={props.setLoading} />
      <UserLikes likedSongs={props.likedSongs} setLiked={props.setProfLikes} setLoading={props.setLoading} />
    </div>
  )
};

export default UserInfo;