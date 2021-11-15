import React, { useState } from "react";
import Feed from "./Feed";
import CreateButton from './CreateButton';

const Home = (props) =>  {
  const [songs, setSongs] = useState([]);

  return (
    <div>
      <CreateButton />
      <Feed songs={songs} setSongs={setSongs} />
    </div>
  );
}

export default Home;
