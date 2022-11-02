import React from "react";
import Steve from "../../img/steve.jpg";
import Roy from "../../img/roy.jpg";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const Developers = () => {
  return (
    <>
      <div className="text-center items-center justify-center">
        <h1 className="m-5 text-5xl">
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
            strings={["Select A Developer:"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </h1>
        <div className="grid grid-cols-2 p-10 scale-75">
          <div className="hover:text-black hover:scale-150 opacity-10 hover:opacity-90 m-10">
            <Link to={"/developers/stevelee"}>
              <img src={Steve} alt="/" />
              <p className="text-center">
                <Typed
                  className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
                  strings={["Steve Lee"]}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </p>
            </Link>
          </div>
          <div className=" hover:text-black hover:scale-150 opacity-10 hover:opacity-90 m-10">
            <Link to={"/developers/roycehong"}>
              <img src={Roy} alt="/" />
              <p className=" text-center">
                <Typed
                  className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
                  strings={["Roy Hong"]}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;
