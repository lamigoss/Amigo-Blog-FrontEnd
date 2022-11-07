import React from "react";
import Steve from "../../../img/steve.jpg";

const HeroSteve = () => {
  return (
    <>
      <div className="w-full h-[full] mb-40">
        <div className="flex flex-col">
          <div className="flex scale-75 justify-center">
            <img
              src={Steve}
              className="rounded-2xl md:w-6/12 w-8/12 mb-10"
              alt=""
            />
          </div>
          <div className="text-center mx-20">
            <div className="border-b-[.5px] border-neutral-400">
              <h2 className="text-4xl sm:text-7xl font-bold text-blue-800 mb-3">
                Hi I'm Seung Ki Lee!
              </h2>
            </div>
            <p className="text-gray-600 text-center md:my-10 md:mx-20 my-5 mx-10">
              When I'm offline and away from the screen, I enjoy getting myself
              into fierce ping pong rallies with my friends or other players. I
              like to stay up to-date with the latest tech stacks and improve
              myself as a developer. You can see what I'm up to with the latest
              blog posts I post, or feel free to check out my LinkedIn and
              Github!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSteve;
