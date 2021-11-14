import React from "react";
import Notification from "./Notification";

const Alerts = (props) => {

  return(
    props.notifs ? 
      Object.keys(props.notifs).forEach(key => {
        return <Notification head={key} notif={props.notifs[key][0]} />
      })
    : 
      null
  )
};

export default Alerts;