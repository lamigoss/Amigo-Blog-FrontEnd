import React from "react";
import DevSteve from "./Steve/DevSteve";
import HeroSteve from "./Steve/HeroSteve";
import MidSteve from "./Steve/MidSteve";

const SteveLee = () => {
  return (
    <>
      <div className="grid grid-row-3 mt-1 text-center">
        <DevSteve />
        <HeroSteve />
        <MidSteve />
      </div>
    </>
  );
};

export default SteveLee;
