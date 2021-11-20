import React from "react";
import UserLikes from "./UserLikes";
import UserPosts from "./UserPosts";

const UserInfo = () => {

  return(
    <div>
      <h1>User Info!</h1>
      <UserLikes />
      <UserPosts />
    </div>
  )
};

export default UserInfo;