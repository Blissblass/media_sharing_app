import React, { useState } from 'react';
import CreateButton from './CreateButton';
import PopupBox from './PopupBox';

const NewSongPopup = () => {
  const [show, setShow] = useState(false);

  const handleSet = () => {
    setShow(oldShow => !oldShow);
  };

  return(
    <div>
      {show ? <PopupBox handleSet={handleSet} show={show} /> : null}
      <CreateButton handleSet={handleSet} />
    </div>
  )
};

export default NewSongPopup;