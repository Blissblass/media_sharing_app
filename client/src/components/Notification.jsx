import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const Notification = (props) => {
  const [show, setShow] = useState(true);

  return(
    <Alert className="position-relative container opacity-75" show={show} variant="secondary" onClose={() => setShow(false) } dismissible>
      <Alert.Heading>{`${props.head} ${props.notif}`}</Alert.Heading>
    </Alert>
  )
};

export default Notification;