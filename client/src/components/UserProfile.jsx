import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import UserInfo from './UserInfo';


const UserProfile = (props) => {
  const { id } = useParams()
  const [profUser, setProfUser] = useState({});
  const [profLikes, setProfLikes] = useState([]);
  const [profSongs, setProfSongs] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/fetch_user/${id}`)
    .then(data => data.json())
    .then(data => {
      setProfUser(data.user)
      setProfLikes(data.likes)
      setProfSongs(data.songs)
      setLoading(false);
    });
  }, [id]);

  return(
      loading ? 

        <Spinner className="mx-auto mt-5" style={{display: loading ? "block" : "none", width: 100, height: 100}} 
          animation="grow" variant="primary"  />
      :

      <div>
        <div className="text-center card container mt-2 p-4">
          <h1 className="mb-2">{profUser.username}'s profile!</h1>
          <small className="opacity-75">Joined {new Date(profUser.created_at).toDateString()}</small>
        </div>  
        <UserInfo likedSongs={profLikes} setLiked={setProfLikes} createdSongs={profSongs} setCreated={setProfSongs} 
          setLoading={setLoading}  />
      </div>
  )
};

export default UserProfile;