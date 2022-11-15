import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-black max-w-[800px] mt-[10px] md:h-screen sm:h-[1000px] h-[500px] mx-auto text-center flex flex-col justify-center">
      <p className=" text-indigo-700 font-bold p-2">
        WATCH TWO AMIGOS GROWING AS SOFTWARE DEVELOPERS
      </p>
      <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold md:py-6 ">
        In This Blog
      </h1>
      <div className="flex justify-center items-center">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          You're looking at our
        </p>
        <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
          strings={["Passions", "Frustrations", "Visions"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <p className="md:text-2xl text-xl font-bold text-gray-500">
        Monitor our improvements in blog posts.
      </p>
      <Link to="/posts">
        <button className="bg-indigo-500 hover:bg-indigo-700 rounded-md font-medium text-white my-6 mx-auto p-3 text-bold">
          Read Blog Posts
        </button>
      </Link>
    </div>
  );
};

export default Hero;
