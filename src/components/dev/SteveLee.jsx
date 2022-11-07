import React from "react";
import { useParams } from "react-router-dom";
import DevSteve from "./Steve/DevSteve";
import HeroSteve from "./Steve/HeroSteve";
import LinkTab from "./devComponents/LinkTab";

const SteveLee = () => {
  const { stevelee } = useParams();

  return (
    <>
      <div className="grid grid-row-3 mt-1 text-center">
        <DevSteve />
        <LinkTab developer={stevelee} />
        <HeroSteve />
      </div>
    </>
  );
};

export default SteveLee;
