import React, { useState } from 'react';
import CreateButton from './CreateButton';
import PopupBox from './PopupBox';

const NewSongPopup = (props) => {
  const [show, setShow] = useState(false);

  const handleSet = () => {
    setShow(oldShow => !oldShow);
  };

  return(
    <div>
      {show ? <PopupBox setSongs={props.setSongs} handleSet={handleSet} show={show} /> : null}
      <CreateButton  handleSet={handleSet} />
    </div>
  )
};

export default NewSongPopup;