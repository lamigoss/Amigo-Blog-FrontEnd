import React from "react";
import Roy from "../../../img/roy.jpg";
import Typed from "react-typed";

const HeroRoy = () => {
  return (
    <>
      {/* <Leftbar /> */}
      <div className="h-screen w-full bg-gradient-to-bl from-black via-whitesmoke to-white">
        <div className="max-w-scree-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              <Typed
                className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
                strings={["Hello World, This is Roy's Developer's page."]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </h2>
            <p className="text-black py-4 max-w-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              illum, reiciendis ratione temporibus minima eaque officia optio,
              perspiciatis inventore nam odit enim architecto! Eius animi
              veritatis tenetur, odio repellendus quas?
            </p>
          </div>
          <div className="">
            <img
              src={Roy}
              className="rounded-2xl mx-auto md:w-6/12 w-8/12"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroRoy;
