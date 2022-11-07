import React from "react";
import python from "../../../img/pythonBlue.png";
import js from "../../../img/jsBlue.png";
import react from "../../../img/reactBlue.png";
import mongo from "../../../img/mongodbBlue.png";
import express from "../../../img/expressBlue.png";
import nodejs from "../../../img/nodejsBlue.png";
import tailwind from "../../../img/tailwindBlue.png";

const DevSteve = () => {
  return (
    <>
      <div className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white w-auto">
        <div className="md:p-40 p-10">
          <p className="font-bold md:text-8xl text-4xl text-center">
            Hello World My name is Steve Lee
          </p>

          <div className="text-center md:text-3xl sm:text-xl my-3">
            <span className="md:mx-10 xs:mx-1">CODE</span>
            <span className="md:mx-10 xs:mx-1"> |</span>
            <span className="md:mx-10 xs:mx-1"> UCLA </span>
            <span className="md:mx-10 xs:mx-1">|</span>
            <span className="md:mx-10 xs:mx-1"> TACO </span>
            <span className="md:mx-10 xs:mx-1">| </span>
            <span className="md:mx-10 xs:mx-1">FASHION</span>
          </div>
          <div className="flex justify-center bg-white w-auto rounded-lg">
            <img
              className="hover:scale-110 md:mx-10 sm:mx-1 md:scale-100 scale-50"
              alt=""
              src={python}
            />
            <img
              className="hover:scale-110 md:mx-10 sm:mx-1 md:scale-100 scale-50"
              alt=""
              src={js}
            />
            <img
              className="hover:scale-110 md:mx-10 sm:mx-1 md:scale-100 scale-50"
              alt=""
              src={react}
            />
            <img
              className="hover:scale-110 md:mx-10 sm:mx-1 md:scale-100 scale-50"
              alt=""
              src={mongo}
            />
            <img
              className="hover:scale-110 md:mx-10 sm:mx-1 md:scale-100 scale-50"
              alt=""
              src={express}
            />
            <img
              className="hover:scale-110 md:mx-10 sm:mx-1 md:scale-100 scale-50"
              alt=""
              src={nodejs}
            />
            <img
              className="hover:scale-110 md:mx-10 sm:mx-1 md:scale-100 scale-50"
              alt=""
              src={tailwind}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DevSteve;

<>
  <div className="bg-indigo-500 text-white"></div>
</>;
