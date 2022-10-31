import React from "react";
import Steve from "../../img/steve.jpg";
import Roy from "../../img/roy.jpg";

const Developers = () => {
  return (
    <>
      <div className="text-center items-center justify-center">
        Dev Page
        <div className="grid grid-cols-2 p-10">
          <div className="hover:text-white hover:scale-150 opacity-10 hover:opacity-90 m-10">
            <img src={Steve} alt="/" />
            <p className="text-center">Steve</p>
          </div>
          <div className="hover:text-white hover:scale-150 opacity-10 hover:opacity-90 m-10">
            <img src={Roy} alt="/" />
            <p className="text-center">Roy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;
