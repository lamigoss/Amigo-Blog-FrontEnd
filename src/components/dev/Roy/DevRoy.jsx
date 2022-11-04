import React from "react";
import Roy from "../../../img/roy.jpg";
import { Link } from "react-router-dom";

const DevRoy = () => {
  return (
    <>
      <div className="bg-blue-600 ">
        <div className="text-white h-100 w-100 text-8xl text-bold absolute ">
          <div className="flex mx-80">
            <p className="text-yellow-500">R</p>
            <p>oyal</p>
          </div>
          <div className="flex mx-60">
            <p>h</p> <p className="text-yellow-500">O</p> <p>nest</p>
          </div>

          <div className="flex mx-8">
            <p>prett</p>
            <p className="text-yellow-500">Y</p>
          </div>
          <div className="flex mx-96">
            <p>s</p>
            <p className="text-yellow-500">H</p>
            <p>y</p>
          </div>
          <div className="flex mx-20">
            <p>hardw</p>
            <p className="text-yellow-500">O</p>
            <p>rking</p>
          </div>
          <div className="flex mx-24">
            <p>i</p>
            <p className="text-yellow-500">N</p>
            <p>dividual</p>
          </div>
          <div className="flex">
            <p className="text-yellow-500">G</p>
            <p>amer</p>
          </div>
        </div>

        <div className="rounded-full scale-50">
          <Link to={"/developers/roycehong"}>
            <img className="rounded-full scale-50" src={Roy} alt="/" />
            <p className=" text-center">Roy Hong</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DevRoy;
