import React from "react";

const Notification = (props) => {

  return(
    <div class="alert alert-secondary" role="alert">
      {props.head + props.notif}
    </div>
  )
};

export default Notification;