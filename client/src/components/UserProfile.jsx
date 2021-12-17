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
  const [following, setFollowing] = useState({status: false, id: null});

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
      body: JSON.stringify({followee_id: id, follower_id: user.id})
    })
      .then(data => data.json())
      .then(data => setFollowing({status: data.status, id: data.id}));
  }, [id, user]);

  useEffect(() => {
    console.log(following);
  }, [following]);

  const handleFollow = () => {
    if(following.status) {
      fetch(`/likes/${following.id}`, {method: 'DELETE'})
        .then(data => {
          setFollowing({status: false, id: null});
          setUserFollows(old => old -= 1);
        });
    } else {
      const data = {
        like: {
          id,
          liker_id: user.id,
          type: 'User'
        }
      }

      fetch('/likes', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }),
        body: JSON.stringify(data)
      })
        .then(data => data.json())
        .then(data => {
          setFollowing({status: true, id: data.id})
          setUserFollows(old => old += 1);
        });
    }
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
              {following.status ? 
                <BsHeartFill style={{fontSize: 60, cursor:"pointer"}} className="mt-2" onClick={handleFollow} />
              :
                <BsHeart style={{fontSize: 60, cursor:"pointer"}} className="mt-2" onClick={handleFollow} />
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