import React from "react";
import Steve from "../../img/steve.jpg";
import Roy from "../../img/roy.jpg";
import { Link } from "react-router-dom";

export const Mid = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={Steve} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a]">CEO</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manger Boy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque sit accusantium odio voluptate quia in. Iusto sapiente
              nobis, veniam voluptatem corrupti nemo excepturi numquam, fugit
              quisquam soluta consectetur laudantium facere.
            </p>
            <button className="bg-[#00df9a] rounded-md font-medium my-6 mx-auto p-3 text-bold">
              <Link to={"/developers/stevelee"}>Read more about Esteban</Link>
            </button>
          </div>
          <img className="w-[500px] mx-auto my-4" src={Roy} alt="" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a]">This is Roy</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Vice-Manger Boy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque sit accusantium odio voluptate quia in. Iusto sapiente
              nobis, veniam voluptatem corrupti nemo excepturi numquam, fugit
              quisquam soluta consectetur laudantium facere.
            </p>
            <button className="bg-[#00df9a] rounded-md font-medium my-6 mx-auto p-3 text-bold">
              <Link to={"/developers/roycehong"}>Read more about Roy</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
