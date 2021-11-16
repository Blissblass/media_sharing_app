import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FiThumbsUp } from 'react-icons/fi';

const SongInfo = (props) => {
  const [likes, setLikes] = useState(props.likes);
  
  const handleLike = () => {
    setLikes(old => old += 1);
  };

  return(
    <div className="px-2" style={{display: 'flex', alignItems: 'center'}}>
      <div style={{display:'flex', alignItems:'center'}}>
        <h2 className="mb-1 me-2" >{likes}</h2>
        <FiThumbsUp className="mb-2 me-5" style={{fontSize: 40, cursor: "pointer"}} onClick={handleLike} />
      </div>
      <div>
        <h2>{props.title}</h2>
        <h4><Link className="text-secondary text-decoration-none" to={`/user/${props.user.id}`}>{props.user.username}</Link></h4>
      </div>
    </div>
  )
};

export default SongInfo;