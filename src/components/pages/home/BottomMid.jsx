import React from "react";
import { Link } from "react-router-dom";
import Roy from "../../../img/roy.jpg";
import Typed from "react-typed";

const BottomMid = () => {
  return (
    <div className="bg-gray-100 m-5 mb-32">
      <img className="w-[500px] mx-auto my-4 rounded-md" src={Roy} alt="" />
      <div className="flex flex-col justify-center">
        <p className="text-indigo-500">Frontend Software Developer</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
            strings={["Roy Hong"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />{" "}
        </h1>
        <p>
          Hello World! My name is Roy. I am a passionate software developer who
          constantly seeks opportunities to learn about new specialties in
          programming. My dream has always been to utilize my skills to improve
          people's lives, regardless of their status.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-700 rounded-md  font-medium my-6 mx-auto p-3 text-bold text-white">
          <Link to={"/developers/roycehong"}>Read more about Roy</Link>
        </button>
      </div>
    </div>
  );
};

export default BottomMid;
