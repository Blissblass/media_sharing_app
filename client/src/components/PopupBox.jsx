import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import UserContext from "./UserContext";

const PopupBox = (props) => {
  const [file, setFile] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { user } = useContext(UserContext);

  const handleClose = () => {
    props.handleSet(old => !old);
  }; 

  const resetFile = () => {
    setFile(null);
    setDisabled(false);
  };

  const handleFile = (e) => {
    const inputFile = e.currentTarget.files[0];
    if(!inputFile) return;

    const inputType = inputFile.type.split("/")[0];
    if(inputType === 'audio') {
      setFile(inputFile);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = (e) =>  {
    if (!file || !user) return;
    e.preventDefault();
    setUploading(true);

    const title = e.currentTarget[0].value;
    const mediaLink = URL.createObjectURL(file);

    const formData = new FormData();
    formData.append('song[media]', file);
    formData.append('song[user_id]', user.id );
    formData.append('song[title]', title);

    fetch("https://sound-io-backend.herokuapp.com/songs", {
      method: 'POST',
      body: formData 
    })
      .then(data => data.json())
      .then(songData => {
        songData.user = user;
        songData.likes = 0;
        songData.media = mediaLink;
        props.setSongs(oldSongs => [songData, ...oldSongs]);
        props.handleSet();
      });
  }

  return(
    <Modal centered show={props.show} onHide={handleClose}>
      <Modal.Header className="p-4" closeButton>
        <Modal.Title>Upload a Song</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form id="songForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="songTitle">Song Title:</label>
            <input id="songTitle" type="text" className="form-control form-control-lg mt-1" required   />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="songMedia">Song File:</label>
            <input id="songMedia" type="file" className="form-control form-control-lg mt-1" accept="audio/*" 
              onChange={handleFile} required disabled={disabled} />
            <small className="mt-1" style={{display: disabled ? "block" : "none", textDecoration: "underline", cursor: "pointer"}}
              onClick={resetFile}>
                Please select an audio file.
            </small>  
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer >
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {
          uploading ? 
            <Button type="submit" variant="primary" disabled>
              Uploading...  
            </Button>
          :
            <Button type="submit" variant="primary" form="songForm" >
              Upload
            </Button>
        }
      </Modal.Footer>

  </Modal>
  );
};

export default PopupBox;