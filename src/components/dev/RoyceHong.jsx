import React from "react";
import Leftbar from "../leftbar/Leftbar";
import Roy from "../../img/roy.jpg";

export default function RoyceHong() {
  return (
    <>
      <Leftbar />
      <div className="text-center p-10">
        <div className="p-10">
          <img src={Roy} alt="" />
          <p>This was me(left) in 2018 Halloween at Fort Hood, TX</p>
        </div>
        <div>Hello World, This is Roy's Developer's page.</div>
      </div>
    </>
  );
}
