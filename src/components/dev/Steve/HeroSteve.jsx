import React from "react";
import Steve from "../../../img/steve.jpg";

const HeroSteve = () => {
  return (
    <>
      <div className="w-full bg-white h-[full] mb-40">
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
<<<<<<< HEAD
            <p className="text-gray-600 text-center md:my-10 md:mx-20 my-5 mx-0.5 md:text-lg text-sm ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              et praesentium, cum omnis sit odit soluta obcaecati, placeat quas
              illum nesciunt facilis repudiandae velit molestias non adipisci
              eos laboriosam harum voluptatibus tempora quod pariatur.
              Reiciendis illo consequuntur in iusto, enim tempore odit aliquam
              non unde at possimus tenetur illum pariatur, magni, nobis qui
              vero! Earum iste eos officiis suscipit distinctio labore unde
              voluptatibus similique ratione, sequi accusantium consequuntur
              delectus iusto! Autem quaerat sed laudantium quos error debitis
              quia veniam at harum eaque! Totam ratione beatae est quas qui eos,
              numquam unde delectus rerum, dolor dicta voluptatum et ex debitis
              laboriosam?
=======
            <p className="text-gray-600 text-center md:my-10 md:mx-20 my-5 mx-10">
              Whenever I'm away from the screen, I enjoy getting myself into fierce ping pong rallies with my friends or other players.
>>>>>>> 26921ee (making small stying adjustments)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSteve;
