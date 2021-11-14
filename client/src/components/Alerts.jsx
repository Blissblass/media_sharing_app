import React from "react";
import Notification from "./Notification";

const Alerts = (props) => {

  return(
    props.notifs ? 
      <div className="position-absolute top-50 ms-5">
        {Object.keys(props.notifs).map(key => (
          <Notification key={key} head={key} notif={props.notifs[key][0]} />
        ))}
      </div>
    : 
      null
  )
};

export default Alerts;