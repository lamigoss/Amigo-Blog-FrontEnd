import React from "react";
import Roy from "../../../img/roy.jpg";

const HeroRoy = () => {
  return (
    <>
      <div className="w-full bg-white h-full ">
        <div className="flex flex-col">
          <div className="flex scale-75 justify-center">
            <img
              src={Roy}
              className="rounded-2xl md:w-6/12 w-8/12 mb-10"
              alt=""
            />
          </div>
          <div className="text-center">
            <div className="border-b-4 border-neutral-400">
              <h2 className="text-4xl md:text-7xl font-bold text-blue-500 mb-3">
                Hi! I'm Roy!!
              </h2>
            </div>
            <p className="text-gray-600 text-center md:my-10 md:mx-20 my-5 mx-10 md:text-lg text-sm">
              Hello World! I am Royce! I am very excited to introduce this blog
              website to everyone. Right now, this web site may seem very basic,
              just like me and my partner, however it will have more features as
              we progress as developers. I hope this website can be a bridge
              that can connect people in professonal manner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroRoy;
