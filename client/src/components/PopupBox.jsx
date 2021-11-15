import React from "react";
import { Modal, Button } from "react-bootstrap";

const PopupBox = (props) => {

  const handleClose = () => {
    props.handleSet(old => !old);
  }; 

  return(
    <Modal centered show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload a Song</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <label for="songTitle" /> Song Title
        <input id="songTitle" type="text" className="form-control" />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>

  </Modal>
  );
};

export default PopupBox;