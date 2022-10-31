import React from "react";
import Steve from "../../img/steve.jpg";
import Roy from "../../img/roy.jpg";
import { Link } from "react-router-dom";

const Developers = () => {
  return (
    <>
      <div className="text-center items-center justify-center">
        <p> Dev Page</p>
        <h1>Select the developer you want to know more about</h1>
        <div className="grid grid-cols-2 p-10 scale-75">
          <div className="hover:text-black hover:scale-150 opacity-10 hover:opacity-90 m-10">
            <Link to={"/developers/stevelee"}>
              {/* <Link to={`/posts/${post._id}`}> */}

              <img src={Steve} alt="/" />
              <p className="text-center">Steve</p>
            </Link>
          </div>
          <div className="hover:text-black hover:scale-150 opacity-10 hover:opacity-90 m-10">
            <Link to={"/developers/roycehong"}>
              <img src={Roy} alt="/" />
              <p className="text-center">Roy</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;
