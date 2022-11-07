import React from "react";
import Roy from "../../../img/roy.jpg";

const HeroRoy = () => {
  return (
    <>
      <div className="w-full bg-white h-[2000px] ">
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
            <p className="text-gray-600 text-center md:my-10 md:mx-20 my-5 mx-10">
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
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroRoy;
