import React, { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import UserInfo from './UserInfo';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import UserContext from "./UserContext";

const UserProfile = (props) => {
  const { id } = useParams()
  const { user } = useContext(UserContext);

  const [profUser, setProfUser] = useState({});
  const [profUserFollows, setUserFollows] = useState(0);
  const [profLikes, setProfLikes] = useState([]);
  const [profSongs, setProfSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    fetch(`/api/fetch_user/${id}`)
    .then(data => data.json())
    .then(data => {
      setProfUser(data.user);
      setProfLikes(data.likes);
      setProfSongs(data.songs);
      setUserFollows(data.follows);
      setLoading(false);
    });

    fetch('/api/already_following', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({followee_id: id, follower_id: user})
    })
      .then(data => data.json())
      .then(data => setFollowing(data.status));
  }, [id, user]);

  const handleFollow = () => {
    
  };

  return(
      loading ? 

        <Spinner className="mx-auto mt-5" style={{display: loading ? "block" : "none", width: 100, height: 100}} 
          animation="grow" variant="primary"  />
      :

      <div>
        <div className="card container mt-2 p-4">
          <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
            <div>
              {following ? 
                <BsHeartFill style={{fontSize: 60, cursor:"pointer"}} className="mt-2" />
              :
                <BsHeart style={{fontSize: 60, cursor:"pointer"}} className="mt-2" />
              }
              <h6 className="m-0 ms-4">{profUserFollows}</h6>
            </div>
            <div className="ms-3 me-5">
              <h1 className="mb-2">{profUser.username}'s profile!</h1>
              <small className="opacity-75 ms-5">Joined {new Date(profUser.created_at).toDateString()}</small>
            </div>
          </div>
        </div>  
        <UserInfo likedSongs={profLikes} setLiked={setProfLikes} createdSongs={profSongs} setCreated={setProfSongs} 
          setLoading={setLoading}  />
      </div>
  )
};

export default UserProfile;