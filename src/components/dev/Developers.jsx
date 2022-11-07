import React from "react";
import DevRoy from "./Roy/DevRoy";
import DevSteve from "./Steve/DevSteve";
import { Link } from "react-router-dom";

const Developers = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="underline md:text-2xl underline-offset-4 md:mx-40 mx-20 md:px-20 px-10 md:py-10 py-5">
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
