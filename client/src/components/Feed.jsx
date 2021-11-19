import React, { useLayoutEffect } from "react";
import Song from './Song';
import { Stack, Spinner } from 'react-bootstrap';

const Feed = (props) => {
  
  useLayoutEffect(() => {
    const fetchData = async () => { 
      fetch('/api/home_feed')
        .then(data => data.json())
        .then(data => {
          props.setSongs(data);
        });
    }


    fetchData();
  }, []);

  return(
    <div className="mt-3">
      <Spinner className="mx-auto mt-5" style={{display: props.loading ? "block" : "none", width: 100, height: 100}} 
        animation="grow" variant="primary"  />
      <Stack className="mb-4" style={{visibility: props.loading ? "hidden" : "visible"}} gap={4}>
        { props.songs.length > 0 ? 

          props.songs.map(song => <Song key={song.id} song={song} setLoading={props.setLoading} setPosts={props.setSongs} />) 
        : 
          <h1 style={{display: props.loading ? "none" : "block"}} className="text-center text-white mt-4">No songs available.</h1> 
        }
      </Stack>
    </div>
  )
};

export default Feed;