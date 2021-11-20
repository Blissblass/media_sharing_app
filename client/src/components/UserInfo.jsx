import React from "react";
import UserLikes from "./UserLikes";
import UserPosts from "./UserPosts";

const UserInfo = () => {

  return(
    <div>
      <UserLikes />
      <UserPosts />
    </div>
  )
};

export default UserInfo;