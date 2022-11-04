import React from "react";
import Steve from "../../img/steve.jpg";
import DevRoy from "./Roy/DevRoy";

const Developers = () => {
  return (
    <>
      <div className="text-center">
        <h1 className=" underline mt-10 text-5xl underline-offset-4 mx-40 px-20 my-20">
          Welcome to the Developers' page
        </h1>
        <div className="grid grid-cols-2 w-100 h-screen">
          <DevRoy />
        </div>
      </div>
    </>
  );
};

export default Developers;
