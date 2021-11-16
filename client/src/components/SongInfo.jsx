import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaRegThumbsUp} from 'react-icons/fa';

const SongInfo = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [liked, setLiked] = useState(false);
  const [likeData, setLikeData] = useState({poopo: 'haha'});

  useEffect(() => {
    fetch('/api/already_liked', {
      method: 'POST',      
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({id: props.song.id, liker_id: props.user.id})
    })
      .then(data => data.json())
      .then(data => {
        if(data.length > 0) {
          setLiked(true);
          setLikeData(data);
          console.log(likeData);
        }
      });
  }, []);
  
  const handleLike = () => {
    const data = {
      like: {
        type: 'Song',
        liker_id: props.user.id,
        id: props.song.id
      }
    }

    if(liked) {

      fetch()

    } else {
    fetch('/likes', {
      method: 'POST',      
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(data)
    })
      .then(data => {
        setLiked(true);
        setLikes(old => old += 1)
      })
    }
  };

  return(
    <div className="px-2" style={{display: 'flex', alignItems: 'center'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
        <h2 className="mb-1 me-2" >{likes}</h2>
        <FaRegThumbsUp className="mb-2 me-5" style={{fontSize: 40, cursor: "pointer", color: liked ? "#087cfc" : "#302c34"}} 
          onClick={handleLike} />
      </div>
      <div>
        <h2>{props.title}</h2>
        <h4><Link className="text-secondary text-decoration-none" to={`/user/${props.user.id}`}>{props.user.username}</Link></h4>
      </div>
    </div>
  )
};

export default SongInfo;