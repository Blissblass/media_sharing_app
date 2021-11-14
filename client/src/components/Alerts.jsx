import React from "react";
import Notification from "./Notification";

const Alerts = (props) => {

  return(
    props.notifs ? props.notifs.map(notif => <Notification notif={notif} />) : null
  )
};

export default Alerts;