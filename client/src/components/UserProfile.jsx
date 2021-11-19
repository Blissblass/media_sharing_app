import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const UserProfile = (props) => {
  const { id } = useParams()
  const [profUser, setProfUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/fetch_user/${id}`)
    .then(data => data.json())
    .then(data => {
      setProfUser(data)
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
          <h1 className="mb-2">You're on {profUser.username}'s Profile!</h1>
        </div>  
      </div>
  )
};

export default UserProfile;