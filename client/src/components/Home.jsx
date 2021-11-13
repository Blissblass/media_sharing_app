import React, { useEffect } from "react";

const Home = (props) =>  {

  useEffect(() => {
    fetch()
  }, []);

  return (
    <div>
      <h1 className="text-white">Home!</h1>
    </div>
  );
}

export default Home;
