import React from "react";
import Roy from "../../../img/roy.jpg";

const HeroRoy = () => {
  return (
    <>
      <div className="w-full bg-white h-full">
        <div className="flex flex-col">
          <div className="flex scale-75 justify-center">
            <img
              src={Roy}
              className="rounded-2xl md:w-6/12 w-8/12 mb-10"
              alt=""
            />
          </div>
          <div className="md:px-48 px-30">
            <div className="border-b-4 border-neutral-400">
              <h2 className="text-4xl md:text-7xl font-bold text-blue-500 mb-3">
                Hi! I'm Roy!!
              </h2>
            </div>
            <p className="text-gray-600 md:my-10 md:mx-30 my-5 mx-10 md:text-lg text-sm first-letter:font-bold first-letter:text-4xl first-letter:float">
              Hello World! My name is Roy. I am a passionate software developer
              who constantly seeks opportunities to learn about new specialties
              in programming. My dream has always been to utilize my skills to
              improve people's lives, regardless of their status.
            </p>
            <p className="text-gray-600  md:my-10 md:mx-30 my-5 mx-10 md:text-lg text-sm">
              The city of angels and Dodgers is my neighborhood but originally
              born and raised in Suwon, Republic of Korea. Whenever I am not
              sitting in front of the monitor, I either play with my cat or
              drive off to the beautiful beaches in southern California to
              capture the slipping moments in my cameras. If you want to contact
              me, Don't hesitate to email me any time! We can grab cheeseburgers
              at In N Out; the best part is that
            </p>
            <p className="text-gray-600  md:my-10 md:mx-30 my-5 mx-10 md:text-2xl text-sm hover:animate-ping">
              <strong>THEY ARE ON ME!</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroRoy;
