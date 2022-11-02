import React from "react";
import BottomMid from "./BottomMid";
import Hero from "./Hero";
import { Mid } from "./Mid";
import Dropdown from "../../components/dropdownMenu/Dropdown";

const Home = () => {
  return (
    <>
      <Hero />
      <Mid />
      <BottomMid />
      <Dropdown />
    </>
  );
};

export default Home;
