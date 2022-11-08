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
      <div className="w-auto bg-blue-500 hover:bg-white hover:text-blue-500 text-white">
        <div className="md:p-40 p-10">
          <p className="font-bold md:text-8xl text-4xl text-center">
            Royce Hong
          </p>
          <div className="text-center md:text-3xl sm:text-xl my-3">
            <span className="md:mx-10 xs:mx-1">CODE</span>
            <span className="md:mx-10 xs:mx-1"> |</span>
            <span className="md:mx-10 xs:mx-1"> KOREAN </span>
            <span className="md:mx-10 xs:mx-1">|</span>
            <span className="md:mx-10 xs:mx-1"> CAT </span>
            <span className="md:mx-10 xs:mx-1">| </span>
            <span className="md:mx-10 xs:mx-1">FOOD</span>
          </div>
          <div className="flex justify-center bg-blue-500 w-auto rounded-lg">
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

export default DevRoy;
