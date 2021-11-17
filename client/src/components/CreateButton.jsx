import React from "react";
import { Button } from "react-bootstrap";

const CreateButton = (props) => {

  return(
    <Button 
      type="button" variant="outline-primary" size="lg" 
      style={{position: 'fixed', bottom: 40, right: 35}}
      onClick={props.handleSet}
    >
      + New
    </Button>
  )
};

export default CreateButton;