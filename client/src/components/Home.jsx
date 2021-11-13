import React, { useEffect } from "react";

const Home = (props) =>  {

  useEffect(() => {
    fetch('/api/home_feed')
      .then(data => data.json)
      .then(data => console.log(data));
  }, []);

  return (
    <div>
      <h1 className="text-white">Home!</h1>
    </div>
  );
}

export default Home;
