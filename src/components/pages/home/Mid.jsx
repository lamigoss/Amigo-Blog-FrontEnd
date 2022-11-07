import React from "react";
import Steve from "../../../img/steve.jpg";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const Mid = () => {
  return (
    <div className="grid w-full mb-32">
      <img className="w-[500px] mx-auto my-4 rounded-md" src={Steve} alt="/" />
      <div className="flex flex-col justify-center">
        <p className="text-indigo-500">CEO</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
            strings={["Seung Ki Lee"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </h1>
        <p>
          I'm an eager software developer passionate in solving complex problems through creative solutions. 
          Driven by user experiences to utilize in designing efficient web applications.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-700 rounded-md  font-medium my-6 mx-auto p-3 text-bold text-white">
          <Link to={"/developers/stevelee"}>Read more about Seung Ki Lee</Link>
        </button>
      </div>
    </div>
  );
};

export default Mid;
