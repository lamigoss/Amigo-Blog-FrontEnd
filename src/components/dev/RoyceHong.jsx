import React from "react";
import DevRoy from "./Roy/DevRoy";
import HeroRoy from "./Roy/HeroRoy";
import LinkTab from "./devComponents/LinkTab";

const RoyceHong = () => {
  const roycehong = 'roycehong'

  return (
    <>
      <div className="grid grid-row-3 mt-1 text-center">
        <DevRoy />
        <LinkTab developer={roycehong} />
        <HeroRoy />
      </div>
    </>
  );
};

export default RoyceHong;
