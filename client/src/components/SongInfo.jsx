import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaRegThumbsUp} from 'react-icons/fa';

const SongInfo = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [liked, setLiked] = useState(false);
  const [likeData, setLikeData] = useState(null);
  const { setLoading, song, currUser } = props;

  useEffect(() => {
    const fetchLiked = async () => { 
        fetch('/api/already_liked', {
        method: 'POST',      
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }),
        body: JSON.stringify({id: song.id, liker_id: currUser.id})
      })      
      .then(data => data.json())
      .then(data => {
        if(data.length > 0) {
          setLiked(true);
          setLikeData(data[0]);
        }
        setLoading(false);
      });
    }

    fetchLiked()
  }, [setLoading, currUser.id, song.id]);
  
  const handleLike = () => {
    const data = {
      like: {
        type: 'Song',
        liker_id: props.currUser.id,
        id: props.song.id
      }
    }

    if(liked) {

      fetch(`/likes/${likeData.id}`, {
        method: 'DELETE'
      })
      setLiked(false);
      setLikes(old => old -= 1);

    } else {
      fetch('/likes', {
        method: 'POST',      
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }),
        body: JSON.stringify(data)
      })
      .then(data => data.json())
      .then(data => setLikeData(data));
      setLiked(true);
      setLikes(old => old += 1);
    }
  };

  return(
    <div className="px-2" style={{display: 'flex', alignItems: 'center'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
        <h2 className="mb-1 me-2" >{likes}</h2>
        <FaRegThumbsUp className="mb-2" 
          style={{fontSize: 40, cursor: "pointer", color: liked ? "#087cfc" : "#302c34", marginRight: 60}} 
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