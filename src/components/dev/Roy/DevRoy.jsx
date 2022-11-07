import React from "react";
import python from "../../../img/python.png";
import js from "../../../img/javascript.png";
import react from "../../../img/react.png";
import mongo from "../../../img/mongodb.png";
import express from "../../../img/express.png";
import nodejs from "../../../img/nodejs.png";
import tailwind from "../../../img/tailwindcss.png";

const DevRoy = () => {
  return (
    <>
      <div className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white">
        <div className="p-40">
          <p className="font-bold text-7xl text-center">
            Hello World My name is Royce Hong
          </p>
          <div className="text-center text-2xl my-3">
            <span className="mx-10">CODE</span>
            <span className="mx-10"> |</span>
            <span className="mx-10"> KOREAN </span>
            <span className="mx-10">|</span>
            <span className="mx-10"> CAT </span>
            <span className="mx-10">| </span>
            <span className="mx-10">FOOD</span>
          </div>
          <div className="flex justify-center bg-blue-500">
            <img className="hover:scale-110 mx-10" alt="" src={python} />
            <img className="hover:scale-110 mx-10" alt="" src={js} />
            <img className="hover:scale-110 mx-10" alt="" src={react} />
            <img className="hover:scale-110 mx-10" alt="" src={mongo} />
            <img className="hover:scale-110 mx-10" alt="" src={express} />
            <img className="hover:scale-110 mx-10" alt="" src={nodejs} />
            <img className="hover:scale-110 mx-10" alt="" src={tailwind} />
          </div>
          <span className="text-blue-500 text-4xl">Let's Go</span>
        </div>
      </div>
    </>
  );
};

export default DevRoy;
