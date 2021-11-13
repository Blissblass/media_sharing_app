import React, { useEffect, useState } from "react";
import Song from './Song';
import { Stack } from 'react-bootstrap';

const Feed = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('/api/home_feed')
      .then(data => data.json())
      .then(data => setSongs(data));
  }, []);

  return(
    <div className="mt-3">
      <Stack gap={4}>
        { songs.map(song => <Song key={song.id} song={song}/>) }
      </Stack>
    </div>
  )
};

export default Feed;