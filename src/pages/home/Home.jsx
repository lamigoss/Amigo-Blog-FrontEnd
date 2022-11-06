import React from "react";
import BottomMid from "./BottomMid";
import Hero from "./Hero";
import Mid from "./Mid";

const Home = () => {
  return (
    <>
      <div className="grid">
        <div className="w-8/12 justify-self-center desktop:w-5/12 mobile:text-xs tablet:text-sm laptop:text-lg">
          <Hero />
          <Mid />
          <BottomMid />
        </div>
      </div>
    </>
  );
};

export default Home;
