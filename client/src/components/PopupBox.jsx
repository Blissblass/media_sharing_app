import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import UserContext from "./UserContext";


const PopupBox = (props) => {
  const [file, setFile] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const { user } = useContext(UserContext);

  const handleClose = () => {
    props.handleSet(old => !old);
  }; 

  const handleFile = (e) => {
    const inputFile = e.currentTarget.files[0];
    const inputType = inputFile.type.split("/")[0];
    if(inputType === 'audio') {
      setFile(inputFile);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = () =>  {
    const formData = new FormData();
    if(file) {
      formData.append('media', file);
    }
    formData.append('user_id', user.id );
  }

  return(
    <Modal centered show={props.show} onHide={handleClose}>
      <Modal.Header className="p-4" closeButton>
        <Modal.Title>Upload a Song</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form >
          <div className="form-group">
            <label htmlFor="songTitle">Song Title:</label>
            <input id="songTitle" type="text" className="form-control form-control-lg mt-1" required   />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="songMedia">Song File:</label>
            <input id="songMedia" type="file" className="form-control form-control-lg mt-1" accept="audio/*" 
              onChange={handleFile} required disabled={disabled} />
            <small style={{display: disabled ? "block" : "none"}}>Please select an audio file.</small>  
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer >
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Upload
        </Button>
      </Modal.Footer>

  </Modal>
  );
};

export default PopupBox;