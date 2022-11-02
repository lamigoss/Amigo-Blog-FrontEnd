import React from "react";
import BottomMid from "./BottomMid";
import Hero from "./Hero";
import { Mid } from "./Mid";
import Dropdown from "../../components/dropdownMenu/Dropdown";

const Home = () => {
  return (
    <>
      <div className="mobile:mr-20 mobile:ml-20">
        <Hero />
        <Mid />
        <BottomMid />
        <Dropdown />
      </div>
    </>
  );
};

export default Home;
