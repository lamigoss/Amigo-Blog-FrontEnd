import React from "react";
import Leftbar from "../leftbar/Leftbar";
import Steve from "../../img/steve.jpg";

export default function SteveLee() {
  return (
    <>
      <div className="text-center">
        <img src={Steve} alt="/" />
        <p> Hello this is Steve Lee and I am really gay</p>
      </div>
      <Leftbar />
    </>
  );
}
