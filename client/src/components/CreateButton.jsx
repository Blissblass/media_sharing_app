import React from "react";
import { Button } from "react-bootstrap";

const CreateButton = () => {

  return(
    <Button type="button" variant="outline-primary" size="lg" style={{position: 'fixed', bottom: 55, right: 45}}>+ New</Button>
  )
};

export default CreateButton;