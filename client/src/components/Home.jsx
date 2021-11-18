import React, { useState } from "react";
import Feed from "./Feed";
import NewSongPopup from "./NewSongPopup";
import SearchBar from './SearchBar';

const Home = (props) =>  {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <NewSongPopup setSongs={setSongs} />
      <SearchBar loading={loading} setSongs={setSongs} />
      <Feed loading={loading} setLoading={setLoading} songs={songs} setSongs={setSongs} />
    </div>
  );
}

export default Home;
