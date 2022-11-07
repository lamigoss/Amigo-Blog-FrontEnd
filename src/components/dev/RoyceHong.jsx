import React from "react";
import DevRoy from "./Roy/DevRoy";
import HeroRoy from "./Roy/HeroRoy";
import MidRoy from "./Roy/MidRoy";

export default function RoyceHong() {
  return (
    <>
      <div className="grid grid-row-3 mt-1 text-center">
        <DevRoy />
        <HeroRoy />
        <MidRoy />
      </div>
    </>
  );
}
