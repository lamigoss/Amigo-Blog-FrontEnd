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
      <div className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white">
        <div className="p-40">
          <p className="font-bold text-7xl text-center">
            Hello World My name is Steve Lee
          </p>

          <div className="text-center text-2xl my-3">
            <span className="hover:scale-110 mx-10">CODE</span>
            <span className="hover:scale-110 mx-10"> |</span>
            <span className="hover:scale-110 mx-10"> UCLA </span>
            <span className="hover:scale-110 mx-10">|</span>
            <span className="hover:scale-110 mx-10"> TACO </span>
            <span className="hover:scale-110 mx-10">| </span>
            <span className="hover:scale-110 mx-10">FASHION</span>
          </div>
          <div className="flex justify-center bg-white">
            <img className="hover:scale-110 mx-10" alt="" src={python} />
            <img className="hover:scale-110 mx-10" alt="" src={js} />
            <img className="hover:scale-110 mx-10" alt="" src={react} />
            <img className="hover:scale-110 mx-10" alt="" src={mongo} />
            <img className="hover:scale-110 mx-10" alt="" src={express} />
            <img className="hover:scale-110 mx-10" alt="" src={nodejs} />
            <img className="hover:scale-110 mx-10" alt="" src={tailwind} />
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
