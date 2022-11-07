import React from "react";
import DevRoy from "./Roy/DevRoy";
import DevSteve from "./Steve/DevSteve";
import { Link } from "react-router-dom";

const Developers = () => {
  return (
    <>
      <div className="text-center">
        <h1 className=" underline mt-10 text-2xl underline-offset-4 mx-40 px-20 my-10">
          Introducing two amigos who created this blog
        </h1>
        <div className="grid grid-row-2 text-white ">
          <Link to="/developers/roycehong">
            <DevRoy />
          </Link>
          <Link to="/developers/stevelee">
            <DevSteve />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Developers;
