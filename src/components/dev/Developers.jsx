import React from "react";
import Steve from "../../img/steve.jpg";
import Roy from "../../img/roy.jpg";
import { Link } from "react-router-dom";

const Developers = () => {
  return (
    <>
      <div className="text-center">
        <h1 className=" underline mt-10 text-5xl underline-offset-4">
          Select A Developer
        </h1>
        <div className="grid grid-cols-2 scale-50 ">
          <div className="hover:text-black hover:scale-150 opacity-10 hover:opacity-90 m-10">
            <Link to={"/developers/stevelee"}>
              <img src={Steve} alt="/" />
              <p className="text-center">Steve Lee</p>
            </Link>
          </div>
          <div className=" hover:text-black hover:scale-150 opacity-10 hover:opacity-90 m-10">
            <Link to={"/developers/roycehong"}>
              <img src={Roy} alt="/" />
              <p className=" text-center">Roy Hong</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;
