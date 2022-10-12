import React from "react";
import "./leftbar.css";
import { Link } from "react-router-dom";

export default function Leftbar() {
  return (
    <>
      <div className="leftbarContainer">
        <div className="nameContainer">
          <Link to="/developers/stevelee">
            <span className="devName">Steve Lee</span>
          </Link>
        </div>
        <div className="nameContainer">
          <Link to="/developers/roycehong">
            <span className="devName">Royce Hong</span>
          </Link>
        </div>
      </div>
    </>
  );
}
