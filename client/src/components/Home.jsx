import React, { useState } from "react";
import Feed from "./Feed";
import NewSongPopup from "./NewSongPopup";

const Home = (props) =>  {
  const [songs, setSongs] = useState([]);

  return (
    <div>
      <NewSongPopup />
      <Feed songs={songs} setSongs={setSongs} />
    </div>
  );
}

export default Home;
