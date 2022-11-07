import React from "react";
import DevSteve from "./Steve/DevSteve";
import HeroSteve from "./Steve/HeroSteve";
import LinkTab from "./devComponents/LinkTab";
import { Link } from "react-router-dom";

const SteveLee = () => {
  const devName = "stevelee";

  return (
    <>
      <div className="grid grid-row-3 mt-1 text-center">
        <DevSteve />
        <LinkTab developer={devName} />
        <HeroSteve />
      </div>
    </>
  );
};

export default SteveLee;
